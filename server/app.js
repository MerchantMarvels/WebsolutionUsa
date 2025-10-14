// app.js

const mysql = require('mysql2/promise');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const db = mysql.createPool({
  host: "147.93.116.124",
  user: "websolutionusa_leads",
  password: "Business@2025",
  database: "websolutionusa_leads",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// CORS for your frontend
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// ✅ one-time startup test (promise API)
(async () => {
  let connection;
  try {
    connection = await db.getConnection();
    await connection.ping();
    console.log("✅ Database connected successfully!");
  } catch (err) {
    console.error("❌ Database connection failed:");
    console.error(err?.message || err);
  } finally {
    if (connection) connection.release();
  }
})();
  

// Webhook BEFORE express.json() to preserve raw body (important if you enable signature verification)
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  // If you enable signing later:
  // const sig = req.headers['stripe-signature'];
  // let event;
  // try {
  //   event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  // } catch (err) {
  //   console.error('Webhook signature verification failed:', err.message);
  //   return res.status(400).send(`Webhook Error: ${err.message}`);
  // }

  const event = req.body;

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Only add Setup-Pack via webhook if NOT already included in Checkout
    const starterPackApplied = session.metadata?.starterPackApplied === 'true';
    const starterPackPriceId =
      session.metadata?.starterPackPriceId || 'price_1SAHQOBea2b6e5c2Z0V30Rwt';

    if (!starterPackApplied && session.subscription && session.customer && starterPackPriceId) {
      try {
        await stripe.invoiceItems.create({
          customer: session.customer,
          price: starterPackPriceId,
          subscription: session.subscription,
          quantity: 1,
        });
      } catch (err) {
        console.error('Failed to add Setup-Pack via webhook:', err);
      }
    }
  }

  res.json({ received: true });
});

// JSON parser for the rest
app.use(express.json());

// Create Checkout Session — includes TWO line items:
// 1) the selected subscription price
// 2) the one-time Setup-Pack price
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { priceId, starterPackPriceId, metadata = {}, billingCycle } = req.body;

    if (!priceId) {
      return res.status(400).json({ error: 'Missing priceId' });
    }

    const line_items = [{ price: priceId, quantity: 1 }];

    if (starterPackPriceId) {
      line_items.push({ price: starterPackPriceId, quantity: 1 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items,
      // 👇 Remove automatic_payment_methods (it isn't supported on your API version)
      // automatic_payment_methods: { enabled: true },

      // If your API version requires it, you can explicitly list methods:
      payment_method_types: ['card'],

      success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/cancel',
      metadata: {
        ...metadata,
        billingCycle: billingCycle || '',
        starterPackApplied: starterPackPriceId ? 'true' : 'false',
        starterPackPriceId: starterPackPriceId || '',
      },
    });

    return res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return res.status(500).json({ error: error.message });
  }
});

// Simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});



// ✅ POST route to create a lead
app.post("/api/create", async (req, res) => {
  const { name, email, phone, source } = req.body;

  // Basic validation
  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO leads (name, email, phone, source) VALUES (?, ?, ?, ?)",
      [name, email, phone, source || null]
    );

    res.status(201).json({ message: "Lead created successfully", id: result.insertId });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Failed to save lead" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

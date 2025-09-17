const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const stripe = require ('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(cors({
  origin: 'http://localhost:3000', // match your frontend's exact origin
  credentials: true, // allow cookies to be sent/received
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Routes
// app.use('/api/auth', authRoutes);
// app.use('/api', googleRoutes);
// app.js
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { priceId } = req.body;
    if (!priceId) {
      return res.status(400).json({ error: 'Missing priceId' });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      // you can omit payment_method_types; Stripe will choose automatically
      success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/cancel',
      // optional:
      // automatic_tax: { enabled: true },
      // automatic_payment_methods: { enabled: true },
    });

    return res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    // In dev it's helpful to see the message; in prod return a generic error
    return res.status(500).json({ error: error.message });
  }
});


app.get('/api/test', (req, res) => {
  res.json({ message: "Hello from backend!" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

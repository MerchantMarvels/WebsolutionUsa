import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./styles/tokens.css";

// use Vite's BASE_URL so it works in dev and build
const basename = import.meta.env.BASE_URL.replace(/\/$/, ""); // strip trailing slash

export default function App() {
  return (
    <Router basename={basename}>
      <Header />
      <Routes>
        <Route path="/pet-grooming" element={<Home />} />
        {/* <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

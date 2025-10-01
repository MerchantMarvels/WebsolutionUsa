import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Global Header */}
        <header className="App-header">
          <Header />
        </header>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
          {/* Add more routes here later */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

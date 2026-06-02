import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Medicines from "./pages/Medicines";
import About from "./pages/About";

import Cart from "./pages/Cart";

import OrdersDashboard from "./pages/OrdersDashboard";

import Chatbot from "./pages/Chatbot";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (medicine) => {
    const existing = cart.find(
  (item) =>
    item.name === medicine.name &&
    item.power === medicine.power
);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.name === medicine.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...medicine, quantity: 1 }]);
    }
  };


const navLink = {
  color: "#2e7d32",
  textDecoration: "none",
  fontWeight: "600",
  padding: "10px 16px",
  borderRadius: "10px",
  fontSize: "15px",
  transition: "0.3s"
};
  return (
    <Router>
      <div
  style={{
    padding: "10px",
    maxWidth: "100%",
    background:
      "linear-gradient(to bottom,#f5fff7,#eef7f0)",
    minHeight: "100vh"
  }}
>

<nav
  style={{
    position: "sticky",
    top: "10px",
    zIndex: 1000,
    margin: "10px auto 30px auto",
    padding: "14px 20px",
    background: "rgba(255,255,255,0.75)",
    backdropFilter: "blur(12px)",
    borderRadius: "18px",
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "900px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)"
  }}
>
          <Link style={navLink} to="/">Home</Link>
          <Link style={navLink} to="/medicines">Medicines</Link>
          <Link style={navLink} to="/cart">Cart ({cart.length})</Link>
          
          <Link style={navLink} to="/about">About</Link>
          
          <Link style={navLink} to="/chat">AI Assistant</Link>
        </nav>

        {/* VERY IMPORTANT – ALL ROUTES MUST BE INSIDE THIS <Routes> BLOCK */}

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/medicines"
            element={<Medicines addToCart={addToCart} />}
          />

          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />

          

          <Route path="/goel-admin-orders-2026" element={<OrdersDashboard />} />

          <Route path="/about" element={<About />} />

          <Route path="/chat" element={<Chatbot addToCart={addToCart} />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Medicines from "./pages/Medicines";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import YourOrders from "./pages/YourOrders";
import OrdersDashboard from "./pages/OrdersDashboard";
import BookConsultation from "./pages/BookConsultation";
import Chatbot from "./pages/Chatbot";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (medicine) => {
    const existing = cart.find((item) => item.name === medicine.name);

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
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "8px 12px",
  borderRadius: "6px",
  background: "rgba(255,255,255,0.15)",
  fontSize: "14px"
};

  return (
    <Router>
      <div style={{ padding: "10px", maxWidth: "100%" }}>

        <nav
  style={{
    marginBottom: "20px",
    padding: "12px",
    background: "#2e7d32",
    borderRadius: "10px",
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    justifyContent: "center"
  }}
>
          <Link style={navLink} to="/">Home</Link>
          <Link style={navLink} to="/medicines">Medicines</Link>
          <Link style={navLink} to="/cart">Cart ({cart.length})</Link>
          <Link style={navLink} to="/orders">Your Orders</Link>
          <Link style={navLink} to="/dashboard">Orders Dashboard</Link>
          <Link style={navLink} to="/about">About</Link>
          <Link style={navLink} to="/contact">Contact</Link>
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

          <Route path="/orders" element={<YourOrders />} />

          <Route path="/dashboard" element={<OrdersDashboard />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          
          <Route path="/appointment" element={<BookConsultation />} />

          <Route path="/chat" element={<Chatbot addToCart={addToCart} />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;

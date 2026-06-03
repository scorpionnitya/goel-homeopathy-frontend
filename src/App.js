import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useState } from "react";

import Home from "./pages/Home";
import Medicines from "./pages/Medicines";
import About from "./pages/About";
import Cart from "./pages/Cart";
import OrdersDashboard from "./pages/OrdersDashboard";
import Chatbot from "./pages/Chatbot";
import { Toaster } from "react-hot-toast";

function App() {

  const [cart, setCart] = useState([]);

  const isMobile = window.innerWidth <= 768;

  // ADD TO CART

  const addToCart = (medicine) => {

    const existing = cart.find(
      (item) =>
        item.name === medicine.name &&
        item.power === medicine.power
    );

    if (existing) {

      setCart(
        cart.map((item) =>
          item.name === medicine.name &&
          item.power === medicine.power
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...medicine,
          quantity: 1
        }
      ]);

    }
  };

  // NAV LINK STYLE

  const navLink = {

    color: "#1f2937",

    textDecoration: "none",

    fontWeight: "700",

    padding:
      isMobile
        ? "10px 14px"
        : "12px 18px",

    borderRadius: "14px",

    background:
      "rgba(255,255,255,0.7)",

    fontSize: "15px",

    transition: "0.3s",

    boxShadow:
      "0 4px 12px rgba(0,0,0,0.05)"
  };

  return (

    <Router>
      <Toaster
  position="top-right"
/>

      <div
        style={{
          padding: "10px",

          maxWidth: "100%",

          background:
            "linear-gradient(to bottom,#f5fff7,#eef7f0)",

          minHeight: "100vh"
        }}
      >

        {/* NAVBAR */}

        <nav
          style={{

            position: "sticky",

            top: "12px",

            zIndex: 1000,

            marginBottom: "30px",

            padding:
              isMobile
                ? "14px"
                : "18px",

            background:
              "rgba(255,255,255,0.75)",

            backdropFilter: "blur(14px)",

            border:
              "1px solid rgba(255,255,255,0.4)",

            borderRadius: "24px",

            display: "flex",

            flexWrap: "wrap",

            gap: "12px",

            justifyContent: "space-between",

            alignItems: "center",

            boxShadow:
              "0 10px 30px rgba(0,0,0,0.08)"
          }}
        >

          {/* LOGO */}

          <div>

            <h1
              style={{
                margin: 0,

                color: "#2e7d32",

                fontWeight: "800",

                fontSize:
                  isMobile
                    ? "24px"
                    : "30px"
              }}
            >
              CureNest
            </h1>

            <p
              style={{
                margin: 0,

                fontSize: "13px",

                color: "#6b7280",

                fontStyle: "italic"
              }}
            >
              Health & Home
            </p>

          </div>

          {/* NAV LINKS */}

          <div
            style={{
              display: "flex",

              gap: "10px",

              flexWrap: "wrap",

              justifyContent: "center"
            }}
          >

            <Link
              style={navLink}
              to="/"
            >
              Home
            </Link>

            <Link
              style={navLink}
              to="/medicines"
            >
              Medicines
            </Link>

            <Link
              style={navLink}
              to="/cart"
            >
              Cart ({cart.length})
            </Link>

            <Link
              style={navLink}
              to="/about"
            >
              About
            </Link>

            <Link
              style={navLink}
              to="/chat"
            >
              AI Assistant
            </Link>

            <Link
  to="/cart"
  style={{
    position: "fixed",

    bottom: "25px",

    right: "25px",

    width: "70px",

    height: "70px",

    borderRadius: "50%",

    background:
      "linear-gradient(135deg,#2e7d32,#4caf50)",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    color: "white",

    fontSize: "30px",

    textDecoration: "none",

    boxShadow:
      "0 12px 30px rgba(46,125,50,0.35)",

    zIndex: 9999
  }}
>
  🛒

  <span
    style={{
      position: "absolute",

      top: "-5px",

      right: "-5px",

      background: "#ef4444",

      color: "white",

      width: "26px",

      height: "26px",

      borderRadius: "50%",

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      fontSize: "13px",

      fontWeight: "700"
    }}
  >
    {cart.length}
  </span>

</Link>

          </div>

        </nav>

        {/* ROUTES */}

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/medicines"
            element={
              <Medicines
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
              />
            }
          />

          <Route
            path="/goel-admin-orders-2026"
            element={<OrdersDashboard />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/chat"
            element={
              <Chatbot
                addToCart={addToCart}
              />
            }
          />

        </Routes>

      </div>

    </Router>
  );
}

export default App;
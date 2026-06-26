import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Medicines from "./pages/Medicines";
import About from "./pages/About";
import Cart from "./pages/Cart";
import OrdersDashboard from "./pages/OrdersDashboard";
import Chatbot from "./pages/Chatbot";
import { Toaster } from "react-hot-toast";
import HomeV2 from "./pages/HomeV2";

function App() {

  const [cart, setCart] =
    useState([]);

    const [showMenu, setShowMenu] = useState(false);

  const isMobile =
    window.innerWidth <= 768;

const hideNavbar = false;

  // ADD TO CART

  const addToCart =
    (medicine) => {

      const existing =
        cart.find(
          (item) =>
            item.name ===
              medicine.name &&
            item.power ===
              medicine.power
        );

      if (existing) {

        setCart(
          cart.map((item) =>
            item.name ===
              medicine.name &&
            item.power ===
              medicine.power

              ? {
                  ...item,
                  quantity:
                    item.quantity + 1
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

useEffect(() => {
  console.log("Cart updated:", cart);
}, [cart]);

  // NAV STYLE

  const navLink = {

    color: "#1f2937",

    textDecoration:
      "none",

    fontWeight: "700",

    padding:
      isMobile
        ? "10px 14px"
        : "12px 18px",

    borderRadius:
      "14px",

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

        {false && (

          <>
            
            <nav
              style={{

                position:
                  "sticky",

                top: "12px",

                zIndex: 1000,

                marginBottom:
                  "30px",

                padding:
                  isMobile
                    ? "14px"
                    : "18px",

                background:
                  "rgba(255,255,255,0.75)",

                backdropFilter:
                  "blur(14px)",

                border:
                  "1px solid rgba(255,255,255,0.4)",

                borderRadius:
                  "24px",

                display: "flex",

                flexWrap: "wrap",

                gap: "12px",

                justifyContent:
                  "space-between",

                alignItems:
                  "center",

                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.08)"
              }}
            >

              {/* LOGO */}

              <div>

                <h1
                  style={{
                    margin: 0,

                    color:
                      "#2e7d32",

                    fontWeight:
                      "800",

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

                    fontSize:
                      "13px",

                    color:
                      "#6b7280",

                    fontStyle:
                      "italic"
                  }}
                >
                  Health & Home
                </p>

              </div>

              {/* LINKS */}

              <div
                style={{
                  display: "flex",

                  gap: "10px",

                  flexWrap:
                    "wrap",

                  justifyContent:
                    "center"
                }}
              >

                <Link
                  style={navLink}
                  to="/"
                >
                  Home
                </Link>

                <div
  style={{
    ...navLink,
    position: "relative",
    cursor: "pointer"
  }}
  onMouseEnter={() => setShowMenu(true)}
  onMouseLeave={() => setShowMenu(false)}
>
  HOMEOPATHY Medicines ▼

  {showMenu && (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 4px)",
        left: "0",
        width: "240px",
        background: "#fff",
        borderRadius: "20px",
        padding: "12px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 9999
      }}
    >
      {[
        "Dilution",
        "Biochemic",
        "BC",
        "R Drops",
        "Mother Tincture"
      ].map((item) => (
        <Link
          key={item}
          to={`/medicines?category=${encodeURIComponent(item)}`}
          style={{
            textDecoration: "none",
            padding: "14px",
            borderRadius: "14px",
            background: "#f5f5f5",
            color: "#111827",
            fontWeight: "600"
          }}
          onClick={() => setShowMenu(false)}
        >
          {item}
        </Link>
      ))}
    </div>
  )}
</div>

                {!isMobile && (

                  <Link
                    style={navLink}
                    to="/cart"
                  >
                    Cart ({cart.length})
                  </Link>

                )}

                {!isMobile && (

                  <Link
                    style={navLink}
                    to="/about"
                  >
                    About
                  </Link>

                )}

                <Link
                  style={navLink}
                  to="/chat"
                >
                  AI Assistant
                </Link>

                {/* FLOATING CART */}

                <Link
                  to="/cart"

                  style={{
                    position:
                      "fixed",

                    bottom:
                      isMobile
                        ? "18px"
                        : "25px",

                    right:
                      isMobile
                        ? "12px"
                        : "25px",

                    width:
                      isMobile
                        ? "60px"
                        : "70px",

                    height:
                      isMobile
                        ? "60px"
                        : "70px",

                    borderRadius:
                      "50%",

                    background:
                      "linear-gradient(135deg,#2e7d32,#4caf50)",

                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    color:
                      "white",

                    fontSize:
                      "30px",

                    textDecoration:
                      "none",

                    boxShadow:
                      "0 12px 30px rgba(46,125,50,0.35)",

                    zIndex: 9999
                  }}
                >

                  🛒

                  <span
                    style={{
                      position:
                        "absolute",

                      top: "2px",

                      right: "2px",

                      background:
                        "#ef4444",

                      color:
                        "white",

                      width:
                        "26px",

                      height:
                        "26px",

                      borderRadius:
                        "50%",

                      display:
                        "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      fontSize:
                        "13px",

                      fontWeight:
                        "700"
                    }}
                  >
                    {cart.length}
                  </span>

                </Link>

              </div>

            </nav>

          </>

        )}

        {/* ROUTES */}

        <Routes>

        <Route
  path="/"
  element={
    <HomeV2
      cart={cart}
    />
  }
/>
      

          <Route
            path="/medicines"

            element={
              <Medicines
                addToCart={
                  addToCart
                }
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
            path="/about"
            element={<About />}
          />

          <Route
            path="/chat"

            element={
              <Chatbot
                addToCart={
                  addToCart
                }
              />
            }
          />
<Route
  path="/goel-admin-orders-2026"
  element={<OrdersDashboard />}
/>

        </Routes>

        {/* FOOTER */}

        {!hideNavbar && (

          <footer
            style={{
              marginTop:
                "80px",

              padding:
                isMobile
                  ? "30px 20px"
                  : "40px",

              background:
                "rgba(255,255,255,0.75)",

              backdropFilter:
                "blur(14px)",

              borderRadius:
                "30px",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.06)"
            }}
          >

            <div
              style={{
                display: "flex",

                flexWrap:
                  "wrap",

                justifyContent:
                  "space-between",

                gap: "30px"
              }}
            >

              {/* BRAND */}

              <div>

                <h2
                  style={{
                    color:
                      "#2e7d32",

                    marginTop: 0
                  }}
                >
                  CureNest
                </h2>

                <p
                  style={{
                    color:
                      "#6b7280",

                    maxWidth:
                      "300px",

                    lineHeight:
                      "1.7"
                  }}
                >
                  Premium healthcare
                  platform focused on
                  trusted medicines
                  and better wellness.
                </p>

              </div>

              {/* CONTACT */}

              <div>

                <h3>
                  Contact
                </h3>

                <p
                  style={{
                    color:
                      "#6b7280"
                  }}
                >
                  📞 +91 7302512068
                </p>

                <p
                  style={{
                    color:
                      "#6b7280"
                  }}
                >
                  📍 Meerut, India,
                  Uttar Pradesh,
                  Mohan Homeopathic
                  Store, 250001
                </p>

              </div>

            </div>

            <hr
              style={{
                margin:
                  "30px 0",

                border:
                  "none",

                borderTop:
                  "1px solid rgba(0,0,0,0.08)"
              }}
            />

            <p
              style={{
                textAlign:
                  "center",

                color:
                  "#6b7280",

                margin: 0
              }}
            >
              © 2026 CureNest.
              All rights reserved.
            </p>

          </footer>

        )}

      </div>

    </Router>
  );
}

export default App;
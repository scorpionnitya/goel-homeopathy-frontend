import React, { useState } from "react";

function Cart({ cart, setCart }) {

  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    address: ""
  });

  // 👉 Total calculate
  const total = cart.reduce((sum, item) => {
    return sum + parseInt(item.price.replace("₹", ""));
  }, 0);

  // 👉 Remove item
  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // 👉 Order function (FIXED)
  const handleOrder = async () => {

    if (loading) return;

    if (!userDetails.name || !userDetails.phone || !userDetails.address) {
      alert("Please fill all details");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://goel-homeopathy-backend-production.up.railway.app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: cart,
          user: userDetails
        })
      });

      // 👇 IMPORTANT FIX
      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      alert(data.message);

      // reset after success
      setCart([]);
      setShowForm(false);
      setUserDetails({
        name: "",
        phone: "",
        address: ""
      });

    } catch (error) {
      console.error(error);
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is empty</p>
      ) : (
        <>
          {/* Cart Items */}
          <div style={{
            display: "grid",
            gap: "15px",
            marginTop: "20px"
          }}>
            {cart.map((item, index) => (
              <div key={index} style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
gap: "10px",
                alignItems: "center"
              }}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>

                <button
                  onClick={() => removeItem(index)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total */}
          <h2 style={{ marginTop: "20px" }}>
            Total: ₹{total}
          </h2>

          {/* Proceed Button */}
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "green",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
                width: "100%"
              }}
            >
              Proceed to Buy
            </button>
          )}

          {/* Contact Form */}
          {showForm && (
            <div style={{
              marginTop: "20px",
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px"
            }}>
              <h3>Enter Contact Details</h3>

              <input
                type="text"
                placeholder="Name"
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              />

              <input
                type="text"
                placeholder="Phone"
                value={userDetails.phone}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, phone: e.target.value })
                }
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              />

              <textarea
                placeholder="Address"
                value={userDetails.address}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, address: e.target.value })
                }
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              />

              <button
                onClick={handleOrder}
                disabled={loading}
                style={{
                  padding: "10px",
                  background: loading ? "gray" : "green",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                {loading ? "Placing Order..." : "Confirm Order"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
import React, { useState } from "react";
import toast from "react-hot-toast";
import getMedicineImage from "../utils/getMedicineImage";
import MobileBackButton from "../components/common/MobileBackButton";

function Cart({ cart = [], setCart }) {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [whatsappURL, setWhatsappURL] = useState("");
  const [whatsappOpened, setWhatsappOpened] = useState(false);
  const [savedOrderId, setSavedOrderId] = useState("");

  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const isMobile = window.innerWidth <= 768;

  // =========================================================
  // PRICE
  // =========================================================

  const getPrice = (item) => {
    if (typeof item.price === "number") {
      return item.price;
    }

    if (typeof item.price === "string") {
      const numericPrice = parseInt(
        item.price.replace(/[₹,\s]/g, ""),
        10
      );

      return Number.isNaN(numericPrice)
        ? 0
        : numericPrice;
    }

    if (
      item.price &&
      typeof item.price === "object"
    ) {
      const firstPrice = Object.values(item.price)[0];
      return Number(firstPrice) || 0;
    }

    return 0;
  };

  // =========================================================
  // TOTALS
  // =========================================================

  const total = cart.reduce(
    (sum, item) =>
      sum +
      getPrice(item) *
        (Number(item.quantity) || 1),
    0
  );

  // No 30% discount is applied in the cart or final billing.

  const totalBottles = cart.reduce(
    (sum, item) =>
      sum + (Number(item.quantity) || 1),
    0
  );

 

  const finalTotal = Math.round(
    total
  );

  // =========================================================
  // REMOVE ITEM
  // =========================================================

  const removeItem = (index) => {
    setCart((currentCart) =>
      currentCart.filter(
        (_, itemIndex) => itemIndex !== index
      )
    );
  };

  // =========================================================
  // DECREASE
  // =========================================================

  const decreaseQuantity = (index) => {
    setCart((currentCart) =>
      currentCart
        .map((item, itemIndex) => {
          if (itemIndex !== index) {
            return item;
          }

          const currentQuantity =
            Number(item.quantity) || 1;

          return {
            ...item,
            quantity: currentQuantity - 1
          };
        })
        .filter(
          (item) =>
            (Number(item.quantity) || 0) > 0
        )
    );
  };

  // =========================================================
  // INCREASE
  // =========================================================

  const increaseQuantity = (index) => {
    setCart((currentCart) =>
      currentCart.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              quantity:
                (Number(item.quantity) || 1) + 1
            }
          : item
      )
    );
  };

  // =========================================================
  // ORDER
  // =========================================================

  const handleOrder = async () => {
    if (loading) return;

    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    if (
      !userDetails.name.trim() ||
      !userDetails.phone.trim() ||
      !userDetails.address.trim()
    ) {
      toast.error("Please fill all details");
      return;
    }

    // Create the ID in the browser so WhatsApp can open immediately,
    // without waiting for the backend/Render server to wake up.
    const now = new Date();
    const datePart = [
      String(now.getFullYear()).slice(-2),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0")
    ].join("");
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    const orderId = `HM${datePart}${now.getTime().toString().slice(-5)}${randomPart}`;

    const orderItems = cart.map((item) => ({
      ...item,
      quantity: Number(item.quantity) || 1
    }));

    const message = `
🟢 *NEW HOMISCARE ORDER*
━━━━━━━━━━━━━━━━━━━━
🆔 *Order ID*
${orderId}

👤 *CUSTOMER*
━━━━━━━━━━━━━━━
Name: ${userDetails.name}
Phone: ${userDetails.phone}

📍 *Address*
${userDetails.address}

━━━━━━━━━━━━━━━━━━━━
🛒 *ORDER ITEMS*
${orderItems.map((item, index) => `
${index + 1}. ${item.name}
${item.power ? `Strength: ${item.power}` : ""}
Qty: ${item.quantity}
Price: ₹${getPrice(item)}
`).join("\n")}
━━━━━━━━━━━━━━━━━━━━
💳 *BILL SUMMARY*
Items Total     : ₹${total}
━━━━━━━━━━━━━━━━━━━━
💰 *TOTAL PAYABLE*
₹${finalTotal}
━━━━━━━━━━━━━━━━━━━━
Payment Status
🟠 Pending
Order Status
🟠 Pending
━━━━━━━━━━━━━━━━━━━━
🌿 HomisCare
Trusted Homeopathy Store
https://homiscare.in
`;

    const url = `https://wa.me/917302512068?text=${encodeURIComponent(message)}`;

    // IMPORTANT: open WhatsApp directly inside the user's click event.
    // This avoids popup blockers and waiting for the backend request.
    setWhatsappURL(url);
    setSavedOrderId(orderId);
    const whatsappWindow = window.open(url, "_blank");

    setWhatsappOpened(Boolean(whatsappWindow));
    setLoading(true);

    // Show a truthful status: WhatsApp opening is not the same as
    // the order being saved, and the customer still needs to press Send.
    if (whatsappWindow) {
      toast.success("WhatsApp opened immediately. Press Send to submit your order.");
    } else {
      toast.error("Your browser blocked WhatsApp. Please allow pop-ups and use the Open WhatsApp button.");
    }

    try {
      const response = await fetch(
        "https://goel-homeopathy-backend-1.onrender.com/api/orders",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId,
            items: orderItems,
            user: {
              name: userDetails.name.trim(),
              phone: userDetails.phone.trim(),
              address: userDetails.address.trim()
            },
            totalAmount: finalTotal
          })
        }
      );

      if (!response.ok) {
        throw new Error("Order could not be saved to the server");
      }

      const data = await response.json();
      const savedId = data?.orderId || orderId;
      setSavedOrderId(String(savedId));
      setOrderPlaced(true);

      if (data?.success) {
        toast.success("Order details saved. Please press Send in WhatsApp.");
      } else {
        toast.success("WhatsApp is open. Please send the order message.");
      }
    } catch (error) {
      console.error("Order save error:", error);
      toast.error(
        "WhatsApp is open, but server saving failed. Please send the WhatsApp message and contact HomisCare if needed."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // ORDER CONFIRMED
  // =========================================================

  if (orderPlaced) {
    return (
      <div
        style={{
          padding: isMobile
            ? "20px"
            : "40px",

          minHeight: "70vh",

          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "30px",
            padding: isMobile
              ? "35px 20px"
              : "50px",

            textAlign: "center",
            maxWidth: "600px",
            width: "100%",

            boxShadow:
              "0 20px 50px rgba(0,0,0,0.08)"
          }}
        >
          <div
            style={{
              fontSize: "80px"
            }}
          >
            ✅
          </div>

          <h1
            style={{
              color: "#2e7d32"
            }}
          >
            Order Details Saved
          </h1>

          <p
            style={{
              color: "#6b7280",
              lineHeight: "1.7"
            }}
          >
            Thank you for choosing
            HomisCare.
            <br />
            <br />
            Your order details have been saved.
            <br />
            <br />
            {whatsappOpened
              ? "WhatsApp has been opened. Please press Send in WhatsApp to submit your order."
              : "WhatsApp did not open automatically. Tap the button below to send your order."}
            {savedOrderId && savedOrderId !== "Pending" && (
              <>
                <br /><br />Order ID: <strong>{savedOrderId}</strong>
              </>
            )}
          </p>

          <a
            href={whatsappURL || undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setWhatsappOpened(true)}
            style={{
              display: "inline-block",
              marginTop: "18px",
              background: "#25D366",
              color: "white",
              textDecoration: "none",
              padding: "15px 24px",
              borderRadius: "14px",
              fontWeight: "700"
            }}
          >
            Open WhatsApp & Send Order
          </a>

          <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: "1.5", marginTop: "14px" }}>
            Please make sure you press Send in WhatsApp. This website cannot verify whether the message was sent.
          </p>

          <button
            onClick={() => {
              setOrderPlaced(false);
              window.location.href = "/";
            }}
            style={{
              marginTop: "30px",
              background:
                "linear-gradient(135deg,#2e7d32,#4caf50)",
              color: "white",
              border: "none",
              padding: "16px 28px",
              borderRadius: "18px",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // =========================================================
  // EMPTY CART
  // =========================================================

  if (cart.length === 0) {
    return (
      <div
        style={{
          padding: isMobile
            ? "20px"
            : "40px"
        }}
      >
        <MobileBackButton />

        <div
          style={{
            textAlign: "center",
            marginTop: "50px"
          }}
        >
          <div
            style={{
              fontSize: "90px"
            }}
          >
            🛒
          </div>

          <h1
            style={{
              color: "#1f2937"
            }}
          >
            Your Cart is Empty
          </h1>

          <p
            style={{
              color: "#6b7280",
              lineHeight: "1.7"
            }}
          >
            Looks like you have not
            added any product yet.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // MAIN CART
  // =========================================================

  return (
    <div
      style={{
        padding: isMobile
          ? "20px"
          : "40px"
      }}
    >
      <MobileBackButton />

      <div
        style={{
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontSize: isMobile
              ? "42px"
              : "58px",
            color: "#2e7d32",
            fontWeight: "800"
          }}
        >
          Your Cart
        </h1>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            isMobile
              ? "1fr"
              : "2fr 1fr",

          gap: "30px",
          marginTop: "40px"
        }}
      >
        {/* LEFT */}
        <div>
          {cart.map((item, index) => {
            const itemPrice =
              getPrice(item);

            return (
              <div
                key={`${item.name}-${item.power || ""}-${index}`}
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: isMobile
                    ? "16px"
                    : "22px",

                  marginBottom: "20px",

                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.08)"
                }}
              >
                <div
                  style={{
                    display: "flex",

                    flexDirection:
                      isMobile
                        ? "column"
                        : "row",

                    alignItems:
                      isMobile
                        ? "center"
                        : "center",

                    gap: "18px"
                  }}
                >
                  {/* IMAGE */}

                  <div
                    style={{
                      width: "110px",
                      height: "110px",

                      flexShrink: 0,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      background: "#f0fdf4",
                      borderRadius: "16px",
                      overflow: "hidden"
                    }}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain"
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display =
                            "none";
                        }}
                      />
                    ) : (
                      getMedicineImage(
                        item.name,
                        item.category,
                        true
                      )
                    )}
                  </div>

                  {/* INFO */}

                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,

                      textAlign:
                        isMobile
                          ? "center"
                          : "left"
                    }}
                  >
                    <h2
                      style={{
                        margin: 0,
                        color: "#1f2937",
                        fontSize: isMobile
                          ? "18px"
                          : "22px"
                      }}
                    >
                      {item.name}
                    </h2>

                    {item.power && (
                      <p
                        style={{
                          color: "#6b7280"
                        }}
                      >
                        Power: {item.power}
                      </p>
                    )}

                    <h3
                      style={{
                        color: "#2e7d32"
                      }}
                    >
                      ₹{itemPrice}
                    </h3>
                  </div>

                  {/* QUANTITY */}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px"
                    }}
                  >
                    <button
                      onClick={() =>
                        decreaseQuantity(index)
                      }
                      style={{
                        width: "44px",
                        height: "44px",
                        border: "none",
                        borderRadius: "12px",
                        background: "#f3f4f6",
                        cursor: "pointer",
                        fontSize: "22px"
                      }}
                    >
                      −
                    </button>

                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: "20px",
                        minWidth: "24px",
                        textAlign: "center"
                      }}
                    >
                      {item.quantity || 1}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(index)
                      }
                      style={{
                        width: "44px",
                        height: "44px",
                        border: "none",
                        borderRadius: "12px",
                        background: "#2e7d32",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "22px"
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() =>
                    removeItem(index)
                  }
                  style={{
                    marginTop: "20px",
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    padding: "10px 18px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontWeight: "600"
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        {/* RIGHT - SUMMARY */}

        <div>
          <div
            style={{
              background: "white",
              borderRadius: "28px",
              padding: "28px",
              height: "fit-content",

              position:
                isMobile
                  ? "static"
                  : "sticky",

              top: "100px",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.08)"
            }}
          >
            <h2>
              Order Summary
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginTop: "20px"
              }}
            >
              <span>Total Items</span>
              <b>{totalBottles}</b>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginTop: "10px"
              }}
            >
              <span>MRP Total</span>
              <b>₹{total}</b>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginTop: "12px"
              }}
            >

            </div>

            <hr />

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                fontSize: "22px",
                fontWeight: "800",
                color: "#2e7d32"
              }}
            >
              <span>
                Final Amount
              </span>

              <span>
                ₹{finalTotal}
              </span>
            </div>

            <p
              style={{
                marginTop: "20px",
                color: "#4b5563",
                fontSize: "14px",
                fontWeight: "600",
                textAlign: "center"
              }}
            >
              Payment QR will be shared
              on WhatsApp after order
              confirmation.
            </p>

            <p
              style={{
                color: "#2e7d32",
                fontSize: "14px",
                fontWeight: "600",
                textAlign: "center"
              }}
            >
              📍 Currently delivering
              only in India
            </p>

            {!showForm && (
              <button
                onClick={() =>
                  setShowForm(true)
                }
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(135deg,#2e7d32,#4caf50)",
                  color: "white",
                  border: "none",
                  padding: "16px",
                  borderRadius: "18px",
                  fontWeight: "700",
                  fontSize: "16px",
                  cursor: "pointer",
                  marginTop: "20px"
                }}
              >
                Proceed to Buy
              </button>
            )}

            <div
              style={{
                marginTop: "20px"
              }}
            >
              <p style={{ color: "#6b7280" }}>
                ✅ Genuine Medicines
              </p>

              <p style={{ color: "#6b7280" }}>
                🔒 Secure Ordering
              </p>

              <p style={{ color: "#6b7280" }}>
                Note:- NO RETURN NO EXCHANGE.
              </p>
            </div>

            {/* FORM */}

            {showForm && (
              <div
                style={{
                  marginTop: "24px"
                }}
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      name: e.target.value
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "14px",
                    border:
                      "1px solid #ddd",
                    marginBottom: "14px",
                    boxSizing: "border-box"
                  }}
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={userDetails.phone}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      phone: e.target.value
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "14px",
                    border:
                      "1px solid #ddd",
                    marginBottom: "14px",
                    boxSizing: "border-box"
                  }}
                />

                <textarea
                  placeholder="Delivery Address"
                  value={userDetails.address}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      address: e.target.value
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "14px",
                    border:
                      "1px solid #ddd",
                    minHeight: "120px",
                    boxSizing: "border-box"
                  }}
                />

                <button
                  onClick={handleOrder}
                  disabled={loading}
                  style={{
                    width: "100%",
                    background: loading
                      ? "#9ca3af"
                      : "linear-gradient(135deg,#2e7d32,#4caf50)",

                    color: "white",
                    border: "none",
                    padding: "16px",
                    borderRadius: "18px",
                    fontWeight: "700",
                    fontSize: "16px",
                    cursor: loading
                      ? "not-allowed"
                      : "pointer",

                    marginTop: "20px"
                  }}
                >
                  {loading
                    ? "Placing Order..."
                    : "Place Order on WhatsApp"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
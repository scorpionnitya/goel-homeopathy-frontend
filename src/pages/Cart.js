import React, { useState } from "react";
import toast from "react-hot-toast";
import getMedicineImage from "../utils/getMedicineImage";
import MobileBackButton from "../components/common/MobileBackButton";

function Cart({ cart, setCart }) {

  const [showForm, setShowForm] = useState(false);

  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const isMobile =
    window.innerWidth <= 768;

  // TOTAL

  const total = cart.reduce(
    (sum, item) => {
const price = item.price
        ? parseInt(
            item.price
              .toString()
              .replace("₹", "")
          )
        : 0;

      return (
        sum +
        price * item.quantity
      );

    },
    0
  );
const discount = Math.round(total * 0.3);

const discountedTotal = total - discount;

const packingCharge = 19;

const deliveryCharge = 29;

const totalAmount =
  discountedTotal +
  packingCharge +
  deliveryCharge;

const roundOff =
  Math.round(totalAmount) -
  totalAmount;

const finalTotal =
  Math.round(totalAmount);

  // REMOVE ITEM

  const removeItem = (index) => {

    const newCart = [...cart];

    newCart.splice(index, 1);

    setCart(newCart);
  };

  // ORDER FUNCTION

  const handleOrder = async () => {

    if (loading) return;

    if (
      !userDetails.name ||
      !userDetails.phone ||
      !userDetails.address
    ) {
      toast.error(
  "Please fill all details"
);
      return;
    }

setLoading(true);

try {

  // Create WhatsApp message
const message = `
🟢 *NEW HOMISCARE ORDER*

━━━━━━━━━━━━━━━━━━━━

🆔 *Order ID*
Generating...

👤 *CUSTOMER*

Name: ${userDetails.name}
Phone: ${userDetails.phone}

📍 *Address*
${userDetails.address}

━━━━━━━━━━━━━━━━━━━━

🛒 *ORDER ITEMS*

${cart.map((item, index) => `
${index + 1}. ${item.name}
${item.power ? `Strength: ${item.power}` : ""}
Qty: ${item.quantity}
Price: ${item.price}
`).join("\n")}

━━━━━━━━━━━━━━━━━━━━

💳 *BILL SUMMARY*

MRP Total       : ₹${total}
Discount (30%)  : -₹${discount}
Packing Charge  : ₹19
Delivery Charge : ₹29

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
// Save order to backend

const response = await fetch(
  "https://goel-homeopathy-backend-1.onrender.com/api/orders",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: cart,
      user: {
        name: userDetails.name,
        phone: userDetails.phone,
        address: userDetails.address,
      },
      totalAmount: finalTotal,
    }),
  }
);

const data = await response.json();

// Replace "Generating..." with actual Order ID

const finalMessage = message.replace(
  "Generating...",
  data.orderId
);

// Create WhatsApp URL

const whatsappURL =
  `https://wa.me/917302512068?text=${encodeURIComponent(finalMessage)}`;
  // Open WhatsApp
  window.open(whatsappURL, "_blank");

  toast.success("Order placed successfully");

  setOrderPlaced(true);

  setTimeout(() => {
    setCart([]);
    setShowForm(false);
    setUserDetails({
      name: "",
      phone: "",
      address: "",
    });
  }, 1000);

} catch (error) {

  console.error(error);

  toast.error("Server error");

} finally {

  setLoading(false);

}
  };

  return (

    <div
      className="fadeUp"
      style={{
        padding:
          isMobile
            ? "20px"
            : "40px"
      }}
    >
      <MobileBackButton />

      {/* HEADING */}

      <div
        style={{
          textAlign: "center"
        }}
      >

        <h1
          style={{
            fontSize:
              isMobile
                ? "42px"
                : "58px",

            color: "#2e7d32",

            fontWeight: "800"
          }}
        >
          Your Cart
        </h1>

      </div>
      {orderPlaced ? (

  <div
    style={{
      marginTop: "60px",

      display: "flex",

      justifyContent: "center"
    }}
  >

    <div
      style={{
        background:
          "rgba(255,255,255,0.8)",

        backdropFilter:
          "blur(14px)",

        borderRadius:
          "30px",

        padding: "50px",

        textAlign: "center",

        maxWidth: "600px",

        width: "100%",

        boxShadow:
          "0 20px 50px rgba(0,0,0,0.08)"
      }}
    >

      <div
        style={{
          fontSize: "90px"
        }}
      >
        ✅
      </div>

      <h1
        style={{
          color: "#2e7d32",

          marginTop: "10px"
        }}
      >
        Order Confirmed
      </h1>

      <p
        style={{
          color: "#6b7280",

          marginTop: "16px",

          lineHeight: "1.7"
        }}
      >
        Thank you for choosing
        Homiscare.

        <br /><br />

        Your order has been
        placed successfully.

        <br /><br />

        Our team will contact
        you shortly on WhatsApp.
      </p>

      <button
        onClick={() =>
          window.location.reload()
        }

        style={{
          marginTop: "30px",

          background:
            "linear-gradient(135deg,#2e7d32,#4caf50)",

          color: "white",

          border: "none",

          padding:
            "16px 28px",

          borderRadius:
            "18px",

          fontWeight:
            "700",

          cursor: "pointer",

          fontSize: "16px"
        }}
      >
        Continue Shopping
      </button>

    </div>

  </div>

) : orderPlaced ? (

  <div
    style={{
      marginTop: "60px",

      display: "flex",

      justifyContent: "center"
    }}
  >

    <div
      style={{
        background:
          "rgba(255,255,255,0.8)",

        backdropFilter:
          "blur(14px)",

        borderRadius:
          "30px",

        padding: "50px",

        textAlign: "center",

        maxWidth: "600px",

        width: "100%",

        boxShadow:
          "0 20px 50px rgba(0,0,0,0.08)"
      }}
    >
      </div>
      </div>

) : cart.length === 0 ? (

  <div
    style={{
      display: "flex",

      justifyContent: "center",

      marginTop: "70px"
    }}
  >
    <div
      style={{
        background:
          "rgba(255,255,255,0.8)",

        backdropFilter:
          "blur(14px)",

        borderRadius:
          "30px",

        padding:
          isMobile
            ? "40px 24px"
            : "60px",

        textAlign: "center",

        maxWidth: "600px",

        width: "100%",

        boxShadow:
          "0 20px 50px rgba(0,0,0,0.08)"
      }}
    >

      <div
        style={{
          fontSize:
            "100px"
        }}
      >
        🛒
      </div>

      <h1
        style={{
          color:
            "#1f2937",

          marginTop:
            "10px"
        }}
      >
        Your Cart is Empty
      </h1>

      <p
        style={{
          color:
            "#6b7280",

          marginTop:
            "14px",

          lineHeight:
            "1.7"
        }}
      >
        Looks like you have not
        added any product yet.
      </p>

    </div>

  </div>

) : (
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

          {/* LEFT SIDE */}

          <div>

            {cart.map(
              (item, index) => (

                <div
                  key={index}

                  style={{

                    background:
                    "rgba(255,255,255,0.75)",

                    backdropFilter:
                    "blur(14px)",

                    borderRadius:
                      "24px",

                    padding: "22px",

                    marginBottom:
                      "20px",

                    boxShadow:
                      "0 10px 25px rgba(0,0,0,0.08)",

                    border:
                      "1px solid rgba(0,0,0,0.04)"
                  }}
                >

<div
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "flex-start" : "center",
    gap: "18px",
    width: "100%",
  }}
>
                    {/* PRODUCT INFO */}

<div
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "center" : "center",
    gap: "16px",
    width: "100%",
  }}
>

  {/* IMAGE */}

<div
  style={{
    width: "90px",

    flexShrink: 0
  }}
>
{getMedicineImage(
  item.name,
  item.category,
  true
)}
  </div>


  {/* TEXT */}

<div
  style={{
    flex: 1,
    minWidth: 0,
    textAlign: isMobile ? "center" : "left",
    width: "100%",
  }}
>

    <h2
      style={{
        margin: 0,

        color:
          "#1f2937"
      }}
    >
      {item.name}
    </h2>

    <p
      style={{
        color:
          "#6b7280",

        marginTop:
          "8px"
      }}
    >
      Power:
      {" "}
      {item.power}
    </p>

    <h3
      style={{
        color:
          "#2e7d32"
      }}
    >
      ₹
      {item.price}
    </h3>

  </div>

</div>

                    {/* QUANTITY */}

                    <div
  style={{
    display: "flex",
    justifyContent: isMobile ? "center" : "flex-end",
    alignItems: "center",
    gap: "12px",
    width: isMobile ? "100%" : "auto",
    marginTop: isMobile ? "12px" : 0,
  }}
>

                      <button
                        onClick={() => {

                          setCart(
                            cart.map(
                              (
                                cartItem
                              ) =>

                                cartItem.name ===
                                  item.name &&
                                cartItem.power ===
                                  item.power

                                  ? {
                                      ...cartItem,

                                      quantity:
                                        cartItem.quantity >
                                        1

                                          ? cartItem.quantity -
                                            1

                                          : 1
                                    }

                                  : cartItem
                            )
                          );

                        }}

                        style={{
                          width: "40px",

                          height:
                            "40px",

                          border:
                            "none",

                          borderRadius:
                            "12px",

                          background:
                            "#f3f4f6",

                          cursor:
                            "pointer",

                          fontSize:
                            "18px"
                        }}
                      >
                        -
                      </button>

                      <span
                        style={{
                          fontWeight:
                            "700",

                          fontSize:
                            "18px"
                        }}
                      >
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => {

                          setCart(
                            cart.map(
                              (
                                cartItem
                              ) =>

                                cartItem.name ===
                                  item.name &&
                                cartItem.power ===
                                  item.power

                                  ? {
                                      ...cartItem,

                                      quantity:
                                        cartItem.quantity +
                                        1
                                    }

                                  : cartItem
                            )
                          );

                        }}

                        style={{
                          width: "40px",

                          height:
                            "40px",

                          border:
                            "none",

                          borderRadius:
                            "12px",

                          background:
                            "#2e7d32",

                          color:
                            "white",

                          cursor:
                            "pointer",

                          fontSize:
                            "18px"
                        }}
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* REMOVE */}

                  <button
                    onClick={() =>
                      removeItem(index)
                    }

                    style={{
                      marginTop: "20px",

                      background:
                        "#ef4444",

                      color: "white",

                      border: "none",

                      padding:
                        "10px 18px",

                      borderRadius:
                        "12px",

                      cursor:
                        "pointer",

                      fontWeight:
                        "600"
                    }}
                  >
                    Remove
                  </button>

                </div>
              )
            )}

          </div>

          {/* RIGHT SIDE */}

          <div>

            <div
              style={{
                background: "white",

                borderRadius:
                  "28px",

                padding: "28px",

                height:
                  "fit-content",

                position:
                  "sticky",

                top: "100px",

                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.08)"
              }}
            >

<h2 style={{ marginTop: 0 }}>
  Order Summary
</h2>
<div
style={{
  display: "flex",
justifyContent: "space-between",
marginTop: "20px"
                }}
              >

                <span>
                  Total Items
                </span>

                <b>
                  {cart.length}
                </b>

              </div>

<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px"
  }}
>
  <span>MRP Total</span>
  <b>₹{total}</b>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
    color: "#16a34a"
  }}
>
  <span>Discount (30%)</span>
  <b>-₹{discount}</b>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px"
  }}
>
  <span>Packing Charge</span>
  <b>₹19</b>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px"
  }}
>
  <span>Delivery Charge</span>
  <b>₹29</b>
</div>
              <hr
  style={{
    margin: "20px 0"
  }}
/>

<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
    fontWeight: "600"
  }}
>
  <span>Total Amount</span>
  <b>₹{totalAmount.toFixed(2)}</b>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
    color: "#666"
  }}
>
  <span>Round Off</span>
  <b>
    {roundOff >= 0 ? "+" : ""}
    ₹{roundOff.toFixed(2)}
  </b>
</div>

<hr
  style={{
    margin: "20px 0"
  }}
/>

<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    fontSize: "22px",
    fontWeight: "800",
    color: "#2e7d32"
  }}
>
  <span>Final Amount</span>

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
  Payment QR will be shared on WhatsApp
  after order confirmation.
</p>

<p
  style={{
    marginTop: "10px",
    color: "#2e7d32",
    fontSize: "14px",
    fontWeight: "600",
    textAlign: "center"
  }}
>
  📍 Currently delivering only in Meerut
</p>

              {/* BUTTON */}
              {!showForm && (

                <button
                  onClick={() =>
                    setShowForm(true)
                  }

                  style={{
                    width: "100%",

                    background:
                      "linear-gradient(135deg,#2e7d32,#4caf50)",

                    color:
                      "white",

                    border: "none",

                    padding:
                      "16px",

                    borderRadius:
                      "18px",

                    fontWeight:
                      "700",

                    fontSize:
                      "16px",

                    cursor:
                      "pointer",

                    marginTop:
                      "20px",

                    boxShadow:
                      "0 10px 25px rgba(46,125,50,0.25)"
                  }}
                >
                  Proceed to Buy
                </button>

              )}

              {/* TRUST BADGES */}

              <div
                style={{
                  marginTop: "20px"
                }}
              >

                <p
                  style={{
                    color:
                      "#6b7280"
                  }}
                >
                  ✅ Genuine Medicines
                </p>

                <p
                  style={{
                    color:
                      "#6b7280"
                  }}
                >
                  🔒 Secure Ordering
                </p>

                 <p
                  style={{
                    color:
                      "#6b7280"
                  }}
                >
                Note:- NO RETURN NO EXCHANGE.
                </p>

              </div>


              {/* FORM */}

              {showForm && (

                <div
                  style={{
                    marginTop:
                      "24px"
                  }}
                >

                  <input
                    type="text"

                    placeholder="Full Name"

                    value={
                      userDetails.name
                    }

                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,

                        name:
                          e.target.value
                      })
                    }

                    style={{
                      width: "100%",

                      padding:
                        "14px",

                      borderRadius:
                        "14px",

                      border:
                        "1px solid #ddd",

                      marginBottom:
                        "14px",

                      outline:
                        "none"
                    }}
                  />

                  <input
                    type="text"

                    placeholder="Phone Number"

                    value={
                      userDetails.phone
                    }

                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,

                        phone:
                          e.target.value
                      })
                    }

                    style={{
                      width: "100%",

                      padding:
                        "14px",

                      borderRadius:
                        "14px",

                      border:
                        "1px solid #ddd",

                      marginBottom:
                        "14px",

                      outline:
                        "none"
                    }}
                  />

                  <textarea
                    placeholder="Delivery Address"

                    value={
                      userDetails.address
                    }

                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,

                        address:
                          e.target.value
                      })
                    }

                    style={{
                      width: "100%",

                      padding:
                        "14px",

                      borderRadius:
                        "14px",

                      border:
                        "1px solid #ddd",

                      minHeight:
                        "120px",

                      outline:
                        "none"
                    }}
                  />

                  <button
                    onClick={
                      handleOrder
                    }

                    disabled={
                      loading
                    }

                    style={{
                      width: "100%",

                      background:
                        loading
                          ? "#9ca3af"
                          : "linear-gradient(135deg,#2e7d32,#4caf50)",

                      color:
                        "white",

                      border:
                        "none",

                      padding:
                        "16px",

                      borderRadius:
                        "18px",

                      fontWeight:
                        "700",

                      fontSize:
                        "16px",

                      cursor:
                        "pointer",

                      marginTop:
                        "20px"
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

      )}

    </div>
  );
}


export default Cart;

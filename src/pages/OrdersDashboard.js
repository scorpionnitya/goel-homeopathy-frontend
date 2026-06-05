import React, { useEffect, useState } from "react";

function OrdersDashboard() {
  const [orders, setOrders] = useState([]);
  const API_URL = "https://goel-homeopathy-backend-1.onrender.com";

  // ✅ fetch orders
  const fetchOrders = async () => {
    try {
      const res = await fetch(`${API_URL}/api/orders/all`)
      const data = await res.json();

      console.log("FETCHED:", data);

      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // ✅ update status
  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`${API_URL}/api/orders/update-status/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ status })
        }
      );

      const data = await res.json();
      console.log("UPDATED RESPONSE:", data);
      alert("Status Updated");

      // 🔥 DIRECT UPDATE UI
      fetchOrders();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Orders Dashboard</h1>

      <button
  onClick={() => {

    localStorage.removeItem(
      "adminAuth"
    );

    window.location.href =
      "/admin-login";
  }}

  style={{
    background: "#ef4444",

    color: "white",

    border: "none",

    padding: "12px 20px",

    borderRadius: "14px",

    cursor: "pointer",

    fontWeight: "700",

    marginBottom: "20px"
  }}
>
  Logout
</button>

      {orders.length === 0 ? (
        <p>No orders available</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ddd",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px"
            }}
          >
            <h3>Order</h3>

            {order.items.map((item, i) => (
              <p key={i}>
                {item.name} - {item.price}
              </p>
            ))}

            <p><b>Name:</b> {order.user?.name}</p>
            <p><b>Phone:</b> {order.user?.phone}</p>
            <p><b>Address:</b> {order.user?.address}</p>

            {/* STATUS */}
            <p>
              <b>Status:</b>{" "}
              <span
                style={{
                  color:
                    order.status === "DELIVERED"
                      ? "green"
                      : order.status === "OUT FOR DELIVERY"
                      ? "orange"
                      : order.status === "CANCELLED"
                      ? "red"
                      :order.status === "PENDING"
                      ?"blue"
                      :order.status === "PACKING"
                      ?"purple"
                      :"black"
                }}
              >
                {order.status || "PENDING"}
              </span>
            </p>
            {order.deliveryOTP && (
              <p>
                <b>Delivery OTP:</b> {order.deliveryOTP}
                </p>
              )}

{/* BUTTONS */}

<div
  style={{
    marginTop: "14px",

    display: "flex",

    gap: "10px",

    flexWrap: "wrap"
  }}
>

  <button
    onClick={() =>
      updateStatus(
        order._id,
        "PENDING"
      )
    }
  >
    Pending
  </button>

  <button
    onClick={() =>
      updateStatus(
        order._id,
        "PACKING"
      )
    }
  >
    Packing
  </button>

  <button
    onClick={() =>
      updateStatus(
        order._id,
        "OUT FOR DELIVERY"
      )
    }
  >
    Out for Delivery
  </button>

  <button
    onClick={() =>
      updateStatus(
        order._id,
        "DELIVERED"
      )
    }
  >
    Delivered
  </button>

  <button
    onClick={() =>
      updateStatus(
        order._id,
        "CANCELLED"
      )
    }

    style={{
      background: "red",

      color: "white"
    }}
  >
    Cancel
  </button>

</div>
          </div>
        ))
      )}
    </div>
  );
}

export default OrdersDashboard;
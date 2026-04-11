import React, { useEffect, useState } from "react";

function OrdersDashboard() {
  const [orders, setOrders] = useState([]);
  const API_URL = "http://localhost:5001/api/orders";

  // ✅ fetch orders
  const fetchOrders = async () => {
    try {
      const res = await fetch(`${API_URL}/all`)
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
      const res = await fetch(`${API_URL}/update-status/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ status })
        }
      );

      const data = await res.json();
      console.log("UPDATED:", data);

      // 🔥 DIRECT UPDATE UI
      setOrders((prev) =>
        prev.map((order) =>
          order._id === id ? { ...order, status } : order
        )
      );

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Orders Dashboard</h1>

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
                      : "blue"
                }}
              >
                {order.status || "PENDING"}
              </span>
            </p>

            {/* BUTTONS */}
            <div style={{ marginTop: "10px" }}>
              <button onClick={() => updateStatus(order._id, "DELIVERED")}>
                Deliver
              </button>

              <button
                onClick={() =>
                  updateStatus(order._id, "OUT FOR DELIVERY")
                }
                style={{ marginLeft: "10px" }}
              >
                Out for Delivery
              </button>

              <button
                onClick={() => updateStatus(order._id, "CANCELLED")}
                style={{
                  marginLeft: "10px",
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
import React, { useEffect, useState } from "react";

function YourOrders() {
  const [orders, setOrders] = useState([]);
  const API_URL = "https://goel-homeopathy-backend-production.up.railway.app";

  useEffect(() => {
    fetch(`${API_URL}/all`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} style={{
            border: "1px solid #ddd",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "8px"
          }}>
            <h3>Order #{index + 1}</h3>

            {order.items.map((item, i) => (
              <p key={i}>
                {item.name} - {item.price}
              </p>
            ))}

            <p><b>Name:</b> {order.user?.name}</p>
            <p><b>Phone:</b> {order.user?.phone}</p>
            <p><b>Address:</b> {order.user?.address}</p>
            <p><b>Status:</b> {order.status || "Pending"}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default YourOrders;
import React, { useState } from "react";

import toast from "react-hot-toast";

function AdminLogin() {

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");



  const handleLogin = () => {

    if (
      username === "admin" &&
      password === "cure2026"
    ) {

      localStorage.setItem(
        "adminAuth",
        "true"
      );

      toast.success(
        "Login successful"
      );

      window.location.href =
  "/goel-admin-orders-2026";

    } else {

      toast.error(
        "Invalid credentials"
      );

    }
  };

  return (

    <div
      style={{
        minHeight: "100vh",

        display: "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        padding: "20px"
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

          padding: "40px",

          width: "100%",

          maxWidth: "420px",

          boxShadow:
            "0 20px 50px rgba(0,0,0,0.08)"
        }}
      >

        <h1
          style={{
            textAlign: "center",

            color: "#2e7d32"
          }}
        >
          Admin Login
        </h1>

        <input
          type="text"

          placeholder="Username"

          value={username}

          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }

          style={{
            width: "100%",

            padding: "14px",

            marginTop: "20px",

            borderRadius:
              "14px",

            border:
              "1px solid #ddd",

            outline: "none"
          }}
        />

        <input
          type="password"

          placeholder="Password"

          value={password}

          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }

          style={{
            width: "100%",

            padding: "14px",

            marginTop: "16px",

            borderRadius:
              "14px",

            border:
              "1px solid #ddd",

            outline: "none"
          }}
        />

        <button
          onClick={handleLogin}

          style={{
            width: "100%",

            marginTop: "24px",

            background:
              "linear-gradient(135deg,#2e7d32,#4caf50)",

            color: "white",

            border: "none",

            padding: "16px",

            borderRadius:
              "18px",

            fontWeight:
              "700",

            cursor: "pointer"
          }}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default AdminLogin;
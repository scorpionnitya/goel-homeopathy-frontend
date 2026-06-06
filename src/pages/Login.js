import React, {
  useState
} from "react";

import toast from "react-hot-toast";

import {
  useNavigate
} from "react-router-dom";

function Login() {

  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
      useState({

        email: "",

        password: ""
      });

  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value
      });
    };

  const handleLogin =
    async () => {

      try {

        const response =
          await fetch(
            "https://goel-homeopathy-backend-1.onrender.com/api/auth/login",
            {

              method: "POST",

              headers: {
                "Content-Type":
                  "application/json"
              },

              body:
                JSON.stringify(
                  formData
                )
            }
          );

        const data =
          await response.json();

        if (
          response.ok
        ) {

          localStorage.setItem(
            "token",
            data.token
          );

          localStorage.setItem(
            "user",
            JSON.stringify(
              data.user
            )
          );

          toast.success(
            "Login successful"
          );
          window.location.href = "/";
        }

        else {

          toast.error(
            data.message
          );
        }

      } catch (error) {

        console.log(error);

        toast.error(
          "Server error"
        );
      }
    };

  return (

    <div
      style={{
        minHeight:
          "100vh",

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

          maxWidth:
            "450px",

          boxShadow:
            "0 20px 50px rgba(0,0,0,0.08)"
        }}
      >

        <h1
          style={{
            textAlign:
              "center",

            color:
              "#2e7d32"
          }}
        >
          Login
        </h1>

        <input
          type="email"

          name="email"

          placeholder="Email"

          onChange={
            handleChange
          }

          style={inputStyle}
        />

        <input
          type="password"

          name="password"

          placeholder="Password"

          onChange={
            handleChange
          }

          style={inputStyle}
        />

        <button
          onClick={
            handleLogin
          }

          style={{
            width: "100%",

            marginTop:
              "24px",

            background:
              "linear-gradient(135deg,#2e7d32,#4caf50)",

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

            cursor:
              "pointer"
          }}
        >
          Login
        </button>
        <p
  style={{
    textAlign: "center",
    marginTop: "20px",
    color: "#6b7280"
  }}
>

  Don't have an account?

  <span
    onClick={() =>
      navigate("/register")
    }

    style={{
      color: "#2e7d32",
      fontWeight: "700",
      cursor: "pointer",
      marginLeft: "6px"
    }}
  >
    Sign Up
  </span>

</p>

      </div>

    </div>
  );
}

const inputStyle = {

  width: "100%",

  padding: "14px",

  marginTop: "16px",

  borderRadius: "14px",

  border:
    "1px solid #ddd",

  outline: "none"
};

export default Login;
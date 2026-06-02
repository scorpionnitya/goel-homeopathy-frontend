import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
  <div style={{ padding: "20px" }}>

    {/* HERO SECTION */}

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
        background:
          "linear-gradient(to right, #e8f5e9, #ffffff)",
        padding: "60px 40px",
        borderRadius: "30px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
      }}
    >

      {/* LEFT */}

      <div style={{ flex: "1", minWidth: "280px" }}>

        <h1
          style={{
            fontSize: window.innerWidth < 768 ? "52px" : "72px",
            marginBottom: "10px",
            color: "#2e7d32",
            lineHeight: "1.1"
          }}
        >
          🌿 CureNest
        </h1>

        <h2
          style={{
            fontStyle: "italic",
            fontWeight: "500",
            color: "#4caf50",
            marginBottom: "25px"
          }}
        >
          Health & Home
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.8",
            maxWidth: "600px",
            color: "#374151"
          }}
        >
          Trusted Homeopathy Care for the Whole Family.
          Experience natural healing with premium medicines,
          AI-powered assistance, and 50+ years of trusted care.
        </p>

        {/* BUTTONS */}

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "30px",
            flexWrap: "wrap"
          }}
        >

          <button
            onClick={() => navigate("/medicines")}
            style={{
              background: "#2e7d32",
              color: "white",
              padding: "14px 28px",
              border: "none",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow:
                "0 8px 20px rgba(46,125,50,0.3)"
            }}
          >
            Shop Medicines
          </button>

          <button
            onClick={() => navigate("/chat")}
            style={{
              background: "white",
              color: "#2e7d32",
              padding: "14px 28px",
              border: "2px solid #2e7d32",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            AI Assistant
          </button>

        </div>

      </div>

    </div>
    {/* TRUST STATS */}

<div
  style={{
    marginTop: "60px",
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "24px"
  }}
>

  {/* CARD 1 */}

  <div
    style={{
      background: "white",
      padding: "22px",
      borderRadius: "24px",
      textAlign: "center",
      boxShadow:
        "0 8px 25px rgba(0,0,0,0.08)"
    }}
  >
    <h1
      style={{
        color: "#2e7d32",
        fontSize: "34px",
        margin: 0
      }}
    >
      50+
    </h1>

    <p style={{ color: "#6b7280" }}>
      Years Experience
    </p>
  </div>

  {/* CARD 2 */}

  <div
    style={{
      background: "white",
      padding: "30px",
      borderRadius: "24px",
      textAlign: "center",
      boxShadow:
        "0 8px 25px rgba(0,0,0,0.08)"
    }}
  >
    <h1
      style={{
        color: "#2e7d32",
        fontSize: "42px",
        margin: 0
      }}
    >
      5000+
    </h1>

    <p style={{ color: "#6b7280" }}>
      Happy Patients
    </p>
  </div>

  {/* CARD 3 */}

  <div
    style={{
      background: "white",
      padding: "30px",
      borderRadius: "24px",
      textAlign: "center",
      boxShadow:
        "0 8px 25px rgba(0,0,0,0.08)"
    }}
  >
    <h1
      style={{
        color: "#2e7d32",
        fontSize: "42px",
        margin: 0
      }}
    >
      1000+
    </h1>

    <p style={{ color: "#6b7280" }}>
      Genuine Medicines
    </p>
  </div>

  {/* CARD 4 */}

  <div
    style={{
      background: "white",
      padding: "30px",
      borderRadius: "24px",
      textAlign: "center",
      boxShadow:
        "0 8px 25px rgba(0,0,0,0.08)"
    }}
  >
    <h1
      style={{
        color: "#2e7d32",
        fontSize: "42px",
        margin: 0
      }}
    >
      AI
    </h1>

    <p style={{ color: "#6b7280" }}>
      Powered Assistance
    </p>
  </div>

</div>

  </div>
  );
}

export default Home;

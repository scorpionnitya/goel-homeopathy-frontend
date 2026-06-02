import { useNavigate } from "react-router-dom";
import heroImage from "../assets/doctor.jpg";

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
            fontSize: "52px",
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
            fontSize: "18px",
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

      {/* RIGHT IMAGE */}

      <div style={{ flex: "1", minWidth: "280px" }}>

        <img
          src={heroImage}
          alt="Healthcare"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "24px",
            objectFit: "cover",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.1)"
          }}
        />

      </div>

    </div>

  </div>
  );
}

export default Home;

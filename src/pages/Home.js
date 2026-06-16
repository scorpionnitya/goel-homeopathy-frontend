import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>

      {/* HERO SECTION */}

      <div
        className="fadeUp glow"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",

          background:
            "linear-gradient(135deg,#e8fff1,#ffffff,#f1fff6)",

          padding:
            window.innerWidth < 768
              ? "35px 25px"
              : "70px 50px",

          borderRadius: "32px",

          boxShadow:
            "0 10px 35px rgba(0,0,0,0.08)"
        }}
      >

        {/* LEFT SECTION */}

        <div style={{ flex: "1", minWidth: "280px" }}>

          {/* BADGE */}

          <div
            style={{
              display: "inline-block",
              background: "#dcfce7",
              color: "#2e7d32",
              padding: "8px 16px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "20px"
            }}
          >
            🌿 Trusted Homeopathy Since 1970
          </div>

          {/* LOGO */}

          <h1
            style={{
              fontSize:
                window.innerWidth < 768
                  ? "52px"
                  : "72px",

              marginBottom: "10px",
              color: "#2e7d32",
              lineHeight: "1.1",
              fontWeight: "800"
            }}
          >
            CureNest
          </h1>

          {/* SUBTITLE */}

          <h2
            style={{
              fontStyle: "italic",
              fontWeight: "600",
              color: "#4caf50",
              marginBottom: "25px",
              fontSize: "28px"
            }}
          >
            Health & Home
          </h2>

          {/* DESCRIPTION */}

          <p
            style={{
              fontSize:
                window.innerWidth < 768
                  ? "17px"
                  : "20px",

              lineHeight: "1.8",
              maxWidth: "650px",
              color: "#374151"
            }}
          >
            Trusted Homeopathy Care for the Whole Family.
            Experience natural healing with premium
            medicines, AI-powered assistance, and
            50+ years of trusted care.
          </p>

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "35px",
              flexWrap: "wrap"
            }}
          >

            {/* SHOP BUTTON */}

            <button
              className="glow"
              onClick={() => navigate("/medicines")}
              style={{
                background:
                  "linear-gradient(135deg,#2e7d32,#4caf50)",

                color: "white",

                padding: "15px 30px",

                border: "none",

                borderRadius: "16px",

                fontSize: "16px",

                fontWeight: "700",

                cursor: "pointer",

                transition: "0.3s",

                boxShadow:
                  "0 10px 25px rgba(46,125,50,0.25)"
              }}
            >
              Shop HOMEOPATHY Medicines
            </button>

            {/* AI BUTTON */}

            <button
              onClick={() => navigate("/chat")}
              style={{
                background: "white",

                color: "#2e7d32",

                padding: "15px 30px",

                border: "2px solid #2e7d32",

                borderRadius: "16px",

                fontSize: "16px",

                fontWeight: "700",

                cursor: "pointer",

                transition: "0.3s",

                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.06)"
              }}
            >
              AI Assistant
            </button>

          </div>

        </div>

      </div>

      {/* TRUST SECTION */}

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
          className="float"
          style={{
            background: "rgba(255,255,255,0.75)",

            padding: "24px",

            borderRadius: "28px",

            textAlign: "center",

            boxShadow:
              "0 10px 30px rgba(0,0,0,0.08)",

            backdropFilter: "blur(10px)",

            border:
              "1px solid rgba(255,255,255,0.4)",

            transition: "0.3s"
          }}
        >
          <h1
            style={{
              color: "#2e7d32",

              fontSize: "34px",

              margin: 0,

              fontWeight: "800"
            }}
          >
            50+
          </h1>

          <p
            style={{
              color: "#6b7280",

              marginTop: "10px",

              fontSize: "16px"
            }}
          >
            Years Experience
          </p>
        </div>

        {/* CARD 2 */}

        <div
          className="float"
          style={{
            background: "rgba(255,255,255,0.75)",

            padding: "24px",

            borderRadius: "28px",

            textAlign: "center",

            boxShadow:
              "0 10px 30px rgba(0,0,0,0.08)",

            backdropFilter: "blur(10px)",

            border:
              "1px solid rgba(255,255,255,0.4)",

            transition: "0.3s"
          }}
        >
          <h1
            style={{
              color: "#2e7d32",

              fontSize: "34px",

              margin: 0,

              fontWeight: "800"
            }}
          >
            5000+
          </h1>

          <p
            style={{
              color: "#6b7280",

              marginTop: "10px",

              fontSize: "16px"
            }}
          >
            Happy Patients
          </p>
        </div>

        {/* CARD 3 */}

        <div
          className="float"
          style={{
            background: "rgba(255,255,255,0.75)",

            padding: "24px",

            borderRadius: "28px",

            textAlign: "center",

            boxShadow:
              "0 10px 30px rgba(0,0,0,0.08)",

            backdropFilter: "blur(10px)",

            border:
              "1px solid rgba(255,255,255,0.4)",

            transition: "0.3s"
          }}
        >
          <h1
            style={{
              color: "#2e7d32",

              fontSize: "34px",

              margin: 0,

              fontWeight: "800"
            }}
          >
            1000+
          </h1>

          <p
            style={{
              color: "#6b7280",

              marginTop: "10px",

              fontSize: "16px"
            }}
          >
            Genuine Medicines
          </p>
        </div>

        {/* CARD 4 */}

        <div
          className="float"
          style={{
            background: "rgba(255,255,255,0.75)",

            padding: "24px",

            borderRadius: "28px",

            textAlign: "center",

            boxShadow:
              "0 10px 30px rgba(0,0,0,0.08)",

            backdropFilter: "blur(10px)",

            border:
              "1px solid rgba(255,255,255,0.4)",

            transition: "0.3s"
          }}
        >
          <h1
            style={{
              color: "#2e7d32",

              fontSize: "34px",

              margin: 0,

              fontWeight: "800"
            }}
          >
            AI
          </h1>

          <p
            style={{
              color: "#6b7280",

              marginTop: "10px",

              fontSize: "16px"
            }}
          >
            Powered Assistance
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;
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

        <div style={{ flex: "1",
minWidth: "320px",
maxWidth: "650px", }}>

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
            🚚 Delivering Across Meerut • 30% OFF Everyday
            
          </div>
          

          {/* LOGO */}

<h1
  style={{
    fontSize:
      window.innerWidth < 768
        ? "46px"
        : "68px",

    lineHeight: "1.1",

    fontWeight: "800",

    color: "#111827",

    marginBottom: "20px"
  }}
>
  Delivering Trusted
  <br />

  <span style={{ color: "#16A34A" }}>
    Homeopathy
  </span>

  <br />

  to Your Doorstep.
</h1>

<p
  style={{
    fontSize: "20px",

    lineHeight: "1.8",

    color: "#4B5563",

    maxWidth: "620px"
  }}
>
  Order genuine homeopathic medicines
  with 30% OFF, AI-powered assistance,
  and quick local delivery across Meerut.
  Trusted healthcare, delivered with a
  modern shopping experience.
</p>

<div
  style={{
    marginTop: "35px",
    marginBottom: "35px",
    display: "flex",
    alignItems: "center",
    background: "#ffffff",
    borderRadius: "18px",
    padding: "8px",
    boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
    width: "100%",
maxWidth: "620px",
    border: "2px solid #ecfdf5"
  }}
>
  <span
    style={{
      fontSize: "22px",
      marginLeft: "15px"
    }}
  >
    🔍
  </span>

  <input
    type="text"
    placeholder="Search 200+ Homeopathy Medicines..."
    style={{
      flex: 1,
      border: "none",
      outline: "none",
      padding: "16px",
      fontSize: "17px",
      background: "transparent"
    }}
  />

  <button
    onClick={() => navigate("/medicines")}
    style={{
      background: "#16A34A",
      color: "white",
      border: "none",
      borderRadius: "14px",
      padding: "14px 24px",
      fontWeight: "700",
      cursor: "pointer"
    }}
  >
    Search
  </button>
</div>

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "12px",
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

                borderRadius: "12px",

                fontSize: "16px",

                fontWeight: "700",

                cursor: "pointer",

                transition: "0.3s",

                boxShadow:
                  "0 10px 25px rgba(46,125,50,0.25)"
              }}
            >
              🛒 Start Shopping
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
              🤖 Ask AI
            </button>

          </div>

        </div>

{/* RIGHT SECTION */}

<div
  style={{
    flex: "1",
minWidth: "320px",
display: "flex",
justifyContent: "center",
marginTop: "30px",
    alignItems: "center"
  }}
>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "20px",
      width: "100%",
      maxWidth: "420px"
    }}
  >

    {[
      {
        icon: "⭐",
        title: "4.9 Rating",
        sub: "Trusted Families"
      },

      {
        icon: "🚚",
        title: "30-45 Min",
        sub: "Fast Delivery"
      },

      {
        icon: "💊",
        title: "200+",
        sub: "Medicines"
      },

      {
        icon: "👨‍👩‍👧‍👦",
        title: "5000+",
        sub: "Happy Families"
      }

    ].map((card, index) => (

      <div
        key={index}
        className="hero-card"
      >

        <div
          style={{
            fontSize: "42px"
          }}
        >
          {card.icon}
        </div>

        <h3>{card.title}</h3>

        <p>{card.sub}</p>

      </div>

    ))}

  </div>

</div>

      </div>

      <div
  style={{
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "28px"
  }}
>

<div className="trust-pill">
✔ 30% OFF
</div>

<div className="trust-pill">
✔ Genuine Medicines
</div>

<div className="trust-pill">
✔ Fast Delivery
</div>

<div className="trust-pill">
✔ AI Powered
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
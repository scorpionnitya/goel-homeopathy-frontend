import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>

      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>
        🌿 Goel Homeopathy
      </h1>

      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "20px auto",
          fontSize: "16px"
        }}
      >
        Welcome to Goel Homeopathy. We are a family-run clinic providing
        safe, natural and personalised homeopathic treatment.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "30px",
          flexWrap: "wrap"
        }}
      >
        <button
          onClick={() => navigate("/appointment")}
          style={{
            padding: "12px 20px",
            background: "#2e7d32",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Book Consultation
        </button>

        <button
          onClick={() => navigate("/medicines")}
          style={{
            padding: "12px 20px",
            background: "#ffffff",
            color: "#2e7d32",
            border: "2px solid #2e7d32",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          View Medicines
        </button>
      </div>

    </div>
  );
}

export default Home;

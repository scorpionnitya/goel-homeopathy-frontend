import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function MobileBackButton() {
  const navigate = useNavigate();
return (
  <button
    onClick={() => navigate(-1)}
    style={{
      position: "fixed",
      top: "20px",
      left: "20px",
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      border: "none",
      background: "#ffffff",
      boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      zIndex: 9999,
    }}
  >
    <FiArrowLeft size={24} color="#111827" />
  </button>
);
}

export default MobileBackButton;
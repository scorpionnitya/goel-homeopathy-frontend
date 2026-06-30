import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function MobileBackButton() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        marginBottom: "15px",
      }}
    >
      <FiArrowLeft
        size={28}
        style={{
          cursor: "pointer",
          color: "#111827",
        }}
        onClick={() => navigate(-1)}
      />
    </div>
  );
}

export default MobileBackButton;
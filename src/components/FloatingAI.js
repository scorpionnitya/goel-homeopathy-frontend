import React from "react";

function FloatingAI() {
  const openAI = () => {
    window.location.href = "/chat";
  };

  return (
    <button
  className="floating-ai-button"
  onClick={openAI}
      aria-label="Open HomisCare AI"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",

        width: "80px",
        height: "80px",

        borderRadius: "50%",
        border: "none",
        background: "linear-gradient(135deg, #2e7d32, #43a047)",
        color: "white",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        cursor: "pointer",
        zIndex: 9999,

        boxShadow: "0 6px 20px rgba(46, 125, 50, 0.35)",
      }}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="6" width="16" height="13" rx="4" />
        <path d="M12 2v4" />
        <path d="M8 11h.01" />
        <path d="M16 11h.01" />
        <path d="M8 15c1.2 1 2.6 1.5 4 1.5s2.8-.5 4-1.5" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
      </svg>
    </button>
  );
}

export default FloatingAI;
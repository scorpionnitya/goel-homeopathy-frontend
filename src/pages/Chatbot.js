import { useState } from "react";

function Chatbot({ addToCart }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // 🎤 Voice Setup
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-IN";

  // 🔊 Speak AI Reply
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    window.speechSynthesis.speak(speech);
  };

  // 🎤 Mic Start
  const startListening = () => {
    recognition.start();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setInput(voiceText);
    };
  };

  // 🤖 AI Function
  const getSuggestion = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("https://goel-homeopathy-backend-production.up.railway.app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();

      const aiMessage = {
        sender: "ai",
        text: data.reply
      };

      setMessages((prev) => [...prev, aiMessage]);

      speak(data.reply);

      setInput("");

    } catch (error) {
      console.error(error);
      alert("AI Error");
    }
  };

  return (
      <div style={{
       width: "95%",
        maxWidth: "500px",
         margin: "15px auto",
        border: "1px solid #ddd",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        fontFamily: "Arial"
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "#2e7d32",
          color: "white",
          padding: "15px",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center"
        }}
      >
        AI Health Assistant 🤖
      </div>

      {/* CHAT AREA */}
      <div
        style={{
          height: "60vh",
          minHeight: "350px",
          overflowY: "auto",
          padding: "15px",
          background: "#f5f5f5"
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              marginBottom: "15px"
            }}
          >
            <span
              style={{
                display: "flex",
flexWrap: "wrap",
gap: "8px",
padding: "10px",
                borderRadius: "20px",
                maxWidth: "75%",
                background:
                  msg.sender === "user" ? "#2e7d32" : "#ffffff",
                color:
                  msg.sender === "user" ? "white" : "black",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
              }}
            >
              {msg.text}
            </span>

            {/* 🛒 Add To Cart Buttons */}
            {msg.sender === "ai" &&
              msg.text.includes("Suggested Medicines:") && (
                <div style={{ marginTop: "10px" }}>
                  {msg.text
                    .split("Suggested Medicines:")[1]
                    .split(",")
                    .map((med, i) => (
                      <button
                        key={i}
                        onClick={() =>
  addToCart({
    name: med.trim(),
    price: "₹199"
  })
}
                        style={{
                          marginRight: "8px",
                          marginTop: "5px",
                          padding: "8px 12px",
                          border: "none",
                          borderRadius: "20px",
                          background: "#2e7d32",
                          color: "white",
                          cursor: "pointer"
                        }}
                      >
                        Add {med.trim()}
                      </button>
                    ))}
                </div>
              )}
          </div>
        ))}
      </div>

      {/* INPUT AREA */}
      <div
        style={{
          display: "flex",
          padding: "10px",
          borderTop: "1px solid #ddd",
          background: "white"
        }}
      >
        <input
          type="text"
          placeholder="Apni problem likho..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: "1 1 220px",
minWidth: "180px",
            padding: "12px",
            borderRadius: "25px",
            border: "1px solid #ccc",
            outline: "none"
          }}
        />

        <button
  onClick={getSuggestion}
  style={{
    marginLeft: "8px",
    padding: "12px 16px",
    minWidth: "50px",
    background: "#2e7d32",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer"
          }}
        >
          ➤
        </button>

        <button
  onClick={startListening}
  style={{
    marginLeft: "8px",
    padding: "12px 15px",
    minWidth: "50px",
    background: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer"
          }}
        >
          🎤
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
import { useState } from "react";

function Chatbot({ addToCart }) {

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);

  const isMobile =
    window.innerWidth <= 768;

  // 🎤 Voice Setup

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  const recognition =
    new SpeechRecognition();

  recognition.continuous = false;

  recognition.lang = "en-IN";

  // 🔊 Speak AI Reply

  const speak = (text) => {

    const speech =
      new SpeechSynthesisUtterance(
        text
      );

    speech.lang = "en-IN";

    window.speechSynthesis.speak(
      speech
    );
  };

  // 🎤 Mic Start

  const startListening = () => {

    recognition.start();

    recognition.onresult = (
      event
    ) => {

      const voiceText =
        event.results[0][0]
          .transcript;

      setInput(voiceText);

    };
  };

  // 🤖 AI Function

  const getSuggestion =
    async () => {

      if (!input.trim()) return;

      const userMessage = {
        sender: "user",
        text: input
      };

      setMessages((prev) => [
        ...prev,
        userMessage
      ]);

      try {

        const res = await fetch(
          "https://goel-homeopathy-backend-1.onrender.com/api/chat",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              message: input
            })
          }
        );

        const data =
          await res.json();

        const aiMessage = {
          sender: "ai",
          text: data.reply
        };

        setMessages((prev) => [
          ...prev,
          aiMessage
        ]);

        speak(data.reply);

        setInput("");

      } catch (error) {

        console.error(error);

        alert("AI Error");

      }
    };

  return (

    <div
      className="fadeUp"
      style={{
        minHeight: "100vh",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        padding:
          isMobile
            ? "15px"
            : "40px"
      }}
    >

      {/* MAIN CONTAINER */}

      <div
        style={{
          width: "100%",

          maxWidth: "900px",

          height:
            isMobile
              ? "90vh"
              : "85vh",

          background:
            "rgba(255,255,255,0.75)",

          borderRadius: "30px",

          overflow: "hidden",

          border:
            "1px solid rgba(255,255,255,0.4)",

          boxShadow:
            "0 20px 50px rgba(0,0,0,0.12)",

          display: "flex",

          flexDirection: "column"
        }}
      >

        {/* HEADER */}

        <div
          style={{
            background:
              "linear-gradient(135deg,#2e7d32,#4caf50)",

            color: "white",

            padding: "22px",

            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",

            flexWrap: "wrap",

            gap: "12px"
          }}
        >

          <div>

            <h2
              style={{
                margin: 0,

                fontSize:
                  isMobile
                    ? "24px"
                    : "28px"
              }}
            >
              CureNest AI
            </h2>

            <p
              style={{
                margin: 0,

                opacity: 0.9,

                marginTop: "4px"
              }}
            >
              Your smart health assistant
            </p>

          </div>

          <div
            style={{
              background:
                "rgba(255,255,255,0.2)",

              padding:
                "10px 16px",

              borderRadius:
                "999px",

              fontWeight: "600"
            }}
          >
            AI Powered
          </div>

        </div>

        {/* CHAT AREA */}

        <div
          style={{
            flex: 1,

            overflowY: "auto",

            padding:
              isMobile
                ? "16px"
                : "24px",

            background:
              "linear-gradient(to bottom,#f9fffb,#eef7f0)"
          }}
        >

          {messages.length === 0 && (

            <div
              style={{
                textAlign: "center",

                marginTop: "80px",

                color: "#6b7280"
              }}
            >

              <h2>
                👋 Welcome to CureNest AI
              </h2>

              <p>
                Ask health-related questions,
                medicine suggestions, or
                wellness guidance.
              </p>

            </div>

          )}

          {messages.map(
            (msg, index) => (

              <div
                key={index}

                style={{
                  textAlign:
                    msg.sender ===
                    "user"

                      ? "right"

                      : "left",

                  marginBottom:
                    "18px"
                }}
              >

                <div
                  style={{
                    display:
                      "inline-block",

                    padding:
                      "16px 18px",

                    borderRadius:
                      "22px",

                    maxWidth:
                      "78%",

                    lineHeight:
                      "1.7",

                    fontSize:
                      "15px",

                    background:

                      msg.sender ===
                      "user"

                        ? "linear-gradient(135deg,#2e7d32,#4caf50)"

                        : "white",

                    color:

                      msg.sender ===
                      "user"

                        ? "white"

                        : "#111827",

                    boxShadow:
                      "0 8px 20px rgba(0,0,0,0.08)"
                  }}
                >
                  {msg.text}
                </div>

              </div>
            )
          )}

        </div>

        {/* INPUT AREA */}

        <div
          style={{
            padding: "18px",

            background: "white",

            borderTop:
              "1px solid rgba(0,0,0,0.05)",

            display: "flex",

            gap: "12px",

            alignItems: "center"
          }}
        >

          {/* INPUT */}

          <input
            type="text"

            placeholder="Describe your problem..."

            value={input}

            onChange={(e) =>
              setInput(
                e.target.value
              )
            }

            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getSuggestion();
              }
            }}

            style={{
              flex: 1,

              padding:
                "16px 20px",

              borderRadius:
                "18px",

              border:
                "1px solid #ddd",

              outline: "none",

              fontSize:
                "15px",

              background:
                "#f9fafb"
            }}
          />

          {/* SEND BUTTON */}

          <button
            onClick={
              getSuggestion
            }

            style={{
              width: "56px",

              height: "56px",

              borderRadius:
                "18px",

              border: "none",

              background:
                "linear-gradient(135deg,#2e7d32,#4caf50)",

              color: "white",

              fontSize: "20px",

              cursor: "pointer",

              boxShadow:
                "0 10px 20px rgba(46,125,50,0.25)"
            }}
          >
            ➤
          </button>

          {/* MIC BUTTON */}

          <button
            onClick={
              startListening
            }

            style={{
              width: "56px",

              height: "56px",

              borderRadius:
                "18px",

              border: "none",

              background:
                "linear-gradient(135deg,#ff9800,#ffb74d)",

              color: "white",

              fontSize: "20px",

              cursor: "pointer"
            }}
          >
            🎤
          </button>

        </div>

      </div>

    </div>
  );
}

export default Chatbot;
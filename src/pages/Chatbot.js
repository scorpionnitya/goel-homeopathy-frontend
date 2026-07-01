import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileBackButton from "../components//common/MobileBackButton";


function Chatbot({ addToCart }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const isMobile =
    window.innerWidth <= 768;
    

  // 🔓 Unlock mobile speech

  const unlockSpeech = () => {

    const utterance =
      new SpeechSynthesisUtterance(
        " "
      );

    window.speechSynthesis.speak(
      utterance
    );
  };

  // 🎤 Voice Setup

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  const recognition =
    SpeechRecognition
      ? new SpeechRecognition()
      : null;

  if (recognition) {

    recognition.continuous = false;

    recognition.lang = "en-IN";
  }

  // 🔊 Speak AI Reply

const speak = (text) => {

  window.speechSynthesis.cancel();

  const speech =
    new SpeechSynthesisUtterance();

  speech.text = text;

  speech.rate = 0.92;

  speech.pitch = 1;

  speech.volume = 1;

  // LOAD VOICES

  const voices =
    window.speechSynthesis.getVoices();

  // PREFER PROFESSIONAL VOICES

  const preferredVoice =

    voices.find((voice) =>
      voice.name.includes("Google UK English Female")
    )

    ||

    voices.find((voice) =>
      voice.name.includes("Samantha")
    )

    ||

    voices.find((voice) =>
      voice.name.includes("Google US English")
    )

    ||

    voices.find((voice) =>
      voice.lang.includes("en")
    );

  if (preferredVoice) {

    speech.voice =
      preferredVoice;
  }

  speech.lang = "en-US";

  // SMALL DELAY = smoother

  setTimeout(() => {

    window.speechSynthesis.speak(
      speech
    );

  }, 100);
};

  // 🎤 Mic Start

const startListening = () => {

  if (!recognition) {
    alert("Voice recognition not supported");
    return;
  }

  console.log("🎤 Recognition started");

  recognition.start();

  recognition.onstart = () => {
    console.log("🎤 Mic is listening...");
  };

recognition.onresult = (event) => {
  console.log(event.results[0][0].transcript);

  const voiceText = event.results[0][0].transcript;

  setInput(voiceText);
};

  recognition.onerror = (event) => {
    console.log("Speech Error:", event.error);
  };

  recognition.onend = () => {
    console.log("🎤 Recognition ended");
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

      const currentInput = input;

      setInput("");

      setLoading(true);

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
              message:
                currentInput
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

        setLoading(false);

        // slight delay for mobile

setTimeout(() => {

  if (recognition) {
    recognition.stop();
  }

  speak(data.reply);

}, 300);

      } catch (error) {

        console.error(error);

        setLoading(false);

        alert("AI Error");
      }
    };

return (

  <div
    className="fadeUp"
    style={{
      position: "relative",
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
      <MobileBackButton />


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
                medicine suggestions,
                or wellness guidance.
              </p>

            </div>

          )}

          {/* CHAT MESSAGES */}

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

          {/* TYPING */}

          {loading && (

            <div
              style={{
                marginBottom: "18px"
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

                  background:
                    "white",

                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.08)"
                }}
              >
                Typing...
              </div>

            </div>

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

                unlockSpeech();

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
            onClick={() => {

              unlockSpeech();

              getSuggestion();
            }}

            disabled={loading}

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

              opacity:
                loading
                  ? 0.7
                  : 1,

              boxShadow:
                "0 10px 20px rgba(46,125,50,0.25)"
            }}
          >
            ➤
          </button>

          {/* MIC BUTTON */}

          <button
            onClick={() => {

              unlockSpeech();

              startListening();
            }}

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
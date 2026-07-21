import { useState, useEffect } from "react";
import MobileBackButton from "../components//common/MobileBackButton";
import consultationQuestions from "../utils/consultationQuestions";


function Chatbot({ addToCart }) {
  const [input, setInput] = useState("");

const [messages, setMessages] = useState([]);
const [loading, setLoading] = useState(false);

const [selectedOption, setSelectedOption] = useState(null);

const [currentStep, setCurrentStep] = useState(0);

const [consultationData, setConsultationData] = useState({});

const [showButtons, setShowButtons] = useState(false);

const [placeholder, setPlaceholder] = useState("");

const [consultationFinished, setConsultationFinished] = useState(false);

const isMobile = window.innerWidth <= 768;

useEffect(() => {

    if(selectedOption!=="symptoms") return;

    const current =
        consultationQuestions[currentStep];

    if(!current) return;

    setPlaceholder(
        current.placeholder || ""
    );

    setShowButtons(
        current.type==="buttons"
    );

},[
currentStep,
selectedOption
]);

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
if (selectedOption === "symptoms") {

  const value = input.trim();

  if (!value) return;

  askNextQuestion(value);

  setInput("");

  return;

}

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
const cardStyle = {
  background: "white",
  border: "none",
  borderRadius: "22px",
  padding: "30px",
  cursor: "pointer",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  transition: "0.3s",
  textAlign: "center"
};
const optionStyle = {

background: "#2e7d32",

color: "white",

border: "none",

padding: "14px 26px",

borderRadius: "18px",

cursor: "pointer",

fontWeight: "600",

fontSize: "15px"

};
const handleOption = (value) => {

  askNextQuestion(value);

};

const askNextQuestion = (answer) => {

  const current = consultationQuestions[currentStep];

  if (!current) return;

  // Save answer

  setConsultationData(prev => ({
    ...prev,
    [current.id]: answer
  }));

  // Show user's answer

  setMessages(prev => [
    ...prev,
    {
      sender: "user",
      text: answer
    }
  ]);

  const nextStep = currentStep + 1;

  // Consultation finished

  if (nextStep >= consultationQuestions.length) {

    setConsultationFinished(true);

    setShowButtons(false);

    setCurrentStep(nextStep);

    setMessages(prev => [
      ...prev,
{
  sender: "bot",
  text: consultationQuestions[nextStep].question
}
    ]);

    return;
  }

  // Ask next question

  setTimeout(() => {

    setMessages(prev => [
      ...prev,
      {
        sender: "ai",
        text: consultationQuestions[nextStep].question
      }
    ]);

    setCurrentStep(nextStep);

  }, 500);

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
              HomisCare AI
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
{messages.length === 0 ? (
  selectedOption ? (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px"
      }}
    >
      <button
        onClick={() => setSelectedOption(null)}
        style={{
          border: "none",
          background: "#f3f4f6",
          padding: "10px 20px",
          borderRadius: "12px",
          cursor: "pointer",
          marginBottom: "25px"
        }}
      >
        ← Back
      </button>

      <h2 style={{ color: "#2e7d32" }}>
        {selectedOption === "symptoms" && "🤒 Symptom Checker"}
        {selectedOption === "medicine" && "💊 Search Medicine"}
        {selectedOption === "information" && "📖 Medicine Information"}
        {selectedOption === "products" && "🛒 Browse Products"}
      </h2>

      <p
        style={{
          color: "#6b7280",
          marginTop: "15px"
        }}
      >
        {selectedOption === "symptoms" &&
          "Describe your symptoms and I'll help you with possible homeopathic medicines."}
        {selectedOption === "medicine" &&
          "Type the medicine name to search."}
        {selectedOption === "information" &&
          "Ask about any homeopathic medicine."}
        {selectedOption === "products" &&
          "Search products available at HomisCare."}
      </p>
    </div>
  ) : (
    <div
      style={{
        textAlign: "center",
        marginTop: isMobile ? "20px" : "40px"
      }}
    >
      <h2
        style={{
          color: "#2e7d32",
          fontSize: isMobile ? "30px" : "38px",
          fontWeight: "800"
        }}
      >
        👋 Welcome to HomisCare AI
      </h2>

      <p
        style={{
          color: "#6b7280",
          marginTop: "10px",
          marginBottom: "40px",
          fontSize: "16px"
        }}
      >
        Your Personal Homeopathy Assistant
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "20px"
        }}
      >
        <button onClick={() => {

  setSelectedOption("symptoms");

  setConsultationStep(0);

  setMessages([
    {
      sender: "ai",
      text:
        "👋 Welcome to HomisCare AI.\n\nLet's begin your consultation.\n\nWhat is your age?"
    }
  ]);

}} style={cardStyle}>
          🤒
          <h3>Symptom Checker</h3>
          <p>Consult AI about your symptoms</p>
        </button>

        <button onClick={() => setSelectedOption("medicine")} style={cardStyle}>
          💊
          <h3>Search Medicine</h3>
          <p>Find any homeopathic medicine</p>
        </button>

        <button onClick={() => setSelectedOption("information")} style={cardStyle}>
          📖
          <h3>Medicine Information</h3>
          <p>Know uses, dosage & precautions</p>
        </button>

        <button onClick={() => setSelectedOption("products")} style={cardStyle}>
          🛒
          <h3>Browse Products</h3>
          <p>Discover HomisCare products</p>
        </button>
      </div>
    </div>
  )
) : null}

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
            
          ))}
                          {showOptions && consultationStep === 1 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "12px",
                      marginTop: "20px",
                      flexWrap: "wrap"
                    }}
                  >
                    <button
                      onClick={() => handleOption("Male")}
                      style={optionStyle}
                    >
                      👨 Male
                    </button>

                    <button
                      onClick={() => handleOption("Female")}
                      style={optionStyle}
                    >
                      👩 Female
                    </button>

                    <button
                      onClick={() => handleOption("Other")}
                      style={optionStyle}
                    >
                      ⚧ Other
                    </button>
                  </div>
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

          {!showOptions && (
            <input
            type="text"

            placeholder="Enter your age..."

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
          )}

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

        </div>

      </div>

    </div>
  );
}


export default Chatbot;
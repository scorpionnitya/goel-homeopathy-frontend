import "./SplashScreen.css";
import logo from "../assets/logo/logo.png";

function SplashScreen() {
  return (
    
<div
  style={{
    width: "100%",
    height: "100vh",
    display: "flex",
    jjustifyContent: "center",
transform: "translateY(35px)",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "60px",
    background: "linear-gradient(to bottom,#f9fff8,#eef8ef)"
  }}
>
        <img
  src={logo}
  alt="HomisCare Logo"
  style={{
    width: "380px",      // Increase/decrease as needed
    maxWidth: "85vw",
    height: "auto",
    display: "block",
    margin: "0 auto"
  }}
/>
<h1
  className="heroheading"
  style={{
    fontSize: "20px",
    fontWeight: "700",
    marginTop: "18px",
    color: "#1E3A2B",
  }}
>
  India's Trusted Homeopathy Store
</h1>

<h2
  className="subheading"
  style={{
    fontSize: "14px",
    marginTop: "10px",
    color: "#6B7280",
    maxWidth: "320px",
    textAlign: "center",
    lineHeight: "1.6",
  }}
>
  Genuine medicines from leading homeopathic brands delivered with care.
</h2>

      </div>
  );
}

export default SplashScreen;
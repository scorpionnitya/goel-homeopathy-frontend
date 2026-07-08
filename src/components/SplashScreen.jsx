import "./../styles/SplashScreen.css";
import logo from "../assets/logo/logo.png";

function SplashScreen() {
  return (
    
    <div className="splash">

      <div className="overlay"></div>

      <div className="content">

        <img
          src={logo}
          alt="HomisCare"
          className="logo"
        />

        <p className="tagline">
          Health • Homeopathy • Wellness
        </p>

        <h2 className="title">
          India's Trusted Homeopathy Store
        </h2>

        <p className="subtitle">
          Genuine medicines from leading homeopathic brands delivered with care.
        </p>

      </div>

    </div>
  );
}

export default SplashScreen;
import "./../styles/SplashScreen.css";
import logo from "../assets/logo/logo.png";

function SplashScreen() {
  return (
    <div className="splash">

      {/* Decorative botanical elements */}
      <div className="leaf leaf-1">🍃</div>
      <div className="leaf leaf-2">🌿</div>
      <div className="leaf leaf-3">🍃</div>
      <div className="leaf leaf-4">🌿</div>
      <div className="leaf leaf-5">🍃</div>
      <div className="leaf leaf-6">🌿</div>

      <div className="splash-glow glow-1"></div>
      <div className="splash-glow glow-2"></div>

      <div className="overlay"></div>

      <div className="content">

        <div className="logo-wrap">
          <img
            src={logo}
            alt="HomisCare"
            className="logo"
          />
        </div>

        <p className="brand-line">
          <span></span>
          Health & Home
          <span></span>
        </p>

        <p className="tagline">
          Health <b>•</b> Homeopathy <b>•</b> Wellness
        </p>

        <h1 className="title">
          India's Trusted
          <strong>Homeopathy Store</strong>
        </h1>

        <div className="title-divider">
          <span></span>
          <i>✦</i>
          <span></span>
        </div>

        <p className="subtitle">
          Genuine medicines from leading homeopathic brands
          <br />
          delivered with care.
        </p>

        <div className="trust-row">

          <div className="trust-item">
            <div className="trust-icon">🌿</div>
            <strong>Genuine</strong>
            <span>Medicines</span>
          </div>

          <div className="trust-item">
            <div className="trust-icon">✓</div>
            <strong>Trusted</strong>
            <span>Brands</span>
          </div>

          <div className="trust-item">
            <div className="trust-icon">🚚</div>
            <strong>Delivered</strong>
            <span>With Care</span>
          </div>

          <div className="trust-item">
            <div className="trust-icon">♥</div>
            <strong>Trusted</strong>
            <span>By Families</span>
          </div>

        </div>

        <div className="loading-section">
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>

          <div className="loading-text">
            <span className="loading-dot"></span>
            Preparing your experience...
          </div>
        </div>

      </div>

    </div>
  );
}

export default SplashScreen;
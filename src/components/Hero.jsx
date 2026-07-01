import './Hero.css'

function Hero() {
  return (
    <div className="hero-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-name">Emily Whitney</h1>
        <p className="hero-tagline">software development, engineering, and research</p>
      </div>
    </div>
  )
}

export default Hero

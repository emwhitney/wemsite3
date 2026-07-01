import './Bio.css'

function Bio() {
  return (
    <div className="bio-container">
      <h2 className="section-title">About Me</h2>
      <div className="bio-content">
        <div className="bio-intro">
          <p className="bio-text">
            I'm a <strong>software engineer and researcher</strong> passionate about building 
            elegant solutions to complex problems. My work spans across web development, 
            artificial intelligence, and systems design.
          </p>
          <p className="bio-text">
            With a strong foundation in computer science and a love for continuous learning, 
            I enjoy exploring the intersection of technology and creativity. I believe in 
            writing clean, maintainable code and creating experiences that delight users.
          </p>
        </div>
        
        <div className="bio-skills">
          <h3 className="skills-title">Technologies I Work With</h3>
          <div className="skills-grid">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Machine Learning</span>
            <span className="skill-tag">Cloud Architecture</span>
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">Data Science</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio

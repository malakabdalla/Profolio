import { useState } from "react";
import "./SkillsToggle.css";

function SkillsToggle() {
  const [showSkills1, setShowSkills1] = useState(true);
  const [buttonLabel, setButtonLabel] = useState("Show Professional Skills");

  const toggleSkills = () => {
    setShowSkills1(!showSkills1);
    setButtonLabel(
      showSkills1 ? "Show Technical Skills" : "Show Professional Skills"
    );
  };

  return (
    <div className="flip-container">
      <div className="flipper">
        <div className="front">
          <button onClick={toggleSkills} className="toggle-button">
            {buttonLabel}
          </button>
        </div>
        <div className="back">
          {showSkills1 ? (
            <div>
              <h2 className="toggle-skill-title">Technical Skills</h2>
              <div className="skill-container">
                <ul className="list-skill">
                  <li className="list-item">HTML5</li>
                  <li className="list-item">CSS</li>
                  <li className="list-item">JavaScript</li>
                  <li className="list-item">Git</li>
                  <li className="list-item">SQL</li>
                  <li className="list-item">Figma</li>
                  <li className="list-item">Bootstrap</li>
                  <li className="list-item">Redux</li>
                  <li className="list-item">React</li>
                  <li className="list-item">Render</li>
                  <li className="list-item">AWS</li>
                  <li className="list-item">Express.js</li>
                  <li className="list-item">Figma</li>
                  <li className="list-item">Docker</li>
                  <li className="list-item">Trello</li>
                  <li className="list-item">Node.js</li>
                  <li className="list-item">Webflow</li>
                  <li className="list-item">Python</li>
                  <li className="list-item">Gsap</li>
                  <li className="list-item">Email.js</li>
                  <li className="list-item">Jest</li>
                  <li className="list-item">OOP</li>
                  <li className="list-item">Spline</li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="toggle-skill-title">Professional Skills</h2>
              <ul className="list-skill">
                <li className="list-item">Decision Making</li>
                <li className="list-item">Reflective Practice</li>
                <li className="list-item">Professionalism</li>
                <li className="list-item">Resilience</li>
                <li className="list-item">scientific Dissemination</li>
                <li className="list-item">Ensuring Quality</li>
                <li className="list-item">Inter Professional Partnerships</li>
                <li className="list-item">Creativity</li>
                <li className="list-item">Project Management</li>
                <li className="list-item">Problem solving</li>
                <li className="list-item">Flexibility</li>
                <li className="list-item">Communication</li>
                <li className="list-item">organization</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SkillsToggle;

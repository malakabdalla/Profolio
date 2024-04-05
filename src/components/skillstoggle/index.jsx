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
                <img src="src\icons\icons.png" />
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

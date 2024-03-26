/* eslint-disable no-irregular-whitespace */
import { useState, useEffect } from "react";
import "./project1.css";
function Project1() {
  const githubRepoUrl = "https://github.com/malakabdalla/revision-react-app";
  const demoUrl = "https://revision-react-app.onrender.com/";
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const open = document.getElementById("open");
    const close = document.getElementById("close");
    const container = document.getElementById("container");

    if (open && close && container) {
      open.addEventListener("click", () => {
        container.classList.add("active");
      });

      close.addEventListener("click", () => {
        container.classList.remove("active");
      });
    }

    return () => {
      if (open && close) {
        open.removeEventListener("click", () => {
          container.classList.add("active");
        });

        close.removeEventListener("click", () => {
          container.classList.remove("active");
        });
      }
    };
  }, []);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="projectcon">
        <h1 className="project-name">First Revision Website</h1>
        <img className="proImg" src="/project1.png" />
        <div>
          <button className="button-project" onClick={togglePopup}>
            Want to know more about the project?
          </button>

          <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
            <button className="button-project">Go to GitHub Repo</button>
          </a>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <button className="button-project">Try Demo</button>
          </a>
        </div>
      </div>
      {showPopup && (
        <div className="popup" id="container">
          <div className="popup-content">
            <span id="close" className="close" onClick={togglePopup}>
              &times;
            </span>
            <h3 className="titles">Problem statement </h3>
            <p className="para">
              Our existing clientele have a demand for effective, enjoyable and
              accessible remote learning.​ Crammer Education are looking to
              increase their customer base with a new application focusing on
              revision.​ Market Leader
            </p>
            <h3 className="titles">–Main summary– </h3>
            <p className="para">
              Need for innovation​ Clear logical design​ Help with focus​ Up to
              date with curriculum changes
            </p>

            <h3 className="titles">Team Roles </h3>
            <p className="para">Project manager - Rob McDougall</p>
            <p className="para">Frontend lead - Malak Abdalla</p>
            <p className="para">Backend lead - Rares Gamanescu</p>
            <p className="para">Frontend engineer - Nishan Dudakia</p>
            <h3 className="titles"> MoSCoW </h3>
            <p className="para">
              --MUST-- ROrganisational dashboard containing:​ Functional
              calendar with ability to set reminders​ Sticky notes​ Todo-list​
              Section for motivational quotes​ Timer
            </p>
            <p className="para">
              --SHOULD--Note-taking page with embedded video and timestamps
            </p>
            <p className="para">
              --COULD-- Expandable pages for each dashboard component to give
              more useability.​ Teacher/Tutor accounts with shareable
              curriculums for their students​ Personal colour/design
              customisation .​ Additional dashboard components.​ Ability to drag
              and drop dashboard components, creating own layout to suit needs.​
              Flashcard page for creating and reviewing own revision cards.​ ​
            </p>
            <h3 className="titles">stakeholder Analysis </h3>
            <img className="picPopup3" src="./stakeRivision.png" />
            <h3 className="titles">Risk assessment</h3>
            <img className="picPopup3" src="./riskrevision.png" />
          </div>
        </div>
      )}
    </>
  );
}

export default Project1;

/* eslint-disable no-irregular-whitespace */
import { useState, useEffect } from "react";
import "./project4.css";
function Project4() {
  const githubRepoUrl =
    "https://github.com/malakabdalla/Rock-Paper-scissors-game?tab=readme-ov-file";
  const demoUrl = "https://malakabdalla.github.io/Rock-Paper-scissors-game/";
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
        <h1 className="project-name">Rock paper scissors Game</h1>
        <img className="proImg" src="/project4.png" />
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
            <h3 className="titles">–Main summary– </h3>
            <p className="para">
              his project is one of the first apps that I made when I started
              learning to code, it is a simple game that will aid you to play
              ROCK paper scissors with a randomized AI.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Project4;

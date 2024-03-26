/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import "./project2.css";

function Project2() {
  const githubRepoUrl =
    "https://github.com/malakabdalla/Pokemon?tab=readme-ov-file";
  const demoUrl = "https://pokemon-onac.onrender.com/";
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
        <h1 className="project-name">Pokemon Mine Website</h1>
        <img className="proImgpoke" src="/project2.png" />
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
              Create a Pokemon App using the Pokemon API Requirements are: Write
              a form where users can enter a pokemon name and your app fetches
              and displays that pokemon's data as you see fit When a request
              hasn't been made yet, show "no pokemon yet, please submit a
              pokemon!" While fetching the pokemon data, show a loading screen
              Display the pokemon data as soon as it arrives
            </p>
            <h3 className="titles">–Main summary– </h3>
            <p className="para">
              This is an App based on the Pokemon API
              `https://pokeapi.co/api/v2/pokemon/ it shows a pokemon details
              based on the name of the pokemon you request, the App will give
              you an error if the pokemon is not found it will show a loading
              message if it is taking long to render
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Project2;

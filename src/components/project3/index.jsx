import { useState, useEffect } from "react";
import "./project3.css";

function Project3() {
  const githubRepoUrl =
    "https://github.com/malakabdalla/superhero-react-app?tab=readme-ov-file";
  const demoUrl = "https://mt-fe-s1.onrender.com/conversation";
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
        <h1 className="project-name">Mother Tongue</h1>
        <img className="proImg" src="/project3.png" />
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
              People in the UK who have heritage elsewhere. They do not have the
              spoken language skills to connect with their relatives or converse
              with their peers. We’re trying People who are English speakers,
              who have knowledge of their mother tongue but not enough to speak
              it confidently.
            </p>
            <h3 className="titles">–Main summary– </h3>
            <p className="para">
              Parents moved to UK User was born and raised in UK Parents didn’t
              teach their native tongue to their children so English is their
              main language User has difficulties connecting with older
              generation who cannot speak much English as well as those who
              share the same heritage.
            </p>
            <p className="para">
              The UK can be a great place to live. People from across the world
              travel here to start a new life.
            </p>
            <p className="para">
              But it is easy to become disconnected from your roots. Many people
              lose connection with the language their family natively speak, and
              consequently the massive cultural benefits that come with it;
              becoming disconnected from a wealth of knowledge and meaning, a
              rich cultural heritage.
            </p>
            <p className="para">
              We want to change this, by creating an app that allows users to
              practise their mother tongue by simulating vocal conversations
              with an AI.
            </p>
            <p className="para">
              bridges the gap between native English speakers from migrant
              families and their deep roots abroad. Reconnect with your mother
              tongue, using a seamless voice interface, and natural language
              processing.
            </p>
            <p className="para">
              A lot of people nowadays learn languages from other people but
              they do not get the chance to practise it and end up forgetting
              it. Using an AI will give people the chance to practise it in an
              environment where they do not feel judged. A lot of languages that
              are not English are heavy on pronunciation so this will audibly
              guide the user.
            </p>
            <h3 className="titles">Team Roles </h3>
            <p className="para">Project manager - Kazeem</p>
            <p className="para">Frontend lead - Alex</p>
            <p className="para">Backend lead - Malak</p>
            <p className="para">
              Core business logic lead (prompt engineering) - Nishan
            </p>
            <p className="para">Testing lead - Rahma</p>
            <h3 className="titles"> MoSCoW </h3>
            <p className="para">
              --MUST-- Record audio - user input AI to respond in the given
              language
            </p>
            <p className="para">
              --SHOULD-- Store the conversations as transcripts for reference
            </p>
            <p className="para">
              --COULD-- Store the conversations as audio file for reference -
              recording the sessions/ convos More languages-language selection
              page Determine user’s improvement Upload video and images
            </p>
            <h3 className="titles">User flowchart </h3>
            <img className="picPopup3" src="./Screenshot_1.png" />
          </div>
        </div>
      )}
    </>
  );
}

export default Project3;

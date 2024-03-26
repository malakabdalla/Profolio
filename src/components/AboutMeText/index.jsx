/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import "./text.css";

function TextSection() {
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
      <div className="text-container">
        <h2 className="titles">Welcome to my world</h2>
        <div>
          <p className="para">
            Hi, I'm Malak, a passionate developer skilled in web development and
            various programming languages. I thrive on challenges and possess a
            strong grasp of software development principles. With Agile
            expertise, I excel in dynamic team environments, delivering
            innovative solutions that drive forward-thinking initiatives.
          </p>
          <p className="para">
            Aside from programming I enjoy fencing, cycling, archery, and horse
            riding.
          </p>
        </div>
        <button id="open" className="go-button" onClick={togglePopup}>
          Want to get to know me more?
        </button>
      </div>
      {showPopup && (
        <div>
          <div className="popup" id="container">
            <div className="popup-content">
              <button id="close" className="close" onClick={togglePopup}>
                &times;
              </button>
              <h3 className="titles"> Bridging Innovation with Passion </h3>
              <p className="para">
                Fascinated by the rapid evolution of technology and driven by a
                passion for innovation, I decided to embark on a journey with La
                Fosse Academy. The 12-week intensive training I underwent there
                was an eye-opener, providing me with invaluable insights into
                various facets of the tech industry, including web development,
                architectural thinking, and infrastructure. Through
                collaborative team projects, I honed my skills in Agile
                methodologies, understanding their significance in fostering
                effective team dynamics.
              </p>

              <p className="para">
                My background in Pharmacy has equipped me with essential
                collaborative skills. During my degree, I actively engaged in
                team-based learning exercises, fostering the ability to work
                effectively in collaborative tech environments. Additionally, my
                passion for technology led me to build my own computer during my
                university years, showcasing my proactive approach and technical
                acumen.
              </p>
              <img className="picPopup" src="./pharmacy.png" />
              <p className="para">
                In previous roles, such as my stint as a Food Analyst at Micro
                Search Lab, precision and attention to detail were paramount.
                Crafting samples with utmost accuracy demanded a keen eye and
                strong memory. Similarly, my experience as a caregiver and
                session supervisor at Friends Of Bright Eyes (FOBE) taught me
                the importance of empathy and communication, especially when
                working with autistic children.
              </p>
              <p className="para">
                Aside from technical skills, I've cultivated a range of
                professional competencies, including decision-making and
                resilience. Continuous learning and embracing new technologies
                remain at the core of my career aspirations, driving my desire
                to make meaningful contributions to the tech sector.
              </p>

              <p className="para">
                Beyond work, I indulge in various hobbies such as cycling, horse
                riding, archery, and fencing, which provide a well-rounded
                balance to my professional pursuits.
              </p>
              <img className="picPopup2" src="./activities.png" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TextSection;

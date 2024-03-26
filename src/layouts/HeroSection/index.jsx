import WordLooper from "../../components/WordLooper";
import "./HeroSection.css";

function HeroSection() {
  const words = [
    "React",
    "Redux",
    "Javascript",
    "HTML5",
    "Render",
    "AWS",
    "Bootstrap",
    "Express.js",
    "SQL",
    "Figma",
    "Docker",
    "Jest",
    "Trello",
    "Node.js",
    "Email.js",
    "Gsap",
    "webflow",
    "Axios",
    "Redux",
    "python",
    "Jest",
    "Flask",
    "OOP",
    "Spline",
  ];
  return (
    <>
      <div className="heroSection">
        <div className="name-section">
          <p className="line-1">Hello, I am Malak Abdalla</p>

          <WordLooper words={words} />
        </div>
        <div>
          <img className="pic" src="/mypic1.png" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;

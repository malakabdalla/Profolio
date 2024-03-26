import Project1 from "../../components/Project1";
import Project2 from "../../components/Project2";
import Project3 from "../../components/project3";
import Project4 from "../../components/project4";
import "./projectSection.css";

function ProjectSection() {
  const githubRepoUrl = "https://github.com/malakabdalla?tab=repositories";
  return (
    <>
      <div className="project-container">
        <p className="title-projects">Projects I worked on</p>
        <div className="flex-container">
          <div>
            <Project3 />
          </div>
          <div>
            <Project1 />
          </div>
          <div>
            <Project4 />
          </div>
          <div>
            <Project2 />
          </div>
          <div>
            <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
              <button className="more-btn">More projects</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSection;

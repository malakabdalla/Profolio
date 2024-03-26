import HeroSection from "../../layouts/HeroSection";
import AboutMe from "../../layouts/AboutMeTextPhoto";
import ProjectSection from "../../layouts/ProjectsSection";
import Skills from "../../layouts/SkillsSection";
import { Element } from "react-scroll";
import ContactArea from "../../layouts/ContactSection";

function HomePage() {
  return (
    <div>
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="skill">
        <Skills />
      </Element>
      <Element name="projects">
        <ProjectSection />
      </Element>
      <Element name="contact">
        <ContactArea />
      </Element>
    </div>
  );
}

export default HomePage;

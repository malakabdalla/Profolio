import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./PageWrapper.css";
import Toggle from "../../components/Toggle";
import Footer from "../../components/footer";

const PageWrapper = () => {
  return (
    <>
      <div className="page-container">
        <nav>
          <div className="logo-container">
            <NavLink to="/">
              <p className="logo">Malak Abdalla</p>
            </NavLink>
          </div>
          <ul className="Nav-links">
            <div className="nav-links">
              <Link to="home" smooth={true} duration={500}>
                <button className="navButton">Home</button>
              </Link>
              <Link to="about" smooth={true} duration={500}>
                <button className="navButton">About Me</button>
              </Link>
              <Link to="skill" smooth={true} duration={500}>
                <button className="navButton">Skills</button>
              </Link>
              <Link to="projects" smooth={true} duration={500}>
                <button className="navButton">Projects</button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <button className="navButton">Contact Me</button>
              </Link>
            </div>
            <Toggle />
          </ul>
        </nav>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default PageWrapper;

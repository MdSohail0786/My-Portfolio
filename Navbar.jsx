import { useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

// import { link } from "react-router-dom";
const Navbar = () => {
  function showSidebar() {
    const sidelinks = document.querySelector(".sidelinks");
    sidelinks.style.display = "flex";
  }

  function hideSidebar() {
    const sidelinks = document.querySelector(".sidelinks");
    sidelinks.style.display = "none";
  }
  const About = useRef();
  const Skill = useRef();
  const Project = useRef();
  const Resume = useRef();
  const Contect = useRef();

  const scrollHandlar = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: elmRef.current?.offsetTop, behavior: "smooth" });
  };
  return (
    <nav className="navbar">
      <h3>WEB DEV</h3>
      <div className="links">
        <a
          onClick={() => scrollHandlar(About)}
          className="nav-link"
          href="#about"
        >
          About
        </a>
        <a
          onClick={() => scrollHandlar(Skill)}
          className="nav-link"
          href="#skill"
        >
          skill
        </a>

        <a
          onClick={() => scrollHandlar(Project)}
          className="nav-link"
          href="#project"
        >
          project
        </a>

        <a
          onClick={() => scrollHandlar(Resume)}
          className="nav-link"
          href="#resume"
        >
          Resume
        </a>

        <a
          onClick={() => scrollHandlar(Contect)}
          className="nav-link"
          href="#contect"
        >
          Contect
        </a>
      </div>

      {/* <div classNameName="btons">
        <button classNameName="bton"> HIRE ME </button>
      </div> */}
      <div onClick={showSidebar} className="manu">
        <a href="#">
          <FiMenu />
        </a>
      </div>

      <div className="sidelinks">
        <div onClick={hideSidebar} className="close">
          <a href="#">
            <IoClose />
          </a>
        </div>
        <a className="nav-link" href="#">
          About
        </a>

        <a className="nav-link" href="#">
          skill
        </a>

        <a className="nav-link" href="#">
          project
        </a>

        <a className="nav-link" href="#">
          Resume
        </a>

        <a className="nav-link" href="#">
          Contect
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

import { FaLinkedin } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const First = () => {
  return (
    <>
      <div className="main">
        <div className="left">
          <p className="text">
            <h2>Hello'</h2>
            <h3>
              I AM <br></br>MD SOHAIL
            </h3>
            <h4>I Am Front End Devloper</h4>
          </p>
          <div className="right-button">
            <button class="right-1">HIRE ME </button>
            <button class="right-2">RESUME </button>
          </div>
          <br></br>
          <div className="logos">
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <ImWhatsapp />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="right1">
          <div class="box">
            <img src="pic1.jpg-Photoroom.png" alt="Portfolio pic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default First;

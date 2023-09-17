import React from "react";
import { Link } from "react-scroll";
import "./intro.css";
import btnImg from "../../assets/hireme.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Ashish</span>
          <br />
          Front End Devloper
          <p className="introPara">
            {" "}
            I am a skilled web Devloper with hand on knowladge of creating
            <br />
            dynamic web pages visually appealing and user friendly websites,
          </p>
          <Link>
            <button className="btn">
              <img src={btnImg} alt="Hire me" className="btnImg" />
              Hire me
            </button>
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Intro;

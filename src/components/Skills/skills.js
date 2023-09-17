import React from "react";
import "./skills.css";
import UiDesign from "../../assets/ui-ux.png";
import WebDesign from "../../assets/website-designn.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with hands on knowladge of
        creating visually appealing and user-friendly website.I have a basics of
        desgin and a keep eye for detail.i am proficent in HTML, CSS and
        JavaScript.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UiDesign} alt="UiDesign " className="skillBarImg" />
          <div className="skillBarText">
            <h2>Ui/Ux Design</h2>
            <p>This is a demo text,You can write your own content here </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign " className="skillBarImg" />
          <div className="skillBarText">
            <h2> Web Design</h2>
            <p>This is a demo text,You can write your own content here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

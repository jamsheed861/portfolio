import React from "react";
import "./about.css";
import about from "../../image/about.jpg";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="a-left">
          <div className="a-cardback"></div>
          <div className="a-card">
            <img src={about} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About me</h1>
          <p className="a-sub">
            <strong>Hi,</strong> I am a web developer with good expertise in
            HTML, CSS, Bootstrap, Reactjs, Javascript
          </p>
          {/* <p className="a-desc">
            <strong>I'am</strong> a web developer and web designer from Jammu
            and Kashmir. I enjoy taking complex problems and truning them into
            simple and beautiful interface designs. I also love th logic and
            structure of coding and always strive to write lelgant and efficient
            code. Whether it be HTML, CSS, or Reactjs.
          </p> */}
          
          <div className="skills">
          <p className="skl">Skills</p>
            
             HTML       <progress className="prog" value='60' max='100'/>
             CSS       <progress  className="prog" value='50'  max='100'/>
             ReactJs   <progress  className="prog" value='47'  max='100'/>
             BootStrap <progress  className="prog" value='53'  max='100'/>
          </div>
          {/* <div className="a-award">
            <img src={about} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h2 className="a-award-title">international design</h2>
              <p className="a-award-desc">
                the quick brown fox jumps over a lazy dog the quick brown fox
                jumps over a lazy dog
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;

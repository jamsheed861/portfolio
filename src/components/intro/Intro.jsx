import React from "react";
import "./intro.css";
import me from "../../image/intro.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="wrapper-left">
          <h2 className="greet">Hello, My name is </h2>
          <h1 className="name">Jamsheed Hussain</h1>
          <div className="title-left">
            <div className="title-wrapper">
            <div className="title-item"> Web designer </div>
              <div className="title-item"> Web developer </div>
              
            </div>
          </div>
          <div className="desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services
            online stores.
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="bg"> </div>
        <img src={me} alt="its me" className="img-right" />
      </div>
    </div>
  );
};

export default Intro;

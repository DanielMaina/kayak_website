import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image-2.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id='about'>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Hey!
        </h1>
        <p className="primary-text">
          Meet Steve, an experienced paddling instructor with over 40 years 
          of paddling experience. The vast knowledge of paddling techniques 
          and safety practices make him an ideal instructor for anyone 
          looking to improve their skills and knowledge of the outdoors.
        </p>
        <p className="primary-text">
          Whether you're a beginner or an experienced paddler looking to 
          hone your skills, our lessons are tailored to meet your individual 
          needs and goals. Join Steve on the water and discover the joy and 
          adventure of the outdoors.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default About
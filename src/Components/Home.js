import React from 'react'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image-2.png";
import Navbar from './Navbar'
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id='home'>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome to  Echo-Adventures
          </h1>
          <p className="primary-text">
            Fun, informative outdoor programs for all levels & interests
          </p>
          <button className="secondary-button">
            Book Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home
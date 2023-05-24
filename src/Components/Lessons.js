import React from 'react'
import PickMeals from "../Assets/pick-meals-image-2.png";
import ChooseMeals from "../Assets/choose-image-2.png";

const Lessons = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Private lessons",
      subheading: "Drop in",
      text: "Safety / basic skills, no certification \n 3 Hours (1 session) \n Private - $ 150/pp, $50 per additional person",
    },
    {
      image: ChooseMeals,
      title: "Group lessons",
      subheading: "Register",
      text: "Safety / basic skills, no certification \n 3 Hours (1 session) \n Group - $100 pp (min 3, max 12)",
    },
  ];
  return (
    <div className="work-section-wrapper" id='lessons'>
      <div className="work-section-top">
        <p className="primary-subheading">Lessons</p>
        <h1 className="primary-heading">Book a lesson</h1>
        <p className="primary-text">
          For anyone wanting to learn the basics or refresh your skills
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h3>{data.subheading}</h3>
            <h2>{data.title}</h2>            
            <p>{data.text}</p>
            <button className="secondary-button">Book</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
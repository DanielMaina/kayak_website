import React from "react";
import Map from './Map'

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id='contact'>
      <h1 className="primary-heading">Find us</h1>
      <h1 className="primary-subheading">
        All lessons will be hosted at the Oakville 
        harbor after times are scheduled
      </h1>      
       <Map /> 
    </div>
  );
};

export default Contact;

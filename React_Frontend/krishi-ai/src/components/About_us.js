import React from "react";
import "../styles/Aboutus.css";
import Images from "./Images";

function About_us() {
  return (
    <div className="about">
      <div className="about__title">
        <div className="about__title_head">
          <font>ABOUT-US</font>
        </div>
        <div className="about__title_tail">
          <div className="typing">
            <strong> कृषिः </strong>AI is a machine learning based we
            application build using React and Flask.<strong> कृषिः </strong>AI
            is used for recommending Crop and Fertilizers based on the soil
            features. The application used three accuractely predciting models
            to make the final predictions. The link for the python notebooks
            containing the implementation for the models are present in the All
            Links section of this Readme. An API was built using Flask and was
            deployed on Heroku. This Flask API is used to get the recommendation
            made by the machine learning models in JSON format. The input data
            is sent as a POST request to the API to get the predicted
            information. React JS was used to build the frontend part of the
            application. JS packages such as MaterialUI, Axios, react-router-dom
            were used for frontend part of the web application.
          </div>
        </div>
        <Images/>
      </div>
    </div>
  );
}

export default About_us;

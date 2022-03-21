import React from "react";
import { Link } from "react-router-dom";
import Ayush from "../images/about/Ayush.jpg";
import Lalit from "../images/about/Lalit.jpeg";
import Vaibhav from "../images/about/Vaibhav.jpg";
import "../styles/Images.css";

const Images = () => {
  return (
    <>
      <div className="data">
        <div className="Cards">
          <img src={Vaibhav} alt={Vaibhav} className="img" />
          <div className="Card_hover">
            <div className="Card_hover_item">
              <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/in/vaibhav-mishra-4b60451b0/",
                }}
                target="_blank"
              >
                <i
                  className="fa fa-linkedin Card_hover_icon"
                  aria-hidden="true"
                />
              </Link>
            </div>
            <div className="Card_hover_item">
            <Link
                to={{
                  pathname:
                    "https://github.com/vaibhav15400",
                }}
                target="_blank"
              >
              <i className="fa fa-github Card_hover_icon" aria-hidden="true" /></Link>
            </div>
          </div>
          <p className="ImageName">Vaibhav Mishra</p>
        </div>
        <div className="Cards">
          <img src={Ayush} alt={Ayush} className="img" />
          <div className="Card_hover">
            <div className="Card_hover_item">
            <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/in/ayushchauhan14/",
                }}
                target="_blank"
              >
              <i
                className="fa fa-linkedin Card_hover_icon"
                aria-hidden="true"
              /></Link>
            </div>
            <div className="Card_hover_item">
            <Link
                to={{
                  pathname:
                    "https://github.com/ayushchauhan09",
                }}
                target="_blank"
              >
              <i className="fa fa-github Card_hover_icon" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <p className="ImageName">Ayush Chauhan</p>
        </div>
        <div className="Cards">
          <img src={Lalit} alt={Lalit} className="img" />
          <div className="Card_hover">
            <div className="Card_hover_item">
            <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/in/lalit-lohani01/",
                }}
                target="_blank"
              >
              <i
                className="fa fa-linkedin Card_hover_icon"
                aria-hidden="true"
              /></Link>
            </div>
            <div className="Card_hover_item">
            <Link
                to={{
                  pathname:
                    "https://github.com/LalitLohani",
                }}
                target="_blank"
              >
              <i className="fa fa-github Card_hover_icon" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <p className="ImageName">Lalit Lohani</p>
        </div>
      </div>
    </>
  );
};

export default Images;

import React from "react";
import doctor1 from "../../../assets/images/885213.jpg";
import Button from "../../../Components/Button";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={doctor1}
          className=" rounded-lg lg:w-1/2 shadow-2xl relative"
          alt=""
        />

        <div>
          <h1 className="text-5xl font-bold consult">Consulting Doctor!</h1>
          <p className="py-6 text-white will">
            people will trust you, confide in you, and appreciate your efforts.
            You can do amazing things for people if you don’t let the system get
            you down.
          </p>
          <Button>CAll NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

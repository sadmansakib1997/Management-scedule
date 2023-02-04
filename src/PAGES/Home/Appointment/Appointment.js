import React from "react";
import Button from "../../../Components/Button";
import doctor from "../../../assets/images/photo-1638202993928-7267aad84c31.jpg";
import bgimg from "../../../assets/images/istockphoto-861104740-612x612.jpg";
import "./Appointment.css";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <section className=" mt-36 bg-slate-800">
      <div className="hero ">
        <div className="hero-content gap-10  flex-col lg:flex-row">
          <img
            src={doctor}
            alt=""
            className=" lg:w-1/3 hidden md:block -mt-32 rounded-lg  shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-primary text-center app">
              Appointment
            </h1>
            <p className="py-6 text-white">
              “The most exquisite pleasure in the practice of medicine comes
              from nudging a layman in the direction of terror, then bringing
              him back to safety again.Most doctors are prisoners of their
              education and shackled by their profession”
            </p>
            <Button>GETTING STARTED</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;

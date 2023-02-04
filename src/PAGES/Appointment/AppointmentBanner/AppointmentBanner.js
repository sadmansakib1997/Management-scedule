import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/business-care-chair-clean-wallpaper-preview.jpg";

const AppointmentBanner = ({ selectedDate, setDate }) => {
  return (
    <div>
      <header>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={chair}
              alt=""
              className="max-w-md rounded-lg shadow-2xl"
            />
            <div className="mr-6 bg-gradient-to-r from-slate-200 to-cyan-500 rounded-lg">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setDate}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AppointmentBanner;

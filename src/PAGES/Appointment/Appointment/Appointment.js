import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Availableappointment from "../Availableappoitnment/Availableappointment";

const Appointment = () => {
  const [selectedDate, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setDate={setDate}
      ></AppointmentBanner>
      <Availableappointment selectedDate={selectedDate}></Availableappointment>
    </div>
  );
};

export default Appointment;

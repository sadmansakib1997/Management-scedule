import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Bookingmodal from "../Bookingmodal/Bookingmodal";
import Optionappointment from "./Optionappointment";

const Availableappointment = ({ selectedDate }) => {
  const [Appointmentoptions, setAppointmentoption] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch(" appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentoption(data));
  }, []);

  return (
    <div className="my-16">
      <p className="text-3xl font-semibold text-secondary text-center">
        Available Appointment: {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {Appointmentoptions.map((option) => (
          <Optionappointment
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></Optionappointment>
        ))}
      </div>
      {treatment && (
        <Bookingmodal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          //   refetch={refetch}
        ></Bookingmodal>
      )}
    </div>
  );
};

export default Availableappointment;

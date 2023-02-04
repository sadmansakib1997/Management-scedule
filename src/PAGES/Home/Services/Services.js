import React from "react";
import Service from "./Service";
import img1 from "../../../assets/images/heart-disease.png";
import img2 from "../../../assets/images/ribbon.png";
import img3 from "../../../assets/images/stress.png";
import "./Service.css";

const Services = () => {
  const cardservicedata = [
    {
      id: 1,
      name: "Heart Diseases",
      description:
        "To solve a difficult problem in medicine, don't study it directly, but rather pursue a curiosity about nature and the rest will follow. Do basic research.",
      img: img1,
    },
    {
      id: 2,
      name: "Hypertension",
      description:
        "To solve a difficult problem in medicine, don't study it directly, but rather pursue a curiosity about nature and the rest will follow. Do basic research.",
      img: img2,
    },
    {
      id: 3,
      name: "Cancer",
      description:
        "To solve a difficult problem in medicine, don't study it directly, but rather pursue a curiosity about nature and the rest will follow. Do basic research.",
      img: img3,
    },
  ];
  return (
    <div className="mt-20">
      <div className="text-center">
        <p className="text-4xl font-bold we">Services We Provided</p>
      </div>
      <div className="grid gap-6 text-white mt-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        {cardservicedata.map((servicedata) => (
          <Service key={servicedata.id} servicedata={servicedata}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

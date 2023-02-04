import React from "react";
import service from "../../../assets/images/customer.png";
import phone from "../../../assets/images/phone-call.png";
import marker from "../../../assets/images/pin.png";
import ClinicInfo from "./ClinicInfo";

const ClinicInfos = () => {
  const cardData = [
    {
      id: 1,
      name: "Our Services",
      description: "We are the best",
      icon: service,
      bgclass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Our Location",
      description: "Dhonia,Dhaka-1236",
      icon: marker,
      bgclass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Now",
      description: "01788539666",
      icon: phone,
      bgclass: " bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="grid gap-6 text-white mt-8 mb-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {cardData.map((card) => (
        <ClinicInfo key={card.id} card={card}></ClinicInfo>
      ))}
    </div>
  );
};

export default ClinicInfos;

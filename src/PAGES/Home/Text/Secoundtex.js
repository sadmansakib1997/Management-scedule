import React from "react";
import "../Text/Secound.css";

const Secoundtex = ({ text }) => {
  const { title, value } = text;
  return (
    <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
      <h1 className="mr-2 text-white text-2xl font-semibold">{title}</h1>
      <p className="p pt-1.5 text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Secoundtex;

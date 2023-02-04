import React from "react";

const ClinicInfo = ({ card }) => {
  const { name, description, icon, bgclass } = card;
  return (
    <div>
      <div className="card card-side shadow-xl bg-gradient-to-r from-slate-200 to-cyan-500">
        <figure>
          <img className="w-3/5" src={icon} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ClinicInfo;

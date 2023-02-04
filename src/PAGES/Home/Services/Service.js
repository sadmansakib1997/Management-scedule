import React from "react";

const Service = ({ servicedata }) => {
  const { img, name, description } = servicedata;
  return (
    <div>
      <div className="card w-[350px] bg-gradient-to-r from-slate-700 to-cyan-400 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;

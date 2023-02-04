import React from "react";
import "../Components/Button.css";

const Button = ({ children }) => {
  return (
    <div>
      <button className="btn started text-white font-semibold">
        {children}
      </button>
    </div>
  );
};

export default Button;

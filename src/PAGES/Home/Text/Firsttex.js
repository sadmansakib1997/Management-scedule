import React, { useEffect, useState } from "react";
import Secoundtex from "./Secoundtex";

const Firsttex = () => {
  const [texts, SetText] = useState([]);

  useEffect(() => {
    fetch("text.json")
      .then((res) => res.json())
      .then((data) => SetText(data));
  }, []);
  return (
    <div className="my-20 ml-20">
      <div className="flex justify-center items-center flex-wrap flex-col lg:flex-row">
        {texts.map((text) => (
          <Secoundtex key={text.id} text={text}></Secoundtex>
        ))}
      </div>
    </div>
  );
};

export default Firsttex;

import React from "react";
import Testimonial from "./Testimonial";
import img1 from "../../../assets/images/270993215_2011357205704181_923142120285281239_n.jpg";

import img3 from "../../../assets/images/36563426_970433169796595_31099682096676864_n.jpg";

const Testiomnials = () => {
  const testidatas = [
    {
      id: 1,
      name: "Sadman Sakib",
      address: "Bangladesh",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img1,
    },
    {
      id: 1,
      name: "Sadman Sakib",
      address: "Bangladesh",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img3,
    },
    {
      id: 2,
      name: "Ahona Petuk",
      address: "Bangladesh",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img3,
    },
  ];
  return (
    <div className="mt-20">
      <div className="text-center">
        <p className="text-4xl font-bold we">Testimonials</p>
      </div>
      <div className="grid gap-6 text-white mt-8 mb-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {testidatas.map((testi) => (
          <Testimonial key={testi.id} testi={testi}></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testiomnials;

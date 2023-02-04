import React from "react";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import ClinicInfos from "./ClinicInfo/ClinicInfos";
import Services from "./Services/Services";
import Testiomnials from "./Testimonial/Testiomnials";
import Firsttex from "./Text/Firsttex";

const Home = () => {
  return (
    <div className="mx-5 mt-20">
      <Banner></Banner>
      <Firsttex></Firsttex>
      <ClinicInfos></ClinicInfos>
      <Appointment></Appointment>
      <Services></Services>
      <Testiomnials></Testiomnials>
    </div>
  );
};

export default Home;

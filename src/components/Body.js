import React from "react";
import Header from "./Header";
import bg from "../components/utils/bg.jpg";
import Hero1 from "./Hero1";
import Activity from "./Activity";
const Body = () => {
  return (
    <div>
      <img src={bg} className="absolute -z-10" />
      <Header />
      <Hero1 />
      <Activity />
    </div>
  );
};

export default Body;

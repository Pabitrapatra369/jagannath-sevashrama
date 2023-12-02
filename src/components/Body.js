import React from "react";
import Header from "./Header";
import bg from "../utils/bg.jpg";
import Hero1 from "./Hero1";
const Body = () => {
  return (
    <div>
      <img src={bg} className="absolute -z-10" />
      <Header />
      <Hero1 />
    </div>
  );
};

export default Body;

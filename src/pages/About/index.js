import React from "react";
import Community from "./Community";
import Mision from "./Mision";
import QA from "./QA";
import Reviews from "./Reviews";
import Services from "./Services";

const About = () => {
  return (
    <div className="pt-20 min-h-screen w-full  bg-white">
      <div className="grid auto-rows-max p-2  w-full max-w-screen-xl mx-auto">
        <Mision />
        <Services />
        <QA />
        <Reviews />
      </div>
      <Community />
    </div>
  );
};

export default About;

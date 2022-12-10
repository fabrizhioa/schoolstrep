import React from "react";
import Community from "./Community";
import Mision from "./Mision";
import QA from "./QA";
import Reviews from "./Reviews";
import Services from "./Services";

const About = () => {
  return (
    <div className="pt-20 min-h-screen w-full  bg-white">
      <Mision />
      <Services />
      <QA />
      <Reviews />
      <Community />
    </div>
  );
};

export default About;

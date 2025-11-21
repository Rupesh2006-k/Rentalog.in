/** @format */

import Footer from "../components/Footer";
import React from "react";
import AboutTopText from "../components/AboutTopText";
import AboutCard from "../components/AboutCard";
const About = () => {
  return (
    <div className="px-10 max-sm:px-3 ">
      <AboutTopText />
      <AboutCard />
      <Footer />
    </div>
  );
};
export default About;

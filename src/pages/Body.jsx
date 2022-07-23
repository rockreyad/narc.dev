import React from "react";
import Count from "../components/Count";
import Footer from "../components/Footer";
import SocialButtons from "../components/SocialButtons";
import Subscribe from "../components/Subscribe";

const Body = () => {
  return (
    <div>
      <div className="flex flex-col text-white justify-center items-center">
        <h3 className="text-xl lg:text-6xl font-albert-sans font-extralight uppercase tracking-widest albert-sans">
          coming <span className="font-semibold">soon</span>
        </h3>
        <div className="mt-24">
          <Count />
        </div>
      </div>
    </div>
  );
};

export default Body;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import bgnight from "./assets/images/bgnight.jpg";
import bgday from "./assets/images/bgday.jpg";

import IMGStars from "./assets/images/bg-stars.svg";
import IMGHills from "./assets/images/patterns-hills.svg";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-darkest-blue to-dark-blue">
      <div
        className="h-full"
        style={{
          backgroundImage: "url(" + IMGHills + ")",
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="h-full"
          style={{
            backgroundImage: "url(" + IMGStars + ")",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="py-8 h-full flex flex-col justify-between">
            <div className="mt-8 flex flex-col items-center space-y-12 md:mt-28 md:space-y-24">
              <span className="text-light font-bold text-lg tracking-[.3em] text-center font-albert-sans text-white">
                WE'RE LAUNCHING SOON
              </span>

              <div>
                <ComingSoon />
              </div>
            </div>
            <div className="flex flex-col items-center space-y-32">
              <Subscribe />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

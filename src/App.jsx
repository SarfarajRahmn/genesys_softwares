import React from "react";
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Topnav />
      <div className="min-h-[88rem] overflow-y-scroll">
        <Hero />
        App
        <Footer />
      </div>
    </div>
  );
};

export default App;

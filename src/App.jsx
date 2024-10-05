import React from "react";
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <div className="bg-[#EA2127]">
        <Topnav />
        <Hero />
      </div>
      App
      <Footer />
    </div>
  );
};

export default App;

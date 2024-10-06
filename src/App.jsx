import React from "react";
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Caps from "./components/Caps";
import BooksSection from "./components/BooksSection";

const App = () => {
  return (
    <div>
      <Topnav />
      <div className="min-h-[88rem] overflow-y-scroll">
        <Hero />
        <Caps />
        <BooksSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;

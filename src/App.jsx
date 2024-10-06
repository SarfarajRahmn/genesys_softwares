import React from "react";
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Caps from "./components/Caps";
import BooksSection from "./components/BooksSection";

const App = () => {
  return (
    <div className="overflow-hidden h-screen">
      <Topnav />
      <div className="max-h-[43rem] lg:max-h-[32rem]  overflow-y-scroll">
        <Hero />
        <Caps />
        <BooksSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;

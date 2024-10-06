import React from "react";
import quotes from "../assets/Icon/quotes.svg";
import img5 from "../assets/img/img (5).png";
import img8 from "../assets/img/img (8).png";
import choose from "../assets/img/Choose-Your-Enemies.png";
import pat from "../assets/img/pat-signature White 1.png";

const BooksSection = () => {
  return (
    <>
      <div className="lg:min-h-[33rem] md:py-20 py-8 bg-[#111111] flex justify-center items-center space-x-6">
        <div className="me-8">
          <p className="uppercase lg:text-[36px] font-[Montserrat-bold] text-white leading-loose font-light">
            Patrick Bet-David's <br />
            <span className=" lg:text-5xl tracking-wide font-extrabold text-red-500 subpixel-antialiased font-[Montserrat-medium]">
              Signed <br /> Collection
            </span>
          </p>{" "}
          <button className="flex items-center uppercase bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition hover:translate-x-4 duration-300 my-4">
            <span className="text-xs">Shop Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5-5 5M6 12h12"
              />
            </svg>
          </button>
          <img
            src={pat}
            alt="pat signature"
            className="lg:max-h-[200px] lg:max-w-[520px]"
          />
        </div>
        <div className="flex justify-center items-center lg:space-x-6">
          <img
            src={choose}
            className="lg:max-h-[420px] lg:max-w-[588px]"
            alt="choose your enemies"
          />
          <img
            src={img8}
            className="lg:max-h-[370px] lg:max-w-[588px]"
            alt="Your Next Four Moves"
          />
        </div>
      </div>

      <div className="lg:min-h-[24rem] relative bg-gradient-to-r from-[#EC3339] to-[#BB1117] ">
        <div className="">
          <img
            src={quotes}
            className="max-w-[160px] max-h-[160px] opacity-85 absolute top-7 left-16"
            alt=""
          />
          <p className="uppercase lg:text-[34px] font-[Montserrat-bold] text-white leading-relaxed font-light absolute top-[130px] left-[108px]">
            Our mission is to enlighten, entertain <br />
            and empower current and future <br />
            leaders around the world.
          </p>
        </div>
        <div className="absolute right-20 -top-[86px]">
          <img
            src={img5}
            className="lg:max-h-[470px] lg:max-w-full "
            alt="choose your enemies"
          />
        </div>
      </div>
    </>
  );
};

export default BooksSection;

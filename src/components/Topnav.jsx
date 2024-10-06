import { useEffect, useRef, useState } from "react";
import logo from "../assets/Logo/Valuetainment.svg";

export default function NavbarWithDropdown() {
  const [dropDownState, setDropDownState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropDownMenuRef = useRef(null);
  const items = ["Food", "Transport", "Management"];

  useEffect(() => {
    const closeDropDown = (e) => {
      if (
        dropDownMenuRef.current &&
        !dropDownMenuRef.current.contains(e.target)
      ) {
        setDropDownState(false);
      }
    };
    document.addEventListener("mousedown", closeDropDown);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-[#EA2127] px-12 md:px-[86px] pe-5 pt-[13px] flex justify-between items-start flex-wrap transition-shadow duration-300 ${
        isScrolled ? "shadow-2xl" : ""
      }`}
    >
      <div className="font-semibold flex md:flex-row align-middle justify-center items-center space-y-4 space-x-6 md:space-y-0 md:space-x-5">
        <img
          src={logo}
          className="max-h-[60px] md:max-h-[115px] max-w-[60px] md:max-w-[115px] lg:max-w-[70px] lg:max-h-[70px] object-contain filter invert"
          alt="Valuetainment logo"
        />
        <p className="font-[Montserrat] uppercase text-white font-extrabold text-[48px] md:text-[72px] lg:text-[81px] tracking-widest ">
          vtmerch
        </p>
      </div>

      <ul className="flex items-center justify-between mt-2 text-slate-900 dark:text-gray-100 lg:gap-6">
        <li className="relative" ref={dropDownMenuRef}>
          <button
            onClick={() => setDropDownState((prev) => !prev)}
            className="relative flex items-center gap-1 py-2 hover:underline"
          >
            <div className="relative w-10 h-12 cursor-pointer flex items-center justify-center">
              <span
                className={`block absolute h-[3px] w-7 bg-white transform transition-all duration-300 ease-in-out ${
                  dropDownState ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>

              <span
                className={`block absolute h-[3px] w-7 bg-white transform transition-all duration-300 ease-in-out ${
                  dropDownState ? "opacity-0" : ""
                }`}
              ></span>

              <span
                className={`block absolute h-[3px] w-7 bg-white transform transition-all duration-300 ease-in-out ${
                  dropDownState ? "-rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
          <ul
            className={`absolute top-16 -left-24 z-10 space-y-2 rounded-lg bg-red-500 p-2 text-gray-100 ${
              dropDownState ? "visible opacity-100" : "invisible opacity-0"
            } transition-opacity duration-300`}
          >
            {items.map((item, idx) => (
              <li
                key={idx}
                className={`rounded-sm bg-red-400 p-2 hover:bg-red-800 transition duration-300 ${
                  dropDownState
                    ? "translate-x-0 opacity-100"
                    : `translate-x-10 opacity-0`
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <button>{item}</button>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

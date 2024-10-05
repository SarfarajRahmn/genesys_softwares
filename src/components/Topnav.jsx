import { useEffect, useRef, useState } from "react";

export default function NavbarWithDropdown() {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef(null);

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
    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  return (
    <nav className="px-4 ps-20 md:ps-28 md:pe-12 me-2 py-[13px] flex justify-between items-center flex-wrap">
      <div className="font-semibold flex md:flex-row align-middle justify-center items-center space-y-4 space-x-6 md:space-y-0 md:space-x-4">
        <img
          src="/src/assets/Logo/Valuetainment.svg"
          className="max-h-[60px] md:max-h-[115px] max-w-[60px] md:max-w-[115px] lg:max-w-[65px] lg:max-h-[65px] object-contain filter invert"
          alt="Valuetainment logo"
        />
        <p className="uppercase text-white font-extrabold text-[48px] md:text-[72px] lg:text-7xl tracking-widest">
          vtmerch
        </p>
      </div>

      <ul className="flex items-center justify-between gap-4 text-slate-900 dark:text-gray-100 lg:gap-6">
        <li className="relative" ref={dropDownMenuRef}>
          <button
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex items-center gap-1 py-2 hover:underline"
          >
            <div
              onClick={() => setDropDownState(!dropDownState)}
              className="relative w-10 h-12 cursor-pointer flex items-center justify-center"
            >
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
          {dropDownState && (
            <ul className="absolute top-16 -left-24 z-10 space-y-2 rounded-lg bg-red-500  p-2 text-gray-100">
              <li className="px-3 py-1 hover:bg-red-800 duration-300 transition">
                <button>Food</button>
              </li>
              <li className="px-3 py-1 hover:bg-red-800 duration-300 transition">
                <button>Transport</button>
              </li>
              <li className="px-3 py-1 hover:bg-red-800 duration-300 transition">
                <button>Management</button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

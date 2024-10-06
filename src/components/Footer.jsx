import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black  text-white pt-12 pb-6 px-28 ">
      <div className=" mx-auto">
        <div className="flex items-center border-b-2 border-gray-700  w-[75%] space-x-4">
          <img
            src="/src/assets/Logo/Valuetainment.svg"
            alt="Logo"
            className="mx-auto lg:mx-0 mb-4 filter-red opacity-70"
            width="60"
          />
          <h2 className="text-7xl text-white font-bold mb-4 font-[Montserrat] tracking-wider ">
            VTMERCH
          </h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-start mt-10">
          <div className="lg:col-span-2 text-center lg:text-left">
            <p className="opacity-80 max-w-[364px] leading-tight font-[Montserrat-medium]">
              Subscribe and be the first to receive notifications about our
              upcoming releases and the latest news.
            </p>
            <div className="mt-4 flex flex-col space-y-4 pe-16">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-1 rounded-lg bg-transparent text-white placeholder:text-xs placeholder:text-center focus:outline-none border-white border"
              />
              <button className="bg-white text-xs text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 lg:col-span-3 gap-8 text-center font-[Inter] lg:text-left">
            <div>
              <p className="font-semibold text-sm mb-4">Customer Services</p>
              <ul className="space-y-3 text-xs text-gray-300 opacity-75">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Search
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-sm mb-4">Products</p>
              <ul className="space-y-3 text-xs text-gray-300 opacity-75">
                <li>
                  <a href="#" className="hover:text-white">
                    Featured products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Bestseller
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Latest product
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    All collections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    All products
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-sm mb-4">Contact Us</p>
              <p className="text-xs text-gray-300 opacity-75 mb-4">
                Available between 8AM to 8PM. Ready to answer your questions.
              </p>
              <p className="text-xs opacity-75 text-gray-300 flex items-center space-x-2">
                <img
                  src="/src/assets/Icon/phone.png"
                  className="w-[14px] h-[14px]"
                  alt=""
                />
                <span>013456789</span>
              </p>
              <p className="text-xs opacity-75 text-gray-300 flex items-center space-x-2 mt-2">
                <img
                  src="/src/assets/Icon/mail.png"
                  className="w-4 h-3"
                  alt=""
                />
                <span>store@valuetainment.com</span>
              </p>

              <div className="flex items-center space-x-2 mt-4">
                <img
                  src="/src/assets/Icon/facebook (4).svg"
                  className="w-4 h-4"
                  alt=""
                />
                <img
                  src="/src/assets/Icon/twitter (4).svg"
                  className="w-4 h-4"
                  alt=""
                />
                <img
                  src="/src/assets/Icon/linkedin (3).svg"
                  className="w-4 h-4"
                  alt=""
                />{" "}
                <img
                  src="/src/assets/Icon/instagram-logo (1).svg"
                  className="w-4 h-4"
                  alt=""
                />
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <aside className="py-6 flex justify-between text-xs text-gray-400 ">
          <p>&copy; 2024 Valluetainment Store. All Rights Reserved.</p>

          <span className="flex justify-center items-center space-x-2 ">
            <img src="/src/assets/Icon/visa 1.svg" alt="" className="max-w-5" />
            <img
              src="/src/assets/Icon/apple-pay 1.svg"
              alt=""
              className="max-w-5"
            />
            <img
              src="/src/assets/Icon/diners-club 1.svg"
              alt=""
              className="max-w-5"
            />{" "}
            <img src="/src/assets/Icon/visa 1.svg" alt="" className="max-w-5" />
            <img src="/src/assets/Icon/amex 1.svg" alt="" className="max-w-5" />
            <img
              src="/src/assets/Icon/paypal 1.svg"
              alt=""
              className="max-w-5"
            />
            <img
              src="/src/assets/Icon/american-express (1) 1.svg"
              alt=""
              className="max-w-5"
            />
          </span>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;

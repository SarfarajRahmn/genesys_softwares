import React, { useState } from "react";

const Hero = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [
    {
      image: "/src/assets/img/img (9).png",
      title: "Army Green Active Short Sleeve",
      price: "$ 34.50",
      originalPrice: "$ 34.50",
    },
    {
      image: "/src/assets/img/img (10).png",
      title: "Black Hoodie Jacket",
      price: "$ 45.00",
      originalPrice: "$ 55.00",
    },
    {
      image: "/src/assets/img/img (11).png",
      title: "Red Sports Bra",
      price: "$ 25.00",
      originalPrice: "$ 30.00",
    },
    {
      image: "/src/assets/img/img (11).jpeg",
      title: "Blue Jogger Pants",
      price: "$ 40.00",
      originalPrice: "$ 50.00",
    },
    {
      image: "/src/assets/img/img (9).png",
      title: "Grey T-Shirt",
      price: "$ 20.00",
      originalPrice: "$ 25.00",
    },
    {
      image: "/src/assets/img/img (10).png",
      title: "Yellow Jacket",
      price: "$ 70.00",
      originalPrice: "$ 80.00",
    },
  ];

  const itemsPerView = 5; 

  
  const prevSlider = () => {
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - itemsPerView : currentSlider - 1
    );
  };

  
  const nextSlider = () => {
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - itemsPerView ? 0 : currentSlider + 1
    );
  };

  return (
    <div className="bg-[#EA2127] lg:min-h-[33rem] md:pt-12 pt-8 ps-28 relative">
      <p className="text-[#ffffff] opacity-40 font-[ActOfRejection] lg:text-[102px] font-normal">
        future looks brights!
      </p>

      <div className="absolute top-[138px] left-[133px] group">
        <div className="max-w-[1200px] space-y-2 rounded-lg">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  currentSlider * (100 / itemsPerView)
                }%)`,
              }}
            >
              {sliders.map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[20%] flex-shrink-0 space-y-2 px-2 rounded-lg"
                >
                  <img
                    className="h-[397px] lg:max-h-[278px] lg:max-w-[250px] w-[357px] rounded-lg object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="grid gap-1 text-white opacity-80 font-[Inter] ps-2">
                    <p className="text-[16px] lg:text-xs">{item.title}</p>
                    <div className="text-[14px] font-normal flex justify-start space-x-4 items-center">
                      <p>{item.price}</p>
                      <p className="line-through">{item.originalPrice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

       
          <button
            onClick={prevSlider}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            &#10094;
          </button>

   
          <button
            onClick={nextSlider}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

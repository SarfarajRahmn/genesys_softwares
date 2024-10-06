import React from "react";
import img4 from "../assets/img/img (4).jpeg";
import img7 from "../assets/img/img (7).jpeg";

import img6 from "../assets/img/img (6).jpeg";
import img10 from "../assets/img/img (10).jpeg";
const Caps = () => {
  const products = [
    {
      id: 1,
      image: img4,
      title: "Army Green Active Short Sleeve",
      price: "$34.95",
      originalPrice: "$36.99",
    },
    {
      id: 2,
      image: img7,
      title: "Army Green Active Short Sleeve",
      price: "$45.00",
      originalPrice: "$55.00",
    },
    {
      id: 3,
      image: img6,
      title: "Army Green Active Short Sleeve",
      price: "$25.00",
      originalPrice: "$30.00",
    },
    {
      id: 4,
      image: img10,
      title: "Army Green Active Short Sleeve",
      price: "$40.00",
      originalPrice: "$50.00",
    },
  ];

  return (
    <div className="lg:min-h-[33rem] md:py-20 py-8 px-28 bg-[#F6F5F5]">
      <p className="uppercase text-5xl font-[Montserrat-bold] leading-tight font-bold">
        Buy 1 get 1 free <br />
        On{" "}
        <span className=" textShadow whitespace-break-spaces tracking-wide font-normal text-white subpixel-antialiased font-[Montserrat-medium]">
          Best Selling Products
        </span>
      </p>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="col-span-1">
            <div className="p-3 bg-white space-y-2 rounded-lg">
              <img
                className="h-[397px] lg:max-h-[250px] lg:max-w-full w-[357px] rounded-lg object-cover "
                src={product.image}
                alt={product.title}
              />
              <div className="grid gap-1 font-[Inter] ps-2 pt-4">
                <p className="text-[16px] font-bold lg:text-xs">
                  {product.title}
                </p>
                <div className="text-[14px] font-normal flex justify-start space-x-4 items-center">
                  <p className="font-bold">{product.price}</p>
                  <p className="line-through opacity-50">
                    {product.originalPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caps;

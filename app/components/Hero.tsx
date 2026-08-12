import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-gray-300 h-[48vh]">
      <div className="container mx-auto">
        <div className="flex justify-center items-center w-[90%] mx-auto">
          {/* Left Hero */}
          <div className="w-[30%] pt-10 pb-10">
            <h1 className="font-extrabold text-4xl heading-[35px] uppercase">
              Shop Smarter, <br /> Live Better and Stronger
            </h1>
            <p className="text-gray-500">
              Discover amazing quality products, unbeatable prices, and fast
              delivery at ShopHub.
            </p>

            <button className="bg-black text-white rounded-full px-10 py-2 mt-6">
              Shop Now
            </button>

            <div className="flex flex-row divide-gray-400 divide-x gap-5">
              <div className="pr-8 text-left">
                <h2 className="font-bold text-3xl mt-5">500+</h2>
                <p className="text-gray-500 whitespace-nowrap text-[10px]">
                  International Brands
                </p>
              </div>

              <div className="pr-8">
                <h2 className="font-bold text-3xl mt-5">3,000+</h2>
                <p className="text-gray-500 whitespace-nowrap text-[10px]">
                  High quality products
                </p>
              </div>

              <div>
                <h2 className="font-bold text-3xl mt-5">30,000+</h2>
                <p className="text-gray-500 text-[10px]">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right Hero */}
          <div className="w-[70%]">
            <Image
              src="/images/hero.png"
              alt=""
              width={3000}
              height={2000}
              // className="w-[85%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="pt-20 flex mx-auto pl-10 gap-20 bg-gray-300">
      {/* Left Hero */}
      <div className="">
        <h1 className="font-extrabold text-4xl heading-[35px] mb-5 uppercase">Shop Smarter, <br /> Live Better and Stronger</h1>
        <p className="text-gray-500">
          Discover amazing quality products, unbeatable prices, and fast delivery at
          ShopHub.
        </p>

        <button className="bg-black text-white rounded-full px-10 py-2 mt-6">Shop Now</button>

         <div className="flex flex-row divide-gray-400 mt-8 divide-x gap-5">
          <div className="pr-8 text-left">
         <h2 className="font-bold text-3xl mt-5">500+</h2>
        <p className="text-gray-500 whitespace-nowrap text-[10px]">International Brands</p>
        </div>

        <div className="pr-8">
        <h2 className="font-bold text-3xl mt-5">3,000+</h2>
        <p className="text-gray-500 whitespace-nowrap text-[10px]">High quality products</p>
        </div>

        <div>
        <h2 className="font-bold text-3xl mt-5">30,000+</h2>
        <p className="text-gray-500 text-[10px]">Happy Customers</p>
        </div>
        </div>
      </div>

      {/* Right Hero */}
      <div className="">
        <Image src="/images/hero.png" alt="" width={300} height={300} className="w-350 h-100"/>
      </div>
    </div>
  );
}

export default Hero;

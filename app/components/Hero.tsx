import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-gray-300 min-h-[60vh] flex items-center py-10 md:py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full md:w-[90%] mx-auto gap-8 md:gap-4">
          {/* Left Hero */}
          <div className="w-full md:w-[45%] lg:w-[40%] text-center md:text-left">
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight uppercase">
              Shop Smarter, <br className="hidden md:inline" /> Live Better and
              Stronger
            </h1>
            <p className="text-gray-500 mt-4 text-sm sm:text-base">
              Discover amazing quality products, unbeatable prices, and fast
              delivery at ShopHub.
            </p>

            <button className="bg-black text-white rounded-full px-10 py-3 mt-6 w-full sm:w-auto hover:bg-gray-800 transition">
              Shop Now
            </button>

            {/* Stats Counter */}
            <div className="flex flex-row justify-between md:justify-start divide-gray-400 divide-x gap-3 sm:gap-5 mt-8 border-t border-gray-400/30 pt-6 md:border-t-0 md:pt-0">
              <div className="pr-3 sm:pr-8 text-left">
                <h2 className="font-bold text-2xl sm:text-3xl">500+</h2>
                <p className="text-gray-500 text-[10px] sm:text-xs">
                  International Brands
                </p>
              </div>

              <div className="px-3 sm:px-8 text-left">
                <h2 className="font-bold text-2xl sm:text-3xl">3,000+</h2>
                <p className="text-gray-500 text-[10px] sm:text-xs">
                  High Quality Products
                </p>
              </div>

              <div className="pl-3 sm:pl-8 text-left">
                <h2 className="font-bold text-2xl sm:text-3xl">30,000+</h2>
                <p className="text-gray-500 text-[10px] sm:text-xs">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero */}
          <div className="w-full md:w-[55%] lg:w-[60%] flex justify-center">
            <Image
              src="/images/hero.png"
              alt="ShopHub Hero"
              width={800}
              height={600}
              priority
              className="w-full max-w-[400px] md:max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    review:
      "I'm blown away by the quality of products I received from ShopHub. Each of the product I bought has exceeded my expectations.",
  },

  {
    name: "Desmond",
    rating: 5,
    review:
      "Finding the products that align with my taste used to be  a challenge until I discovered ShopHub. The range of option they offer is remarkable.",
  },

  {
    name: "James L.",
    rating: 5,
    review:
      "Fast delivery and amazing customer service. ShopHub is now my go-to store for products need",
  },

  {
    name: "Lilian",
    rating: 4,
    review: "It's a great experience shopping with SHopHub",
  },
];

function Customer() {
  return (
    <div className="container mx-auto">
      <div className="w-[90%] mx-auto">
        <div className="pt-15 font-extrabold text-[30px] flex justify-center">
          <h2>OUR HAPPY CUSTOMERS</h2>
        </div>

        <Carousel>
          <CarouselContent className="grid grid-cols-3">
            {testimonials.map((item, index) => (
              <CarouselItem key={index}>
                <div className="bg-white rounded-xl border p-6 shadow-sm h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < item.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  {/* NAME + VERIFIED */}
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <span className="bg-green-500 rounded-full text-white">
                      ✓
                    </span>
                  </div>

                  {/* REVIEW */}
                  <p className="text-gray-600 text-sm">{item.review}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Customer;

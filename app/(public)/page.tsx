import Testimonials from "./components/Testimonials";
import type { Product } from "./components/type";
import Hero from "./components/Hero";
import axios from "axios";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

export default async function Home() {
  const res = await axios.get("https://dummyjson.com/products");
  const data = res.data.products;
  console.log(data);
  return (
    <div>
      <Hero />

      <h2 className="flex justify-center font-extrabold text-[30px] pt-5">
        OUR PRODUCTS
      </h2>
        <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4 w-[90%] mx-auto">
        {data.slice(0).map((item: Product) => {
          return (
            <div key={item.id}>
              <Image
                src={item?.images[0]}
                alt={item.name}
                width={50}
                height={500}
                className="w-full h-[270] bg-gray-200 mt-10 rounded-lg"
              />
              <p className="font-extrabold -bottom-6 text-1xl text-black">
                {item.title}
              </p>

              <div className="flex gap-1 text-yellow-300">
                {[...Array(5)].map((_, i) => {
                  if (i < Math.floor(item.rating)) {
                    return <Star key={i} className="w-4 h-4 fill-yellow-300" />;
                  }
                  if (i === Math.floor(item.rating) && item.rating % 1 >= 0.5) {
                    return (
                      <StarHalf key={i} className="w-4 h-4 fill-yellow-300" />
                    );
                  }
                  // return <Star key={i} className="w-4 h-4 text-gray-300" />
                })}
                <span className="text-[8px] text-gray-400 ml-1">
                  {item.rating.toFixed(1)}
                </span>
              </div>
              <p className="font-extrabold ">${item.price}</p>
            </div>
            
          );
        })}
         
      </div>
      </div>
      <Testimonials />
    </div>
  );
}

import Nav from "./components/Nav";
import type { Product } from "./components/type.ts";
import Hero from "./components/Hero";
import axios from "axios";
import Image from "next/image";

export default async function Home() {
  const res = await axios.get("https://dummyjson.com/products");
  const data = res.data.products;
  console.log(data);
  return (
    <div>
      <Nav />
      <Hero />
      <div className="grid grid-cols-4 gap-5 mx-auto">
        {data.slice(0).map((item: Product) => {
          return (
            <div key={item.id} className="relative">
              <Image
                src={item?.images[0]}
                alt={item.name}
                width={50}
                height={500}
                className="w-full h-[300px] bg-gray-200 mt-10 rounded-lg ml-6"
              />
               <p className="absolute -mt-10 pl-10 -bottom-12 text-1xl text-black font-light">
                {item.title}
              </p> 
            </div>
          );
        })}
      </div>
    </div>
  );
}

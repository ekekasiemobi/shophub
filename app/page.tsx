 import Customer from "./components/Customer";
import type { Product } from "./components/type";
import Hero from "./components/Hero";
import axios from "axios";
import Image from "next/image";


export default async function Home() {
  const res = await axios.get("https://dummyjson.com/products");
  const data = res.data.products;
  console.log(data);
  return (
    <div>
    

      <Hero />
      
        <h2 className="flex justify-center font-extrabold text-[30px] pt-5">OUR PRODUCTS</h2>
      <div className="grid grid-cols-4 gap-5 mx-auto">
      
        {data.slice(0).map((item: Product) => {
          return (
            <div key={item.id} className="relative">
              <Image
                src={item?.images[0]}
                alt={item.name} 
                width={50}
                height={500}
                className="w-full h-[270] bg-gray-200 mt-10 rounded-lg ml-6"
              />
               <p className="absolute -mt-10 pl-10 -bottom-6 text-1xl text-black font-light">
                {item.title}
              </p> 
            </div>
          );
        })}
      </div>
        <Customer />
    </div>
  );
}

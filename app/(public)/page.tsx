import Testimonials from "../components/Testimonials";
import type { Product } from "../components/type";
import Hero from "../components/Hero";
import axios from "axios";
import Image from "next/image";


// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
import {
  Card,
  // CardAction,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function Home() {
  const res = await axios.get("https://dummyjson.com/products");
  const data = res.data.products;
  console.log(data);
  return (
    <div>
      <Hero />

      <h2 className="flex justify-center font-extrabold text-[30px] pt-15 pb-15">
        TOP RATED PRODUCTS
      </h2>
      <div className="container mx-auto">
       <div className="grid grid-cols-4 gap-4 w-[90%] mx-auto">
          {data.slice(0,8).map((item: Product) => {
            const imageUrl = Array.isArray(item.images) ? item.images[0] : item.images || item.thumbnail;
                            
            return (
              <Card className="max-w-sm h-full hover:shadow-md transition-shadow " key={item.id}>
                <Image
                  className="w-full h-48 object-contain bg-[#F0EEED] p-2"
                  src={imageUrl}
                  alt={item.title || "Product Image"}
                  width={200} height={200}

                />

                <CardHeader className="p-4 space-y-2">
                  <CardTitle className="text-[18px] font-extrabold text-gray-900 leading-tight line-clamp-1">
                    {item.title}
                  </CardTitle>

                  <div className="text-sm font-semibold text-amber-500 flex items-center gap-1">
                    {"★".repeat(item.rating || 0)}
                    {"☆".repeat(5 - (item.rating || 0))}
                    <span className="text-gray-900 font-bold text-xs ml-1">
                      {item.rating}
                    </span>
                  </div>

                  <div className="flex gap-3 items-center">
                    <span className="text-[16px] font-black text-gray-900">
                      ${item.price}
                    </span>

                    {item.discountPercentage > 0 && (
                      <span className="text-xs font-bold bg-red-50 text-red-600 px-2 py-0.5 rounded border border-red-100">
                        -{Math.round(item.discountPercentage)}%
                      </span>
                    )}
                  </div>

                  {item.name && (
                    <CardDescription className="line-clamp-2">
                      {item.name}
                    </CardDescription>
                  )}
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      <h2 className="flex justify-center font-extrabold text-[30px] pt-15 pb-15">
        LATEST PRODUCTS
      </h2>
      <div className="container mx-auto">
       <div className="grid grid-cols-4 gap-4 w-[90%] mx-auto">
          {data.slice(10, 14).map((item: Product) => {
            const imageUrl = Array.isArray(item.images) ? item.images[0] : item.images || item.thumbnail;
                            
            return (
              <Card className="max-w-sm h-full hover:shadow-md transition-shadow " key={item.id}>
                <Image
                  className="w-full h-48 object-contain bg-[#F0EEED] p-2"
                  src={imageUrl}
                  alt={item.title || "Product Image"}
                  width={200} height={200}

                />

                <CardHeader className="p-4 space-y-2">
                  <CardTitle className="text-[18px] font-extrabold text-gray-900 leading-tight line-clamp-1">
                    {item.title}
                  </CardTitle>

                  <div className="text-sm font-semibold text-amber-500 flex items-center gap-1">
                    {"★".repeat(item.rating || 0)}
                    {"☆".repeat(5 - (item.rating || 0))}
                    <span className="text-gray-900 font-bold text-xs ml-1">
                      {item.rating}
                    </span>
                  </div>

                  <div className="flex gap-3 items-center">
                    <span className="text-[16px] font-black text-gray-900">
                      ${item.price}
                    </span>

                    {item.discountPercentage > 0 && (
                      <span className="text-xs font-bold bg-red-50 text-red-600 px-2 py-0.5 rounded border border-red-100">
                        -{Math.round(item.discountPercentage)}%
                      </span>
                    )}
                  </div>

                  {item.name && (
                    <CardDescription className="line-clamp-2">
                      {item.name}
                    </CardDescription>
                  )}
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      <h2 className="flex justify-center font-extrabold text-[30px] pt-15 pb-15">
        TOP SELLING PRODUCTS
      </h2>
      <div className="container mx-auto">
       <div className="grid grid-cols-4 gap-4 w-[90%] mx-auto">
          {data.slice(20, 24).map((item: Product) => {
            const imageUrl = Array.isArray(item.images) ? item.images[0] : item.images || item.thumbnail;
                            
            return (
              <Card className="max-w-sm h-full hover:shadow-md transition-shadow " key={item.id}>
                <Image
                  className="w-full h-48 object-contain bg-[#F0EEED] p-2"
                  src={imageUrl}
                  alt={item.title || "Product Image"}
                  width={200} height={200}

                />

                <CardHeader className="p-4 space-y-2">
                  <CardTitle className="text-[18px] font-extrabold text-gray-900 leading-tight line-clamp-1">
                    {item.title}
                  </CardTitle>

                  <div className="text-sm font-semibold text-amber-500 flex items-center gap-1">
                    {"★".repeat(item.rating || 0)}
                    {"☆".repeat(5 - (item.rating || 0))}
                    <span className="text-gray-900 font-bold text-xs ml-1">
                      {item.rating}
                    </span>
                  </div>

                  <div className="flex gap-3 items-center">
                    <span className="text-[16px] font-black text-gray-900">
                      ${item.price}
                    </span>

                    {item.discountPercentage > 0 && (
                      <span className="text-xs font-bold bg-red-50 text-red-600 px-2 py-0.5 rounded border border-red-100">
                        -{Math.round(item.discountPercentage)}%
                      </span>
                    )}
                  </div>

                  {item.name && (
                    <CardDescription className="line-clamp-2">
                      {item.name}
                    </CardDescription>
                  )}
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
      <Testimonials />
    </div>
  );
}

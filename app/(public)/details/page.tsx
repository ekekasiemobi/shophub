import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link';

import { Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle, } from "@/components/ui/card";

  import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

async function Hero() {
    const response = await axios.get('https://dummyjson.com/products/10');
    const product = response.data;
    console.log(product)

    const products = await axios.get('https://dummyjson.com/products')
    const items = products.data.products
    console.log(items)

  return (
    <div className='container mx-auto mt-10 px-4 max-w-6xl'> 
        <div className='flex gap-10 items-start'>

        
            <div className='w-[50%] flex gap-6'>

                <div className='flex flex-col gap-4'>
                    <Image className='bg-[#F0EEED] rounded-xl object-cover p-1 border border-gray-100' src={product.thumbnail} alt={product.title} width={100} height={100}/>
                    <Image className='bg-[#F0EEED] rounded-xl object-cover p-1 border border-gray-100' src={product.images?.[0] || product.thumbnail} alt={product.title} width={100} height={100}/>
                    <Image className='bg-[#F0EEED] rounded-xl object-cover p-1 border border-gray-100' src={product.images?.[1] || product.thumbnail} alt={product.title} width={100} height={100}/>
                </div>

                <div className='flex-1'>
                    <img className='bg-[#F0EEED] rounded-2xl w-full h-100 object-contain p-4 border border-gray-100 shadow-sm' src={product.images?.[0] || product.thumbnail} alt={product.title} width={500} height={500}/>
                </div>

            </div>


            <div className='w-[50%] flex flex-col gap-5 text-gray-700'>
                <div className='flex gap-4'>
                    <div className='bg-[#F0F0F0] rounded-lg text-xs p-2.5 min-w-25 border border-gray-200/60'>
                        <span className="text-gray-400 block uppercase tracking-wider text-[10px] font-bold mb-0.5">Category</span>
                        <span className="font-bold text-gray-900 capitalize">{product.category}</span>
                    </div>

                    <div className='bg-[#F0F0F0] rounded-lg text-xs p-2.5 min-w-25 border border-gray-200/60'>
                        <span className="text-gray-400 block uppercase tracking-wider text-[10px] font-bold mb-0.5">Brand</span>
                        <span className="font-bold text-gray-900">{product.brand || 'Generic'}</span>
                    </div>
                </div>

                <h1 className='text-3xl font-extrabold text-gray-900 leading-tight'>{product.title}</h1>
                <p className='text-sm font-semibold text-amber-500 flex items-center gap-1'>
                  ★ <span className='text-gray-900 font-bold'>{product.rating}</span> <span className='text-gray-400 font-normal'>/ 5.0</span>
                </p>

                <div className='flex gap-4 items-baseline'>
                    <p className='text-2xl font-black text-gray-900'>${product.price}</p>
                    <p className='text-xs font-bold bg-red-50 text-red-600 px-2.5 py-1 rounded-md border border-red-100'>
                      -{product.discountPercentage}% OFF
                    </p>
                </div>

                <p className='text-sm text-gray-600 leading-relaxed border-y border-gray-100 py-3'>{product.description}</p>
                
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-gray-800 text-sm">Dimensions</h3>
                    <div className="flex gap-4 text-sm">
                        <div className='bg-[#F0F0F0] rounded-xl w-fit px-6 py-2'>
                            <span className="text-gray-400 block text-xs">Width</span>
                            <span className="font-bold text-gray-900">{product.dimensions?.width}</span>
                        </div>
                        <div className='bg-[#F0F0F0] rounded-xl w-fit px-6 py-2'>
                            <span className="text-gray-400 block text-xs">Height</span>
                            <span className="font-bold text-gray-900">{product.dimensions?.height}</span>
                        </div>
                        <div className='bg-[#F0F0F0] rounded-xl w-fit px-6 py-2'>
                            <span className="text-gray-400 block text-xs">Depth</span>
                            <span className="font-bold text-gray-900">{product.dimensions?.depth}</span>
                        </div>
                    </div>
                </div>

               
                <div className='flex flex-col gap-1.5 text-sm pt-2'>
                    <p className='font-semibold text-gray-900'> Shipping: <span className='font-medium text-gray-600'>{product.shippingInformation}</span></p>
                    <p className='font-semibold text-gray-900'>Warranty: <span className='font-medium text-gray-600'>{product.warrantyInformation}</span></p>
                    <p className='font-semibold text-gray-900'>Quantity: <span className='font-medium text-gray-600'>{product.stock} left</span></p>
                    <p className='font-semibold text-gray-900'>availability: <span className='font-medium text-emerald-600 capitalize'>{product.availabilityStatus}</span></p>
                    <p className='font-semibold text-gray-900'>Return Policy: <span className='font-medium text-gray-600'>{product.returnPolicy}</span></p>
                    <p className='font-semibold text-gray-900'>Weight: <span className='font-medium text-gray-600'>{product.weight}g</span></p>
                    <p className='font-semibold text-gray-900'>Id: <span className='font-mono font-medium text-gray-500'>{product.sku}</span></p>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-4 mt-6">
            <h3 className="text-xl font-bold text-gray-900">
                Customer Reviews ({product.reviews?.length || 0})
            </h3>

            <div className="grid grid-cols-3 gap-4">
                {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review:any, index :any) => (
                    <div
                    key={index}
                    className="bg-[#F0F0F0]/70 p-4 rounded-xl border border-gray-200/60 flex flex-col gap-2"
                    >
                    
                    <div className="flex justify-between items-center flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900 text-sm">
                            {review.reviewerName}
                        </span>
                        <span className="text-amber-500 text-xs">
                            {'★'.repeat(review.rating)}
                            {'☆'.repeat(5 - review.rating)}
                        </span>
                        </div>

                        <span className="text-xs text-gray-400">
                        {new Date(review.date).toLocaleDateString()}
                        </span>
                    </div>

                    
                    <p className="text-gray-700 text-sm italic">
                        "{review.comment}"
                    </p>

                    <span className="text-[11px] text-gray-400 font-mono">
                        {review.reviewerEmail}
                    </span>
                    </div>
                ))
                ) : (
                <p className="text-sm text-gray-500">No reviews yet.</p>
                )}
            </div>
        </div>

        <div>
            
            <div>
                <p className="text-2xl font-black text-black tracking-tight flex items-center uppercase justify-center mt-10">You might also like</p>
            
                <div className="mt-10 mb-20 w-[80vw] mx-auto">
                   
                    <Carousel>
                        <CarouselContent className="-ml-4">
                            {items.map((item: any) => {
                          
                            const imageUrl = Array.isArray(item.images) ? item.images[0] : item.images || item.thumbnail;
                            
                            return (
                          
                                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/5">
                                    <Link href={`/${item.id}`} className="block h-full">
                                        <Card className="max-w-sm h-full hover:shadow-md transition-shadow ">
                                        
                                            <img
                                                className="w-full h-48 object-contain bg-[#F0EEED] p-2"
                                                src={imageUrl}
                                                alt={item.title || 'Product Image'}
                                            />

                                            <CardHeader className="p-4 space-y-2">
                                                <CardTitle className="text-[18px] font-extrabold text-gray-900 leading-tight line-clamp-1">
                                                {item.title}
                                                </CardTitle>

                                                <div className="text-sm font-semibold text-amber-500 flex items-center gap-1">
                                                {'★'.repeat(item.rating || 0)}
                                                {'☆'.repeat(5 - (item.rating || 0))}
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
                                    </Link>
                                </CarouselItem>
                            );
                            })}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
              
                </div>
          </div>
        </div>
      
    </div>
    
  )
}

export default Hero
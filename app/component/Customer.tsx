import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials =[
  {
    name: "Sarah M.",
    rating: 5,
    review: "I&apos;m blown away by the quality of products I received from ShopHub. Each of the product I bought has exceeded my expectations."
  },

  {
    name: "Desmond",
    rating: 5,
    review: "Finding the products that align with my taste used to be  a challenge until I discovered ShopHub. The range of option they offer is remarkable."
  },

  {
    name: "James L.",
    rating: 5,
    review: "Fast delivery and amazing customer service. ShopHub is now my go-to store for products need"
  }
]

function Customer() {
  return (
    <div>
      <div className='pt-15 font-extrabold text-[30px] flex justify-center'>
      <h2 >OUR HAPPY CUSTOMERS</h2>
      </div>

      
      <Carousel className=''>
    <CarouselContent>
      {testimonials.map((item, index) => (
        <CarouselItem>

        </CarouselItem>
      ))}
  </CarouselContent>
</Carousel>
    
    </div>
  )
}

export default Customer
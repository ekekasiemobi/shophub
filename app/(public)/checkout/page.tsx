"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
};

function Page() {
    const router = useRouter ()
    const [cart, setCart] = useState<Product[]>([])
    // const [loading]

    

  return ( 
    <div>
    {/* <p>Cart &gt; Checkout</p> */}
    <h1>CHECKOUT</h1>

    <p>Payment Form </p>    
    </div>
  )
}

export default Page
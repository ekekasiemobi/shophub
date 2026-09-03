"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    const [loading, setLoading] =useState(true)

    // Load cart from local storage
    useEffect (() => {
      const savedCart =localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      setLoading(false)
    }, [])

    const subtotal =cart.reduce((sum, item) => sum +item.discountedTotal, 0);
    const shipping = 5;
    const total = subtotal + shipping;

    const handlePlaceOrder = () => {
      alert (`Order placed! Total: $${total.toFixed(2)}`)

      //clear cart after order
      localStorage.removeItem('cart') 
      
      // back home
      router.push('/')
    }

    if (loading) return <p className="p-8"> Loading......</p>
  return ( 
    <div>
     <p>Home &gt; Cart &gt; Checkout</p> 
    <h1>CHECKOUT</h1>

    {cart.length === 0 ? (
      <div>
        <p>Your cart is empty</p>
        <button onClick={() => router.push('/cart')} className="mt-4 bg-black text-white px-6 py-2 rounded-full">Go back to cart</button>
      </div>
    ): (
      <div className="grid grid-cols-1 gap-8">
        <h2>Order Summary</h2>
        {cart.map((item) => (
          <div>
            
          </div>
        )
      )}
      </div>

    )
    }

    <p>Payment Form </p>    
    </div>
  )
}

export default Page
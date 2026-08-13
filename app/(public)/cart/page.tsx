"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Trash2, MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import Image from "next/image";
// import { setDataStartEndIndexes } from "recharts/types/state/chartDataSlice";
// import axios from "axios";

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

function Cart() {
  const router = useRouter ()
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // to fetch from dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/carts/1")
      .then((res) => res.json())
      .then((data) => {
        setCart(data.products);
        setLoading(false);
      });

    // .catch(err => { console.error("Fetch error:")
    // })
  }, []);

  // }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discount = subtotal * 0.2;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  const updateQty = (id: number, change: number) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  if (loading) return <p className="p-10">Loading cart ...</p>;
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">YOUR CART</h1>

      <div className="grid lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-2 border-b">
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={200}
                height={200}
                className="w-24 h-24 rounded-lg bg-gray-100"
              />

              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{item.title}</h3>
                  <Trash2
                    className="mt-8 w-4 text-red-500 cursor-pointer"
                    onClick={() => removeItem(item.id)}
                  />
                </div>
                <p className="font-bold">${item.price}</p>
              </div>

              <div className="flex items-center gap-5 bg-gray-100 rounded-full px-3 py-1 h-7 w- mt-8">
                <MinusCircleIcon
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => updateQty(item.id, -1)}
                />
                <span>{item.quantity}</span>
                <PlusCircleIcon
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => updateQty(item.id, 1)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto">
          <div className="flex-1 bg-gray-50 p-6 rounded-2xl h-[60%] ml-10">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount (-20%)</span>
                <span>-${discount.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${delivery}</span>
              </div>
              <div className="flex justify-between border-t-2">
                <span>Total</span>
                <span>${total.toFixed(0)}</span>
              </div>
              <div className="flex gap-2 mt-5">
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="border rounded-full px-4 py-2"
                />
                <button className="bg-black text-white px-8 py-2 rounded-full">
                  Apply
                </button>
              </div>
              <button
                disabled={cart.length === 0}
                onClick={() => router.push(`/checkout`)}
                className="bg-black text-white rounded-full items-center justify-center mt-5 py-2 w-full"
              >
                Go to Checkout
              </button>
            </div>
          </div>

          {/* <div className="flex gap-2 mt-4">
              <input type="text" placeholder="Add promo code" className="border rounded-full px-4 py-2" />
              <button className="bg-black text-white px-8 py-2 rounded-full">Apply</button>
            </div> */}

          {/* <button className="bg-black text-white rounded-full items-center justify-center flex mt-5 py-2 w-full">Go to Checkout</button> */}
        </div>
      </div>
    </div>
  );
}

export default Cart;

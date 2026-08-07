import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

function Nav() {
  return (
    <div className="flex justify-between items-center mx-auto w-[90%] gap-10 pt-10">
      <h1 className="font-extrabold text-3xl">ShopHub</h1>
      <div className="flex items-center ml-20 gap-15 font-serif font-semibold">
        <Link href="/">On Sale</Link>
        <Link href="/new arrivals">New Arrivals</Link>
        <Link href="/brands">Brands</Link>
        </div>
      <div className="relative flex-1 mx-6">
          <FiSearch className="absolute left-2 top-1/2 -translate-y-2 text-gray-600" />
        <input type="text" placeholder="Search for products..." className="bg-gray-300 rounded-full px-35 py-2"/>
        </div>
        <Image src="/images/cart1.png" alt="" width={50} height={50} className=""/>
        {/* <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center"></div> */}
        <FaUser />
    </div>
  )
}

export default Nav
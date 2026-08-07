import Link from "next/link"
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { TbChevronDown } from 'react-icons/tb';

function Nav() {
   
  return (
    <>
        <div className=' bg-[#000000] p-5'>
            <div className=' container mx-auto text-white flex justify-center'>
                <p>Sign up and get 20% off to your first purchase<a href="">Sign up now</a></p>
            </div> 
        </div>


        <nav className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 md:gap-10">
        
      
        <Link href="/" className="text-2xl md:text-2xl font-black tracking-tighter text-black">
          SHOP.HUB
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-black">
        
          <Link href="/category" className="flex items-center gap-1 hover:text-gray-600 transition-colors">
            <span>Shop</span>
            <TbChevronDown className="text-base text-gray-700" />
          </Link>

          <Link href="/on-sale" className="hover:text-gray-600 transition-colors">
            On Sale
          </Link>

          <Link href="/new-arrivals" className="hover:text-gray-600 transition-colors">
            New Arrivals
          </Link>

          <Link href="/brands" className="hover:text-gray-600 transition-colors">
            Brands
          </Link>
        </div>

        <div className="flex-1 max-w-2xl relative flex items-center">
          <FiSearch className="absolute left-4 text-gray-400 text-lg pointer-events-none" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-[#F0F0F0] text-gray-800 text-sm placeholder-gray-400 pl-11 pr-4 py-2.5 rounded-full outline-none focus:ring-2 focus:ring-black/10 transition-all"
          />
        </div>

        <div className="flex items-center gap-4 text-black">
          <Link href="/cart" aria-label="Cart" className="p-1 hover:text-gray-600 transition-colors">
            <FiShoppingCart className="text-2xl" />
          </Link>

          <Link href="/account" aria-label="Account" className="p-1 hover:text-gray-600 transition-colors">
            <IoPersonCircleOutline className="text-2xl" />
          </Link>
        </div>

      </div>
    </nav>
    </>
  )
}

export default Nav
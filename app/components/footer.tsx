import React from 'react';
import Link from 'next/link';

import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="relative bg-[#F0F0F0] text-gray-600 pt-36 pb-10 mt-32">
  
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-6xl bg-black text-white rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight max-w-md leading-tight text-center lg:text-left">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        <div className="flex flex-col gap-3.5 w-full md:w-87">
      
          <div className="relative flex items-center">
            <HiOutlineMail className="absolute left-4 text-gray-400 text-xl" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-white text-gray-800 placeholder-gray-400 pl-11 pr-4 py-3 rounded-full text-sm outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />
          </div>

          <button className="w-full bg-white text-black font-semibold py-3 rounded-full text-sm hover:bg-gray-200 transition-colors">
            Subscribe to Newsletter
          </button>
        </div>
      </div>


      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          

          <div className="lg:col-span-1 flex flex-col gap-4">
            <h1 className="text-2xl font-black text-black tracking-tight">
              SHOP.HUB
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            

            <div className="flex gap-3 pt-2">
              <Link href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all">
                <FaTwitter className="text-xs" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-all">
                <FaFacebookF className="text-xs" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all">
                <FaInstagram className="text-xs" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all">
                <FaGithub className="text-xs" />
              </Link>
            </div>
          </div>

    
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold tracking-widest text-black uppercase">
              COMPANY
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="#" className="hover:text-black transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Works</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Career</Link></li>
            </ul>
          </div>


          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold tracking-widest text-black uppercase">
              HELP
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="#" className="hover:text-black transition-colors">Customer Support</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Delivery Details</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>


          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold tracking-widest text-black uppercase">
              FAQ
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="#" className="hover:text-black transition-colors">Account</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Manage Deliveries</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Orders</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Payments</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold tracking-widest text-black uppercase">
              RESOURCES
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="#" className="hover:text-black transition-colors">Free eBooks</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Development Tutorial</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">How to - Blog</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Youtube Playlist</Link></li>
            </ul>
          </div>

        </div>


        <div className="border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>Shop.hub © 2000-2023, All Rights Reserved</p>

          <div className="flex items-center gap-3">
            <div className="bg-white px-3 py-1.5 rounded-md border border-gray-200 text-[10px] font-bold text-blue-800 italic">
              VISA
            </div>
            <div className="bg-white px-3 py-1.5 rounded-md border border-gray-200 text-[10px] font-bold text-red-500">
              MasterCard
            </div>
            <div className="bg-white px-3 py-1.5 rounded-md border border-gray-200 text-[10px] font-bold text-blue-500 italic">
              PayPal
            </div>
            <div className="bg-white px-3 py-1.5 rounded-md border border-gray-200 text-[10px] font-bold text-black">
               Pay
            </div>
            <div className="bg-white px-3 py-1.5 rounded-md border border-gray-200 text-[10px] font-bold text-gray-700">
              G Pay
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
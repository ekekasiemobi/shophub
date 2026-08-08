"use client"
import { LogOut, Users2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'
import { BiBarChart, BiHome } from "react-icons/bi"
import { LuSettings } from "react-icons/lu"
import { RiAdminFill } from "react-icons/ri"

const Sidebar = () => {
  const path = usePathname()

  return (
    <aside className="h-screen w-72 shrink-0 p-5 bg-[#d5d5d5a1] shadow-sm shadow-[#626262] flex flex-col sticky top-0 overflow-hidden z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-[30px] font-extrabold">Shop.Hub</h1>
        <Image src="/arrow-menu-close.svg" alt="collapse" width={30} height={30} />
      </div>

      <div className="mt-10 flex flex-col gap-10">
        <h3 className="text-[15px] font-normal uppercase">Main Menu</h3>

        <div className="flex flex-col justify-between gap-40">
          <div className="flex flex-col gap-6">
            <Link
              href="/admin"
              className={`flex items-center justify-start gap-3 w-full px-4 ${path === '/admin' ? 'text-[20px] font-bold bg-[#626262] text-[#ededed] py-2 rounded-md' : 'text-[20px] font-bold'}`}
            >
              <BiHome className="w-7 h-7" />Dashboard
            </Link>
            <Link
              href="/admin/customers"
              className={`flex items-center justify-start gap-3 w-full px-4 ${path === '/admin/customers' ? 'text-[20px] font-bold bg-[#626262] text-[#ededed] py-2 rounded-md' : 'text-[20px] font-bold'}`}
            >
              <Users2 className="w-7 h-7" />Customers
            </Link>
            <Link
              href="/admin/analytics"
              className={`flex items-center justify-start gap-3 w-full px-4 ${path === '/admin/analytics' ? 'text-[20px] font-bold bg-[#626262] text-[#ededed] py-2 rounded-md' : 'text-[20px] font-bold'}`}
            >
              <BiBarChart className="w-7 h-7" />Analytics
            </Link>
          </div>

          <div className="flex flex-col gap-7">
            <hr className="flex w-full h-0.5 bg-[#9a9a9a]"/>
            <Link href="#" className="flex text-[20px] items-center justify-start font-bold gap-3 w-full px-4">
              <RiAdminFill className="w-7 h-7" />Admin
            </Link>
            <Link href="/admin/settings" className="flex text-[20px] items-center justify-start font-bold gap-3 w-full px-4">
              <LuSettings className="w-7 h-7" />Settings
            </Link>
          <Link href="/" className="bg-[#ededed] rounded-sm text-center p-2 flex text-[20px] items-center justify-start font-bold gap-3 w-full px-4">
              <LogOut className="w-7 h-7" />Logout
          </Link>
          </div>

        </div>
      </div>
    </aside>
  )
}

export default Sidebar
"use client";
import React from "react";
import { FaLocationPin } from "react-icons/fa6";

interface Props {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ 
  children,  
  title, 
  subtitle,
}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      
      
      <div className="w-full max-w-5xl bg-[#F0EEED] rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        
        
        <div className="w-full md:w-1/4 flex items-center justify-center}">
          
        </div>

        
        <div className="w-full md:w-1/2 p-8 md:p-8">
          <div className="flex justify-end mb-8">
            <div className="flex items-center gap-2 text-gray-700 font-semibold">
              <FaLocationPin className="text-black" />
              <span>SHOPHUB</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-500 mt-1 mb-6">{subtitle}</p>

          {children}
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState, InputHTMLAttributes } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, type = "text", ...props }: InputProps) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  
  return (
    <div>
      <label className="block text-xs text-black mb-1.5">{label}</label>
      <div className="relative">
        <input
          type={isPassword && show ? "text" : type}
          className="w-full bg-white outline-black hover:outline-indigo-600 text-sm text-black rounded-md px-3 py-2.5"
          {...props}
        />
        {isPassword && (
          <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-3 text-gray-400">
            {show ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="w-full bg-black hover:bg-gray-600 text-white font-semibold py-2.5 rounded-md transition"
      {...props}
    >
      {children}
    </button>
  );
}
"use client";
import AuthLayout from "@/components/AuthLayout";
import { Input, Button } from "@/components/Input";
import Link from "next/link";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

export default function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  return (
    <AuthLayout 
      title="Login"
      subtitle="Welcome back! Please enter your details."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          label="Email" 
          type="email" 
          placeholder="john@doe@gmail.com" 
          required 
        />
        <Input 
          label="Password" 
          type="password" 
          placeholder="••••••••" 
          required 
        />

        <div className="flex items-center justify-between text-xs text-500">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-indigo-600" />
            Remember me
          </label>
          <Link href="/reset-password" className="text-indigo-600 font-medium hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button >Login</Button>

        <p className="text-center text-xs text-gray-500">
          Don't have an account? <Link href="/signup" className="text-indigo-600 font-medium">Sign up</Link>
        </p>

        <div className="flex items-center gap-2 my-4">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-xs text-gray-400">Or login with</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button type="button" className="border border-gray-300 rounded-md py-2.5 flex justify-center bg-black hover:bg-gray-400">
            <FaFacebook className="text-blue-600" />
          </button>
          <button type="button" className="border border-gray-300 rounded-md py-2.5 flex justify-center bg-black hover:bg-gray-400">
            <FaGoogle className="text-red-500" />
          </button>
          <button type="button" className="border border-gray-300 rounded-md py-2.5 flex justify-center bg-black hover:bg-gray-400">
            <FaApple />
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
"use client";
import AuthLayout from "@/components/AuthLayout";
import { Input, Button } from "@/components/Input";
import Link from "next/link";
// import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

export default function SignUp() {
  return (
    <AuthLayout 
      title="Sign up"
      subtitle="Let's get you all set up so you can access your personal account."
    >
      <form className="space-y-3">
        <div className="grid grid-cols-2 gap-3 text-gray-600">
          <Input label="First Name" placeholder="John" />
          <Input label="Last Name" placeholder="Doe" />
        </div>
        <div className="grid grid-cols-2 gap-3 text-gray-600">
          <Input label="Email" type="email" placeholder="john@doe@gmail.com" />
          <Input label="Phone Number" placeholder="+234..." />
        </div>
        <Input className="w-full bg-white outline-black hover:outline-indigo-600 text-sm text-black rounded-md px-3 py-2.5" label="Password" type="password" />
        <Input className="w-full bg-white outline-black hover:outline-indigo-600 text-sm text-black rounded-md px-3 py-2.5" label="Confirm Password" type="password" />

        <div className="flex items-center text-xs">
          <input type="checkbox" className="mr-2 accent-indigo-600" />
          <span className="text-gray-500">I agree to all the terms and Privacy Policies</span>
        </div>

        <Button>Create account</Button>
        <p className="text-center text-xs text-gray-400">
          Already have an account? <Link href="/login" className="text-indigo-600 font-medium">Login</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
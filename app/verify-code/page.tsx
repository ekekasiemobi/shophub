"use client";
import AuthLayout from "@/components/AuthLayout";
import { Input, Button } from "@/components/Input";
import Link from "next/link";

export default function Verify() {
  return (
    <AuthLayout 
      title="Verify code"
      subtitle="An authentication code has been sent to your email."
    >
      <Link href="/login" className="text-sm text-gray-500 flex items-center mb-3 hover:text-indigo-600">← Back to login</Link>
      <Input label="Enter Code" placeholder="7T8U9AX" />
      <p className="text-xs mb-4">Didn't receive a code? <Link href="/reset" className="text-red-500 font-medium">Resend</Link></p>
      <Button>Verify</Button>
    </AuthLayout>
  );
}
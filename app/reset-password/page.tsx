"use client";
import AuthLayout from "@/components/AuthLayout";
import { Input, Button } from "@/components/Input";
import Link from "next/link";
import { useState } from "react";

export default function ResetPassword() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    
  };

  return (
    <AuthLayout 
      title={sent ? "Check your email" : "Reset password"}
      subtitle={sent 
        ? "We sent a password reset link to your email" 
        : "Enter your email and we'll send you instructions to reset your password."
      }
    >
      {!sent ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            label="Email" 
            type="email" 
            placeholder="john@doe@gmail.com" 
            required 
          />

          <Button>Send reset link</Button>

          <Link href="/login" className="text-sm text-gray-500 flex items-center justify-center mt-4 hover:text-indigo-600">
            ← Back to login
          </Link>
        </form>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Didn't get the email? Check your spam folder or
          </p>
          <button 
            onClick={() => setSent(false)}
            className="text-sm text-indigo-600 font-medium hover:underline"
          >
            Try another email
          </button>
          
          <Link href="/login">
            <Button type="button">Back to Login</Button>
          </Link>
        </div>
      )}
    </AuthLayout>
  );
}
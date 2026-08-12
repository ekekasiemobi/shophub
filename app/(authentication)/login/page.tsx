"use client";
import * as z from "zod";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../lib/auth";
import { Input, Button } from "../components/input";
import AuthLayout from "../components/AuthLayout";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { Suspense } from "react";



const schema = z.object({
  username: z.string().min(3),
  password: z.string().min(4),
});

type FormData = z.infer<typeof schema>;


 function Login() {
    
  const router = useRouter();
  const { handleSubmit, register, formState: { isSubmitting, errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });
  const searchParams = useSearchParams();
// const router = useRouter();

const role = searchParams.get("role");

  

 const { login } = useAuth();

const onSubmit = async (data: FormData) => {
  try {
    await login(data.username, data.password);

    toast.success("Login successful!");

   if (role === "admin") {
  router.push("/admin");
} else {
  router.push("/dashboard");
}

  } catch (error) {
    toast.error("Invalid username or password");
  }
};

  return (
    <AuthLayout title="Login">
      <Toaster />
      <p className="text-xs text-gray-500 mb-2">Welcome back lets dive back in</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Username" {...register("username")} errorMsg={errors.username?.message} />
        <Input label="Password" type="password" {...register("password")} errorMsg={errors.password?.message} />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
        <p className="text-right text-xs text-gray-500">
          Don't have an account? <Link href="/signup" className="text-indigo-600 font-medium">Sign up</Link>
        </p>
        <p className="text-left text-xs text-gray-500">
          Go back? <Link href="/dashboard" className="text-indigo-600 font-medium">Back</Link>
        </p>

      </form>

      
    </AuthLayout>
  );
   
}
export default function Form() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Login/>
        </Suspense>
    )
}

       
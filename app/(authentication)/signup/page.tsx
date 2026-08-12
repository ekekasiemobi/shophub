"use client";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button } from "../components/input";
import AuthLayout from "../components/AuthLayout";
import Link from "next/link";
import { login } from "../lib/auth";

const schema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  username: z.string().min(5),
});

type FormData = z.infer<typeof schema>;

export default function Signup() {
  const router = useRouter();
  const { handleSubmit, register, formState: { isSubmitting, errors } } = useForm<FormData>({
  resolver: zodResolver(schema)
});

  const onSubmit = async (data: FormData) => {
    try {
      const res = await axios.post(
  "https://dummyjson.com/users/add",
  data
);

toast.success("Account created!");
router.push("/login");
    } catch (error) {
      toast.error("Signup failed");
    }
  };

  return (
    <AuthLayout title="Create Account">
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="First Name" {...register("firstName")} errorMsg={errors.firstName?.message} />
        <Input label="Last Name" {...register("lastName")} errorMsg={errors.lastName?.message} />
        <Input label="Email" type="email" {...register("email")} errorMsg={errors.email?.message} />
        <Input label="Username" type="username" {...register("username")} errorMsg={errors.username?.message} />
        <Input label="Password" type="password" {...register("password")} errorMsg={errors.password?.message} />
        
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Sign Up"}
        </Button>
        <p className="text-center text-xs text-gray-400">
          Already have an account? <Link href="/login" className="text-indigo-600 font-medium">Login</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
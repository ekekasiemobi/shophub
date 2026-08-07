"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  if (!user) return null;

  return (
    <div className="p-6">
      <h1>Welcome {user.email}</h1>

      <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2"
      >
        Logout
      </button>
    </div>
  );
}
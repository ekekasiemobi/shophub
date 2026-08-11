"use client";

import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Dashboard() {
  const handleLogout = () => {
  logout();
  toast.success("Logged out");
  router.push("/login");
};
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  if (!user) return null;

  return (
    <ProtectedRoute>
      <div className="p-6">
      <h1>Welcome {user.username}</h1>

      <button
        onClick={logout}
        className="mt-4 bg-gray-500 text-white px-4 py-2"
      >
        Logout
      </button>
    </div>

    </ProtectedRoute>
    
  );
}
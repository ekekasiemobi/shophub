"use client";

import { useRouter } from "next/navigation";

export default function AuthenticationPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-300 px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">

        {/* Header */}
        <div className="text-center text-white mb-10">
          <p className="text-2xl md:text-2xl font-black tracking-tighter text-black">
            ShopHub
          </p>

          <h1 className="text-3xl md:text-5xl font-bold container mx-auto text-gray-600 flex justify-center">
            Choose how you want to sign in
          </h1>

          <p className="mt-3 text-sm md:text-base text-gray-600">
            Select the account type that matches your access.
          </p>
        </div>

        {/* Cards */}
        <div className="bg-[#F0EEED] backdrop-blur-md border border-white/20 rounded-3xl p-5 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* User */}
            <button
              type="button"
              onClick={() => router.push("/login?role=user")}
              className="group text-left bg-white rounded-2xl p-6 min-h-[220px] transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Login as User
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Secure user sign-in
                  </p>
                </div>

                <span className="text-gray-400 text-xl group-hover:translate-x-1 transition">
                  →
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-10">
                Access your account, orders, products and personal
                dashboard.
              </p>

              <span className="inline-block mt-6 text-sm font-semibold text-blue-600">
                Continue
              </span>
            </button>

            {/* Admin */}
            <button
              type="button"
              onClick={() => router.push("/login?role=admin")}
              className="group text-left bg-white rounded-2xl p-6 min-h-[220px] transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Login as Admin
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Secure administrator sign-in
                  </p>
                </div>

                <span className="text-gray-400 text-xl group-hover:translate-x-1 transition">
                  →
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-10">
                Manage products, customers, orders, analytics and
                application settings.
              </p>

              <span className="inline-block mt-6 text-sm font-semibold text-blue-600">
                Continue
              </span>
            </button>

          </div>

          <div className="mt-6 flex justify-between text-sm text-white/80">
            <span>
              Don't have an account?{" "}
              <button
                onClick={() => router.push("/signup")}
                className="font-semibold underline"
              >
                Register here
              </button>
            </span>

            <span>
              Need help? Contact support
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
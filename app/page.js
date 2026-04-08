"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Login failed");
        setLoading(false);
        return;
      }

      router.push("/multistepform");
      router.refresh();

    } catch (err) {
      setMessage("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
      <div className="w-[400px] bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-2">
          Login
        </h1>
        <h2 className="text-sm text-gray-500 text-center mb-6">
          Please enter your email and password
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-black text-white py-2 rounded-lg 
            hover:bg-gray-800 transition disabled:bg-gray-400"
          >
            {loading ? "Signing in..." : "Sign in →"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-red-600 bg-red-50 p-2 rounded text-center">
            {message}
          </p>
        )}

        {/* 🔗 Register Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <button
              onClick={() => router.push("/register")}
              className="text-black font-semibold hover:underline"
            >
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
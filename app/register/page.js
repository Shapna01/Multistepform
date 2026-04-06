"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Registration successful! Redirecting...");
      setTimeout(() => router.push("/"), 1500);
    } else {
      setMessage(data.error || "Registration failed.");
    }

    setLoading(false);
  };

  const inputClass =
    "w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white w-[400px] p-8 rounded-xl shadow-lg border">
        
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Create Your Account
        </h1>

        {message && (
          <p className="mb-4 text-center text-sm text-blue-600">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600 text-sm">
          Already have an account?{" "}
          <span
            className="text-black font-semibold cursor-pointer"
            onClick={() => router.push("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
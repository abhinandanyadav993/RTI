import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700">
      <div className="flex w-4/5 max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Graphic Section */}
        <div className="hidden md:flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-purple-700 to-purple-900 text-white p-10 relative">
          <h1 className="text-3xl font-bold text-center">Welcome back!</h1>
          <p className="mt-4 text-center">You can sign in to access with your existing account.</p>
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/600x400')" }}></div>
        </div>

        {/* Login Form Section */}
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">Sign In</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-purple-700 mb-1">Username or email</label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your username or email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-purple-700 mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="text-sm text-purple-500 mt-1 hover:underline"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"} password
              </button>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                className="mr-2"
              />
              <label htmlFor="remember" className="text-sm text-purple-700">Remember me</label>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition-all"
            >
              Sign In
            </button>
            <a
              href="#"
              className="block text-center text-sm text-purple-500 mt-4 hover:underline"
            >
              Forgot password?
            </a>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm">New here? <a href="#" className="text-purple-500 hover:underline">Create an Account</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700">
      <div className="flex w-4/5 max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Graphic Section */}
        <div className="hidden md:flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-purple-700 to-purple-900 text-white p-10 relative">
          <h1 className="text-3xl font-bold text-center">Welcome!</h1>
          <p className="mt-4 text-center">Create an account to enjoy all the features of our platform.</p>
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/600x400')" }}></div>
        </div>

        {/* Signup Form Section */}
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-purple-700 mb-1">Username</label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Choose a username"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-purple-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-purple-700 mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Create a password"
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
                id="terms"
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm text-purple-700">
                I agree to the <a href="#" className="text-purple-500 hover:underline">Terms and Conditions</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition-all"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm">Already have an account? <a href="#" className="text-purple-500 hover:underline">Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

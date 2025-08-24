"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white container mx-auto mt-12 mb-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg  overflow-hidden">
        {/* Left Illustration */}
        <div className="flex items-center justify-center p-8 bg-white">
          <Image
            src="/assets/images/login/login.svg" 
            alt="Sign Up Illustration"
            width={320}
            height={320}
            className="object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="flex flex-col justify-center p-4 border border-gray-100 shadow">
          <h2 className="text-2xl font-semibold text-center py-2">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
              <input
                type="text"
                placeholder="Your name"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
              <input
                type="email"
                placeholder="Your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
              <input
                type="password"
                placeholder="Your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

           

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#FF3811] text-white hover:text-[#92230d] font-medium py-2 rounded-md "
            >
              Sign Up
            </button>
          </form>

          {/* Social Sign Up */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Or Sign Up with</p>
            <div className="flex justify-center gap-4 mt-3">
              <button className="p-2 border rounded-full hover:bg-gray-100">
                <FaFacebookF className="text-blue-600" />
              </button>
              <button className="p-2 border rounded-full hover:bg-gray-100">
                <FaLinkedinIn className="text-blue-700" />
              </button>
              <button className="p-2 border rounded-full hover:bg-gray-100">
                <FaGoogle className="text-red-500" />
              </button>
            </div>
          </div>

          {/* Login Link */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-orange-600 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

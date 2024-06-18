import React from 'react';

const LoginSignup = () => {
  return (
    <div className="bg-purple-100 mt-10 h-auto flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-28">
        <h1 className="text-center text-2xl font-bold mb-6">Sign Up</h1>
        <div className="flex flex-col gap-4 border ">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded"
          />
        </div>
        <button className="w-full bg-red-500 text-white p-3 rounded mt-6 hover:bg-red-600 transition duration-300">
          Continue
        </button>
        <p className="text-center mt-4">
          Already have an account? <span className="text-red-500 cursor-pointer">Login here</span>
        </p>
        <div className="flex items-center mt-4">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm">
            By continuing, I agree to the terms of use and privacy policy.
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

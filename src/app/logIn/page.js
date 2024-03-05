"use client";
import React, { useState } from "react";
import { auth } from "../../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      // User signed in successfully, handle next steps here
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        // Direct the user to sign up since the account does not exist
        setError("Account does not exist. Please create an account.");
      } else {
        setError(error.message); // Handle other sign-in errors
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-6 bg-white shadow-md rounded">
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <a href="/profile" className="text-white">
              Sign In
            </a>
          </button>
          <p className="text-center mt-2">
            {"Don't have an account? "}
            {/* Adjust the path as per your routing setup */}
            <a href="/signUp" className="text-blue-500 hover:text-blue-600">
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

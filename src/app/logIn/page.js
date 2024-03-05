// src/SignIn.js
"use client";
import React, { useState } from "react";
import { auth, app } from "../../../firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Import the functions needed to interact with Firestore

const db = getFirestore(app);

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
      // User signed in successfully, you might want to redirect them or do something else here
      // Optionally, update or push user info to Firestore as shown previously
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        // Attempt to sign up the user since they do not exist
        try {
          const newUserCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          // New user created successfully, you might want to redirect them or do something else here
          // Optionally, add new user info to Firestore here
          const user = newUserCredential.user;
          const userRef = doc(db, "users", user.uid);
          await setDoc(
            userRef,
            {
              email: user.email,
              createdAt: new Date(), // Additional initial user information can be added here
            },
            { merge: true }
          );
        } catch (signupError) {
          setError(signupError.message); // Handle sign-up errors (e.g., weak password)
        }
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
          <button type="submit">
            <a
              href="/profile"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Sign In / Sign Up
            </a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

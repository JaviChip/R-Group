// src/SignUp.js
"use client";
import React, { useState } from "react";
import { auth, app } from "../../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(app);

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [housingStatus, setHousingStatus] = useState("");
  const [major, setMajor] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [year, setYear] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const newUserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(newUserCredential);
      // New user created successfully, handle next steps here
      // For example, you might want to save additional user info to Firestore
      const user = newUserCredential.user;
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          Email: user.email, // You can add more user details here
          createdAt: new Date(),
          Age: age,
          City: city,
          Gender: gender,
          HousingSatus: housingStatus,
          Major: major,
          Name: name,
          Phone: phone,
          Street: street,
          Year: year,
          Zip: zip,
        },
        { merge: true }
      );
      window.location.href = "/profile";
      // Optionally, redirect the user or show a success message
    } catch (signupError) {
      setError(signupError.message); // Handle sign-up errors here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen my-40">
      <div className="p-6 bg-white shadow-md rounded">
        <form onSubmit={handleSignUp} className="space-y-4">
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
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <input
              type="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="housingStatus"
              className="block text-sm font-medium text-gray-700"
            >
              Housing Status
            </label>
            <input
              type="housingStatus"
              id="housingStatus"
              value={housingStatus}
              onChange={(e) => setHousingStatus(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="major"
              className="block text-sm font-medium text-gray-700"
            >
              Major
            </label>
            <input
              type="major"
              id="major"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700"
            >
              Year
            </label>
            <input
              type="year"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="street"
              className="block text-sm font-medium text-gray-700"
            >
              Street Address
            </label>
            <input
              type="street"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-gray-700"
            >
              Zip Code
            </label>
            <input
              type="zip"
              id="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create Account
          </button>
          <p className="text-center mt-2">
            Already have an account?&nbsp;&nbsp;
            {/* Adjust the path as per your routing setup */}
            <a href="/signIn" className="text-blue-500 hover:text-blue-600">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

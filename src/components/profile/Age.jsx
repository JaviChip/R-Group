"use client";
import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../../firebase-config"; // Ensure you have this file set up with your Firebase config

const db = getFirestore(app);

const Age = ({ userId }) => {
  const [age, setAge] = useState("Loading...");

  useEffect(() => {
    const fetchAge = async () => {
      const docRef = doc(db, "users", "MAEg37ufOCdZrrNhIiNv"); // Replace 'userId' with the actual document ID when calling this component
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // Assuming the document has an 'Age' field
        setAge(docSnap.data().Age);
      } else {
        setAge("N/A");
      }
    };

    fetchAge();
  }, [userId]);

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <span className="text-lg font-medium text-gray-900">Age: </span>
      <span className="ml-2 p-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded border border-blue-200">
        {age}
      </span>
    </div>
  );
};

export default Age;

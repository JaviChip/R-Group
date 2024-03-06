"use client";
import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../../firebase-config";

const db = getFirestore(app);

const Year = ({ userId }) => {
  const [year, setYear] = useState("Loading...");

  useEffect(() => {
    const fetchYear = async () => {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setYear(docSnap.data().Year);
      } else {
        setYear("N/A");
      }
    };

    fetchYear();
  }, [userId]);

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <span className="text-lg font-medium text-gray-900">Year: </span>
      <span className="ml-2 p-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded border border-blue-200">
        {year}
      </span>
    </div>
  );
};

export default Year;

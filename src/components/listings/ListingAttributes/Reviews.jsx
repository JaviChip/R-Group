"use client";
import React from "react";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/solid";

const Reviews = () => {
  return (
    <div className="bg-black p-3 inline-flex items-center space-x-1">
      <span className="text-white font-bold">Reviews</span>
      <Link href="/listings">
        <div className="flex focus:outline-none">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} className="h-6 w-6 text-red-500" />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Reviews;

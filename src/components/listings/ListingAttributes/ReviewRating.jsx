"use client";
import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

const ReviewRating = ({ rating, setRating }) => {
  // Internal state to manage hover and click state of stars
  const [internalRating, setInternalRating] = useState(rating);

  // Effect hook to reset internal rating when the prop changes
  useEffect(() => {
    setInternalRating(rating);
  }, [rating]);

  const handleRating = (index) => {
    setRating(index); // This changes the parent component's state
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          onClick={() => handleRating(index)}
          className="focus:outline-none"
          aria-label={`Rate ${index} out of 5 stars`}
        >
          <StarIcon
            className={`h-10 w-8 ${
              index <= internalRating ? "text-yellow-500" : "text-gray-400"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default ReviewRating;

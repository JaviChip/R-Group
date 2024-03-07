"use client";
import React, { useState } from "react";
import ReviewRating from "./ReviewRating";

const WriteAReview = () => {
  const [review, setReview] = useState({
    rating: 0, // This state holds the rating value
    reviewText: "",
  });

  const handleRatingChange = (newRating) => {
    setReview({ ...review, rating: newRating }); // Update the rating part of the state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review submitted:", review);
    // Add your logic to save the review to a database or perform other actions
    setReview({ rating: 0, reviewText: "" }); // Reset form and rating after submission
  };

  return (
    <div className="write-review-container">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          {/* ReviewRating component is controlled by review.rating state */}
          <ReviewRating rating={review.rating} setRating={handleRatingChange} />
        </div>
        <div className="form-group review-textarea">
          <label htmlFor="reviewText" className="block mb-2">
            Review:
          </label>
          <textarea
            id="reviewText"
            name="reviewText"
            value={review.reviewText}
            onChange={handleChange}
            required
            className="border-2 border-black p-2 mt-1"
          ></textarea>
        </div>
        <button type="submit" className="mt-4 bg-slate-300">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default WriteAReview;

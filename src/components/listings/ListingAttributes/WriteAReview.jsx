"use client";
import React, { useState } from "react";

const WriteAReview = () => {
  const [review, setReview] = useState({
    rating: "",
    reviewText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review submitted:", review);
    // Add your logic to save the review to a database or perform other actions
    setReview({ rating: "", reviewText: "" }); // Reset form after submission
  };

  return (
    <div className="write-review-container">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={review.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="reviewText">Review:</label>
          <textarea
            id="reviewText"
            name="reviewText"
            value={review.reviewText}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default WriteAReview;

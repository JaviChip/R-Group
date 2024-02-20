"use client";
import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

const StarButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <button onClick={toggleFavorite} className="focus:outline-none">
      <StarIcon className={`h-6 w-6 ${isFavorited ? 'text-yellow-500' : 'text-red-500'}`} />
    </button>
  );
};

export default StarButton;
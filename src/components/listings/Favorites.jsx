import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // using react-icons for the star icon

const StarButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
        // Here you would also handle the logic to save the favorite status to your future backend or local storage
    };

    return (
        <button
            onClick={toggleFavorite}
            className={`text-2xl ${isFavorited ? 'text-yellow-500' : 'text-red-500'} transition-colors duration-150 ease-in-out`}
        >
            <FaStar />
        </button>
    );
};

export default StarButton;
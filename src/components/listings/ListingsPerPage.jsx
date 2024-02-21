import React, { useState, useEffect } from "react";

const ListingsPerPage = () => {
  const [listings, setListings] = useState([]);

  // Simulated fetch function (replace with your actual fetch logic)
  useEffect(() => {
    const fetchListings = async () => {
      // Simulated data, replace with actual data fetching logic
      const data = Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        title: `Listing ${index + 1}`,
      }));

      setListings(data);
    };

    fetchListings();
  }, []);

  return (
    <div>
      {/* Render the number of listings */}
      <p>Number of listings: {listings.length}</p>
    </div>
  );
};

export default ListingsPerPage;

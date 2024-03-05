import React, { useState } from "react";

const ListingsPerPage = () => {
  const [perPage, setPerPage] = useState("");

  const handlePerPageChange = (e) => {
    setPerPage(e.target.value);
  };

  return (
    <div>
      <label htmlFor="perPageDropdown">Listings per page: </label>
      <select
        id="perPageDropdown"
        onChange={handlePerPageChange}
        value={perPage}
      >
        <option value="">Select...</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default ListingsPerPage;

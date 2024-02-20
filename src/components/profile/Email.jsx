import React from "react";
const mockCityDatabase = {
  "John Doe": "john@email.com",
  "Jane Doe": "Los Angeles",
};

const Email = ({ name }) => {
  const city = mockCityDatabase[name];

  const containerStyle = {
    backgroundColor: "gray",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "210px",
    margin: "auto",
    marginTop: "20px",
  };

  const cityDisplayStyle = {
    backgroundColor: "white",
    color: "black",
    padding: "5px 10px",
    borderRadius: "10px",
    flexGrow: 1,
    marginLeft: "10px",
  };

  return (
    <div style={containerStyle}>
      <span>Email:</span>
      <span style={cityDisplayStyle}>{city ?? "N/A"}</span>
    </div>
  );
};

export default Email;

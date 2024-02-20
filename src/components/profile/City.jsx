import React from "react";
const mockCityDatabase = {
  "John Doe": "New York",
  "Jane Doe": "Los Angeles",
};

const City = ({ name }) => {
  const city = mockCityDatabase[name];

  const containerStyle = {
    backgroundColor: "gray",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "200px",
    marginLeft: "500px",
    marginTop: "-55px",
  };

  const cityDisplayStyle = {
    backgroundColor: "white",
    color: "black",
    padding: "5px 10px",
    borderRadius: "5px",
    flexGrow: 1,
    marginLeft: "10px",
  };

  return (
    <div style={containerStyle}>
      <span>City:</span>
      <span style={cityDisplayStyle}>{city ?? "N/A"}</span>
    </div>
  );
};

export default City;

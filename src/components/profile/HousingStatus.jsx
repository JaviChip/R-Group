import React from "react";

const mockDatabase = {
  "John Doe": "Active",
  "Jane Doe": 25,
};

const HousingStatus = ({ name }) => {
  const HousingStatus = mockDatabase[name];

  const containerStyle = {
    backgroundColor: "gray",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "200px",
    margin: "auto",
    marginTop: "100px",
  };

  const ageDisplayStyle = {
    backgroundColor: "white",
    color: "black",
    padding: "5px 10px",
    borderRadius: "5px",
    flexGrow: 1,
    marginLeft: "10px",
  };

  return (
    <div style={containerStyle}>
      <span>Housing:</span>
      <span style={ageDisplayStyle}>{HousingStatus ?? "N/A"}</span>
    </div>
  );
};

export default HousingStatus;

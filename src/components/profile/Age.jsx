import React from "react";

const mockDatabase = {
  "John Doe": 30,
  "Jane Doe": 25,
};

const Age = ({ name }) => {
  const age = mockDatabase[name];

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
    marginTop: "20px",
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
      <span>Age:</span>
      <span style={ageDisplayStyle}>{age ?? "N/A"}</span>
    </div>
  );
};

export default Age;

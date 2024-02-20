import React from "react";

const mockDatabase = {
  "John Doe": "123 riverside",
  "Jane Doe": 25,
};

const Street = ({ name }) => {
  const Street = mockDatabase[name];

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
      <span>Street:</span>
      <span style={ageDisplayStyle}>{Street ?? "N/A"}</span>
    </div>
  );
};

export default Street;

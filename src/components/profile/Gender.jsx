import React from "react";

const mockDatabase = {
  "John Doe": "Male",
  "Jane Doe": 25,
};

const Gender = ({ name }) => {
  const Gender = mockDatabase[name];

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
      <span>Gender:</span>
      <span style={ageDisplayStyle}>{Gender ?? "N/A"}</span>
    </div>
  );
};

export default Gender;

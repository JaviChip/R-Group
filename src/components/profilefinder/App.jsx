import React from "react";
import Profile from "../profile";

const App = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      age: 20,
      year: "Sophomore",
      major: "Computer Science",
      hobbies: ["Coding", "Chess", "Hiking"],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 22,
      year: "Senior",
      major: "Biology",
      hobbies: ["Reading", "Gardening", "Painting"],
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 21,
      year: "Junior",
      major: "Mathematics",
      hobbies: ["Cycling", "Traveling", "Cooking"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <Profile
          key={user.id}
          name={user.name}
          age={user.age}
          year={user.year}
          major={user.major}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};

export default App;

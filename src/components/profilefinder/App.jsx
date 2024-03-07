import React from "react";
import Profile from ".//profile";
import { collection, query, getDocs, getFirestore, } from "firebase/firestore";
import { app } from "../../../firebase-config";

const db = getFirestore(app);
const App = async () => {
  const q = query(collection(db, "users"));
  const querySnapshot = await getDocs(q);
  const users = [];
  querySnapshot.forEach((doc) => {
    users.push({
      id: doc.id,
      name: doc.data().Name,
      age: doc.data().Age,
      year: doc.data().Year,
      major: doc.data().Major,
    })
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <Profile
          key={user.id}
          name={user.name}
          age={user.age}
          year={user.year}
          major={user.major}
        />
      ))}
    </div>
  );
};

export default App;

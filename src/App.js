import React, { useContext } from "react";
import { GlobalContext, GlobalProvider } from "./GlobalContext";

const UserProfile = () => {
  const { user, setUser } = useContext(GlobalContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
};

const App = () => (
  <GlobalProvider>
    <UserProfile />
  </GlobalProvider>
);

export default App;

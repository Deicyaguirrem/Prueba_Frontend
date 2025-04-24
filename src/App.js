import React, { useEffect, useState } from "react";
import { fetchData } from "./service/apiService"; 

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Bienvenido a la App</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";

function UserDataFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>User Data Fetch and Display</h2>

      {users.map((user) => (
        <div>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Company: {user.company.name}</p>
        </div>
      ))}
    </div>
  );
}

export default UserDataFetch;
import React from "react";
import { useFetch } from "./useFetch";

export function UsersList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Se încarcă...</p>;
  if (error) return <p style={{ color: "red" }}>Eroare: {error}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          {user.name} — {user.email}
        </li>
      ))}
    </ul>
  );
}

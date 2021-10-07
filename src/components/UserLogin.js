import React, { useState } from "react";

export default function UserLogin() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/users")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          id="username"
          placeholder=""
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder=""
        />{" "}
        &nbsp;
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

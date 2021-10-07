import React, { useState } from "react";

export default function UserLogin() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/users")
      .then((r) => r.json())
      .then((data) => {
        const usernameChecker = data.filter((userObj) =>
          userObj.username.includes(user)
        );
        console.log(usernameChecker[0].password);

        if (usernameChecker[0].password === password) {
          console.log("You are logged in bro!");
        } else {
          console.log("Incorrect Password duuude!");
        }
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

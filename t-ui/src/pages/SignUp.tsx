import { useState } from "react";
import { baseurl, USERS } from "../constants/api";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LENTGTH = 6;
  const submitDisabled = !Boolean(
    username.length > LENTGTH &&
      password.length > LENTGTH &&
      email.length > LENTGTH
  );

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const resource = `${baseurl}${USERS}`;

      const response = await fetch(resource, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          id="username"
          onChange={(event) => setUsername(event.target.value)}
          placeholder="username"
        />
        <label htmlFor="email"></label>
        <input
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
        />
        <label htmlFor="password"></label>
        <input
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
        />
        <input type="submit" value="Submit" disabled={submitDisabled} />
      </form>
    </>
  );
}

export default SignUp;

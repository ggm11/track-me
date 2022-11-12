import { useState } from "react";
import { baseurl, AUTH } from "../constants/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LENTGTH = 6;
  const submitDisabled = !Boolean(
    email.length > LENTGTH && password.length > LENTGTH
  );

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const resource = `${baseurl}${AUTH}`;

      const response = await fetch(resource, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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

export default Login;

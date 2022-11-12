import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const LENTGTH = 6;
  const submitDisabled = !Boolean(
    username.length > LENTGTH && password.length > LENTGTH
  );

  const handleSubmit = () => console.log({ username, password });

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          id="username"
          onChange={(event) => setUsername(event.target.value)}
          placeholder="username"
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

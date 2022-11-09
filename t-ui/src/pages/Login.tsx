import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitDisabled = !Boolean(username.length > 6 && password.length > 6);

  const handleSubmit = () => console.log({ username, password });

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          id="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password"></label>
        <input
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" value="Submit" disabled={submitDisabled} />
      </form>
    </>
  );
}

export default Login;

import { useAuth } from "../hooks/useAuth";

function Login() {
  const { login, setEmail, setPassword, submiLogintDisabled } = useAuth();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await login();
      console.log(response);
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
        <input type="submit" value="Submit" disabled={submiLogintDisabled} />
      </form>
    </>
  );
}

export default Login;

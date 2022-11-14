import { useAuth } from "../hooks/useAuth";

function SignUp() {
  const {
    signUpUser,
    setUsername,
    setEmail,
    setPassword,
    submitSignUpDisabled,
  } = useAuth();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await signUpUser();
      console.log(response);
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
        <input type="submit" value="Submit" disabled={submitSignUpDisabled} />
      </form>
    </>
  );
}

export default SignUp;

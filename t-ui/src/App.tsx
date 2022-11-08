import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const url = "http://localhost:5500/api/exercises";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setMessage(json.message);
        setError(false);
        setLoading(false);
        console.log(json);
      })
      .catch((_err) => setError(true));
  }, []);

  const handleClick = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "musc1" }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      <h1>EXERCISES</h1>
      <button onClick={handleClick}>POST BUTTON</button>
      <div>{error && "There was an error"}</div>
      <div>{loading && "LOADING"}</div>
      <div>{!loading && message}</div>
    </>
  );
}

export default App;

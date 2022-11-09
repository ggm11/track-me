import { ChangeEvent, useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const url = "http://localhost:5500/api/exercises";
  const [name, setName] = useState("");

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
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <h1>EXERCISES</h1>
      <div>{error && "There was an error"}</div>
      <div>{loading && "LOADING"}</div>
      <div>{!loading && message}</div>
      <input type="text" onChange={handleChange} />
      <button disabled={name.length < 4} onClick={handleClick}>
        POST BUTTON
      </button>
    </>
  );
}

export default App;

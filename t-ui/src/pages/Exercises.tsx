import { ChangeEvent, useEffect, useState } from "react";

function Exercises() {
  const [name, setName] = useState("");
  const [exercises, setExercises] = useState({ status: "", data: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = "http://localhost:5500/api/exercises";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setExercises(json);
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
  return (
    <>
      <h1>Exercises</h1>
      <div>{error && "There was an error"}</div>
      <div>{loading && "LOADING"}</div>
      <div>
        {!loading &&
          exercises.data.map(
            (exercise: { name: string; createdAt: string }, index) => (
              <div key={index}>{exercise.name + exercise.createdAt}</div>
            )
          )}
      </div>
      <input type="text" onChange={handleChange} />
      <button disabled={name.length < 4} onClick={handleClick}>
        POST BUTTON
      </button>
    </>
  );
}

export default Exercises;

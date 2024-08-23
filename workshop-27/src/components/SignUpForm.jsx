import { useState } from "react";

export default function SignUpForm({setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("button pushed");
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          body: JSON.stringify({ username, password }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const result = await response.json();
      setToken(result.token)
      console.log(result);
    } catch (setError) {
      console.error(setError);
    }
  }
  console.log("handleSubmit")

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
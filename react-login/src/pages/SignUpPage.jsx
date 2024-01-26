import { useState } from "react";

export function SignUpPage() {
  const [message, setMessage] = useState("");

  async function handleSignUp(event) {
    event.preventDefault();

    let url = "http://localhost:8081/sign-up";

    let body = new URLSearchParams();

    body.append("name", event.target.username.value);
    body.append("email", event.target.email.value);
    body.append("password", event.target.password.value);

    let options = {
      method: "POST",
      body: body,
    };

    try {
      let res = await fetch(url, options);
      let data = await res.json();
      setMessage(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Sign up</h1>
      {message && <b>{message}</b>}
      <form onSubmit={(event) => handleSignUp(event)}>
        <label>
          Name:
          <input type="text" name="username"></input>
        </label>
        <label>
          Password:
          <input type="password" name="password"></input>
        </label>
        <label>
          Email:
          <input type="email" name="email"></input>
        </label>
        <input type="submit" value="Sign up"></input>
      </form>
    </>
  );
}

import React, { useContext, useState, useNavigate } from "react";
import { UserContext } from "../../App";
const cred = {
  username: "Bob",
  password: "123",
};

const LoginApp = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const { setIsAuthenticated } = useContext(UserContext);
  const navigate=useNavigate();
  const onSubmitHandler = (e) => {
    console.log("login clicked");
    e.preventDefault();
    if (cred.username === user.username && cred.password === user.password) {
      setIsAuthenticated(true);
      window.history.back();
    }
  };
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          value={user.username}
          placeholder="username"
          name="username"
          onChange={onChangeHandler}
        />
        <br /> <br />
        <input
          value={user.password}
          placeholder="password"
          name="password"
          onChange={onChangeHandler}
        />
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginApp;

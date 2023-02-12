import React, { useState } from "react";
import "styles/pages/Login.sass";
import Input from "../components/UI/Input";
import { useLogInMutation } from "../features/auth/authApiSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [logIn, { isError, isLoading }] = useLogInMutation();

  const loginBtnHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await logIn({ username, password }).unwrap();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <form className="login__form">
        <h2 className="login__form-title">Log In</h2>
        <Input
          id="login-username"
          label="Username"
          BoxClassName="login__form-email"
          value={username}
          onChange={setUsername}
        />
        <Input
          id="login-pwd"
          label="Password"
          type={"password"}
          BoxClassName="login__form-password"
          value={password}
          onChange={setPassword}
        />
        <button onClick={loginBtnHandler} className="login__form-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;

import { Button } from 'antd';
import React, { useEffect, useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Action/Action";
import { toast } from 'react-toastify';
 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
   const { loading, message, error } = useSelector((state) => state.login);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [error, message, dispatch]);

  return (
    <div className="login">
      <div className="loginContainer">
        <form className="loginForm" onSubmit={submitHandler}>
          <h4>
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </h4>

          <div>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="primary" disabled={loading}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

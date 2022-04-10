import React from "react";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/form";
import {Link, useHistory} from "react-router-dom";
import {useState, useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import {LOCAL_STORAGE_TOKEN_NAME} from "../../context/Constant";
const LoginForm = () => {

  //context
  const {loginUser} = useContext(AuthContext);
  //router
  const history = useHistory();
  //local state
  const [loginForm, setLoginForm] = useState({username: "", password: ""});
  const {username, password} = loginForm;
  const onChangeLoginForm = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value});
  };
  const login = async (e) => {
    e.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, loginData.accessToken);
        history.push("/dashboard");
      } else {
      }
    } catch (err) {}
  };
  return (
    <>
      <Form className="my-4" onSubmit={login}>
        <Form.Group className="my-2">
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onChangeLoginForm}
            required
          />
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChangeLoginForm}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        Don't have account?
        <Link to="/register">
          <Button variant="info " size="sm" className="ml-2">
            Register
          </Button>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;

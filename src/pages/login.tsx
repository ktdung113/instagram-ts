import React, { useState } from "react";
import "../styles/login.scss";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
function Login() {
  const [typePass, setTypePass] = useState(false);

  return (
    <div className="auth_page">
      <form action="">
        <h3>Login</h3>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="pass">
            <input type={typePass ? "text" : "password"} className="form-control" id="password" />
            <small onClick={() => setTypePass(!typePass)}>{typePass ? <AiFillEye /> : <AiFillEyeInvisible />}</small>
          </div>
        </div>
        <div className="btn-login">
          <button type="submit" className="btn">
            Sign In
          </button>
        </div>
        <div className="help">
          <p>
            <Link style={{ color: "red" }} to="/forget-password">
              Forgot password
            </Link>
          </p>
          <p>
            <Link style={{ color: "red" }} to="/register">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;

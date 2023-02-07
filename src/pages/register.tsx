import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

function Register() {
  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  return (
    <div className="auth_page">
      <form action="">
        <h3>Register</h3>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="firstname">First name</label>
          <input type="text" className="form-control" id="firstname" />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name</label>
          <input type="text" className="form-control" id="lastname" />
        </div>
        <div className="form-group">
          <label htmlFor="username">User name</label>
          <input type="text" className="form-control" id="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="pass">
            <input type={typePass ? "text" : "password"} className="form-control" id="password" />
            <small onClick={() => setTypePass(!typePass)}>{typePass ? <AiFillEye /> : <AiFillEyeInvisible />}</small>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cfpassword">Confirm Password</label>
          <div className="pass">
            <input type={typeCfPass ? "text" : "password"} className="form-control" id="cfpassword" />
            <small onClick={() => setTypeCfPass(!typeCfPass)}>
              {typeCfPass ? <AiFillEye /> : <AiFillEyeInvisible />}
            </small>
          </div>
        </div>

        <div className="btn-login">
          <button type="submit" className="btn">
            Sign Up
          </button>
        </div>
        <div className="help">
          <p>
            <Link style={{ color: "red" }} to="/forget-password">
              Forgot password
            </Link>
          </p>
          <p>
            <Link style={{ color: "red" }} to="/login">
              Login now!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;

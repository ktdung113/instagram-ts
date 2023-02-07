import React from "react";
import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <div className="auth_page">
      <form action="">
        <h3>Forgot password</h3>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="btn-login">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
        <div className="help">
          <p>
            <Link style={{ color: "red" }} to="/register">
              Register
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

export default ForgetPassword;

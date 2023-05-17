import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="form-container">
      <p>{}</p>
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleOnSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p>
        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </p>
      <p className="text-error"></p>
    </div>
  );
};

export default SignUp;

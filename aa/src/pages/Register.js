

import React from "react";
import { useState } from "react";
import UserService from "../services/UserSevices";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [position, setPosition] = useState("");
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    position: "",
  });

  const formValidation = () => {
    let status = true;
    let localErrors = { ...errors };

    if (firstname === "") {
      localErrors.firstname = "Firstname is required";
      status = false;
    }
    if (lastname === "") {
      localErrors.lastname = "Lastname is required";
      status = false;
    }

    if (email === "") {
      localErrors.email = "Email is required";
      status = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      localErrors.email = "Email is invalid";
      status = false;
    }

    if (password === "") {
      localErrors.password = "Password is required";
      status = false;
    } else if (password.length < 8) {
      localErrors.password = "Password must be at least 8 characters";
      status = false;
    }

    if (confirmPassword === "") {
      localErrors.confirmPassword = "Please confirm password";
      status = false;
    } else if (password !== confirmPassword) {
      localErrors.confirmPassword = "Passwords do not match";
      status = false;
    }

    if (position === "") {
      localErrors.position = "Position is required";
      status = false;
    }

    setErrors(localErrors);
    console.log(localErrors);
    return status;
  };

  const register = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log("form data", firstname, lastname, email, password, position);
    if (formValidation()) {
      const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        position: position,
      };
      try {
        const response = await UserService.register(data);

        console.log("response===>", response);

        toast.success("User created successfully!");
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPosition("");
      } catch (error) {
        console.log(error);
        toast.error("Failed while sign up");
      }
    } else {
      console.log("form invalid");
    }
  };

  return (
    <div className="register">
      <Toaster />
      <div className="register-cover"></div>
      <div className="register-content">
        <div>
          <h1>Dark Space</h1>
          <p>Cyber Security Awareness quiz application</p>
        </div>

        <div>
          <form onSubmit={register}>
            <div className="form-group">
              <label>Firstname:</label>
              <input
                className="input"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              {errors.firstname !== "" ? (
                <div style={{ textAlign: "center", color: "red" }}>{errors.firstname}</div>
                ) : null}
                </div>        <div className="form-group">
          <label>Lastname:</label>
          <input
            className="input"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          {errors.lastname !== "" ? (
            <div style={{ textAlign: "center", color: "red" }}>
              {errors.lastname}
            </div>
          ) : null}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email !== "" ? (
            <div style={{ textAlign: "center", color: "red" }}>
              {errors.email}
            </div>
          ) : null}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password !== "" ? (
            <div style={{ textAlign: "center", color: "red" }}>
              {errors.password}
            </div>
          ) : null}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            className="input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword !== "" ? (
            <div style={{ textAlign: "center", color: "red" }}>
              {errors.confirmPassword}
            </div>
          ) : null}
        </div>

        <div className="form-group">
          <label>Position:</label>
          <select
            className="input"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="">Select position</option>
            <option value="manager">manager</option>
            <option value="IT professional">IT professional</option>
            <option value="employee">employee</option>
          </select>
          {errors.position !== "" ? (
            <div style={{ textAlign: "center", color: "red" }}>
              {errors.position}
            </div>
          ) : null}
        </div>

        <button className="btn">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  </div>
</div>
);
};

export default Register;

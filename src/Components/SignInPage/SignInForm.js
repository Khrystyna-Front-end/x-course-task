import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignInForm.css";

function SignInForm() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [Username, setUserName] = useState("");

  const validateUserName = () => {
    if (Username.length >= 4 && Username.length < 16) {
      setButtonDisabled(false);
      localStorage.setItem("Username", Username);
    } else {
      setButtonDisabled(true);
    }
  };
  const handleSubmit = (e) => {
    alert("Submitted");
    e.preventDefault();
  };
  useEffect(() => {
    // Track all local states and validate the term
    validateUserName();
  }, [Username]);
  // return buttonDisabled;
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label for="username" className="label form-label">
        Username
      </label>
      <input
        type="text"
        className="login form-control d-block shadow-lg p-3 mb-5 bg-body rounded"
        id="username"
        placeholder="type Username"
        required
        onChange={(e) => setUserName(e.target.value)}
      />

      <button
        disabled={buttonDisabled}
        type="submit"
        className="sign-in-btn btn btn-primary shadow-lg p-3 mb-5 rounded"
      >
        <Link className="link-to-books" to="/books">
          Sign-In
        </Link>
      </button>
    </form>
  );
}

export default SignInForm;

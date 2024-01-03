// Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    confirmPass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmission = async () => {
    if (!values.name || !values.email || !values.pass || values.pass !== values.confirmPass) {
      setErrorMsg("Please fill all fields and ensure passwords match");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    setLoading(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, values.email, values.pass);
      const user = res.user;
      await updateProfile(user, {
        displayName: values.name,
      });
      setSubmitButtonDisabled(false);
      setLoading(false);
      navigate("/");
    } catch (err) {
      setSubmitButtonDisabled(false);
      setLoading(false);
      if (err.code === "auth/weak-password") {
        setErrorMsg("Password is too weak");
      } else if (err.code === "auth/email-already-in-use") {
        setErrorMsg("Email is already in use");
      } else {
        setErrorMsg(err.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          type="password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <InputControl
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, confirmPass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled || loading}>
            {loading ? "Signing up..." : "Signup"}
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;


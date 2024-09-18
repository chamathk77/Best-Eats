import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UpdateUserName } from "../../Redux/reducers/LoginReducer";


function LoginPage() {

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    
    e.preventDefault();
    // Add logic for user login
  };
  const handleLoginRedirect = () => {

    dispatch(UpdateUserName(username));
    
    navigate("/homepage");
  };
  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  const onChangeUserName = (event) => {

    console.log("user name : ", event.target.value);
    setUsername(event.target.value);
  };
  const onChangePassword = (event) => {
    console.log("password: ", event.target.value);
    setPassword(event.target.value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label
              htmlFor="username"
              style={styles.label}
              onChange={handleLogin}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              style={styles.input}
              required
              placeholder="Enter your username"
              onChange={onChangeUserName}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              style={styles.input}
              placeholder="Enter your password"
              onChange={onChangePassword}
              required
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onClick={handleLoginRedirect}
          >
            Login
          </button>
          <p style={styles.redirectText}>
            Don't have an account?{" "}
            <button
              onClick={handleSignupRedirect}
              style={styles.redirectButton}
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f7f7f7",
  },
  formContainer: {
    maxWidth: "400px",
    width: "100%",
    padding: "24px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#333",
    marginBottom: "8px",
  },
  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  redirectText: {
    textAlign: "center",
    fontSize: "14px",
    marginTop: "16px",
  },
  redirectButton: {
    color: "#007bff",
    border: "none",
    background: "none",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default LoginPage;

import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import { auth } from "../Firebase";
const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome to Pied Piper Chat App</h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined />
          Sign in With google
        </div>
        <br></br>
        <br></br>
        <h4 style={{ color: "#6366F1" }}>
          For techsupport mail us at piedpiper@gmail.com
        </h4>
      </div>
    </div>
  );
};

export default Login;

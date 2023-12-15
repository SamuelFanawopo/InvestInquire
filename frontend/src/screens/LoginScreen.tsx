import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "/home/sam/Programming/Projects/InvestInquire/backend/config/db.js"; // Adjust the path to your Firebase config

// Define the props for the component, if needed
interface LoginScreenProps {
  // Define any props you might need
}

// Define the LoginScreen component
const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful login
    } catch (error) {
      // Handle login errors
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Handle successful login
    } catch (error) {
      // Handle login errors
      console.error(error);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Handle successful login
    } catch (error) {
      // Handle login errors
      console.error(error);
    }
  };

  // Add methods for other providers as needed

  return (
    <div>
      <h1>Login</h1>
      {/* Email/Password Login */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleEmailLogin}>Login with Email</button>

      {/* Social Logins */}
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
      {/* Add buttons for other providers as needed */}
    </div>
  );
};

export default LoginScreen;

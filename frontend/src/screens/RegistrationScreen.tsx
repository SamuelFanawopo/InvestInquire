import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "/home/sam/Programming/Projects/InvestInquire/backend/config/db.js"; // Adjust this to your Firebase config file

// Define the props for the component, if needed
interface RegistrationScreenProps {
  // Define any props you might need
}

// Define the RegistrationScreen component
const RegistrationScreen: React.FC<RegistrationScreenProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      // Handle successful registration
      // userCredential.user will have the user details
    } catch (error) {
      // Handle registration errors
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
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
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegistrationScreen;

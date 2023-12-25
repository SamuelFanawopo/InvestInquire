import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../utils/Firebase";

const RegistrationScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>("");

  const handleRegistration = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Add additional user data to Firestore with timestamp
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        createdAt: new Date(), // Timestamp for account creation
      });

      // Redirect to profile page
      console.log("User registered:", user.email);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header name="Guest" />
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">Register</h1>
        <div className="w-full max-w-xs">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="mb-4 w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="mb-4 w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button className="mb-3 w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">
            Register
          </button>
          <p className="text-center text-gray-800">
            Already have an account?{" "}
            <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
              Login Here
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationScreen;

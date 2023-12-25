import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  faGoogle,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../utils/Firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailLogin = async () => {
    try {
      setLoading(true);
      setError(null);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Use the imported 'db' instance
      const userDocRef = doc(db, "logins", user.uid);
      await setDoc(userDocRef, {
        email: user.email,
        lastLogin: new Date(),
      });

      console.log("User logged in:", user.email);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.error("Error during login:", error);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white min-h-screen">
      <Header name="Guest" />
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">Login</h1>
        <div className="w-full max-w-xs">
          {/* Email/Password Login */}
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
          <button
            onClick={handleEmailLogin}
            className="mb-3 w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Login with
            Email
          </button>
          <button className="mb-3 w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none flex items-center justify-center">
            {/* Google Icon */}
            <FontAwesomeIcon icon={faGoogle} className="mr-2" /> Login with
            Google
          </button>

          <button className="mb-3 w-full px-4 py-2 text-white bg-[#1DA1F2] rounded-md hover:bg-[#0d95e8] focus:outline-none flex items-center justify-center">
            {/* Twitter Icon */}
            <FontAwesomeIcon icon={faTwitter} className="mr-2" /> Login with
            Twitter
          </button>
          <button className="mb-3 w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none flex items-center justify-center">
            {/* GitHub Icon */}
            <FontAwesomeIcon icon={faGithub} className="mr-2" /> Login with
            GitHub
          </button>
          <button className="mb-2 w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none flex items-center justify-center">
            {/* Phone Icon */}
            <FontAwesomeIcon icon={faPhone} className="mr-2" /> Login with Phone
          </button>

          <p className="mb-2 text-center text-blue-500 hover:text-blue-600 cursor-pointer">
            Forgot Password?
          </p>
          <p className="text-center text-gray-800">Don't have an account?</p>
          <p className="text-center text-blue-500 hover:text-blue-600 cursor-pointer">
            Sign Up Here
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginScreen;

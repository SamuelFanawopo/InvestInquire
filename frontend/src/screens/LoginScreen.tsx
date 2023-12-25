import React, { useState } from "react";
import { handleGoogleLogin } from "../utils/Google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signInWithEmailAndPassword } from "firebase/auth";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../utils/Firebase";
import { doc, setDoc } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }); // Clears the error
  };

  const onGoogleLoginClick = async () => {
    try {
      setLoading(true);
      setError(null);
      const { user, isNewUser } = await handleGoogleLogin();
      // Handle the authenticated user, e.g., redirect or display a welcome message
      console.log("Logged in user:", user.email, "New user:", isNewUser);
    } catch (error) {
      // Handle login error, e.g., show an error message
      console.error("Login failed:", error);
      setLoading(false);
      setError("Login failed. Please try again.");
      clearError();
    }
  };

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
        setError("Login failed. Please check your credentials.");
        console.error("Error during login:", error); // For development debugging
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
          {error && (
            <div className="text-red-500 text-center mb-3">{error}</div>
          )}
          <button
            onClick={handleEmailLogin}
            disabled={loading}
            className="mb-3 w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            {loading ? "Logging in..." : "Login with Email"}
          </button>
          <button
            onClick={onGoogleLoginClick}
            disabled={loading}
            className="mb-3 w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none flex items-center justify-center"
          >
            {/* Google Icon */}
            <FontAwesomeIcon icon={faGoogle} className="mr-2" />
            {loading ? "Logging in..." : "Login with Google"}
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

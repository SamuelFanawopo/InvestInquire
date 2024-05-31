import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const LogoutSection: React.FC = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to the login page after logout
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 mb-2">
      <button
        onClick={handleLogout}
        className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutSection;

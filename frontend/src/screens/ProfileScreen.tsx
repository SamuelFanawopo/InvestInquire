import React, { useState } from "react";
import { updatePassword } from "firebase/auth";
import { auth } from "/home/sam/Programming/Projects/InvestInquire/backend/config/db.js"; // Adjust this path to your Firebase config

interface ProfileScreenProps {
  watchlist: string[]; // Assuming the watchlist is an array of strings (e.g., ticker symbols)
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ watchlist }) => {
  const [newPassword, setNewPassword] = useState("");

  const handlePasswordChange = async () => {
    try {
      // Assuming the user is already logged in and auth.currentUser is not null
      await updatePassword(auth.currentUser!, newPassword);
      // Handle successful password update
    } catch (error) {
      // Handle errors (e.g., authentication errors, weak password)
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Profile</h1>

      {/* Password Update Section */}
      <section>
        <h2>Update Password</h2>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
        />
        <button onClick={handlePasswordChange}>Update Password</button>
      </section>

      {/* Watchlist Section */}
      <section>
        <h2>Watchlist</h2>
        <ul>
          {watchlist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProfileScreen;

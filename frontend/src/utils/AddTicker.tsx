import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import useAuth from "../utils/useAuth"; // Assuming useAuth is the custom hook for authentication

interface AddTickerProps {
  symbol: string;
}

const AddTicker: React.FC<AddTickerProps> = ({ symbol }) => {
  const navigate = useNavigate();
  const authUser = useAuth();
  const db = getFirestore(); // Initialize Firestore

  useEffect(() => {
    const updateUserWatchlist = async () => {
      if (authUser && authUser.uid) {
        const userDocRef = doc(db, "users", authUser.uid);

        try {
          await updateDoc(userDocRef, {
            watchlist: arrayUnion(symbol), // Add symbol to watchlist array
          });
          navigate("/profile"); // Navigate to profile page after update
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      }
    };

    updateUserWatchlist();
  }, [authUser, symbol, navigate, db]);

  return null; // This component does not render anything
};

export default AddTicker;

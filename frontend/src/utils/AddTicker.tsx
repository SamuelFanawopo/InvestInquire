import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";

export const addTickerToWatchlist = async (
  symbol: string,
  navigate: NavigateFunction,
  authUser: { uid: string } | null, // Assuming authUser has at least a uid property
): Promise<void> => {
  const db = getFirestore();

  if (authUser && authUser.uid && symbol) {
    const userDocRef = doc(db, "users", authUser.uid);

    try {
      await updateDoc(userDocRef, {
        watchlist: arrayUnion(symbol),
      });
      navigate("/profile");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }
};

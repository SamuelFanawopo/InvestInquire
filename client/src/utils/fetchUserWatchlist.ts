import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export const fetchUserWatchlist = async (userId: string): Promise<string[]> => {
  const db = getFirestore();
  const userDocRef = doc(db, "users", userId);

  try {
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const userData = userDoc.data();
      return userData.watchlist || [];
    } else {
      console.error("User document does not exist");
      return [];
    }
  } catch (error) {
    console.error("Error fetching user watchlist: ", error);
    return [];
  }
};

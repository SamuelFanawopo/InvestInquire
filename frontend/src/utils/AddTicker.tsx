import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export const addTickerToWatchlist = async (
  symbol: string,
  authUser: { uid: string } | null, // Assuming authUser has at least a uid property
): Promise<void> => {
  const db = getFirestore();

  if (authUser && authUser.uid && symbol) {
    const userDocRef = doc(db, "users", authUser.uid);

    try {
      // Retrieve the current watchlist
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const watchlist = userData.watchlist as string[];

        // Check if the ticker already exists
        if (watchlist.includes(symbol)) {
          alert("Ticker already exists in your watchlist.");
          return;
        }

        // Add ticker to watchlist
        await updateDoc(userDocRef, {
          watchlist: arrayUnion(symbol),
        });
        alert("Ticker added to your watchlist.");
      } else {
        // Handle case where user document doesn't exist
        console.error("User document does not exist");
      }
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  } else {
    // Handle case where authUser or symbol is not available
    alert("Please log in to add tickers to your watchlist.");
  }
};

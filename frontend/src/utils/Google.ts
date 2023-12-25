import {
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./Firebase"; // Ensure these are correctly imported

export const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);

    // Use getAdditionalUserInfo to access additional user info
    const additionalUserInfo = getAdditionalUserInfo(result);
    const isNewUser = additionalUserInfo?.isNewUser;

    if (isNewUser) {
      // Store or update user data in Firestore for new users
      await setDoc(doc(db, "users", result.user.uid), {
        name: result.user.displayName,
        email: result.user.email,
        createdAt: new Date(),
        // Add other fields as required
      });
    }

    // Return user data for further processing
    return { user: result.user, isNewUser };
  } catch (error) {
    console.error("Error during Google login:", error);
    throw error;
  }
};

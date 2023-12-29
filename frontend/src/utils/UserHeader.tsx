import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Header from "../components/Header";
import useAuth from "../utils/useAuth";

const UserHeader: React.FC = () => {
  const authUser = useAuth();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserName = async () => {
      if (authUser) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", authUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists() && userDocSnap.data().name) {
          setUserName(userDocSnap.data().name);
        } else {
          setUserName("Guest");
        }
      }
    };

    fetchUserName().catch(console.error);
  }, [authUser]);

  // Don't render the Header until the user name has been fetched
  if (userName === null) return <div>Loading...</div>; // Or some other loading indicator

  return <Header name={userName} />;
};

export default UserHeader;

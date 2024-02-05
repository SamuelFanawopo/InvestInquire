import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Header from "../components/Header";
import useAuth from "../utils/useAuth";

const UserHeader: React.FC = () => {
  const authUser = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("Guest");
  useEffect(() => {
    const fetchTimeout = setTimeout(() => {
      // Set userName to default if data is not fetched in time
      setUserName("Welcome, Guest");
    }, 5000); // Timeout of 5 seconds

    const fetchUserName = async () => {
      if (authUser) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", authUser.uid);
        try {
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists() && userDocSnap.data().name) {
            clearTimeout(fetchTimeout); // Clear timeout if data is fetched
            setUserName(userDocSnap.data().name);
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.error(error);
          clearTimeout(fetchTimeout);
          setUserName("Guest"); // Set default on error
        }
      } else {
        clearTimeout(fetchTimeout);
        setUserName("Guest"); // Set default if no authUser
      }
    };

    fetchUserName();
    return () => clearTimeout(fetchTimeout); // Clear timeout on unmount
  }, [authUser]);

  return <Header name={userName} isAuthenticated={isAuthenticated} />;
};

export default UserHeader;

import React, { ReactNode, useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate("/401", { replace: true }); // Redirect to unauthorized page
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // You could replace this with a more complex loader component if desired
  }

  if (!user) {
    return <Navigate to="/401" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;

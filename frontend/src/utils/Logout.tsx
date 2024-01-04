import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout Failed", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-blue-500 text-white rounded-md py-2 px-3 p-3 ml-4"
    >
      Logout
    </button>
  );
};

export default Logout;

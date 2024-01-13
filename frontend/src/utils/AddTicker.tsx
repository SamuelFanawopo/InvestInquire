import { useNavigate } from "react-router-dom";

interface AddTickerProps {
  symbol: string;
}

const AddTicker: React.FC<AddTickerProps> = ({ symbol }) => {
  const navigate = useNavigate();

  // function to add the ticker to the db and reload the page

  navigate("/profile");
};

export default AddTicker;

interface AddTickerProps {
  symbol: string;
}

const AddTicker: React.FC<AddTickerProps> = ({ symbol }) => {
  return (
    <div>
      <h1>Symbol: {symbol}</h1>
    </div>
  );
};

export default AddTicker;

// TickerInput.tsx
interface TickerInputProps {
  newTicker: string;
  setNewTicker: React.Dispatch<React.SetStateAction<string>>;
  addTicker: () => void;
}

const TickerInput: React.FC<TickerInputProps> = ({
  newTicker,
  setNewTicker,
  addTicker,
}) => {
  return (
    <div className="mb-4 flex">
      <input
        type="text"
        value={newTicker}
        onChange={(e) => setNewTicker(e.target.value.toUpperCase())}
        placeholder="Add Ticker Symbol"
        className="border rounded-md p-2 mr-2"
      />
      <button
        onClick={addTicker}
        className="bg-blue-500 text-white rounded-md p-2"
      >
        Add to Watchlist
      </button>
    </div>
  );
};

export default TickerInput;

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
  // Apollo Client useLazyQuery hook
  const [executeSearch, { loading }] = useLazyQuery<TickerData, TickerVars>(
    SEARCH_TICKERS_QUERY,
    {
      onCompleted: (data) => {
        setSuggestions(data.searchTickers.map((ticker) => ticker.symbol));
      },
    },
  );

  // Custom debounce function
  const debounce = <F extends (...args: any[]) => any>(
    func: F,
    delay: number,
  ) => {
    let debounceTimer: NodeJS.Timeout;
    return function (...args: Parameters<F>) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func(...args), delay);
    } as F;
  };

  const updateSuggestions = (input: string) => {
    if (input.length >= 2) {
      executeSearch({ variables: { input } });
    } else {
      setSuggestions([]);
    }
  };

  // Debounced version of updateSuggestions
  const debouncedUpdateSuggestions = debounce(updateSuggestions, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newTicker = e.target.value;
    setTicker(newTicker);
    debouncedUpdateSuggestions(newTicker);
  };

  const handleSuggestionClick = (symbol: string): void => {
    setTicker(symbol);
    navigate(`/company/${symbol}`);
  };

  const handleButtonClick = (): void => {
    if (ticker) {
      navigate(`/company/${ticker}`);
    }
  };
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
        className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg py-2 px-4 ml-2 transition duration-300"
      >
        Add to Watchlist
      </button>
    </div>
  );
};

export default TickerInput;

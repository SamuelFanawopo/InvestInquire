import { TickerData } from "./TickerData";
import TickerItem from "./TickerItem";

// TickerList.tsx
interface TickerListProps {
  tickers: TickerData[];
  removeTicker: (symbol: string) => void;
}

const TickerList: React.FC<TickerListProps> = ({ tickers, removeTicker }) => {
  return (
    <div className="flex flex-wrap justify-start">
      {tickers.map((ticker) => (
        <TickerItem
          key={ticker.symbol}
          ticker={ticker}
          removeTicker={removeTicker}
        />
      ))}
    </div>
  );
};

export default TickerList;

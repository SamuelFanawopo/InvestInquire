interface TickerAddProps {
  symbol: string;
}

const TickerAdd: React.FC<TickerAddProps> = ({ symbol }) => {
  return alert(`Added ${symbol} to watchlist`);
};

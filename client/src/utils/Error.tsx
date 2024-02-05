import React from "react";

interface ErrorProps {
  message: string; // Error message to display
  onRetry?: () => void; // Optional retry function
}

const Error: React.FC<ErrorProps> = ({ message, onRetry }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{message}</p>
      {/* Display a retry button if an onRetry function is provided */}
      {onRetry && <button onClick={onRetry}>Retry</button>}
    </div>
  );
};

export default Error;

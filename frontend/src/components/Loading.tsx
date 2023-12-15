import React from "react";

// Define props for the component, if needed
interface LoadingProps {
  // You can add props like message, size, color, etc., if needed
}

// Define the Loading component
const Loading: React.FC<LoadingProps> = () => {
  // Add any component logic here

  return (
    <div>
      {/* Your loading indicator or message */}
      <p>Loading...</p>
    </div>
  );
};

export default Loading;

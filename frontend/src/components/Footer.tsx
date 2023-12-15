import React from "react";

// If you later decide to add props, you can define them here
interface FooterProps {
  // Define props here if needed
}

// Define the Footer component
const Footer: React.FC<FooterProps> = () => {
  // Component logic goes here

  return (
    <footer className="flex flex-col h-screen">
      {/* Footer content goes here */}
      <p className="mt-auto mb-4 flex justify-center">
        InvestInquire © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

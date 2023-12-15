import React from "react";

// If you later decide to add props, you can define them here
interface FooterProps {
  // Define props here if needed
}

// Define the Footer component
const Footer: React.FC<FooterProps> = () => {
  // Component logic goes here

  return (
    <footer>
      {/* Footer content goes here */}
      <p>© {new Date().getFullYear()} My Website</p>
    </footer>
  );
};

export default Footer;

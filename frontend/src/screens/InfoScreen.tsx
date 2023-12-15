import React from "react";

// Define the props for the component
interface InfoScreenProps {
  companyId: string; // Assuming you need a company identifier to fetch the data
  // You can add more props as needed, such as specific data filters or view options
}

// Define the InfoScreen component
const InfoScreen: React.FC<InfoScreenProps> = ({ companyId }) => {
  // Component logic here, like fetching additional financial info based on companyId

  return (
    <div>
      {/* Render additional financial information about the company here */}
      <h1>Company Financial Information</h1>
      <p>Showing financial details for company ID: {companyId}</p>
      {/* Components or sections for financial data like balance sheets, income statements, etc. */}
      {/* Could also include charts, graphs, and other visual representations of financial data */}
    </div>
  );
};

export default InfoScreen;

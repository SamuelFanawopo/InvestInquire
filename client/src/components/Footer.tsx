const Footer = () => {
  return (
    <footer className="flex flex-col">
      <p className="mt-5 mb-4 flex justify-center">
        InvestInquire © {new Date().getFullYear()} - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

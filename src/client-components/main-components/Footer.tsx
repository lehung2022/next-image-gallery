const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically
  return (
    <footer className="bg-black text-white py-6 px-6 sm:px-8">
      <div className="container mx-auto max-w-screen-lg text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 flex-wrap">
        <p className="text-sm sm:text-base">© {currentYear} History Wiki</p>
        <p className="text-sm sm:text-base">This site is built by Le Hung</p>
        <p className="text-sm sm:text-base">Explore historical content</p>
      </div>
    </footer>
  );
};

export default Footer;

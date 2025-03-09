

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically
  return (
    <footer className="bg-black text-white py-6 px-4 sm:px-6">
      {/* <div className="container mx-auto text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:space-x-6 space-y-3 sm:space-y-0"> */}
      <div className="container mx-auto max-w-screen-lg text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 flex-wrap">
        {/* Year Copyright */}
        <p className="text-xs sm:text-sm">
          &copy; {currentYear} History Wiki. All rights reserved.
        </p>
        {/* Author */}
        <p className="text-xs sm:text-sm">
          This site is built by Le Hung (黎興) with passion
        </p>
        {/* Tagline */}
        <p className="text-xs sm:text-sm">
          Explore historical content and learn about the past.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

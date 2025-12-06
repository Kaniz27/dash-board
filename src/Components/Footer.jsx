const Footer = () => {
  return (
    <footer className="w-full flex items-center">
      <div className="mx-auto w-full px-6 flex items-center justify-between text-gray-600 text-sm">

        {/* Left Side */}
        <div className="flex items-center gap-2">
          <span>2025 © FONTLINER.</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <span>
            Product  by{" "}
            <a
              href="https://hsbllco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              HSBLLCO
            </a>
          </span>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

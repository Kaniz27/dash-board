const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-white border-t border-gray-200 py-4">
      <div className="mx-auto w-full px-6 flex flex-col sm:flex-row items-center sm:justify-around text-gray-600 text-sm gap-2 sm:gap-0">
        <span className="text-center sm:text-left">2025 © FONTLINER.</span>
        <span className="text-center sm:text-right">
          Product by{" "}
          <a
            href="https://hsbllco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#01cdcc] hover:underline"
          >
            HSBLLCO
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

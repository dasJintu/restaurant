function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-16">
      <div className="container">
        <h2 className="text-center text-gray-400">
          developed by{" "}
          <a
            className="italic font-semibold text-white"
            href="https://github.com/dasJintu"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>{" "}
            Jintu
          </a>
        </h2>
      </div>
    </footer>
  );
}

export default Footer;

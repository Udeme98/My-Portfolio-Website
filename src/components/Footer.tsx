const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex gap-5">
          <a
            href="https://www.github.com/Udeme98"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedIn.com/in/darealudeme1"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.twitter.com/Darealudeme1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <p className="mt-4 text-sm">
          &copy;{new Date().getFullYear()} Udeme Udeme. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;

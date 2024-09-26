import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6 font-roboto">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex gap-5">
          <a
            href="https://www.github.com/Udeme98"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <FaGithub className="text-2xl md:text-3xl" />
          </a>
          <a
            href="https://www.linkedIn.com/in/darealudeme1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl md:text-3xl" title="LinkedIn" />
          </a>
          <a
            href="https://www.twitter.com/Darealudeme1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl md:text-3xl" title="Twitter" />
          </a>
        </div>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} Udeme Udeme. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;

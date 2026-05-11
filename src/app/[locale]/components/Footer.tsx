import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light text-dark border-t border-dark/20 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        <div className="flex gap-6 opacity-80">
          <a
            href="https://www.linkedin.com/in/milenasaron/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-100"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://github.com/aronmilenasol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-100"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="mailto:aronmilena.it@gmail.com"
            aria-label="Email"
            className="hover:opacity-100"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

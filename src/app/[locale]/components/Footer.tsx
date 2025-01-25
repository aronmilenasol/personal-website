import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const iconClasses =
    "text-dark hover:text-darker transition-colors duration-300 transform hover:scale-110";

  return (
    <footer className="bg-light py-8">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex space-x-8">
          <a
            href="https://www.linkedin.com/in/milenasaron/"
            target="_blank"
            rel="noopener noreferrer"
            className={iconClasses}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={36} />
          </a>
          <a
            href="https://github.com/aronmilenait"
            target="_blank"
            rel="noopener noreferrer"
            className={iconClasses}
            aria-label="GitHub"
          >
            <FaGithub size={36} />
          </a>
          <a
            href="mailto:aronmilena.it@gmail.com"
            className={iconClasses}
            aria-label="Email"
          >
            <FaEnvelope size={36} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

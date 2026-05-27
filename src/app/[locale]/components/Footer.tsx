import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light border-t border-light/10 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs opacity-40 tracking-widest font-normal">
          <span className="text-[var(--color-accent)] font-bold">~/</span>
          milena.sol · {year}
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/milenasaron/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-50 hover:opacity-100 hover:text-[var(--color-accent)] transition-all"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://github.com/aronmilenasol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="opacity-50 hover:opacity-100 hover:text-[var(--color-accent)] transition-all"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="mailto:aronmilena.it@gmail.com"
            aria-label="Email"
            className="opacity-50 hover:opacity-100 hover:text-[var(--color-accent)] transition-all"
          >
            <FaEnvelope size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

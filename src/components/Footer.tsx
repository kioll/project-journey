const Footer = () => {
  return (
    <footer className="bg-secondary mt-16 py-12">
      <div className="container-section">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/votre-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/votre-profil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} - Créé avec passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
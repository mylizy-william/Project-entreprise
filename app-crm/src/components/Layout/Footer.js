import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Mon Application. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;

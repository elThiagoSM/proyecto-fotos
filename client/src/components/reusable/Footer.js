import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-white text-sm">
          &copy; 2024 Proyecto Foto. Todos los derechos reservados.
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-white text-sm hover:text-blue-500">
            Términos
          </a>
          <a href="#" className="text-white text-sm hover:text-blue-500">
            Privacidad
          </a>
          <a href="#" className="text-white text-sm hover:text-blue-500">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

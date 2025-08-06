import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarEjemploProps {
  bgColor: string;
  textColor: string;
  logoText?: string;
}

const NavbarEjemplo: React.FC<NavbarEjemploProps> = ({ bgColor, textColor, logoText }) => {
  return (
    <nav className={`p-4 ${bgColor} ${textColor}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold font-serif">
          {logoText || 'Logo Genérico'}
        </div>
        <div className="flex space-x-4">
          <a href="#areas-de-practica" className="hover:underline">Áreas de Práctica</a>
          <a href="#testimonios" className="hover:underline">Testimonios</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
          <Link to="/" className="hover:underline">
            Volver a Refuerzo Digital
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarEjemplo;

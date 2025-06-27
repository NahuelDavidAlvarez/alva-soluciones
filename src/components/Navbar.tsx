import { BrowserRouter as Router, Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="bg-primary text-white py-4 px-4 sm:px-6 lg:px-8 shadow-md sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        {/* Logo/Título a la izquierda */}
        <Link
          to="/"
          className="text-xl font-bold hover:text-accent transition-colors"
        >
          Escala Digital
        </Link>

        {/* Menú de navegación a la derecha */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="hover:text-accent transition-colors duration-200 font-medium"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="hover:text-accent transition-colors duration-200 font-medium"
          >
            Nosotros
          </Link>
          <Link
            to="/services"
            className="hover:text-accent transition-colors duration-200 font-medium"
          >
            Servicios
          </Link>
          <Link
            to="/contact"
            className="hover:text-accent transition-colors duration-200 font-medium"
          >
            Contacto
          </Link>
        </div>

        {/* Menú móvil (hamburguesa) */}
        <div className="md:hidden">
          <button className="text-white hover:text-accent transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

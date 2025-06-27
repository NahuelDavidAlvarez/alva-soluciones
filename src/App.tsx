import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Services } from './pages/Services.jsx'
import { Contact } from './pages/Contact.jsx'
import './index.css'

type PageWrapperProps = {
  children: ReactNode
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-6"
    >
      {children}
    </motion.div>
  )
}

export function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Título a la izquierda */}
        <Link
          to="/"
          className="text-xl font-bold hover:text-accent transition-colors"
        >
          Escala Digital
        </Link>

        {/* Menú de navegación a la derecha */}
        <div className="hidden md:flex space-x-6">
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

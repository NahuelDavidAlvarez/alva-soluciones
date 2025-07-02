import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Navbar } from './components/Navbar'
import { WhatsAppWidget } from './components/WhatsAppWidget'
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
            path="/services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />
        </Routes>

        {/* Widget de WhatsApp - se muestra en todas las páginas */}
        <WhatsAppWidget size="xl" />
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
      className=""
    >
      {children}
    </motion.div>
  )
}

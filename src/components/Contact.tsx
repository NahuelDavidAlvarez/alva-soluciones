import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function Contact() {
  const contact = {
    email: 'davidnahuelalvarez@gmail.com',
    phone: '1166629173',
    address: 'Buenos Aires, Argentina'
  }

  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000) // Ocultar el mensaje después de 2 segundos
  }

  return (
    <section id="contact" className="py-12 bg-accent">
      <div className="max-w-4xl mx-auto text-center px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-12 text-primary/80 text-lg md:text-xl">
            <div
              onClick={handleCopyEmail}
              className="mb-4 block text-primary hover:text-accent-light transition-colors duration-300 cursor-pointer relative"
            >
              <div className="flex items-center justify-center">
                <span>📧 {contact.email}</span>
                <AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: -40 }}
                      exit={{ opacity: 0, y: -60 }}
                      transition={{ duration: 0.3 }}
                      className="absolute text-base text-white whitespace-nowrap"
                    >
                      Copiado!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <a
              href={`tel:${contact.phone}`}
              className="mb-4 block text-primary hover:text-accent-light transition-colors duration-300"
            >
              <p>📱 {contact.phone}</p>
            </a>
            <p>📍 {contact.address}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

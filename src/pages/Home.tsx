import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const services = [
    {
      title: 'Marketing Digital',
      description:
        'Estrategias personalizadas para hacer crecer tu presencia digital y alcanzar nuevas alturas en el mercado.',
      icon: '📈'
    },
    {
      title: 'Desarrollo Web',
      description:
        'Sitios web modernos y responsivos que reflejan la esencia de tu marca con tecnología de vanguardia.',
      icon: '💻'
    },
    {
      title: 'SEO & Analytics',
      description:
        'Optimización para motores de búsqueda y análisis de datos para escalar tu negocio de manera inteligente.',
      icon: '🔍'
    },
    {
      title: 'Branding',
      description:
        'Construimos identidades de marca sólidas que conectan emocionalmente con tu audiencia objetivo.',
      icon: '🎨'
    }
  ]

  const values = [
    {
      title: 'Innovación',
      description:
        'Utilizamos las últimas tecnologías y tendencias para mantener a nuestros clientes a la vanguardia.'
    },
    {
      title: 'Resultados',
      description:
        'Nos enfocamos en métricas reales y ROI medible para garantizar el crecimiento de tu negocio.'
    },
    {
      title: 'Transparencia',
      description:
        'Comunicación clara y reportes detallados en cada etapa del proceso.'
    },
    {
      title: 'Excelencia',
      description:
        'Buscamos la perfección en cada proyecto, sin importar su tamaño o complejidad.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"></div>
          {/* Mountain SVG */}
          <svg
            className="absolute bottom-0 w-full h-64"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: 'easeInOut' }}
              d="M0,300 L0,200 L200,100 L400,150 L600,50 L800,120 L1000,80 L1200,140 L1200,300 Z"
              fill="url(#mountainGradient)"
              stroke="rgba(56, 189, 248, 0.5)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="mountainGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
                <stop offset="100%" stopColor="rgba(15, 23, 42, 0.8)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-20 right-20 text-accent text-6xl opacity-30"
        >
          ⚡
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-40 left-20 text-accent text-4xl opacity-40"
        >
          🚀
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center z-10 px-6 max-w-4xl"
        >
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            Escala
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-accent block"
            >
              Digital
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Llevamos tu negocio a nuevas alturas con estrategias digitales
            innovadoras
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(56, 189, 248, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Comenzar Ahora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Ver Servicios
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales de marketing digital diseñadas para impulsar
              tu crecimiento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-slate-800 text-white">
        <div className="px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Los principios que guían cada proyecto y nos distinguen en el
              mercado digital
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start space-x-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <span className="text-primary font-bold text-lg">
                    {index + 1}
                  </span>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-accent">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              ¿Listo para Escalar?
            </h2>
            <p className="text-xl text-primary/80 mb-8">
              Comienza tu transformación digital hoy y lleva tu negocio al
              siguiente nivel
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contacta con Nosotros
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

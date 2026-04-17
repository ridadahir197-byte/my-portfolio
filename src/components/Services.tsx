import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Laptop, Smartphone, Zap, Palette, Search, BarChart } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
  {
    icon: Laptop,
    title: 'Full-Stack Web Dev',
    description: 'Building functional websites from design to database with a focus on usability.',
    features: ['Responsive Layouts', 'Database Integration', 'Modern Frameworks', 'Custom Logic'],
  },
  {
    icon: Smartphone, // تقدر تبدلو بـ Terminal أو Code إلى عندك
    title: 'Custom Web Apps',
    description: 'Turning complex ideas into interactive tools and manageable web applications.',
    features: ['Interactive UI', 'State Management', 'CRUD Functionality', 'API Handling'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing clean and modern interfaces that provide a smooth user experience.',
    features: ['Visual Identity', 'Prototyping', 'Modern Aesthetics', 'User-Centric Design'],
  },
  {
    icon: Zap,
    title: 'Security Basics',
    description: 'Writing cleaner code with essential focus on basic data protection and safety.',
    features: ['Secure Auth', 'Input Validation', 'Data Encryption', 'Best Practices'],
  },
  {
    icon: Search,
    title: 'Performance & SEO',
    description: 'Optimizing sites to be fast, lightweight, and visible on search engines.',
    features: ['Fast Loading', 'SEO Friendly', 'Image Compression', 'Asset Optimization'],
  },
  {
    icon: BarChart, // تقدر تبدلو بـ Brush أو Image icon إلى كاين فـ Lucide
    title: 'Creative Content',
    description: 'Professional photo editing, digital drawing, and creative video montage.',
    features: ['Photo Editing', 'Video Montage', 'Digital Art', 'Visual Content'],
  },
];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="services" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your unique needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative z-10">
                  <motion.div
                    className="inline-flex p-4 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

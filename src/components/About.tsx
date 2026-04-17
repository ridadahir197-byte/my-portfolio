import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Award, Zap, Users, Target } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Award, label: 'Started In', value: '2025' },
    { icon: Zap, label: 'Projects Built', value: '8+' },
    { icon: Users, label: 'Learning Hours', value: '100+' },
    { icon: Target, label: 'Motivation Level', value: '100%' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate creative developer, building modern and interactive digital experiences while learning and growing every day.
              </p>
              <p>
                I can help you bring any idea to life, even if your concepts are still unorganized. My goal is to turn your vision into clean, functional, and stylish web projects, one step at a time.
              </p>
              <p>
                I focus on learning and improving with every project, combining creativity and practical solutions to create websites that are both beautiful and functional.
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 inline-flex gap-4"
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-full font-semibold border-2 border-white/20 hover:border-purple-500/50 backdrop-blur-sm transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Projects
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <stat.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

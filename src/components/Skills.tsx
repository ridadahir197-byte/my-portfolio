import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Smartphone, Database, Cloud, Workflow } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Vite, Tailwind CSS',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Sketch, Glassmorphism',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'React Native, Progressive Web Apps',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, supabase, SQLlite, Database Management',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS, Vercel, Netlify, Git/GitHub',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Workflow,
      title: '3D & Animation',
      description: ' GSAP, Framer Motion, ',
      color: 'from-pink-500 to-rose-500',
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Currently learning and practicing key web development and design skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${skill.color} mb-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                    {skill.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <motion.div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{
                    background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

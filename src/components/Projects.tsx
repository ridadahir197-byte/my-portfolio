import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Lujai: Digital Novel Experience',
      description: 'A full-stack web application dedicated to immersive storytelling, featuring dynamic chapter rendering and reader engagement tools.',
      tags: ['React', 'Vite', 'AI', 'Supabase', 'Tailwind CSS', 'UI/UX Design', 'Framer Motion', 'SQLlite', '...'],
      gradient: 'from-blue-600 via-purple-600 to-pink-600',
    },
    {
      title: 'Modern E-Shop',
      description: 'A fully functional e-commerce platform featuring product filtering, shopping cart management, and a responsive checkout system.',
      tags: ['React', 'Tailwind CSS', 'Supabase', 'Framer Motion', '...'],
      gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    },
    {
      title: 'The Gourmet Table',
      description: 'A visually stunning landing page for a high-end restaurant, including interactive menus, reservation forms, and location integration',
      tags: ['JavaScript', 'TypeScript', 'React', 'Framer Motion', 'Supabase', '...'],
      gradient: 'from-purple-600 via-pink-600 to-red-600',
    },
    {
      title: 'FocusFlow Tasks',
      description: 'A productivity web application designed to help users organize daily tasks with persistent storage and status tracking',
      tags: ['javaScript', 'Node.js', 'TypeScript', 'Vite', '...'],
      gradient: 'from-green-500 via-teal-500 to-blue-600',
    },
    {
      title: 'Personal Brand Identity',
      description: 'A professional developer portfolio showcasing technical skills, completed projects, and a direct contact system for freelance inquiries',
      tags: ['React', 'UI/UX Design', 'Responsive Web', 'Framer Motion', '...'],
      gradient: 'from-orange-500 via-red-500 to-pink-600',
    },
    {
      title: 'Next-Gen Project',
      description: 'Currently exploring new technologies and building innovative solutions. Stay tuned for the next big release',
      tags: ['Learning', 'Research', 'Development', '...'],
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    },
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
    <section id="projects" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Featured Work</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Selected Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring the intersection of design, technology, and user experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        rotate: hoveredIndex === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Sparkles className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href="https://page-of-developer-venom.netlify.app/#portfolio"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="#"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

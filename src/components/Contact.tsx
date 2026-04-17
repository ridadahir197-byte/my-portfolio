import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MessageSquare, User, Send } from 'lucide-react';
import emailjs from '@emailjs/browser'; // 1. استيراد المكتبة

export default function Contact() {
  const form = useRef<HTMLFormElement>(null); // تبديل ref باش يخدم مع الفورم
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSending, setIsSending] = useState(false); // حالة الإرسال

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // 2. إرسال الإيميل
    emailjs.sendForm(
      'service_2bsk90c',   // بدلو بـ Service ID من EmailJS
      'template_4dq1eeg',  // بدلو بـ Template ID من EmailJS
      form.current!,
      'vDWoF4NeLnJ0Ln9-5'    // بدلو بـ Public Key من EmailJS
    )
    .then((result) => {
        alert("Message sent successfully! ✅");
        setFormData({ name: '', email: '', message: '' }); // مسح الفورم
    }, (error) => {
        alert("Something went wrong ❌: " + error.text);
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ... (نفس الـ Variants اللي عندك بلا تبديل)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's create something extraordinary together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="relative p-8 sm:p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/10 to-pink-600/10" />

            {/* زدنا الـ ref هنا */}
            <form ref={form} onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  <User className="w-4 h-4" />
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name" // مهم جداً: خليه يطابق الـ Template في EmailJS
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white"
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  <Mail className="w-4 h-4" />
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none"
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  <MessageSquare className="w-4 h-4" />
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 text-white resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSending} // بلوك للزرار فاش كيكون كيصيفط
                  className={`group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-lg overflow-hidden ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                  whileHover={!isSending ? { scale: 1.02 } : {}}
                  whileTap={!isSending ? { scale: 0.98 } : {}}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSending ? 'Sending...' : 'Send Message'}
                    {!isSending && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </span>
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
            <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">Or reach out directly</p>
            <motion.a
              href="mailto:mohammedridadahir@gmail.com"
              className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              mohammedridadahir@gmail.com
            </motion.a>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
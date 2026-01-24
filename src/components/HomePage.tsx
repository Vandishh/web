import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { ServicesSlider } from './ServicesSlider';
import {
  Cpu,
  Zap,
  Shield,
  Sparkles,
  Code,
  Cloud,
  Database
} from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-light)' }}>
      <SEO
        title="AlgoTells. AI - AI & GPU Optimization | Enterprise AI Solutions"
        description="Transform your business with cutting-edge AI and GPU optimization solutions. Industry-leading expertise in machine learning, deep learning, and high-performance computing. Request a demo today."
        keywords="AI optimization, GPU acceleration, machine learning development, artificial intelligence consulting, MLOps, data engineering, AI security, CUDA programming, deep learning, neural networks, computer vision, NLP, enterprise AI"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background grid */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(75, 46, 131, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(75, 46, 131, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </motion.div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 blur-[120px]"
          style={{ backgroundColor: 'var(--primary)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-12 blur-[120px]"
          style={{ backgroundColor: 'var(--accent)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6 px-4 py-2 rounded-full glass-effect"
              style={{ borderColor: 'var(--border)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm" style={{ color: 'var(--primary)' }}>Next-Gen AI Solutions</span>
            </motion.div>

            <motion.h1
              className="mb-4 sm:mb-6 text-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2 sm:px-0 font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Accelerate Your AI Journey with Precision Engineering
            </motion.h1>

            <motion.p
              className="mb-8 sm:mb-10 max-w-3xl mx-auto text-base sm:text-lg px-4 sm:px-0 leading-relaxed"
              style={{ color: 'var(--text-dark)', opacity: 0.8 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              From GPU optimization to intelligent automation, we build AI solutions that drive measurable business outcomes.
              Partner with experts who understand both technology and your industry.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-white transition-all duration-300 text-center text-base font-medium purple-shadow-lg hover:purple-shadow"
                style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A2366'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
              >
                Start Your AI Transformation
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl transition-all duration-300 text-center text-base font-medium purple-shadow"
                style={{ backgroundColor: 'var(--accent)', borderColor: 'var(--accent)', color: 'var(--primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A06BC8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
              >
                Schedule a Meeting
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2" style={{ borderColor: 'var(--primary)' }}>
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--primary)' }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Slider */}
      <ServicesSlider />

      <div className="flex justify-center pb-12 sm:pb-20 px-4">
        <Link
          to="/contact"
          className="inline-block px-8 py-4 rounded-xl text-white transition-all duration-300 font-medium text-center text-base whitespace-nowrap purple-shadow-lg hover:purple-shadow"
          style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A2366'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
        >
          Schedule a Call
        </Link>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-gradient text-3xl sm:text-4xl md:text-5xl font-bold">Why Choose AlgoTells?</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              Industry-leading expertise in AI optimization and deployment
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Cpu,
                title: 'GPU Optimization',
                description: 'Maximize performance with advanced GPU acceleration and optimization techniques.'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Deploy AI solutions that operate at unprecedented speeds without compromising quality.'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-grade security protocols to protect your data and AI models.'
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard delay={0}>
                  <div className="flex flex-col items-center text-center p-6">
                    <motion.div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 purple-shadow-lg"
                      style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)' }}
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="mb-3 text-xl font-semibold" style={{ color: 'var(--text-dark)' }}>{feature.title}</h3>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>{feature.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-gradient text-3xl sm:text-4xl md:text-5xl font-bold">Powered by Leading Technologies</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              We leverage the most advanced AI frameworks and tools to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              'TensorFlow', 'PyTorch', 'CUDA', 'Kubernetes', 'AWS', 'Azure',
              'NVIDIA', 'Docker', 'Ray', 'MLflow', 'Hugging Face', 'LangChain'
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="glass-effect rounded-xl p-6 text-center transition-all cursor-pointer group purple-shadow hover:purple-shadow-lg"
                style={{ borderColor: 'var(--border)' }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(75, 46, 131, 0.2)"
                }}
              >
                <div className="font-medium transition-colors" style={{ color: 'var(--text-dark)', opacity: 0.8 }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dark)'}>{tech}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-effect rounded-2xl p-8 md:p-12 text-center relative overflow-hidden purple-shadow-lg"
            style={{ borderColor: 'var(--border)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(75, 46, 131, 0.08) 0%, rgba(181, 126, 220, 0.08) 100%)' }} />

            <div className="relative z-10">
              <h2 className="mb-4 text-gradient text-3xl sm:text-4xl md:text-5xl font-bold">Ready to Accelerate Your AI Journey?</h2>
              <p className="mb-8 max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
                Join hundreds of forward-thinking companies leveraging AlgoTells's AI expertise
                to drive innovation and achieve unprecedented business outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-block w-full sm:w-auto px-8 py-4 rounded-xl text-white transition-all duration-300 hover:scale-105 text-base font-medium purple-shadow-lg"
                  style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A2366'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                >
                  Request a Demo
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-block w-full sm:w-auto px-8 py-4 rounded-xl transition-all duration-300 text-base font-medium purple-shadow"
                  style={{ backgroundColor: 'var(--accent)', borderColor: 'var(--accent)', color: 'var(--primary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A06BC8'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

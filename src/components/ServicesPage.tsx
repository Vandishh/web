import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { GlassCard } from './GlassCard';
import { ArrowRight, Brain, Code, Smartphone, Cloud, GitBranch, CheckCircle2 } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

export function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning Solutions',
      description: 'We design and deploy intelligent systems that learn from data, automate decisions, and create competitive advantages for modern businesses.',
      capabilities: [
        'Predictive analytics & forecasting models',
        'Computer vision & NLP solutions',
        'Recommendation systems',
        'Custom model training with PyTorch & TensorFlow',
        'GPU acceleration with CUDA & TensorRT'
      ],
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'CUDA', 'TensorRT', 'OpenCV', 'NLP']
    },
    {
      icon: Code,
      title: 'Web Application Development',
      description: 'We build high-performance, scalable, and visually refined web applications designed for speed, usability, and growth.',
      capabilities: [
        'Full-stack web platforms',
        'Admin dashboards & SaaS products',
        'UI/UX focused interfaces',
        'API integrations',
        'Secure authentication systems'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development (React Native)',
      description: 'Cross-platform mobile apps engineered for performance, seamless UX, and rapid scalability using a single codebase.',
      capabilities: [
        'Android & iOS apps',
        'Real-time data sync',
        'API-driven architecture',
        'Clean UI/UX design',
        'App store deployment support'
      ],
      technologies: ['React Native', 'Firebase', 'REST APIs', 'Redux', 'Expo']
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Infrastructure',
      description: 'We design reliable cloud architectures and automated pipelines that ensure your systems are scalable, secure, and always available.',
      capabilities: [
        'CI/CD pipeline setup',
        'Docker & Kubernetes orchestration',
        'AWS / GCP cloud architecture',
        'Server monitoring & logging',
        'Infrastructure as Code'
      ],
      technologies: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Nginx']
    },
    {
      icon: GitBranch,
      title: 'MLOps & AI Deployment Pipelines',
      description: 'We bridge the gap between ML models and production with robust MLOps pipelines that ensure reproducibility, monitoring, and continuous improvement.',
      capabilities: [
        'Model versioning & tracking',
        'Automated training pipelines',
        'Model deployment APIs',
        'Monitoring model drift',
        'Scalable inference systems'
      ],
      technologies: ['MLflow', 'FastAPI', 'Docker', 'Kubernetes', 'Python', 'CI/CD']
    }
  ];


  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: 'var(--bg-light)' }}>
      <SEO
        title="Engineering Intelligence Into Digital Products | AlgoTells Services"
        description="AlgoTells builds scalable AI systems, modern applications, and production-ready infrastructure that transform ideas into intelligent digital platforms."
        keywords="AI services, machine learning solutions, web development, mobile app development, DevOps, MLOps, cloud infrastructure"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect border border-[#ffffff]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#d1d5db] text-xs sm:text-sm">What We Do</span>
          </motion.div>
          <h1 className="mb-4 sm:mb-6 text-gradient text-3xl sm:text-4xl md:text-5xl px-2">Engineering Intelligence Into Digital Products</h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>
            AlgoTells builds scalable AI systems, modern applications, and production-ready infrastructure that transform ideas into intelligent digital platforms.
          </p>
        </motion.div>

        {/* Services Grid */}
        <section className="py-12 sm:py-20">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard delay={0}>
                  <div className="p-6 sm:p-8">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 purple-shadow-lg"
                      style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)' }}
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="mb-4 text-xl sm:text-2xl font-bold" style={{ color: 'var(--text-dark)' }}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 text-base leading-relaxed" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>
                      {service.description}
                    </p>

                    {/* Capabilities */}
                    <div className="mb-6 space-y-3">
                      <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-dark)', opacity: 0.9 }}>Capabilities</h4>
                      <div className="space-y-2">
                        {service.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
                            <span className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-dark)', opacity: 0.9 }}>Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg text-xs purple-shadow"
                            style={{ backgroundColor: 'var(--bg-light)', borderColor: 'var(--border)', color: 'var(--text-dark)', opacity: 0.6 }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.div
          className="mt-12 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-20 lg:p-24 border border-[#ffffff]/30">
            <h2 className="mb-4 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-bold px-2 text-gradient">Let's Build Intelligent Systems Together</h2>
            <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              Partner with AlgoTells to turn your ideas into scalable, AI-powered digital products.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white transition-all duration-300 text-sm sm:text-base w-full sm:w-auto purple-shadow-lg hover:purple-shadow"
                style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A2366'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <a
                href="mailto:hi@algotells.com"
                className="text-sm sm:text-base transition-colors"
                style={{ color: 'var(--text-dark)', opacity: 0.7 }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
              >
                hi@algotells.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

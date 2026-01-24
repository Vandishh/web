import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { Brain, Cpu, Code, Cloud, Package } from 'lucide-react';

export function CapabilityMatrixPage() {
  const capabilities = [
    {
      icon: Brain,
      title: 'AI & LLM Platforms',
      description: 'Build and deploy advanced AI systems powered by large language models and neural networks.',
      technologies: [
        'GPT Integration',
        'Custom LLMs',
        'RAG Systems',
        'Vector Databases',
        'Prompt Engineering',
        'Fine-tuning'
      ],
      color: 'from-[#4B2E83] to-[#B57EDC]'
    },
    {
      icon: Cpu,
      title: 'GPU Optimization',
      description: 'Maximize computational efficiency with advanced GPU acceleration and optimization techniques.',
      technologies: [
        'CUDA Development',
        'Tensor Optimization',
        'Memory Management',
        'Parallel Processing',
        'Performance Profiling',
        'Hardware Acceleration'
      ],
      color: 'from-[#d1d5db] to-[#ffffff]'
    },
    {
      icon: Code,
      title: 'Web & App Engineering',
      description: 'Create scalable, responsive applications with modern frameworks and best practices.',
      technologies: [
        'React & Next.js',
        'Mobile Development',
        'Progressive Web Apps',
        'Real-time Systems',
        'API Development',
        'UI/UX Design'
      ],
      color: 'from-[#4B2E83] to-[#B57EDC]'
    },
    {
      icon: Cloud,
      title: 'Cloud & Edge',
      description: 'Deploy AI solutions at scale with cloud infrastructure and edge computing capabilities.',
      technologies: [
        'AWS/Azure/GCP',
        'Kubernetes',
        'Serverless',
        'Edge Computing',
        'CDN Optimization',
        'Infrastructure as Code'
      ],
      color: 'from-[#d1d5db] to-[#ffffff]'
    },
    {
      icon: Package,
      title: 'Product Engineering',
      description: 'End-to-end product development from conception to deployment and maintenance.',
      technologies: [
        'Agile Development',
        'MVP Creation',
        'Product Strategy',
        'Quality Assurance',
        'DevOps',
        'Continuous Integration'
      ],
      color: 'from-[#4B2E83] to-[#B57EDC]'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: 'var(--bg-light)' }}>
      <SEO
        title="Technical Capabilities | AI, LLM, GPU, Cloud & Engineering | AlgoTells"
        description="Explore AlgoTells's technical expertise: AI & LLM Platforms, GPU Optimization, Web & App Engineering, Cloud & Edge Computing, Product Engineering. Advanced capabilities across the AI lifecycle."
        keywords="AI LLM platforms, GPU optimization expertise, cloud computing, edge AI, product engineering, technical capabilities, CUDA development, Kubernetes"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full glass-effect"
            style={{ borderColor: 'var(--border)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#d1d5db]">Our Expertise</span>
          </motion.div>
          <h1 className="mb-4 text-gradient">Capability Matrix</h1>
          <p className="max-w-3xl mx-auto" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
            A comprehensive overview of our technical capabilities and expertise
            across the entire AI and software development lifecycle.
          </p>
        </motion.div>


        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={index === capabilities.length - 1 && capabilities.length % 2 !== 0 ? 'md:col-span-2' : ''}
            >
              <GlassCard className="h-full">
                <div className="flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-4`}>
                    <capability.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="mb-3" style={{ color: 'var(--text-dark)' }}>{capability.title}</h3>
                  <p className="mb-6" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>{capability.description}</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-auto">
                    {capability.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm text-center transition-colors break-words purple-shadow"
                        style={{ backgroundColor: 'var(--bg-light)', borderColor: 'var(--border)', color: 'var(--text-dark)', opacity: 0.8 }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E8D5FF'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-light)'}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>


        {/* Expertise Levels */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-12 text-gradient">Our Expertise Levels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                level: 'Advanced',
                description: 'Deep expertise with proven track record',
                percentage: '85%',
                areas: ['AI/ML', 'GPU Optimization', 'Cloud Architecture']
              },
              {
                level: 'Proficient',
                description: 'Strong capabilities and experience',
                percentage: '70%',
                areas: ['Web Development', 'DevOps', 'Data Engineering']
              },
              {
                level: 'Emerging',
                description: 'Growing expertise in cutting-edge tech',
                percentage: '50%',
                areas: ['Quantum ML', 'Edge AI', 'Neuromorphic Computing']
              }
            ].map((expertise, index) => (
              <GlassCard key={index}>
                <div className="text-center">
                  <div className="mb-4 text-gradient">{expertise.percentage}</div>
                  <h3 className="mb-2" style={{ color: 'var(--text-dark)' }}>{expertise.level}</h3>
                  <p className="mb-4 text-sm" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>{expertise.description}</p>
                  <div className="space-y-2">
                    {expertise.areas.map((area, idx) => (
                      <div key={idx} className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.6 }}>
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>


        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-6 sm:p-8 md:p-12" style={{ borderColor: 'var(--border)' }}>
            <h2 className="mb-3 sm:mb-4 text-gradient text-xl sm:text-2xl md:text-3xl px-2">Leverage Our Expertise</h2>
            <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              Let's discuss how our capabilities can address your specific technical challenges.
            </p>
            <a
              href="/contact"
              className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white neon-glow-hover transition-all duration-300 hover:scale-105 text-sm sm:text-base text-center purple-shadow-lg"
              style={{ background: 'linear-gradient(to right, var(--primary), var(--accent))' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #3A2366, #A06BC8)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, var(--primary), var(--accent))'}
            >
              Schedule Technical Call
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

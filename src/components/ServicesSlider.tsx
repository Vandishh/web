import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Cpu, MessageSquare, Bot, Workflow, Shield, FileSearch, ShieldCheck, Cloud, Network, GitBranch, Code, Wrench, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';

// Services data - single source of truth for both desktop and mobile
const services = [
  {
    icon: Cpu,
    title: 'AI GPU Optimization & Attestation',
    description: 'Unlock true GPU performance with custom CUDA pipelines, TensorRT optimizations, and cryptographic trust layers for secure, verified AI workloads.',
    highlights: ['Kernel-level GPU tuning', 'LLM fine-tuning & quantization', 'GPU Attestation with nvTrust', 'Up to 40% cost reduction'],
    tech: 'CUDA • TensorRT • PyTorch • Triton • ONNX'
  },
  {
    icon: MessageSquare,
    title: 'RAG Applications',
    description: 'Interactive AI systems combining retrieval, reasoning, and response—creating intelligent agents grounded in your data.',
    highlights: ['Text ↔ Voice multilingual AI', 'Text → Video generation', 'Meeting summaries & insights', 'Context-aware chatbots'],
    tech: 'LangChain • Hugging Face • OpenAI • Nuclia'
  },
  {
    icon: Bot,
    title: 'AI Agentic Systems',
    description: 'Intelligent autonomous systems that make decisions, execute tasks, and learn from interactions to deliver complex business outcomes.',
    highlights: ['Autonomous task execution', 'Multi-agent orchestration', 'Self-learning capabilities', 'Business process automation'],
    tech: 'N8N • LangChain • OpenAI Agents • AutoGPT'
  },
  {
    icon: Workflow,
    title: 'AI Integration & Workflow Automation',
    description: 'Seamlessly integrate AI into your existing workflows with intelligent automation that adapts to your business processes.',
    highlights: ['API integration', 'Workflow optimization', 'Process automation', 'Legacy system modernization'],
    tech: 'Python • REST APIs • Webhooks • MuleSoft'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions protecting your digital infrastructure from threats with advanced AI-powered detection and response.',
    highlights: ['Threat detection & response', 'Security monitoring', 'Incident management', 'Vulnerability assessment'],
    tech: 'SIEM • SOAR • Threat Intelligence • AI Security'
  },
  {
    icon: FileSearch,
    title: 'VAPT',
    description: 'Vulnerability Assessment and Penetration Testing to identify and remediate security weaknesses before attackers exploit them.',
    highlights: ['Network penetration testing', 'Web application security', 'Infrastructure assessment', 'Compliance validation'],
    tech: 'OWASP • Burp Suite • Metasploit • Nmap'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Risk',
    description: 'Ensure regulatory compliance and manage risk with comprehensive frameworks tailored to your industry requirements.',
    highlights: ['Regulatory compliance', 'Risk assessment', 'Audit preparation', 'Policy implementation'],
    tech: 'GDPR • HIPAA • SOC 2 • ISO 27001'
  },
  {
    icon: Cloud,
    title: 'DevOps & DevSecOps',
    description: 'Accelerate software delivery with DevOps practices and integrate security throughout the development lifecycle.',
    highlights: ['CI/CD pipelines', 'Infrastructure as Code', 'Security integration', 'Automated testing'],
    tech: 'Kubernetes • Docker • Terraform • Jenkins'
  },
  {
    icon: Network,
    title: 'Cloud Computing',
    description: 'Leverage cloud infrastructure for scalable, resilient, and cost-effective application deployment and management.',
    highlights: ['Cloud migration', 'Multi-cloud strategy', 'Cost optimization', 'Auto-scaling'],
    tech: 'AWS • Azure • GCP • Cloud Native'
  },
  {
    icon: GitBranch,
    title: 'Edge Computing',
    description: 'Deploy computing resources closer to data sources for reduced latency and improved real-time processing capabilities.',
    highlights: ['Edge deployment', 'Latency optimization', 'Real-time processing', 'IoT integration'],
    tech: 'Edge AI • IoT • 5G • Fog Computing'
  },
  {
    icon: Code,
    title: 'CI/CD Automation',
    description: 'Streamline development workflows with continuous integration and deployment pipelines for faster, reliable releases.',
    highlights: ['Automated builds', 'Testing automation', 'Deployment pipelines', 'Release management'],
    tech: 'GitHub Actions • GitLab CI • CircleCI • ArgoCD'
  },
  {
    icon: Wrench,
    title: 'Product Engineering',
    description: 'End-to-end product development from concept to deployment with full-stack engineering expertise.',
    highlights: ['Full-stack development', 'Product architecture', 'Scalable systems', 'Performance optimization'],
    tech: 'React • Node.js • Python • Microservices'
  },
  {
    icon: Layers,
    title: 'Custom Development',
    description: 'Bespoke software solutions tailored to your unique business needs and requirements.',
    highlights: ['Custom applications', 'Enterprise software', 'System integration', 'Legacy modernization'],
    tech: 'Full Stack • Cloud Native • Modern Frameworks'
  },
  {
    icon: Cloud,
    title: 'Micro-SaaS Development',
    description: 'Build and launch focused SaaS products with rapid development cycles and market validation.',
    highlights: ['Rapid prototyping', 'MVP development', 'SaaS architecture', 'Product launch'],
    tech: 'Next.js • Stripe • Supabase • Modern SaaS Stack'
  }
];

export function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use the same services array for both desktop and mobile
  const maxIndex = Math.max(0, services.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-3 sm:mb-4 text-gradient text-2xl sm:text-3xl md:text-4xl px-2">Our Services</h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
            Comprehensive AI solutions tailored to transform your industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 sm:-left-2 md:-left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10">
            <motion.button
              onClick={prev}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full glass-effect flex items-center justify-center transition-all purple-shadow"
              style={{ borderColor: 'var(--border)', color: 'var(--text-dark)' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>

          <div className="absolute right-0 sm:-right-2 md:-right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10">
            <motion.button
              onClick={next}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full glass-effect flex items-center justify-center transition-all purple-shadow"
              style={{ borderColor: 'var(--border)', color: 'var(--text-dark)' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden px-8 sm:px-12 md:px-16 lg:px-20">
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{
                x: `calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * (16 / itemsPerView)}px)`
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(16 * (itemsPerView - 1)) / itemsPerView}px)` }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard delay={0}>
                    <div className="h-full flex flex-col">
                      <motion.div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 purple-shadow"
                        style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)', borderColor: 'var(--border)' }}
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <service.icon className="w-7 h-7 text-white" />
                      </motion.div>

                      <h3 className="mb-3" style={{ color: 'var(--text-dark)' }}>{service.title}</h3>
                      <p className="text-sm mb-4 flex-grow" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>{service.description}</p>

                      <div className="space-y-2 mb-4">
                        {service.highlights.slice(0, 3).map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }} />
                            <span className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.6 }}>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                        <p className="text-[#ffffff]/70 text-xs">{service.tech}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                  ? 'bg-[#ffffff] w-8'
                  : 'bg-white/20 hover:bg-white/40'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

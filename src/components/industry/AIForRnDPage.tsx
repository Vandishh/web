import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { SEO } from '../SEO';
import { FlaskConical, Zap, Database, Microscope, ArrowRight } from 'lucide-react';

export function AIForRnDPage() {
  const benefits = [
    {
      icon: Zap,
      title: 'Accelerated Discovery',
      description: 'Reduce research cycles by 50% with AI-powered hypothesis generation and experimental design optimization.'
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Extract insights from vast research datasets with advanced machine learning and pattern recognition.'
    },
    {
      icon: FlaskConical,
      title: 'Innovation Amplification',
      description: 'Discover novel solutions and optimize formulations with AI-driven simulation and modeling.'
    },
    {
      icon: Microscope,
      title: 'Research Automation',
      description: 'Automate repetitive lab tasks and data analysis to focus on high-value research activities.'
    }
  ];

  const solutions = [
    {
      title: 'Research Data Analytics',
      description: 'AI-powered analytics that processes vast amounts of research data to identify patterns, correlations, and insights.',
      features: [
        'Automated data processing and analysis',
        'Pattern recognition in experimental data',
        'Predictive modeling and simulation',
        'Research hypothesis generation'
      ]
    },
    {
      title: 'Experimental Design Optimization',
      description: 'Optimize experimental designs with AI that suggests efficient test configurations and reduces trial-and-error cycles.',
      features: [
        'Optimal experimental design suggestions',
        'Resource allocation optimization',
        'Multi-variable analysis',
        'Failure prediction and prevention'
      ]
    },
    {
      title: 'Collaboration & Knowledge Management',
      description: 'Enhance research collaboration with AI-powered knowledge management and intelligent document processing.',
      features: [
        'Research paper analysis and summarization',
        'Knowledge graph construction',
        'Collaborative research tools',
        'Automated literature review'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="AI for R&D | Accelerate Research with AI Innovation | AlgoTells"
        description="Transform research and development with AI-powered discovery, data analytics, and automation. Reduce research cycles by 50% with AlgoTells's R&D AI solutions."
        keywords="AI for R&D, research automation, drug discovery AI, materials science AI, research data analytics, innovation AI"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full glass-effect border border-[#ffffff]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#d1d5db]">Industry Solutions</span>
          </motion.div>
          <h1 className="mb-6 text-gradient">AI for R&D</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Accelerate innovation with AI-powered research, discovery, and data intelligence.
            Transform your R&D capabilities with cutting-edge machine learning solutions.
          </p>
        </motion.div>


        <section className="py-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Key Benefits</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover how AI can revolutionize your R&D operations and accelerate innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-white/70 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 pt-24">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Solutions</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to address your R&D challenges and accelerate innovation.
            </p>
          </motion.div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard delay={index * 0.1}>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-3">{solution.title}</h3>
                    <p className="text-white/70 mb-4">{solution.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#d1d5db] mt-1.5 flex-shrink-0" />
                          <span className="text-white/60 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          className="mt-48 pt-60 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-3xl p-20 md:p-24 border border-[#ffffff]/30">
            <h2 className="mb-8 text-white text-2xl font-bold">Ready to Accelerate Your R&D?</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our AI solutions can revolutionize your research and development processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent text-white hover:bg-white/10 transition-all duration-300"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


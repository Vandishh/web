import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { SEO } from '../SEO';
import { Scale, FileSearch, Shield, Clock, ArrowRight } from 'lucide-react';

export function AIForLegalPage() {
  const benefits = [
    {
      icon: FileSearch,
      title: 'Automated Legal Research',
      description: 'Reduce research time by 70% with AI-powered legal research tools that analyze case law, statutes, and precedents in seconds.'
    },
    {
      icon: Scale,
      title: 'Document Analysis',
      description: 'Extract key information from contracts, legal documents, and case files with advanced natural language processing.'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Stay ahead of regulatory changes with AI-driven compliance monitoring and automated risk assessment.'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Automate repetitive tasks like contract review, due diligence, and document preparation to focus on strategic work.'
    }
  ];

  const solutions = [
    {
      title: 'Contract Analysis & Review',
      description: 'AI-powered contract analysis that identifies key terms, risks, and compliance issues in minutes instead of hours.',
      features: [
        'Automated clause extraction and analysis',
        'Risk identification and assessment',
        'Compliance checking against regulations',
        'Contract comparison and version control'
      ]
    },
    {
      title: 'Legal Research Automation',
      description: 'Accelerate legal research with AI that searches through vast databases of case law, statutes, and legal precedents.',
      features: [
        'Intelligent case law search',
        'Precedent identification',
        'Statute analysis and interpretation',
        'Research report generation'
      ]
    },
    {
      title: 'Compliance & Risk Monitoring',
      description: 'Proactive compliance management with real-time monitoring of regulatory changes and automated risk assessments.',
      features: [
        'Regulatory change tracking',
        'Automated compliance checks',
        'Risk assessment and scoring',
        'Compliance reporting and alerts'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="AI for Legal | Automate Legal Work with Intelligent Solutions | AlgoTells"
        description="Transform legal operations with AI-powered contract analysis, legal research, and compliance monitoring. Reduce review time by 70% with AlgoTells's legal AI solutions."
        keywords="AI for legal, legal automation, contract analysis AI, legal research AI, compliance monitoring, legal tech, document automation"
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
          <h1 className="mb-6 text-gradient">AI for Legal</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Streamline legal operations with AI-powered contract analysis, research automation, and compliance monitoring.
            Empower your legal team to focus on high-value strategic work.
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
              Discover how AI can revolutionize your legal operations and drive efficiency.
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
              Comprehensive AI solutions designed to address your legal challenges and drive efficiency.
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
            <h2 className="mb-8 text-white text-2xl font-bold">Ready to Transform Your Legal Operations?</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our AI solutions can revolutionize your legal workflows and drive efficiency.
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


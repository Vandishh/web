import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { SEO } from '../SEO';
import { Heart, Activity, FileText, Shield, ArrowRight } from 'lucide-react';

export function AIForHealthcarePage() {
  const benefits = [
    {
      icon: Activity,
      title: 'Diagnostic Support',
      description: 'Enhance diagnostic accuracy with AI-powered medical imaging analysis and clinical decision support systems.'
    },
    {
      icon: FileText,
      title: 'Patient Record Management',
      description: 'Streamline patient data management with AI-driven EHR systems that improve accessibility and reduce administrative burden.'
    },
    {
      icon: Heart,
      title: 'Patient Monitoring',
      description: 'Real-time patient monitoring with AI that detects early warning signs and enables proactive care interventions.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Ensure HIPAA compliance with AI-powered security measures and automated compliance monitoring for patient data protection.'
    }
  ];

  const solutions = [
    {
      title: 'Medical Imaging Analysis',
      description: 'AI-powered medical imaging that assists radiologists in detecting abnormalities, analyzing scans, and improving diagnostic accuracy.',
      features: [
        'Radiology image analysis',
        'Anomaly detection in scans',
        'Automated report generation',
        'Integration with PACS systems'
      ]
    },
    {
      title: 'Clinical Decision Support',
      description: 'Intelligent clinical decision support systems that provide evidence-based recommendations and treatment suggestions.',
      features: [
        'Evidence-based treatment recommendations',
        'Drug interaction checking',
        'Clinical guideline adherence',
        'Personalized care pathways'
      ]
    },
    {
      title: 'Administrative Automation',
      description: 'Automate administrative workflows including appointment scheduling, billing, and insurance verification.',
      features: [
        'Automated appointment scheduling',
        'Insurance verification and authorization',
        'Billing and claims processing',
        'Patient communication automation'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="AI for Healthcare | Transform Patient Care with Medical AI | AlgoTells"
        description="Revolutionize healthcare delivery with AI-powered diagnostics, patient monitoring, and operational efficiency. HIPAA-compliant solutions that improve outcomes by 35%."
        keywords="AI for healthcare, medical AI, clinical decision support, medical imaging AI, patient monitoring, healthcare automation, HIPAA compliant AI"
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
          <h1 className="mb-6 text-gradient">AI for Healthcare</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Transform patient care with AI-powered diagnostics, monitoring, and operational intelligence.
            Deliver better outcomes while reducing costs and administrative burden.
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
              Discover how AI can revolutionize healthcare delivery and improve patient outcomes.
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
              Comprehensive AI solutions designed to address healthcare challenges and improve patient care.
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
            <h2 className="mb-8 text-white text-2xl font-bold">Ready to Transform Healthcare Delivery?</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our AI solutions can revolutionize patient care and operational efficiency.
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


import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { SEO } from '../SEO';
import { Calculator, FileCheck, TrendingUp, Shield, ArrowRight } from 'lucide-react';

export function AIForAccountingPage() {
  const benefits = [
    {
      icon: FileCheck,
      title: 'Automated Reconciliation',
      description: 'Eliminate manual data entry errors with AI-powered reconciliation that processes transactions in real-time with 99.9% accuracy.'
    },
    {
      icon: Calculator,
      title: 'Tax Filing Automation',
      description: 'Streamline tax preparation and filing with AI that identifies deductions, ensures compliance, and generates accurate returns.'
    },
    {
      icon: TrendingUp,
      title: 'Financial Reporting',
      description: 'Generate comprehensive financial reports automatically with AI-driven insights and predictive analytics for better decision-making.'
    },
    {
      icon: Shield,
      title: 'Compliance & Risk Management',
      description: 'Stay compliant with evolving regulations through automated compliance checks and real-time risk assessment.'
    }
  ];

  const solutions = [
    {
      title: 'Automated Bookkeeping',
      description: 'AI-powered bookkeeping that categorizes transactions, reconciles accounts, and maintains accurate financial records automatically.',
      features: [
        'Transaction categorization and matching',
        'Automated bank reconciliation',
        'Expense tracking and classification',
        'Real-time financial data updates'
      ]
    },
    {
      title: 'Tax Preparation & Filing',
      description: 'Intelligent tax preparation that identifies deductions, ensures compliance, and automates filing processes.',
      features: [
        'Automated deduction identification',
        'Tax code compliance checking',
        'Multi-jurisdiction tax support',
        'Automated form generation and filing'
      ]
    },
    {
      title: 'Financial Analytics & Insights',
      description: 'Advanced financial analytics powered by AI that provides actionable insights and predictive forecasting.',
      features: [
        'Cash flow forecasting',
        'Financial trend analysis',
        'Anomaly detection',
        'Customizable financial dashboards'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="AI for Accounting | Automate Accounting with AI Solutions | AlgoTells"
        description="Transform accounting operations with AI-powered automation for reconciliation, tax filing, and financial reporting. Reduce errors and improve efficiency with AlgoTells's accounting AI."
        keywords="AI for accounting, accounting automation, tax filing AI, financial reporting AI, bookkeeping automation, accounting software"
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
          <h1 className="mb-6 text-gradient">AI for Accounting</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Automate accounting processes with AI to improve accuracy, efficiency, and compliance in financial operations.
            Address challenges like talent shortages and regulatory changes with intelligent automation.
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
              Discover how AI can revolutionize your accounting operations and drive efficiency.
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
              Comprehensive AI solutions designed to address your accounting challenges and drive efficiency.
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
            <h2 className="mb-8 text-white text-2xl font-bold">Ready to Transform Your Accounting Operations?</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our AI solutions can revolutionize your accounting processes and drive efficiency.
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


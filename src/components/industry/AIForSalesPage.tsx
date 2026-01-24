import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { SEO } from '../SEO';
import { TrendingUp, Target, Users, BarChart3, Zap, ArrowRight } from 'lucide-react';

export function AIForSalesPage() {
  const benefits = [
    {
      icon: Target,
      title: 'Enhanced Lead Qualification',
      description: 'AI-powered lead scoring identifies high-value prospects, enabling your sales team to focus on opportunities with the highest conversion potential.'
    },
    {
      icon: Users,
      title: 'Personalized Client Interactions',
      description: 'Deliver tailored experiences with AI-driven insights into client preferences, behavior patterns, and communication styles.'
    },
    {
      icon: BarChart3,
      title: 'Sales Forecasting',
      description: 'Accurate revenue predictions powered by machine learning algorithms that analyze historical data and market trends.'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Streamline sales processes with AI automation for follow-ups, data entry, and pipeline management.'
    }
  ];

  const solutions = [
    {
      title: 'AI-Powered CRM Integration',
      description: 'Seamlessly integrate AI capabilities into your existing CRM system for enhanced lead management and customer insights.',
      features: [
        'Automated lead scoring and prioritization',
        'Real-time customer behavior analysis',
        'Predictive sales pipeline management',
        'Intelligent follow-up scheduling'
      ]
    },
    {
      title: 'Sales Analytics & Insights',
      description: 'Gain deep insights into your sales performance with AI-driven analytics and actionable recommendations.',
      features: [
        'Revenue forecasting and trend analysis',
        'Performance benchmarking',
        'Opportunity identification',
        'Sales team productivity metrics'
      ]
    },
    {
      title: 'Conversational AI Assistants',
      description: 'Deploy AI-powered chatbots and virtual assistants to engage prospects, answer queries, and qualify leads 24/7.',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Lead qualification automation',
        'Seamless handoff to human agents'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="AI for Sales | Boost Revenue with Intelligent Sales Automation | AlgoTells"
        description="Transform your sales process with AI-powered lead scoring, automation, and analytics. Increase conversion rates by 40% and accelerate revenue growth with AlgoTells's AI solutions."
        keywords="AI for sales, sales automation, lead scoring AI, sales analytics, CRM automation, predictive sales, sales AI assistant"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
          <h1 className="mb-6 text-gradient">AI for Sales</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Accelerate revenue growth with AI-powered sales intelligence, automation, and personalization.
            Transform your sales team into a data-driven powerhouse.
          </p>
        </motion.div>


        {/* Benefits Section */}
        <section className="py-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Key Benefits</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover how AI can revolutionize your sales operations and drive measurable results.
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

        {/* Solutions Section */}
        <section className="py-16 pt-24">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Solutions</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to address your sales challenges and drive growth.
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

        {/* CTA Section */}
        <motion.div
          className="mt-48 pt-60 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-3xl p-20 md:p-24 border border-[#ffffff]/30">
            <h2 className="mb-8 text-white text-2xl font-bold">Ready to Transform Your Sales Process?</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our AI solutions can revolutionize your sales operations and drive revenue growth.
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


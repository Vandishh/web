import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { SEO } from '../SEO';
import { Megaphone, TrendingUp, Target, DollarSign, ArrowRight } from 'lucide-react';

export function AIForMarketingPage() {
  const benefits = [
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Forecast campaign performance, customer behavior, and market trends with AI-powered predictive analytics.'
    },
    {
      icon: Megaphone,
      title: 'Content Automation',
      description: 'Generate personalized content at scale with AI that adapts messaging for different audiences and channels.'
    },
    {
      icon: DollarSign,
      title: 'Budget Optimization',
      description: 'Maximize ROI with AI-driven budget allocation that optimizes spend across channels and campaigns in real-time.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Real-time campaign performance monitoring with AI insights that identify optimization opportunities instantly.'
    }
  ];

  const solutions = [
    {
      title: 'Campaign Optimization',
      description: 'AI-powered campaign management that optimizes targeting, messaging, and budget allocation for maximum ROI.',
      features: [
        'Automated A/B testing and optimization',
        'Real-time budget reallocation',
        'Audience segmentation and targeting',
        'Multi-channel campaign coordination'
      ]
    },
    {
      title: 'Content Personalization',
      description: 'Create personalized marketing content at scale with AI that adapts messaging for different audiences and platforms.',
      features: [
        'Dynamic content generation',
        'Personalized email campaigns',
        'Social media content optimization',
        'Landing page personalization'
      ]
    },
    {
      title: 'Marketing Analytics & Insights',
      description: 'Advanced marketing analytics with AI-driven insights that reveal customer behavior patterns and campaign performance.',
      features: [
        'Customer journey analysis',
        'Attribution modeling',
        'Conversion rate optimization',
        'Predictive customer lifetime value'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="AI for Marketing | Optimize Campaigns with AI-Powered Marketing | AlgoTells"
        description="Transform marketing with AI-powered insights, content personalization, and campaign optimization. Increase conversion rates and maximize ROI with AlgoTells's marketing AI."
        keywords="AI for marketing, marketing automation, campaign optimization AI, content personalization, marketing analytics, predictive marketing"
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
          <h1 className="mb-6 text-gradient">AI for Marketing</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Optimize marketing campaigns with AI-driven insights, content personalization, and performance analytics.
            Drive better results with intelligent marketing automation.
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
              Discover how AI can revolutionize your marketing operations and drive better results.
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
              Comprehensive AI solutions designed to address your marketing challenges and drive growth.
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
            <h2 className="mb-8 text-white text-2xl font-bold">Ready to Transform Your Marketing?</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our AI solutions can revolutionize your marketing campaigns and drive better results.
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


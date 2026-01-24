import { motion } from 'motion/react';
import { GlassCard } from '../GlassCard';
import { SEO } from '../SEO';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface PortfolioDetailPageProps {
  title: string;
  keywords: string;
  serviceOverview: string;
  coreFeatures: string[];
  advancedFeatures?: string[];
  technicalSpecs?: {
    title: string;
    items: string[];
  }[];
  pricingPlans?: {
    name: string;
    description: string;
  }[];
  targetIndustries?: string[];
  roiBenefits?: string[];
  apiExample?: string;
  useCases?: string[];
  competitiveAdvantages?: string[];
  securityGuarantees?: string[];
  futureRoadmap?: string[];
  developmentStatus?: string[];
}

export function PortfolioDetailPage({
  title,
  keywords,
  serviceOverview,
  coreFeatures,
  advancedFeatures,
  technicalSpecs,
  pricingPlans,
  targetIndustries,
  roiBenefits,
  apiExample,
  useCases,
  competitiveAdvantages,
  securityGuarantees,
  futureRoadmap,
  developmentStatus
}: PortfolioDetailPageProps) {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title={`${title} | Portfolio | AlgoTells`}
        description={serviceOverview}
        keywords={keywords}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect border border-[#ffffff]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#d1d5db] text-xs sm:text-sm">Portfolio</span>
          </motion.div>
          <h1 className="mb-4 sm:mb-6 text-gradient text-3xl sm:text-4xl md:text-5xl px-2">{title}</h1>
          <p className="text-white/80 max-w-3xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            {serviceOverview}
          </p>
        </motion.div>


        {/* Core Features */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl text-gradient mb-6 sm:mb-8">Core Features</h2>
          <GlassCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffffff] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm sm:text-base break-words">{feature}</span>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Advanced Features */}
        {advancedFeatures && advancedFeatures.length > 0 && (
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl text-gradient mb-6 sm:mb-8">Advanced Features</h2>
            <GlassCard>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {advancedFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffffff] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base break-words">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Technical Specifications */}
        {technicalSpecs && technicalSpecs.length > 0 && (
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl text-gradient mb-6 sm:mb-8">Technical Specifications</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {technicalSpecs.map((spec, index) => (
                <GlassCard key={index}>
                  <h3 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6 border-b border-[#333333] pb-3">
                    {spec.title}
                  </h3>
                  <div className="space-y-3">
                    {spec.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#d1d5db] mt-2 flex-shrink-0" />
                        <span className="text-white/70 text-sm sm:text-base break-words">{item}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        )}

        {/* Pricing Plans */}
        {pricingPlans && pricingPlans.length > 0 && (
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl text-gradient mb-6 sm:mb-8">Subscription Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {pricingPlans.map((plan, index) => (
                <GlassCard key={index}>
                  <h3 className="text-lg sm:text-xl text-white mb-3">{plan.name}</h3>
                  <p className="text-white/70 text-sm sm:text-base break-words">{plan.description}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        )}

        {/* Target Industries */}
        {targetIndustries && targetIndustries.length > 0 && (
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl text-gradient mb-6 sm:mb-8">Target Industries</h2>
            <GlassCard>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {targetIndustries.map((industry, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#d1d5db] mt-2 flex-shrink-0" />
                    <span className="text-white/80 text-sm sm:text-base break-words">{industry}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* ROI Benefits */}
        {roiBenefits && roiBenefits.length > 0 && (
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl text-gradient mb-6 sm:mb-8">ROI Benefits</h2>
            <GlassCard>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {roiBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffffff] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base break-words">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Competitive Advantages */}
        {competitiveAdvantages && competitiveAdvantages.length > 0 && (
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl text-gradient mb-6 sm:mb-8">Competitive Advantages</h2>
            <GlassCard>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {competitiveAdvantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffffff] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base break-words">{advantage}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Use Cases */}
        {useCases && useCases.length > 0 && (
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl text-gradient mb-6 sm:mb-8">Use Cases</h2>
            <GlassCard>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#d1d5db] mt-2 flex-shrink-0" />
                    <span className="text-white/80 text-sm sm:text-base break-words">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Security Guarantees */}
        {securityGuarantees && securityGuarantees.length > 0 && (
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl text-gradient mb-6 sm:mb-8">Security Guarantees</h2>
            <GlassCard>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {securityGuarantees.map((guarantee, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffffff] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base break-words">{guarantee}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* API Integration */}
        {apiExample && (
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl text-gradient mb-6 sm:mb-8">API Integration</h2>
            <GlassCard>
              <pre className="bg-black/50 rounded-lg p-4 sm:p-6 overflow-x-auto border border-[#333333]">
                <code className="text-white/80 text-xs sm:text-sm font-mono whitespace-pre-wrap break-words">
                  {apiExample}
                </code>
              </pre>
            </GlassCard>
          </motion.div>
        )}

        {/* Future Roadmap */}
        {futureRoadmap && futureRoadmap.length > 0 && (
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl text-gradient mb-6 sm:mb-8">Future Roadmap</h2>
            <GlassCard>
              <div className="space-y-4">
                {futureRoadmap.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#d1d5db] mt-2 flex-shrink-0" />
                    <span className="text-white/80 text-sm sm:text-base break-words">{item}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Development Status */}
        {developmentStatus && developmentStatus.length > 0 && (
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl text-gradient mb-6 sm:mb-8">Development Status</h2>
            <GlassCard>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {developmentStatus.map((status, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffffff] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base break-words">{status}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}


        {/* CTA Section */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-6 sm:p-12 md:p-20 lg:p-24 border border-[#ffffff]/30">
            <h2 className="mb-4 sm:mb-8 text-white text-xl sm:text-2xl font-bold px-2">Ready to Get Started?</h2>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              For custom implementations, enterprise licensing, or integration support, contact our technical team for tailored solutions meeting your specific performance, security, and scalability requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 px-4 sm:px-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-transparent text-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


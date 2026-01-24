import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface DetailLayoutProps {
  title: string;
  description: string;
  whatWeOffer: string[];
  benefits: string[]; // This can also map to "We Solve" for solutions
  benefitsTitle?: string; // Defaults to "Benefits"
  type: 'Service' | 'Solution';
}

export function DetailLayout({
  title,
  description,
  whatWeOffer,
  benefits,
  benefitsTitle = 'Benefits',
  type
}: DetailLayoutProps) {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title={`${title} | AlgoTells ${type}`}
        description={description}
        keywords={`${title}, ${type}, AlgoTells AI, Services, Solutions`}
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
            <span className="text-[#d1d5db] text-xs sm:text-sm">{type === 'Service' ? 'Our Services' : 'Our Solutions'}</span>
          </motion.div>
          <h1 className="mb-4 sm:mb-6 text-gradient text-3xl sm:text-4xl md:text-5xl px-2">{title}</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            {description}
          </p>
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {/* What We Offer Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <h2 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6 border-b border-[#333333] pb-3 sm:pb-4">
                {type === 'Service' ? 'What We Offer' : 'We Solve'}
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {whatWeOffer.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2 sm:gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffffff] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base lg:text-lg break-words">{item}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <h2 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6 border-b border-[#333333] pb-3 sm:pb-4">
                {benefitsTitle}
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2 sm:gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#d1d5db]/10 flex items-center justify-center flex-shrink-0 border border-[#d1d5db]/30 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#d1d5db]" />
                    </div>
                    <span className="text-white/80 text-sm sm:text-base lg:text-lg break-words">{item}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-6 sm:p-12 md:p-20 lg:p-24 border border-[#ffffff]/30">
            <h2 className="mb-4 sm:mb-8 text-white text-xl sm:text-2xl font-bold px-2">Ready to Transform Your Business?</h2>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Let's discuss how our services and expertise can address your specific business challenges and unlock new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 px-4 sm:px-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-transparent text-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

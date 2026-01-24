import { motion } from 'motion/react';
import { SEO } from './SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PolicyPageProps {
  title: string;
  description: string;
  content: string;
  lastUpdated?: string;
}

export function PolicyPage({ title, description, content, lastUpdated }: PolicyPageProps) {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title={`${title} | AlgoTells`}
        description={description}
        keywords={`${title}, AlgoTells legal, privacy, terms, policy`}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="mb-4 text-gradient text-3xl sm:text-4xl md:text-5xl">{title}</h1>
          {lastUpdated && (
            <p className="text-white/60 text-sm">Last Updated: {lastUpdated}</p>
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          className="glass-effect rounded-2xl p-6 sm:p-8 md:p-10 border border-[#ffffff]/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-semibold
              prose-h1:text-2xl prose-h1:mb-4 prose-h1:mt-8
              prose-h2:text-xl prose-h2:mb-3 prose-h2:mt-6
              prose-h3:text-lg prose-h3:mb-2 prose-h3:mt-4
              prose-p:text-white/80 prose-p:mb-4 prose-p:leading-relaxed
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-white/80 prose-ul:mb-4
              prose-ol:text-white/80 prose-ol:mb-4
              prose-li:mb-2
              prose-a:text-[#d1d5db] prose-a:underline hover:prose-a:text-white
              prose-code:text-white/90 prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="mt-8 text-center text-white/60 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>If you have questions about this policy, please contact us at{' '}
            <a href="mailto:hi@algotells.com" className="text-[#d1d5db] hover:text-white underline">
              hi@algotells.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}


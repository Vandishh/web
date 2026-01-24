import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

export function PortfolioPage() {

  const caseStudies = [
    {
      title: 'Enterprise RAG System',
      client: 'AlgoTells',
      industry: 'AI & Machine Learning',
      category: 'AI & Machine Learning',
      challenge: 'Enterprises need production-ready RAG implementation with vector search optimization to handle large-scale knowledge management with reliable performance and accuracy.',
      solution: 'Built a scalable RAG system using modern vector databases and efficient retrieval algorithms to support enterprise knowledge management with reliable performance and accuracy, serving 10K+ daily queries.',
      impact: [
        '92% accuracy on internal knowledge retrieval tasks',
        'Sub-200ms query response times for typical use cases',
        'Support for 100K+ document corpus with regular updates',
        'Multi-format document processing (PDF, Word, text)',
        'Daily queries: 10K+ with 99.5% uptime',
        '30% cost reduction vs previous system'
      ],
      tags: ['RAG', 'Vector Search', 'Multi-modal Embeddings', 'FastAPI', 'Redis', 'LangChain', 'PostgreSQL'],
      link: ''
    },
    {
      title: 'AI Customer Support Bot',
      client: 'AlgoTells',
      industry: 'AI & Machine Learning',
      category: 'AI & Machine Learning',
      challenge: 'Organizations need intelligent chatbot systems with RAG-enhanced responses that can handle high volumes of customer queries while maintaining accuracy and seamless handoff capabilities.',
      solution: 'Built an AI-powered customer support system that combines LangChain with OpenAI\'s API to provide intelligent, context-aware responses while maintaining conversation history and integrating with existing knowledge bases.',
      impact: [
        '85% query resolution rate without human intervention',
        'Average response time under 3 seconds',
        'Support for 20+ common customer inquiry types',
        'Monthly queries handled: 5,000+ with 99.2% uptime',
        'Customer satisfaction: 4.2/5 average rating',
        '60% cost reduction compared to previous support model'
      ],
      tags: ['RAG', 'OpenAI API', 'LangChain', 'React', 'Node.js', 'MongoDB', 'WebSocket'],
      link: ''
    },
    {
      title: 'Document Q&A Assistant',
      client: 'AlgoTells',
      industry: 'AI & Machine Learning',
      category: 'AI & Machine Learning',
      challenge: 'Users need an intuitive way to extract insights from PDFs and documents using natural language queries, making information discovery effortless.',
      solution: 'Created an intuitive document analysis tool that allows users to upload documents and ask questions in natural language, receiving accurate answers based on the content with source citations and confidence scores.',
      impact: [
        'Support for PDF, DOCX, and TXT file formats up to 50MB',
        'Question answering with 88% accuracy on test documents',
        'Documents processed: 2,000+ across various domains',
        'Average processing time: 30 seconds for 100-page documents',
        'User satisfaction: 4.1/5 based on feedback surveys',
        'Query response time: Average 2.5 seconds per question'
      ],
      tags: ['Document Processing', 'OpenAI', 'FAISS', 'Streamlit', 'PyPDF2', 'NLP', 'Python'],
      link: ''
    },
    {
      title: 'Code Review Assistant',
      client: 'AlgoTells',
      industry: 'AI & Machine Learning',
      category: 'AI & Machine Learning',
      challenge: 'Development teams need automated code analysis tools that provide intelligent suggestions and identify potential issues in pull requests to improve code quality and developer productivity.',
      solution: 'Built an automated code review assistant that integrates with GitHub to provide intelligent feedback on pull requests, helping teams maintain code quality and catch potential issues early in the development process.',
      impact: [
        'Pull requests analyzed: 500+ across multiple repositories',
        'Issues identified: 200+ potential bugs and improvements',
        'Developer adoption: 78% of team members actively use suggestions',
        'Review time reduction: 30% decrease in manual review time',
        'Automated detection of common coding issues and anti-patterns',
        'Security vulnerability identification with severity scoring'
      ],
      tags: ['GitHub API', 'Python', 'FastAPI', 'Code Analysis', 'CI/CD', 'OpenAI', 'AST'],
      link: ''
    },
    {
      title: 'Content Generation Platform',
      client: 'AlgoTells',
      industry: 'AI & Machine Learning',
      category: 'AI & Machine Learning',
      challenge: 'Marketing teams need to create consistent, high-quality content at scale while maintaining brand voice and meeting specific campaign objectives.',
      solution: 'Developed a comprehensive content generation platform that helps marketing teams create consistent, high-quality content at scale while maintaining brand voice and meeting specific campaign objectives using fine-tuned models.',
      impact: [
        'Content pieces generated: 1,200+ across 15 client brands',
        'Time savings: 70% reduction in content creation time',
        'Quality consistency: 4.3/5 average client satisfaction score',
        'Active users: 45+ marketing professionals using platform monthly',
        'Generate 500+ word blog posts in under 2 minutes',
        'Create social media content for 5+ platforms simultaneously'
      ],
      tags: ['Fine-tuning', 'React', 'PostgreSQL', 'Content Strategy', 'OpenAI', 'Python', 'Next.js'],
      link: ''
    },
    {
      title: 'Multi-GPU Training System',
      client: 'AlgoTells',
      industry: 'AI & Machine Learning',
      category: 'AI & Machine Learning',
      challenge: 'Large model training requires distributed training pipelines that scale efficiently across multiple GPUs with optimized communication and reliable checkpointing.',
      solution: 'Built a production-grade distributed training system that scales efficiently across multiple GPUs with optimized communication patterns and robust fault tolerance mechanisms.',
      impact: [
        '85%+ GPU utilization across 4-8 GPU configurations',
        'Training throughput: 8,000+ tokens/second on 4x GPU setup',
        'Memory efficiency: Support for models up to 13B parameters',
        'Communication overhead: <8% of total training time',
        'Scaling efficiency: 80%+ linear scaling up to 8 GPUs',
        'Robust checkpointing system for long-running training jobs'
      ],
      tags: ['PyTorch', 'CUDA', 'Distributed Training', 'MLOps', 'Python', 'Docker', 'Kubernetes'],
      link: ''
    }
  ];

  // Group projects by category
  const categories = [
    'AI & Machine Learning'
  ];

  const groupedProjects = categories.map(category => ({
    category,
    projects: caseStudies.filter(study => study.category === category)
  }));

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: 'var(--bg-light)' }}>
      <SEO
        title="Portfolio & Case Studies | AI Success Stories | AlgoTells"
        description="Real-world AI transformations: Healthcare diagnostics, fraud detection, supply chain optimization, and more. See how we've delivered $2B+ in value across 500+ projects."
        keywords="AI case studies, machine learning portfolio, AI success stories, GPU optimization results, AI implementation examples, enterprise AI projects"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full glass-effect"
            style={{ borderColor: 'var(--border)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#d1d5db]">Success Stories</span>
          </motion.div>
          <h1 className="mb-4 text-gradient">Portfolio</h1>
          <p className="max-w-3xl mx-auto" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
            Real-world transformations powered by our AI and GPU optimization expertise.
            Discover how we've helped organizations achieve breakthrough results.
          </p>
        </motion.div>


        {/* Case Studies by Category */}
        <div className="space-y-16 mt-16">
          {groupedProjects.map(({ category, projects }, categoryIndex) => (
            <div key={category} className="space-y-8">
              {/* Projects in this category */}
              {projects.map((study, index) => (
                <GlassCard key={`${category}-${index}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Left Column */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-dark)', opacity: 0.7 }}>
                          {study.industry}
                        </span>
                        <span className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.5 }}>{study.client}</span>
                      </div>
                      <h3 className="mb-4" style={{ color: 'var(--text-dark)' }}>{study.title}</h3>

                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                            <span style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Challenge</span>
                          </div>
                          <p className="text-sm pl-4" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>{study.challenge}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-[#ffffff]" />
                            <span className="text-[#d1d5db]">Solution</span>
                          </div>
                          <p className="text-white/70 text-sm pl-4">{study.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {study.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg text-sm purple-shadow"
                            style={{ backgroundColor: 'var(--bg-light)', borderColor: 'var(--border)', color: 'var(--text-dark)', opacity: 0.6 }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Impact */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-6">
                        <TrendingUp className="w-5 h-5 text-[#d1d5db]" />
                        <span className="text-[#d1d5db]">Impact & Results</span>
                      </div>
                      <div className="space-y-4">
                        {study.impact.map((item, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#ffffff] flex-shrink-0 mt-0.5" />
                            <span style={{ color: 'var(--text-dark)' }}>{item}</span>
                          </motion.div>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-col gap-3">
                        {study.link ? (
                          study.link.startsWith('/') ? (
                            <Link
                              to={study.link}
                              className="inline-flex items-center gap-2 transition-colors cursor-pointer min-h-[44px]"
                              style={{ color: 'var(--text-dark)', opacity: 0.7 }}
                              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dark)'}
                            >
                              <motion.span
                                className="flex items-center gap-2"
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <span>View Full Case Study</span>
                                <ArrowRight className="w-4 h-4" />
                              </motion.span>
                            </Link>
                          ) : (
                            <motion.a
                              href={study.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[#d1d5db] hover:text-white transition-colors min-h-[44px] flex items-center"
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span>View Full Case Study</span>
                              <ArrowRight className="w-4 h-4" />
                            </motion.a>
                          )
                        ) : null}
                        {study.liveUrl ? (
                          <a
                            href={study.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#ffffff] hover:text-[#d1d5db] transition-colors"
                          >
                            <span>Visit Live Platform</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          ))}
        </div>


        {/* Stats Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-12 text-gradient">By The Numbers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Retention' },
              { value: '$2B+', label: 'Value Generated' },
              { value: '50+', label: 'Industries Served' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-2 text-gradient">{stat.value}</div>
                <div style={{ color: 'var(--text-dark)', opacity: 0.7 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-6 sm:p-8 md:p-12" style={{ borderColor: 'var(--border)' }}>
            <h2 className="mb-3 sm:mb-4 text-gradient text-xl sm:text-2xl md:text-3xl px-2">Ready to Write Your Success Story?</h2>
            <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              Join leading organizations that have transformed their operations with AlgoTells.
            </p>
            <a
              href="/contact"
              className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white transition-all duration-300 scale-100 hover:scale-105 text-sm sm:text-base text-center purple-shadow-lg hover:purple-shadow"
              style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A2366'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { SEO } from './SEO';
import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: 'var(--bg-light)' }}>
      <SEO
        title="Contact AlgoTells | Request AI Demo & Consultation | Get Started"
        description="Transform your business with AI. Contact AlgoTells for a free consultation. Available 24/7. Email: hi@algotells.com | Phone: +91 98792 45045"
        keywords="contact AI company, AI consultation, request AI demo, AI consultation Gujarat India, GPU optimization contact, enterprise AI inquiry"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect"
            style={{ borderColor: 'var(--border)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xs sm:text-sm" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Get In Touch</span>
          </motion.div>
          <h1 className="mb-3 sm:mb-4 text-gradient text-3xl sm:text-4xl md:text-5xl px-2">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base px-4 sm:px-0" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
            Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-effect rounded-2xl p-6 sm:p-8" style={{ borderColor: 'var(--border)' }}>
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl" style={{ color: 'var(--text-dark)' }}>Send Us a Message</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 purple-shadow-lg" style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--border)' }}>
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2" style={{ color: 'var(--text-dark)' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-dark)', opacity: 0.7 }}>We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border transition-all"
                      style={{ backgroundColor: '#ffffff', borderColor: 'var(--border)', color: 'var(--text-dark)' }}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block mb-2" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border transition-all"
                      style={{ backgroundColor: '#ffffff', borderColor: 'var(--border)', color: 'var(--text-dark)' }}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-2" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border transition-all"
                      style={{ backgroundColor: '#ffffff', borderColor: 'var(--border)', color: 'var(--text-dark)' }}
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block mb-2" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border transition-all"
                      style={{ backgroundColor: '#ffffff', borderColor: 'var(--border)', color: 'var(--text-dark)' }}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block mb-2" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border transition-all"
                      style={{ backgroundColor: '#ffffff', borderColor: 'var(--border)', color: 'var(--text-dark)' }}
                    >
                      <option value="">Select a service</option>
                      <option value="ai-ml">AI/ML Development</option>
                      <option value="gpu">GPU Optimization</option>
                      <option value="data">Data Engineering</option>
                      <option value="mlops">MLOps</option>
                      <option value="security">AI Security</option>
                      <option value="consulting">AI Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border transition-all resize-none"
                      style={{ backgroundColor: '#ffffff', borderColor: 'var(--border)', color: 'var(--text-dark)' }}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 rounded-xl text-white transition-all duration-300 purple-shadow-lg hover:purple-shadow"
                    style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A2366'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="glass-effect rounded-2xl p-6 sm:p-8" style={{ borderColor: 'var(--border)' }}>
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl" style={{ color: 'var(--text-dark)' }}>Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 purple-shadow" style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--border)' }}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="mb-1" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>Email</div>
                    <a href="mailto:hi@algotells.com" className="transition-colors" style={{ color: 'var(--text-dark)', opacity: 0.7 }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dark)'}>
                      hi@algotells.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 purple-shadow" style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--border)' }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="mb-1" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>Phone</div>
                    <a href="tel:+919879245045" className="transition-colors" style={{ color: 'var(--text-dark)', opacity: 0.7 }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dark)'}>
                      +91 98792 45045
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6 sm:p-8" style={{ borderColor: 'var(--border)' }}>
              <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl" style={{ color: 'var(--text-dark)' }}>Quick Response</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
                Our team typically responds within 24 hours during business days.
                For urgent inquiries, please call us directly.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--primary)' }} />
                <span className="text-sm sm:text-base" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Online Now</span>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </div>
  );
}

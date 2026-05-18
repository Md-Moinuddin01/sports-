import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: ['Tournaments', 'Matches', 'Teams', 'Players', 'Community'],
    },
    {
      title: 'Explore',
      links: ['Events', 'News', 'Rankings', 'Achievements', 'Merchandise'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Blog', 'Careers', 'Contact', 'Press'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Code of Conduct', 'FAQ'],
    },
  ]

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ]

  return (
    <footer className="bg-dark-bg border-t border-dark-input">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto"
      >
        <div className="glass rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Stay Updated with <span className="text-gradient">SportsPulse</span>
              </h3>
              <p className="text-gray-400">
                Get the latest tournaments, match results, player stats, and exclusive sports news delivered to your inbox.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="input flex-1"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary flex items-center gap-2 px-6"
              >
                <Send size={18} />
                <span className="hidden sm:inline">Subscribe</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold text-gradient">⚡</div>
              <span className="text-lg font-bold">SportsPulse</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              The next generation sports platform where passion meets performance.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  className="w-9 h-9 rounded-full bg-dark-input flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-dark-bg transition-colors"
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-bold text-sm mb-4 text-neon-blue uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-neon-blue transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-dark-input mb-8"
        >
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-neon-blue" />
            <div>
              <div className="text-xs text-gray-400">Email</div>
              <a href="mailto:contact@sportspulse.com" className="font-semibold hover:text-neon-blue transition-colors">
                contact@sportspulse.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-neon-blue" />
            <div>
              <div className="text-xs text-gray-400">Phone</div>
              <a href="tel:+919876543210" className="font-semibold hover:text-neon-blue transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-neon-blue" />
            <div>
              <div className="text-xs text-gray-400">Address</div>
              <p className="font-semibold">Sports Complex, Mumbai, India</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-dark-input text-sm text-gray-400"
        >
          <p>&copy; 2026 SportsPulse. All rights reserved. Designed with ⚡ for athletes worldwide.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neon-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neon-blue transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-neon-blue transition-colors">
              Cookie Preferences
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

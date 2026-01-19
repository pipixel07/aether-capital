import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Youtube, Linkedin, Twitter, ArrowUpRight, Sparkles, Building2, TrendingUp, Shield } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web3", href: "/services#web3" },
    { name: "Blockchain", href: "/services#blockchain" },
    { name: "AI", href: "/services#ai" },
    { name: "Real Estate", href: "/real-estate" },
  ],
  investments: [
    { name: "Stock Market", href: "/services#stock" },
    { name: "IPOs", href: "/services#ipos" },
    { name: "Portfolio", href: "/about" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/channel/UCI2t1qNAKQYxBRCvJwk3tCg", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const highlights = [
  { icon: Building2, label: "Real Estate", value: "Premium Projects" },
  { icon: TrendingUp, label: "Returns", value: "High Growth" },
  { icon: Shield, label: "Trust", value: "10+ Years" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Top Decorative Border */}
      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <motion.div 
          className="absolute top-0 left-0 h-px w-1/3 bg-gradient-to-r from-primary to-transparent"
          animate={{ x: ['-100%', '400%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-16 pb-8">
        {/* Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex items-center gap-4 group hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="text-lg font-bold font-heading text-foreground">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10 mb-16 relative overflow-hidden"
        >
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left flex-1">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">Stay Updated</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-heading">
                Subscribe to Our <span className="text-gradient-gold">Newsletter</span>
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:flex-1 lg:max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-background/50 border border-border/50 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid - Balanced 6 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 mb-12">
          {/* Brand Column - Takes 2 columns */}
          <motion.div 
            className="col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-5 group">
              <motion.div className="relative">
                <motion.img 
                  src={logo} 
                  alt="GS Capital" 
                  className="h-16 md:h-20 w-auto drop-shadow-lg"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              GS Capital is a hybrid venture ecosystem built to fund, partner
              with, and scale businesses that shape the future.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a 
                href="tel:+919875959231"
                whileHover={{ x: 3 }}
                className="flex items-center gap-3 text-sm text-muted-foreground group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="group-hover:text-primary transition-colors">+91 9875959231</span>
              </motion.a>
              <motion.a 
                href="mailto:info@gscapital.co.in"
                whileHover={{ x: 3 }}
                className="flex items-center gap-3 text-sm text-muted-foreground group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="group-hover:text-primary transition-colors">info@gscapital.co.in</span>
              </motion.a>
              <motion.div 
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="leading-relaxed">4th Floor, SCO 255-256, Gmada Aerocity, Punjab</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold font-heading text-foreground mb-5 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="font-bold font-heading text-foreground mb-5 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Investments Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold font-heading text-foreground mb-5 text-sm uppercase tracking-wider">
              Investments
            </h4>
            <ul className="space-y-3">
              {footerLinks.investments.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h4 className="font-bold font-heading text-foreground mb-5 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Follow Us</p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-border/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} GS Capital. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-muted-foreground text-xs">
                Investing in Blockchain, Equities & Real Estate
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
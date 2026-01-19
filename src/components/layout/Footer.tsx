import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Mail, Youtube, Linkedin, Twitter } from "lucide-react";
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
    { name: "Artificial Intelligence", href: "/services#ai" },
    { name: "Real Estate", href: "/real-estate" },
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

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/30">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <motion.img 
                src={logo} 
                alt="GS Capital" 
                className="h-16 w-auto"
                whileHover={{ scale: 1.05 }}
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              GS Capital is a hybrid venture ecosystem built to fund, partner
              with, and scale businesses that shape the future. From Web3 to AI,
              we back what's bold.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>4th Floor, Centre, SCO – 255 & 256, Block-F, Gmada Aerocity, Sahibzada Ajit Singh Nagar, Punjab 140603</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@gscapital.co.in" className="hover:text-primary transition-colors">info@gscapital.co.in</a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold font-heading text-primary mb-6">Company</h4>
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
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold font-heading text-primary mb-6">Services</h4>
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
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-bold font-heading text-primary mb-6">Legal</h4>
            <ul className="space-y-3 mb-8">
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
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} GS Capital. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Investing in the Future of Blockchain, Equities, and Real Estate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

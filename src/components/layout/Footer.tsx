import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Web3", href: "#services" },
    { name: "Blockchain", href: "#services" },
    { name: "AI", href: "#services" },
    { name: "Real Estate", href: "#services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/30">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <img src={logo} alt="GS Capital" className="h-16 w-auto" />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              GS Capital is a hybrid venture ecosystem built to fund, partner
              with, and scale businesses that shape the future.
            </p>
            <p className="text-muted-foreground text-xs">
              4th Floor, Centre, SCO – 255 & 256, Block-F, Gmada Aerocity,
              Sahibzada Ajit Singh Nagar, Punjab 140603
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold font-heading text-primary mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold font-heading text-primary mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} GS Capital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.youtube.com/channel/UCI2t1qNAKQYxBRCvJwk3tCg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

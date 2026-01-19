import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    children: [
      { name: "Web3", href: "/services#web3" },
      { name: "Blockchain", href: "/services#blockchain" },
      { name: "AI", href: "/services#ai" },
      { name: "Stock Market", href: "/services#stock" },
      { name: "IPOs", href: "/services#ipos" },
      { name: "Real Estate", href: "/real-estate" },
    ]
  },
  { name: "Real Estate", href: "/real-estate" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle smooth scroll for hash links
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.includes('#')) {
      e.preventDefault();
      const [path, hash] = href.split('#');
      
      if (location.pathname === path || (path === '/services' && location.pathname === '/services')) {
        // Same page - smooth scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Different page - navigate then scroll
        navigate(href);
      }
    }
  };

  return (
    <>
      {/* Top Bar - Creative Design */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-secondary via-secondary/95 to-secondary border-b border-primary/20"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Left side - Contact info with icons */}
            <div className="flex items-center gap-8">
              <motion.a 
                href="tel:+919875959231" 
                className="flex items-center gap-3 group"
                whileHover={{ x: 3 }}
              >
                <motion.div 
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Phone className="w-4 h-4 text-primary" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Call Us</span>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">+91 9875959231</span>
                </div>
              </motion.a>

              <motion.div className="w-px h-8 bg-border/50" />
              
              <motion.a 
                href="mailto:info@gscapital.co.in" 
                className="flex items-center gap-3 group"
                whileHover={{ x: 3 }}
              >
                <motion.div 
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -10 }}
                >
                  <Mail className="w-4 h-4 text-primary" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Email</span>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">info@gscapital.co.in</span>
                </div>
              </motion.a>
            </div>

            {/* Right side - CTA */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(212, 160, 23, 0)", "0 0 0 4px rgba(212, 160, 23, 0.1)", "0 0 0 0 rgba(212, 160, 23, 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">Venture Capitalists</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "top-0 lg:top-12 bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
            : "top-0 lg:top-12 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative"
              >
                <motion.img 
                  src={logo} 
                  alt="GS Capital" 
                  className="h-20 md:h-24 w-auto drop-shadow-lg"
                />
                {/* Logo glow effect */}
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    <span className="relative">
                      {link.name}
                      {/* Active/hover underline */}
                      <motion.span
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: location.pathname === link.href ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
                    {link.children && (
                      <motion.span
                        animate={{ rotate: openDropdown === link.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-52 bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-xl overflow-hidden"
                      >
                        {link.children.map((child, childIndex) => (
                          <motion.div
                            key={child.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: childIndex * 0.05 }}
                          >
                            <Link
                              to={child.href}
                              onClick={(e) => handleNavClick(child.href, e)}
                              className="block px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all border-l-2 border-transparent hover:border-primary"
                            >
                              {child.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="tel:+919875959231"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+91 9875959231</span>
              </motion.a>
              <Button variant="hero" size="default" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <motion.a
                href="tel:+919875959231"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
              </motion.a>
              <motion.button
                className="text-foreground p-2 rounded-lg hover:bg-primary/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={28} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={28} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-card/95 backdrop-blur-md border-t border-border/50 overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
                {/* Mobile contact info */}
                <div className="flex flex-col gap-2 mb-4 pb-4 border-b border-border/30">
                  <a 
                    href="tel:+919875959231" 
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+91 9875959231</span>
                  </a>
                  <a 
                    href="mailto:info@gscapital.co.in" 
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    <span>info@gscapital.co.in</span>
                  </a>
                </div>
                
                {navLinks.map((link, index) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-300 ${
                        location.pathname === link.href
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button variant="hero" size="default" className="mt-4 w-full" asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;

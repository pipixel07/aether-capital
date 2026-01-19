import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import YouTubeShowcase from "@/components/sections/YouTubeShowcase";
import PageTransition from "@/components/PageTransition";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Globe, Link as LinkIcon, Brain, TrendingUp, Rocket, Building2,
  ArrowRight, CheckCircle2, Zap, Shield, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import aboutIllustration from "@/assets/about-illustration.jpg";

// Counter Component with enhanced animation
const Counter = ({ end, suffix = "", prefix = "", duration = 2 }: { end: number; suffix?: string; prefix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

// Floating Icon Component
const FloatingElement = ({ children, delay = 0, duration = 3 }: { children: React.ReactNode; delay?: number; duration?: number }) => (
  <motion.div
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const services = [
  { icon: Globe, title: "Web3", description: "Investing in the decentralized web infrastructure and applications.", href: "/services#web3", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: LinkIcon, title: "Blockchain", description: "Supporting innovative blockchain solutions for transparency and security.", href: "/services#blockchain", color: "from-purple-500/20 to-pink-500/20" },
  { icon: Brain, title: "AI", description: "Strategic investments in AI infrastructure driving innovation.", href: "/services#ai", color: "from-emerald-500/20 to-teal-500/20" },
  { icon: TrendingUp, title: "Stock Market", description: "Strategic investments in public markets with emerging tech focus.", href: "/services#stock", color: "from-orange-500/20 to-amber-500/20" },
  { icon: Rocket, title: "IPOs", description: "Capital and guidance for companies entering public markets.", href: "/services#ipos", color: "from-red-500/20 to-rose-500/20" },
  { icon: Building2, title: "Real Estate", description: "High-value assets and strategically located developments.", href: "/real-estate", color: "from-indigo-500/20 to-violet-500/20" },
];

const stats = [
  { value: 50, suffix: "+", label: "Portfolio Companies", icon: Target },
  { value: 100, suffix: "M+", label: "Assets Under Management", prefix: "$", icon: TrendingUp },
  { value: 10, suffix: "+", label: "Years Experience", icon: Shield },
];

const whyChooseUs = [
  { icon: Zap, title: "Strategic Partnership", description: "We don't just invest money — we partner with you for strategy, mentorship, and long-term growth." },
  { icon: Rocket, title: "Fast & Flexible Funding", description: "Fast, flexible funding plus a strong network of founders, experts, and investors to scale your business." },
  { icon: Shield, title: "Risk Management", description: "Comprehensive risk assessment and management strategies to protect and grow your investments." },
  { icon: Target, title: "Market Expertise", description: "Deep understanding of emerging markets and technologies to identify the best opportunities." },
];

const Index = () => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const whyUsRef = useRef(null);
  const whyUsInView = useInView(whyUsRef, { once: true, margin: "-100px" });
  const ctaRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });
  
  const ctaY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <PageTransition>
      <Layout>
        {/* Hero Section */}
        <Hero />

        {/* About Preview Section */}
        <section ref={aboutRef} className="py-24 section-deep relative overflow-hidden">
          {/* Background Decorations */}
          <motion.div
            className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <motion.span 
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wider uppercase bg-primary/10 px-4 py-2 rounded-full"
                  initial={{ opacity: 0, y: -20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  <motion.span
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Who We Are
                </motion.span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-6 mb-6">
                  GS Capital | <span className="text-gradient-gold">Venture Capitalists</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Investing in the Future of Blockchain, Equities, and Real Estate.
                  GS Capital is a hybrid venture ecosystem built to fund, partner
                  with, and scale businesses that shape the future.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From Web3 breakthroughs to AI infrastructure, we back what's bold.
                  We're not just investors — we're builders, collaborators, and
                  visionaries.
                </p>

                {/* Stats with icons */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="text-center lg:text-left group"
                    >
                      <motion.div 
                        className="flex items-center gap-2 justify-center lg:justify-start mb-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <stat.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold font-heading text-primary">
                          <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
                        </div>
                      </motion.div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" size="lg" asChild className="group">
                    <Link to="/about">
                      Learn More About Us
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right: Illustration with enhanced effects */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden group">
                  <motion.img
                    src={aboutIllustration}
                    alt="Investment Growth"
                    className="w-full h-auto rounded-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  
                  {/* Overlay glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                
                {/* Floating decorative elements */}
                <FloatingElement delay={0}>
                  <motion.div 
                    className="absolute -top-6 -right-6 w-28 h-28 border-2 border-primary/30 rounded-2xl"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                </FloatingElement>
                <FloatingElement delay={1}>
                  <motion.div 
                    className="absolute -bottom-6 -left-6 w-36 h-36 bg-primary/10 rounded-2xl"
                    animate={{ rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </FloatingElement>
                
                {/* Floating badge */}
                <motion.div
                  className="absolute -right-4 top-1/2 -translate-y-1/2 glass-card p-4 hidden lg:block"
                  initial={{ opacity: 0, x: 20 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 rounded-full border-2 border-dashed border-primary/50 flex items-center justify-center"
                  >
                    <Zap className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section ref={servicesRef} className="py-24 section-dark relative overflow-hidden">
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <motion.span 
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wider uppercase bg-primary/10 px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                What We Do
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-6">
                Sectors We <span className="text-gradient-gold">Invest In</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <Link to={service.href}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="glass-card p-8 h-full group relative overflow-hidden"
                    >
                      {/* Gradient background on hover */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />
                      
                      {/* Icon with animated background */}
                      <motion.div 
                        className="relative z-10 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <service.icon className="w-8 h-8 text-primary" />
                        <motion.div
                          className="absolute inset-0 rounded-xl border border-primary/30"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      <h3 className="relative z-10 text-xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="relative z-10 text-muted-foreground">{service.description}</p>
                      
                      {/* Arrow indicator */}
                      <motion.div
                        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </motion.div>
                      
                      {/* Decorative corner */}
                      <motion.div
                        className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <AnimatedSection delay={0.4} className="text-center mt-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">
                    View All Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* YouTube Showcase Section */}
        <YouTubeShowcase />

        {/* Why Choose Us - Enhanced */}
        <section ref={whyUsRef} className="py-24 section-deep relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <motion.span 
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wider uppercase bg-primary/10 px-4 py-2 rounded-full"
              >
                Our Advantage
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-6">
                Why Clients <span className="text-gradient-gold">Choose Us</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-8 group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="relative z-10 flex items-start gap-5">
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 10 }}
                    >
                      <item.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section ref={ctaRef} className="py-24 section-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
          
          {/* Animated orbs */}
          <motion.div
            className="absolute top-10 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          <motion.div 
            style={{ y: ctaY }}
            className="relative container mx-auto px-4 lg:px-8 text-center"
          >
            <AnimatedSection>
              <motion.div
                className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Ready to Start?</span>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                Ready to <span className="text-gradient-gold">Shape the Future</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Whether you're a startup looking for capital or an investor seeking opportunities,
                GS Capital is your trusted partner for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">
                      Schedule a Meeting
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/about">Learn More</Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </motion.div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default Index;

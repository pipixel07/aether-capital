import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Globe, Link as LinkIcon, Brain, TrendingUp, Rocket, Building2,
  ArrowRight, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import aboutIllustration from "@/assets/about-illustration.jpg";

// Counter Component
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

const services = [
  { icon: Globe, title: "Web3", description: "Investing in the decentralized web infrastructure and applications.", href: "/services#web3" },
  { icon: LinkIcon, title: "Blockchain", description: "Supporting innovative blockchain solutions for transparency and security.", href: "/services#blockchain" },
  { icon: Brain, title: "AI", description: "Strategic investments in AI infrastructure driving innovation.", href: "/services#ai" },
  { icon: TrendingUp, title: "Stock Market", description: "Strategic investments in public markets with emerging tech focus.", href: "/services#stock" },
  { icon: Rocket, title: "IPOs", description: "Capital and guidance for companies entering public markets.", href: "/services#ipos" },
  { icon: Building2, title: "Real Estate", description: "High-value assets and strategically located developments.", href: "/real-estate" },
];

const stats = [
  { value: 50, suffix: "+", label: "Portfolio Companies" },
  { value: 100, suffix: "M+", label: "Assets Under Management", prefix: "$" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

const Index = () => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section ref={aboutRef} className="py-24 section-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-4 mb-6">
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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="text-2xl md:text-3xl font-bold font-heading text-primary mb-1">
                      <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
                    </div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Right: Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <motion.img
                  src={aboutIllustration}
                  alt="Investment Growth"
                  className="w-full h-auto rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section ref={servicesRef} className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-4">
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
                    whileHover={{ y: -8 }}
                    className="glass-card p-8 h-full group relative overflow-hidden"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <motion.div 
                      className="relative z-10 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <service.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="relative z-10 text-xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="relative z-10 text-muted-foreground">{service.description}</p>
                    <motion.div
                      className="absolute bottom-0 right-0 w-20 h-20 bg-primary/5 rounded-tl-full"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 section-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Our Advantage
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-4">
              Why Clients <span className="text-gradient-gold">Choose Us</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1} direction="left">
              <div className="glass-card p-8 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading mb-2">Strategic Partnership</h3>
                    <p className="text-muted-foreground">
                      We don't just invest money — we partner with you for strategy,
                      mentorship, and long-term growth.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="glass-card p-8 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading mb-2">Fast & Flexible Funding</h3>
                    <p className="text-muted-foreground">
                      Fast, flexible funding plus a strong network of founders,
                      experts, and investors to scale your business.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10" />
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Ready to <span className="text-gradient-gold">Shape the Future</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Whether you're a startup looking for capital or an investor seeking opportunities,
              GS Capital is your trusted partner for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Schedule a Meeting
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Target, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef } from "react";

const highlights = [
  { icon: TrendingUp, label: "FUNDING", text: "Strategic capital for disruptive startups" },
  { icon: Users, label: "PARTNERS", text: "Building ecosystems, not just portfolios" },
  { icon: Target, label: "GROWTH", text: "Strategic scaling for market leadership" },
  { icon: Eye, label: "VISION", text: "Future-focused investment strategy" },
];

// Floating shapes for background
const FloatingShape = ({ delay, duration, className }: { delay: number; duration: number; className: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          y 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            y: [0, -40, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Geometric Shapes */}
        <FloatingShape
          delay={0}
          duration={6}
          className="top-1/5 right-1/4 w-4 h-4 border-2 border-primary/40 rotate-45"
        />
        <FloatingShape
          delay={1}
          duration={8}
          className="top-1/3 left-1/5 w-6 h-6 border-2 border-primary/30 rounded-full"
        />
        <FloatingShape
          delay={2}
          duration={7}
          className="bottom-1/3 right-1/5 w-3 h-3 bg-primary/40 rounded-full"
        />
        <FloatingShape
          delay={0.5}
          duration={9}
          className="top-2/3 left-1/3 w-5 h-5 border border-primary/20"
        />
        
        {/* Animated Lines */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
          animate={{ y: [0, 100, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-20 right-1/3 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          animate={{ y: [0, 80, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />

        {/* Animated Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative container mx-auto px-4 lg:px-8 pt-32 lg:pt-40 pb-16"
        style={{ opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full px-5 py-2.5 mb-8"
          >
            <motion.span 
              className="flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
            </motion.span>
            <span className="text-primary text-sm font-semibold tracking-wide">Venture Capitalists</span>
            <motion.span 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Headline with staggered animation */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight mb-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block"
            >
              Invest in the
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              Future of
            </motion.span>{" "}
            <motion.span 
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
              className="text-gradient-gold inline-block relative"
            >
              Real Estate
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              Across Prime Locations
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            GS Capital is a forward-thinking real estate investment ecosystem
            offering premium residential and commercial properties across
            high-growth locations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact">
                  Know More
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 60, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.7 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-6 text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              <motion.div 
                className="relative z-10 w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <item.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="relative z-10 text-sm font-bold font-heading text-primary mb-2 tracking-wider">
                {item.label}
              </h3>
              <p className="relative z-10 text-xs text-muted-foreground">{item.text}</p>
              
              {/* Corner accent */}
              <motion.div
                className="absolute bottom-0 right-0 w-16 h-16 bg-primary/5 rounded-tl-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-2">
              <motion.div 
                className="w-1.5 h-3 rounded-full bg-primary"
                animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

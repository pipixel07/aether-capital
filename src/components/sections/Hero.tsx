import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Target, Eye, Sparkles, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef, useEffect, useState } from "react";

const highlights = [
  { icon: TrendingUp, label: "FUNDING", text: "Strategic capital for disruptive startups" },
  { icon: Users, label: "PARTNERS", text: "Building ecosystems, not just portfolios" },
  { icon: Target, label: "GROWTH", text: "Strategic scaling for market leadership" },
  { icon: Eye, label: "VISION", text: "Future-focused investment strategy" },
];

// Floating icon component for background
const FloatingIcon = ({ Icon, delay, className }: { Icon: React.ElementType; delay: number; className: string }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.6, 0.3, 0.6, 0],
      scale: [0.5, 1, 1.2, 1, 0.5],
      y: [0, -50, -100, -150, -200],
      rotate: [0, 10, -10, 5, 0]
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Icon className="w-6 h-6 text-primary/40" />
  </motion.div>
);

// Morphing blob component
const MorphingBlob = ({ className, delay }: { className: string; delay: number }) => (
  <motion.div
    className={`absolute ${className} rounded-full blur-3xl`}
    animate={{
      scale: [1, 1.3, 1.1, 1.4, 1],
      x: [0, 50, -30, 40, 0],
      y: [0, -40, 30, -20, 0],
      opacity: [0.2, 0.4, 0.3, 0.5, 0.2],
    }}
    transition={{
      duration: 12,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Animated text character
const AnimatedCharacter = ({ char, index }: { char: string; index: number }) => (
  <motion.span
    initial={{ opacity: 0, y: 50, rotateX: 90 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{
      duration: 0.5,
      delay: 0.3 + index * 0.03,
      type: "spring",
      stiffness: 100,
    }}
    className="inline-block"
  >
    {char === " " ? "\u00A0" : char}
  </motion.span>
);

// Counter animation hook
const useAnimatedCounter = (end: number, duration: number = 2) => {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    const controls = animate(0, end, {
      duration,
      onUpdate: (v) => setValue(Math.floor(v)),
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [end, duration]);
  
  return value;
};

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 50);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 50);
    }
  };

  const titleText = "Invest in the Future of Real Estate";

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          y,
          scale 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </motion.div>

      {/* Morphing Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MorphingBlob 
          className="top-1/4 left-1/6 w-[500px] h-[500px] bg-primary/25" 
          delay={0} 
        />
        <MorphingBlob 
          className="bottom-1/4 right-1/6 w-[400px] h-[400px] bg-primary/20" 
          delay={2} 
        />
        <MorphingBlob 
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15" 
          delay={4} 
        />
        
        {/* Floating Icons */}
        <FloatingIcon Icon={Zap} delay={0} className="top-1/4 left-[15%]" />
        <FloatingIcon Icon={Shield} delay={1.5} className="top-1/3 right-[20%]" />
        <FloatingIcon Icon={Globe} delay={3} className="bottom-1/3 left-[25%]" />
        <FloatingIcon Icon={TrendingUp} delay={4.5} className="bottom-1/4 right-[30%]" />
        <FloatingIcon Icon={Sparkles} delay={2} className="top-1/2 left-[10%]" />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`vline-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent"
              style={{ left: `${12.5 + i * 12.5}%` }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}
        </div>
        
        {/* Radial pulse rings */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
            animate={{
              width: [100, 600, 100],
              height: [100, 600, 100],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 6,
              delay: ring * 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Animated Particles with mouse interaction */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              x: smoothMouseX,
              y: smoothMouseY,
            }}
            animate={{
              y: [-20, -150 - Math.random() * 100],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeOut",
            }}
          />
        ))}
        
        {/* Glowing orbs that follow mouse */}
        <motion.div
          className="absolute w-40 h-40 bg-primary/30 rounded-full blur-3xl pointer-events-none"
          style={{
            x: smoothMouseX,
            y: smoothMouseY,
            left: "50%",
            top: "50%",
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative container mx-auto px-4 lg:px-8 pt-32 lg:pt-44 pb-16"
        style={{ opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8 relative overflow-hidden"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent skew-x-12"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            
            <motion.span 
              className="flex items-center justify-center w-7 h-7 bg-primary/20 rounded-full relative z-10"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.span>
            <span className="text-primary text-sm font-semibold tracking-wide relative z-10">Venture Capitalists</span>
            <motion.span 
              className="w-2 h-2 bg-primary rounded-full relative z-10"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>

          {/* Headline with character-by-character animation */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight mb-6 overflow-hidden">
            <span className="inline-block">
              {titleText.split("").map((char, index) => (
                <AnimatedCharacter key={index} char={char} index={index} />
              ))}
            </span>
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
              className="text-gradient-gold inline-block relative mt-2"
            >
              Across Prime Locations
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
              />
            </motion.span>
          </h1>

          {/* Subheadline with typewriter effect */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            GS Capital is a forward-thinking real estate investment ecosystem
            offering premium residential and commercial properties across
            high-growth locations.
          </motion.p>

          {/* CTA Buttons with enhanced hover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              {/* Button glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-lg blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"
              />
              <Button variant="hero" size="lg" className="relative text-lg px-8 py-6" asChild>
                <Link to="/contact">
                  Know More
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 backdrop-blur-sm" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlight Cards with 3D effect */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 80, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.8 + index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-6 text-center group cursor-pointer relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: "linear-gradient(90deg, transparent, transparent, hsl(var(--primary) / 0.3), transparent, transparent)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["200% 0", "-200% 0"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              
              {/* Hover gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/15 via-primary/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="relative z-10 w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 15 }}
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
                className="absolute bottom-0 right-0 w-20 h-20 bg-primary/10 rounded-tl-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <motion.span 
              className="text-xs text-muted-foreground uppercase tracking-wider"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to Explore
            </motion.span>
            <div className="relative w-7 h-12 rounded-full border-2 border-primary/40 flex items-start justify-center pt-2 overflow-hidden">
              <motion.div 
                className="w-1.5 h-4 rounded-full bg-primary"
                animate={{ 
                  y: [0, 16, 0], 
                  opacity: [1, 0.3, 1],
                  scaleY: [1, 0.6, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Glow trail */}
              <motion.div
                className="absolute top-2 w-4 h-8 bg-primary/30 rounded-full blur-md"
                animate={{ 
                  y: [0, 16, 0], 
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

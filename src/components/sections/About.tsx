import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import aboutIllustration from "@/assets/about-illustration.jpg";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", duration = 2 }: CounterProps) => {
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
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="counter-animate">
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  { value: 50, suffix: "+", label: "Portfolio Companies" },
  { value: 100, suffix: "M+", label: "Assets Under Management", prefix: "$" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 section-deep" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-4">
            GS Capital | <span className="text-gradient-gold">Venture Capitalists</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Investing in the Future of Blockchain, Equities, and Real Estate.
              GS Capital is a hybrid venture ecosystem built to fund, partner
              with, and scale businesses that shape the future.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From Web3 breakthroughs to AI infrastructure, we back what's bold.
              We're not just investors — we're builders, collaborators, and
              visionaries working alongside founders to create meaningful impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl md:text-4xl font-bold font-heading text-primary mb-2">
                    {stat.prefix}
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutIllustration}
                alt="Investment Growth"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-center mb-8">
            Why Clients Choose Us?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 card-hover">
              <p className="text-muted-foreground">
                We don't just invest money — we partner with you for strategy,
                mentorship, and long-term growth.
              </p>
            </div>
            <div className="glass-card p-6 card-hover">
              <p className="text-muted-foreground">
                Fast, flexible funding plus a strong network of founders,
                experts, and investors to scale your business.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

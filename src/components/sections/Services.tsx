import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Link,
  Brain,
  TrendingUp,
  Rocket,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web3",
    description:
      "Investing in the decentralized web infrastructure and applications that will reshape how we interact online.",
  },
  {
    icon: Link,
    title: "Blockchain",
    description:
      "Supporting innovative blockchain solutions that provide transparency, security, and novel financial systems.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Strategic investments in AI infrastructure and applications driving the next wave of technological innovation.",
  },
  {
    icon: TrendingUp,
    title: "Stock Market",
    description:
      "Strategic investments in public markets with a focus on emerging tech and sustainable growth companies.",
  },
  {
    icon: Rocket,
    title: "IPOs",
    description:
      "Providing capital and strategic guidance to companies entering public markets for maximum value creation.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Our real estate portfolio spans high-value assets, strategically located developments, and early-stage property investments.",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 section-dark" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-4">
            Sectors We <span className="text-gradient-gold">Invest In</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="glass-card p-8 card-hover group relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-bold font-heading mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative z-10 text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

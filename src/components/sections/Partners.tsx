import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "BRICKSCHAIN",
    description:
      "Brickschain is an innovative platform that transforms the way real estate investments are made. Our innovative approach allows investors to participate in real estate assets by becoming fractional owners in our extensive portfolio.",
  },
  {
    name: "IRA BLOCKS",
    description:
      "iRA Blocks is a revolutionary platform that leverages blockchain technology to transform the world of asset ownership. Through fractional tokenization, iRA Blocks enable investors to access high-value real world assets.",
  },
];

const Partners = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="py-24 section-dark" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Our Growing Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-4">
            Our <span className="text-gradient-gold">Partners</span>
          </h2>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              className="glass-card p-8 card-hover group relative"
            >
              {/* Partner Name */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold font-heading text-primary">
                  {partner.name}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {partner.description}
              </p>

              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-xl border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

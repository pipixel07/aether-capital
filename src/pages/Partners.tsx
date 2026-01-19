import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [
  {
    name: "BRICKSCHAIN",
    description: "Brickschain is an innovative platform that transforms the way real estate investments are made. Our innovative approach allows investors to participate in real estate assets by becoming fractional owners in our extensive portfolio.",
    highlights: [
      "Fractional real estate ownership",
      "Innovative investment approach",
      "Extensive property portfolio",
      "Accessible investing",
    ],
  },
  {
    name: "IRA BLOCKS",
    description: "iRA Blocks is a revolutionary platform that leverages blockchain technology to transform the world of asset ownership. Through fractional tokenization, iRA Blocks enable investors to access high-value real world assets.",
    highlights: [
      "Blockchain-powered ownership",
      "Fractional tokenization",
      "High-value asset access",
      "Revolutionary platform",
    ],
  },
];

const Partners = () => {
  return (
    <Layout>
      <PageHeader 
        title="Our Partners"
        subtitle="Building ecosystems together with industry-leading partners."
        breadcrumbs={[{ name: "Partners", href: "/partners" }]}
      />

      {/* Partners Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Growing Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-4">
              Our <span className="text-gradient-gold">Partners</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              We collaborate with innovative platforms to expand investment opportunities 
              and create value for our stakeholders.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <AnimatedSection key={partner.name} delay={index * 0.15} direction={index === 0 ? "left" : "right"}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass-card p-8 lg:p-10 h-full group relative overflow-hidden"
                >
                  {/* Background Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Header */}
                  <div className="relative z-10 flex items-center justify-between mb-6">
                    <motion.h3 
                      className="text-2xl font-bold font-heading text-primary"
                      whileHover={{ scale: 1.02 }}
                    >
                      {partner.name}
                    </motion.h3>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-muted-foreground leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  {/* Highlights */}
                  <div className="relative z-10 grid grid-cols-2 gap-3">
                    {partner.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-primary/30"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24 section-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Why Partner with <span className="text-gradient-gold">GS Capital</span>?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Shared Vision", description: "Aligned goals for sustainable growth and innovation in the investment space." },
              { title: "Strong Network", description: "Access to our extensive network of founders, experts, and investors." },
              { title: "Mutual Growth", description: "Collaborative approach that benefits all stakeholders in the ecosystem." },
            ].map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 text-center h-full"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Interested in <span className="text-gradient-gold">Partnership</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              We're always open to exploring strategic partnerships that create 
              mutual value and drive innovation.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Discuss Partnership
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, MapPin, CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "jayanti-majri",
    title: "Jayanti Majri Farm House",
    status: "Coming Soon",
    description: "Jayanti Majri Farm House is a serene countryside retreat offering a perfect blend of nature, privacy, and modern comfort, ideal for peaceful living and long-term investment. Surrounded by lush greenery, it promises a tranquil lifestyle away from city chaos.",
    features: [
      "Serene countryside location",
      "Modern comfort amenities",
      "Private & secure",
      "Long-term investment potential",
      "Lush green surroundings",
      "Tranquil lifestyle",
    ],
    type: "Residential",
  },
];

const benefits = [
  "Strategic high-growth locations",
  "Premium residential & commercial properties",
  "Strong connectivity & key amenities",
  "Future value potential",
  "Trusted real estate options",
  "Expert investment guidance",
];

const RealEstate = () => {
  return (
    <Layout>
      <PageHeader 
        title="Real Estate"
        subtitle="Premium residential and commercial properties across high-growth locations."
        breadcrumbs={[{ name: "Services", href: "/services" }, { name: "Real Estate", href: "/real-estate" }]}
      />

      {/* Intro Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you want to buy a home, invest for long-term growth, or explore new property 
                opportunities, GS Capital offers trusted real estate options across multiple locations. 
                Our portfolio includes residential and commercial projects with strong connectivity, 
                key amenities, and future value potential—helping both buyers and investors choose 
                the right property with clarity and confidence.
              </p>
            </AnimatedSection>

            {/* Benefits Grid */}
            <AnimatedSection delay={0.2}>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 section-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Featured Video
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-4">
              Our Real Estate <span className="text-gradient-gold">Projects</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="relative aspect-video rounded-2xl overflow-hidden glass-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://www.youtube.com/embed/HJBgAcRsyjg"
                  title="GS Capital Real Estate Projects"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Current Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-4">
              Featured <span className="text-gradient-gold">Properties</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {projects.map((project) => (
              <AnimatedSection key={project.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 lg:p-12"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <motion.div 
                      className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Building2 className="w-8 h-8 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold font-heading">{project.title}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                          <Calendar className="w-4 h-4" />
                          {project.status}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-deep">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Interested in Real Estate <span className="text-gradient-gold">Investment</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Connect with our team to explore premium property opportunities 
              tailored to your investment goals.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default RealEstate;

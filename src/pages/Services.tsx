import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, Link as LinkIcon, Brain, TrendingUp, Rocket, Building2,
  ArrowRight, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const services = [
  {
    id: "web3",
    icon: Globe,
    title: "Web3",
    description: "Investing in the decentralized web infrastructure and applications that will reshape how we interact online.",
    features: [
      "Decentralized Applications (dApps)",
      "DeFi Protocols",
      "NFT Platforms",
      "Web3 Infrastructure",
    ],
  },
  {
    id: "blockchain",
    icon: LinkIcon,
    title: "Blockchain",
    description: "Supporting innovative blockchain solutions that provide transparency, security, and novel financial systems.",
    features: [
      "Layer 1 & Layer 2 Solutions",
      "Smart Contract Platforms",
      "Cross-chain Technology",
      "Enterprise Blockchain",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Strategic investments in AI infrastructure and applications driving the next wave of technological innovation.",
    features: [
      "Machine Learning Platforms",
      "AI-powered SaaS",
      "Computer Vision",
      "Natural Language Processing",
    ],
  },
  {
    id: "stock",
    icon: TrendingUp,
    title: "Stock Market",
    description: "Strategic investments in public markets with a focus on emerging tech and sustainable growth companies.",
    features: [
      "Tech Growth Stocks",
      "Sustainable Companies",
      "Emerging Markets",
      "Strategic Holdings",
    ],
  },
  {
    id: "ipos",
    icon: Rocket,
    title: "IPOs",
    description: "Providing capital and strategic guidance to companies entering public markets for maximum value creation.",
    features: [
      "Pre-IPO Investments",
      "Public Market Strategy",
      "Valuation Advisory",
      "Post-IPO Support",
    ],
  },
  {
    id: "real-estate",
    icon: Building2,
    title: "Real Estate",
    description: "Our real estate portfolio spans high-value assets, strategically located developments, and early-stage property investments.",
    features: [
      "Premium Residential",
      "Commercial Properties",
      "Strategic Locations",
      "Long-term Value",
    ],
    link: "/real-estate",
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      <PageHeader 
        title="Our Services"
        subtitle="Explore the sectors where we invest and partner with visionary founders."
        breadcrumbs={[{ name: "Services", href: "/services" }]}
      />

      {/* Services List */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h2 className="text-3xl font-bold font-heading mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {service.link && (
                    <Button variant="outline" asChild>
                      <Link to={service.link}>
                        Explore {service.title}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                </div>

                {/* Card */}
                <motion.div 
                  className={`glass-card p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-24 h-24 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-8"
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(212, 160, 23, 0.3)",
                          "0 0 0 20px rgba(212, 160, 23, 0)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <service.icon className="w-12 h-12 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-bold font-heading text-center text-gradient-gold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-center text-muted-foreground">
                      Innovative solutions for the future
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-deep">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Have a Project in <span className="text-gradient-gold">Mind</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              We're always looking for innovative ideas and ambitious founders. 
              Let's discuss how we can help you grow.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

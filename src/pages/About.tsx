import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Target, Eye, Lightbulb, Users, ArrowRight, CheckCircle2,
  Send, Handshake, TrendingUp, Rocket
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower ambitious entrepreneurs with the capital, clarity, and strategic support they need to build sustainable and scalable businesses. We exist to bridge the gap between strong ideas and real-world execution.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To create a modern, founder-friendly venture ecosystem where access to growth opportunities is not limited by background, location, or network. We aspire to be the most trusted partner for entrepreneurs.",
  },
];

const howWeWork = [
  { step: 1, icon: Send, title: "Submit Your Project", description: "Share your business idea and vision with our team." },
  { step: 2, icon: Lightbulb, title: "Strategic Evaluation", description: "Our experts analyze your proposal and growth potential." },
  { step: 3, icon: Handshake, title: "Partnership Offer", description: "Receive a tailored partnership and funding proposal." },
  { step: 4, icon: Rocket, title: "Accelerate & Scale", description: "Grow with our capital, mentorship, and network." },
];

const About = () => {
  const approachRef = useRef(null);
  const approachInView = useInView(approachRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      <PageHeader 
        title="About Us"
        subtitle="A modern venture ecosystem dedicated to empowering entrepreneurs, innovators, and businesses."
        breadcrumbs={[{ name: "About Us", href: "/about" }]}
      />

      {/* Our Approach Section */}
      <section ref={approachRef} className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mt-4 mb-8">
                Our Approach to <span className="text-gradient-gold">Growth</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                GS Capital is a modern venture ecosystem dedicated to empowering entrepreneurs, 
                innovators, and businesses with the capital, clarity, and support they need to grow. 
                We go beyond the role of a traditional investor by combining funding with strategic 
                guidance, practical mentorship, and long-term partnership.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We were built on a belief that founders deserve more than just money. Many entrepreneurs 
                struggle not because their ideas are weak, but because they lack access to smart capital, 
                the right mentors, and a trusted network. GS Capital exists to bridge these gaps.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our approach is transparent, collaborative and growth-focused. We prefer to act as partners, 
                not just financiers—supporting businesses in key areas such as planning, strategy, branding, 
                risk management and expansion.
              </p>
            </AnimatedSection>

            {/* Key Points */}
            <AnimatedSection delay={0.4}>
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {[
                  "Strategic capital for disruptive startups",
                  "Long-term partnership approach",
                  "Building ecosystems, not just portfolios",
                  "Transparent & collaborative processes",
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    animate={approachInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 section-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-4">
              Our <span className="text-gradient-gold">Purpose</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.15} direction={index === 0 ? "left" : "right"}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 h-full"
                >
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <value.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-heading mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-4">
              How We <span className="text-gradient-gold">Work</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howWeWork.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass-card p-6 text-center h-full relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>

                  <motion.div 
                    className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-bold font-heading mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
              Ready to <span className="text-gradient-gold">Partner</span> with Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Whether you're just starting out or preparing for your next big leap, 
              we stand beside you as a committed ally in your journey.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;

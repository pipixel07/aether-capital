import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const RealEstate = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-deep" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Featured Project
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-4 mb-6">
            Our Real Estate <span className="text-gradient-gold">Project</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you want to buy a home, invest for long-term growth, or
            explore new property opportunities, GS Capital offers trusted real
            estate options across multiple locations. Our portfolio includes
            residential and commercial projects with strong connectivity, key
            amenities, and future value potential.
          </p>
        </motion.div>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden glass-card group">
            <iframe
              src="https://www.youtube.com/embed/HJBgAcRsyjg"
              title="GS Capital Real Estate Projects"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealEstate;

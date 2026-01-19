import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="relative mb-8"
          >
            <motion.h1
              className="text-[150px] md:text-[200px] font-bold font-heading text-primary/10 select-none"
              animate={{ 
                textShadow: [
                  "0 0 20px hsl(var(--primary) / 0.1)",
                  "0 0 40px hsl(var(--primary) / 0.2)",
                  "0 0 20px hsl(var(--primary) / 0.1)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              404
            </motion.h1>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="glass-card px-8 py-4">
                <Search className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-lg font-semibold">Page Not Found</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Oops! Lost in the <span className="text-gradient-gold">Investment Universe</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-16"
          >
            <p className="text-sm text-muted-foreground mb-4">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Real Estate", href: "/real-estate" },
                { name: "Partners", href: "/partners" },
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-sm text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { name: string; href: string }[];
}

const PageHeader = ({ title, subtitle, breadcrumbs }: PageHeaderProps) => {
  return (
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Title First */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4"
        >
          <span className="text-gradient-gold">{title}</span>
        </motion.h1>

        {/* Breadcrumbs - Clean inline style */}
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-4"
          >
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.name} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-primary font-semibold">{crumb.name}</span>
                ) : (
                  <Link to={crumb.href} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                    {crumb.name}
                  </Link>
                )}
              </div>
            ))}
          </motion.nav>
        )}

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;

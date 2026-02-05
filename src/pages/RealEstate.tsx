 import { useState } from "react";
 import Layout from "@/components/layout/Layout";
 import PageHeader from "@/components/ui/PageHeader";
 import AnimatedSection from "@/components/ui/AnimatedSection";
 import { motion } from "framer-motion";
 import { Link } from "react-router-dom";
 import { 
   MapPin, 
   CheckCircle2, 
   ArrowRight, 
   Home, 
   Globe, 
   Clock,
   Sparkles
 } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 
 // Property images - using dynamic imports for cleaner code
 import harmonyGreens from "@/assets/properties/harmony-greens-1.jpeg";
 import amariVintage from "@/assets/properties/amari-1.png";
 import farmhouse from "@/assets/properties/farmhouse-3.jpeg";
 
 const domesticProperties = [
   {
     id: "harmony-greens",
     title: "Harmony Greens",
     tagline: "3, 3+1, 5, 5+1 BHK Independent Luxury Floors with Lift",
     location: "Sector-5, Sanauli Road, Zirakpur",
     status: "Now Booking",
     image: harmonyGreens,
     highlights: ["Gated Community", "European Architecture", "24x7 Power Backup"],
     comingSoon: false,
     link: "/real-estate/harmony-greens",
   },
   {
     id: "amari-vintage-arch",
     title: "Amari Vintage Arch",
     tagline: "Boutique 3BHK Low-Rise Residences (2240 sq.ft.)",
     location: "IT City, Airport Road, Mohali",
     status: "Coming Soon",
     image: amariVintage,
     highlights: ["RERA Approved", "SBI Approved", "5 Mins from Airport"],
     comingSoon: true,
     link: "/real-estate/amari-vintage-arch",
   },
   {
     id: "luxury-farmhouse",
     title: "Luxury Farmhouse",
     tagline: "Jayanti Majri - Serene Countryside Retreat",
     location: "Jayanti Majri",
     status: "Coming Soon",
     image: farmhouse,
     highlights: ["Private & Secure", "Lush Green Surroundings", "Long-term Investment"],
     comingSoon: true,
     link: "/real-estate/luxury-farmhouse",
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
 
 const PropertyCard = ({ property }: { property: typeof domesticProperties[0] }) => {
   return (
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5 }}
       whileHover={{ y: -8 }}
       className="relative glass-card overflow-hidden group"
     >
       {/* Coming Soon Badge */}
       {property.comingSoon && (
         <div className="absolute top-4 right-4 z-10">
           <motion.div
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             className="flex items-center gap-1.5 bg-amber-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold"
           >
             <Clock className="w-3 h-3" />
             Coming Soon
           </motion.div>
         </div>
       )}
 
       {/* Image */}
       <div className="relative aspect-[16/10] overflow-hidden">
         <img
           src={property.image}
           alt={property.title}
           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
         
         {/* Status Badge */}
         {!property.comingSoon && (
           <div className="absolute bottom-4 left-4">
             <motion.div
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="flex items-center gap-1.5 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold"
             >
               <Sparkles className="w-3 h-3" />
               {property.status}
             </motion.div>
           </div>
         )}
       </div>
 
       {/* Content */}
       <div className="p-6">
         <h3 className="text-xl md:text-2xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
           {property.title}
         </h3>
         <p className="text-primary text-sm font-medium mb-3">{property.tagline}</p>
         <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
           <MapPin className="w-4 h-4 shrink-0" />
           <span>{property.location}</span>
         </div>
 
         {/* Highlights */}
         <div className="flex flex-wrap gap-2 mb-6">
           {property.highlights.map((highlight) => (
             <span
               key={highlight}
               className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
             >
               {highlight}
             </span>
           ))}
         </div>
 
         {/* CTA */}
         {property.comingSoon ? (
           <Button variant="outline" className="w-full" disabled>
             <Clock className="w-4 h-4 mr-2" />
             Coming Soon
           </Button>
         ) : (
           <Button variant="hero" className="w-full" asChild>
             <Link to={property.link}>
               View Details
               <ArrowRight className="w-4 h-4 ml-2" />
             </Link>
           </Button>
         )}
       </div>
     </motion.div>
   );
 };
 
 const RealEstate = () => {
   const [activeTab, setActiveTab] = useState("domestic");
 
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
 
       {/* Properties Section with Tabs */}
       <section className="py-24 section-deep">
         <div className="container mx-auto px-4 lg:px-8">
           <AnimatedSection className="text-center mb-12">
             <span className="text-primary text-sm font-semibold tracking-wider uppercase">
               Our Portfolio
             </span>
             <h2 className="text-3xl md:text-4xl font-bold font-heading mt-4 mb-8">
               Explore <span className="text-gradient-gold">Properties</span>
             </h2>
 
             {/* Tabs */}
             <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
               <TabsList className="inline-flex h-auto p-1.5 bg-card/50 backdrop-blur border border-border/50 rounded-full mb-12">
                 <TabsTrigger 
                   value="domestic"
                   className="flex items-center gap-2 px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                 >
                   <Home className="w-4 h-4" />
                   Domestic
                 </TabsTrigger>
                 <TabsTrigger 
                   value="international"
                   className="flex items-center gap-2 px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                 >
                   <Globe className="w-4 h-4" />
                   International
                 </TabsTrigger>
               </TabsList>
 
               <TabsContent value="domestic" className="mt-0">
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {domesticProperties.map((property) => (
                     <PropertyCard key={property.id} property={property} />
                   ))}
                 </div>
               </TabsContent>
 
               <TabsContent value="international" className="mt-0">
                 <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="max-w-2xl mx-auto text-center py-20"
                 >
                   <motion.div
                     animate={{ 
                       y: [0, -10, 0],
                       rotate: [0, 5, -5, 0]
                     }}
                     transition={{ 
                       duration: 4,
                       repeat: Infinity,
                       ease: "easeInOut"
                     }}
                     className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center"
                   >
                     <Globe className="w-12 h-12 text-primary" />
                   </motion.div>
                   <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                     International Properties
                   </h3>
                   <p className="text-lg text-muted-foreground mb-6">
                     Exciting international real estate opportunities coming soon. 
                     Stay tuned for premium global investment options.
                   </p>
                   <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold">
                     <Clock className="w-5 h-5" />
                     Coming Soon
                   </div>
                 </motion.div>
               </TabsContent>
             </Tabs>
           </AnimatedSection>
         </div>
       </section>
 
       {/* Video Section */}
       <section className="py-24 section-dark">
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

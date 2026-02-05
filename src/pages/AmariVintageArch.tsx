 import { useState } from "react";
 import Layout from "@/components/layout/Layout";
 import PageHeader from "@/components/ui/PageHeader";
 import AnimatedSection from "@/components/ui/AnimatedSection";
 import ImageLightbox from "@/components/ui/ImageLightbox";
 import { motion } from "framer-motion";
 import { Link } from "react-router-dom";
 import { 
   MapPin, 
   CheckCircle2, 
   ArrowRight, 
   Phone,
   Clock,
   Plane,
   Building,
   Shield,
   Home,
   Ruler,
   ZoomIn,
   Sparkles
 } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
 } from "@/components/ui/carousel";
 
 // Property images
 import amari1 from "@/assets/properties/amari-1.png";
 import amari2 from "@/assets/properties/amari-2.png";
 
 const galleryImages = [
   { src: amari1, alt: "Amari Vintage Arch - Exterior View" },
   { src: amari2, alt: "Amari Vintage Arch - Building View" },
 ];
 
 const highlights = [
   { icon: Building, text: "European-Inspired Architecture" },
   { icon: Shield, text: "Low-Density, High-Privacy Living" },
   { icon: Home, text: "Exclusive Clubhouse & Lifestyle Spaces" },
   { icon: Plane, text: "5 Mins from International Airport" },
   { icon: Ruler, text: "Spacious Layouts (2240 sq.ft.)" },
   { icon: Home, text: "Grand Balconies & Elegant Design" },
   { icon: CheckCircle2, text: "RERA Approved" },
   { icon: CheckCircle2, text: "SBI Approved" },
   { icon: Building, text: "Construction in Full Swing" },
   { icon: MapPin, text: "Bang On PR9 200 feet Road" },
 ];
 
 const AmariVintageArch = () => {
   const [lightboxOpen, setLightboxOpen] = useState(false);
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
   const openLightbox = (index: number) => {
     setCurrentImageIndex(index);
     setLightboxOpen(true);
   };
 
   const closeLightbox = () => setLightboxOpen(false);
 
   const goToPrevious = () => {
     setCurrentImageIndex((prev) => 
       prev === 0 ? galleryImages.length - 1 : prev - 1
     );
   };
 
   const goToNext = () => {
     setCurrentImageIndex((prev) => 
       prev === galleryImages.length - 1 ? 0 : prev + 1
     );
   };
 
   return (
     <Layout>
       <PageHeader 
         title="Amari Vintage Arch"
         subtitle="Where Architecture Becomes Art. And Living Becomes Legacy."
         breadcrumbs={[
           { name: "Real Estate", href: "/real-estate" }, 
           { name: "Amari Vintage Arch", href: "/real-estate/amari-vintage-arch" }
         ]}
       />
 
       {/* Coming Soon Banner */}
       <section className="py-8 bg-primary/10 border-y border-primary/20">
         <div className="container mx-auto px-4 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="flex items-center justify-center gap-3"
           >
             <Clock className="w-5 h-5 text-primary" />
             <span className="text-primary font-semibold">Coming Soon - Now Booking | Limited Residences Only</span>
           </motion.div>
         </div>
       </section>
 
       {/* Hero Section */}
       <section className="py-16 section-dark">
         <div className="container mx-auto px-4 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Image Gallery */}
             <AnimatedSection>
               <Carousel className="w-full" opts={{ loop: true }}>
                 <CarouselContent>
                   {galleryImages.map((image, index) => (
                     <CarouselItem key={index}>
                       <motion.div
                         whileHover={{ scale: 1.02 }}
                         className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card cursor-pointer group"
                         onClick={() => openLightbox(index)}
                       >
                         <img
                           src={image.src}
                           alt={image.alt}
                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                         />
                         <motion.div
                           className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                         >
                           <div className="flex items-center gap-2 text-primary font-medium">
                             <ZoomIn className="w-5 h-5" />
                             <span>View Full Image</span>
                           </div>
                         </motion.div>
                       </motion.div>
                     </CarouselItem>
                   ))}
                 </CarouselContent>
                 <CarouselPrevious className="left-4 bg-card/80 backdrop-blur border-border/50 hover:bg-primary/20" />
                 <CarouselNext className="right-4 bg-card/80 backdrop-blur border-border/50 hover:bg-primary/20" />
               </Carousel>
             </AnimatedSection>
 
             {/* Info */}
             <AnimatedSection delay={0.2}>
               <div className="space-y-6">
                 <div>
                   <motion.span 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-4"
                   >
                     <Clock className="w-4 h-4" />
                     Coming Soon
                   </motion.span>
                   <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                     Boutique 3BHK <span className="text-gradient-gold">Low-Rise Residences</span>
                   </h2>
                   <p className="text-lg text-muted-foreground italic">
                     "When towers chase height — Amari chases perfection. Because true luxury isn't tall… it's Timeless. Elegant. Rare."
                   </p>
                 </div>
 
                 <div className="flex items-start gap-3 text-muted-foreground">
                   <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                   <div>
                     <p className="text-foreground font-medium">IT City, Airport Road, Mohali</p>
                     <p className="text-sm">Bang On PR9 200 feet Road</p>
                   </div>
                 </div>
 
                 {/* Price Highlight */}
                 <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30"
                 >
                   <div className="flex items-center gap-3 mb-2">
                     <Sparkles className="w-6 h-6 text-primary" />
                     <span className="text-muted-foreground">New Investment Opportunity</span>
                   </div>
                   <p className="text-2xl font-bold text-foreground">
                     Book your dream home in Just <span className="text-primary">40L</span>
                   </p>
                   <p className="text-sm text-muted-foreground mt-2">2240 sq.ft. boutique residences</p>
                 </motion.div>
 
                 {/* CTA */}
                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
                   <Button variant="hero" size="lg" asChild>
                     <Link to="/contact">
                       Register Interest
                       <ArrowRight className="w-4 h-4 ml-2" />
                     </Link>
                   </Button>
                   <Button variant="outline" size="lg" asChild>
                     <a href="tel:+919875959231">
                       <Phone className="w-4 h-4 mr-2" />
                       Call: 9875959231
                     </a>
                   </Button>
                 </div>
               </div>
             </AnimatedSection>
           </div>
         </div>
       </section>
 
       {/* Highlights Section */}
       <section className="py-24 section-deep">
         <div className="container mx-auto px-4 lg:px-8">
           <AnimatedSection className="text-center mb-16">
             <span className="text-primary text-sm font-semibold tracking-wider uppercase">
               Project Highlights
             </span>
             <h2 className="text-3xl md:text-4xl font-bold font-heading mt-4">
               Not just a home, <span className="text-gradient-gold">a legacy</span>
             </h2>
           </AnimatedSection>
 
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
             {highlights.map((item, index) => (
               <motion.div
                 key={item.text}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: index * 0.05 }}
                 whileHover={{ scale: 1.03, y: -5 }}
                 className="flex items-center gap-4 p-5 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all"
               >
                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                   <item.icon className="w-6 h-6 text-primary" />
                 </div>
                 <span className="text-foreground font-medium">{item.text}</span>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* CTA Section */}
       <section className="py-24 section-dark">
         <div className="container mx-auto px-4 lg:px-8 text-center">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
               Interested in <span className="text-gradient-gold">Amari Vintage Arch</span>?
             </h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
               Register your interest now for exclusive updates and early booking opportunities.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button variant="hero" size="lg" asChild>
                 <Link to="/contact">
                   Register Interest
                   <ArrowRight className="ml-2 w-4 h-4" />
                 </Link>
               </Button>
               <Button variant="outline" size="lg" asChild>
                 <Link to="/real-estate">
                   View All Properties
                 </Link>
               </Button>
             </div>
           </AnimatedSection>
         </div>
       </section>
 
       {/* Lightbox */}
       <ImageLightbox
         images={galleryImages}
         currentIndex={currentImageIndex}
         isOpen={lightboxOpen}
         onClose={closeLightbox}
         onPrev={goToPrevious}
         onNext={goToNext}
       />
     </Layout>
   );
 };
 
 export default AmariVintageArch;
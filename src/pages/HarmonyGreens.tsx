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
   Building,
   Shield,
   Zap,
   Trees,
   Car,
   Dumbbell,
   Home,
   Ruler,
   ZoomIn
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
 import harmonyGreens1 from "@/assets/properties/harmony-greens-1.jpeg";
 import harmonyGreens2 from "@/assets/properties/harmony-greens-2.png";
 
 const galleryImages = [
   { src: harmonyGreens1, alt: "Harmony Greens - Main Entrance" },
   { src: harmonyGreens2, alt: "Harmony Greens - Building View" },
 ];
 
 const features = [
   { icon: Building, text: "Quality Construction" },
   { icon: Shield, text: "Gated Residential Project with Multi Tier Security" },
   { icon: Ruler, text: "Low Rise Stilt+4 concept (both side open) 12 to 24 feet Gap between all blocks" },
   { icon: Car, text: "Proposed connectivity to PR-7, Airport Road" },
   { icon: Phone, text: "E-Intercom" },
   { icon: Dumbbell, text: "Free Club House" },
   { icon: Car, text: "Well covered stilt Parking with Matt Finish Tiles" },
   { icon: Zap, text: "Power Backup 24X7" },
   { icon: Shield, text: "Biometric Lock on Main Doors" },
   { icon: Dumbbell, text: "Open Gymnasium & Gazebo" },
   { icon: Home, text: "Indoor/Outdoor Games" },
   { icon: Trees, text: "Kids play area & Jogging Track" },
   { icon: Home, text: "Fully Ventilated/Well Designed Rooms" },
   { icon: Ruler, text: "6 Feet Wide Balcony" },
   { icon: Home, text: "Vaastu Friendly" },
   { icon: Shield, text: "Earthquake Resistant Structure" },
   { icon: Trees, text: "Lush Green Area" },
   { icon: Ruler, text: "Upto 64 feet Wide Internal Roads" },
   { icon: Trees, text: "Adjoining 300 acres of forest land" },
   { icon: Home, text: "Lifetime Free Meditation (B.K Meditation center)" },
   { icon: Phone, text: "24X7 Ambulance Service" },
   { icon: Trees, text: "Sand pit & Open Air Amphitheatre" },
   { icon: Trees, text: "Lush Greens Boundary & Green Dividers On Internal Roads" },
   { icon: Home, text: "False Ceiling & Modular Kitchen" },
   { icon: Home, text: "Opulent Wardrobes" },
   { icon: Home, text: "Jaquar Fitting in kitchen and washroom" },
   { icon: Building, text: "High Speed Lift" },
   { icon: Building, text: "European Architecture" },
   { icon: CheckCircle2, text: "Loan Available from leading Banks" },
 ];
 
 const unitTypes = [
   { type: "3 BHK", desc: "Independent Luxury Floor" },
   { type: "3+1 BHK", desc: "Independent Luxury Floor" },
   { type: "5 BHK", desc: "Independent Luxury Floor" },
   { type: "5+1 BHK", desc: "Independent Luxury Floor" },
 ];
 
 const HarmonyGreens = () => {
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
         title="Harmony Greens"
         subtitle="3, 3+1, 5, 5+1 BHK Independent Luxury Floors with Lift"
         breadcrumbs={[
           { name: "Real Estate", href: "/real-estate" }, 
           { name: "Harmony Greens", href: "/real-estate/harmony-greens" }
         ]}
       />
 
       {/* Hero Section */}
       <section className="py-16 section-dark">
         <div className="container mx-auto px-4 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Image Gallery */}
             <AnimatedSection>
                <Carousel className="w-full touch-pan-y" opts={{ loop: true }}>
                 <CarouselContent>
                   {galleryImages.map((image, index) => (
                     <CarouselItem key={index}>
                       <motion.div
                         whileHover={{ scale: 1.02 }}
                          className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden glass-card cursor-pointer group"
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
                  <CarouselPrevious className="left-2 sm:left-4 h-8 w-8 sm:h-10 sm:w-10 bg-card/80 backdrop-blur border-border/50 hover:bg-primary/20" />
                  <CarouselNext className="right-2 sm:right-4 h-8 w-8 sm:h-10 sm:w-10 bg-card/80 backdrop-blur border-border/50 hover:bg-primary/20" />
               </Carousel>

                {/* Thumbnails */}
                <div className="flex justify-center gap-2 mt-4 flex-wrap">
                  {galleryImages.map((image, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openLightbox(index)}
                      className="w-12 h-9 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 border-border/30 hover:border-primary/50 transition-colors"
                    >
                      <img
                        src={image.src}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
             </AnimatedSection>
 
             {/* Info */}
             <AnimatedSection delay={0.2}>
               <div className="space-y-6">
                 <div>
                   <motion.span 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-4"
                   >
                     <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                     Now Booking
                   </motion.span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4">
                      <span>Independent Luxury</span> <span className="text-gradient-gold">Floors with Lift</span>
                   </h2>
                 </div>
 
                 <div className="flex items-start gap-3 text-muted-foreground">
                   <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                   <div>
                     <p className="text-foreground font-medium">Sector-5, Sanauli Road, Zirakpur</p>
                     <p className="text-sm">Adjoining Sector 20, Panchkula</p>
                   </div>
                 </div>
 
                 {/* Unit Types */}
                 <div className="grid grid-cols-2 gap-3">
                   {unitTypes.map((unit, index) => (
                     <motion.div
                       key={unit.type}
                       initial={{ opacity: 0, scale: 0.9 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: index * 0.1 }}
                       className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-center"
                     >
                       <span className="text-xl font-bold text-primary">{unit.type}</span>
                       <p className="text-xs text-muted-foreground mt-1">{unit.desc}</p>
                     </motion.div>
                   ))}
                 </div>
 
                 {/* CTA */}
                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
                   <Button variant="hero" size="lg" asChild>
                     <Link to="/contact">
                       Book Now
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
 
                 {/* Offer Banner */}
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="p-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30"
                 >
                   <p className="text-primary font-semibold text-center">
                     🎉 Offer for Limited Units. Don't miss this opportunity!
                   </p>
                   <p className="text-sm text-muted-foreground text-center mt-1">
                     Don't Delay, Book Today !!
                   </p>
                 </motion.div>
               </div>
             </AnimatedSection>
           </div>
         </div>
       </section>
 
       {/* Features Section */}
       <section className="py-24 section-deep">
         <div className="container mx-auto px-4 lg:px-8">
           <AnimatedSection className="text-center mb-16">
             <span className="text-primary text-sm font-semibold tracking-wider uppercase">
               Unmatched Features
             </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mt-4">
               Premium <span className="text-gradient-gold">Amenities</span>
             </h2>
           </AnimatedSection>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
             {features.map((feature, index) => (
               <motion.div
                 key={feature.text}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: index * 0.03 }}
                 whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 transition-colors"
               >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                 </div>
                  <span className="text-xs sm:text-sm text-foreground leading-relaxed">{feature.text}</span>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* CTA Section */}
       <section className="py-24 section-dark">
         <div className="container mx-auto px-4 lg:px-8 text-center">
           <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-6">
               Ready to Own Your <span className="text-gradient-gold">Dream Home</span>?
             </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10">
               Connect with our team to schedule a site visit and explore this 
               premium property in person.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button variant="hero" size="lg" asChild>
                 <Link to="/contact">
                   Schedule Site Visit
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
 
 export default HarmonyGreens;
 import { useState } from "react";
 import Layout from "@/components/layout/Layout";
 import PageHeader from "@/components/ui/PageHeader";
 import AnimatedSection from "@/components/ui/AnimatedSection";
 import ImageLightbox from "@/components/ui/ImageLightbox";
 import { motion } from "framer-motion";
 import { Link } from "react-router-dom";
 import { 
   MapPin, 
   ArrowRight, 
   Phone,
   Clock,
   Trees,
   Shield,
   Home,
   Leaf,
   ZoomIn,
   Mountain
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
 import farmhouse1 from "@/assets/properties/farmhouse-1.jpeg";
 import farmhouse2 from "@/assets/properties/farmhouse-2.jpeg";
 import farmhouse3 from "@/assets/properties/farmhouse-3.jpeg";
 import farmhouse4 from "@/assets/properties/farmhouse-4.jpeg";
 import farmhouse5 from "@/assets/properties/farmhouse-5.jpeg";
 import farmhouse6 from "@/assets/properties/farmhouse-6.jpeg";
 
 const galleryImages = [
   { src: farmhouse1, alt: "Luxury Farmhouse - Grand Entrance" },
   { src: farmhouse2, alt: "Luxury Farmhouse - Interiors" },
   { src: farmhouse3, alt: "Luxury Farmhouse - Pool & Garden" },
   { src: farmhouse4, alt: "Luxury Farmhouse - Aerial View" },
   { src: farmhouse5, alt: "Luxury Farmhouse - Main Gate" },
   { src: farmhouse6, alt: "Luxury Farmhouse - Road View" },
 ];
 
 const features = [
   { icon: Trees, text: "Serene countryside location" },
   { icon: Home, text: "Modern comfort amenities" },
   { icon: Shield, text: "Private & secure gated community" },
   { icon: Leaf, text: "Long-term investment potential" },
   { icon: Trees, text: "Lush green surroundings" },
   { icon: Mountain, text: "Tranquil lifestyle away from city" },
   { icon: Home, text: "Spacious layouts & designs" },
   { icon: Shield, text: "24x7 Security" },
 ];
 
 const LuxuryFarmhouse = () => {
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
         title="Luxury Farmhouse"
         subtitle="Jayanti Majri - A Serene Countryside Retreat"
         breadcrumbs={[
           { name: "Real Estate", href: "/real-estate" }, 
           { name: "Luxury Farmhouse", href: "/real-estate/luxury-farmhouse" }
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
             <span className="text-primary font-semibold">Coming Soon - Exclusive Countryside Living</span>
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
 
               {/* Thumbnails */}
               <div className="flex justify-center gap-2 mt-4 flex-wrap">
                 {galleryImages.map((image, index) => (
                   <motion.button
                     key={index}
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={() => openLightbox(index)}
                     className="w-14 h-10 md:w-16 md:h-12 rounded-lg overflow-hidden border-2 border-border/30 hover:border-primary/50 transition-colors"
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
                     className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-4"
                   >
                     <Clock className="w-4 h-4" />
                     Coming Soon
                   </motion.span>
                   <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                     Serene Countryside <span className="text-gradient-gold">Retreat</span>
                   </h2>
                   <p className="text-lg text-muted-foreground">
                     Jayanti Majri Farm House offers a perfect blend of nature, privacy, and modern comfort, 
                     ideal for peaceful living and long-term investment. Surrounded by lush greenery, 
                     it promises a tranquil lifestyle away from city chaos.
                   </p>
                 </div>
 
                 <div className="flex items-start gap-3 text-muted-foreground">
                   <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                   <div>
                     <p className="text-foreground font-medium">Jayanti Majri</p>
                     <p className="text-sm">Premium Countryside Location</p>
                   </div>
                 </div>
 
                 {/* Features Grid */}
                 <div className="grid grid-cols-2 gap-3">
                   {features.slice(0, 4).map((feature, index) => (
                     <motion.div
                       key={feature.text}
                       initial={{ opacity: 0, x: -10 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: index * 0.1 }}
                       className="flex items-center gap-2"
                     >
                       <feature.icon className="w-4 h-4 text-primary shrink-0" />
                       <span className="text-sm text-foreground">{feature.text}</span>
                     </motion.div>
                   ))}
                 </div>
 
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
 
       {/* Features Section */}
       <section className="py-24 section-deep">
         <div className="container mx-auto px-4 lg:px-8">
           <AnimatedSection className="text-center mb-16">
             <span className="text-primary text-sm font-semibold tracking-wider uppercase">
               Project Highlights
             </span>
             <h2 className="text-3xl md:text-4xl font-bold font-heading mt-4">
               Experience <span className="text-gradient-gold">Countryside Living</span>
             </h2>
           </AnimatedSection>
 
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
             {features.map((feature, index) => (
               <motion.div
                 key={feature.text}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: index * 0.1 }}
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all text-center"
               >
                 <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                   <feature.icon className="w-7 h-7 text-primary" />
                 </div>
                 <span className="text-foreground font-medium">{feature.text}</span>
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
               Interested in <span className="text-gradient-gold">Luxury Farmhouse</span>?
             </h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
               Register your interest now for exclusive updates and early access to this 
               premium countryside retreat.
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
 
 export default LuxuryFarmhouse;
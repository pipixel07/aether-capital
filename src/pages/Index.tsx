import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import RealEstate from "@/components/sections/RealEstate";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <RealEstate />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

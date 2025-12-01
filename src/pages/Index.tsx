import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FounderCEO from "@/components/FounderCEO";
import Infrastructure from "@/components/Infrastructure";
import Faculty from "@/components/Faculty";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SecretFeature from "@/components/SecretFeature";

const Index = () => {
  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Remove any existing smooth scroll behavior
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Cleanup function to remove the style when component unmounts
      return () => {
        document.documentElement.style.scrollBehavior = '';
      };
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About id="about" />
        <FounderCEO />
        <Faculty />
        <Infrastructure />
        <div id="testimonials">
          <Testimonials />
        </div>
        <Contact id="contact" />
      </main>
      <Footer />
      <SecretFeature />
    </div>
  );
};

export default Index;
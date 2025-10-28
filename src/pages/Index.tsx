import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DirectorMessage from "@/components/DirectorMessage";
import Infrastructure from "@/components/Infrastructure";
import Faculty from "@/components/Faculty";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About id="about" />
        <DirectorMessage />
        <Infrastructure />
        <Faculty />
        <Testimonials />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

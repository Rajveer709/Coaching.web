import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Faculty from "@/components/Faculty";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Faculty />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

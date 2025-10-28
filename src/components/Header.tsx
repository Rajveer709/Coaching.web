import { Button } from "@/components/ui/button";
import upscaleLogo from "@/assets/upscale-logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <img 
              src={upscaleLogo} 
              alt="Upscale Tuition Logo" 
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("faculty")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Faculty
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border">
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("faculty")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Faculty
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Contact Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

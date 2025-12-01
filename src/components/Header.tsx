import { Button } from "@/components/ui/button";
import upscaleLogo from "@/assets/upscale-logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    } else {
      // Navigate to home page and then scroll to section
      navigate('/');
      // We'll scroll after navigation completes
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      setMobileMenuOpen(false);
    }
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Link to="/" onClick={goToTop}>
              <img 
                src={upscaleLogo} 
                alt="Upscale Tuition Logo" 
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            <Link 
              to="/"
              onClick={goToTop}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("faculty")}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Faculty
            </button>
            <Link 
              to="/courses"
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Our Courses
            </Link>
            <Link 
              to="/achievements"
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Achievements
            </Link>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 h-8 text-sm px-3"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-3 space-y-3 border-t border-border">
            <Link 
              to="/"
              onClick={() => {
                goToTop();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-1.5 text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-1.5 text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("faculty")}
              className="block w-full text-left px-3 py-1.5 text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Faculty
            </button>
            <Link 
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-3 py-1.5 text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Our Courses
            </Link>
            <Link 
              to="/achievements"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-3 py-1.5 text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Achievements
            </Link>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="w-full bg-primary hover:bg-primary/90 h-8 text-sm"
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
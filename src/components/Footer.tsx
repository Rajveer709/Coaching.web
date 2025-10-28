import upscaleLogo from "@/assets/upscale-logo.png";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img 
              src={upscaleLogo} 
              alt="Upscale Tuition Logo" 
              className="h-10 brightness-0 invert"
            />
            <p className="text-sm opacity-90">
              Connecting students to excellence through quality education and personalized learning.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#faculty" className="hover:opacity-100 transition-opacity">Our Faculty</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Courses</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Mathematics</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Science</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">English</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Computer Science</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/20 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Upscale Tuition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

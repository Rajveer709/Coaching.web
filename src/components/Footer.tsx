import { useState } from "react";
import upscaleLogo from "@/assets/upscale-logo.png";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log("Subscribed with:", email);
      setIsSubscribed(true);
      setEmail("");
      // Reset subscription status after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/50 text-secondary-foreground border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={upscaleLogo} 
                alt="Upscale Tuition Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Upscale Tuition
              </span>
            </div>
            <p className="text-base">
              Empowering students with quality education, expert guidance, and a passion for learning that lasts a lifetime.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <p>123 Education St, Learning District, 400001</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+911234567890" className="hover:underline">+91 12345 67890</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@upscaletuition.com" className="hover:underline">info@upscaletuition.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <p>Mon-Sat: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Faculty', href: '#faculty' },
                { name: 'Courses', href: '#courses' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact Us', href: '#contact' },
                { name: 'Blog', href: '#' },
                { name: 'FAQ', href: '#' },
              ].map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  <a 
                    href={item.href} 
                    className="flex items-center group-hover:text-primary transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {[
                { name: 'Mathematics', students: '250+' },
                { name: 'Physics', students: '180+' },
                { name: 'Chemistry', students: '160+' },
                { name: 'Biology', students: '140+' },
                { name: 'English', students: '200+' },
                { name: 'Computer Science', students: '120+' },
                { name: 'Competitive Exams', students: '300+' },
              ].map((course, index) => (
                <motion.li 
                  key={course.name}
                  className="flex justify-between items-center py-1.5 border-b border-border/20"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="text-sm">{course.name}</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    {course.students}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter for the latest updates, study tips, and course information.</p>
            
            {isSubscribed ? (
              <motion.div 
                className="bg-green-500/10 text-green-600 p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you for subscribing! 🎉
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="pl-10 h-12"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.span
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Subscribe
                  </motion.span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    →
                  </motion.span>
                </Button>
              </form>
            )}
            
            <div className="mt-8">
              <h5 className="font-medium mb-4">Follow Us</h5>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, name: 'Facebook', url: '#' },
                  { icon: <Twitter className="h-5 w-5" />, name: 'Twitter', url: '#' },
                  { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', url: '#' },
                  { icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn', url: '#' },
                  { icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.108 0-.612.492-1.108 1.1-1.108s1.1.496 1.1 1.108c0 .612-.494 1.108-1.1 1.108zm8 6.891h-1.996v-3.862c0-1.881-2.002-1.721-2.002 0v3.862h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>, name: 'YouTube', url: '#' },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="bg-background p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Upscale Tuition. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-muted-foreground text-center">
            <p>Made with ❤️ for quality education | Proudly serving students since {new Date().getFullYear() - 5}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import upscaleLogo from "@/assets/upscale-logo.png";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={upscaleLogo} 
                alt="Upscale Tuition Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-white">
                Upscale Tuition
              </span>
            </div>
            <p className="text-gray-300">
              Empowering students with quality education, expert guidance, and a passion for learning that lasts a lifetime.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <p className="text-gray-300">123 Education St, Learning District, 400001</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors">+91 12345 67890</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@upscaletuition.com" className="text-gray-300 hover:text-white transition-colors">info@upscaletuition.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <p className="text-gray-300">Mon-Sat: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Quick Links
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 bg-primary w-1/3"
                initial={{ width: 0 }}
                whileInView={{ width: '33%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
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
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Courses</h4>
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
                  className="flex justify-between items-center py-2 border-b border-gray-800"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="text-gray-300 text-sm">{course.name}</span>
                  <span className="text-xs bg-primary/20 text-white px-2 py-1 rounded">
                    {course.students}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Connect With Us</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Facebook className="h-6 w-6" />, name: 'Facebook', url: '#' },
                { icon: <Twitter className="h-6 w-6" />, name: 'Twitter', url: '#' },
                { icon: <Instagram className="h-6 w-6" />, name: 'Instagram', url: '#' },
                { icon: <Linkedin className="h-6 w-6" />, name: 'LinkedIn', url: '#' },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="bg-gray-900 p-3 rounded-full hover:bg-primary transition-colors"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={social.name}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
            <div className="mt-8">
              <h5 className="font-medium mb-4 text-white">Opening Hours</h5>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Sunday</span>
                  <span className="text-red-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Upscale Tuition. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

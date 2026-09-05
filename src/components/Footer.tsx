import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Upscale Academy</h3>
            <p className="text-gray-300">
              Empowering students with quality education, expert guidance, and a passion for learning that lasts a lifetime.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0 mr-2" />
                <span className="text-gray-300">Upscale Academy, 3rd floor, Samar Park, Next to Apollo DB City, Gate no. 3, Nipania</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <a href="tel:+918770696706" className="text-gray-300 hover:text-white">+91 87706 96706</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <a href="mailto:upscale.edu@gmail.com" className="text-gray-300 hover:text-white">upscale.edu@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">Mon - Sat: 10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', link: '/' },
                { name: 'About Us', link: '/#about' },
                { name: 'Our Faculty', link: '/#faculty' },
                { name: 'Courses', link: '/courses' },
                { name: 'Testimonials', link: '/#testimonials' },
                { name: 'Contact Us', link: '/#contact' }
              ].map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link 
                    to={item.link}
                    className="text-gray-300 hover:text-white transition-colors block py-1"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: <Facebook className="h-5 w-5" />, name: 'Facebook', link: 'https://www.facebook.com/share/1GkuL1yUC9/' },
                { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', link: 'https://www.instagram.com/upscaleeducation?igsh=ZzIxcmZubmxwMDd1' },
                { icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn', link: '#' }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  whileHover={{ y: -2 }}
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
            
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h5 className="font-medium text-white mb-2">Opening Hours</h5>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Saturday</span>
                  <span className="text-white">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white">12:00 PM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Upscale Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
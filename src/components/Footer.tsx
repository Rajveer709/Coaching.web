import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Upscale Tuition</h3>
            <p className="text-gray-300">
              Empowering students with quality education, expert guidance, and a passion for learning that lasts a lifetime.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0 mr-2" />
                <span className="text-gray-300">123 Education St, Learning District, 400001</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white">+91 12345 67890</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <a href="mailto:info@upscaletuition.com" className="text-gray-300 hover:text-white">info@upscaletuition.com</a>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">Mon-Sat: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                'Home',
                'About Us',
                'Our Faculty',
                'Courses',
                'Testimonials',
                'Contact Us',
                'Blog',
                'FAQ'
              ].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-300 hover:text-white transition-colors block py-1"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Courses</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Mathematics', count: '250+' },
                { name: 'Physics', count: '180+' },
                { name: 'Chemistry', count: '160+' },
                { name: 'Biology', count: '140+' },
                { name: 'English', count: '200+' },
                { name: 'Computer Science', count: '120+' },
                { name: 'Competitive Exams', count: '300+' },
              ].map((course, index) => (
                <motion.div 
                  key={course.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gray-900/50 rounded p-2"
                >
                  <div className="text-sm text-gray-300">{course.name}</div>
                  <div className="text-xs text-primary">{course.count}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: <Facebook className="h-5 w-5" />, name: 'Facebook' },
                { icon: <Twitter className="h-5 w-5" />, name: 'Twitter' },
                { icon: <Instagram className="h-5 w-5" />, name: 'Instagram' },
                { icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn' }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
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
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-red-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Upscale Tuition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

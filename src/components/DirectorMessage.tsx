import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";
import { Button } from "./ui/button";
import directorImage from "@/assets/Nidhi CEO.jpg";

const stats = [
  { icon: <GraduationCap className="h-6 w-6" />, value: "15+ Years", label: "Teaching Experience" },
  { icon: <Award className="h-6 w-6" />, value: "500+", label: "Students Mentored" },
  { icon: <BookOpen className="h-6 w-6" />, value: "10+", label: "Research Papers" },
  { icon: <Users className="h-6 w-6" />, value: "100%", label: "Student Satisfaction" },
];

const DirectorMessage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-full aspect-square bg-primary/10 rounded-2xl overflow-hidden">
                <img 
                  src={directorImage} 
                  alt="Dr. Rajesh Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-xl shadow-lg border">
                <div className="text-center">
                  <h4 className="font-bold">Dr. Rajesh Kumar</h4>
                  <p className="text-sm text-muted-foreground">Founder & Director</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-2/3 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
              Director's Message
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Empowering Students to Achieve <span className="text-primary">Academic Excellence</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to Upscale Academy, where we believe in nurturing young minds and helping them reach their full potential. 
                With over 15 years of experience in education, I've dedicated my career to creating an environment that fosters 
                learning, critical thinking, and personal growth.
              </p>
              <p>
                Our team of expert educators is committed to providing personalized attention and guidance to each student, 
                ensuring they not only excel academically but also develop the skills and confidence needed for lifelong success.
              </p>
              <p>
                At Upscale, we don't just teach subjects - we inspire a love for learning that lasts a lifetime.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-background p-4 rounded-lg border text-center"
                  whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                    {stat.icon}
                  </div>
                  <h4 className="text-xl font-bold">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="mt-6 text-lg h-12 px-6">
                Book a Free Counseling Session
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
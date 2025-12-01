import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";
import { Button } from "./ui/button";
import ceoImage from "@/assets/Nidhi CEO.jpg";

const stats = [
  { icon: <GraduationCap className="h-6 w-6" />, value: "15+ Years", label: "Teaching Experience" },
  { icon: <Award className="h-6 w-6" />, value: "500+", label: "Students Mentored" },
  { icon: <BookOpen className="h-6 w-6" />, value: "10+", label: "Research Papers" },
  { icon: <Users className="h-6 w-6" />, value: "100%", label: "Student Satisfaction" },
];

const FounderCEO = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-full aspect-square bg-primary/10 rounded-2xl overflow-hidden ring-4 ring-primary/20">
                <img 
                  src={ceoImage} 
                  alt="Dr. Nidhi Shukla" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-xl shadow-lg border">
                <div className="text-center">
                  <h4 className="font-bold">Dr. Nidhi Shukla</h4>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-3/5 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
              Founder's Message
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Transforming Education Through <span className="text-primary">Innovation & Excellence</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                As the founder and CEO of Upscale Tuition, I envisioned an institution where every student receives personalized attention 
                and the highest quality education. With over 15 years of experience in transforming young minds, I've built a team 
                of exceptional educators who share this vision.
              </p>
              <p>
                Our approach goes beyond traditional teaching methods. We focus on nurturing critical thinking, creativity, and 
                problem-solving skills that prepare our students not just for exams, but for life's challenges.
              </p>
              <p>
                At Upscale, we don't just teach subjects - we shape futures. Every student who walks through our doors becomes 
                part of our extended family, and we're committed to helping them achieve their dreams.
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
                Book a Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderCEO;
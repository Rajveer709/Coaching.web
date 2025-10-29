import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import upscaleLogo from "@/assets/upscale-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      {/* Enhanced Animated Floating Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-yellow/30 blur-xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-yellow/30 to-secondary/40 blur-2xl"
        animate={{
          y: [10, -20, 10],
          x: [-10, 15, -10],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-10 h-10 rounded-full bg-gradient-to-br from-secondary/30 to-primary/40 blur-xl"
        animate={{
          y: [0, -25, 0],
          x: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 via-yellow/10 to-primary/15 text-primary border border-primary/30 backdrop-blur-md shadow-lg shadow-primary/5">
                <Sparkles className="h-4 w-4 animate-pulse" />
                <span className="text-sm font-semibold">Excellence in Education</span>
              </span>
            </motion.div>
            
            <div className="flex items-center gap-4 mb-4">
              <motion.img 
                src={upscaleLogo} 
                alt="Upscale Tuition" 
                className="h-14 w-auto drop-shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-primary via-yellow to-primary bg-clip-text text-transparent">
                Upscale Tuition
              </span>
            </div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Connecting Students to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow to-primary animate-gradient-x">Excellence</span>
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              At Upscale Tuition, we empower students to achieve their academic dreams through personalized learning, expert faculty, and innovative teaching methods. Join us on the path to success.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-lg shadow-xl shadow-primary/30 group"
                  onClick={scrollToContact}
                >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-lg border-primary/30 hover:bg-primary/10 hover:border-primary/50 group backdrop-blur-sm"
                >
                Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div 
                className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center gap-2 text-primary">
                  <BookOpen className="h-6 w-6" />
                  <p className="text-3xl font-bold">15+</p>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Courses</p>
              </motion.div>
              <motion.div 
                className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-yellow/5 to-transparent border border-yellow/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center gap-2 text-yellow">
                  <Users className="h-6 w-6" />
                  <p className="text-3xl font-bold">500+</p>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Students</p>
              </motion.div>
              <motion.div 
                className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center gap-2 text-primary">
                  <Award className="h-6 w-6" />
                  <p className="text-3xl font-bold">98%</p>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Success Rate</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

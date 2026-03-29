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
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
      </div>
      
      {/* Animated Floating Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary/30"
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-secondary/30"
        animate={{
          y: [8, -8, 8],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            className="space-y-5 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">Excellence in Education</span>
              </span>
            </motion.div>

            <div className="flex items-center justify-start gap-2.5 mb-3">
              <img 
                src={upscaleLogo} 
                alt="Upscale Academy" 
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Upscale Academy
              </span>
            </div>

            <motion.h1 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Connecting Students to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Excellence</span>
            </motion.h1>

            <motion.p 
              className="text-sm xs:text-base sm:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              At Upscale Academy, we empower students to achieve their academic dreams through personalized learning, expert faculty, and innovative teaching methods.
            </motion.p>

            <motion.div
              className="flex flex-col xs:flex-row gap-3 justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button 
                  className="bg-primary hover:bg-primary/90 text-sm xs:text-base group h-9 xs:h-10"
                  onClick={scrollToContact}
                >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button 
                  variant="outline"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm xs:text-base border-primary/20 hover:bg-primary/5 group h-9 xs:h-10"
                >
                Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 xs:grid-cols-3 gap-3 xs:gap-4 pt-5 xs:pt-6 border-t border-border max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="space-y-1.5 text-left">
                <div className="flex items-center justify-start gap-1.5 text-primary">
                  <BookOpen className="h-4 w-4 xs:h-5 xs:w-5" />
                  <p className="text-xl xs:text-2xl sm:text-3xl font-bold">15+</p>
                </div>
                <p className="text-xs text-muted-foreground">Courses</p>
              </div>
              <div className="space-y-1.5 text-left">
                <div className="flex items-center justify-start gap-1.5 text-primary">
                  <Users className="h-4 w-4 xs:h-5 xs:w-5" />
                  <p className="text-xl xs:text-2xl sm:text-3xl font-bold">500+</p>
                </div>
                <p className="text-xs text-muted-foreground">Students</p>
              </div>
              <div className="space-y-1.5 text-left">
                <div className="flex items-center justify-start gap-1.5 text-primary">
                  <Award className="h-4 w-4 xs:h-5 xs:w-5" />
                  <p className="text-xl xs:text-2xl sm:text-3xl font-bold">98%</p>
                </div>
                <p className="text-xs text-muted-foreground">Success Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
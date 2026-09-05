import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play } from "lucide-react";
import { motion } from "framer-motion";

// Original Video Media Only
import tenthVideo from "@/assets/10th.mp4";
import classTenthVideo from "@/assets/class 10th.mp4";

const BoardAchievements = () => {
  // Highlight videos
  const highlightMedia = [
    { type: "video", src: tenthVideo, alt: "10th Board Results Spotlight" },
    { type: "video", src: classTenthVideo, alt: "Class 10th Highlights" },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
      {/* Hero Section */}
      <section className="relative px-4 py-8 md:py-12 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeIn} className="mb-4 flex justify-center">
              <Link to="/">
                <Button variant="outline" size="sm" className="flex items-center gap-1.5 hover:bg-orange-50 hover:text-orange-600 transition-colors text-xs">
                  <ArrowLeft className="h-3 w-3" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Board <span className="text-orange-600">Achievements</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              Celebrating the outstanding performance and dedication of our students in their 10th and 12th board examinations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 mt-8 relative z-20">
        
        {/* Video Highlights - Small Square format */}
        <div className="mb-10 w-full text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center max-w-[600px] mx-auto">
             {highlightMedia.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={index} 
                className="rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 relative w-full aspect-square max-w-[260px] mx-auto bg-black"
              >
                <video 
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  autoPlay
                  loop
                  playsInline
                />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[10px] font-medium flex items-center gap-1">
                  <Play className="h-2 w-2 fill-white" />
                  Playing
                </div>
                <div className="absolute bottom-0 w-full p-2 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium text-xs text-left">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-3 mb-10"
        >
          <Card className="p-4 text-center border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-800">
            <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1">98%</div>
            <div className="text-gray-500 dark:text-gray-400 font-medium text-[10px] uppercase">Pass Rate</div>
          </Card>
          
          <Card className="p-4 text-center border-none shadow-md bg-gradient-to-br from-orange-500 to-orange-600 text-white transform md:scale-105 z-10">
            <div className="text-2xl md:text-3xl font-extrabold mb-1">45+</div>
            <div className="text-orange-100 font-medium text-[10px] uppercase">Above 90%</div>
          </Card>
          
          <Card className="p-4 text-center border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-800">
            <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1">100%</div>
            <div className="text-gray-500 dark:text-gray-400 font-medium text-[10px] uppercase">Excellence</div>
          </Card>
        </motion.div>

        {/* Testimonials */}
        <div>
          <h2 className="text-lg md:text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Student <span className="text-orange-600">Stories</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-5 h-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm">
                    A
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">Ananya Gupta</h3>
                    <p className="text-orange-600 dark:text-orange-400 text-xs">10th Board, 95.2%</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs italic">
                  "The personalized attention and structured study plans at Upscale Academy helped me achieve my dream score."
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="p-5 h-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm">
                    R
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">Rohan Mehta</h3>
                    <p className="text-orange-600 dark:text-orange-400 text-xs">12th Board, 92.8%</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs italic">
                  "The comprehensive study material and regular assessments helped me identify my weak areas and improve consistently."
                </p>
              </Card>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BoardAchievements;
import { motion } from "framer-motion";
import { Building2, Wifi, BookOpen, MonitorPlay, ChevronRight, ChevronLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";

const infrastructureImages = [
  {
    id: 1,
    alt: "Modern classroom with smart board",
    src: "/images/classroom.jpg"
  },
  {
    id: 2,
    alt: "Well-equipped science laboratory",
    src: "/images/lab.jpg"
  },
  {
    id: 3,
    alt: "Computer lab with latest technology",
    src: "/images/computer-lab.jpg"
  },
  {
    id: 4,
    alt: "School library with study spaces",
    src: "/images/library.jpg"
  }
];

const infrastructureItems = [
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: "Modern Classrooms",
    description: "Spacious, well-ventilated classrooms equipped with smart boards and comfortable seating for an optimal learning environment."
  },
  {
    icon: <Wifi className="h-10 w-10 text-primary" />,
    title: "High-Speed Internet",
    description: "Uninterrupted high-speed Wi-Fi connectivity throughout the campus for seamless digital learning experiences."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Well-Stocked Library",
    description: "Extensive collection of reference books, journals, and digital resources to support academic excellence."
  },
  {
    icon: <MonitorPlay className="h-10 w-10 text-primary" />,
    title: "Audio-Visual Rooms",
    description: "Dedicated spaces equipped with projectors and audio systems for interactive learning sessions and presentations."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Infrastructure = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our World-Class Infrastructure</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide state-of-the-art facilities designed to enhance the learning experience and foster academic excellence.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {infrastructureItems.map((facility, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                    {facility.icon}
                  </div>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{facility.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Gallery */}
        <div className="mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gray-100 dark:bg-gray-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Campus Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {infrastructureImages.map((image) => (
                <div 
                  key={image.id}
                  className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative group"
                >
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="text-sm text-gray-500">Image: {image.alt}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 gap-4">
              <button className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;

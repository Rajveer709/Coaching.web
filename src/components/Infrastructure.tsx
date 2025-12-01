import { motion } from "framer-motion";
import { Building2, Wifi, BookOpen, MonitorPlay, ChevronRight, ChevronLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import campus1 from "@/assets/Campus-1.png";
import campus2 from "@/assets/Campus-2.png";
import campus3 from "@/assets/Campus-3.png";
import campus4 from "@/assets/Campus-4.png";

const infrastructureImages = [
  {
    id: 1,
    alt: "Campus View 1",
    src: campus1
  },
  {
    id: 2,
    alt: "Campus View 2",
    src: campus2
  },
  {
    id: 3,
    alt: "Campus View 3",
    src: campus3
  },
  {
    id: 4,
    alt: "Campus View 4",
    src: campus4
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === infrastructureImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? infrastructureImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-3">Our Infrastructure</h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide state-of-the-art facilities designed to enhance the learning experience and foster academic excellence.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {infrastructureItems.map((facility, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-2 bg-primary/10 rounded-full w-fit mb-3">
                    {facility.icon}
                  </div>
                  <CardTitle className="text-lg">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{facility.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Gallery */}
        <div className="mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gray-100 dark:bg-gray-800 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-center">Campus Gallery</h3>
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {infrastructureImages.map((image) => (
                  <div 
                    key={image.id}
                    className="min-w-full aspect-video rounded-lg overflow-hidden relative group"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4 gap-3">
              <button 
                onClick={prevImage}
                className="p-1.5 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-1.5">
                {infrastructureImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex 
                        ? 'bg-primary' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextImage}
                className="p-1.5 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;

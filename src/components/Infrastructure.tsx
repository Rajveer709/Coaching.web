import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import campus1 from "@/assets/Campus-1.png";
import campus2 from "@/assets/Campus-2.png";
import campus3 from "@/assets/Campus-3.png";
import campus4 from "@/assets/Campus-4.png";

const campusImages = [
  { src: campus1, alt: "Campus View 1" },
  { src: campus2, alt: "Campus View 2" },
  { src: campus3, alt: "Campus View 3" },
  { src: campus4, alt: "Campus View 4" },
];

const Infrastructure = () => {
  return (
    <section className="py-16 px-4 bg-white" id="infrastructure">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Campus Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities designed to provide 
            the best learning environment for our students.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {campusImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden border-0 shadow-lg">
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:left-4" />
            <CarouselNext className="right-2 sm:right-4" />
          </Carousel>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
            <p className="text-gray-600">
              State-of-the-art infrastructure to support learning
            </p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Technology Enabled</h3>
            <p className="text-gray-600">
              Advanced technology for enhanced educational experience
            </p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Safe Environment</h3>
            <p className="text-gray-600">
              Secure and conducive learning environment
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Infrastructure;
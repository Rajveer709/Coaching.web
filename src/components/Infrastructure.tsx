import { motion } from "framer-motion";
import { Building2, Wifi, BookOpen, MonitorPlay, Microscope, Laptop2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
  },
  {
    icon: <Microscope className="h-10 w-10 text-primary" />,
    title: "Science Laboratory",
    description: "Fully-equipped laboratory for practical experiments and hands-on learning in science subjects."
  },
  {
    icon: <Laptop2 className="h-10 w-10 text-primary" />,
    title: "Computer Lab",
    description: "Modern computer lab with the latest hardware and software for technology education and digital literacy."
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Infrastructure;

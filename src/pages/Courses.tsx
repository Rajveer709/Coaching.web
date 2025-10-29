import { motion } from "framer-motion";
import { BookOpen, Users, Clock, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Courses = () => {
  const courses = [
    {
      name: "Mathematics",
      description: "Master algebra, calculus, geometry, and problem-solving techniques with our expert faculty.",
      students: "250+",
      duration: "12 months",
      level: "Class 8-12",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      name: "Physics",
      description: "Explore the laws of nature through practical experiments and conceptual understanding.",
      students: "180+",
      duration: "12 months",
      level: "Class 9-12",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      name: "Chemistry",
      description: "Learn organic, inorganic, and physical chemistry with hands-on laboratory practice.",
      students: "160+",
      duration: "12 months",
      level: "Class 9-12",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      name: "Biology",
      description: "Discover life sciences from cell biology to ecology with comprehensive study materials.",
      students: "140+",
      duration: "12 months",
      level: "Class 9-12",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      name: "English",
      description: "Enhance grammar, literature analysis, and communication skills for academic excellence.",
      students: "200+",
      duration: "10 months",
      level: "Class 6-12",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      name: "Computer Science",
      description: "Learn programming, algorithms, and computational thinking for the digital age.",
      students: "120+",
      duration: "12 months",
      level: "Class 9-12",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      name: "Competitive Exams",
      description: "Specialized coaching for JEE, NEET, and other competitive entrance examinations.",
      students: "300+",
      duration: "24 months",
      level: "Class 11-12",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      name: "Commerce",
      description: "Comprehensive understanding of accounts, economics, and business studies.",
      students: "150+",
      duration: "12 months",
      level: "Class 11-12",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="text-primary">Courses</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Comprehensive academic programs designed to help students excel in their studies and competitive examinations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-lg bg-primary/10">
                          {course.icon}
                        </div>
                        <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                          {course.level}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {course.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{course.students} Students</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{course.duration} Duration</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who have achieved their academic goals with us.
            </p>
            <a href="/#contact">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
                Enroll Now
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;

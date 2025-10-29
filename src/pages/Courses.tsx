import { motion } from "framer-motion";
import { BookOpen, Users, Clock, Award, Microscope, Calculator, Book, Code, TrendingUp, Briefcase, Trophy, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      icon: <Calculator className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      features: ["Live Classes", "Practice Tests", "Study Materials"],
    },
    {
      name: "Physics",
      description: "Explore the laws of nature through practical experiments and conceptual understanding.",
      students: "180+",
      duration: "12 months",
      level: "Class 9-12",
      icon: <Trophy className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      features: ["Lab Sessions", "Mock Tests", "Doubt Clearing"],
    },
    {
      name: "Chemistry",
      description: "Learn organic, inorganic, and physical chemistry with hands-on laboratory practice.",
      students: "160+",
      duration: "12 months",
      level: "Class 9-12",
      icon: <Microscope className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      features: ["Practical Classes", "Assignments", "Weekly Tests"],
    },
    {
      name: "Biology",
      description: "Discover life sciences from cell biology to ecology with comprehensive study materials.",
      students: "140+",
      duration: "12 months",
      level: "Class 9-12",
      icon: <Book className="h-8 w-8" />,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-teal-500/10 to-cyan-500/10",
      features: ["Visual Learning", "Diagrams", "Specimen Study"],
    },
    {
      name: "English",
      description: "Enhance grammar, literature analysis, and communication skills for academic excellence.",
      students: "200+",
      duration: "10 months",
      level: "Class 6-12",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-rose-500/10",
      features: ["Speaking Practice", "Writing Skills", "Literature"],
    },
    {
      name: "Computer Science",
      description: "Learn programming, algorithms, and computational thinking for the digital age.",
      students: "120+",
      duration: "12 months",
      level: "Class 9-12",
      icon: <Code className="h-8 w-8" />,
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-violet-500/10 to-purple-500/10",
      features: ["Coding Labs", "Projects", "Algorithm Training"],
    },
    {
      name: "Competitive Exams",
      description: "Specialized coaching for JEE, NEET, and other competitive entrance examinations.",
      students: "300+",
      duration: "24 months",
      level: "Class 11-12",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-amber-500/10 to-yellow-500/10",
      features: ["Mock Tests", "Expert Faculty", "Study Plans"],
    },
    {
      name: "Commerce",
      description: "Comprehensive understanding of accounts, economics, and business studies.",
      students: "150+",
      duration: "12 months",
      level: "Class 11-12",
      icon: <Briefcase className="h-8 w-8" />,
      color: "from-slate-500 to-gray-600",
      bgColor: "bg-gradient-to-br from-slate-500/10 to-gray-600/10",
      features: ["Case Studies", "Live Markets", "Accounting"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Premium Education Programs</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Explore Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary">
                  Courses
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Comprehensive academic programs with expert faculty, personalized attention, and proven results to help students excel in their studies and competitive examinations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="relative p-6 h-full border-2 border-transparent hover:border-primary/30 transition-all duration-500 overflow-hidden bg-card/50 backdrop-blur-sm">
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${course.bgColor}`} />

                    <div className="relative space-y-5">
                      <div className="flex items-start justify-between">
                        <div className={`p-4 rounded-xl ${course.bgColor} text-transparent bg-clip-text bg-gradient-to-br ${course.color} group-hover:scale-110 transition-transform duration-300`}>
                          {course.icon}
                        </div>
                        <Badge variant="secondary" className="text-xs font-semibold">
                          {course.level}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {course.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {course.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        {course.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border/50 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground font-medium">{course.students} Students</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground font-medium">{course.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-border bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Courses Offered</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/5" />
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Start Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                  Learning Journey?
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
                Join hundreds of successful students who have achieved their academic goals with personalized attention, expert guidance, and proven teaching methods.
              </p>
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl group">
                  Enroll Now
                  <TrendingUp className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;

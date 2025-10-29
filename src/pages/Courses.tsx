import { motion } from "framer-motion";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Mathematics",
    description: "Master mathematical concepts with our expert tutors. From basic arithmetic to advanced calculus, we've got you covered.",
    duration: "12 weeks",
    level: "All Levels",
    color: "bg-orange-500"
  },
  {
    id: 2,
    title: "Physics",
    description: "Explore the fundamental principles of physics through practical experiments and problem-solving sessions.",
    duration: "10 weeks",
    level: "Intermediate",
    color: "bg-yellow-500"
  },
  {
    id: 3,
    title: "Chemistry",
    description: "Dive into the world of atoms, molecules, and chemical reactions with our comprehensive chemistry program.",
    duration: "12 weeks",
    level: "All Levels",
    color: "bg-orange-600"
  },
  {
    id: 4,
    title: "Biology",
    description: "Discover the wonders of life sciences through engaging lessons and hands-on laboratory work.",
    duration: "8 weeks",
    level: "Beginner",
    color: "bg-yellow-600"
  },
  {
    id: 5,
    title: "Computer Science",
    description: "Learn programming, algorithms, and data structures from industry experts.",
    duration: "16 weeks",
    level: "Advanced",
    color: "bg-orange-500"
  },
  {
    id: 6,
    title: "English Literature",
    description: "Explore classic and contemporary literature while improving your analytical and writing skills.",
    duration: "10 weeks",
    level: "All Levels",
    color: "bg-yellow-500"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Courses
          </motion.h1>
          <motion.p 
            className="text-xl text-orange-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our comprehensive range of courses designed to help you achieve academic excellence
          </motion.p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className={`h-2 ${course.color}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>Duration: {course.duration}</span>
                  <span>Level: {course.level}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-black">
                    ${course.duration === "8 weeks" ? "299" : course.duration === "10 weeks" ? "349" : "399"}
                  </span>
                  <Link 
                    to={`/courses/${course.id}`}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
=======
import { BookOpen, Users, Clock, Award, Microscope, Calculator, Book, Code, TrendingUp, Briefcase, Trophy, GraduationCap, Star, CheckCircle2, Atom, Sparkles, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
      color: "from-blue-600 to-cyan-600",
      cardBg: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
      iconBg: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40",
      borderColor: "hover:border-blue-500/50 hover:shadow-blue-500/20",
      features: ["Live Classes", "Practice Tests", "Study Materials", "Doubt Sessions"],
      rating: 4.8,
      popular: true,
    },
    {
      name: "Physics",
      description: "Explore the laws of nature through practical experiments and conceptual understanding.",
      students: "180+",
      duration: "12 months",
      level: "Class 9-12",
      icon: <Atom className="h-8 w-8" />,
      color: "from-orange-600 to-red-600",
      cardBg: "from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30",
      iconBg: "bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40",
      borderColor: "hover:border-orange-500/50 hover:shadow-orange-500/20",
      features: ["Lab Sessions", "Mock Tests", "Doubt Clearing", "Experiments"],
      rating: 4.9,
      popular: false,
    },
    {
      name: "Chemistry",
      description: "Learn organic, inorganic, and physical chemistry with hands-on laboratory practice.",
      students: "160+",
      duration: "12 months",
      level: "Class 9-12",
      icon: <Microscope className="h-8 w-8" />,
      color: "from-emerald-600 to-green-600",
      cardBg: "from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30",
      iconBg: "bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/40",
      borderColor: "hover:border-emerald-500/50 hover:shadow-emerald-500/20",
      features: ["Practical Classes", "Assignments", "Weekly Tests", "Lab Work"],
      rating: 4.7,
      popular: false,
    },
    {
      name: "Biology",
      description: "Discover life sciences from cell biology to ecology with comprehensive study materials.",
      students: "140+",
      duration: "12 months",
      level: "Class 9-12",
      icon: <Book className="h-8 w-8" />,
      color: "from-teal-600 to-cyan-600",
      cardBg: "from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30",
      iconBg: "bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/40 dark:to-cyan-900/40",
      borderColor: "hover:border-teal-500/50 hover:shadow-teal-500/20",
      features: ["Visual Learning", "Diagrams", "Specimen Study", "Field Trips"],
      rating: 4.6,
      popular: false,
    },
    {
      name: "English",
      description: "Enhance grammar, literature analysis, and communication skills for academic excellence.",
      students: "200+",
      duration: "10 months",
      level: "Class 6-12",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-rose-600 to-pink-600",
      cardBg: "from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30",
      iconBg: "bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/40 dark:to-pink-900/40",
      borderColor: "hover:border-rose-500/50 hover:shadow-rose-500/20",
      features: ["Speaking Practice", "Writing Skills", "Literature", "Debates"],
      rating: 4.8,
      popular: false,
    },
    {
      name: "Computer Science",
      description: "Learn programming, algorithms, and computational thinking for the digital age.",
      students: "120+",
      duration: "12 months",
      level: "Class 9-12",
      icon: <Code className="h-8 w-8" />,
      color: "from-sky-600 to-blue-600",
      cardBg: "from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30",
      iconBg: "bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900/40 dark:to-blue-900/40",
      borderColor: "hover:border-sky-500/50 hover:shadow-sky-500/20",
      features: ["Coding Labs", "Projects", "Algorithm Training", "Hackathons"],
      rating: 4.9,
      popular: true,
    },
    {
      name: "Competitive Exams",
      description: "Specialized coaching for JEE, NEET, and other competitive entrance examinations.",
      students: "300+",
      duration: "24 months",
      level: "Class 11-12",
      icon: <Trophy className="h-8 w-8" />,
      color: "from-amber-600 to-orange-600",
      cardBg: "from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
      iconBg: "bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40",
      borderColor: "hover:border-amber-500/50 hover:shadow-amber-500/20",
      features: ["Mock Tests", "Expert Faculty", "Study Plans", "Mentorship"],
      rating: 5.0,
      popular: true,
    },
    {
      name: "Commerce",
      description: "Comprehensive understanding of accounts, economics, and business studies.",
      students: "150+",
      duration: "12 months",
      level: "Class 11-12",
      icon: <Briefcase className="h-8 w-8" />,
      color: "from-slate-600 to-zinc-600",
      cardBg: "from-slate-50 to-zinc-50 dark:from-slate-950/30 dark:to-zinc-950/30",
      iconBg: "bg-gradient-to-br from-slate-100 to-zinc-100 dark:from-slate-900/40 dark:to-zinc-900/40",
      borderColor: "hover:border-slate-500/50 hover:shadow-slate-500/20",
      features: ["Case Studies", "Live Markets", "Accounting", "Finance Basics"],
      rating: 4.7,
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-10 left-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-20 right-[15%] w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-10 left-[20%] w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-32 right-[10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          {/* Floating Icons */}
          <motion.div
            className="absolute top-32 left-[5%] opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <BookOpen className="h-12 w-12 text-primary" />
          </motion.div>
          <motion.div
            className="absolute top-40 right-[8%] opacity-20"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <GraduationCap className="h-16 w-16 text-blue-500" />
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-[12%] opacity-20"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <Award className="h-14 w-14 text-cyan-500" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-[12%] opacity-20"
            animate={{
              y: [0, 18, 0],
              rotate: [0, -12, 0],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Target className="h-10 w-10 text-emerald-500" />
          </motion.div>

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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/30 mb-8 backdrop-blur-sm shadow-lg"
              >
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Premium Education Programs</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              >
                Explore Our{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 animate-gradient">
                    Courses
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </motion.h1>
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
                  <Card className={`relative p-6 h-full border-2 ${course.borderColor} transition-all duration-500 overflow-hidden bg-gradient-to-br ${course.cardBg} shadow-lg hover:shadow-2xl`}>
                    {course.popular && (
                      <div className="absolute -top-0 -right-0 z-10">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg shadow-lg flex items-center gap-1">
                          <Star className="h-3 w-3 fill-white" />
                          Popular
                        </div>
                      </div>
                    )}

                    <div className="relative space-y-5">
                      <div className="flex items-start justify-between">
                        <motion.div
                          className={`p-4 rounded-2xl ${course.iconBg} shadow-md`}
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className={`text-transparent bg-clip-text bg-gradient-to-br ${course.color}`}>
                            {course.icon}
                          </div>
                        </motion.div>
                        <Badge variant="outline" className="text-xs font-semibold border-2">
                          {course.level}
                        </Badge>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className={`text-2xl font-bold bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}>
                            {course.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-1 mb-3">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star
                              key={idx}
                              className={`h-3.5 w-3.5 ${
                                idx < Math.floor(course.rating)
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-xs font-semibold text-muted-foreground ml-1">
                            {course.rating}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {course.description}
                        </p>
                      </div>

                      <div className="space-y-2.5">
                        {course.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                            className="flex items-center gap-2.5"
                          >
                            <CheckCircle2 className={`h-4 w-4 flex-shrink-0 text-transparent bg-clip-text bg-gradient-to-r ${course.color}`} />
                            <span className="text-xs font-medium text-muted-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="pt-4 border-t-2 border-border/50 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span className="font-semibold text-foreground">{course.students}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="font-semibold text-foreground">{course.duration}</span>
                          </div>
                        </div>
                        <Button
                          className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 transition-opacity shadow-md`}
                          size="sm"
                        >
                          View Details
                        </Button>
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
>>>>>>> 99f52317f4cae03c9d996e64f83799616518d02d
    </div>
  );
};

export default Courses;

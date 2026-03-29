import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  BookOpen,
  Award,
  Microscope,
  Calculator,
  Book,
  Code,
  Briefcase,
  GraduationCap,
  Atom,
  Star,
  Trophy,
  Sparkles,
  TrendingUp,
  Target,
  Users,
  Clock,
  FileText
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, type ButtonProps } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import juniorBatchImage from "@/assets/Junior Batch.png";
import crashCourseImage from "@/assets/Crash Course 12th.jpg";
import crashCourse10thScience from "@/assets/Crash Course 10th  (1).jpg";
import crashCourse10thMaths from "@/assets/Crash Course 10th  (2).jpg";
import crashCourse10thSocialScience from "@/assets/Crash Course 12th (3).jpg";
import crashCourse10thEnglish from "@/assets/Crash Course 10th  (3).jpg";
import crashCourse10thHindi from "@/assets/Crash Course 10th  (4).jpg";
import oneToOneSessionImage from "@/assets/course (2).jpg";
import crashCourse12thPhysics from "@/assets/Crash Course 12th (2).jpg";
import crashCourse12thMaths from "@/assets/Crash Course 12th (4).jpg";
import crashCourse12thChemistry from "@/assets/Crash Course 12th (1).jpg";

const crashCourseData = {
  general: {
    title: "CRASH COURSE CLASS 10TH & 12TH (MATHS, SCIENCE, COMMERCE & ALL SUBJECTS)",
    description: "OFFLINE & ONLINE",
    features: [
      "SYLLABUS BRIEFING",
      "LAST 10 YEARS SAMPLE PAPER",
      "MARKS & SECTION WISE PREPARATION",
      "DOUBT CLEARING",
      "WEEKLY FEEDBACK"
    ],
    institutions: "CURRENTLY EDUCATING SHISHUKUNJ, DPS, DALY COLLEGE, ADVANCED ACADEMY, EKAYANA, BHAVAN'S PROMINENT, LAUREL'S, CHOITHRAM",
    image: crashCourseImage
  },
  class10: [
    {
      title: "CRASH COURSE CLASS 10TH SCIENCE",
      fee: "8000",
      features: [
        "SYLLABUS BRIEFING",
        "LAST 10 YEARS SAMPLE PAPER",
        "MARKS & SECTION WISE PREPARATION",
        "DOUBT CLEARING",
        "WEEKLY FEEDBACK"
      ],
      institutions: "CURRENTLY EDUCATING SHISHUKUNJ, DPS, DALY COLLEGE, ADVANCED ACADEMY, EKAYANA, BHAVAN'S PROMINENT, LAUREL'S, CHOITHRAM",
      image: crashCourse10thScience
    },
    {
      title: "CRASH COURSE CLASS 10TH MATHS",
      fee: "7000",
      features: [
        "SYLLABUS BRIEFING",
        "LAST 10 YEARS SAMPLE PAPER",
        "MARKS & SECTION WISE PREPARATION",
        "DOUBT CLEARING",
        "WEEKLY FEEDBACK"
      ],
      institutions: "CURRENTLY EDUCATING SHISHUKUNJ, DPS, DALY COLLEGE, ADVANCED ACADEMY, EKAYANA, BHAVAN'S PROMINENT, LAUREL'S, CHOITHRAM",
      image: crashCourse10thMaths
    },
    {
      title: "CRASH COURSE CLASS 10TH SOCIAL SCIENCE",
      fee: "5000",
      features: [
        "SYLLABUS BRIEFING",
        "LAST 10 YEARS SAMPLE PAPER",
        "MARKS & SECTION WISE PREPARATION",
        "DOUBT CLEARING",
        "WEEKLY FEEDBACK"
      ],
      institutions: "CURRENTLY EDUCATING SHISHUKUNJ, DPS, DALY COLLEGE, ADVANCED ACADEMY, EKAYANA, BHAVAN'S PROMINENT, LAUREL'S, CHOITHRAM",
      image: crashCourse10thSocialScience
    },
    {
      title: "CRASH COURSE CLASS 10TH ENGLISH",
      fee: "5000",
      features: [
        "SYLLABUS BRIEFING",
        "LAST 10 YEARS SAMPLE PAPER",
        "MARKS & SECTION WISE PREPARATION",
        "DOUBT CLEARING",
        "WEEKLY FEEDBACK"
      ],
      institutions: "CURRENTLY EDUCATING SHISHUKUNJ, DPS, DALY COLLEGE, ADVANCED ACADEMY, EKAYANA, BHAVAN'S PROMINENT, LAUREL'S, CHOITHRAM",
      image: crashCourse10thEnglish
    },
    {
      title: "CRASH COURSE CLASS 10TH HINDI",
      fee: "5000",
      features: [
        "SYLLABUS BRIEFING",
        "LAST 10 YEARS SAMPLE PAPER",
        "MARKS & SECTION WISE PREPARATION",
        "DOUBT CLEARING",
        "WEEKLY FEEDBACK"
      ],
      institutions: "CURRENTLY EDUCATING SHISHUKUNJ, DPS, DALY COLLEGE, ADVANCED ACADEMY, EKAYANA, BHAVAN'S PROMINENT, LAUREL'S, CHOITHRAM",
      image: crashCourse10thHindi
    }
  ],
  class12: [
    {
      title: "CRASH COURSE CLASS 12TH PHYSICS",
      fee: "8000",
      features: [
        "SYLLABUS BRIEFING",
        "LAST 10 YEARS SAMPLE PAPER",
        "MARKS & SECTION WISE PREPARATION",
        "DOUBT CLEARING",
        "WEEKLY FEEDBACK"
      ],
      institutions: "CURRENTLY EDUCATING SHISHUKUNJ, DPS, DALY COLLEGE, ADVANCED ACADEMY, EKAYANA, BHAVAN'S PROMINENT, LAUREL'S, CHOITHRAM",
      image: crashCourse12thPhysics
    },
    {
      title: "CRASH COURSE CLASS 12TH CHEMISTRY",
      fee: "8000",
      features: [
        "• SYLLABUS BRIEFING",
        "• LAST 10 YEARS SAMPLE PAPER",
        "• MARKS & SECTION WISE PREPARATION",
        "• DOUBT CLEARING",
        "• WEEKLY FEEDBACK"
      ],
      institutions: "CURRENTLY EDUCATING SHISHUKUNJ, DPS, DALY COLLEGE, ADVANCED ACADEMY, EKAYANA, BHAVAN'S PROMINENT, LAUREL'S, CHOITHRAM",
      image: crashCourse12thChemistry
    },
    {
      title: "CRASH COURSE CLASS 12TH MATHS",
      fee: "10000",
      features: [
        "• SYLLABUS BRIEFING",
        "• LAST 10 YEARS SAMPLE PAPER",
        "• MARKS & SECTION WISE PREPARATION",
        "• DOUBT CLEARING",
        "• WEEKLY FEEDBACK"
      ],
      institutions: "CURRENTLY EDUCATING SHISHUKUNJ, DPS, DALY COLLEGE, ADVANCED ACADEMY, EKAYANA, BHAVAN'S PROMINENT, LAUREL'S, CHOITHRAM",
      image: crashCourse12thMaths
    }
  ]
};

const courses = [
  {
    id: 1,
    title: "Upscale Introducing ONE TO ONE SESSION",
    description: "For board exam preparation 10th Grade All subjects • 11th & 12th Grade Commerce/Maths Chemistry/Biology",
    wing: "senior",
    color: "from-blue-700 to-cyan-700", // 5% darker
    cardBg: "from-blue-100 to-cyan-100 dark:from-blue-950/40 dark:to-cyan-950/40", // 5% darker
    borderColor: "hover:border-blue-600/50 hover:shadow-blue-600/20",
    features: ["Personalized Attention", "Flexible Timing", "Customized Study Plans", "Instant Doubt Resolution"],
    rating: 4.9,
    popular: true,
    image: oneToOneSessionImage
  },
  {
    id: 11,
    title: "Mathematics",
    description: "Building strong mathematical foundation with interactive learning and personalized attention for senior students.",
    wing: "senior",
    icon: <Calculator className="h-8 w-8" />,
    color: "from-red-700 to-rose-700", // 5% darker
    cardBg: "from-red-100 to-rose-100 dark:from-red-950/40 dark:to-rose-950/40", // 5% darker
    iconBg: "bg-gradient-to-br from-red-200 to-rose-200 dark:from-red-900/50 dark:to-rose-900/50", // 5% darker
    borderColor: "hover:border-red-600/50 hover:shadow-red-600/20",
    features: ["Concept Building", "Problem Solving", "Practice Sheets", "Doubt Clearing"],
    rating: 4.8,
    popular: true,
    teacher: "Mr. Sharma"
  },
  {
    id: 2,
    title: "Physics",
    description: "Explore the laws of nature through practical experiments and conceptual understanding.",
    wing: "senior",
    icon: <Atom className="h-8 w-8" />,
    color: "from-orange-700 to-red-700", // 5% darker
    cardBg: "from-orange-100 to-red-100 dark:from-orange-950/40 dark:to-red-950/40", // 5% darker
    iconBg: "bg-gradient-to-br from-orange-200 to-red-200 dark:from-orange-900/50 dark:to-red-900/50", // 5% darker
    borderColor: "hover:border-orange-600/50 hover:shadow-orange-600/20",
    features: ["Lab Sessions", "Mock Tests", "Doubt Clearing", "Experiments"],
    rating: 4.9,
    popular: false,
    teacher: "Prof. Ravi Kumar",

  },
  {
    id: 3,
    title: "Chemistry",
    description: "Learn organic, inorganic, and physical chemistry with hands-on laboratory practice.",
    wing: "senior",
    icon: <Microscope className="h-8 w-8" />,
    color: "from-emerald-700 to-green-700", // 5% darker
    cardBg: "from-emerald-100 to-green-100 dark:from-emerald-950/40 dark:to-green-950/40", // 5% darker
    iconBg: "bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-900/50 dark:to-green-900/50", // 5% darker
    borderColor: "hover:border-emerald-600/50 hover:shadow-emerald-600/20",
    features: ["Practical Classes", "Assignments", "Weekly Tests", "Lab Work"],
    rating: 4.7,
    popular: false,
    teacher: "Dr. Priya Verma",

  },
  {
    id: 4,
    title: "Biology",
    description: "Discover life sciences from cell biology to ecology with comprehensive study materials.",
    wing: "senior",
    icon: <Book className="h-8 w-8" />,
    color: "from-teal-700 to-cyan-700", // 5% darker
    cardBg: "from-teal-100 to-cyan-100 dark:from-teal-950/40 dark:to-cyan-950/40", // 5% darker
    iconBg: "bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-900/50 dark:to-cyan-900/50", // 5% darker
    borderColor: "hover:border-teal-600/50 hover:shadow-teal-600/20",
    features: ["Visual Learning", "Diagrams", "Specimen Study", "Field Trips"],
    rating: 4.6,
    popular: false,
    teacher: "Dr. Anjali Singh",

  },
  {
    id: 12,
    title: "Hindi",
    description: "Developing language skills, reading comprehension, and cultural appreciation through Hindi literature and grammar.",
    wing: "all",
    icon: <BookOpen className="h-8 w-8" />,
    color: "from-purple-700 to-indigo-700", // 5% darker
    cardBg: "from-purple-100 to-indigo-100 dark:from-purple-950/40 dark:to-indigo-950/40", // 5% darker
    iconBg: "bg-gradient-to-br from-purple-200 to-indigo-200 dark:from-purple-900/50 dark:to-indigo-900/50", // 5% darker
    borderColor: "hover:border-purple-600/50 hover:shadow-purple-600/20",
    features: ["Grammar Basics", "Storytelling", "Poetry", "Writing Skills"],
    rating: 4.7,
    popular: false,
    teacher: "Mrs. Gupta"
  },
  {
    id: 5,
    title: "English",
    description: "Enhance grammar, literature analysis, and communication skills for academic excellence.",
    wing: "all",
    icon: <BookOpen className="h-8 w-8" />,
    color: "from-rose-700 to-pink-700", // 5% darker
    cardBg: "from-rose-100 to-pink-100 dark:from-rose-950/40 dark:to-pink-950/40", // 5% darker
    iconBg: "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-900/50 dark:to-pink-900/50", // 5% darker
    borderColor: "hover:border-rose-600/50 hover:shadow-rose-600/20",
    features: ["Speaking Practice", "Writing Skills", "Literature", "Debates"],
    rating: 4.8,
    popular: false,
    teacher: "Mr. David Wilson"
  },
  // Junior Wing Courses
  {
    id: 20,
    title: "ADMISSION OPEN FOR!!",
    description: "Junior Batch Class 3rd to Class 7th\n3-day free demo session",
    subject: "Junior Batch",
    wing: "junior",
    icon: <GraduationCap className="h-8 w-8" />,
    color: "from-orange-500 to-red-500",
    cardBg: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/30",
    iconBg: "bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30",
    borderColor: "hover:border-orange-400/50 hover:shadow-orange-400/20",
    features: ["Free Demo Session", "Expert Faculty", "Personalized Attention", "Fun Learning"],
    rating: 4.9,
    popular: false,
    teacher: "Expert Team",
    image: juniorBatchImage
  },
  {
    id: 16,
    title: "Mathematics",
    description: "Building strong mathematical foundation with interactive learning and personalized attention for young learners.",
    subject: "Maths",
    wing: "junior",
    icon: <Calculator className="h-8 w-8" />,
    color: "from-blue-600 to-cyan-600", // 5% darker
    cardBg: "from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/40", // 5% darker
    iconBg: "bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-900/40 dark:to-cyan-900/40", // 5% darker
    borderColor: "hover:border-blue-500/50 hover:shadow-blue-500/20",
    features: ["Concept Building", "Fun Activities", "Worksheets", "Weekly Assessments"],
    rating: 4.8,
    popular: true,
    teacher: "Mrs. Sharma"
  },
  {
    id: 17,
    title: "Science",
    description: "Exploring the wonders of science through experiments, observations, and interactive learning for curious young minds.",
    subject: "Science",
    wing: "junior",
    icon: <Atom className="h-8 w-8" />,
    color: "from-green-600 to-emerald-600", // 5% darker
    cardBg: "from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/40", // 5% darker
    iconBg: "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-900/40 dark:to-emerald-900/40", // 5% darker
    borderColor: "hover:border-green-500/50 hover:shadow-green-500/20",
    features: ["Hands-on Experiments", "Science Projects", "Observation Skills", "Curiosity Building"],
    rating: 4.7,
    popular: false,
    teacher: "Mr. Verma"
  },
  {
    id: 18,
    title: "Social Science",
    description: "Understanding our world, history, and society through engaging lessons and storytelling for young learners.",
    subject: "Social Science",
    wing: "junior",
    icon: <Book className="h-8 w-8" />,
    color: "from-amber-600 to-orange-600", // 5% darker
    cardBg: "from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/40", // 5% darker
    iconBg: "bg-gradient-to-br from-amber-200 to-orange-200 dark:from-amber-900/40 dark:to-orange-900/40", // 5% darker
    borderColor: "hover:border-amber-500/50 hover:shadow-amber-500/20",
    features: ["History Lessons", "Geography Exploration", "Civics Understanding", "Map Skills"],
    rating: 4.6,
    popular: false,
    teacher: "Ms. Patel"
  },
  {
    id: 19,
    title: "Hindi",
    description: "Developing language skills, reading comprehension, and cultural appreciation through Hindi literature and grammar.",
    subject: "Hindi",
    wing: "junior",
    icon: <BookOpen className="h-8 w-8" />,
    color: "from-purple-600 to-indigo-600", // 5% darker
    cardBg: "from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/40", // 5% darker
    iconBg: "bg-gradient-to-br from-purple-200 to-indigo-200 dark:from-purple-900/40 dark:to-indigo-900/40", // 5% darker
    borderColor: "hover:border-purple-500/50 hover:shadow-purple-500/20",
    features: ["Grammar Basics", "Storytelling", "Poetry", "Writing Skills"],
    rating: 4.5,
    popular: false,
    teacher: "Mrs. Gupta"
  }
];

const Courses = () => {
  const [activeWing, setActiveWing] = useState("all");
  const [wingSelected, setWingSelected] = useState(false);
  const [showCrashCourses, setShowCrashCourses] = useState(false);
  const [crashCourseType, setCrashCourseType] = useState<'10th' | '12th' | null>(null);
  const location = useLocation();

  // Filter courses based on active wing
  const filteredCourses = courses.filter(
    (course) =>
      activeWing === "all" ||
      course.wing === activeWing ||
      course.wing === "all"
  );

  // Handle wing selection
  const handleWingSelect = (wing: string) => {
    setActiveWing(wing);
    setWingSelected(true);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Wing Selection Component
  const WingSelection = ({ 
    onSelect 
  }: { 
    onSelect: (wing: string) => void 
  }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Select Your Wing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-lg"
        >
          Choose the appropriate wing to view the available courses
        </motion.p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer"
          onClick={() => onSelect("junior")}
          onKeyDown={(e) => e.key === "Enter" && onSelect("junior")}
          role="button"
          tabIndex={0}
        >
          <Card className="h-full border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <div className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Junior Wing</h3>
              <p className="text-muted-foreground mb-6">Classes 3-7</p>
              <Button variant="outline" className="rounded-full">
                View Courses
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer"
          onClick={() => onSelect("senior")}
          onKeyDown={(e) => e.key === "Enter" && onSelect("senior")}
          role="button"
          tabIndex={0}
        >
          <Card className="h-full border-2 border-purple-200 hover:border-purple-400 transition-colors">
            <div className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Award className="h-10 w-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Senior Wing</h3>
              <p className="text-muted-foreground mb-6">Classes 8-12</p>
              <Button variant="outline" className="rounded-full">
                View Courses
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {!wingSelected ? (
          <section className="py-20 sm:py-32">
            <WingSelection onSelect={handleWingSelect} />
          </section>
        ) : (
          <div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Button
                variant="ghost"
                onClick={() => setWingSelected(false)}
                className="mb-8 -ml-3"
              >
                ← Back to Wing Selection
              </Button>
            </div>
            
            {/* Hero Section */}
            <section className="relative py-8 sm:py-16 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
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
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
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
            <section className="py-12 sm:py-20 bg-gradient-to-b from-background to-muted/20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-8">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold mb-4"
                  >
                    {activeWing === 'junior' ? 'Junior Wing (3-7)' : 'Senior Wing (8-12)'} Courses
                  </motion.h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {activeWing === 'junior' 
                      ? 'Explore our specially designed courses for young learners' 
                      : 'Comprehensive courses for senior students to excel in academics'}
                  </p>
                </div>

                {/* Admission Card and Subject Courses */}
                {(() => {
                  // Separate admission cards from other courses
                  const juniorAdmissionCard = filteredCourses.find(course => course.id === 20 && course.wing === "junior");
                  const seniorAdmissionCard = filteredCourses.find(course => course.id === 1 && course.wing === "senior");
                  
                  // Get the appropriate admission card based on active wing
                  const admissionCard = activeWing === 'junior' ? juniorAdmissionCard : 
                                     activeWing === 'senior' ? seniorAdmissionCard : null;
                  
                  // Filter out admission cards from other courses
                  const otherCourses = filteredCourses.filter(course => 
                    (course.wing === activeWing || course.wing === "all") && 
                    course.id !== 20 && course.id !== 1
                  );
                  
                  // Show admission layout for both junior and senior wings when they have an admission card
                  const showAdmissionLayout = (activeWing === 'junior' && juniorAdmissionCard) || 
                                            (activeWing === 'senior' && seniorAdmissionCard);
                  
                  return (
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                      {/* Admission Card - Shown for both junior and senior wings */}
                      {showAdmissionLayout && admissionCard && (
                        <div className="md:w-1/3">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`rounded-xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full ${
                              activeWing === 'junior' 
                                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                                : 'bg-gradient-to-r from-blue-700 to-cyan-700 text-white'
                            }`}
                          >
                            {/* Admission Card Content */}
                            <div className="w-full aspect-video md:aspect-square">
                              {admissionCard.image ? (
                                <img 
                                  src={admissionCard.image} 
                                  alt={admissionCard.title} 
                                  className="w-full h-full object-contain p-2 md:p-4"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center p-4">
                                  <div className="p-3 rounded-lg bg-white/20">
                                    {admissionCard.icon}
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            <div className="p-3 sm:p-4 md:p-6 pb-3 sm:pb-4">
                              <div className="flex justify-between items-start mb-3">
                                {!admissionCard.image && admissionCard.icon && (
                                  <div className="p-2 rounded-lg bg-white/20">
                                    {admissionCard.icon}
                                  </div>
                                )}
                                {admissionCard.popular && (
                                  <Badge className="bg-white/20 text-white border-0">
                                    Popular
                                  </Badge>
                                )}
                              </div>
                              
                              <h3 className="font-bold mb-2 text-base sm:text-lg md:text-xl">{admissionCard.title}</h3>
                              <p className="text-[0.7rem] sm:text-xs md:text-sm mb-3 text-white/90 whitespace-pre-line">{admissionCard.description}</p>
                              
                              <div className="flex flex-wrap gap-1 mb-3">
                                {admissionCard.features && admissionCard.features.slice(0, 3).map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-1 text-[0.65rem] md:text-xs px-1.5 py-0.5 rounded-full bg-white/20 text-white">
                                    <FileText className="h-2.5 w-2.5" />
                                    {feature}
                                  </div>
                                ))}
                              </div>
                              
                              {admissionCard.rating && (
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-1">
                                    <Star className="h-3 w-3 md:h-4 md:w-4 fill-yellow-300 text-yellow-300" />
                                    <span className="text-xs md:text-sm font-medium text-white">{admissionCard.rating}</span>
                                  </div>
                                </div>
                              )}
                              
                              {admissionCard.teacher && (
                                <div className="mt-2 text-xs text-white/80">
                                  Teacher: {admissionCard.teacher}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        </div>
                      )}
                      
                      {/* Subject Courses - Takes full width when no admission card, partial when there is one */}
                      <div className={showAdmissionLayout ? "md:w-2/3" : "w-full"}>
                        <div className="border-t border-border/30 pt-4 md:border-t-0 md:pt-0 md:hidden"></div>
                        
                        {/* Crash Course Buttons */}
                        {activeWing === 'senior' && (
                          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                            <Button 
                              onClick={() => {
                                setShowCrashCourses(true);
                                setCrashCourseType('10th');
                              }}
                              className="bg-blue-100 hover:bg-blue-200 text-blue-800 border border-blue-200"
                            >
                              10th Crash Courses
                            </Button>
                            <Button 
                              onClick={() => {
                                setShowCrashCourses(true);
                                setCrashCourseType('12th');
                              }}
                              className="bg-purple-100 hover:bg-purple-200 text-purple-800 border border-purple-200"
                            >
                              12th Crash Courses
                            </Button>
                            <Button 
                              onClick={() => {
                                setShowCrashCourses(false);
                                setCrashCourseType(null);
                              }}
                              variant="outline"
                            >
                              Subject Courses
                            </Button>
                          </div>
                        )}
                        
                        <h3 className="text-lg font-bold text-center mb-3 sm:mb-4 md:mb-6">
                          {showCrashCourses 
                            ? `${crashCourseType} Crash Courses` 
                            : 'Subject Courses'}
                        </h3>
                        
                        {/* Display Logic for Crash Courses or Regular Courses */}
                        {showCrashCourses && crashCourseType === '10th' ? (
                          // 10th Class Crash Courses
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {crashCourseData.class10.map((course, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                  delay: Math.min((index + 1) * 0.05, 0.3),
                                  duration: 0.3,
                                  ease: "easeOut"
                                }}
                                whileHover={{ y: -3 }}
                                className="rounded-xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40 hover:border-blue-400/50 hover:shadow-blue-400/20"
                              >
                                {/* Course Image */}
                                <div className="w-full aspect-video">
                                  <img 
                                    src={course.image} 
                                    alt={course.title} 
                                    className="w-full h-full object-contain p-1 sm:p-2"
                                  />
                                </div>
                                
                                <div className="p-3 sm:p-4">
                                  <h3 className="font-bold mb-2 text-base sm:text-lg">{course.title}</h3>
                                  <p className="text-sm font-semibold text-blue-600 mb-2">FEE: ₹{course.fee}</p>
                                  <p className="text-xs mb-3 text-muted-foreground">{crashCourseData.general.description}</p>
                                  
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {course.features.map((feature, idx) => (
                                      <div key={idx} className="flex items-center gap-1 text-[0.65rem] px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">
                                        <FileText className="h-2.5 w-2.5" />
                                        {feature}
                                      </div>
                                    ))}
                                  </div>
                                  
                                  <p className="text-[0.65rem] text-muted-foreground mt-2">
                                    {course.institutions}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        ) : showCrashCourses && crashCourseType === '12th' ? (
                          // 12th Class Crash Courses
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {crashCourseData.class12.map((course, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                  delay: Math.min((index + 1) * 0.05, 0.3),
                                  duration: 0.3,
                                  ease: "easeOut"
                                }}
                                whileHover={{ y: -3 }}
                                className="rounded-xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40 hover:border-purple-400/50 hover:shadow-purple-400/20"
                              >
                                {/* Course Image */}
                                <div className="w-full aspect-video">
                                  <img 
                                    src={course.image} 
                                    alt={course.title} 
                                    className="w-full h-full object-contain p-1 sm:p-2"
                                  />
                                </div>
                                
                                <div className="p-3 sm:p-4">
                                  <h3 className="font-bold mb-2 text-base sm:text-lg">{course.title}</h3>
                                  <p className="text-sm font-semibold text-purple-600 mb-2">FEE: ₹{course.fee}</p>
                                  <p className="text-xs mb-3 text-muted-foreground">{crashCourseData.general.description}</p>
                                  
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {course.features.map((feature, idx) => (
                                      <div key={idx} className="flex items-center gap-1 text-[0.65rem] px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200">
                                        <FileText className="h-2.5 w-2.5" />
                                        {feature}
                                      </div>
                                    ))}
                                  </div>
                                  
                                  <p className="text-[0.65rem] text-muted-foreground mt-2">
                                    {course.institutions}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        ) : (
                          // Regular Subject Courses
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {otherCourses.map((course, index) => (
                              <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                  delay: Math.min((index + 1) * 0.05, 0.3),
                                  duration: 0.3,
                                  ease: "easeOut"
                                }}
                                whileHover={{ y: -3 }}
                                className={`rounded-xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-gradient-to-br ${course.cardBg} ${course.borderColor}`}
                              >
                                {/* Course Image */}
                                {course.image && (
                                  <div className="w-full aspect-square">
                                    <img 
                                      src={course.image} 
                                      alt={course.title} 
                                      className="w-full h-full object-contain p-1 sm:p-2"
                                    />
                                  </div>
                                )}
                                
                                <div className={`p-3 sm:p-4 ${course.popular ? 'pb-3 sm:pb-4' : 'pb-3 sm:pb-4'}`}>
                                  <div className="flex justify-between items-start mb-3">
                                    {course.icon && (
                                      <div className={`p-2 rounded-lg ${course.iconBg}`}>
                                        {course.icon}
                                      </div>
                                    )}
                                    {course.popular && (
                                      <Badge className={`bg-gradient-to-r ${course.color} text-white border-0`}>
                                        Popular
                                      </Badge>
                                    )}
                                  </div>
                                  
                                  <h3 className="font-bold mb-2 text-base sm:text-lg">{course.title}</h3>
                                  <p className="text-xs mb-3 text-muted-foreground">{course.description}</p>
                                  
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {course.features && course.features.slice(0, 3).map((feature, idx) => (
                                      <div key={idx} className="flex items-center gap-1 text-[0.65rem] px-1.5 py-0.5 rounded-full bg-background/50 text-foreground">
                                        <FileText className="h-2.5 w-2.5" />
                                        {feature}
                                      </div>
                                    ))}
                                  </div>
                                  
                                  {course.rating && (
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-1">
                                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs font-medium">{course.rating}</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 sm:py-20 bg-muted/20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
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

            {/* Testimonials Section */}
            <section className="py-12 sm:py-20 bg-muted/20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Parents Say</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Hear from parents whose children have achieved academic success with our programs.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                  {/* Testimonial 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-background p-6 rounded-xl shadow-lg border border-border/50"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                        SC
                      </div>
                      <div>
                        <h4 className="font-semibold">Sonal Chaturvedi</h4>
                        <p className="text-sm text-muted-foreground">Parent of Shaurya (90.4% in 12th)</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      "The Upscale Team's dedication and personalized attention helped my son Shaurya achieve 90.4% in his 12th board exams. Their teaching methodology and regular assessments made all the difference."
                    </p>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-12 sm:py-20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/5" />
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-3xl mx-auto"
                >
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
                    Ready to Start Your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                      Learning Journey?
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-10 leading-relaxed">
                    Join hundreds of successful students who have achieved their academic goals with personalized attention, expert guidance, and proven teaching methods.
                  </p>
                  <motion.a
                    href="/#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl group">
                      Enroll Now
                      <TrendingUp className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.a>
                </motion.div>
              </div>
            </section>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
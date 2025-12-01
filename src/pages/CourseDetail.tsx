import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data - in a real app, this would come from an API
const courses = {
  1: {
    id: 1,
    title: "Mathematics",
    description: "Master algebra, calculus, geometry, and problem-solving techniques with our expert faculty.",
    longDescription: "Our comprehensive mathematics program is designed to build a strong foundation in mathematical concepts while developing critical thinking and problem-solving skills. The course covers topics including algebra, geometry, trigonometry, and calculus, with a focus on real-world applications. Students will benefit from personalized attention, regular assessments, and doubt-clearing sessions to ensure thorough understanding.",
    duration: "12 months",
    level: "Class 8-12",
    price: "399",
    color: "from-blue-600 to-cyan-600",
    topics: [
      "Algebra and Equations",
      "Geometry and Trigonometry",
      "Calculus and Analysis",
      "Statistics and Probability",
      "Mathematical Reasoning"
    ],
    instructor: {
      name: "Dr. Rajesh Kumar",
      qualification: "Ph.D. in Mathematics, IIT Delhi",
      bio: "Dr. Rajesh Kumar is a distinguished educator with a passion for making complex mathematical concepts accessible to students. His innovative teaching methods have helped hundreds of students excel in competitive exams.",
      experience: "15+ years of teaching experience"
    },
    schedule: [
      { day: "Monday & Wednesday", time: "4:00 PM - 5:30 PM" },
      { day: "Saturday", time: "10:00 AM - 12:00 PM" }
    ],
    features: ["Live Classes", "Practice Tests", "Study Materials", "Doubt Sessions"]
  },
  2: {
    id: 2,
    title: "Physics",
    description: "Explore the laws of nature through practical experiments and conceptual understanding.",
    longDescription: "This course provides a deep dive into classical and modern physics. Students will explore mechanics, thermodynamics, electromagnetism, and quantum physics through interactive lectures and hands-on experiments. Our approach combines theoretical knowledge with practical applications to develop a comprehensive understanding of physical phenomena.",
    duration: "12 months",
    level: "Class 9-12",
    price: "349",
    color: "from-orange-600 to-red-600",
    topics: [
      "Mechanics",
      "Thermodynamics",
      "Electromagnetism",
      "Waves and Optics",
      "Modern Physics"
    ],
    instructor: {
      name: "Divyanshi Sharma",
      qualification: "M.Sc (Physics), B.Ed",
      bio: "Divyanshi makes Physics concepts clear with practical examples. Her teaching methodology focuses on connecting theoretical concepts with real-world applications.",
      experience: "6+ years of teaching experience"
    },
    schedule: [
      { day: "Tuesday & Thursday", time: "4:00 PM - 5:30 PM" },
      { day: "Saturday", time: "2:00 PM - 4:00 PM" }
    ],
    features: ["Lab Sessions", "Mock Tests", "Doubt Clearing", "Experiments"]
  },
  3: {
    id: 3,
    title: "Chemistry",
    description: "Learn organic, inorganic, and physical chemistry with hands-on laboratory practice.",
    longDescription: "Our chemistry course covers organic, inorganic, and physical chemistry. Students will gain practical laboratory skills and theoretical knowledge to understand the molecular world around us. The curriculum emphasizes hands-on experiments, visual learning, and problem-solving techniques to make chemistry engaging and understandable.",
    duration: "12 months",
    level: "Class 9-12",
    price: "399",
    color: "from-emerald-600 to-green-600",
    topics: [
      "Atomic Structure",
      "Chemical Bonding",
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Physical Chemistry"
    ],
    instructor: {
      name: "Priyanshi Sharma",
      qualification: "M.Sc (Chemistry), B.Ed",
      bio: "Priyanshi specializes in making Chemistry fun and engaging for students. Her approach combines visual learning with practical demonstrations to help students understand complex chemical concepts.",
      experience: "5+ years of teaching experience"
    },
    schedule: [
      { day: "Monday & Friday", time: "3:00 PM - 4:30 PM" },
      { day: "Sunday", time: "11:00 AM - 1:00 PM" }
    ],
    features: ["Practical Classes", "Assignments", "Weekly Tests", "Lab Work"]
  },
  4: {
    id: 4,
    title: "Biology",
    description: "Discover life sciences from cell biology to ecology with comprehensive study materials.",
    longDescription: "This comprehensive biology course covers cell biology, genetics, evolution, and ecology. Students will conduct experiments and research projects to understand living organisms and their interactions. The program emphasizes visual learning, diagram interpretation, and specimen study to develop a deep understanding of biological concepts.",
    duration: "12 months",
    level: "Class 9-12",
    price: "299",
    color: "from-teal-600 to-cyan-600",
    topics: [
      "Cell Biology",
      "Genetics",
      "Evolution",
      "Ecology",
      "Human Physiology"
    ],
    instructor: {
      name: "Anjali Sharma",
      qualification: "MA (English), B.Ed",
      bio: "Anjali specializes in communication skills and literature analysis. Her interdisciplinary approach helps students understand the connections between biology and other subjects.",
      experience: "7+ years of teaching experience"
    },
    schedule: [
      { day: "Wednesday & Friday", time: "3:00 PM - 4:30 PM" },
      { day: "Sunday", time: "2:00 PM - 4:00 PM" }
    ],
    features: ["Visual Learning", "Diagrams", "Specimen Study", "Field Trips"]
  },
  5: {
    id: 5,
    title: "Computer Science",
    description: "Learn programming, algorithms, and computational thinking for the digital age.",
    longDescription: "Our computer science program covers programming fundamentals, algorithms, data structures, and software development. Students will work on real-world projects and build a portfolio of work. The curriculum includes both theoretical concepts and hands-on coding practice to prepare students for future careers in technology.",
    duration: "12 months",
    level: "Class 9-12",
    price: "499",
    color: "from-sky-600 to-blue-600",
    topics: [
      "Programming Fundamentals",
      "Data Structures",
      "Algorithms",
      "Web Development",
      "Database Management"
    ],
    instructor: {
      name: "Mrs. Sunita Reddy",
      qualification: "M.Tech in Computer Science",
      bio: "Mrs. Sunita Reddy combines industry experience with academic excellence, preparing students for both examinations and real-world applications. Her modern teaching methods incorporate the latest technology trends.",
      experience: "10+ years of teaching experience"
    },
    schedule: [
      { day: "Tuesday & Thursday", time: "3:00 PM - 5:00 PM" },
      { day: "Saturday", time: "11:00 AM - 1:00 PM" }
    ],
    features: ["Coding Labs", "Projects", "Algorithm Training", "Hackathons"]
  },
  6: {
    id: 6,
    title: "English",
    description: "Enhance grammar, literature analysis, and communication skills for academic excellence.",
    longDescription: "This course examines major works of English literature from different periods and genres. Students will develop critical reading, analysis, and writing skills while exploring diverse literary traditions. The program focuses on improving communication skills, creative writing, and literary appreciation to build confident and articulate learners.",
    duration: "10 months",
    level: "Class 6-12",
    price: "349",
    color: "from-rose-600 to-pink-600",
    topics: [
      "Grammar and Composition",
      "Literature Analysis",
      "Creative Writing",
      "Communication Skills",
      "Public Speaking"
    ],
    instructor: {
      name: "Anjali Sharma",
      qualification: "MA (English), B.Ed",
      bio: "Anjali specializes in communication skills and literature analysis. Her student-centric approach ensures every learner grasps fundamental concepts while developing a love for literature.",
      experience: "7+ years of teaching experience"
    },
    schedule: [
      { day: "Monday & Wednesday", time: "2:00 PM - 3:30 PM" },
      { day: "Friday", time: "4:00 PM - 5:30 PM" }
    ],
    features: ["Speaking Practice", "Writing Skills", "Literature", "Debates"]
  },
  7: {
    id: 7,
    title: "Competitive Exams",
    description: "Specialized coaching for JEE, NEET, and other competitive entrance examinations.",
    longDescription: "Our specialized coaching program for competitive exams like JEE and NEET provides intensive preparation with expert faculty, comprehensive study materials, and regular mock tests. The program focuses on exam strategies, time management, and subject-specific problem-solving techniques to maximize student performance.",
    duration: "24 months",
    level: "Class 11-12",
    price: "799",
    color: "from-amber-600 to-orange-600",
    topics: [
      "JEE Main & Advanced Preparation",
      "NEET Preparation",
      "Mock Tests & Analysis",
      "Exam Strategies",
      "Doubt Clearing Sessions"
    ],
    instructor: {
      name: "Dr. Nidhi Shukla",
      qualification: "Ph.D. in Education",
      bio: "As the founder and director, Dr. Shukla brings over 15 years of experience in competitive exam preparation. Her strategic approach and personalized mentoring have helped hundreds of students achieve their dream scores.",
      experience: "15+ years of teaching experience"
    },
    schedule: [
      { day: "Monday to Saturday", time: "5:00 PM - 7:00 PM" },
      { day: "Sunday", time: "10:00 AM - 1:00 PM" }
    ],
    features: ["Mock Tests", "Expert Faculty", "Study Plans", "Mentorship"]
  },
  8: {
    id: 8,
    title: "Commerce",
    description: "Comprehensive understanding of accounts, economics, and business studies.",
    longDescription: "Our comprehensive commerce program covers all major subjects including Accounts, Business Studies, and Economics. Students will gain practical knowledge of financial concepts, business operations, and economic principles. The curriculum emphasizes real-world applications, case studies, and analytical thinking to prepare students for commerce-related careers.",
    duration: "12 months",
    level: "Class 11-12",
    price: "399",
    color: "from-slate-600 to-zinc-600",
    topics: [
      "Accountancy Fundamentals",
      "Business Studies",
      "Economics Principles",
      "Financial Analysis",
      "Entrepreneurship"
    ],
    instructor: {
      name: "Shweta Sharma",
      qualification: "M.Com, B.Ed",
      bio: "Shweta brings practical business experience into classroom teaching, making commerce concepts relatable and understandable. Her approach combines theoretical knowledge with real-world business scenarios.",
      experience: "8+ years of teaching experience"
    },
    schedule: [
      { day: "Tuesday & Thursday", time: "2:00 PM - 3:30 PM" },
      { day: "Saturday", time: "3:00 PM - 5:00 PM" }
    ],
    features: ["Case Studies", "Live Markets", "Accounting", "Finance Basics"]
  }
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const courseId = id ? parseInt(id, 10) : null;
  const course = courseId && courses[courseId as keyof typeof courses] 
    ? courses[courseId as keyof typeof courses] 
    : null;

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Course Not Found</h1>
          <Link 
            to="/courses" 
            className="text-orange-500 hover:underline text-lg"
          >
            ← Back to All Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Course Header */}
      <div className={`bg-gradient-to-r ${course.color} text-white py-16`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/courses" 
              className="inline-flex items-center text-white hover:underline mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Courses
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl max-w-3xl">{course.description}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <span className="bg-black bg-opacity-20 px-4 py-2 rounded-full">
                {course.duration} Course
              </span>
              <span className="bg-black bg-opacity-20 px-4 py-2 rounded-full">
                {course.level}
              </span>
              <span className="bg-black bg-opacity-20 px-4 py-2 rounded-full">
                ${course.price}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Course</h2>
              <p className="text-muted-foreground mb-6">{course.longDescription || course.description}</p>
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">What You'll Learn</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {course.topics?.map((topic, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className={`h-5 w-5 text-transparent bg-clip-text bg-gradient-to-r ${course.color} mr-3 mt-0.5 flex-shrink-0`} />
                    <span className="text-muted-foreground">{topic}</span>
                  </li>
                )) || (
                  <li className="text-muted-foreground">Course content details coming soon.</li>
                )}
              </ul>

              {course.schedule && (
                <div>
                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Schedule</h3>
                  <div className="space-y-3">
                    {course.schedule.map((session, index) => (
                      <div key={index} className="flex items-center bg-muted/50 p-4 rounded-lg border border-border/50">
                        <div className="mr-4 text-center">
                          <div className="font-semibold text-foreground">{session.day}</div>
                          <div className="text-sm text-muted-foreground">{session.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {course.features && (
                <div>
                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Course Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                        <Star className={`h-4 w-4 text-transparent bg-clip-text bg-gradient-to-r ${course.color}`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {course.instructor && (
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">About the Instructor</h3>
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center flex-shrink-0 border-2 border-primary/20">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{course.instructor.name}</h4>
                    <p className={`font-medium mb-2 bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}>{course.instructor.qualification}</p>
                    <p className="text-muted-foreground mb-2">{course.instructor.experience}</p>
                    <p className="text-muted-foreground">{course.instructor.bio}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 sticky top-6 border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Course Details</h3>
              
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-muted-foreground">Price</h4>
                  <p className="text-2xl font-bold text-foreground">${course.price}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-muted-foreground">Duration</h4>
                  <p className="text-foreground">{course.duration}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-muted-foreground">Level</h4>
                  <p className="text-foreground">{course.level}</p>
                </div>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 transition-opacity shadow-md text-white`}
                >
                  Enroll Now
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-2"
                >
                  Add to Wishlist
                </Button>
                
                <div className="pt-4 mt-4 border-t border-border/50">
                  <h4 className="font-semibold text-muted-foreground mb-2">Have questions?</h4>
                  <p className="text-sm text-muted-foreground mb-4">Contact our support team for assistance.</p>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5">
                    Contact Support
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

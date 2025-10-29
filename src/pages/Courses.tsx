import { motion } from "framer-motion";
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
    </div>
  );
};

export default Courses;

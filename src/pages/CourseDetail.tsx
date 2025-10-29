import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// Mock data - in a real app, this would come from an API
const courses = {
  1: {
    id: 1,
    title: "Mathematics",
    description: "Master mathematical concepts with our expert tutors. From basic arithmetic to advanced calculus, we've got you covered.",
    longDescription: "Our comprehensive mathematics program is designed to build a strong foundation in mathematical concepts while developing critical thinking and problem-solving skills. The course covers topics including algebra, geometry, trigonometry, and calculus, with a focus on real-world applications.",
    duration: "12 weeks",
    level: "All Levels",
    price: "399",
    color: "bg-orange-500",
    topics: [
      "Algebra and Equations",
      "Geometry and Trigonometry",
      "Calculus and Analysis",
      "Statistics and Probability",
      "Mathematical Reasoning"
    ],
    instructor: {
      name: "Dr. Sarah Johnson",
      qualification: "PhD in Mathematics, 10+ years of teaching experience",
      bio: "Dr. Johnson has been inspiring students to love mathematics for over a decade. Her research focuses on applied mathematics in engineering."
    },
    schedule: [
      { day: "Monday & Wednesday", time: "4:00 PM - 5:30 PM" },
      { day: "Saturday", time: "10:00 AM - 12:00 PM" }
    ]
  },
  // Add other courses with similar structure
  2: {
    id: 2,
    title: "Physics",
    description: "Explore the fundamental principles of physics through practical experiments and problem-solving sessions.",
    longDescription: "This course provides a deep dive into classical and modern physics. Students will explore mechanics, thermodynamics, electromagnetism, and quantum physics through interactive lectures and hands-on experiments.",
    duration: "10 weeks",
    level: "Intermediate",
    price: "349",
    color: "bg-yellow-500"
  },
  3: {
    id: 3,
    title: "Chemistry",
    description: "Dive into the world of atoms, molecules, and chemical reactions with our comprehensive chemistry program.",
    longDescription: "Our chemistry course covers organic, inorganic, and physical chemistry. Students will gain practical laboratory skills and theoretical knowledge to understand the molecular world around us.",
    duration: "12 weeks",
    level: "All Levels",
    price: "399",
    color: "bg-orange-600"
  },
  4: {
    id: 4,
    title: "Biology",
    description: "Discover the wonders of life sciences through engaging lessons and hands-on laboratory work.",
    longDescription: "This comprehensive biology course covers cell biology, genetics, evolution, and ecology. Students will conduct experiments and research projects to understand living organisms and their interactions.",
    duration: "8 weeks",
    level: "Beginner",
    price: "299",
    color: "bg-yellow-600"
  },
  5: {
    id: 5,
    title: "Computer Science",
    description: "Learn programming, algorithms, and data structures from industry experts.",
    longDescription: "Our computer science program covers programming fundamentals, algorithms, data structures, and software development. Students will work on real-world projects and build a portfolio of work.",
    duration: "16 weeks",
    level: "Advanced",
    price: "499",
    color: "bg-orange-500"
  },
  6: {
    id: 6,
    title: "English Literature",
    description: "Explore classic and contemporary literature while improving your analytical and writing skills.",
    longDescription: "This course examines major works of English literature from different periods and genres. Students will develop critical reading, analysis, and writing skills while exploring diverse literary traditions.",
    duration: "10 weeks",
    level: "All Levels",
    price: "349",
    color: "bg-yellow-500"
  }
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses[id as keyof typeof courses];

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
    <div className="min-h-screen bg-white">
      {/* Course Header */}
      <div className={`${course.color} text-white py-16`}>
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
              className="bg-white rounded-lg shadow-md p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-black mb-4">About This Course</h2>
              <p className="text-gray-700 mb-6">{course.longDescription || course.description}</p>
              
              <h3 className="text-xl font-semibold text-black mt-8 mb-4">What You'll Learn</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                {course.topics?.map((topic, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{topic}</span>
                  </li>
                )) || (
                  <li className="text-gray-500">Course content details coming soon.</li>
                )}
              </ul>

              {course.schedule && (
                <div>
                  <h3 className="text-xl font-semibold text-black mt-8 mb-4">Schedule</h3>
                  <div className="space-y-2">
                    {course.schedule.map((session, index) => (
                      <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                        <div className="mr-4 text-center">
                          <div className="font-semibold text-gray-800">{session.day}</div>
                          <div className="text-sm text-gray-600">{session.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {course.instructor && (
              <motion.div 
                className="bg-gray-50 rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-black mb-6">About the Instructor</h3>
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-gray-300 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-black">{course.instructor.name}</h4>
                    <p className="text-orange-600 font-medium mb-2">{course.instructor.qualification}</p>
                    <p className="text-gray-700">{course.instructor.bio}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <motion.div 
              className="bg-gray-50 rounded-lg p-6 sticky top-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-black mb-6">Course Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Price</h4>
                  <p className="text-2xl font-bold text-black">${course.price}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700">Duration</h4>
                  <p className="text-black">{course.duration}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700">Level</h4>
                  <p className="text-black">{course.level}</p>
                </div>
                
                <button 
                  className="w-full bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                  Enroll Now
                </button>
                
                <button 
                  className="w-full border-2 border-black text-black py-3 px-6 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Add to Wishlist
                </button>
                
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-700 mb-2">Have questions?</h4>
                  <p className="text-sm text-gray-600 mb-4">Contact our support team for assistance.</p>
                  <button className="text-orange-600 hover:underline text-sm font-medium">
                    Contact Support
                  </button>
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

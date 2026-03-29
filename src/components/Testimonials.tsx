import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 sm:py-16 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            What Our <span className="text-orange-600">Students Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Hear from our students about their learning journey and achievements with Upscale Academy.
          </p>
        </motion.div>

        {/* Video Testimonial */}
        <div className="mb-8 sm:mb-10">
          <Card className="overflow-hidden border border-orange-100 dark:border-orange-900/30">
            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                  >
                    <source src="/videos/Testimony Video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="md:w-1/2 p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Student Success Story</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  "Upscale Academy transformed my learning experience. The personalized attention and expert guidance helped me achieve my dream scores in the board exams."
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-300 text-sm">
                    P
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Student Name</h4>
                    <p className="text-xs sm:text-sm text-orange-600 dark:text-orange-400">Class X, All Subjects</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-3">q
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                  <span className="ml-1.5 text-xs text-gray-600 dark:text-gray-300">4.9/5</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-white dark:bg-gray-800 border border-orange-100 dark:border-orange-900/30">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 italic text-sm sm:text-base">
                  "[Testimonial text will go here. This is a placeholder for student feedback.]"
                </p>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-300 text-xs sm:text-sm">
                    {String.fromCharCode(64 + item)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Student Name</h4>
                    <p className="text-xs sm:text-sm text-orange-600 dark:text-orange-400">Class X, Science</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <button className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors text-sm sm:text-base">
            Read More Testimonials
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-2 xs:grid-cols-4 gap-3 sm:gap-4 text-center">
          {[
            { value: '98%', label: 'Success Rate' },
            { value: '500+', label: 'Students Enrolled' },
            { value: '50+', label: 'Expert Faculty' },
            { value: '4.9/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <div key={index} className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xl sm:text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">{stat.value}</p>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
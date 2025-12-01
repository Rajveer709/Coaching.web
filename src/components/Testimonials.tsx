import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote, ArrowRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-orange-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Why <span className="text-orange-600">Students Love Us</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm">
            Hear what our students have to say about their learning experience with us
          </p>
        </div>

        {/* Video Testimonial */}
        <div className="mb-10">
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
              <div className="md:w-1/2 p-5">
                <h3 className="text-lg font-bold mb-2">Video Testimonial</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  "Upscale Tuition transformed my learning experience. The personalized attention and expert guidance helped me achieve my dream scores in the board exams."
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-300 text-sm">
                    P
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Priya Sharma</h4>
                    <p className="text-xs text-orange-600 dark:text-orange-400">Class XII, Science Stream</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                  <span className="ml-1.5 text-xs text-gray-600 dark:text-gray-300">4.9/5</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="group hover:shadow-lg transition-all duration-300 border border-orange-100 dark:border-orange-900/30">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-1.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-orange-400 opacity-20" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-3 italic text-sm">
                  "[Testimonial text will go here. This is a placeholder for student feedback.]"
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-300 text-sm">
                    {String.fromCharCode(64 + item)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Student Name</h4>
                    <p className="text-xs text-orange-600 dark:text-orange-400">Class X, Science</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors text-sm">
            Read More Testimonials
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: '98%', label: 'Success Rate' },
            { value: '500+', label: 'Students Enrolled' },
            { value: '50+', label: 'Expert Faculty' },
            { value: '4.9/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1.5">{stat.value}</p>
              <p className="text-gray-600 dark:text-gray-300 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
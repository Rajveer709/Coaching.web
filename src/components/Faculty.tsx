import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, GraduationCap } from 'lucide-react';
import ajayPandey from '@/assets/Ajay Pandey Sir.jpg';
import nileshSharma from '@/assets/Nilesh Sharma Sir.jpg';
import amberArora from '@/assets/Amber Arora Sir.jpg';
import teacher5 from '@/assets/WhatsApp Image 2026-03-07 at 3.22.46 PM.jpeg';
import teacher6 from '@/assets/WhatsApp Image 2026-03-07 at 3.22.46 PM (1).jpeg';
import teacher7 from '@/assets/WhatsApp Image 2026-03-07 at 3.22.47 PM.jpeg';
import teacher8 from '@/assets/WhatsApp Image 2026-03-07 at 3.22.47 PM (1).jpeg';

const Faculty = () => {
  // Faculty data - 8 teachers total
  const faculties = [
    {
      id: "1",
      name: "Ajay Pandey Sir",
      subject: "Physics Expert",
      experience: "30 years teaching experience",
      qualification: "M.Sc Physics, MCA, B.Ed.",
      image: ajayPandey,
      institutions: "Taught in St. Xavier, Sathya Sai Indore"
    },
    {
      id: "3",
      name: "Nilesh Sharma Sir",
      subject: "Science Expert",
      experience: "Currently teaching in DPS",
      qualification: "Science Faculty",
      image: nileshSharma,
      institutions: "Currently teaching in DPS, Rau"
    },
    {
      id: "4",
      name: "Amber Arora Sir",
      subject: "Commerce Expert",
      experience: "12 Years, Evaluator with CBSE Board",
      qualification: "MBA - Finance & HR, CS Foundation & CS Executive Group -1, Bcom (Taxation)",
      image: amberArora,
      institutions: "Currently Working as HOD-Commerce, DPS, Rau"
    },
    {
      id: "5",
      name: "Senior Faculty",
      subject: "Expert Educator",
      experience: "20+ years teaching experience",
      qualification: "M.A., B.Ed.",
      image: teacher5,
      institutions: "Renowned institutions across India"
    },
    {
      id: "6",
      name: "Expert Teacher",
      subject: "Academic Specialist",
      experience: "18 years teaching experience",
      qualification: "M.Sc., M.Ed.",
      image: teacher6,
      institutions: "Leading educational institutions"
    },
    {
      id: "7",
      name: "Education Mentor",
      subject: "Subject Matter Expert",
      experience: "15 years teaching experience",
      qualification: "M.Com., B.Ed.",
      image: teacher7,
      institutions: "Premier schools and colleges"
    },
    {
      id: "8",
      name: "Academic Guide",
      subject: "Learning Specialist",
      experience: "12 years teaching experience",
      qualification: "M.A. Education",
      image: teacher8,
      institutions: "Top-tier educational centers"
    }
  ];

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800" id="faculty">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Meet Our <span className="text-orange-600">Expert Faculty</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-xs sm:text-sm">
            Our team of 8+ experienced educators is dedicated to providing the best learning experience with expertise across various subjects
          </p>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {faculties.map((faculty, index) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl border border-orange-100 dark:border-orange-900/30 h-full cursor-pointer"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-2 xs:p-2.5">
                    <div className="space-y-1">
                      <div className="flex items-center text-white text-[0.6rem] xs:text-[0.65rem]">
                        <BookOpen className="h-2.5 w-2.5 xs:h-3 xs:w-3 mr-1 text-orange-300" />
                        {faculty.qualification}
                      </div>
                      {faculty.institutions && (
                        <div className="text-white text-[0.5rem] xs:text-[0.55rem]">
                          {faculty.institutions}
                        </div>
                      )}
                    </div>
                  </div>
                  {faculty.image ? (
                    <div className="w-full aspect-square">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-square bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                      <GraduationCap className="h-8 xs:h-10 w-8 xs:w-10 text-white" />
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-1.5 xs:pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-sm xs:text-base">{faculty.name}</CardTitle>
                      <Badge className="mt-1 bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50 text-[0.6rem] xs:text-[0.65rem]">
                        {faculty.subject}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-2 xs:pb-2.5">
                  <div className="flex items-center text-[0.6rem] xs:text-[0.65rem] text-gray-600 dark:text-gray-300 mb-1">
                    <GraduationCap className="h-2.5 w-2.5 xs:h-3 xs:w-3 mr-1 text-orange-500" />
                    {faculty.experience}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
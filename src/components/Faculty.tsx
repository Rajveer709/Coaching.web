import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, GraduationCap } from 'lucide-react';
import ajayPandey from '@/assets/Ajay Pandey Sir.jpg';
import kamleshSatani from '@/assets/Kamlesh Satani Sir.jpg';
import nileshSharma from '@/assets/Nilesh Sharma Sir.jpg';

const Faculty = () => {
  // Faculty data - first one is Ajay Pandey Sir, second is Kamlesh Satani Sir, third is Nilesh Sharma Sir, fourth is placeholder
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
      id: "2",
      name: "Kamlesh Satani Sir",
      subject: "Mathematics Expert",
      experience: "15 years teaching experience",
      qualification: "M.Sc. Mathematics, B.Ed.",
      image: kamleshSatani,
      institutions: "Taught in D.P.S. Nepania Indore, Agarwal Public School Indore"
    },
    {
      id: "3",
      name: "Nilesh Sharma Sir",
      subject: "Science Expert",
      experience: "Currently teaching in DPS",
      qualification: "Science Faculty",
      image: nileshSharma,
      institutions: "Upscale Academy, 3rd floor, Samar Park, Next to Apollo DB City, Gate no. 3, Nipania"
    },
    {
      id: "4",
      name: "Our Expert Faculty",
      subject: "Experienced Educators",
      experience: "Click to learn more about our teaching team",
      qualification: "Highly Qualified Professionals"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800" id="faculty">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
            Meet Our <span className="text-orange-600">Expert Faculty</span>
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md mx-auto text-xs">
            Our team of experienced educators is dedicated to providing the best learning experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {faculties.map((faculty, index) => (
            <div 
              className="block"
              key={faculty.id}
            >
              <Card 
                className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-orange-100 dark:border-orange-900/30"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-2">
                    <div className="space-y-1">
                      <div className="flex items-center text-white text-[0.6rem]">
                        <BookOpen className="h-2.5 w-2.5 mr-1 text-orange-300" />
                        {faculty.qualification}
                      </div>
                      {faculty.institutions && (
                        <div className="text-white text-[0.55rem]">
                          {faculty.institutions}
                        </div>
                      )}
                    </div>
                  </div>
                  {faculty.image ? (
                    <div className="w-full aspect-[3/4]">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xs">{faculty.name}</CardTitle>
                      <Badge className="mt-1 bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50 text-[0.55rem]">
                        {faculty.subject}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-1.5">
                  <div className="flex items-center text-[0.55rem] text-gray-600 dark:text-gray-300 mb-1">
                    <GraduationCap className="h-2.5 w-2.5 mr-1 text-orange-500" />
                    {faculty.experience}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
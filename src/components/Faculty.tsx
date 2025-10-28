import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";
import faculty4 from "@/assets/faculty-4.jpg";
import { GraduationCap } from "lucide-react";

const Faculty = () => {
  const facultyMembers = [
    {
      id: "1",
      name: "Dr. Rajesh Kumar",
      subject: "Mathematics & Physics",
      qualification: "Ph.D. in Mathematics, IIT Delhi",
      experience: "15+ years of teaching experience",
      image: faculty1,
    },
    {
      id: "2",
      name: "Prof. Priya Sharma",
      subject: "Chemistry & Biology",
      qualification: "M.Sc. in Chemistry, Delhi University",
      experience: "12+ years of teaching experience",
      image: faculty2,
    },
    {
      id: "3",
      name: "Dr. Anil Verma",
      subject: "English & Social Science",
      qualification: "Ph.D. in English Literature",
      experience: "18+ years of teaching experience",
      image: faculty3,
    },
    {
      id: "4",
      name: "Mrs. Sunita Reddy",
      subject: "Computer Science",
      qualification: "M.Tech in Computer Science",
      experience: "10+ years of teaching experience",
      image: faculty4,
    },
  ];

  return (
    <section id="faculty" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <GraduationCap className="h-4 w-4" />
            <span className="text-sm font-medium">Expert Educators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Meet Our <span className="text-primary">Faculty</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Learn from the best. Our experienced educators are passionate about student success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {facultyMembers.map((member, index) => (
            <Link 
              key={index}
              to={`/faculty/${member.id}`}
              className="block"
            >
              <Card 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 group cursor-pointer"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-secondary-foreground font-semibold text-lg">View Profile</span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.subject}</p>
                  <p className="text-sm text-muted-foreground">{member.qualification}</p>
                  <p className="text-sm text-muted-foreground font-medium">{member.experience}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;

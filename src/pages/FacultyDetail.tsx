import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, Award, BookOpen, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";
import faculty4 from "@/assets/faculty-4.jpg";
import ajayPandey from "@/assets/Ajay Pandey Sir.jpg";
import kamleshSatani from "@/assets/Kamlesh Satani Sir.jpg";

const FacultyDetail = () => {
  const { id } = useParams();

  const facultyData = {
    "1": {
      name: "Ajay Pandey Sir",
      subject: "Physics Expert",
      qualification: "M.Sc Physics, MCA, B.Ed.",
      experience: "30 years teaching experience",
      image: ajayPandey,
      bio: "Ajay Pandey Sir is a distinguished physics educator with over three decades of teaching experience. He has taught at prestigious institutions including St. Xavier and Sathya Sai Indore, helping countless students excel in their academic pursuits.",
      specializations: ["Physics", "Problem Solving", "Exam Preparation", "Conceptual Clarity"],
      achievements: [
        "30+ years of exceptional teaching career",
        "Taught at St. Xavier and Sathya Sai Indore",
        "Consistently high student performance rates",
        "Recognized for innovative teaching methodologies"
      ],
      education: [
        "M.Sc Physics",
        "MCA (Master of Computer Applications)",
        "B.Ed. (Bachelor of Education)"
      ],
      institutions: "Taught in St. Xavier, Sathya Sai Indore"
    },
    "2": {
      name: "Kamlesh Satani Sir",
      subject: "Mathematics Expert",
      qualification: "M.Sc. Mathematics, B.Ed.",
      experience: "15 years teaching experience",
      image: kamleshSatani,
      bio: "Kamlesh Satani Sir is an accomplished mathematics educator with extensive experience in making complex mathematical concepts understandable and engaging for students. His teaching methodology focuses on building strong foundational knowledge while fostering problem-solving skills.",
      specializations: ["Mathematics", "Algebra", "Calculus", "Exam Preparation"],
      achievements: [
        "15+ years of dedicated teaching career",
        "Taught at D.P.S. Nepania Indore and Agarwal Public School Indore",
        "Consistently high student performance in board examinations",
        "Recognized for innovative teaching approaches"
      ],
      education: [
        "M.Sc. Mathematics",
        "B.Ed. (Bachelor of Education)"
      ],
      institutions: "Taught in D.P.S. Nepania Indore, Agarwal Public School Indore"
    },
    "3": {
      name: "Dr. Rajesh Kumar",
      subject: "Mathematics & Physics",
      qualification: "Ph.D. in Mathematics, IIT Delhi",
      experience: "15+ years of teaching experience",
      image: faculty1,
      bio: "Dr. Rajesh Kumar is a distinguished educator with a passion for making complex mathematical concepts accessible to students. His innovative teaching methods have helped hundreds of students excel in competitive exams.",
      specializations: ["Advanced Mathematics", "Physics", "IIT-JEE Preparation", "Olympiad Training"],
      achievements: [
        "100% success rate in Board Examinations",
        "50+ students in top engineering colleges",
        "Published research in mathematical education",
        "National Award for Excellence in Teaching"
      ],
      education: [
        "Ph.D. in Mathematics - IIT Delhi",
        "M.Sc. in Applied Mathematics - Delhi University",
        "B.Sc. in Mathematics - St. Stephen's College"
      ],
      institutions: ""
    },
    "4": {
      name: "Prof. Priya Sharma",
      subject: "Chemistry & Biology",
      qualification: "M.Sc. in Chemistry, Delhi University",
      experience: "12+ years of teaching experience",
      image: faculty2,
      bio: "Prof. Priya Sharma brings practical laboratory experience into classroom teaching, making science come alive for her students. Her student-centric approach ensures every learner grasps fundamental concepts.",
      specializations: ["Organic Chemistry", "Biology", "NEET Preparation", "Laboratory Techniques"],
      achievements: [
        "95% success rate in Medical entrance exams",
        "30+ students in premier medical colleges",
        "Innovative lab methodology pioneer",
        "State Science Teacher Award"
      ],
      education: [
        "M.Sc. in Chemistry - Delhi University",
        "B.Sc. in Chemistry - Miranda House",
        "Advanced Certification in Science Education"
      ],
      institutions: ""
    }
  };

  const faculty = facultyData[id as keyof typeof facultyData];

  if (!faculty) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Faculty member not found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/#faculty">
            <Button variant="ghost" className="mb-6 hover:bg-muted">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Faculty
            </Button>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Profile Card */}
            <Card className="lg:col-span-1 overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full aspect-square object-cover"
              />
              <div className="p-6 space-y-4">
                <div>
                  <h1 className="text-2xl font-bold mb-2">{faculty.name}</h1>
                  <p className="text-primary font-medium text-lg">{faculty.subject}</p>
                  <p className="text-muted-foreground mt-2">{faculty.qualification}</p>
                  <p className="text-muted-foreground font-medium mt-1">{faculty.experience}</p>
                  {faculty.institutions && (
                    <p className="text-muted-foreground text-sm mt-2">{faculty.institutions}</p>
                  )}
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Contact Faculty
                </Button>
              </div>
            </Card>

            {/* Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Bio */}
              <Card className="p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  About
                </h2>
                <p className="text-muted-foreground leading-relaxed">{faculty.bio}</p>
              </Card>

              {/* Specializations */}
              <Card className="p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Specializations
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {faculty.specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-muted rounded-lg"
                    >
                      <Star className="h-4 w-4 text-yellow flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Achievements */}
              <Card className="p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Achievements
                </h2>
                <ul className="space-y-3">
                  {faculty.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Education */}
              <Card className="p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education
                </h2>
                <ul className="space-y-3">
                  {faculty.education.map((edu, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{edu}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FacultyDetail;
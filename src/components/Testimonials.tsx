import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import student4 from "@/assets/student-4.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ananya Patel",
      grade: "Class 12, Science",
      image: student1,
      rating: 5,
      text: "Upscale Tuition transformed my understanding of Physics and Mathematics. The teachers are incredibly patient and make complex topics easy to grasp. I scored 95% in my boards!",
    },
    {
      name: "Rohan Sharma",
      grade: "Class 10, All Subjects",
      image: student2,
      rating: 5,
      text: "The personalized attention I received here is unmatched. Every doubt was cleared, and the faculty genuinely cares about student success. Best decision for my academics!",
    },
    {
      name: "Priya Desai",
      grade: "Class 11, Commerce",
      image: student3,
      rating: 5,
      text: "What I love most is how the teachers connect with students. They don't just teach subjects, they build confidence. My grades improved dramatically within months!",
    },
    {
      name: "Arjun Reddy",
      grade: "Class 12, Computer Science",
      image: student4,
      rating: 5,
      text: "The modern teaching methods and real-world applications made learning exciting. Mrs. Sunita's coding classes prepared me perfectly for college entrance exams!",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow/20 text-primary border border-yellow/30 mb-4">
            <Star className="h-4 w-4 fill-yellow text-yellow" />
            <span className="text-sm font-medium">Student Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Why Students <span className="text-primary">Love Us</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Don't just take our word for it. Hear from our successful students who achieved their academic goals with us.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 relative overflow-hidden group"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-12 w-12 text-primary" />
              </div>

              <div className="relative space-y-4">
                {/* Student Image */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.grade}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-yellow text-yellow" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 sm:mt-16">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">98%</p>
            <p className="text-sm text-muted-foreground">Student Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-sm text-muted-foreground">Happy Students</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">95%</p>
            <p className="text-sm text-muted-foreground">Pass Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">4.9/5</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

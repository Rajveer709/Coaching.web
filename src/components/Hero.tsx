import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Award className="h-4 w-4" />
                <span className="text-sm font-medium">Excellence in Education</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Connecting Students to{" "}
              <span className="text-primary">Excellence</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              At Upscale Tuition, we empower students to achieve their academic dreams through personalized learning, expert faculty, and innovative teaching methods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg"
                onClick={scrollToContact}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-lg border-primary/20 hover:bg-primary/5"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <BookOpen className="h-5 w-5" />
                  <p className="text-2xl font-bold">15+</p>
                </div>
                <p className="text-sm text-muted-foreground">Courses</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="h-5 w-5" />
                  <p className="text-2xl font-bold">500+</p>
                </div>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Award className="h-5 w-5" />
                  <p className="text-2xl font-bold">98%</p>
                </div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

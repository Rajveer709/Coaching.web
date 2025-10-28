import { Card } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Focused Learning",
      description: "Personalized attention and customized study plans for every student's unique needs.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Methods",
      description: "Modern teaching techniques combined with proven traditional approaches for optimal results.",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "We foster continuous improvement and help students unlock their full potential.",
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Building confidence and nurturing a genuine love for learning in every student.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Why Choose <span className="text-primary">Upscale</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            We are committed to transforming students into confident achievers through excellence in education and unwavering support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 sm:p-8 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactProps {
  id?: string;
}

const Contact = ({ id }: ContactProps) => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Upscale Academy, 3rd floor, Samar Park", "Next to Apollo DB City, Gate no. 3, Nipania"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 87706 96706", "+91 98264 34243"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["upscale.edu@gmail.com", "upscale.edu@gmail.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: 12:00 PM - 4:00 PM"],
    },
  ];

  return (
    <section id={id || "contact"} className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Have questions? We're here to help. Reach out to us and start your learning journey today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

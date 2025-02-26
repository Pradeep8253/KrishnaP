import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "It is a good place to purchase poultry maintenance products. In addition, they sell good quality plastic products such as chairs, etc.",
      name: "Nacharaju Raghavendra Rao",
      image: "img/testimonial-1.jpg",
      initials: "NR",
    },
    {
      id: 2,
      quote:
        "Good quality products at reasonable prices. One stop for all poultry equipment.",
      name: "Sri Vijayalakshmi",
      image: "img/testimonial-2.jpg",
      initials: "SV",
    },
    {
      id: 3,
      quote: "Best quality equipment at a reasonable price.",
      name: "Laxman Reguri",
      image: "img/testimonial-3.jpg",
      initials: "LR",
    },
    {
      id: 4,
      quote:
        "Super equipment manufacturers in Karimnagar. Good products and good service providers in Karimnagar. I am really very satisfied with their service.",
      name: "Srinivas",
      image: "img/testimonial-4.jpg",
      initials: "S",
    },
  ];

  return (
    <div className="bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Testimonials</p>
          <h2 className="text-4xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-background border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">
                  <Quote size={24} />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.quote}
                </p>
              </CardContent>
              <CardFooter className="border-t pt-4 pb-6 flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">
                    {testimonial.name}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

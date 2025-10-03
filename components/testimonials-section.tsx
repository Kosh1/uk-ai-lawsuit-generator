import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "London",
      rating: 5,
      text: "I needed a Letter Before Action for a contract dispute. The AI created a professional document in minutes. My client paid within a week!"
    },
    {
      name: "James R.",
      location: "Manchester",
      rating: 5,
      text: "Going through a divorce was stressful enough. This service helped me create the divorce petition quickly and accurately. Highly recommended."
    },
    {
      name: "Emma L.",
      location: "Birmingham",
      rating: 5,
      text: "My landlord was trying to keep my deposit unfairly. The AI helped me create a professional claim form. Got my money back in court!"
    },
    {
      name: "David K.",
      location: "Leeds",
      rating: 5,
      text: "I was owed £8,000 from a client who refused to pay. The Letter Before Action created by AI was so professional that they paid immediately."
    },
    {
      name: "Lisa P.",
      location: "Glasgow",
      rating: 5,
      text: "Employment dispute was resolved quickly with the help of this AI. Created all the necessary documents and won my case."
    },
    {
      name: "Michael T.",
      location: "Bristol",
      rating: 5,
      text: "Family law can be complex, but this AI made it simple. Created child arrangement documents that were accepted by the court."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Real stories from people who used our AI legal assistant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

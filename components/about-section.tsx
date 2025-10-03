import { Card, CardContent } from "@/components/ui/card";
import { Scale, Shield, Clock, Users } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Scale,
      title: "Legal Expertise",
      description: "Our AI is trained on thousands of UK legal cases and follows current legal standards."
    },
    {
      icon: Shield,
      title: "100% Confidential",
      description: "Your information is completely secure and confidential. We never share your data."
    },
    {
      icon: Clock,
      title: "Fast & Efficient",
      description: "Get professional legal documents in minutes, not days or weeks."
    },
    {
      icon: Users,
      title: "User-Friendly",
      description: "No legal knowledge required. Our AI guides you through the process in plain English."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About AI Legal Assistant UK
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We&apos;re revolutionizing legal assistance by making professional legal documents accessible to everyone in the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-4xl mx-auto p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We believe that everyone deserves access to professional legal assistance, regardless of their financial situation. 
                Our AI-powered platform makes it possible for anyone in the UK to create professional legal documents quickly, 
                affordably, and confidentially.                 Whether you&apos;re dealing with a contract dispute, family law matter, or employment issue, 
                we&apos;re here to help you protect your rights and resolve your legal matters efficiently.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

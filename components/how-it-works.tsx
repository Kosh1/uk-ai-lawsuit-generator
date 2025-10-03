import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, FileText, CheckCircle } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Describe your situation",
      description: "Tell our AI about your legal issue in simple words. No legal knowledge required."
    },
    {
      icon: FileText,
      title: "AI creates your document",
      description: "Our AI analyzes your case and creates a professional Letter Before Action or Claim Form."
    },
    {
      icon: CheckCircle,
      title: "Review and use",
      description: "Review your document, make any adjustments, and use it to resolve your legal matter."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get professional legal documents in just 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center p-6 border-2 hover:border-blue-500 transition-colors">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

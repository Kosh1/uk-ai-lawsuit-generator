import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export function ComparisonSection() {
  const features = [
    { feature: "Professional quality documents", ai: true, traditional: true },
    { feature: "Ready in 2 minutes", ai: true, traditional: false },
    { feature: "Completely free", ai: true, traditional: false },
    { feature: "Available 24/7", ai: true, traditional: false },
    { feature: "100% confidential", ai: true, traditional: true },
    { feature: "No legal knowledge required", ai: true, traditional: false },
    { feature: "Personal consultation", ai: false, traditional: true },
    { feature: "Complex case handling", ai: false, traditional: true }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI vs Traditional Legal Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See how our AI-powered service compares to traditional legal services
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="border-2 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-center">AI Legal Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {item.feature}
                    </span>
                    {item.ai ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-500 dark:border-blue-400 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              RECOMMENDED
            </div>
            <CardHeader>
              <CardTitle className="text-center">Best Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">Free</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">forever</div>
              </div>
              <div className="space-y-4">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {item.feature}
                    </span>
                    {item.ai ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-center">Traditional Solicitor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-600 dark:text-gray-400">£200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">per hour</div>
              </div>
              <div className="space-y-4">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {item.feature}
                    </span>
                    {item.traditional ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

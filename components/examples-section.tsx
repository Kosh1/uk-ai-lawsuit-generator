import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Briefcase, Home, CreditCard } from "lucide-react";

export function ExamplesSection() {
  const examples = [
    {
      icon: FileText,
      title: "Contract Disputes",
      description: "Breach of contract, unpaid invoices, service disputes",
      example: "My client owes me £5,000 for completed work but refuses to pay..."
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Divorce, child arrangements, financial settlements",
      example: "I want to divorce my spouse and arrange child contact..."
    },
    {
      icon: Briefcase,
      title: "Employment Issues",
      description: "Unfair dismissal, discrimination, unpaid wages",
      example: "I was unfairly dismissed after 5 years of service..."
    },
    {
      icon: Home,
      title: "Property Disputes",
      description: "Landlord-tenant issues, property damage, boundary disputes",
      example: "My tenant caused £3,000 damage and won't pay for repairs..."
    },
    {
      icon: CreditCard,
      title: "Debt Recovery",
      description: "Personal loans, business debts, unpaid invoices",
      example: "My friend borrowed £2,000 and won't pay it back..."
    }
  ];

  return (
    <section id="examples" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Legal Issues We Help With
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI can help you create professional legal documents for a wide range of legal issues
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <example.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {example.description}
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    &ldquo;{example.example}&rdquo;
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

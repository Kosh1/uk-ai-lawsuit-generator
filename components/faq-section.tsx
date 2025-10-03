import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Is this service confidential?",
      answer: "Yes, absolutely. Your conversations and documents are completely confidential. We don't share your information with anyone, and there's no mention of our service in the final documents."
    },
    {
      question: "How accurate are the legal documents?",
      answer: "Our AI is trained on thousands of UK legal cases and follows current legal standards. The documents are professionally structured and legally sound, but we always recommend reviewing them before use."
    },
    {
      question: "What types of legal documents can you create?",
      answer: "We can create Letter Before Action, Claim Forms, divorce petitions, employment tribunal claims, and many other UK legal documents. The AI adapts to your specific situation."
    },
    {
      question: "How long does it take to create a document?",
      answer: "Most documents are created in 2-5 minutes. The AI asks you a few questions about your situation and then generates a professional legal document tailored to your case."
    },
    {
      question: "Do I need legal knowledge to use this service?",
      answer: "No, you don't need any legal knowledge. The AI guides you through the process in plain English and creates professional documents based on your simple description of the situation."
    },
    {
      question: "What if I need help with a complex case?",
      answer: "For very complex cases, we recommend consulting with a qualified solicitor. Our AI is excellent for standard legal issues, but complex cases may require professional legal advice."
    },
    {
      question: "Can I edit the documents after they're created?",
      answer: "Yes, you can review and edit the documents before using them. The AI provides a complete document that you can customize to your specific needs."
    },
    {
      question: "Is this service legally binding?",
      answer: "The documents created are legally sound and can be used in UK courts. However, the effectiveness depends on the specific facts of your case and proper service of documents."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about our AI legal assistant
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <Card>
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <CardTitle className="text-left text-lg">
                    {faq.question}
                  </CardTitle>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <CardContent className="p-0">
                    <p className="text-gray-700 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

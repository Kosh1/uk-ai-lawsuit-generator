"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ChatDialog } from "@/components/chat-dialog";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  placeholder: string;
  utm: Record<string, string>;
  landingType?: string;
}

export function CTASection({ title, subtitle, buttonText, placeholder, utm, landingType }: CTASectionProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const handleStartChat = () => {
    if (userMessage.trim()) {
      setIsChatOpen(true);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl opacity-90 mb-8">
            {subtitle}
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="space-y-4">
              <Textarea
                placeholder={placeholder}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="min-h-[120px] resize-none"
              />
              <Button 
                onClick={handleStartChat}
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!userMessage.trim()}
              >
                {buttonText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-sm opacity-75">
          <p>✓ 100% Confidential &nbsp; ✓ Professional Quality &nbsp; ✓ Ready in Minutes</p>
        </div>
      </div>

      {/* Chat Dialog */}
      <ChatDialog
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        initialMessage={userMessage}
        utm={utm}
        landingType={landingType}
      />
    </section>
  );
}

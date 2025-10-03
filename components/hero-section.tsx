"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ChatDialog } from "@/components/chat-dialog";
import { Scale, Clock, Shield, CheckCircle } from "lucide-react";
import type { LandingConfig } from "@/lib/landingConfigs";

interface HeroSectionProps {
  config: LandingConfig;
  utm: Record<string, string>;
  landingType?: string;
}

export function HeroSection({ config, utm, landingType }: HeroSectionProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const handleStartChat = () => {
    if (userMessage.trim()) {
      setIsChatOpen(true);
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                <Scale className="w-4 h-4 mr-2" />
                {config.topText}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {config.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < config.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {config.subtitle}
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <Clock className="w-4 h-4 text-green-500" />
                <span>2 minutes</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <Shield className="w-4 h-4 text-green-500" />
                <span>100% confidential</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Professional quality</span>
              </div>
            </div>

            {/* Input Form */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <Textarea
                    placeholder={config.placeholder}
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    className="min-h-[120px] resize-none"
                  />
                  <Button 
                    onClick={handleStartChat}
                    size="lg"
                    className="w-full"
                    disabled={!userMessage.trim()}
                  >
                    {config.ctaButton}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Example */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Example Document
              </h3>
            </div>
            
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-6">
                <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                  {config.example}
                </pre>
              </CardContent>
            </Card>
          </div>
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

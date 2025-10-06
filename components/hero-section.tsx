"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ChatDialog } from "@/components/chat-dialog";
import { Scale, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";
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
    <section className="relative py-16 px-6 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="relative container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium">
              <Scale className="w-4 h-4 mr-2" />
              {config.topText}
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {config.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < config.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {config.subtitle}
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3 h-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">2 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-3 h-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">Professional</span>
              </div>
            </div>

            {/* Input Form */}
            <Card className="shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-6">
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
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Example */}
          <div className="space-y-4">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Example Document
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                See what you&apos;ll get in just 2 minutes
              </p>
            </div>
            
            <Card className="shadow-lg bg-white dark:bg-gray-800 overflow-hidden">
              <CardContent className="p-6">
                <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
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

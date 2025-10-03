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
    <section className="relative py-24 px-6 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.02),transparent_50%)]"></div>
      
      <div className="relative container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Column - Main Content */}
          <div className="space-y-10">
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium">
              <Scale className="w-4 h-4 mr-2" />
              {config.topText}
            </div>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                {config.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < config.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                {config.subtitle}
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 lg:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-base font-medium text-gray-700 dark:text-gray-300">2 minutes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-base font-medium text-gray-700 dark:text-gray-300">100% confidential</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-base font-medium text-gray-700 dark:text-gray-300">Professional quality</span>
              </div>
            </div>

            {/* Input Form */}
            <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Textarea
                    placeholder={config.placeholder}
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    className="min-h-[140px] resize-none text-base border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <Button 
                    onClick={handleStartChat}
                    size="lg"
                    className="w-full h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
                    disabled={!userMessage.trim()}
                  >
                    {config.ctaButton}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Example */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Example Document
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                See what you'll get in just 2 minutes
              </p>
            </div>
            
            <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 overflow-hidden">
              <CardContent className="p-8">
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

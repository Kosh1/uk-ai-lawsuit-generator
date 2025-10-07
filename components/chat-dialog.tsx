"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Send, X, Bot, User } from "lucide-react";
import type { ChatMessage } from "@/lib/types";

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
  utm: Record<string, string>;
  landingType?: string;
}

export function ChatDialog({ isOpen, onClose, initialMessage = "", utm, landingType }: ChatDialogProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState(initialMessage);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = useCallback(async (message: string) => {
    if (!message.trim() || isLoading) return;

    setIsLoading(true);
    setInput('');

    const userMessage: ChatMessage = {
      role: 'user',
      content: message,
    };

    setMessages(prev => {
      const newMessages = [...prev, userMessage];
      
      // Send API request with updated messages
      fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages,
          sessionId,
        }),
      })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        const data = await response.json();
        
        setMessages(prevMessages => [...prevMessages, {
          role: 'assistant',
          content: data.message,
        }]);

        if (data.sessionId && !sessionId) {
          setSessionId(data.sessionId);
        }
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        setMessages(prevMessages => [...prevMessages, {
          role: 'assistant',
          content: 'Sorry, there was an error processing your request. Please try again.',
        }]);
      })
      .finally(() => {
        setIsLoading(false);
      });

      return newMessages;
    });

  }, [sessionId, isLoading]);

  useEffect(() => {
    if (isOpen && initialMessage && messages.length === 0) {
      setInput(initialMessage);
      handleSendMessage(initialMessage);
    }
  }, [isOpen, initialMessage]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  const handleClose = () => {
    setMessages([]);
    setInput("");
    setSessionId(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Bot className="w-5 h-5" />
            <span>AI Legal Assistant UK</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 flex flex-col min-h-0">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === 'user' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {message.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <Card className={`${
                      message.role === 'user' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-50'
                    }`}>
                      <CardContent className="p-3">
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <Card className="bg-gray-50">
                      <CardContent className="p-3">
                        <div className="flex items-center space-x-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-sm text-gray-600">AI is thinking...</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex space-x-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your legal situation..."
                className="flex-1 min-h-[60px] resize-none"
                disabled={isLoading}
              />
              <Button type="submit" disabled={!input.trim() || isLoading}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

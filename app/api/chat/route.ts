import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@/lib/supabase';
import { getUKLawyerPrompt } from '@/lib/prompts';
import type { ChatMessage, UTMData } from '@/lib/types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages, sessionId, userId }: { 
      messages: ChatMessage[], 
      sessionId?: string, 
      userId?: string 
    } = await req.json();

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
    }

    // Extract UTM parameters
    const url = new URL(req.url);
    const utm: UTMData = {};
    url.searchParams.forEach((value, key) => {
      if (key.startsWith('utm_')) {
        utm[key as keyof UTMData] = value;
      }
    });

    // Extract landing type from UTM
    let landingType: string | undefined;
    if (utm.landing_type) {
      landingType = utm.landing_type;
    }

    // --- Function description for function calling ---
    const functions: any[] = [];

    // Get appropriate prompt based on landing type
    const lawyerPrompt = getUKLawyerPrompt(landingType);

    // Format messages for OpenAI
    const formattedMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      { role: "system", content: lawyerPrompt },
      ...messages.map(msg => ({
        role: msg.role as "user" | "assistant",
        content: msg.content
      }))
    ];

    console.log('Sending request to OpenAI with messages:', formattedMessages)

    // --- OpenAI call with function_call support ---
    const completion = await openai.chat.completions.create({
      model: "gpt-4", 
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 2000,
      functions,
      function_call: "auto"
    });

    const choice = completion.choices[0];
    let assistantMessage = choice.message?.content || '';
    let functionCall = choice.message?.function_call;

    let currentSessionId = sessionId;

    // Create new session only if it doesn't exist
    if (!currentSessionId) {
      const newSessionId = uuidv4();
      const { error: sessionError } = await supabase
        .from('chat_sessions')
        .insert([
          {
            id: newSessionId,
            user_id: userId, // save userId
            initial_message: messages[0].content,
            created_at: new Date().toISOString(),
            utm: utm || null,
          },
        ]);
      if (sessionError) {
        console.error('Error creating session:', sessionError);
      } else {
        currentSessionId = newSessionId;
      }
    }

    // Save messages to database
    const { error: messageError } = await supabase
      .from('chat_messages')
      .insert([
        {
          session_id: currentSessionId,
          role: 'user',
          content: messages[messages.length - 1].content,
          created_at: new Date().toISOString(),
        },
        {
          session_id: currentSessionId,
          role: 'assistant',
          content: assistantMessage,
          created_at: new Date().toISOString(),
        }
      ]);

    if (messageError) {
      console.error('Error saving messages:', messageError);
    }

    // Handle function calls - currently none

    return NextResponse.json({
      message: assistantMessage,
      sessionId: currentSessionId,
      functionCall: functionCall
    });

  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

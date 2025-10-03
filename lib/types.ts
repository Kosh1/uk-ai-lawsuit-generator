export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatSession {
  id: string;
  user_id?: string;
  initial_message: string;
  created_at: string;
  utm?: Record<string, string> | null;
  document_type?: 'lba' | 'claim';
}

export interface UTMData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_type?: string;
}

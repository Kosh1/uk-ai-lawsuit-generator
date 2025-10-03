# AI Legal Assistant UK

A Next.js application that helps users create professional legal documents for UK courts using AI. The application can generate Letter Before Action, Claim Forms, and other legal documents based on user input.

## Features

- 🤖 AI-powered legal document generation
- 📄 Support for various UK legal documents (Letter Before Action, Claim Forms, etc.)
- 🔒 100% confidential and secure
- ⚡ Fast document creation (2-5 minutes)
- 💰 Affordable pricing (£5 per document)
- 📱 Responsive design
- 🌙 Dark mode support

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Database**: Supabase
- **AI**: OpenAI GPT-4
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- OpenAI API key
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd uk-ai-lawsuit-generator
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

5. Set up Supabase database with the following tables:
- `chat_sessions`
- `chat_messages`
- `user_contacts`

6. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Schema

### chat_sessions
- `id` (uuid, primary key)
- `user_id` (text, optional)
- `initial_message` (text)
- `created_at` (timestamp)
- `utm` (jsonb, optional)
- `document_type` (text, optional)

### chat_messages
- `id` (uuid, primary key)
- `session_id` (uuid, foreign key)
- `role` (text: 'user' | 'assistant')
- `content` (text)
- `created_at` (timestamp)

### user_contacts
- `id` (uuid, primary key)
- `session_id` (uuid, foreign key)
- `phone` (text)
- `created_at` (timestamp)

## API Endpoints

- `POST /api/chat` - Main chat endpoint for AI conversations

## Landing Page Types

The application supports different landing page configurations:

- `default` - General legal disputes
- `family` - Family law matters
- `employment` - Employment disputes
- `contract` - Contract disputes
- `debt` - Debt recovery
- `property` - Property disputes

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@ailegalassistant.uk or create an issue in the repository.

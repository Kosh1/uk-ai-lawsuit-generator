import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - AI Legal Assistant UK',
  description: 'Learn about our AI-powered legal document generation service. We help UK residents create professional legal documents quickly and affordably.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About AI Legal Assistant UK</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              We are a UK-based service that uses advanced AI technology to help individuals and businesses create professional legal documents quickly and affordably.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To make legal assistance accessible to everyone in the UK by providing fast, accurate, and affordable document generation services.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Generate Letter Before Action documents</li>
              <li>Create Claim Forms for UK courts</li>
              <li>Provide legal document templates</li>
              <li>Offer guidance on legal procedures</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>100% confidential service</li>
              <li>Professional quality documents</li>
              <li>Fast turnaround (2-5 minutes)</li>
              <li>Affordable pricing (£5 per document)</li>
              <li>UK legal system expertise</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Technology</h2>
            <p className="text-gray-600 mb-6">
              We use advanced AI technology trained on thousands of UK legal cases to ensure our documents meet professional standards and comply with UK court requirements.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Important:</strong> Our service provides document templates and guidance. For complex legal matters, we recommend consulting with a qualified solicitor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

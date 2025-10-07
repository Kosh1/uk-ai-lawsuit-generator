import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - AI Legal Assistant UK',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information when using our AI legal document service.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB')}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">We collect the following types of information:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Personal information you provide when creating legal documents</li>
              <li>Contact information (email address)</li>
              <li>Usage data and analytics</li>
              <li>Session information for document generation</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>To generate your legal documents</li>
              <li>To provide customer support</li>
              <li>To improve our service</li>
              <li>To communicate with you about your documents</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your information only as long as necessary to provide our services and comply with legal obligations. Document data is typically retained for 12 months.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-600 mb-6">
              We use essential cookies to provide our service. We do not use tracking cookies or third-party analytics that compromise your privacy.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Email:</strong> privacy@ailegalassistant.uk
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-blue-800">
                <strong>Important:</strong> This privacy policy applies to our AI document generation service. For legal advice, please consult with a qualified solicitor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

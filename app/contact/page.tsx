import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - AI Legal Assistant UK',
  description: 'Get in touch with our AI Legal Assistant UK team. We provide support and assistance for all your legal document needs.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Need help with your legal documents? Have questions about our service? We're here to help.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get Support</h2>
            <p className="text-gray-600 mb-4">
              For technical support or questions about our service, please contact us at:
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Email:</strong> support@ailegalassistant.uk
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Business Hours</h2>
            <p className="text-gray-600 mb-6">
              Monday - Friday: 9:00 AM - 6:00 PM (GMT)<br />
              Saturday: 10:00 AM - 4:00 PM (GMT)<br />
              Sunday: Closed
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Response Time</h2>
            <p className="text-gray-600 mb-6">
              We typically respond to all inquiries within 24 hours during business days.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">How long does it take to generate a document?</h3>
                <p className="text-gray-600">Most documents are generated within 2-5 minutes of providing the required information.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Is my information confidential?</h3>
                <p className="text-gray-600">Yes, all information is processed securely and we do not share your details with third parties.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Can I get a refund?</h3>
                <p className="text-gray-600">We offer refunds within 7 days if you're not satisfied with the generated document.</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-800">
                <strong>Note:</strong> For urgent legal matters, please consult with a qualified solicitor directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

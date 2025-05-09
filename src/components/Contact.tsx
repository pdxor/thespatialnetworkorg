import React, { useState } from 'react';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setWarning(null);
    
    try {
      const res = await fetch('/.netlify/functions/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          organization: formState.organization,
          message: formState.message,
        }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        // Form was submitted successfully
        setSubmitted(true);
        setFormState({ name: '', organization: '', email: '', message: '' });
        
        // Check if there's a warning message
        if (data.warning) {
          setWarning(data.warning);
        }
        
        setTimeout(() => {
          setSubmitted(false);
          setWarning(null);
        }, 8000); // longer timeout to allow reading the warning
      } else {
        // Server returned an error
        console.error('Server error:', data);
        const errorMessage = data.details?.body?.errors?.[0]?.message || 
                            data.error || 
                            'Something went wrong. Please try again.';
        setError(errorMessage);
      }
    } catch (err: any) {
      console.error('Form submission error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Interested in collaborating with The Spatial Network? 
            Reach out to discuss partnership opportunities and how we can work together.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-slate-50 rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <p className="leading-relaxed">
                  We're looking for partnerships with organizations committed to 
                  sustainable development and ecological restoration.
                </p>
                <p className="leading-relaxed">
                  Whether you're a UN agency, NGO, academic institution, or 
                  community organization, we'd love to explore potential collaborations.
                </p>
                <p className="leading-relaxed">
                  Our team is ready to provide a personalized demonstration of our platform 
                  and discuss how we can support your objectives.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-3 p-8">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <CheckCircle size={64} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-slate-800">Thank You!</h3>
                  <p className="text-slate-600 mb-4">
                    Your message has been received. We'll be in touch with you shortly.
                  </p>
                  
                  {warning && (
                    <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-700 flex items-start">
                      <AlertTriangle size={20} className="flex-shrink-0 mr-2 mt-0.5" />
                      <p>{warning}</p>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      <p>{error}</p>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formState.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Your organization"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Tell us about your interests and how we might collaborate"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg ${
                      loading 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white transition-colors`}
                  >
                    {loading ? (
                      <>Sending... <span className="ml-2 animate-spin">⏳</span></>
                    ) : (
                      <>Send Message <Send size={16} className="ml-2" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
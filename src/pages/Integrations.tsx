
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';

const Integrations = () => {
  const integrations = [
    {
      name: 'Shopify',
      logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
      description: 'Connect your Shopify store to automate product launches and track sales performance.',
      category: 'E-commerce'
    },
    {
      name: 'Stripe',
      logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg',
      description: 'Process payments and manage subscriptions with our seamless Stripe integration.',
      category: 'Payments'
    },
    {
      name: 'Slack',
      logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
      description: 'Get notifications and updates directly in your team\'s Slack channels.',
      category: 'Communication'
    },
    {
      name: 'Google Analytics',
      logo: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg',
      description: 'Track user behavior and campaign performance with detailed analytics.',
      category: 'Analytics'
    },
    {
      name: 'MailChimp',
      logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon-256.svg',
      description: 'Sync your email lists and automate your marketing campaigns.',
      category: 'Marketing'
    },
    {
      name: 'Hubspot',
      logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg',
      description: 'Connect your CRM to track leads and customer interactions.',
      category: 'CRM'
    },
    {
      name: 'Zapier',
      logo: 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg',
      description: 'Connect with thousands of apps through our Zapier integration.',
      category: 'Automation'
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
      description: 'Sync with your repositories for streamlined development workflows.',
      category: 'Development'
    },
    {
      name: 'Salesforce',
      logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg',
      description: 'Integrate with Salesforce to manage customer relationships and sales.',
      category: 'CRM'
    }
  ];

  const categories = [...new Set(integrations.map(item => item.category))];

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background particles */}
      <Particles quantity={30} className="pointer-events-none" />
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_50%)]"></div>
      
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Integrations</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms to streamline your workflow.
            </p>
          </div>
          
          {/* Categories filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-4 py-2 rounded-full bg-neon text-space font-medium">
              All
            </button>
            {categories.map((category, index) => (
              <button 
                key={index} 
                className="px-4 py-2 rounded-full bg-space/50 text-slate-300 hover:bg-space/70 transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Integrations grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="p-6 bg-space-light/20 border border-slate-800 rounded-xl flex flex-col hover:border-neon/30 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 flex items-center justify-center bg-white rounded-md p-2">
                    <img 
                      src={integration.logo} 
                      alt={integration.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-200">{integration.name}</h3>
                    <span className="text-xs bg-space/60 text-slate-400 px-2 py-1 rounded-full">
                      {integration.category}
                    </span>
                  </div>
                </div>
                <p className="text-slate-400 mb-4 flex-1">
                  {integration.description}
                </p>
                <button className="text-neon hover:underline text-sm flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="mt-16 text-center p-8 bg-space-light/30 border border-slate-800 rounded-xl max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Need a custom integration?</h2>
            <p className="text-slate-400 mb-6">
              Don't see what you're looking for? Our team can build custom integrations to meet your specific needs.
            </p>
            <button className="px-6 py-3 bg-neon text-space rounded-md hover:bg-neon/90 transition-colors font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Integrations;

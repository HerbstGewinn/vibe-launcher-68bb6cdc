
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import Particles from '@/components/Particles';
import { AlertCircle, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';

type IntegrationType = 'all' | 'analytics' | 'marketing' | 'productivity' | 'design' | 'development';

type Integration = {
  name: string;
  description: string;
  icon: string;
  type: Exclude<IntegrationType, 'all'>;
  setupSteps: string[];
  benefits: string[];
  url: string;
};

const Integrations = () => {
  const [activeFilter, setActiveFilter] = useState<IntegrationType>('all');
  const [activeIntegration, setActiveIntegration] = useState<Integration | null>(null);
  
  const integrations: Integration[] = [
    {
      name: 'Google Analytics',
      description: 'Track website traffic and user behavior',
      icon: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg',
      type: 'analytics',
      setupSteps: [
        'Create a Google Analytics account',
        'Set up a new property for your website',
        'Add the tracking code to your website',
        'Configure goals and events'
      ],
      benefits: [
        'Understand user behavior',
        'Track conversion rates',
        'Measure marketing ROI',
        'Identify top traffic sources'
      ],
      url: 'https://analytics.google.com/'
    },
    {
      name: 'Mailchimp',
      description: 'Email marketing and newsletter automation',
      icon: 'https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-link-48.png',
      type: 'marketing',
      setupSteps: [
        'Create a Mailchimp account',
        'Set up a mailing list',
        'Create a signup form',
        'Design your first email campaign'
      ],
      benefits: [
        'Build an email subscriber list',
        'Create automated email sequences',
        'Track email engagement metrics',
        'Segment your audience'
      ],
      url: 'https://mailchimp.com/'
    },
    {
      name: 'Slack',
      description: 'Team communication and collaboration',
      icon: 'https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_128.png',
      type: 'productivity',
      setupSteps: [
        'Create a Slack workspace',
        'Invite your team members',
        'Set up channels for different topics',
        'Connect with other tools via integrations'
      ],
      benefits: [
        'Centralize team communication',
        'Organize conversations by topic',
        'Share files and resources easily',
        'Integrate with other tools'
      ],
      url: 'https://slack.com/'
    },
    {
      name: 'Trello',
      description: 'Visual project management',
      icon: 'https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg',
      type: 'productivity',
      setupSteps: [
        'Create a Trello account',
        'Set up a board for your project',
        'Create lists for different stages',
        'Add cards for tasks and assign team members'
      ],
      benefits: [
        'Visualize project workflow',
        'Track task progress',
        'Collaborate with team members',
        'Organize tasks by priority'
      ],
      url: 'https://trello.com/'
    },
    {
      name: 'Figma',
      description: 'Collaborative design tool',
      icon: 'https://static.figma.com/app/icon/1/favicon.svg',
      type: 'design',
      setupSteps: [
        'Create a Figma account',
        'Set up a team and invite members',
        'Create your first design file',
        'Learn the basic tools and features'
      ],
      benefits: [
        'Collaborate on designs in real-time',
        'Create interactive prototypes',
        'Share designs with stakeholders',
        'Maintain a design system'
      ],
      url: 'https://www.figma.com/'
    },
    {
      name: 'GitHub',
      description: 'Code hosting and collaboration',
      icon: 'https://github.githubassets.com/favicons/favicon.svg',
      type: 'development',
      setupSteps: [
        'Create a GitHub account',
        'Set up a repository for your project',
        'Add collaborators to your repository',
        'Learn basic Git commands'
      ],
      benefits: [
        'Track code changes',
        'Collaborate with developers',
        'Manage code reviews',
        'Integrate with CI/CD tools'
      ],
      url: 'https://github.com/'
    },
    {
      name: 'Zapier',
      description: 'Automate workflows between apps',
      icon: 'https://cdn.zapier.com/zapier/images/favicon.ico',
      type: 'productivity',
      setupSteps: [
        'Create a Zapier account',
        'Choose your trigger app and event',
        'Select your action app and event',
        'Test and activate your Zap'
      ],
      benefits: [
        'Automate repetitive tasks',
        'Connect different tools together',
        'Save time on manual processes',
        'Reduce human error'
      ],
      url: 'https://zapier.com/'
    },
    {
      name: 'HubSpot',
      description: 'CRM, marketing, and sales platform',
      icon: 'https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_approved-sprocket-web.svg',
      type: 'marketing',
      setupSteps: [
        'Create a HubSpot account',
        'Import your contacts',
        'Set up your pipeline',
        'Configure email templates'
      ],
      benefits: [
        'Manage customer relationships',
        'Track sales activities',
        'Automate marketing campaigns',
        'Analyze performance metrics'
      ],
      url: 'https://www.hubspot.com/'
    },
    {
      name: 'Google Tag Manager',
      description: 'Tag management system',
      icon: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_tag_manager.svg',
      type: 'analytics',
      setupSteps: [
        'Create a Google Tag Manager account',
        'Set up a container for your website',
        'Add the GTM code to your website',
        'Configure tags, triggers, and variables'
      ],
      benefits: [
        'Manage tracking codes easily',
        'Deploy tracking without developers',
        'Test tags before publishing',
        'Maintain version control'
      ],
      url: 'https://tagmanager.google.com/'
    },
    {
      name: 'AWS',
      description: 'Cloud computing services',
      icon: 'https://a0.awsstatic.com/libra-css/images/site/touch-icon-ipad-144-smile.png',
      type: 'development',
      setupSteps: [
        'Create an AWS account',
        'Set up IAM users and permissions',
        'Choose the services you need',
        'Configure your first instance or service'
      ],
      benefits: [
        'Scalable infrastructure',
        'Pay-as-you-go pricing',
        'Global availability',
        'Wide range of services'
      ],
      url: 'https://aws.amazon.com/'
    },
    {
      name: 'Stripe',
      description: 'Payment processing platform',
      icon: 'https://stripe.com/img/v3/home/twitter.png',
      type: 'development',
      setupSteps: [
        'Create a Stripe account',
        'Set up your payment methods',
        'Add Stripe checkout to your website',
        'Configure webhooks for event handling'
      ],
      benefits: [
        'Accept online payments',
        'Process subscriptions',
        'Manage customer billing',
        'Handle international transactions'
      ],
      url: 'https://stripe.com/'
    },
    {
      name: 'Canva',
      description: 'Graphic design platform',
      icon: 'https://static.canva.com/static/images/canva-logo-blue.svg',
      type: 'design',
      setupSteps: [
        'Create a Canva account',
        'Explore templates for your needs',
        'Upload brand assets (logos, fonts, colors)',
        'Create your first design'
      ],
      benefits: [
        'Create professional designs easily',
        'Access thousands of templates',
        'Collaborate with team members',
        'Download in various formats'
      ],
      url: 'https://www.canva.com/'
    }
  ];
  
  const filteredIntegrations = activeFilter === 'all' 
    ? integrations 
    : integrations.filter(integration => integration.type === activeFilter);
  
  const filterOptions: {label: string; value: IntegrationType}[] = [
    { label: 'All', value: 'all' },
    { label: 'Analytics', value: 'analytics' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Productivity', value: 'productivity' },
    { label: 'Design', value: 'design' },
    { label: 'Development', value: 'development' }
  ];
  
  return (
    <div className="relative min-h-screen pb-20">
      {/* Background particles */}
      <Particles quantity={30} className="pointer-events-none" />
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_50%)]"></div>
      
      {/* Hero section */}
      <div className="pt-20 pb-16 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Integrations
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Connect your favorite tools and services with Vibelaunch.io
        </motion.p>
      </div>
      
      {/* Filter tabs */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              className={cn(
                'px-4 py-2 rounded-full transition-all duration-300',
                activeFilter === option.value
                  ? 'bg-neon text-space font-medium shadow-neon-sm'
                  : 'bg-space-light hover:bg-neon/10 text-slate-300 border border-slate-700 hover:border-neon/30'
              )}
              onClick={() => setActiveFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Integration grid */}
      <div className="container mx-auto px-4 mb-20">
        {activeIntegration ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="frost-container p-6 md:p-8 max-w-4xl mx-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <button 
                className="text-slate-400 hover:text-neon flex items-center gap-1 transition-colors"
                onClick={() => setActiveIntegration(null)}
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                <span>Back to all integrations</span>
              </button>
              
              <a 
                href={activeIntegration.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neon hover:text-neon/80 flex items-center gap-1 transition-colors"
              >
                <span>Visit website</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/3">
                <div className="bg-white/5 p-6 rounded-lg flex items-center justify-center mb-4">
                  <img src={activeIntegration.icon} alt={activeIntegration.name} className="h-20 w-20 object-contain" />
                </div>
                
                <h2 className="text-2xl font-bold mb-2">{activeIntegration.name}</h2>
                <p className="text-slate-300 mb-4">{activeIntegration.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    {activeIntegration.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-neon flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button glow as="a" href={activeIntegration.url} target="_blank" rel="noopener noreferrer" fullWidth>
                  Connect with {activeIntegration.name}
                </Button>
              </div>
              
              <div className="md:w-2/3 frost-container p-6 bg-space-light/30">
                <h3 className="text-xl font-semibold mb-4">Integration Setup Guide</h3>
                
                <div className="space-y-6">
                  {activeIntegration.setupSteps.map((step, index) => (
                    <motion.div 
                      key={index}
                      className="relative pl-10"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-neon/10 border border-neon flex items-center justify-center">
                        <span className="text-neon font-medium">{index + 1}</span>
                      </div>
                      <h4 className="text-lg font-medium mb-2">{step}</h4>
                      <p className="text-slate-400 text-sm">
                        {/* Placeholder text - would be replaced with actual guide content */}
                        Follow our detailed step-by-step instructions to complete this stage of the integration process.
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 frost-container p-4 bg-neon/5 border border-neon/30 rounded-md">
                  <div className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-neon flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-neon mb-1">Need help?</h4>
                      <p className="text-sm text-slate-300">
                        Our support team is available to help you set up this integration. 
                        Contact us if you have any questions or encounter any issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={index}
                className="frost-container p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:border-neon/50 hover:shadow-neon-sm group"
                onClick={() => setActiveIntegration(integration)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                  <img src={integration.icon} alt={integration.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-neon transition-colors">{integration.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{integration.description}</p>
                <div className="mt-auto">
                  <span className="text-neon text-sm flex items-center gap-1">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      
      {/* CTA section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="frost-container p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Can't Find What You Need?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            We're constantly adding new integrations to our platform. If you don't see what you're looking for, let us know and we'll prioritize it.
          </p>
          <Button size="lg" glow>
            Request an Integration
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-neon font-semibold">Vibelaunch.io</p>
              <p className="text-slate-500 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-slate-300 hover:text-neon transition-colors">Terms</a>
              <a href="#" className="text-slate-300 hover:text-neon transition-colors">Privacy</a>
              <a href="#" className="text-slate-300 hover:text-neon transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Integrations;

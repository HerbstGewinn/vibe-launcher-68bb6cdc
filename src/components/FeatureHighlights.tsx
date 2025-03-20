
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BarChart4, CheckCircle2, Layout, LineChart, MessagesSquare, Rocket, UserPlus, Zap } from 'lucide-react';

interface FeatureHighlightsProps {
  className?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

const FeatureHighlights = ({ className }: FeatureHighlightsProps) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  const features: Feature[] = [
    {
      title: 'Interactive Strategy Builder',
      description: 'Generate a personalized launch strategy with actionable steps based on your project type and goals.',
      icon: <Rocket className="h-8 w-8 text-neon" />,
      benefits: [
        'Tailored to your specific project',
        'Step-by-step guidance',
        'Realistic timelines',
        'Adaptable to different industries'
      ]
    },
    {
      title: 'Progress Tracking Dashboard',
      description: 'Visualize your launch progress with interactive neon-styled progress bars and achievement tracking.',
      icon: <BarChart4 className="h-8 w-8 text-neon" />,
      benefits: [
        'Visual progress indicators',
        'Milestone achievements',
        'Task completion tracking',
        'Shareable progress reports'
      ]
    },
    {
      title: 'User Acquisition Tools',
      description: 'Comprehensive toolset for attracting and converting your first 1000 users with data-driven methods.',
      icon: <UserPlus className="h-8 w-8 text-neon" />,
      benefits: [
        'Multi-channel acquisition strategies',
        'Conversion optimization tools',
        'Audience targeting guidance',
        'Attribution tracking'
      ]
    },
    {
      title: 'Analytics & Insights',
      description: 'Gain valuable insights into user behavior, engagement, and conversion metrics with beautiful visualizations.',
      icon: <LineChart className="h-8 w-8 text-neon" />,
      benefits: [
        'Real-time data analytics',
        'Custom reporting dashboards',
        'User behavior tracking',
        'Growth metrics monitoring'
      ]
    },
    {
      title: 'Community & Feedback',
      description: 'Connect with other founders, share experiences, and gather valuable feedback for your product.',
      icon: <MessagesSquare className="h-8 w-8 text-neon" />,
      benefits: [
        'Founder community access',
        'Expert feedback sessions',
        'User testing coordination',
        'Collaborative problem-solving'
      ]
    },
    {
      title: 'Landing Page Optimization',
      description: 'Enhance your landing page with proven conversion elements and performance optimization techniques.',
      icon: <Layout className="h-8 w-8 text-neon" />,
      benefits: [
        'Conversion-focused templates',
        'A/B testing tools',
        'Copy optimization guides',
        'Performance analysis'
      ]
    }
  ];

  const handleFeatureClick = (index: number) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  return (
    <div className={cn('py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
            KEY FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Tools for Your Launch</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Everything you need to transform your project into a successful product with engaged users
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={cn(
                'frost-container p-6 cursor-pointer transition-all duration-500 group',
                activeFeature === index 
                  ? 'border-neon shadow-neon' 
                  : 'hover:border-neon/40 hover:shadow-neon-sm'
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index % 3), duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => handleFeatureClick(index)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="h-14 w-14 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center">
                  {feature.icon}
                </div>
                <Zap 
                  className={cn(
                    'h-5 w-5 transition-all duration-300 transform',
                    activeFeature === index ? 'text-neon rotate-0' : 'text-slate-500 rotate-90'
                  )} 
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-neon transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-300 mb-4">
                {feature.description}
              </p>
              
              <div 
                className={cn(
                  'overflow-hidden transition-all duration-500',
                  activeFeature === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <div className="pt-4 border-t border-slate-700 mt-2">
                  <h4 className="font-medium mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-neon flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;

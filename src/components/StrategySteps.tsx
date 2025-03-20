
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Button from './Button';
import { CheckCircle2, ChevronDown, ChevronUp, Trophy, Globe, LineChart, Users, MessageSquare, FileSearch, Rocket } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface Step {
  id: number;
  title: string;
  description: string;
  actionItems: string[];
  icon: React.ReactNode;
  tools: {
    name: string;
    description: string;
    linkText?: string;
    link?: string;
  }[];
  resources: {
    title: string;
    description: string;
    link?: string;
  }[];
}

interface StrategyStepsProps {
  className?: string;
  onComplete: () => void;
  projectUrl: string;
}

const StrategySteps = ({ className, onComplete, projectUrl }: StrategyStepsProps) => {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [actions, setActions] = useState<{[key: string]: boolean}>({});
  const [expandedSteps, setExpandedSteps] = useState<number[]>([1]);
  const [streakCount, setStreakCount] = useState(0);
  const navigate = useNavigate();
  
  const steps: Step[] = [
    {
      id: 1,
      title: "Get a Domain, Deploy your project",
      description: "Secure your online identity and make your project accessible to the world.",
      icon: <Globe className="h-6 w-6 text-neon" />,
      actionItems: [
        "Register a domain name that matches your brand",
        "Set up hosting with a reliable provider",
        "Deploy your project with continuous integration",
        "Configure custom domain and SSL certificate"
      ],
      tools: [
        {
          name: "Namecheap",
          description: "Affordable domain registration with free privacy protection",
          linkText: "Search domains",
          link: "https://www.namecheap.com"
        },
        {
          name: "Vercel",
          description: "One-click deployment platform optimized for frontend projects",
          linkText: "Deploy now",
          link: "https://vercel.com"
        },
        {
          name: "Netlify",
          description: "All-in-one platform for automating modern web projects",
          linkText: "Start free",
          link: "https://netlify.com"
        }
      ],
      resources: [
        {
          title: "Domain Name Guide",
          description: "How to choose the perfect domain for your project",
          link: "#"
        },
        {
          title: "Deployment Checklist",
          description: "Essential steps before launching your project",
          link: "#"
        }
      ]
    },
    {
      id: 2,
      title: "Get indexed by Google",
      description: "Ensure your site is discoverable by search engines to attract organic traffic.",
      icon: <FileSearch className="h-6 w-6 text-neon" />,
      actionItems: [
        "Create and submit a sitemap.xml file",
        "Set up Google Search Console for your domain",
        "Configure Google Analytics for tracking",
        "Implement basic on-page SEO optimizations"
      ],
      tools: [
        {
          name: "Google Search Console",
          description: "Free tool to monitor and maintain your site's presence in search results",
          linkText: "Add property",
          link: "https://search.google.com/search-console"
        },
        {
          name: "Google Analytics",
          description: "Track user interaction and traffic sources for your website",
          linkText: "Set up",
          link: "https://analytics.google.com"
        },
        {
          name: "XML Sitemaps",
          description: "Free sitemap generator to help search engines crawl your site",
          linkText: "Generate sitemap",
          link: "https://www.xml-sitemaps.com"
        }
      ],
      resources: [
        {
          title: "Google Indexing Guide",
          description: "Step-by-step process to get your site indexed quickly",
          link: "#"
        },
        {
          title: "SEO Starter Guide",
          description: "Google's official guide to search engine optimization",
          link: "https://developers.google.com/search/docs/beginner/seo-starter-guide"
        }
      ]
    },
    {
      id: 3,
      title: "Build an Acquisition Strategy",
      description: "Establish channels to attract your first users.",
      icon: <Users className="h-6 w-6 text-neon" />,
      actionItems: [
        "Set up analytics tracking",
        "Implement SEO best practices",
        "Plan content marketing strategy",
        "Identify key distribution channels"
      ],
      tools: [
        {
          name: "Google Analytics",
          description: "Free web analytics service to track website traffic",
          linkText: "Set up",
          link: "https://analytics.google.com"
        },
        {
          name: "Ahrefs",
          description: "SEO tool for competitive analysis and keyword research",
          linkText: "Try it",
          link: "https://ahrefs.com"
        },
        {
          name: "Buffer",
          description: "Social media management platform for scheduling posts",
          linkText: "Get started",
          link: "https://buffer.com"
        }
      ],
      resources: [
        {
          title: "Customer Acquisition Playbook",
          description: "Channel-specific strategies to find your first 100 users",
          link: "#"
        },
        {
          title: "SEO Fundamentals Guide",
          description: "Technical and content optimization for search engines",
          link: "#"
        }
      ]
    },
    {
      id: 4,
      title: "Launch & Gather Feedback",
      description: "Release your product and start collecting insights.",
      icon: <MessageSquare className="h-6 w-6 text-neon" />,
      actionItems: [
        "Create a pre-launch checklist",
        "Set up feedback collection tools",
        "Plan your launch announcement",
        "Establish a customer support workflow"
      ],
      tools: [
        {
          name: "Typeform",
          description: "Beautiful, conversational forms and surveys",
          linkText: "Create form",
          link: "https://www.typeform.com"
        },
        {
          name: "Intercom",
          description: "Customer messaging platform with live chat",
          linkText: "Start free",
          link: "https://www.intercom.com"
        },
        {
          name: "Product Hunt",
          description: "Platform to launch new products to an engaged community",
          linkText: "Submit product",
          link: "https://www.producthunt.com"
        }
      ],
      resources: [
        {
          title: "Product Launch Framework",
          description: "Step-by-step guide to a successful product launch",
          link: "#"
        },
        {
          title: "User Feedback Templates",
          description: "Effective questions to ask your early users",
          link: "#"
        }
      ]
    },
    {
      id: 5,
      title: "Iterate & Grow",
      description: "Use feedback to improve and expand your user base.",
      icon: <LineChart className="h-6 w-6 text-neon" />,
      actionItems: [
        "Analyze user feedback patterns",
        "Prioritize improvements",
        "Implement referral mechanisms",
        "Set up retention analytics"
      ],
      tools: [
        {
          name: "Mixpanel",
          description: "User analytics platform for tracking behavioral data",
          linkText: "Get started",
          link: "https://mixpanel.com"
        },
        {
          name: "Trello",
          description: "Visual collaboration tool for organizing work",
          linkText: "Try it",
          link: "https://trello.com"
        },
        {
          name: "ReferralCandy",
          description: "Referral marketing software to acquire customers",
          linkText: "Learn more",
          link: "https://www.referralcandy.com"
        }
      ],
      resources: [
        {
          title: "Product Iteration Framework",
          description: "Methodologies for continuous improvement",
          link: "#"
        },
        {
          title: "Growth Metrics Guide",
          description: "Key metrics to track for sustainable growth",
          link: "#"
        }
      ]
    }
  ];

  useEffect(() => {
    // Initialize actions object
    const initialActions: {[key: string]: boolean} = {};
    steps.forEach(step => {
      step.actionItems.forEach(item => {
        initialActions[`${step.id}-${item}`] = false;
      });
    });
    setActions(initialActions);
  }, []);

  const handleActionToggle = (stepId: number, action: string) => {
    const actionKey = `${stepId}-${action}`;
    const newValue = !actions[actionKey];
    
    setActions(prev => ({
      ...prev,
      [actionKey]: newValue
    }));
    
    // Update streak count if action was completed
    if (newValue) {
      setStreakCount(prev => prev + 1);
    } else {
      setStreakCount(prev => Math.max(0, prev - 1));
    }
    
    // Check if all actions in the step are completed
    const stepActions = steps.find(s => s.id === stepId)?.actionItems || [];
    const allStepActionsCompleted = stepActions.every(item => 
      (actions[`${stepId}-${item}`] || item === action && newValue)
    );
    
    if (allStepActionsCompleted && !completedSteps.includes(stepId)) {
      setCompletedSteps(prev => [...prev, stepId]);
      
      // Auto-expand next step if available
      if (stepId < steps.length) {
        setExpandedSteps(prev => [...prev, stepId + 1]);
        setTimeout(() => {
          setActiveStep(stepId + 1);
        }, 500);
      }
    }
  };

  const calculateProgress = () => {
    const totalActions = steps.reduce((acc, step) => acc + step.actionItems.length, 0);
    const completedActions = Object.values(actions).filter(Boolean).length;
    return (completedActions / totalActions) * 100;
  };
  
  const toggleStepExpansion = (stepId: number) => {
    setExpandedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId) 
        : [...prev, stepId]
    );
  };

  const handleCheckSEO = () => {
    navigate('/signin');
  };

  return (
    <div className={cn('max-w-4xl mx-auto px-4', className)}>
      <div className="text-center mb-12 animate-fade-in">
        <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
          YOUR STRATEGY FOR {projectUrl.replace(/^https?:\/\//, '')}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Personalized Launch Strategy</h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Follow these steps to transform your project into a successful product with real users.
        </p>
      </div>
      
      {/* Statistics */}
      <div className="frost-container p-6 mb-10 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-neon mb-1">{Object.values(actions).filter(Boolean).length}</div>
          <div className="text-slate-400 text-sm">Tasks Completed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-neon mb-1">{completedSteps.length}</div>
          <div className="text-slate-400 text-sm">Steps Completed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-neon mb-1">{streakCount}</div>
          <div className="text-slate-400 text-sm">Task Streak</div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>{Math.round(calculateProgress())}%</span>
        </div>
        <Progress value={calculateProgress()} className="h-2" />
      </div>
      
      {/* Steps */}
      <div className="space-y-6">
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          const isCompleted = completedSteps.includes(step.id);
          const isExpanded = expandedSteps.includes(step.id);
          
          return (
            <motion.div 
              key={step.id}
              className={cn(
                'step-card overflow-hidden',
                isActive && 'active',
                isCompleted && 'border-green-500/70 shadow-green-500/20'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * step.id, duration: 0.5 }}
            >
              <div 
                className="flex items-start gap-4 cursor-pointer"
                onClick={() => toggleStepExpansion(step.id)}
              >
                <motion.div 
                  className={cn(
                    'flex items-center justify-center h-10 w-10 rounded-full text-base font-medium border transition-all duration-300',
                    isActive ? 'bg-neon text-space border-neon' : 
                    isCompleted ? 'bg-green-500 text-white border-green-500' : 
                    'border-slate-500 text-slate-300'
                  )}
                  whileHover={{ scale: 1.05 }}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : step.icon || step.id}
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <button className="text-slate-400 hover:text-neon transition-colors">
                      {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                  </div>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              </div>
              
              <motion.div
                className="mt-4 pl-14 space-y-4"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: isExpanded ? 'auto' : 0,
                  opacity: isExpanded ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Action Items */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-slate-300 mb-2">ACTION ITEMS:</h4>
                  {step.actionItems.map((action, idx) => {
                    const actionKey = `${step.id}-${action}`;
                    const isActionCompleted = actions[actionKey];
                    
                    return (
                      <motion.div 
                        key={idx} 
                        className={cn(
                          'flex items-center gap-3 p-3 rounded-lg transition-all duration-300',
                          isActionCompleted ? 'bg-green-500/10' : 'bg-slate-800/50 hover:bg-slate-700/30'
                        )}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleActionToggle(step.id, action)}
                      >
                        <motion.div 
                          className={cn(
                            'h-5 w-5 rounded border flex items-center justify-center cursor-pointer transition-all duration-300',
                            isActionCompleted ? 'bg-green-500 border-green-500' : 'border-slate-500'
                          )}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isActionCompleted && (
                            <motion.svg 
                              className="h-3 w-3 text-white" 
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </motion.svg>
                          )}
                        </motion.div>
                        <span className={cn(
                          'flex-1 text-sm font-medium cursor-pointer',
                          isActionCompleted && 'text-green-400'
                        )}>
                          {action}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Special SEO Check button for step 2 */}
                {step.id === 2 && (
                  <div className="mt-4 pl-8">
                    <Button 
                      onClick={handleCheckSEO}
                      className="px-6 py-2 w-full md:w-auto"
                      glow
                    >
                      Check your SEO
                    </Button>
                  </div>
                )}
                
                {/* Recommended Tools */}
                <div className="mt-6">
                  <h4 className="font-medium text-sm text-slate-300 mb-3">RECOMMENDED TOOLS:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {step.tools.map((tool, idx) => (
                      <Card key={idx} className="bg-space-light/70 border-slate-700/50 hover:border-neon/50 transition-all duration-300">
                        <CardContent className="p-4">
                          <h5 className="font-medium text-neon mb-1">{tool.name}</h5>
                          <p className="text-xs text-slate-300 mb-2">{tool.description}</p>
                          {tool.link && (
                            <a
                              href={tool.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-medium text-neon hover:text-neon/80 transition-colors inline-flex items-center gap-1"
                            >
                              {tool.linkText || "View tool"} 
                              <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </a>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Helpful Resources */}
                <div className="mt-4">
                  <h4 className="font-medium text-sm text-slate-300 mb-3">HELPFUL RESOURCES:</h4>
                  <div className="space-y-2">
                    {step.resources.map((resource, idx) => (
                      <div key={idx} className="bg-space-light/40 p-3 rounded-lg border border-slate-700/30">
                        <h5 className="font-medium text-white text-sm mb-1">{resource.title}</h5>
                        <p className="text-xs text-slate-300 mb-2">{resource.description}</p>
                        {resource.link && (
                          <a
                            href={resource.link}
                            className="text-xs font-medium text-neon hover:underline"
                          >
                            View resource →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Check if all steps are completed */}
      {completedSteps.length === steps.length && (
        <motion.div 
          className="mt-10 text-center frost-container p-8 bg-space-light/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-neon/20 border border-neon flex items-center justify-center shadow-neon">
              <Trophy className="h-8 w-8 text-neon" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-3">Congratulations! You've Completed All Steps</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            You've successfully completed your launch strategy. You're on your way to building a successful product with engaged users.
            Ready to take your launch to the next level?
          </p>
          <Button glow size="lg" onClick={onComplete}>
            Continue Your Journey <Rocket className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default StrategySteps;

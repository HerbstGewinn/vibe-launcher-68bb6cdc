
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

interface Step {
  id: number;
  title: string;
  description: string;
  actionItems: string[];
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
  
  const steps: Step[] = [
    {
      id: 1,
      title: "Define Your Product Vision",
      description: "Clarify what makes your product unique and valuable.",
      actionItems: [
        "Define your core value proposition",
        "Identify your target audience",
        "Outline key features & benefits"
      ]
    },
    {
      id: 2,
      title: "Optimize Your Landing Page",
      description: "Create a compelling online presence that converts visitors.",
      actionItems: [
        "Craft clear, benefit-focused headlines",
        "Add strong calls-to-action",
        "Include social proof elements"
      ]
    },
    {
      id: 3,
      title: "Build an Acquisition Strategy",
      description: "Establish channels to attract your first users.",
      actionItems: [
        "Set up analytics tracking",
        "Implement SEO best practices",
        "Plan content marketing strategy"
      ]
    },
    {
      id: 4,
      title: "Launch & Gather Feedback",
      description: "Release your product and start collecting insights.",
      actionItems: [
        "Create a pre-launch checklist",
        "Set up feedback collection tools",
        "Plan your launch announcement"
      ]
    },
    {
      id: 5,
      title: "Iterate & Grow",
      description: "Use feedback to improve and expand your user base.",
      actionItems: [
        "Analyze user feedback patterns",
        "Prioritize improvements",
        "Implement referral mechanisms"
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
    setActions(prev => ({
      ...prev,
      [actionKey]: !prev[actionKey]
    }));
    
    // Check if all actions in the step are completed
    const stepActions = steps.find(s => s.id === stepId)?.actionItems || [];
    const allStepActionsCompleted = stepActions.every(item => 
      actions[`${stepId}-${item}`] || item === action
    );
    
    if (allStepActionsCompleted && !completedSteps.includes(stepId)) {
      setCompletedSteps(prev => [...prev, stepId]);
      
      // Auto-advance to next step if available
      if (stepId < steps.length) {
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
      
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>{Math.round(calculateProgress())}%</span>
        </div>
        <div className="h-2 bg-space-light rounded-full overflow-hidden">
          <div 
            className="h-full bg-neon rounded-full transition-all duration-500"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>
      
      {/* Steps */}
      <div className="space-y-6">
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          const isCompleted = completedSteps.includes(step.id);
          
          return (
            <div 
              key={step.id}
              className={cn(
                'step-card',
                isActive && 'active',
                isCompleted && 'border-green-500/70 shadow-green-500/20'
              )}
            >
              <div className="flex items-start gap-4">
                <div 
                  className={cn(
                    'flex items-center justify-center h-10 w-10 rounded-full text-base font-medium border transition-all duration-300',
                    isActive ? 'bg-neon text-space border-neon' : 
                    isCompleted ? 'bg-green-500 text-white border-green-500' : 
                    'border-slate-500 text-slate-300'
                  )}
                >
                  {isCompleted ? (
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : step.id}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-slate-300 mb-4">{step.description}</p>
                  
                  <div className="space-y-2">
                    {step.actionItems.map((action, idx) => {
                      const actionKey = `${step.id}-${action}`;
                      const isActionCompleted = actions[actionKey];
                      
                      return (
                        <div 
                          key={idx} 
                          className={cn(
                            'flex items-center gap-3 p-3 rounded-lg transition-all duration-300',
                            isActionCompleted ? 'bg-green-500/10' : 'bg-slate-800/50 hover:bg-slate-700/30'
                          )}
                          onClick={() => handleActionToggle(step.id, action)}
                        >
                          <div 
                            className={cn(
                              'h-5 w-5 rounded border flex items-center justify-center cursor-pointer transition-all duration-300',
                              isActionCompleted ? 'bg-green-500 border-green-500' : 'border-slate-500'
                            )}
                          >
                            {isActionCompleted && (
                              <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className={cn(
                            'flex-1 text-sm font-medium cursor-pointer',
                            isActionCompleted && 'text-green-400'
                          )}>
                            {action}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Check if all steps are completed */}
      {completedSteps.length === steps.length && (
        <div className="mt-10 text-center animate-fade-in">
          <h3 className="text-xl font-bold mb-3">Congratulations! You've completed all steps.</h3>
          <p className="text-slate-300 mb-6">
            You're on your way to launching a successful product. Ready to take it to the next level?
          </p>
          <Button glow onClick={onComplete}>
            Continue Your Journey
          </Button>
        </div>
      )}
    </div>
  );
};

export default StrategySteps;

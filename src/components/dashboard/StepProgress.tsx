
import React from 'react';
import { CheckCircle2, Clock, Globe, LineChart, MessageSquare, Users } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

interface Step {
  id: number;
  title: string;
  description: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'pending';
  icon: React.ReactNode;
}

const StepProgress = () => {
  // This would typically come from your application state
  const steps: Step[] = [
    {
      id: 1,
      title: "Get a Domain, Deploy your project",
      description: "Secure your online identity and make your project accessible to the world.",
      progress: 100,
      status: 'completed',
      icon: <Globe className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "Get indexed by Google",
      description: "Set up sitemap.xml, Google Search Console, and Google Analytics.",
      progress: 75,
      status: 'in-progress',
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Build an Acquisition Strategy",
      description: "Establish channels to attract your first users.",
      progress: 40,
      status: 'in-progress',
      icon: <Users className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "Launch & Gather Feedback",
      description: "Release your product and start collecting insights.",
      progress: 10,
      status: 'in-progress',
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      id: 5,
      title: "Iterate & Grow",
      description: "Use feedback to improve and expand your user base.",
      progress: 0,
      status: 'pending',
      icon: <LineChart className="h-5 w-5" />,
    },
  ];

  return (
    <div className="space-y-6">
      {steps.map((step) => (
        <div key={step.id} className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
          <div className="flex items-start md:items-center gap-4 flex-col md:flex-row">
            <div className={`flex items-center justify-center h-10 w-10 rounded-full shrink-0 ${
              step.status === 'completed' ? 'bg-green-500 text-white' : 
              step.status === 'in-progress' ? 'bg-amber-500 text-white' : 
              'bg-slate-700 text-slate-300'
            }`}>
              {step.status === 'completed' ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : step.status === 'in-progress' ? (
                <Clock className="h-5 w-5" />
              ) : (
                step.icon
              )}
            </div>
            
            <div className="flex-1 space-y-2 w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="font-medium">{step.title}</h3>
                <span className="text-sm font-medium">
                  {step.status === 'completed' ? '✓ Completed' : 
                   step.status === 'in-progress' ? 'In Progress' : 
                   'Pending'}
                </span>
              </div>
              
              <p className="text-sm text-slate-300">{step.description}</p>
              
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Progress value={step.progress} className="h-2" />
                </div>
                <span className="text-sm font-medium">{step.progress}%</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepProgress;


import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check, Shield, Search, AlertCircle, FileCheck, Clock, BarChart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface AuditSectionProps {
  className?: string;
}

interface AuditItem {
  label: string;
  value: number;
  status: 'good' | 'warning' | 'critical';
}

const AuditSection = ({ className }: AuditSectionProps) => {
  const isMobile = useIsMobile();
  
  const seoItems: AuditItem[] = [
    { label: 'Page Load Speed', value: 85, status: 'good' },
    { label: 'Meta Tags', value: 100, status: 'good' },
    { label: 'Mobile Optimization', value: 90, status: 'good' },
    { label: 'Content Structure', value: 75, status: 'warning' },
    { label: 'Backlinks', value: 40, status: 'warning' }
  ];

  const securityItems: AuditItem[] = [
    { label: 'SSL Certificate', value: 100, status: 'good' },
    { label: 'XSS Protection', value: 95, status: 'good' },
    { label: 'CSRF Protection', value: 100, status: 'good' },
    { label: 'Password Policy', value: 60, status: 'warning' },
    { label: 'Data Encryption', value: 90, status: 'good' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'critical':
        return 'text-red-400';
      default:
        return 'text-neon';
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-400';
      case 'warning':
        return 'bg-yellow-400';
      case 'critical':
        return 'bg-red-400';
      default:
        return 'bg-neon';
    }
  };

  return (
    <div className={cn('py-12 md:py-20 relative overflow-hidden', className)}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.1),transparent_70%)] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_70%)] rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block mb-2 md:mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
            SITE HEALTH
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Comprehensive Site Audits</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Ensure your launch is successful with our in-depth SEO and Security audits
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* SEO Audit Section */}
          <motion.div 
            className="frost-container p-5 md:p-8 backdrop-blur-sm border border-white/10 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
              <div className="h-10 w-10 md:h-14 md:w-14 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center">
                <Search className="h-5 w-5 md:h-8 md:w-8 text-neon" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">SEO Audit</h3>
                <p className="text-slate-300 text-sm md:text-base">Optimize your site's visibility</p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              {seoItems.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1 md:mb-2 text-sm md:text-base">
                    <span className="text-slate-300">{item.label}</span>
                    <span className={cn('font-semibold', getStatusColor(item.status))}>
                      {item.value}%
                    </span>
                  </div>
                  <div className="relative h-1.5 md:h-2 bg-slate-700 rounded-full overflow-hidden">
                    <Progress 
                      value={item.value} 
                      className={cn('h-full', getProgressColor(item.status))} 
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex flex-wrap gap-3 md:gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-xs text-slate-300">Good</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <span className="text-xs text-slate-300">Needs Improvement</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <span className="text-xs text-slate-300">Critical</span>
                </div>
              </div>
              
              <Button variant="outline" size={isMobile ? "sm" : "default"} className="text-neon border-neon/50 hover:bg-neon/10">
                <FileCheck className="mr-2 h-4 w-4" />
                Full Report
              </Button>
            </div>
          </motion.div>

          {/* Security Audit Section */}
          <motion.div 
            className="frost-container p-5 md:p-8 backdrop-blur-sm border border-white/10 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
              <div className="h-10 w-10 md:h-14 md:w-14 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center">
                <Shield className="h-5 w-5 md:h-8 md:w-8 text-neon" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Security Audit</h3>
                <p className="text-slate-300 text-sm md:text-base">Protect your site and users</p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              {securityItems.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1 md:mb-2 text-sm md:text-base">
                    <span className="text-slate-300">{item.label}</span>
                    <span className={cn('font-semibold', getStatusColor(item.status))}>
                      {item.value}%
                    </span>
                  </div>
                  <div className="relative h-1.5 md:h-2 bg-slate-700 rounded-full overflow-hidden">
                    <Progress 
                      value={item.value} 
                      className={cn('h-full', getProgressColor(item.status))} 
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
              <div className="frost-container p-2 md:p-3 flex-1 flex items-center gap-2 md:gap-3 border border-white/5 rounded-lg">
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-green-400/20 flex items-center justify-center">
                  <Check className="h-4 w-4 md:h-6 md:w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-medium">Vulnerability Scan</h4>
                  <p className="text-xs text-slate-400">Last run: 2 days ago</p>
                </div>
              </div>
              
              <div className="frost-container p-2 md:p-3 flex-1 flex items-center gap-2 md:gap-3 border border-white/5 rounded-lg">
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-neon/20 flex items-center justify-center">
                  <Clock className="h-4 w-4 md:h-6 md:w-6 text-neon" />
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-medium">Real-time Monitoring</h4>
                  <p className="text-xs text-slate-400">Active protection</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Button removed: The "Generate Complete Site Analysis" button was here */}
      </div>
    </div>
  );
};

export default AuditSection;

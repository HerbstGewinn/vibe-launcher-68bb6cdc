
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check, Shield, Search, AlertCircle, FileCheck, Clock, BarChart, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from '@/components/ui/badge';

interface AuditSectionProps {
  className?: string;
}

interface ChecklistItem {
  label: string;
  completed: boolean;
}

const AuditSection = ({ className }: AuditSectionProps) => {
  const isMobile = useIsMobile();
  
  // SEO Checklist Items
  const seoItems: ChecklistItem[] = [
    { label: 'Sitemap Submitted?', completed: true },
    { label: 'Robots.txt Available?', completed: true },
    { label: 'Meta Tags Added?', completed: true },
    { label: 'Title Optimized?', completed: false }
  ];

  // Security Checklist Items
  const securityItems: ChecklistItem[] = [
    { label: 'No Exposed API Keys?', completed: true },
    { label: 'Row-Level Security (RLS) Activated?', completed: true },
    { label: 'HTTPS/SSL Certificate Active?', completed: true },
    { label: 'Dependencies Up-to-date?', completed: false },
    { label: 'Secure Authentication Enabled?', completed: true }
  ];

  const getCompletedCount = (items: ChecklistItem[]) => {
    return items.filter(item => item.completed).length;
  };

  const getStatusInfo = (completed: number, total: number) => {
    const ratio = completed / total;
    
    if (ratio === 1) return { text: 'Excellent', badge: '✅', color: 'text-green-400' };
    if (ratio >= 0.75) return { text: 'Good', badge: '🟢', color: 'text-green-400' };
    if (ratio >= 0.5) return { text: 'Needs Improvement', badge: '🟠', color: 'text-yellow-400' };
    return { text: 'Poor', badge: '🔴', color: 'text-red-400' };
  };

  const seoCompleted = getCompletedCount(seoItems);
  const seoStatus = getStatusInfo(seoCompleted, seoItems.length);
  
  const securityCompleted = getCompletedCount(securityItems);
  const securityStatus = getStatusInfo(securityCompleted, securityItems.length);

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

            <div className="space-y-3 md:space-y-4 mb-5">
              <h4 className="font-medium text-base md:text-lg">SEO Checklist</h4>
              {seoItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.completed ? 
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" /> : 
                    <XCircle className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  }
                  <span className="text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-space-light/30 border border-white/5 rounded-lg mt-5">
              <div className="mb-2">
                <h4 className="font-medium">✅ SEO Tasks Completed:</h4>
                <p className="text-lg font-semibold">[ {seoCompleted} / {seoItems.length} ] tasks completed</p>
              </div>
              
              <div className="space-y-1 mt-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{seoItems.length}/{seoItems.length} →</span>
                  <span className="font-medium">Excellent ✅</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{Math.ceil(seoItems.length * 0.75)}/{seoItems.length} →</span>
                  <span className="font-medium">Good 🟢</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{Math.ceil(seoItems.length * 0.5)}/{seoItems.length} →</span>
                  <span className="font-medium">Needs Improvement 🟠</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">0-{Math.floor(seoItems.length * 0.5 - 1)}/{seoItems.length} →</span>
                  <span className="font-medium">Poor 🔴</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
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

            <div className="space-y-3 md:space-y-4 mb-5">
              <h4 className="font-medium text-base md:text-lg">🔒 Security Checklist</h4>
              {securityItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.completed ? 
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" /> : 
                    <XCircle className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  }
                  <span className="text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-space-light/30 border border-white/5 rounded-lg mt-5">
              <div className="mb-2">
                <h4 className="font-medium">✅ Security Tasks Completed:</h4>
                <p className="text-lg font-semibold">[ {securityCompleted} / {securityItems.length} ] tasks completed</p>
              </div>
              
              <div className="space-y-1 mt-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{securityItems.length}/{securityItems.length} →</span>
                  <span className="font-medium">Excellent ✅</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{Math.ceil(securityItems.length * 0.75)}/{securityItems.length} →</span>
                  <span className="font-medium">Good 🟢</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">2-3/{securityItems.length} →</span>
                  <span className="font-medium">Needs Improvement 🟠</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">0-1/{securityItems.length} →</span>
                  <span className="font-medium">Poor 🔴</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button variant="outline" size={isMobile ? "sm" : "default"} className="text-neon border-neon/50 hover:bg-neon/10">
                <Shield className="mr-2 h-4 w-4" />
                Full Report
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuditSection;

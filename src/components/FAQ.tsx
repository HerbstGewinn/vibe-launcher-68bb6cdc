
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

interface FAQProps {
  className?: string;
}

const FAQ = ({ className }: FAQProps) => {
  const faqItems = [
    {
      question: 'What is Vibelaunch?',
      answer: 'Vibelaunch is a platform designed to help creators and founders launch products that users love. We provide tools, strategies, and support to navigate from initial concept to achieving your first 1000 users and beyond.'
    },
    {
      question: 'How does the launch strategy work?',
      answer: 'Our launch strategy follows a proven step-by-step process. We analyze your product, identify your target audience, create a personalized roadmap for user acquisition, and provide actionable insights to help you implement the strategy effectively.'
    },
    {
      question: 'Do I need technical skills to use Vibelaunch?',
      answer: 'No, Vibelaunch is designed for creators at all technical levels. Our platform offers user-friendly tools and guidance that anyone can use, regardless of their technical background.'
    },
    {
      question: 'How long does it take to get to 1000 users?',
      answer: 'The timeline varies depending on your product, industry, and how consistently you implement our strategies. Most founders see significant results within 2-3 months, with many reaching the 1000 user milestone within 6 months of consistent effort.'
    },
    {
      question: 'Can Vibelaunch help with my existing product?',
      answer: 'Absolutely! Vibelaunch works for both new and existing products. If you already have a product but need help with user acquisition and growth, our strategies can be tailored to your current stage.'
    }
  ];

  return (
    <div className={cn("container mx-auto px-4", className)}>
      <div className="text-center mb-12">
        <motion.span 
          className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          FREQUENTLY ASKED
        </motion.span>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Got Questions?
        </motion.h2>
        <motion.p 
          className="text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Find answers to commonly asked questions about Vibelaunch and how we can help you reach your first 1000 users
        </motion.p>
      </div>
      
      <div className="max-w-3xl mx-auto frost-container rounded-lg overflow-hidden">
        <Accordion type="single" collapsible className="w-full bg-space-light/30">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <AccordionItem value={`item-${index}`} className="border-neon/10">
                <AccordionTrigger className="text-left py-5 px-6 hover:no-underline hover:bg-space-light/40 group">
                  <span className="text-white group-hover:text-neon transition-colors">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-slate-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

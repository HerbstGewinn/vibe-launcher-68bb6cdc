
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Play, Info } from 'lucide-react';
import Button from './Button';

interface VideoTutorialProps {
  className?: string;
}

const VideoTutorial = ({ className }: VideoTutorialProps) => {
  return (
    <section className={cn('px-4 max-w-5xl mx-auto', className)}>
      <div className="text-center mb-8">
        <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
          QUICK TUTORIAL
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">See How It Works</h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Watch this short tutorial to understand how Vibelaunch helps you go from code to users in no time
        </p>
      </div>
      
      <motion.div 
        className="frost-container overflow-hidden relative aspect-video rounded-xl border-2 border-neon/20 shadow-neon-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Placeholder image with play button */}
        <div className="absolute inset-0 bg-space-light/30 backdrop-blur-sm flex items-center justify-center group">
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              className="h-20 w-20 rounded-full bg-neon/20 border-2 border-neon flex items-center justify-center mb-4 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:bg-neon/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="h-8 w-8 text-white fill-white" />
            </motion.div>
            <span className="text-neon font-medium">Watch tutorial (2:14)</span>
          </div>
          
          {/* Video thumbnail with neon overlay */}
          <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-blue-900/30 to-purple-900/30 z-0"></div>
          
          {/* Animated waves at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neon/10 to-transparent"></div>
        </div>
        
        {/* Info button */}
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-20 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/70">
          <Info className="h-5 w-5" />
        </Button>
        
        {/* Video will be embedded here */}
      </motion.div>
      
      <div className="mt-4 text-center text-sm text-slate-400">
        Learn how to deploy your project, optimize your landing page, and attract your first users.
      </div>
    </section>
  );
};

export default VideoTutorial;

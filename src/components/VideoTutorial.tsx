
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoTutorialProps {
  className?: string;
}

const VideoTutorial = ({ className }: VideoTutorialProps) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    // This will be implemented when the actual video is integrated
    setIsPlaying(true);
    console.log('Play video');
  };

  return (
    <motion.div
      className={cn('max-w-5xl mx-auto px-4 mb-12', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-space-light/20 border border-neon/20 shadow-lg group">
        {/* Video placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 flex items-center justify-center">
          {!isPlaying && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="text-center mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Launch Your Project in Minutes
                </h3>
                <p className="text-sm md:text-base text-slate-200 max-w-md">
                  Watch this quick tutorial to see how Vibelaunch helps you get users fast
                </p>
              </div>
              
              <Button 
                onClick={handlePlay}
                variant="default" 
                size="lg" 
                className="bg-neon hover:bg-neon/90 text-space rounded-full h-16 w-16 p-0 flex items-center justify-center shadow-neon"
              >
                <Play className="h-8 w-8" />
              </Button>
            </motion.div>
          )}
        </div>
        
        {/* Video thumbnail/placeholder image */}
        <div className="w-full h-full bg-slate-900 flex items-center justify-center">
          <img 
            src="/placeholder.svg" 
            alt="Video tutorial thumbnail" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default VideoTutorial;

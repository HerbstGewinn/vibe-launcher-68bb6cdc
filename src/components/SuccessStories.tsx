import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Quote } from 'lucide-react';

interface SuccessStoriesProps {
  className?: string;
}

const SuccessStories = ({ className }: SuccessStoriesProps) => {
  const stories = [
    {
      name: 'Sarah Thompson',
      company: 'StudyAura.app',
      quote: 'Vibelaunch transformed our launch strategy completely. We went from struggling to attract users to reaching our first 1000 users in just 2 months.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
      metrics: { users: '1,200+', growth: '275%', timeframe: '2 months' },
      url: 'https://studyaura.app'
    },
    {
      name: 'David Chen',
      company: 'SmartExam.io',
      quote: 'The step-by-step guidance was exactly what we needed. We followed the Vibelaunch strategy and our conversion rates doubled almost immediately.',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      metrics: { users: '3,500+', growth: '180%', timeframe: '3 months' },
      url: 'https://smartexam.io'
    },
    {
      name: 'Maya Jackson',
      company: 'MyTattoo.Studio',
      quote: 'As a solo founder, I was overwhelmed by the launch process. Vibelaunch broke it down into manageable steps that made growth feel achievable and even fun!',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      metrics: { users: '850+', growth: '210%', timeframe: '6 weeks' },
      url: 'https://mytattoo.studio'
    },
    {
      name: 'Alex Rivera',
      company: 'Strandsgame.app',
      quote: 'The interactive tracking and gamified approach kept our team motivated. We hit milestones faster than expected and attracted our target users effectively.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      metrics: { users: '5,000+', growth: '320%', timeframe: '4 months' },
      url: 'https://strandsgame.app'
    }
  ];

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={cn('py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Vision to Reality</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            See how founders like you achieved impressive growth with our launch strategies
          </p>
        </div>

        <Carousel 
          opts={{ loop: true, align: "start" }}
          className="max-w-5xl mx-auto"
        >
          <CarouselContent>
            {stories.map((story, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4 md:pl-6">
                <motion.div 
                  className="h-full frost-container p-6 md:p-8 backdrop-blur-sm hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => handleCardClick(story.url)}
                >
                  <Quote className="h-8 w-8 text-neon/60 mb-4" />
                  <p className="text-slate-200 mb-6 text-lg italic">"{story.quote}"</p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full overflow-hidden border border-neon/30">
                      <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{story.name}</h4>
                      <p className="text-neon text-sm">{story.company}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-700">
                    <div className="text-center">
                      <p className="text-neon font-bold text-xl">{story.metrics.users}</p>
                      <p className="text-slate-400 text-xs">Users</p>
                    </div>
                    <div className="text-center">
                      <p className="text-neon font-bold text-xl">{story.metrics.growth}</p>
                      <p className="text-slate-400 text-xs">Growth</p>
                    </div>
                    <div className="text-center">
                      <p className="text-neon font-bold text-xl">{story.metrics.timeframe}</p>
                      <p className="text-slate-400 text-xs">Timeframe</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="static transform-none mx-2 bg-space-light hover:bg-neon/10 border border-slate-700 hover:border-neon/30" />
            <CarouselNext className="static transform-none mx-2 bg-space-light hover:bg-neon/10 border border-slate-700 hover:border-neon/30" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default SuccessStories;

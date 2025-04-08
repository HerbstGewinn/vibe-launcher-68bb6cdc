import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import Particles from '@/components/Particles';
import { Progress } from '@/components/ui/progress';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Users, Award, Lightbulb, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import FAQ from '@/components/FAQ';

const About = () => {
  const isMobile = useIsMobile();
  
  const timeline = [
    {
      year: 'back in 2018',
      title: 'Stack Overflow Days: The Grind',
      description: "Remember the struggle? Piecing together solutions from scattered forums, battling cryptic errors. Building required sheer persistence."
    },
    {
      year: '2022-2023',
      title: 'AI Assistants Emerge: Faster Cycles',
      description: "Tools like Copilot began automating the boilerplate. Development speed increased, freeing up mental energy from repetitive tasks."
    },
    {
      year: '~2023',
      title: 'Conversational Code: The Game Changer',
      description: "ChatGPT, Cursor... suddenly, you could *talk* your code into existence. Prototyping and complex features became dramatically faster."
    },
    {
      year: 'Dec 2024',
      title: '"Vibe Coding" Arrives: Build Easy, Launch Hard',
      description: "The ethos shifts. With modern tools, building the *what* feels almost effortless. But the *who* and *how* – finding users – becomes the glaring challenge."
    },
    {
      year: 'Present',
      title: 'Vibelaunch: The Missing Playbook',
      description: "We saw the gap. Building is solved, launching isn't. Vibelaunch provides the clear, actionable strategy to get your creation in front of your first 1000 users."
    }
  ];
  
  const team = [
    {
      name: 'Kristian',
      role: 'Founder & CEO',
      bio: "In the heart of Berlin's thriving tech scene, I've had the privilege of contributing to the growth of innovative startups, including leading an engineering team at a VC-funded company valued at €20 million. My journey began while studying computer science, where I founded my first startup and learned the importance of collaboration and community support. With over six years of experience in software development, I've seen firsthand how the right tools and mindset can transform projects. Now, I'm passionate about helping fellow coders tap into their creative potential and build projects that resonate with the vibe of our community.",
      avatar: '/lovable-uploads/94dc1cc4-65d3-4581-b86f-7c0201a28ffd.png'
    },
    {
      name: 'Laurin',
      role: 'Head of Product',
      bio: 'Product visionary focused on the creator journey. Specialized in building intuitive experiences that help vibe coders connect their projects with the right audience.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80'
    }
  ];
  
  return (
    <div className="relative min-h-screen pb-20">
      {/* Background particles */}
      <Particles quantity={30} className="pointer-events-none" />
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_50%)]"></div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero section */}
      <div className="pt-20 pb-16 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          From Code to Community
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          How helping fellow coders sparked a mission to bridge the gap between building and belonging.
        </motion.p>
      </div>
      
      {/* Mission section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="frost-container p-6 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-slate-300 mb-4">
                At Vibelaunch, we know the high of shipping code. But we also know the uncertainty that follows. 
                Our mission is to empower vibe coders like you with the clarity and strategy needed to find your first users and build lasting momentum.
              </p>
              <p className="text-slate-300">
                We're demystifying growth for developers, turning the daunting task of user acquisition into a clear, actionable playbook, guiding you towards your first 1000 true fans.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="frost-container p-5 md:p-6 bg-space-light/50 flex flex-col items-center justify-center">
                <Users className="h-8 w-8 md:h-10 md:w-10 text-neon mb-3" />
                <h3 className="text-lg md:text-xl font-semibold mb-1">Community</h3>
                <p className="text-slate-400 text-xs md:text-sm text-center">For Vibe Coders</p>
              </div>
              <div className="frost-container p-5 md:p-6 bg-space-light/50 flex flex-col items-center justify-center">
                <Award className="h-8 w-8 md:h-10 md:w-10 text-neon mb-3" />
                <h3 className="text-lg md:text-xl font-semibold mb-1">Clarity</h3>
                <p className="text-slate-400 text-xs md:text-sm text-center">From Build to Launch</p>
              </div>
              <div className="frost-container p-5 md:p-6 bg-space-light/50 flex flex-col items-center justify-center">
                <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-neon mb-3" />
                <h3 className="text-lg md:text-xl font-semibold mb-1">Strategy</h3>
                <p className="text-slate-400 text-xs md:text-sm text-center">Actionable Playbooks</p>
              </div>
              <div className="frost-container p-5 md:p-6 bg-space-light/50 flex flex-col items-center justify-center">
                <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-neon mb-3" />
                <h3 className="text-lg md:text-xl font-semibold mb-1">Reach</h3>
                <p className="text-slate-400 text-xs md:text-sm text-center">Your First 1000 Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interactive timeline */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            From late-night coding sessions and forum help threads to building a dedicated launchpad for creators like you.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - only visible on desktop */}
          {!isMobile && (
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neon/30"></div>
          )}
          
          {/* Mobile timeline line - only visible on mobile */}
          {isMobile && (
            <div className="absolute left-12 top-0 h-full w-0.5 bg-neon/30"></div>
          )}
          
          {/* Timeline items */}
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              className={cn(
                "relative mb-12",
                isMobile ? "pl-16" : index % 2 === 0 ? "text-right" : "text-left"
              )}
              initial={{ opacity: 0, x: isMobile ? -20 : (index % 2 === 0 ? 50 : -50) }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {/* Desktop layout */}
              {!isMobile && (
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="frost-container p-6 bg-space-light/50 hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300">
                      <h3 className="text-neon text-lg font-bold mb-2">{item.year}</h3>
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-slate-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-space border-2 border-neon flex items-center justify-center shadow-neon">
                      <span className="text-neon font-semibold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Updated Mobile layout - Number in the top-left corner */}
              {isMobile && (
                <div className="relative">
                  {/* Content card */}
                  <div className="frost-container relative pl-5 pr-5 pb-5 pt-5 bg-space-light/50 hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300">
                    {/* Number indicator repositioned to top-left corner */}
                    <div className="absolute -top-4 -left-4 z-10">
                      <div className="h-8 w-8 rounded-full bg-space border-2 border-neon flex items-center justify-center shadow-neon-sm">
                        <span className="text-neon font-semibold">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Year and title */}
                    <h3 className="text-neon text-lg font-bold">{item.year}</h3>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-slate-300 text-sm">{item.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Team section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet The Crew</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We've been in your shoes. We're coders and builders passionate about helping you find your audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <motion.div 
                  className="frost-container p-6 text-center cursor-pointer group transition-all duration-300 hover:border-neon/50 hover:shadow-neon-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 overflow-hidden border-2 border-neon/30 group-hover:border-neon transition-all duration-300">
                    <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-neon text-sm mb-3">{member.role}</p>
                  <div className="text-sm text-slate-400">View Bio</div>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="frost-container border border-neon/30 bg-space-light/90 backdrop-blur-lg w-96 max-w-[calc(100vw-2rem)] z-50">
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-neon/30">
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{member.name}</h4>
                      <p className="text-neon text-xs">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300">{member.bio}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
      
      {/* CTA section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="frost-container p-6 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Find Your First 1000 Users?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Stop guessing, start growing. Get your personalized launch playbook with Vibelaunch.
          </p>
          <Button as="a" href="/" size="lg" glow>
            Get Started Today
          </Button>
        </div>
      </div>
      
      {/* FAQ Section */}
      <FAQ className="mb-20" />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;

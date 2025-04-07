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
      year: '2020',
      title: 'Foundation',
      description: 'Vibelaunch was established with a mission to help creators build products users love.'
    },
    {
      year: '2021',
      title: 'First 100 Clients',
      description: 'Successfully guided 100 startups through their launch journey.'
    },
    {
      year: '2022',
      title: 'Platform Launch',
      description: 'Launched our proprietary platform with automated strategy generation.'
    },
    {
      year: '2023',
      title: 'International Expansion',
      description: 'Expanded services to 20+ countries, helping global entrepreneurs.'
    },
    {
      year: '2024',
      title: 'Community Milestone',
      description: 'Built a thriving community of 10,000+ founders and creators.'
    }
  ];
  
  const team = [
    {
      name: 'Kristian',
      role: 'Founder & CEO',
      bio: "In the heart of Berlin's thriving tech scene, I've had the privilege of contributing to the growth of innovative startups, including leading an engineering team at a VC-funded company valued at €20 million. My journey began while studying computer science, where I founded my first startup and learned the importance of collaboration and community support. With over six years of experience in software development, I've seen firsthand how the right tools and mindset can transform projects. Now, I'm passionate about helping fellow coders tap into their creative potential and build projects that resonate with the vibe of our community.",
      avatar: '/lovable-uploads/c143ee72-5560-4de0-bf6e-a03b09362900.png'
    },
    {
      name: 'Laurin',
      role: 'Head of Product',
      bio: 'Product visionary with experience at multiple successful startups. Specialized in creating intuitive user experiences that drive engagement and help founders achieve their goals.',
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
          Our Story
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          From a simple idea to a platform that helps thousands of founders launch successful products
        </motion.p>
      </div>
      
      {/* Mission section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="frost-container p-6 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-slate-300 mb-4">
                At Vibelaunch.io, we believe that every great idea deserves the chance to reach its audience. 
                Our mission is to transform the way products are launched by providing founders with the tools, 
                strategies, and support they need to turn their vision into a thriving product with engaged users.
              </p>
              <p className="text-slate-300">
                We're committed to democratizing product launches and helping creators navigate the challenging 
                journey from initial concept to achieving their first 1000 users and beyond.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="frost-container p-5 md:p-6 bg-space-light/50 flex flex-col items-center justify-center">
                <Users className="h-8 w-8 md:h-10 md:w-10 text-neon mb-3" />
                <h3 className="text-lg md:text-xl font-semibold mb-1">10,000+</h3>
                <p className="text-slate-400 text-xs md:text-sm text-center">Users Helped</p>
              </div>
              <div className="frost-container p-5 md:p-6 bg-space-light/50 flex flex-col items-center justify-center">
                <Award className="h-8 w-8 md:h-10 md:w-10 text-neon mb-3" />
                <h3 className="text-lg md:text-xl font-semibold mb-1">98%</h3>
                <p className="text-slate-400 text-xs md:text-sm text-center">Success Rate</p>
              </div>
              <div className="frost-container p-5 md:p-6 bg-space-light/50 flex flex-col items-center justify-center">
                <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-neon mb-3" />
                <h3 className="text-lg md:text-xl font-semibold mb-1">5,000+</h3>
                <p className="text-slate-400 text-xs md:text-sm text-center">Projects Launched</p>
              </div>
              <div className="frost-container p-5 md:p-6 bg-space-light/50 flex flex-col items-center justify-center">
                <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-neon mb-3" />
                <h3 className="text-lg md:text-xl font-semibold mb-1">20+</h3>
                <p className="text-slate-400 text-xs md:text-sm text-center">Countries</p>
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
            From our humble beginnings to where we are today, explore the key milestones that have shaped Vibelaunch.io
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            The passionate experts behind Vibelaunch.io dedicated to your product's success
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Launch Your Product?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Join thousands of successful founders who have launched with Vibelaunch.io
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

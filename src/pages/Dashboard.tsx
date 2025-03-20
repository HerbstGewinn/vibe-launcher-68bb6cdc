
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StepProgress from '@/components/dashboard/StepProgress';
import ProjectStats from '@/components/dashboard/ProjectStats';
import ActionItems from '@/components/dashboard/ActionItems';
import StepChart from '@/components/dashboard/StepChart';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [selectedProject, setSelectedProject] = useState<string>("example.com");
  const navigate = useNavigate();
  
  // Simulated data - in a real app, this would come from a database
  const projects = [
    { url: "example.com", progress: 65 },
    { url: "myproject.io", progress: 32 },
    { url: "startup.app", progress: 87 }
  ];
  
  const handleProjectChange = (url: string) => {
    setSelectedProject(url);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <DashboardHeader 
          selectedProject={selectedProject}
          projects={projects}
          onProjectChange={handleProjectChange}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <ProjectStats 
            title="Completed Tasks"
            value="12/20"
            change="+4"
            trend="up"
          />
          <ProjectStats 
            title="Steps Completed"
            value="3/5"
            change="+1"
            trend="up"
          />
          <ProjectStats 
            title="Time to Launch"
            value="7 days"
            change="-2"
            trend="down"
            isPositive={true}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Launch Progress</CardTitle>
              <CardDescription>Track your project's journey to launch</CardDescription>
            </CardHeader>
            <CardContent>
              <StepChart />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Overall Progress</CardTitle>
              <CardDescription>Total completion: {projects.find(p => p.url === selectedProject)?.progress || 0}%</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Total Progress</span>
                  <span>{projects.find(p => p.url === selectedProject)?.progress || 0}%</span>
                </div>
                <Progress value={projects.find(p => p.url === selectedProject)?.progress || 0} className="h-2" />
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Recent Activity</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Completed domain setup</span>
                    <span className="text-muted-foreground">2 days ago</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Added Google Analytics tracking</span>
                    <span className="text-muted-foreground">3 days ago</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Submitted sitemap to Google</span>
                    <span className="text-muted-foreground">4 days ago</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="steps" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="steps">Launch Steps</TabsTrigger>
            <TabsTrigger value="tasks">Action Items</TabsTrigger>
          </TabsList>
          
          <TabsContent value="steps">
            <StepProgress />
          </TabsContent>
          
          <TabsContent value="tasks">
            <ActionItems />
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-8">
          <button 
            onClick={() => navigate('/')}
            className="text-neon hover:text-neon/80 transition-colors inline-flex items-center gap-1"
          >
            Back to Home
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;

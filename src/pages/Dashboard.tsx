
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StepProgress from '@/components/dashboard/StepProgress';
import ProjectStats from '@/components/dashboard/ProjectStats';
import ActionItems from '@/components/dashboard/ActionItems';
import StepChart from '@/components/dashboard/StepChart';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, 
  CheckCircle2, 
  Users, 
  MessageSquare, 
  LineChart, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Settings
} from 'lucide-react';

const Dashboard = () => {
  const [selectedProject, setSelectedProject] = useState<string>("example.com");
  const [selectedTab, setSelectedTab] = useState<string>("steps");
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
  
  const launchSteps = [
    { id: 1, name: "Domain & Deployment", icon: <Globe className="h-4 w-4" />, completed: true },
    { id: 2, name: "Google Indexing", icon: <CheckCircle2 className="h-4 w-4" />, completed: false },
    { id: 3, name: "Acquisition Strategy", icon: <Users className="h-4 w-4" />, completed: false },
    { id: 4, name: "Feedback Collection", icon: <MessageSquare className="h-4 w-4" />, completed: false },
    { id: 5, name: "Growth & Analytics", icon: <LineChart className="h-4 w-4" />, completed: false },
  ];
  
  const socialMediaPlatforms = [
    { id: 1, name: "Facebook", icon: <Facebook className="h-4 w-4" /> },
    { id: 2, name: "Twitter", icon: <Twitter className="h-4 w-4" /> },
    { id: 3, name: "Instagram", icon: <Instagram className="h-4 w-4" /> },
    { id: 4, name: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
    { id: 5, name: "YouTube", icon: <Youtube className="h-4 w-4" /> },
  ];
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="bg-gray-900/90 border-r border-gray-800">
          <SidebarHeader className="p-4">
            <h2 className="text-lg font-bold text-white mb-2">{selectedProject}</h2>
            <Progress value={projects.find(p => p.url === selectedProject)?.progress || 0} className="h-1.5" />
            <p className="text-xs text-gray-400 mt-1">Launch Progress: {projects.find(p => p.url === selectedProject)?.progress || 0}%</p>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Launch Steps</SidebarGroupLabel>
              <SidebarMenu>
                {launchSteps.map((step) => (
                  <SidebarMenuItem key={step.id}>
                    <SidebarMenuButton 
                      onClick={() => setSelectedTab("steps")}
                      isActive={selectedTab === "steps" && step.id === 1}
                    >
                      {step.icon}
                      <span>{step.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>Social Media</SidebarGroupLabel>
              <SidebarMenu>
                {socialMediaPlatforms.map((platform) => (
                  <SidebarMenuItem key={platform.id}>
                    <SidebarMenuButton 
                      onClick={() => setSelectedTab("social")}
                      isActive={selectedTab === "social" && platform.id === 1}
                    >
                      {platform.icon}
                      <span>{platform.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => navigate('/')}>
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8">
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
            
            <Tabs defaultValue="steps" className="mb-8" value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="steps">Launch Steps</TabsTrigger>
                <TabsTrigger value="tasks">Action Items</TabsTrigger>
                <TabsTrigger value="social">Social Media</TabsTrigger>
              </TabsList>
              
              <TabsContent value="steps">
                <StepProgress />
              </TabsContent>
              
              <TabsContent value="tasks">
                <ActionItems />
              </TabsContent>
              
              <TabsContent value="social">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {socialMediaPlatforms.map((platform) => (
                    <Card key={platform.id}>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-lg font-medium flex items-center gap-2">
                          {platform.icon}
                          {platform.name}
                        </CardTitle>
                        <div className="h-4 w-4 rounded-full bg-amber-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm">
                          <p className="text-muted-foreground">Not yet connected</p>
                          <button className="text-neon hover:underline mt-2 text-xs flex items-center">
                            Connect account
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;


import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DashboardHeaderProps {
  selectedProject: string;
  projects: { url: string; progress: number }[];
  onProjectChange: (url: string) => void;
}

const DashboardHeader = ({ selectedProject, projects, onProjectChange }: DashboardHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent mb-2">
            Launch <span className="text-neon">Dashboard</span>
          </h1>
          <p className="text-slate-300">
            Track and manage your project's journey from vibe to 1000 users
          </p>
        </div>
        
        <div className="w-full md:w-64">
          <Select 
            value={selectedProject}
            onValueChange={onProjectChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select project" />
            </SelectTrigger>
            <SelectContent>
              {projects.map(project => (
                <SelectItem key={project.url} value={project.url}>
                  {project.url}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mt-6 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="font-medium">Project URL:</span>
          <a 
            href={`https://${selectedProject}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neon hover:underline"
          >
            {selectedProject}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

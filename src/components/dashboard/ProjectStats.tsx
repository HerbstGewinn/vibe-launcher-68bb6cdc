
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from 'lucide-react';

interface ProjectStatsProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  isPositive?: boolean;
}

const ProjectStats = ({ title, value, change, trend, isPositive = trend === 'up' }: ProjectStatsProps) => {
  return (
    <Card className="bg-space-light/50 border-slate-700/50">
      <CardContent className="p-6">
        <h3 className="text-sm font-medium text-slate-300 mb-2">{title}</h3>
        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold">{value}</p>
          <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            <span>{change}</span>
            {trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectStats;

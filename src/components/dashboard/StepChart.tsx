
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// This would typically come from your application state
const data = [
  { name: 'Week 1', tasks: 2, complete: 2 },
  { name: 'Week 2', tasks: 8, complete: 5 },
  { name: 'Week 3', tasks: 12, complete: 7 },
  { name: 'Week 4', tasks: 16, complete: 10 },
  { name: 'Week 5', tasks: 20, complete: 12 },
  { name: 'Week 6', tasks: 22, complete: 15 },
];

const chartConfig = {
  tasks: {
    label: "Total Tasks",
    theme: {
      light: "hsl(var(--primary))",
      dark: "hsl(var(--primary))",
    },
  },
  complete: {
    label: "Completed",
    theme: {
      light: "#10b981",
      dark: "#10b981",
    },
  },
};

const StepChart = () => {
  return (
    <div className="h-80 w-full">
      <ChartContainer config={chartConfig}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-tasks)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--color-tasks)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorComplete" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-complete)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--color-complete)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="name" 
            stroke="rgba(255,255,255,0.4)"
            tick={{ fill: 'rgba(255,255,255,0.6)' }}
            tickLine={{ stroke: 'rgba(255,255,255,0.2)' }}
          />
          <YAxis 
            stroke="rgba(255,255,255,0.4)"
            tick={{ fill: 'rgba(255,255,255,0.6)' }}
            tickLine={{ stroke: 'rgba(255,255,255,0.2)' }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area 
            type="monotone" 
            dataKey="tasks" 
            stroke="var(--color-tasks)" 
            fillOpacity={1} 
            fill="url(#colorTasks)" 
          />
          <Area 
            type="monotone" 
            dataKey="complete" 
            stroke="var(--color-complete)" 
            fillOpacity={1} 
            fill="url(#colorComplete)" 
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default StepChart;

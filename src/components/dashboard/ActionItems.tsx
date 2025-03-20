
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

interface Task {
  id: string;
  step: number;
  description: string;
  completed: boolean;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

const ActionItems = () => {
  // This would typically come from your application state
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      step: 1,
      description: 'Register domain name',
      completed: true,
      dueDate: '2023-06-01',
      priority: 'high',
    },
    {
      id: '2',
      step: 1,
      description: 'Set up hosting with a reliable provider',
      completed: true,
      dueDate: '2023-06-05',
      priority: 'high',
    },
    {
      id: '3',
      step: 2,
      description: 'Create and submit sitemap.xml',
      completed: true,
      dueDate: '2023-06-10',
      priority: 'medium',
    },
    {
      id: '4',
      step: 2,
      description: 'Set up Google Search Console',
      completed: false,
      dueDate: '2023-06-12',
      priority: 'high',
    },
    {
      id: '5',
      step: 2,
      description: 'Configure Google Analytics',
      completed: false,
      dueDate: '2023-06-15',
      priority: 'medium',
    },
    {
      id: '6',
      step: 3,
      description: 'Identify key distribution channels',
      completed: false,
      dueDate: '2023-06-20',
      priority: 'high',
    },
    {
      id: '7',
      step: 3,
      description: 'Plan content marketing strategy',
      completed: false,
      dueDate: '2023-06-25',
      priority: 'low',
    },
  ]);

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="rounded-md border border-slate-700/50 overflow-hidden">
      <Table>
        <TableHeader className="bg-slate-800/50">
          <TableRow>
            <TableHead className="w-[50px]">Status</TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Step</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow 
              key={task.id}
              className={`${task.completed ? 'bg-slate-800/10' : ''} hover:bg-slate-800/30`}
            >
              <TableCell>
                <div 
                  className={`h-6 w-6 rounded border flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    task.completed 
                      ? 'bg-green-500 border-green-500' 
                      : 'border-slate-500 hover:border-neon'
                  }`}
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  {task.completed && <CheckCircle2 className="h-4 w-4 text-white" />}
                </div>
              </TableCell>
              <TableCell className={task.completed ? 'text-slate-400 line-through' : ''}>
                {task.description}
              </TableCell>
              <TableCell>Step {task.step}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {!task.completed && new Date(task.dueDate) < new Date() ? (
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  ) : !task.completed ? (
                    <Clock className="h-4 w-4 text-amber-500" />
                  ) : null}
                  <span className={
                    !task.completed && new Date(task.dueDate) < new Date() ? 'text-red-500' : ''
                  }>
                    {formatDate(task.dueDate)}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  task.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                  task.priority === 'medium' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {task.priority}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ActionItems;

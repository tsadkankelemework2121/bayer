import React from 'react';
import { AlertTriangle, TrendingDown, Users, Zap } from 'lucide-react';

type Region = 'kenya' | 'tanzania';

const stats = {
  kenya: [
    {
      label: 'Total Fleet Size',
      value: '81',
      change: 'vehicles',
      icon: Users,
      color: 'blue',
    },
    {
      label: 'Speed Violations',
      value: '45',
      change: 'exceeding 110 km/h',
      icon: AlertTriangle,
      color: 'red',
    },
    {
      label: 'Prohibited Hours Violations',
      value: '68',
      change: 'vehicles',
      icon: Zap,
      color: 'orange',
    },
    {
      label: 'Compliance Rate',
      value: '16%',
      change: 'compliant vehicles',
      icon: TrendingDown,
      color: 'green',
    },
  ],
  tanzania: [
    {
      label: 'Total Fleet Size',
      value: '27',
      change: 'vehicles',
      icon: Users,
      color: 'blue',
    },
    {
      label: 'Speed Violations',
      value: '5',
      change: 'only brief incidents',
      icon: AlertTriangle,
      color: 'green',
    },
    {
      label: 'Prohibited Hours Violations',
      value: '21',
      change: 'vehicles',
      icon: Zap,
      color: 'orange',
    },
    {
      label: 'Compliance Rate',
      value: '22%',
      change: 'compliant vehicles',
      icon: TrendingDown,
      color: 'green',
    },
  ],
};

interface StatsCardsProps {
  region: Region;
}

const colorMap = {
  blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400',
  red: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400',
  orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400',
  green: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400',
};

export default function StatsCards({ region }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats[region].map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${colorMap[stat.color as keyof typeof colorMap]}`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">
              {stat.label}
            </p>
            <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {stat.value}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">{stat.change}</p>
          </div>
        );
      })}
    </div>
  );
}

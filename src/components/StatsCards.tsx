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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      {stats[region].map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 group overflow-hidden relative"
          >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent dark:from-slate-700/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 flex items-start justify-between mb-4">
              <div className={`p-3.5 rounded-lg ${colorMap[stat.color as keyof typeof colorMap]} group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              {stat.label}
            </p>
            <p className="text-4xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {stat.value}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{stat.change}</p>
            
            {/* Right accent bar */}
            <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-transparent to-transparent group-hover:from-blue-400 group-hover:via-blue-300 transition-all duration-300" />
          </div>
        );
      })}
    </div>
  );
}

import React from 'react';
import { Lightbulb, TrendingUp, AlertCircle } from 'lucide-react';

type Region = 'kenya' | 'tanzania';

interface InsightsProps {
  region: Region;
}

const insightsData = {
  kenya: [
    {
      type: 'warning',
      icon: AlertCircle,
      title: 'High Speed Violation Rate',
      description: 'KCU 905Z (81 cases) significantly exceeds safety limits. Immediate driver coaching recommended.',
      color: 'red',
    },
    {
      type: 'insight',
      icon: Lightbulb,
      title: 'Overspeeding Duration Pattern',
      description: 'Most vehicles sustain peak speeds briefly, suggesting overtaking rather than habitual overspeeding.',
      color: 'blue',
    },
    {
      type: 'insight',
      icon: TrendingUp,
      title: 'Compliance Improvement Needed',
      description: '84% of fleet needs attention for prohibited hours compliance. Implement scheduling improvements.',
      color: 'orange',
    },
  ],
  tanzania: [
    {
      type: 'insight',
      icon: TrendingUp,
      title: 'Excellent Speed Compliance',
      description: 'Only 5 vehicles with overspeeding incidents, all brief. Fleet is performing well above expectations.',
      color: 'green',
    },
    {
      type: 'insight',
      icon: Lightbulb,
      title: 'Strong Overall Performance',
      description: 'Tanzania fleet demonstrates better adherence to driving regulations compared to Kenya.',
      color: 'green',
    },
    {
      type: 'warning',
      icon: AlertCircle,
      title: 'Prohibited Hours Violations',
      description: '78% of fleet requires attention for prohibited hours compliance. Driver scheduling review needed.',
      color: 'orange',
    },
  ],
};

export default function Insights({ region }: InsightsProps) {
  const insights = insightsData[region];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; border: string; icon: string; title: string }> = {
      red: {
        bg: 'bg-red-50 dark:bg-red-900/20',
        border: 'border-red-200 dark:border-red-800',
        icon: 'text-red-600 dark:text-red-400',
        title: 'text-red-900 dark:text-red-100',
      },
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        icon: 'text-blue-600 dark:text-blue-400',
        title: 'text-blue-900 dark:text-blue-100',
      },
      orange: {
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        border: 'border-orange-200 dark:border-orange-800',
        icon: 'text-orange-600 dark:text-orange-400',
        title: 'text-orange-900 dark:text-orange-100',
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        icon: 'text-green-600 dark:text-green-400',
        title: 'text-green-900 dark:text-green-100',
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
        📊 Key Insights & Recommendations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          const colors = getColorClasses(insight.color);
          return (
            <div
              key={index}
              className={`border rounded-lg p-4 ${colors.bg} ${colors.border}`}
            >
              <div className="flex gap-3">
                <Icon className={`w-5 h-5 flex-shrink-0 mt-1 ${colors.icon}`} />
                <div>
                  <h4 className={`font-semibold text-sm mb-1 ${colors.title}`}>
                    {insight.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {insight.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

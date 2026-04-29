import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

type Region = 'kenya' | 'tanzania';

interface ChartsSectionProps {
  region: Region;
}

const kenyaSpeedData = [
  { range: '110-120 km/h', vehicles: 28 },
  { range: '120-130 km/h', vehicles: 12 },
  { range: '130+ km/h', vehicles: 5 },
];

const tanzaniaSpeedData = [
  { range: '110-120 km/h', vehicles: 4 },
  { range: '120-130 km/h', vehicles: 1 },
  { range: '130+ km/h', vehicles: 0 },
];

const kenyaComplianceData = [
  { name: 'Compliant', value: 13, color: '#22c55e' },
  { name: 'Higher Risk', value: 16, color: '#ef4444' },
  { name: 'Normal', value: 52, color: '#94a3b8' },
];

const tanzaniaComplianceData = [
  { name: 'Compliant', value: 6, color: '#22c55e' },
  { name: 'Higher Risk', value: 8, color: '#ef4444' },
  { name: 'Normal', value: 13, color: '#94a3b8' },
];

export default function ChartsSection({ region }: ChartsSectionProps) {
  const speedData = region === 'kenya' ? kenyaSpeedData : tanzaniaSpeedData;
  const complianceData = region === 'kenya' ? kenyaComplianceData : tanzaniaComplianceData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Speed Violations Chart */}
      <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Speed Violations Distribution
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          {region === 'kenya' 
            ? 'KCU 905Z recorded the highest count with 81 overspeeding cases'
            : 'Only brief overspeeding incidents, likely during overtaking'}
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={speedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="range" 
              stroke="#64748b"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#64748b"
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#f1f5f9',
              }}
            />
            <Bar dataKey="vehicles" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Compliance Status Chart */}
      <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Prohibited Hours Compliance
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          {region === 'kenya' 
            ? '20% of fleet posed higher risks for prohibited driving'
            : '29% of fleet posed higher risks for prohibited driving'}
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={complianceData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {complianceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#f1f5f9',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

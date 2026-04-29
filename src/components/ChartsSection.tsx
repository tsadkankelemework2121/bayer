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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
      {/* Speed Violations Chart */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-7 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Speed Violations Distribution
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {region === 'kenya' 
              ? 'KCU 905Z recorded the highest count with 81 overspeeding cases'
              : 'Only brief overspeeding incidents, likely during overtaking'}
          </p>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={speedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0 dark:stroke-slate-700" opacity={0.5} />
            <XAxis 
              dataKey="range" 
              stroke="#94a3b8"
              style={{ fontSize: '12px', fontWeight: 500 }}
            />
            <YAxis 
              stroke="#94a3b8"
              style={{ fontSize: '12px', fontWeight: 500 }}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #475569',
                borderRadius: '10px',
                color: '#f1f5f9',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
              }}
              formatter={(value) => [value, 'Vehicles']}
            />
            <Bar dataKey="vehicles" fill="#3b82f6" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Compliance Status Chart */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-7 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Prohibited Hours Compliance
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {region === 'kenya' 
              ? '20% of fleet posed higher risks for prohibited driving'
              : '29% of fleet posed higher risks for prohibited driving'}
          </p>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={complianceData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value, color }) => (
                <text x="0" y="0" fill={color} fontSize="12" fontWeight="600" textAnchor="middle">
                  {name}: {value}
                </text>
              )}
              outerRadius={110}
              fill="#8884d8"
              dataKey="value"
              animationDuration={400}
            >
              {complianceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #475569',
                borderRadius: '10px',
                color: '#f1f5f9',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
              }}
              formatter={(value) => `${value} vehicles`}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

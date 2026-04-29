import React, { useState } from 'react';
import { ChevronDown, Award, AlertTriangle } from 'lucide-react';

type Region = 'kenya' | 'tanzania';

interface Vehicle {
  id: string;
  name: string;
  status: 'excellent' | 'caution' | 'warning';
  metrics: {
    maxSpeed?: string;
    overspeeding?: number;
    prohibitedDriving?: string;
    durationMinutes?: number;
  };
}

const vehicleData = {
  kenya: {
    topPerformers: [
      { id: '1', name: 'KCU 880Z', status: 'excellent', metrics: { maxSpeed: '123 km/h (highest)' } as const },
    ],
    violations: [
      { id: '2', name: 'KCU 905Z', status: 'warning', metrics: { overspeeding: 81 } as const },
      { id: '3', name: 'KDK 194K', status: 'caution', metrics: { prohibitedDriving: '541 km', durationMinutes: 518 } as const },
    ],
  },
  tanzania: {
    topPerformers: [
      { id: 'T1', name: 'T 340 DPU', status: 'excellent', metrics: { maxSpeed: 'Best performer' } as const },
      { id: 'T2', name: 'T 921 EDW', status: 'excellent', metrics: { maxSpeed: 'Best performer' } as const },
      { id: 'T3', name: 'T 559 EHW', status: 'excellent', metrics: { maxSpeed: 'Best performer' } as const },
    ],
    violations: [
      { id: 'T4', name: 'T 561 EXW', status: 'caution', metrics: { prohibitedDriving: '890 minutes', durationMinutes: 890 } as const },
    ],
  },
};

interface VehiclesListProps {
  region: Region;
}

export default function VehiclesList({ region }: VehiclesListProps) {
  const [expandedSection, setExpandedSection] = useState<'top' | 'violations' | null>('top');
  const data = vehicleData[region];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-50 dark:bg-green-900/20';
      case 'caution':
        return 'bg-orange-50 dark:bg-orange-900/20';
      case 'warning':
        return 'bg-red-50 dark:bg-red-900/20';
      default:
        return 'bg-slate-50 dark:bg-slate-900/20';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'caution':
        return 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200';
      case 'warning':
        return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200';
    }
  };

  const VehicleRow = ({ vehicle }: { vehicle: Vehicle }) => {
    const Icon = vehicle.status === 'excellent' ? Award : AlertTriangle;
    return (
      <div className={`p-5 rounded-lg border border-slate-200 dark:border-slate-600 hover:shadow-md transition-all duration-300 group cursor-pointer ${getStatusColor(vehicle.status)}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="p-2.5 rounded-lg bg-white/60 dark:bg-slate-700/50 group-hover:scale-110 transition-transform duration-300">
              <Icon className={`w-5 h-5 ${
                vehicle.status === 'excellent' ? 'text-green-600 dark:text-green-400' :
                vehicle.status === 'caution' ? 'text-orange-600 dark:text-orange-400' :
                'text-red-600 dark:text-red-400'
              }`} />
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{vehicle.name}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {vehicle.metrics.maxSpeed || vehicle.metrics.overspeeding || 
                 `${vehicle.metrics.prohibitedDriving} (${vehicle.metrics.durationMinutes} min)`}
              </p>
            </div>
          </div>
          <span className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap ${getStatusBadgeColor(vehicle.status)}`}>
            {vehicle.status === 'excellent' ? 'Compliant' : vehicle.status === 'caution' ? 'Caution' : 'Warning'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Performers */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <button
          onClick={() => setExpandedSection(expandedSection === 'top' ? null : 'top')}
          className="w-full px-7 py-5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border-b border-slate-200 dark:border-slate-700 group"
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-green-100 dark:bg-green-900/30 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Top Performing Vehicles
            </h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform duration-300 ${
              expandedSection === 'top' ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSection === 'top' && (
          <div className="px-7 py-5 space-y-3 bg-green-50/30 dark:bg-green-900/10">
            {data.topPerformers.length > 0 ? (
              data.topPerformers.map((vehicle) => (
                <VehicleRow key={vehicle.id} vehicle={vehicle} />
              ))
            ) : (
              <p className="text-slate-600 dark:text-slate-400 text-sm">No data available</p>
            )}
            {region === 'tanzania' && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 leading-relaxed font-medium">
                Top 10 performers: T 340 DPU, T 921 EDW, T 559 EHW, T 701 DXS, T 580 DZN, T 283 DZJ, T 122 EME, T 344 EPP, T 602 EBB, T 902 EDW
              </p>
            )}
          </div>
        )}
      </div>

      {/* Problem Vehicles */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <button
          onClick={() => setExpandedSection(expandedSection === 'violations' ? null : 'violations')}
          className="w-full px-7 py-5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border-b border-slate-200 dark:border-slate-700 group"
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-red-100 dark:bg-red-900/30 group-hover:scale-110 transition-transform duration-300">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Vehicles Requiring Attention
            </h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform duration-300 ${
              expandedSection === 'violations' ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSection === 'violations' && (
          <div className="px-7 py-5 space-y-3 bg-red-50/30 dark:bg-red-900/10">
            {data.violations.length > 0 ? (
              data.violations.map((vehicle) => (
                <VehicleRow key={vehicle.id} vehicle={vehicle} />
              ))
            ) : (
              <p className="text-slate-600 dark:text-slate-400 text-sm">No violations detected</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

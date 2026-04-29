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
      <div className={`p-4 rounded-lg border border-slate-200 dark:border-slate-700 ${getStatusColor(vehicle.status)}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <Icon className={`w-5 h-5 ${
              vehicle.status === 'excellent' ? 'text-green-600 dark:text-green-400' :
              vehicle.status === 'caution' ? 'text-orange-600 dark:text-orange-400' :
              'text-red-600 dark:text-red-400'
            }`} />
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">{vehicle.name}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {vehicle.metrics.maxSpeed || vehicle.metrics.overspeeding || 
                 `${vehicle.metrics.prohibitedDriving} (${vehicle.metrics.durationMinutes} min)`}
              </p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(vehicle.status)}`}>
            {vehicle.status === 'excellent' ? 'Compliant' : vehicle.status === 'caution' ? 'Caution' : 'Warning'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Performers */}
      <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          onClick={() => setExpandedSection(expandedSection === 'top' ? null : 'top')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-200 dark:border-slate-800"
        >
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              🏆 Top Performing Vehicles
            </h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform ${
              expandedSection === 'top' ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSection === 'top' && (
          <div className="px-6 py-4 space-y-3">
            {data.topPerformers.length > 0 ? (
              data.topPerformers.map((vehicle) => (
                <VehicleRow key={vehicle.id} vehicle={vehicle} />
              ))
            ) : (
              <p className="text-slate-600 dark:text-slate-400 text-sm">No data available</p>
            )}
            {region === 'tanzania' && (
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                Top 10 performers: T 340 DPU, T 921 EDW, T 559 EHW, T 701 DXS, T 580 DZN, T 283 DZJ, T 122 EME, T 344 EPP, T 602 EBB, T 902 EDW
              </p>
            )}
          </div>
        )}
      </div>

      {/* Problem Vehicles */}
      <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          onClick={() => setExpandedSection(expandedSection === 'violations' ? null : 'violations')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-200 dark:border-slate-800"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              ⚠️ Vehicles Requiring Attention
            </h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform ${
              expandedSection === 'violations' ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSection === 'violations' && (
          <div className="px-6 py-4 space-y-3">
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

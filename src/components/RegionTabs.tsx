import React from 'react';

type Region = 'kenya' | 'tanzania';

interface RegionTabsProps {
  selectedRegion: Region;
  onSelectRegion: (region: Region) => void;
}

export default function RegionTabs({ selectedRegion, onSelectRegion }: RegionTabsProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-2">
          {(['kenya', 'tanzania'] as const).map((region) => (
            <button
              key={region}
              onClick={() => onSelectRegion(region)}
              className={`px-6 py-3 font-semibold text-sm rounded-t-lg transition-all duration-200 ${
                selectedRegion === region
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              {region.charAt(0).toUpperCase() + region.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

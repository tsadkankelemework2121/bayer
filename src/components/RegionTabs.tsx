import React from 'react';

type Region = 'kenya' | 'tanzania';

interface RegionTabsProps {
  selectedRegion: Region;
  onSelectRegion: (region: Region) => void;
}

export default function RegionTabs({ selectedRegion, onSelectRegion }: RegionTabsProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex gap-8">
        {(['kenya', 'tanzania'] as const).map((region) => (
          <button
            key={region}
            onClick={() => onSelectRegion(region)}
            className={`px-4 py-4 font-semibold text-sm border-b-2 transition-all ${
              selectedRegion === region
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

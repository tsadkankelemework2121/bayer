import React, { useState } from 'react';
import Header from './Header';
import RegionTabs from './RegionTabs';
import StatsCards from './StatsCards';
import Insights from './Insights';
import ChartsSection from './ChartsSection';
import VehiclesList from './VehiclesList';

type Region = 'kenya' | 'tanzania';

export default function Dashboard() {
  const [selectedRegion, setSelectedRegion] = useState<Region>('kenya');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />
      <main className="w-full">
        <RegionTabs selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion} />
        <div className="px-6 py-8 max-w-7xl mx-auto">
          <StatsCards region={selectedRegion} />
          <Insights region={selectedRegion} />
          <ChartsSection region={selectedRegion} />
          <VehiclesList region={selectedRegion} />
        </div>
      </main>
    </div>
  );
}

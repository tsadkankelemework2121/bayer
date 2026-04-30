import { useState } from 'react';
import { mockData } from './data/mockData';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Header } from './components/dashboard/Header';
import { KPIGrid } from './components/dashboard/KPIGrid';
import { Charts } from './components/dashboard/Charts';
import { Tables } from './components/dashboard/Tables';
import { InsightPanel } from './components/dashboard/InsightPanel';

function App() {
  const [selectedRegion, setSelectedRegion] = useState<"Kenya" | "Tanzania">("Kenya");

  const regionData = selectedRegion === "Kenya" ? mockData.kenya : mockData.tanzania;

  return (
    <DashboardLayout>
      <Header 
        organization={mockData.organization}
        title={mockData.title}
        subtitle={`${mockData.month} - ${selectedRegion} Region Overview`}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
      />
      
      <KPIGrid data={regionData} />
      
      <InsightPanel region={selectedRegion} data={regionData} />
      
      <Charts data={regionData} />
      
      <Tables data={regionData} />
      
    </DashboardLayout>
  );
}

export default App;

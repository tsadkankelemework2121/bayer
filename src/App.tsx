import { useState } from 'react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './index.css'

function App() {
  const [activeRegion, setActiveRegion] = useState('kenya')

  // Kenya Data
  const kenyaOverspeedData = [
    { vehicle: 'KCU 905Z', incidents: 81 },
    { vehicle: 'KCU 880Z', incidents: 45 },
    { vehicle: 'Other Vehicles', incidents: 68 }
  ]

  const kenyaComplianceData = [
    { name: 'Compliant', value: 16, color: '#10b981' },
    { name: 'Higher Risk', value: 20, color: '#ef4444' },
    { name: 'Other', value: 64, color: '#6b7280' }
  ]

  const kenyaTopVehicles = [
    { rank: 1, vehicle: 'KCU 001', speed: '110 km/h', status: 'Excellent' },
    { rank: 2, vehicle: 'KCU 002', speed: '110 km/h', status: 'Excellent' },
    { rank: 3, vehicle: 'KCU 003', speed: '110 km/h', status: 'Good' },
    { rank: 4, vehicle: 'KCU 004', speed: '110 km/h', status: 'Good' },
    { rank: 5, vehicle: 'KCU 005', speed: '108 km/h', status: 'Good' },
  ]

  // Tanzania Data
  const tanzaniaOverspeedData = [
    { vehicle: 'T 561 EXW', incidents: 890 },
    { vehicle: 'Other 21 Vehicles', incidents: 50 }
  ]

  const tanzaniaComplianceData = [
    { name: 'Compliant', value: 22, color: '#10b981' },
    { name: 'Higher Risk', value: 29, color: '#ef4444' },
    { name: 'Other', value: 49, color: '#6b7280' }
  ]

  const tanzaniaTopVehicles = [
    { rank: 1, vehicle: 'T 340 DPU', speed: '105 km/h', status: 'Excellent' },
    { rank: 2, vehicle: 'T 921 EDW', speed: '105 km/h', status: 'Excellent' },
    { rank: 3, vehicle: 'T 559 EHW', speed: '105 km/h', status: 'Good' },
    { rank: 4, vehicle: 'T 701 DXS', speed: '103 km/h', status: 'Good' },
    { rank: 5, vehicle: 'T 580 DZN', speed: '103 km/h', status: 'Good' },
  ]

  const isKenyaActive = activeRegion === 'kenya'
  const overSpeedData = isKenyaActive ? kenyaOverspeedData : tanzaniaOverspeedData
  const complianceData = isKenyaActive ? kenyaComplianceData : tanzaniaComplianceData
  const topVehicles = isKenyaActive ? kenyaTopVehicles : tanzaniaTopVehicles
  const fleetSize = isKenyaActive ? 81 : 27

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-card-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Bayer East Africa</h1>
                <p className="text-xs text-gray-400">Fleet Management Dashboard</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              January 2026 Report
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Region Selector */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveRegion('kenya')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              isKenyaActive
                ? 'bg-primary text-white shadow-lg'
                : 'bg-card-bg text-foreground border border-card-border hover:border-primary'
            }`}
          >
            Kenya ({kenyaOverspeedData[2].incidents + 45} vehicles)
          </button>
          <button
            onClick={() => setActiveRegion('tanzania')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              !isKenyaActive
                ? 'bg-primary text-white shadow-lg'
                : 'bg-card-bg text-foreground border border-card-border hover:border-primary'
            }`}
          >
            Tanzania (27 vehicles)
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card-bg border border-card-border rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Fleet Size</p>
            <p className="text-3xl font-bold text-primary">{fleetSize}</p>
            <p className="text-xs text-gray-500 mt-2">Total vehicles</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Overspeeding Incidents</p>
            <p className="text-3xl font-bold text-accent">{isKenyaActive ? 45 : 5}</p>
            <p className="text-xs text-gray-500 mt-2">Vehicles affected</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Prohibited Hours Violations</p>
            <p className="text-3xl font-bold text-accent-red">{isKenyaActive ? 68 : 21}</p>
            <p className="text-xs text-gray-500 mt-2">Vehicles driving during restricted hours</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Compliance Rate</p>
            <p className="text-3xl font-bold text-primary">{isKenyaActive ? 16 : 22}%</p>
            <p className="text-xs text-gray-500 mt-2">Fully compliant vehicles</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Overspeeding Chart */}
          <div className="bg-card-bg border border-card-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Overspeeding Incidents</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={overSpeedData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="vehicle" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }} />
                <Bar dataKey="incidents" fill="#f59e0b" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Compliance Distribution */}
          <div className="bg-card-bg border border-card-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Compliance Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={complianceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {complianceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex gap-4 justify-center mt-4">
              {complianceData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-400">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Performing Vehicles */}
        <div className="bg-card-bg border border-card-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-6">Top 5 Best Performing Vehicles</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Rank</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Vehicle ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Max Speed</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {topVehicles.map((vehicle) => (
                  <tr key={vehicle.rank} className="border-b border-card-border hover:bg-[#1a1f2e] transition-colors">
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white text-sm font-bold">
                        {vehicle.rank}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-foreground font-semibold">{vehicle.vehicle}</td>
                    <td className="py-4 px-4 text-gray-400">{vehicle.speed}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary">
                        ✓ {vehicle.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-8 bg-gradient-to-r from-card-bg to-card-bg border border-card-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {isKenyaActive ? (
              <>
                <div className="flex gap-3">
                  <span className="text-accent text-xl">•</span>
                  <p className="text-gray-400">Vehicle KCU 905Z recorded 81 overspeeding incidents - highest in the fleet</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent-red text-xl">•</span>
                  <p className="text-gray-400">KDK 194K drove longest during prohibited hours (541km, 518 minutes)</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary text-xl">•</span>
                  <p className="text-gray-400">Only 16% of fleet fully compliant with prohibited driving hours</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-warning text-xl">•</span>
                  <p className="text-gray-400">Peak speeds were brief, suggesting overtaking rather than prolonged overspeeding</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-3">
                  <span className="text-primary text-xl">•</span>
                  <p className="text-gray-400">Only 5 vehicles had overspeeding cases - better compliance than Kenya</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent-red text-xl">•</span>
                  <p className="text-gray-400">T 561 EXW had highest travel duration (890 minutes during prohibited hours)</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary text-xl">•</span>
                  <p className="text-gray-400">22% of fleet fully compliant with restricted driving hours</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-warning text-xl">•</span>
                  <p className="text-gray-400">Overspeeding events were brief, typically lasting only a few seconds</p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-card-border mt-12 bg-card-bg py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">Bayer East Africa Fleet Management System © 2026</p>
          <p className="text-gray-600 text-xs mt-2">January 2026 Eco Driving & Prohibitory Driving Report</p>
        </div>
      </footer>
    </div>
  )
}

export default App

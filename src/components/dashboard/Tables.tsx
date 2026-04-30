import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import type { RegionData } from "../../data/mockData";

interface TablesProps {
  data: RegionData;
}

export function Tables({ data }: TablesProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Violations Table */}
      <Card className="lg:col-span-2 overflow-hidden border-slate-200/60 shadow-sm">
        <CardHeader className="border-b border-slate-100 bg-white">
          <CardTitle className="text-slate-900">Recent Violations</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase tracking-wider bg-slate-50/50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 font-semibold">Vehicle ID</th>
                  <th className="px-6 py-4 font-semibold">Overspeed Events</th>
                  <th className="px-6 py-4 font-semibold">Max Speed (km/h)</th>
                  <th className="px-6 py-4 font-semibold">Prohibited (mins)</th>
                  <th className="px-6 py-4 font-semibold">Risk Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.violationsList.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">{row.vehicle}</td>
                    <td className="px-6 py-4 text-slate-600 font-medium">{row.overspeedCount}</td>
                    <td className="px-6 py-4 text-slate-600 font-medium">{row.maxSpeed}</td>
                    <td className="px-6 py-4 text-slate-600 font-medium">{row.prohibitedDuration}</td>
                    <td className="px-6 py-4">
                      <Badge 
                        variant={row.riskLevel === "High" ? "dark" : row.riskLevel === "Medium" ? "secondary" : "primary"}
                      >
                        {row.riskLevel}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Top Performers Table */}
      <Card className="border-slate-200/60 shadow-sm">
        <CardHeader className="border-b border-teal-100 bg-teal-50/30">
          <CardTitle className="text-teal-900">Top Performers</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase tracking-wider bg-slate-50/50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 font-semibold">Rank</th>
                  <th className="px-6 py-4 font-semibold">Vehicle ID</th>
                  <th className="px-6 py-4 font-semibold text-right">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.topPerformers.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                        {index + 1}
                      </span>
                    </td>
                    <td className="px-6 py-3 font-semibold text-slate-900">{row.vehicle}</td>
                    <td className="px-6 py-3 text-right font-bold text-teal-600">{row.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

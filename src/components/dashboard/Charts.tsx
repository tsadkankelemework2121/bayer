import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import type { RegionData } from "../../data/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

interface ChartsProps {
  data: RegionData;
}

export function Charts({ data }: ChartsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Speed Analysis Chart */}
      <Card className="lg:col-span-2 border-slate-200/60 shadow-sm">
        <CardHeader>
          <CardTitle className="text-slate-900">Speed Analysis (Overspeeding Events)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.speedAnalysisData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d9488" stopOpacity={1} />
                    <stop offset="100%" stopColor="#0f766e" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="vehicle" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} dx={-10} />
                <Tooltip 
                  cursor={{ fill: '#f1f5f9' }}
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', border: 'none', color: '#f8fafc', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#5eead4' }}
                />
                <Bar dataKey="overspeedCount" name="Events" fill="url(#tealGradient)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Pie Chart */}
      <Card className="border-slate-200/60 shadow-sm">
        <CardHeader>
          <CardTitle className="text-slate-900">Fleet Compliance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.complianceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {data.complianceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', border: 'none', color: '#f8fafc', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#5eead4' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', fontWeight: 500, color: '#334155' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Prohibited Driving Horizontal Bar Chart */}
      <Card className="lg:col-span-3 border-slate-200/60 shadow-sm">
        <CardHeader>
          <CardTitle className="text-slate-900">Prohibited Driving Duration (Minutes)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={data.prohibitedData}
                margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
                <YAxis dataKey="vehicle" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} width={80} />
                <Tooltip 
                  cursor={{ fill: '#f1f5f9' }}
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', border: 'none', color: '#f8fafc', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#5eead4' }}
                />
                <Bar dataKey="duration" name="Minutes" fill="#0f172a" radius={[0, 6, 6, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

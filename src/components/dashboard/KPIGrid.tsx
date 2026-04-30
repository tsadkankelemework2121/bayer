import { Card, CardContent } from "../ui/Card";
import { Car, Gauge, Clock, ShieldCheck, AlertTriangle } from "lucide-react";
import type { RegionData } from "../../data/mockData";
import { cn } from "../../lib/utils";

interface KPIGridProps {
  data: RegionData;
}

export function KPIGrid({ data }: KPIGridProps) {
  const kpis = [
    {
      title: "Total Fleet",
      value: data.totalVehicles,
      icon: Car,
      color: "text-slate-700",
      bgColor: "bg-slate-100",
    },
    {
      title: "Overspeeding",
      value: data.overspeedingVehicles,
      icon: Gauge,
      color: "text-teal-700",
      bgColor: "bg-teal-50",
    },
    {
      title: "Prohibited Hrs",
      value: data.prohibitedDrivingVehicles,
      icon: Clock,
      color: "text-slate-700",
      bgColor: "bg-slate-100",
    },
    {
      title: "Compliant",
      value: `${data.compliantPercent}%`,
      icon: ShieldCheck,
      color: "text-teal-700",
      bgColor: "bg-teal-50",
    },
    {
      title: "High Risk",
      value: `${data.highRiskPercent}%`,
      icon: AlertTriangle,
      color: "text-slate-900",
      bgColor: "bg-slate-200",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {kpis.map((kpi, index) => {
        const Icon = kpi.icon;
        return (
          <Card key={index} className="border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-5 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className={cn("p-2.5 rounded-md", kpi.bgColor)}>
                  <Icon className={cn("w-5 h-5", kpi.color)} />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-slate-500">{kpi.title}</p>
                <h3 className="text-3xl font-bold text-slate-900 mt-2">{kpi.value}</h3>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

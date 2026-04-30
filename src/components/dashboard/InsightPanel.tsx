import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import { Lightbulb, TrendingUp, AlertCircle } from "lucide-react";
import type { RegionData } from "../../data/mockData";

interface InsightPanelProps {
  region: "Kenya" | "Tanzania";
  data: RegionData;
}

export function InsightPanel({ region, data }: InsightPanelProps) {
  // Generate pseudo-dynamic insights based on data
  const generateInsights = () => {
    const insights = [];

    // General insight
    insights.push({
      icon: Lightbulb,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      text: `Majority of overspeeding events in ${region} are short, indicating overtaking behavior rather than sustained speeding.`,
    });

    // Risk comparison or highlight
    if (data.highRiskPercent > 25) {
      insights.push({
        icon: TrendingUp,
        color: "text-slate-900",
        bgColor: "bg-slate-200",
        text: `${region} has a critically high fleet risk exposure (${data.highRiskPercent}%), demanding immediate driver retraining.`,
      });
    } else {
      insights.push({
        icon: TrendingUp,
        color: "text-slate-600",
        bgColor: "bg-slate-100",
        text: `Fleet risk exposure is at ${data.highRiskPercent}%. Continued monitoring of top offenders is advised.`,
      });
    }

    // Prohibited driving insight
    if (data.prohibitedDrivingVehicles > 0) {
      insights.push({
        icon: AlertCircle,
        color: "text-slate-900",
        bgColor: "bg-slate-200",
        text: `Prohibited driving is a major issue. Vehicle ${data.worstProhibitedVehicle} logged ${data.worstProhibitedDuration} minutes during restricted hours.`,
      });
    }

    return insights;
  };

  const insights = generateInsights();

  return (
    <Card className="bg-slate-900 border-transparent shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="text-white flex items-center gap-2 text-lg">
          <Lightbulb className="w-5 h-5 text-teal-400" />
          Key Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div key={index} className="flex gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 transition-colors hover:bg-slate-800">
                <div className={`shrink-0 p-2.5 rounded-md h-fit bg-slate-800 border border-slate-700`}>
                  <Icon className={`w-5 h-5 text-teal-400`} />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{insight.text}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

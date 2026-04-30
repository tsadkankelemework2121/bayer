export type RiskLevel = "Low" | "Medium" | "High";

export interface RegionData {
  totalVehicles: number;
  maxSpeed: number;
  maxSpeedVehicle: string;
  speedLimit: number;
  overspeedingVehicles: number;
  topViolator: string;
  topViolatorEvents: number;
  prohibitedDrivingVehicles: number;
  worstProhibitedVehicle: string;
  worstProhibitedDuration: number; // in minutes
  worstProhibitedDistance?: number; // in km
  compliantPercent: number;
  highRiskPercent: number;
  nonCompliantPercent: number;
  
  // Chart Data
  speedAnalysisData: { vehicle: string; overspeedCount: number; maxSpeed: number }[];
  complianceData: { name: string; value: number; color: string }[];
  prohibitedData: { vehicle: string; duration: number }[];
  
  // Table Data
  violationsList: { id: string; vehicle: string; overspeedCount: number; maxSpeed: number; prohibitedDuration: number; riskLevel: RiskLevel }[];
  topPerformers: { vehicle: string; score: number }[];
}

export interface ReportData {
  title: string;
  month: string;
  organization: string;
  kenya: RegionData;
  tanzania: RegionData;
}

export const mockData: ReportData = {
  title: "Eco Driving & Prohibitory Driving Report",
  month: "January 2026",
  organization: "Bayer East Africa",
  kenya: {
    totalVehicles: 81,
    maxSpeed: 123,
    maxSpeedVehicle: "KCU 880Z",
    speedLimit: 110,
    overspeedingVehicles: 45,
    topViolator: "KCU 905Z",
    topViolatorEvents: 81,
    prohibitedDrivingVehicles: 68,
    worstProhibitedVehicle: "KDK 194K",
    worstProhibitedDuration: 518,
    worstProhibitedDistance: 541,
    compliantPercent: 16,
    highRiskPercent: 20,
    nonCompliantPercent: 64, // Derived: 100 - 16 - 20
    
    speedAnalysisData: [
      { vehicle: "KCU 905Z", overspeedCount: 81, maxSpeed: 118 },
      { vehicle: "KCU 880Z", overspeedCount: 42, maxSpeed: 123 },
      { vehicle: "KDA 123X", overspeedCount: 35, maxSpeed: 115 },
      { vehicle: "KDB 456Y", overspeedCount: 28, maxSpeed: 112 },
      { vehicle: "KCY 789A", overspeedCount: 15, maxSpeed: 114 },
    ],
    complianceData: [
      { name: "Compliant", value: 16, color: "#0d9488" }, // teal-600
      { name: "Non-Compliant", value: 64, color: "#94a3b8" }, // slate-400
      { name: "High Risk", value: 20, color: "#0f172a" }, // slate-900
    ],
    prohibitedData: [
      { vehicle: "KDK 194K", duration: 518 },
      { vehicle: "KCQ 234L", duration: 420 },
      { vehicle: "KDH 567M", duration: 310 },
      { vehicle: "KCA 890N", duration: 245 },
      { vehicle: "KDD 112P", duration: 180 },
    ],
    violationsList: [
      { id: "1", vehicle: "KCU 905Z", overspeedCount: 81, maxSpeed: 118, prohibitedDuration: 120, riskLevel: "High" },
      { id: "2", vehicle: "KDK 194K", overspeedCount: 12, maxSpeed: 112, prohibitedDuration: 518, riskLevel: "High" },
      { id: "3", vehicle: "KCU 880Z", overspeedCount: 42, maxSpeed: 123, prohibitedDuration: 0, riskLevel: "Medium" },
      { id: "4", vehicle: "KCQ 234L", overspeedCount: 5, maxSpeed: 111, prohibitedDuration: 420, riskLevel: "Medium" },
      { id: "5", vehicle: "KDA 123X", overspeedCount: 35, maxSpeed: 115, prohibitedDuration: 45, riskLevel: "Medium" },
    ],
    topPerformers: [
      { vehicle: "KCA 101A", score: 99 },
      { vehicle: "KCB 202B", score: 98 },
      { vehicle: "KCC 303C", score: 97 },
      { vehicle: "KCD 404D", score: 96 },
      { vehicle: "KCE 505E", score: 95 },
    ]
  },
  tanzania: {
    totalVehicles: 27,
    maxSpeed: 118,
    maxSpeedVehicle: "T 561 EXW",
    speedLimit: 110,
    overspeedingVehicles: 5,
    topViolator: "T 561 EXW",
    topViolatorEvents: 12,
    prohibitedDrivingVehicles: 21,
    worstProhibitedVehicle: "T 561 EXW",
    worstProhibitedDuration: 890,
    compliantPercent: 22,
    highRiskPercent: 29,
    nonCompliantPercent: 49, // Derived: 100 - 22 - 29

    speedAnalysisData: [
      { vehicle: "T 561 EXW", overspeedCount: 12, maxSpeed: 118 },
      { vehicle: "T 123 ABC", overspeedCount: 8, maxSpeed: 115 },
      { vehicle: "T 456 DEF", overspeedCount: 5, maxSpeed: 112 },
      { vehicle: "T 789 GHI", overspeedCount: 3, maxSpeed: 111 },
      { vehicle: "T 012 JKL", overspeedCount: 2, maxSpeed: 111 },
    ],
    complianceData: [
      { name: "Compliant", value: 22, color: "#0d9488" },
      { name: "Non-Compliant", value: 49, color: "#94a3b8" },
      { name: "High Risk", value: 29, color: "#0f172a" },
    ],
    prohibitedData: [
      { vehicle: "T 561 EXW", duration: 890 },
      { vehicle: "T 234 MNO", duration: 650 },
      { vehicle: "T 567 PQR", duration: 420 },
      { vehicle: "T 890 STU", duration: 310 },
      { vehicle: "T 112 VWX", duration: 150 },
    ],
    violationsList: [
      { id: "1", vehicle: "T 561 EXW", overspeedCount: 12, maxSpeed: 118, prohibitedDuration: 890, riskLevel: "High" },
      { id: "2", vehicle: "T 234 MNO", overspeedCount: 2, maxSpeed: 105, prohibitedDuration: 650, riskLevel: "High" },
      { id: "3", vehicle: "T 567 PQR", overspeedCount: 0, maxSpeed: 100, prohibitedDuration: 420, riskLevel: "Medium" },
      { id: "4", vehicle: "T 123 ABC", overspeedCount: 8, maxSpeed: 115, prohibitedDuration: 0, riskLevel: "Medium" },
      { id: "5", vehicle: "T 456 DEF", overspeedCount: 5, maxSpeed: 112, prohibitedDuration: 30, riskLevel: "Medium" },
    ],
    topPerformers: [
      { vehicle: "T 340 DPU", score: 100 },
      { vehicle: "T 921 EDW", score: 99 },
      { vehicle: "T 559 EHW", score: 98 },
      { vehicle: "T 701 DXS", score: 98 },
      { vehicle: "T 580 DZN", score: 97 },
      { vehicle: "T 283 DZJ", score: 96 },
      { vehicle: "T 122 EME", score: 96 },
      { vehicle: "T 344 EPP", score: 95 },
      { vehicle: "T 602 EBB", score: 94 },
      { vehicle: "T 902 EDW", score: 93 },
    ]
  }
};

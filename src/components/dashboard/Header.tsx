import { cn } from "../../lib/utils";

interface HeaderProps {
  organization: string;
  title: string;
  subtitle: string;
  selectedRegion: "Kenya" | "Tanzania";
  onRegionChange: (region: "Kenya" | "Tanzania") => void;
}

export function Header({ organization, title, subtitle, selectedRegion, onRegionChange }: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-4 border-b border-slate-200">
      <div>
        <p className="text-xs font-bold tracking-widest uppercase text-teal-600 mb-2">{organization}</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
        <p className="text-slate-500 mt-2 font-medium">{subtitle}</p>
      </div>

      <div className="inline-flex bg-slate-100 p-1 rounded-lg border border-slate-200/60">
        <button
          onClick={() => onRegionChange("Kenya")}
          className={cn(
            "px-6 py-2 rounded-md text-sm font-semibold transition-all",
            selectedRegion === "Kenya"
              ? "bg-white text-teal-700 shadow-sm border border-slate-200/50"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
          )}
        >
          Kenya
        </button>
        <button
          onClick={() => onRegionChange("Tanzania")}
          className={cn(
            "px-6 py-2 rounded-md text-sm font-semibold transition-all",
            selectedRegion === "Tanzania"
              ? "bg-white text-teal-700 shadow-sm border border-slate-200/50"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
          )}
        >
          Tanzania
        </button>
      </div>
    </div>
  );
}

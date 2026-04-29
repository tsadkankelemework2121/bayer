import React from 'react';
import { Truck, BarChart3, AlertCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold text-white">Fleet Dashboard</h1>
              <p className="text-blue-100 text-sm font-medium">Bayer East Africa - January 2026</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8">
            <div className="flex items-center gap-2 text-white/90">
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm font-medium">Real-time Analytics</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Safety First</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

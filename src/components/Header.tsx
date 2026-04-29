import React from 'react';
import { Truck } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900">
            <Truck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Fleet Dashboard</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Bayer East Africa - January 2026</p>
          </div>
        </div>
      </div>
    </header>
  );
}

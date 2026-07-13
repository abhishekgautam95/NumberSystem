import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProgressBar } from './ProgressBar';
import { Trophy, Star, ChevronRight, ChevronLeft } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  xp: number;
  currentStep: number;
  totalSteps: number;
  onNext?: () => void;
  onPrev?: () => void;
  showNext?: boolean;
  showPrev?: boolean;
  nextLabel?: string;
}

export function Layout({ 
  children, 
  xp, 
  currentStep,
  totalSteps, 
  onNext, 
  onPrev, 
  showNext = true, 
  showPrev = true,
  nextLabel = "Next"
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-hidden">
      {/* Top Bar */}
      <header className="bg-white px-6 py-4 shadow-sm flex items-center justify-between sticky top-0 z-50">
        <div className="flex-1 max-w-2xl mx-auto pl-4 sm:pl-0">
          <ProgressBar total={totalSteps} current={currentStep} />
        </div>
        <div className="flex items-center gap-4 ml-4 sm:ml-8">
          <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold">
            <Star size={20} className="fill-yellow-500 text-yellow-500" />
            <span>{xp} XP</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative w-full max-w-5xl mx-auto p-4 sm:p-8 flex flex-col justify-center items-center">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <footer className="bg-white border-t border-gray-200 p-4 sm:p-6 flex justify-between items-center z-50 relative">
        <div className="w-32">
          {showPrev && (
            <button 
              onClick={onPrev}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors focus:ring-4 focus:ring-gray-100 outline-none"
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>
          )}
        </div>
        
        <div className="w-48 flex justify-end">
          {showNext && (
            <button 
              onClick={onNext}
              className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all focus:ring-4 focus:ring-indigo-200 outline-none transform active:scale-95"
            >
              <span>{nextLabel}</span>
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}

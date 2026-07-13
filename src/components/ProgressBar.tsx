import { motion } from 'motion/react';

interface ProgressBarProps {
  total: number;
  current: number;
}

export function ProgressBar({ total, current }: ProgressBarProps) {
  return (
    <div className="w-full flex items-center gap-1.5 sm:gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="h-3 sm:h-4 flex-1 bg-slate-200 rounded-full overflow-hidden relative">
          {i <= current && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full"
              initial={{ x: i === current ? '-100%' : '0%' }}
              animate={{ x: '0%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.6, delay: i === current ? 0.2 : 0 }}
            />
          )}
          {i <= current && (
            <div className="absolute top-[2px] left-2 right-2 h-1 bg-white/30 rounded-full" />
          )}
        </div>
      ))}
    </div>
  );
}

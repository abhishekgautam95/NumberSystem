import { ReactNode } from 'react';
import { Bot, Zap, Smile, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface RoboProps {
  mood?: 'happy' | 'thinking' | 'excited' | 'explaining';
  size?: number;
  className?: string;
  animate?: boolean;
  speech?: ReactNode;
}

export function Robo({ mood = 'happy', size = 120, className, animate = true, speech }: RoboProps) {
  const getIcon = () => {
    switch (mood) {
      case 'excited': return <Zap size={size * 0.4} className="text-yellow-400 absolute -top-4 -right-4" />;
      case 'thinking': return <Cpu size={size * 0.4} className="text-purple-400 absolute -top-4 -right-4" />;
      case 'happy': return <Smile size={size * 0.4} className="text-green-400 absolute -top-4 -right-4" />;
      default: return null;
    }
  };

  return (
    <motion.div 
      className={cn("relative inline-flex items-center justify-center", className)}
      animate={animate ? { y: [0, -10, 0] } : {}}
      transition={animate ? { repeat: Infinity, duration: 3, ease: "easeInOut" } : {}}
    >
      <AnimatePresence>
        {speech && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            className="absolute top-0 right-full mr-6 w-48 sm:w-64 bg-white p-4 rounded-3xl rounded-br-none shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border-2 border-indigo-50 z-20"
          >
            <div className="absolute top-4 -right-3 w-0 h-0 border-t-[10px] border-t-transparent border-l-[12px] border-l-white border-b-[10px] border-b-transparent z-30" />
            <div className="absolute top-[14px] -right-[15px] w-0 h-0 border-t-[12px] border-t-transparent border-l-[14px] border-l-indigo-50 border-b-[12px] border-b-transparent z-20" />
            <p className="text-slate-700 font-bold text-sm sm:text-base leading-relaxed">{speech}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative bg-white rounded-3xl p-4 shadow-xl border-4 border-indigo-100 flex items-center justify-center z-10">
        <Bot size={size} className="text-indigo-500" strokeWidth={1.5} />
        {getIcon()}
      </div>
    </motion.div>
  );
}

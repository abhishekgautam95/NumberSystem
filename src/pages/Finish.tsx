import { motion } from 'motion/react';
import { Trophy, Star, Medal } from 'lucide-react';
import { Robo } from '../components/Robo';

interface FinishProps {
  xp: number;
}

export function Finish({ xp }: FinishProps) {
  return (
    <motion.div 
      className="w-full max-w-3xl text-center flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="relative mb-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-tr from-yellow-300 to-orange-400 rounded-full opacity-20 blur-3xl scale-150"
        />
        <Trophy size={140} className="text-yellow-500 drop-shadow-[0_0_30px_rgba(234,179,8,0.5)] relative z-10" />
      </div>

      <h1 className="text-6xl sm:text-7xl font-extrabold text-slate-800 mb-6">
        Chapter Complete!
      </h1>
      
      <p className="text-2xl text-slate-600 mb-12 font-medium">
        You've unlocked the secrets of the computer's language.
      </p>

      <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 w-full flex flex-col sm:flex-row items-center justify-around gap-8 mb-12">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-indigo-100 p-4 rounded-full">
            <Star className="w-10 h-10 text-indigo-500 fill-indigo-500" />
          </div>
          <span className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-2">Total XP</span>
          <span className="text-5xl font-extrabold text-indigo-600">{xp}</span>
        </div>
        
        <div className="hidden sm:block w-px h-32 bg-slate-100"></div>

        <div className="flex flex-col items-center gap-2">
          <div className="bg-orange-100 p-4 rounded-full">
            <Medal className="w-10 h-10 text-orange-500" />
          </div>
          <span className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-2">New Badge</span>
          <span className="text-2xl font-bold text-orange-600 mt-2">Binary Boss</span>
        </div>
      </div>

      <div className="bg-indigo-50 p-6 rounded-3xl flex items-center gap-6 text-left border border-indigo-100 max-w-2xl w-full">
        <Robo mood="happy" size={80} animate={false} />
        <div>
          <h3 className="font-bold text-indigo-900 text-xl mb-1">Awesome job, Explorer!</h3>
          <p className="text-indigo-700">You are ready for the next adventure. See you soon!</p>
        </div>
      </div>
    </motion.div>
  );
}

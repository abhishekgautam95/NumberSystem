import { motion } from 'motion/react';
import { Robo } from '../components/Robo';

export function Intro() {
  return (
    <motion.div 
      className="w-full max-w-4xl flex flex-col items-center text-center gap-10"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <Robo mood="excited" size={160} />
      
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-indigo-50 relative">
        {/* Chat bubble tail */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[24px] border-b-white"></div>
        
        <h2 className="text-4xl font-extrabold text-slate-800 mb-6">
          Hello Explorer! <span className="inline-block animate-bounce">👋</span>
        </h2>
        
        <div className="space-y-6 text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
          <p>
            I am <strong className="text-indigo-600">Robo</strong>.
          </p>
          <p>
            Did you know that computers don't understand English, Math, or even normal numbers? 
          </p>
          <p className="bg-indigo-50 text-indigo-700 p-6 rounded-2xl">
            Today, I will show you the <strong className="font-extrabold">Secret Language of Computers</strong>. We'll explore how to talk using only two numbers!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

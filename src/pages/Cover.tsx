import { motion } from 'motion/react';
import { Play, Sparkles } from 'lucide-react';

interface CoverProps {
  onStart: () => void;
}

export function Cover({ onStart }: CoverProps) {
  return (
    <div className="min-h-screen bg-indigo-900 flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <motion.div 
        className="z-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 rounded-[3rem] shadow-2xl max-w-3xl w-full relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto w-24 h-24 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/30 transform rotate-12"
        >
          <Sparkles className="text-white w-12 h-12" />
        </motion.div>

        <h2 className="text-indigo-200 font-bold tracking-widest uppercase text-sm sm:text-base mb-4">
          Computer Science Explorer
        </h2>
        
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          The Secret Language <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            of Computers
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-indigo-100 mb-12 max-w-2xl mx-auto font-medium">
          Master the Number Systems. Crack the Binary Code. Become a Tech Hero!
        </p>
        
        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-orange-950 font-bold text-xl sm:text-2xl px-10 py-5 rounded-full shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] transition-all outline-none"
        >
          <span>Start Adventure</span>
          <div className="bg-white/30 rounded-full p-2 group-hover:bg-white/40 transition-colors">
            <Play className="fill-current w-6 h-6" />
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
}

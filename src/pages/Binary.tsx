import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lightbulb, LightbulbOff } from 'lucide-react';

interface BinaryProps {
  onEarnXp: () => void;
}

export function Binary({ onEarnXp }: BinaryProps) {
  const [switches, setSwitches] = useState([false, false, false, false]);
  const [xpEarned, setXpEarned] = useState(false);

  // Calculate decimal value
  const decimalValue = switches.reduce((acc, isOn, index) => {
    return acc + (isOn ? Math.pow(2, 3 - index) : 0);
  }, 0);

  useEffect(() => {
    if (decimalValue === 15 && !xpEarned) {
      setXpEarned(true);
      onEarnXp();
    }
  }, [decimalValue, xpEarned, onEarnXp]);

  const toggleSwitch = (index: number) => {
    const newSwitches = [...switches];
    newSwitches[index] = !newSwitches[index];
    setSwitches(newSwitches);
  };

  return (
    <motion.div 
      className="w-full max-w-4xl flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-4 flex items-center justify-center gap-4">
          <span className="text-green-500">01</span>
          Binary System
          <span className="text-green-500">10</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Computers are electronic machines. They only understand two states: 
          <strong> ON (1)</strong> and <strong>OFF (0)</strong>. 
          This is the <strong>Binary Number System (Base-2)</strong>.
        </p>
      </div>

      <div className="bg-slate-800 p-8 sm:p-12 rounded-[3rem] shadow-2xl w-full text-center relative overflow-hidden">
        {/* Confetti effect when max value reached */}
        {decimalValue === 15 && (
          <motion.div 
            className="absolute inset-0 pointer-events-none bg-green-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
        
        <h3 className="text-2xl font-bold text-white mb-8">
          Turn the lights ON to create numbers!
        </h3>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12">
          {switches.map((isOn, idx) => {
            const placeValue = Math.pow(2, 3 - idx);
            return (
              <div key={idx} className="flex flex-col items-center gap-4">
                <div className="text-slate-400 font-mono text-sm">Value: {placeValue}</div>
                <button
                  onClick={() => toggleSwitch(idx)}
                  className={`relative w-20 h-32 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
                    isOn 
                      ? 'bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-[0_0px_0_#a16207,0_10px_20px_rgba(234,179,8,0.4)] translate-y-3' 
                      : 'bg-gradient-to-b from-slate-600 to-slate-700 shadow-[0_12px_0_#334155,0_20px_20px_rgba(0,0,0,0.4)] hover:bg-slate-600'
                  }`}
                  style={{ marginBottom: isOn ? '0px' : '12px', marginTop: isOn ? '12px' : '0px' }}
                >
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/20" />
                  {isOn ? (
                    <Lightbulb size={40} className="text-white mb-2 drop-shadow-[0_0_12px_rgba(255,255,255,1)]" />
                  ) : (
                    <LightbulbOff size={40} className="text-slate-400 mb-2" />
                  )}
                  <span className={`font-mono text-3xl font-extrabold ${isOn ? 'text-white drop-shadow-md' : 'text-slate-500'}`}>
                    {isOn ? '1' : '0'}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20 inline-block min-w-[300px]">
          <div className="text-slate-300 font-medium mb-2 uppercase tracking-widest text-sm">
            Decimal Value
          </div>
          <div className="text-6xl font-mono font-bold text-white">
            {decimalValue}
          </div>
        </div>

        {decimalValue === 15 && (
          <motion.div 
            className="mt-6 text-green-400 font-bold text-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🎉 Awesome! You found the maximum number (15)! +50 XP
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

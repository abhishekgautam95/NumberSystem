import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator } from 'lucide-react';

interface ArithmeticProps {
  onEarnXp: () => void;
}

export function Arithmetic({ onEarnXp }: ArithmeticProps) {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Challenge: 10 + 11 = ?
  // Binary: 2 + 3 = 5 (101)
  const checkAnswer = () => {
    if (answer === '101') {
      setIsCorrect(true);
      onEarnXp();
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <motion.div 
      className="w-full max-w-4xl flex flex-col items-center text-center gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-extrabold text-slate-800 flex items-center justify-center gap-4">
        <Calculator className="text-indigo-500 w-10 h-10" />
        Binary Math
      </h2>
      
      <p className="text-xl text-slate-600 max-w-2xl mx-auto bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        Computers can add numbers just like we do, but they only use 0 and 1. <br/>
        <strong>Rule:</strong> 1 + 1 = 10 (which is 2 in Decimal, so we write 0 and carry 1).
      </p>

      <div className="bg-slate-800 text-white p-8 sm:p-12 rounded-[3rem] shadow-2xl w-full max-w-2xl mx-auto relative overflow-hidden">
        <div className="font-mono text-5xl sm:text-7xl font-bold tracking-[0.5em] text-right pr-8 sm:pr-12 space-y-6 mb-12">
          <motion.div 
            className="text-blue-400 relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="absolute -left-12 -top-4 text-xs font-sans tracking-normal text-blue-200 opacity-50">Decimal: 2</span>
            1 0
          </motion.div>
          <motion.div 
            className="border-b-4 border-slate-600 pb-6 text-green-400 relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-slate-500 absolute left-8 sm:left-12">+</span>
            <span className="absolute -left-12 -top-4 text-xs font-sans tracking-normal text-green-200 opacity-50">Decimal: 3</span>
            1 1
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <input
            type="text"
            maxLength={3}
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value.replace(/[^01]/g, ''));
              setIsCorrect(null);
            }}
            placeholder="???"
            className={`bg-slate-900 border-4 rounded-2xl px-6 py-4 text-4xl sm:text-5xl font-mono font-bold text-center tracking-[0.5em] text-yellow-400 outline-none w-64 transition-colors ${
              isCorrect === true ? 'border-green-500' : isCorrect === false ? 'border-red-500' : 'border-slate-600 focus:border-yellow-400'
            }`}
          />
          
          <button
            onClick={checkAnswer}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-xl transition-transform active:scale-95"
          >
            Check Answer
          </button>
        </div>

        <AnimatePresence>
          {isCorrect === true && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 bg-green-500/95 flex flex-col items-center justify-center p-8 backdrop-blur-sm"
            >
              <div className="text-8xl mb-4">🎉</div>
              <h3 className="text-4xl font-bold mb-2 text-white">Correct!</h3>
              <p className="text-xl font-medium text-green-100">101 in Binary = 5 in Decimal</p>
              <p className="mt-4 font-bold bg-green-600 px-4 py-2 rounded-full">+100 XP</p>
              
              <button
                onClick={() => { setIsCorrect(null); setAnswer(''); }}
                className="mt-8 bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-green-50"
              >
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

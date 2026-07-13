import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Check, X, ArrowRight } from 'lucide-react';
import { Robo } from '../components/Robo';

const QUESTIONS = [
  {
    question: "What base is the Binary System?",
    options: ["Base 10", "Base 2", "Base 16", "Base 8"],
    correct: 1
  },
  {
    question: "Which of these is NOT a binary number?",
    options: ["1010", "1111", "0000", "1021"],
    correct: 3
  },
  {
    question: "If Decimal is Base-10, what is Octal?",
    options: ["Base 8", "Base 16", "Base 2", "Base 10"],
    correct: 0
  },
  {
    question: "In Hexadecimal, what letter is used for the number 10?",
    options: ["A", "X", "H", "B"],
    correct: 0
  },
  {
    question: "What is the maximum number you can make with 4 binary bits (1111)?",
    options: ["10", "15", "16", "255"],
    correct: 1
  }
];

interface QuizProps {
  onComplete: () => void;
  onEarnXp: (amount: number) => void;
}

export function Quiz({ onComplete, onEarnXp }: QuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const q = QUESTIONS[currentQ];

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);

    if (index === q.correct) {
      setScore(s => s + 1);
      onEarnXp(50); // 50 XP per correct answer
    }
  };

  const handleNext = () => {
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      onEarnXp(100); // 100 XP for completing
      onComplete();
    }
  };

  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="flex items-center gap-4 mb-8">
        <Robo 
          mood="thinking" 
          size={80} 
          animate={false} 
          speech={<>Take a deep breath. You've got this, Explorer!</>}
        />
        <div>
          <h2 className="text-3xl font-extrabold text-slate-800">Knowledge Check!</h2>
          <p className="text-slate-500 font-medium">Question {currentQ + 1} of {QUESTIONS.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8 sm:p-10 relative overflow-hidden">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-8 leading-snug">
          {q.question}
        </h3>

        <AnimatePresence>
          <motion.div className="space-y-4">
            {q.options.map((opt, idx) => {
              let stateClass = "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 shadow-[0_4px_0_#e2e8f0]";
              let Icon = null;
              
              if (showResult) {
                if (idx === q.correct) {
                  stateClass = "bg-green-100 border-green-500 text-green-800 shadow-[0_4px_0_#22c55e]";
                  Icon = <Check className="text-green-600" />;
                } else if (idx === selected) {
                  stateClass = "bg-red-100 border-red-500 text-red-800 shadow-[0_4px_0_#ef4444]";
                  Icon = <X className="text-red-600" />;
                } else {
                  stateClass = "bg-slate-50 opacity-50 border-slate-200 text-slate-400";
                }
              } else if (idx === selected) {
                stateClass = "bg-indigo-100 border-indigo-500 text-indigo-800";
              }

              return (
                <motion.button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={showResult}
                  animate={showResult && idx === selected && idx !== q.correct ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  className={`w-full text-left px-6 py-5 rounded-2xl border-2 font-bold text-lg sm:text-xl flex items-center justify-between transition-colors ${stateClass} ${!showResult && 'active:translate-y-1 active:shadow-none'}`}
                >
                  <span>{opt}</span>
                  {Icon && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      {Icon}
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {showResult && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 pt-8 border-t border-slate-100 flex justify-end"
            >
              <button
                onClick={handleNext}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-xl flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-indigo-200"
              >
                <span>{currentQ < QUESTIONS.length - 1 ? 'Next Question' : 'Finish Chapter'}</span>
                <ArrowRight size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRightLeft, CheckCircle2 } from 'lucide-react';

interface ConverterProps {
  onEarnXp: () => void;
}

export function Converter({ onEarnXp }: ConverterProps) {
  const [decimal, setDecimal] = useState<string>('42');
  const [hasConverted, setHasConverted] = useState(false);

  const num = parseInt(decimal, 10);
  const isValid = !isNaN(num) && num >= 0 && num <= 255;
  
  const binary = isValid ? num.toString(2).padStart(8, '0') : '--------';
  const hex = isValid ? num.toString(16).toUpperCase().padStart(2, '0') : '--';
  const octal = isValid ? num.toString(8) : '---';

  const handleConvert = () => {
    if (isValid && !hasConverted) {
      setHasConverted(true);
      onEarnXp();
    }
  };

  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-4xl font-extrabold text-slate-800 mb-8 flex items-center justify-center gap-4">
        <ArrowRightLeft className="text-blue-500 w-10 h-10" />
        The Magic Converter
      </h2>

      <div className="bg-white p-8 sm:p-12 rounded-[3rem] shadow-xl border border-slate-100">
        <p className="text-lg text-slate-600 mb-8 font-medium">
          Enter any Decimal number (0 - 255) to see it transform instantly!
        </p>

        <div className="mb-10">
          <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
            Decimal Input (Base 10)
          </label>
          <input
            type="number"
            min="0"
            max="255"
            value={decimal}
            onChange={(e) => {
              setDecimal(e.target.value);
              handleConvert();
            }}
            className="w-full max-w-xs mx-auto bg-slate-50 border-2 border-indigo-200 focus:border-indigo-500 rounded-2xl px-6 py-4 text-4xl font-bold text-center text-indigo-700 outline-none transition-all shadow-inner"
          />
          {!isValid && decimal !== '' && (
            <p className="text-red-500 text-sm mt-2 font-medium">Please enter a number between 0 and 255.</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-6 rounded-3xl relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="text-green-400 text-sm font-bold uppercase tracking-wider mb-2">Binary</div>
            <div className="text-2xl sm:text-3xl font-mono text-white break-all">{binary}</div>
            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-white font-mono">Base 2</span>
            </div>
          </div>
          
          <div className="bg-purple-600 p-6 rounded-3xl relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="text-purple-200 text-sm font-bold uppercase tracking-wider mb-2">Hexadecimal</div>
            <div className="text-2xl sm:text-3xl font-mono text-white">{hex}</div>
            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-white font-mono">Base 16</span>
            </div>
          </div>

          <div className="bg-orange-500 p-6 rounded-3xl relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="text-orange-200 text-sm font-bold uppercase tracking-wider mb-2">Octal</div>
            <div className="text-2xl sm:text-3xl font-mono text-white">{octal}</div>
            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-white font-mono">Base 8</span>
            </div>
          </div>
        </div>

        {hasConverted && (
          <motion.div 
            className="mt-8 inline-flex items-center gap-2 text-green-500 bg-green-50 px-4 py-2 rounded-full font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle2 size={20} />
            Conversion Master Badge Earned! (+50 XP)
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

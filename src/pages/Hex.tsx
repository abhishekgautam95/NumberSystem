import { motion } from 'motion/react';
import { Palette, Box } from 'lucide-react';
import { useState } from 'react';

export function Hex() {
  const [color, setColor] = useState("#4F46E5");

  return (
    <motion.div 
      className="w-full max-w-5xl flex flex-col gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Hexadecimal System</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Binary strings get very long. Programmers use <strong>Hexadecimal (Base-16)</strong> as a shortcut!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hex explanation */}
        <div className="bg-purple-50 p-8 rounded-[2rem] border border-purple-100 flex flex-col">
          <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-3">
            <Box className="text-purple-500" /> The 16 Digits
          </h3>
          <p className="text-lg text-purple-800 mb-6">
            Since we only have 10 standard digits (0-9), Hexadecimal uses letters for 10 to 15!
          </p>
          
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 font-mono text-center mb-6">
            {['0','1','2','3','4','5','6','7','8','9'].map(d => (
              <div key={d} className="bg-white p-3 rounded-xl shadow-[0_4px_0_#e2e8f0] text-slate-700 font-extrabold flex items-center justify-center">{d}</div>
            ))}
            {[
              { l: 'A', v: '10' }, { l: 'B', v: '11' }, { l: 'C', v: '12' }, 
              { l: 'D', v: '13' }, { l: 'E', v: '14' }, { l: 'F', v: '15' }
            ].map(d => (
              <div key={d.l} className="group relative perspective-1000 w-full h-12">
                <div className="w-full h-full preserve-3d transition-transform duration-500 group-hover:rotate-y-180 cursor-pointer">
                  <div className="absolute inset-0 backface-hidden bg-purple-500 text-white rounded-xl shadow-[0_4px_0_#7e22ce] font-extrabold flex items-center justify-center text-xl">
                    {d.l}
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-green-500 text-white rounded-xl shadow-[0_4px_0_#15803d] font-extrabold flex items-center justify-center text-lg">
                    {d.v}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm font-bold text-center text-purple-600 bg-purple-100 py-2 rounded-xl">Hover over the letters to see their secret values!</p>
        </div>

        {/* Interactive Color Picker */}
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
            <Palette className="text-pink-500" /> Colors in Hex
          </h3>
          <p className="text-slate-500 text-center mb-6 font-medium">
            Web colors use Hexadecimal! The 6 digits mix Red, Green, and Blue.
          </p>
          
          <div className="flex items-center gap-4 mb-8 bg-slate-50 p-4 rounded-2xl w-full">
            <div className="flex-1 flex justify-center">
              <div className="text-center font-bold font-mono">
                <span className="text-red-500 text-xl">{color.substring(1,3)}</span>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Red</div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="text-center font-bold font-mono">
                <span className="text-green-500 text-xl">{color.substring(3,5)}</span>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Green</div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="text-center font-bold font-mono">
                <span className="text-blue-500 text-xl">{color.substring(5,7)}</span>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Blue</div>
              </div>
            </div>
          </div>
          
          <div 
            className="w-40 h-40 rounded-full shadow-inner mb-6 transition-colors duration-200 border-4 border-slate-100"
            style={{ backgroundColor: color }}
          />
          
          <input 
            type="color" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-20 h-20 rounded-xl cursor-pointer mb-6"
          />
          
          <div className="bg-slate-100 px-6 py-3 rounded-2xl font-mono text-3xl font-bold text-slate-700 tracking-widest uppercase">
            {color}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

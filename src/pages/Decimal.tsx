import { useState } from 'react';
import { motion } from 'motion/react';
import { Hand } from 'lucide-react';
import { Robo } from '../components/Robo';

export function Decimal() {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div 
      className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 p-4 rounded-2xl">
            <span className="text-4xl">🔟</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-800">Decimal System</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 text-xl text-slate-600 leading-relaxed">
          <p className="mb-4">
            The <strong>Decimal Number System</strong> is what you use every day! It has 10 digits:
          </p>
          <div className="flex justify-between bg-slate-50 p-4 rounded-xl text-2xl font-mono text-blue-600 font-bold">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
            <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
          </div>
          <p className="mt-4 text-lg text-slate-500">
            We call it "Base-10" because there are 10 unique digits.
          </p>
        </div>
        
        <div className="flex justify-end pr-8">
          <Robo 
            mood="explaining" 
            size={80} 
            speech={<>Humans use <strong>Base-10</strong> because we have 10 fingers! Simple, right?</>} 
          />
        </div>
      </div>

      {/* Interactive Flip Card */}
      <div 
        className="relative h-[400px] w-full perspective-1000 cursor-pointer group"
        onClick={() => setFlipped(!flipped)}
      >
        <motion.div 
          className="w-full h-full relative preserve-3d"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-400 to-indigo-500 rounded-[3rem] shadow-xl flex flex-col items-center justify-center text-white p-8">
            <Hand size={80} className="mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4 text-center">Tap to see the magic!</h3>
            <p className="text-blue-100 text-center font-medium">Why is the number 254 special in Decimal?</p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-[3rem] shadow-xl border-4 border-indigo-100 flex flex-col items-center justify-center p-8 text-center">
            <div className="text-5xl font-mono font-bold text-slate-800 mb-6">
              <span className="text-red-500">2</span>
              <span className="text-green-500">5</span>
              <span className="text-blue-500">4</span>
            </div>
            <div className="space-y-2 text-xl text-slate-600 font-medium">
              <p><span className="text-red-500 font-bold">2</span> hundreds (200)</p>
              <p>+</p>
              <p><span className="text-green-500 font-bold">5</span> tens (50)</p>
              <p>+</p>
              <p><span className="text-blue-500 font-bold">4</span> ones (4)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

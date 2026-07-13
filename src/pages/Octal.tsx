import { useState } from 'react';
import { motion } from 'motion/react';
import { Ghost, Hexagon } from 'lucide-react';
import { Robo } from '../components/Robo';

export function Octal() {
  const [activeTentacles, setActiveTentacles] = useState(0);

  return (
    <motion.div 
      className="w-full max-w-5xl flex flex-col items-center gap-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-4 flex items-center justify-center gap-3">
          <Hexagon className="text-orange-500 fill-orange-200" size={40} />
          Octal System (Base-8)
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          What if we only had <strong>8 fingers</strong>? We would use the Octal system! It uses only digits from <strong>0 to 7</strong>. (No 8 or 9!)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Interactive Alien/Octopus Counting */}
        <div className="bg-orange-50 p-8 rounded-[3rem] border border-orange-100 flex flex-col items-center relative overflow-hidden group">
          <h3 className="text-2xl font-bold text-orange-900 mb-6 text-center z-10">
            Meet the Octo-Alien!
          </h3>
          
          <div className="relative mb-8 z-10 flex flex-col items-center cursor-pointer" onClick={() => setActiveTentacles((prev) => (prev + 1) % 8)}>
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-orange-500 p-6 rounded-full shadow-lg shadow-orange-500/40 relative z-20"
            >
              <Ghost size={80} className="text-white" />
            </motion.div>
            
            {/* "Tentacles" */}
            <div className="flex gap-2 mt-4">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-3 rounded-full transition-all duration-300 ${i <= activeTentacles ? 'bg-orange-500 h-16' : 'bg-orange-200 h-8'}`}
                  initial={{ height: 32 }}
                  animate={{ height: i <= activeTentacles ? 64 : 32 }}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center z-10">
            <p className="text-orange-800 font-bold mb-2 uppercase tracking-widest text-sm">Counting in Octal</p>
            <div className="text-6xl font-mono font-extrabold text-orange-600 bg-white px-8 py-4 rounded-3xl shadow-sm border border-orange-100">
              {activeTentacles}
            </div>
            {activeTentacles === 7 && (
              <p className="text-red-500 font-bold mt-4 animate-bounce">
                Watch out! The next number isn't 8, it's 10!
              </p>
            )}
          </div>
        </div>

        {/* Explanation & Robo */}
        <div className="flex flex-col gap-8 justify-center">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">The Rule of 8</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              In Decimal, we reset at 10. <br />
              In Octal, we reset at 8!
            </p>
            <div className="bg-slate-50 rounded-2xl p-6 font-mono text-xl sm:text-2xl font-bold text-slate-700 leading-loose">
              0, 1, 2, 3, 4, 5, 6, 7... <br/>
              <span className="text-indigo-600">10, 11, 12, 13, 14, 15, 16, 17...</span> <br/>
              <span className="text-orange-600">20...</span>
            </div>
          </div>
          
          <div className="flex justify-end pr-4">
            <Robo 
              mood="explaining" 
              size={80} 
              speech={<>Programmers use <strong>Octal</strong> to set file permissions in Linux systems! Have you ever seen <code>chmod 777</code>?</>} 
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { useState, useCallback } from 'react';
import { PageId } from './types';
import { Layout } from './components/Layout';
import { Cover } from './pages/Cover';
import { Intro } from './pages/Intro';
import { Decimal } from './pages/Decimal';
import { Binary } from './pages/Binary';
import { Octal } from './pages/Octal';
import { Hex } from './pages/Hex';
import { Converter } from './pages/Converter';
import { Arithmetic } from './pages/Arithmetic';
import { Quiz } from './pages/Quiz';
import { Finish } from './pages/Finish';

const PAGE_ORDER: PageId[] = [
  'cover',
  'intro',
  'decimal',
  'binary',
  'octal',
  'hex',
  'converter',
  'arithmetic',
  'quiz',
  'finish'
];

export default function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [xp, setXp] = useState(0);

  const currentPage = PAGE_ORDER[currentPageIndex];

  const handleNext = useCallback(() => {
    if (currentPageIndex < PAGE_ORDER.length - 1) {
      setCurrentPageIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  }, [currentPageIndex]);

  const handlePrev = useCallback(() => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  }, [currentPageIndex]);

  const addXp = useCallback((amount: number) => {
    setXp(prev => prev + amount);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'cover': return <Cover onStart={handleNext} />;
      case 'intro': return <Intro />;
      case 'decimal': return <Decimal />;
      case 'binary': return <Binary onEarnXp={() => addXp(50)} />;
      case 'octal': return <Octal />;
      case 'hex': return <Hex />;
      case 'converter': return <Converter onEarnXp={() => addXp(50)} />;
      case 'arithmetic': return <Arithmetic onEarnXp={() => addXp(100)} />;
      case 'quiz': return <Quiz onComplete={handleNext} onEarnXp={(amt) => addXp(amt)} />;
      case 'finish': return <Finish xp={xp} />;
      default: return null;
    }
  };

  if (currentPage === 'cover') {
    return <Cover onStart={handleNext} />;
  }

  return (
    <Layout 
      xp={xp} 
      currentStep={Math.max(0, currentPageIndex - 1)}
      totalSteps={PAGE_ORDER.length - 2}
      onNext={currentPage === 'quiz' || currentPage === 'finish' ? undefined : handleNext} 
      onPrev={currentPage === 'finish' ? undefined : handlePrev}
      showNext={currentPage !== 'quiz' && currentPage !== 'finish'}
      showPrev={currentPage !== 'cover' && currentPage !== 'finish'}
    >
      {renderPage()}
    </Layout>
  );
}

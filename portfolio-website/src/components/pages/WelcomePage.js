import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const WelcomePage = ({ currentSection, goToSection }) => {
  // 무한 루프 스크롤 텍스트 컴포넌트
  const InfiniteScrollText = React.memo(({ text, direction = "right" }) => {
    const repeatedText = `${text} `.repeat(3);
    
    return (
      <>
        <style jsx>{`
          @keyframes scroll-right {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.333%); }
          }
          @keyframes scroll-left {
            0% { transform: translateX(-33.333%); }
            100% { transform: translateX(0%); }
          }
          .scroll-right {
            animation: scroll-right 25s linear infinite;
          }
          .scroll-left {
            animation: scroll-left 25s linear infinite;
          }
        `}</style>
        <div className="overflow-hidden whitespace-nowrap w-full h-40 flex items-center">
          <div className={`text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-white select-none ${direction === 'right' ? 'scroll-right' : 'scroll-left'}`}
               style={{
                 WebkitTextStroke: '2px #3b82f6',
                 textStroke: '2px #3b82f6',
                 letterSpacing: '0.1em',
                 fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
                 textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                 lineHeight: '1.2',
                 paddingBottom: '0.2em',
               }}>
            {repeatedText}
          </div>
        </div>
      </>
    );
  });

  // 중앙 텍스트 컴포넌트
  const CenterHighlightText = React.memo(({ 
    text, 
    highlightWord, 
    delay = 0, 
    highlightCenterOnly = false,
    direction = "right"
  }) => {
    const words = text.split(' ');
    const centerIndex = Math.floor(words.length / 2);
    const [isHighlighted, setIsHighlighted] = useState(false);
    
    useEffect(() => {
      if (currentSection === 0) {
        const highlightTimer = setTimeout(() => {
          setIsHighlighted(true);
        }, (delay + 2.2) * 1000);

        return () => {
          clearTimeout(highlightTimer);
          setIsHighlighted(false);
        };
      }
    }, [currentSection, delay]);
    
    return (
      <>
        <style jsx>{`
          @keyframes slide-right-fast {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-25%); }
          }
          @keyframes slide-left-fast {
            0% { transform: translateX(0%); }
            100% { transform: translateX(25%); }
          }
          .slide-right-fast {
            animation: slide-right-fast 2s ease-out forwards;
          }
          .slide-left-fast {
            animation: slide-left-fast 2s ease-out forwards;
          }
        `}</style>
        <motion.div 
          className="overflow-hidden whitespace-nowrap w-full h-36 flex items-center justify-center"
          initial={{ opacity: 1 }}
        >
          <motion.div
            className={`flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 ${
              direction === 'right' ? 'slide-right-fast' : 'slide-left-fast'
            }`}
            style={{
              animationDelay: `${delay}s`,
              animationFillMode: 'both',
              transform: direction === 'right' ? 'translateX(-25%)' : 'translateX(25%)',
            }}
          >
            {words.map((word, index) => {
              const shouldHighlight = highlightCenterOnly 
                ? (index === centerIndex && word === highlightWord && isHighlighted)
                : (word === highlightWord && isHighlighted);
                
              return (
                <span
                  key={`${word}-${index}`}
                  className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold select-none"
                  style={{
                    color: shouldHighlight ? '#304d88ff' : '#fff',
                    WebkitTextStroke: shouldHighlight ? 
                      '1px #304d88ff' : '2px #3b82f6',
                    textStroke: shouldHighlight ? 
                      '1px #304d88ff' : '2px #3b82f6',
                    letterSpacing: '0.1em',
                    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
                    textShadow: shouldHighlight ? 
                      '0 0 20px rgba(48, 77, 136, 0.6)' : 
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                    lineHeight: '1.2',
                    paddingBottom: '0.2em',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {word}
                </span>
              );
            })}
          </motion.div>
        </motion.div>
      </>
    );
  });

  return (
    <section className="h-screen bg-white flex flex-col justify-center relative overflow-hidden">
      {/* 첫 번째 줄 - 무한 루프 스크롤 */}
      <InfiniteScrollText 
        text="DEVELOPER INME DEVELOPER INME DEVELOPER INME DEVELOPER INME DEVELOPER INME DEVELOPER INME"
        direction="right"
      />
      
      {/* 두 번째 줄 - 빠른 애니메이션 + 동시 하이라이트 */}
      <CenterHighlightText 
        text="DATA_ANALYST FRONT_END BACK_EN FULLSTACK BACK_END FRONT_END DATA_ANALYST DATA_ANALYST FRONT_END BACK_END FULLSTACK BACK_END FRONT_END DATA_ANALYST"
        highlightWord="FULLSTACK"
        delay={0}
        direction="right"
      />
      
      {/* 세 번째 줄 - 빠른 애니메이션 + 동시 하이라이트 */}
      <CenterHighlightText 
        text="DATA_ANALYST PROJECT MANAGER DEVELOPER DATA_ANALYST PROJECT MANAGER DATA_ANALYST PROJECT MANAGER DEVELOPER DATA_ANALYST PROJECT MANAGER"
        highlightWord="DEVELOPER"
        delay={0}
        direction="left"
      />
      
      {/* 네 번째 줄 - 빠른 애니메이션 + 동시 하이라이트 (중앙만) */}
      <CenterHighlightText 
        text="MEIN DOME INME MEIN INME DOME INME MEIN DOME MEIN INME DOME MEIN INME DOME MEIN INME DOME MEIN DOME INME INME"
        highlightWord="INME"
        delay={0}
        direction="right"
      />
      
      {/* 다섯 번째 줄 - 무한 루프 스크롤 */}
      <InfiniteScrollText 
        text="PROJECT_MANAGER AI_FULLSTACK INME PROJECT_MANAGER AI_FULLSTACK INME"
        direction="left"
      />

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        onClick={() => goToSection(1)}
      >
        <div className="flex flex-col items-center text-blue-600">
          <span className="text-sm font-medium mb-2">SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WelcomePage;
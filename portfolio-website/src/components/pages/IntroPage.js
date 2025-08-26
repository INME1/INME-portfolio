import React from 'react';
import { motion } from 'framer-motion';

const IntroPage = ({ currentSection, profileImage }) => {
  return (
    <section className="h-screen bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between w-full">
        {/* 텍스트 영역 */}
        <motion.div 
          className="flex-1 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ 
            opacity: currentSection === 1 ? 1 : 0, 
            x: currentSection === 1 ? 0 : -50 
          }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            안녕하세요, 파이어족을 꿈꾸는 개발자<br />
            <span 
              className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6, #A855F7, #9333EA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              김상묵
            </span>입니다
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            풀스택 개발자로서 확장 가능하고 효율적인 시스템을 구축합니다.
          </p>
          
          <p className="text-lg text-gray-500 mb-8">
            웹 개발부터 AI까지, 기술의 경계를 넘나드는 혁신적인 솔루션을 만듭니다.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <span 
              className="px-4 py-2 rounded-full text-sm font-medium text-white"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6, #A855F7)',
                boxShadow: '0 2px 10px rgba(139, 92, 246, 0.3)'
              }}
            >
              Full Stack Developer
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Data Analyst
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              AI Engineer
            </span>
          </div>
        </motion.div>

        {/* 이미지 영역 */}
        <motion.div 
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: currentSection === 1 ? 1 : 0, 
            x: currentSection === 1 ? 0 : 50 
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6, #A855F7, #C084FC)'
            }}
          >
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover bg-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroPage;
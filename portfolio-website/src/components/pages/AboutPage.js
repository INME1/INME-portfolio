import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import aboutimg from '../../images/aboutme.jpg';

const AboutPage = ({ currentSection }) => {
  return (
    <section className="h-screen bg-gray-50 flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.h3 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: currentSection === 2 ? 1 : 0, 
            y: currentSection === 2 ? 0 : 50 
          }}
          transition={{ duration: 0.8 }}
        >
          ABOUT ME
        </motion.h3>
        
        <motion.div 
          className="bg-white rounded-xl p-8 md:p-12 shadow-lg max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: currentSection === 2 ? 1 : 0, 
            y: currentSection === 2 ? 0 : 50 
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* 이미지 영역 */}
            <div className="order-2 lg:order-1">
              <div className="w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-md">
                <img 
                  src={aboutimg} 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* 텍스트 영역 */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  AI 모델의 API 연동 시스템과 자연어 처리에 깊은 관심을 가진 주니어 개발자입니다. 
                  다양한 팀 프로젝트 경험을 통해 협업의 중요성과 소통의 가치를 배웠습니다.
                </p>
                
                <p>
                  데이터 전처리 및 분석 분야에서의 경험을 바탕으로, 
                  코드의 최적화와 성능 개선에 큰 관심을 가지고 있습니다. 
                  복잡한 로직보다는 쉽고 읽기 좋은 코드를 작성하는 것을 목표로 합니다.
                </p>
                
                <p>
                  사용자 중심 디자인을 바탕으로 한 개발을 지향하며, 
                  최근에는 FastAPI와 LLM Fine-tuning에 특별한 관심을 가지고 
                  지속적으로 학습하고 있습니다.
                </p>
                
                <p>
                  기술의 발전과 함께 성장하는 개발자가 되기 위해 새로운 기술을 탐구하고, 
                  사용자에게 가치 있는 경험을 제공하는 것을 목표로 하고 있습니다.
                </p>
              </div>
              
              {/* CV 다운로드 버튼 */}
              <motion.button
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  // CV 다운로드 로직
                  console.log('CV 다운로드');
                }}
              >
                <Download className="w-4 h-4" />
                이력서 다운로드
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
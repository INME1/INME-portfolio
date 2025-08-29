import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import aboutimg from '../../images/aboutme.jpg';

const AboutPage = ({ currentSection }) => {
  const [showResume, setShowResume] = useState(false);

  const handleResumeClick = () => {
    setShowResume(true);
  };

  const closeResume = () => {
    setShowResume(false);
  };

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
                  문제 해결에 대한 열정과 사용자 경험을 중시하는 주니어 개발자입니다. 
                  Django와 React를 활용한 풀스택 개발 경험을 바탕으로, 
                  의료 IT 분야에서 실제 사용자들에게 도움이 되는 시스템을 구축해왔습니다.
                </p>
                
                <p>
                  팀 프로젝트를 통해 협업의 중요성을 배우고, OpenMRS와 Orthanc PACS 같은 
                  의료 표준 시스템과의 통합 경험을 쌓았습니다. 
                  복잡한 요구사항을 단순하고 직관적인 코드로 구현하는 것을 추구합니다.
                </p>
                
                <p>
                  AI 모델 통합과 웹 개발을 연결하는 분야에 특별한 관심을 가지고 있으며, 
                  최신 기술 트렌드를 학습하고 프로젝트에 적용하는 것을 즐깁니다. 
                  현재는 FastAPI와 LLM 파인튜닝 기술을 공부하고 있습니다.
                </p>
                
                <p>
                  사용자의 실제 문제를 해결하는 개발자가 되기 위해 끊임없이 학습하며, 
                  코드 품질과 사용자 경험 모두를 고려한 균형 잡힌 개발을 지향합니다.
                </p>
              </div>
              
              {/* 이력서 보기 버튼 */}
              <motion.button
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #A855F7, #9333EA)',
                  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleResumeClick}
              >
                <FileText className="w-4 h-4" />
                이력서 보기
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 이력서 PDF 모달 */}
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-bold">김상묵 이력서</h3>
              <div className="flex gap-2">
                {/* 다운로드 버튼 */}
                <a
                  href="/files/resume-kimSangMuk.pdf"
                  download="김상묵_이력서.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  다운로드
                </a>
                {/* 닫기 버튼 */}
                <button
                  onClick={closeResume}
                  className="text-gray-500 hover:text-gray-700 text-2xl px-2"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-4 h-[80vh]">
              <iframe
                src="/files/resume-kimSangMuk.pdf"
                className="w-full h-full border-0"
                title="김상묵 이력서"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutPage;
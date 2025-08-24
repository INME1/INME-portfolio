import React from 'react';
import { motion } from 'framer-motion';

// 이미지 import
import pythonImg from '../../images/tech/python.png';
import djangoImg from '../../images/tech/django.png';
import reactImg from '../../images/tech/react.png';
import javascriptImg from '../../images/tech/javascript.jpg';
import htmlImg from '../../images/tech/html.png';
import cssImg from '../../images/tech/css.jpg';
import mysqlImg from '../../images/tech/mysql.jpg';
import dockerImg from '../../images/tech/docker.png';

const TechPage = ({ currentSection, technologies }) => {
  // 주요 기술스택들을 그리드로 표시 (실제 보유 기술)
  const mainTechnologies = [
    { name: "Python", image: pythonImg, color: "from-blue-500 to-yellow-500" },
    { name: "Django", image: djangoImg, color: "from-green-600 to-green-800" },
    { name: "React.js", image: reactImg, color: "from-cyan-400 to-blue-500" },
    { name: "JavaScript", image: javascriptImg, color: "from-yellow-400 to-yellow-600" },
    { name: "HTML", image: htmlImg, color: "from-orange-500 to-red-600" },
    { name: "CSS", image: cssImg, color: "from-blue-400 to-blue-600" },
    { name: "MySQL", image: mysqlImg, color: "from-orange-500 to-blue-600" },
    { name: "Docker", image: dockerImg, color: "from-blue-500 to-cyan-600" }
  ];

  return (
    <section className="h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.h3 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: currentSection === 3 ? 1 : 0, 
            y: currentSection === 3 ? 0 : 50 
          }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h3>

        {/* 메인 기술스택 그리드 */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: currentSection === 3 ? 1 : 0, 
            y: currentSection === 3 ? 0 : 50 
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {mainTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="bg-gray-50 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 group cursor-pointer min-h-[120px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: currentSection === 3 ? 1 : 0,
                scale: currentSection === 3 ? 1 : 0.8
              }}
              transition={{ 
                duration: 0.5, 
                delay: currentSection === 3 ? 0.4 + index * 0.1 : 0 
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              title={tech.name} // 호버 시 툴팁으로 이름 표시
            >
              {/* 기술 아이콘/이미지 */}
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src={tech.image} 
                  alt={tech.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // 이미지 로드 실패시 그라디언트 원형 아이콘으로 폴백
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="w-16 h-16 bg-gradient-to-br ${tech.color} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        ${tech.name.slice(0, 2)}
                      </div>
                    `;
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 추가 기술스택 (작은 버전) */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: currentSection === 3 ? 1 : 0, 
            y: currentSection === 3 ? 0 : 30 
          }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4 className="text-xl font-semibold text-gray-700 text-center mb-6">
            AI/ML & Development Tools
          </h4>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-4">
            {[
              "R", "PyTorch", "Keras", "MariaDB", "Linux", "VS Code", "GitHub"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-gray-50 rounded-xl p-3 text-center hover:bg-gray-100 transition-colors cursor-pointer group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: currentSection === 3 ? 1 : 0,
                  scale: currentSection === 3 ? 1 : 0.9
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: currentSection === 3 ? 0.8 + index * 0.05 : 0 
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 하단 설명 텍스트 */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: currentSection === 3 ? 1 : 0, 
            y: currentSection === 3 ? 0 : 30 
          }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            다양한 기술 스택을 활용하여 <span className="font-semibold text-blue-600">효율적이고 확장 가능한 솔루션</span>을 개발합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechPage;
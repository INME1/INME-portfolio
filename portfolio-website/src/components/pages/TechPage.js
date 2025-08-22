import React from 'react';
import { motion } from 'framer-motion';

const TechPage = ({ currentSection, technologies }) => {
  // 기술스택을 카테고리별로 분류
  const categorizedTechs = {
    "Front-end": [
      { name: "React", image: "/images/tech/react.png" },
      { name: "JavaScript", image: "/images/tech/javascript.png" },
      { name: "TypeScript", image: "/images/tech/typescript.png" },
      { name: "TailwindCSS", image: "/images/tech/tailwind.png" },
      { name: "HTML", image: "/images/tech/html.png" },
      { name: "CSS", image: "/images/tech/css.png" },
    ],
    "Back-end": [
      { name: "Python", image: "/images/tech/python.png" },
      { name: "Django", image: "/images/tech/django.png" },
      { name: "FastAPI", image: "/images/tech/fastapi.png" },
      { name: "Node.js", image: "/images/tech/nodejs.png" },
      { name: "Express", image: "/images/tech/express.png" },
    ],
    "Database": [
      { name: "MongoDB", image: "/images/tech/mongodb.png" },
      { name: "MySQL", image: "/images/tech/mysql.png" },
      { name: "PostgreSQL", image: "/images/tech/postgresql.png" },
      { name: "Redis", image: "/images/tech/redis.png" },
    ],
    "Tools": [
      { name: "Git", image: "/images/tech/git.png" },
      { name: "Docker", image: "/images/tech/docker.png" },
      { name: "AWS", image: "/images/tech/aws.png" },
      { name: "VS Code", image: "/images/tech/vscode.png" },
      { name: "Figma", image: "/images/tech/figma.png" },
    ]
  };

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
          TECH STACK
        </motion.h3>

        {/* 카테고리별 세로 카드 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {Object.entries(categorizedTechs).map(([category, techs], categoryIndex) => (
            <motion.div 
              key={category}
              className="bg-gray-50 rounded-2xl p-6 h-fit"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: currentSection === 3 ? 1 : 0, 
                y: currentSection === 3 ? 0 : 50 
              }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              {/* 카테고리 제목 */}
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center pb-3 border-b border-gray-200">
                {category}
              </h4>
              
              {/* 기술스택 세로 나열 */}
              <div className="space-y-3">
                {techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: currentSection === 3 ? 1 : 0,
                      x: currentSection === 3 ? 0 : -20
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: currentSection === 3 ? 0.3 + categoryIndex * 0.1 + techIndex * 0.05 : 0 
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 5,
                      boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
                    }}
                  >
                    {/* 기술스택 이미지 */}
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                        onError={(e) => {
                          // 이미지 로드 실패시 폴백 처리
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `
                            <div class="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xs font-medium">
                              ${tech.name.slice(0, 2)}
                            </div>
                          `;
                        }}
                      />
                    </div>
                    
                    {/* 기술명 */}
                    <h5 className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {tech.name}
                    </h5>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 설명 텍스트 */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: currentSection === 3 ? 1 : 0, 
            y: currentSection === 3 ? 0 : 30 
          }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
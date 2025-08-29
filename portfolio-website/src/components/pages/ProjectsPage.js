import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LACIDImg from '../../images/projects/LACID.png';
import OsteoImg from '../../images/projects/Osteo.jpg';
import MineImg from '../../images/projects/mine.png';
const ProjectsPage = ({ 
  currentSection, 
  projects, 
  currentProjectIndex, 
  nextProject, 
  prevProject 
}) => {
  const navigate = useNavigate();

  // 업데이트된 프로젝트 데이터 - Osteoporosis 프로젝트 추가
  const featuredProjects = [
    {
      id: 1,
      title: "LACID",
      subtitle: "흉부 X-ray 기반 이상탐지 CDSS 시스템",
      image: LACIDImg,
      technologies: ["Django", "React", "OpenMRS", "Orthanc", "MySQL", "Docker", "Redis", "nginx", "Celery", "Python", "Keras", "Pytorch", "PostgreSQL"],
      githubLink: "https://github.com/INME1/medical_system",
      description: "OpenMRS와 Orthanc PACS를 완전 통합한 종합 의료 AI 플랫폼입니다. 3개의 AI 모델(YOLOv8, SSD, SimCLR)을 분석을 서비스하여 흉부 X-ray에서 폐 질환을 자동 탐지하며, 의료진의 판독을 지원하기 위해 Grad-CAM 히트맵으로 시각화합니다. Docker 기반 마이크로서비스 아키텍처와 STT를 활용한 음성 판독 자동화까지 지원하는 차세대 의료 정보 시스템입니다."
    },
    {
      id: 2,
      title: "골절 위험도 예측 웹",
      subtitle: "FRAX 알고리즘 기반 골다공증 위험도 예측 시스템",
      image: OsteoImg,
      technologies: ["Django", "Python", "NumPy", "Chart.js", "Bootstrap", "SQLite", "HTML5", "CSS3", "JavaScript"],
      githubLink: "https://github.com/INME1/Osteoporosis",
      description: "WHO 공인 FRAX 알고리즘을 활용한 과학적인 골다공증 위험도 예측 시스템입니다. 12개 위험 요소를 분석하여 개인 맞춤형 건강 관리 솔루션을 제공합니다."
    },
    {
      id: 3,
      title: "웹 기반 지뢰찾기",
      subtitle: "Django REST API & React 기반 웹 지뢰찾기 게임",
      image: MineImg,
      technologies: ["Django", "Django REST", "React", "JavaScript", "HTML5", "CSS3", "SQLite", "CORS"],
      githubLink: "https://github.com/INME1/Web_game",
      description: "클래식한 지뢰찾기 게임을 현대적인 웹 기술로 구현한 풀스택 프로젝트입니다. 완전히 분리된 Django REST API와 React 프론트엔드로 구성되어 있으며, 3단계 난이도 시스템과 실시간 게임 상태 동기화를 지원합니다."
    }
  ];

  // READ MORE 버튼 클릭 시 별도 페이지로 이동
  const handleReadMore = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section className="h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.h3 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: currentSection === 4 ? 1 : 0, 
            y: currentSection === 4 ? 0 : 50 
          }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h3>
        
        {/* 프로젝트 카드 그리드 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: currentSection === 4 ? 1 : 0, 
            y: currentSection === 4 ? 0 : 50 
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: currentSection === 4 ? 1 : 0,
                y: currentSection === 4 ? 0 : 30
              }}
              transition={{ 
                duration: 0.6, 
                delay: currentSection === 4 ? 0.4 + index * 0.1 : 0 
              }}
              whileHover={{ y: -8 }}
            >
              {/* 프로젝트 이미지 */}
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden flex items-center justify-center flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    // Osteoporosis 프로젝트용 특별 처리
                    if (project.id === 2) {
                      e.target.parentNode.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                          <div class="text-center">
                            <div class="text-blue-600 text-4xl mb-2">🦴</div>
                            <div class="text-blue-800 text-xl font-bold">Osteoporosis</div>
                          </div>
                        </div>
                      `;
                    }
                    // Web Game 프로젝트용 특별 처리
                    else if (project.id === 3) {
                      e.target.parentNode.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                          <div class="text-center">
                            <div class="text-purple-600 text-4xl mb-2">💣</div>
                            <div class="text-purple-800 text-xl font-bold">Minesweeper</div>
                          </div>
                        </div>
                      `;
                    } else {
                      e.target.parentNode.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                          <div class="text-purple-600 text-4xl font-bold">${project.title.split(' ').map(w => w[0]).join('')}</div>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* 프로젝트 정보 - flex-grow로 확장 */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h4 
                    className="text-xl font-bold text-gray-900 mb-2 transition-colors"
                    style={{
                      color: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #8B5CF6, #A855F7)';
                      e.target.style.webkitBackgroundClip = 'text';
                      e.target.style.webkitTextFillColor = 'transparent';
                      e.target.style.backgroundClip = 'text';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'none';
                      e.target.style.webkitTextFillColor = 'inherit';
                      e.target.style.color = '#111827';
                    }}
                  >
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* 프로젝트 설명 (모든 프로젝트에 추가) */}
                  {project.description && (
                    <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  {/* 기술 스택 */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{
                          background: 'linear-gradient(135deg, #8B5CF6, #A855F7)',
                          boxShadow: '0 2px 8px rgba(139, 92, 246, 0.3)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 버튼들 - 카드 하단 고정 */}
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => handleReadMore(project.id)}
                    className="flex-1 px-4 py-2 bg-gray-900 hover:bg-black rounded-lg font-medium text-white transition-all duration-300"
                  >
                    READ MORE
                  </button>
                  
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
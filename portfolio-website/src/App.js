import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, Mail, ExternalLink, ArrowDown } from 'lucide-react';
// 이미지 import 추가
import coverImage from './images/projects/cover.png';
import profileImage from './images/김상묵사진.jpg';

const Portfolio = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  


  // 메모이제이션된 데이터
  const projects = useMemo(() => [
    {
      id: 1,
      title: "CDSS 시스템",
      description: "OpenMRS와 Orthanc PACS 서버를 통합한 임상 의사결정 지원 시스템",
      image: coverImage,
      technologies: ["Django", "React", "OpenMRS", "Orthanc"],
      link: "#"
    },
    {
      id: 2,
      title: "Password Generator",
      description: "안전한 패스워드를 생성하는 웹 애플리케이션",
      image: coverImage,
      technologies: ["React", "JavaScript", "CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "Personal Blog API",
      description: "개인 블로그를 위한 RESTful API 시스템",
      image: coverImage,
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "#"
    }
  ], []);

  const technologies = useMemo(() => [
    { name: "React", icon: "⚛️" },
    { name: "TailwindCSS", icon: "🎨" },
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🎯" },
    { name: "FastAPI", icon: "⚡" },
    { name: "PyTorch", icon: "🔥" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
    { name: "Docker", icon: "🐳" }
  ], []);

  const sections = useMemo(() => ['welcome', 'intro', 'about', 'tech', 'projects', 'contact'], []);

  // 섹션별 스크롤 처리
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      const now = Date.now();
      const timeDiff = now - lastScrollTime;
      
      if (timeDiff < 100) return;
      
      setLastScrollTime(now);
      
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection, lastScrollTime, sections.length]);

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSection < sections.length - 1) {
          setCurrentSection(prev => prev + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSection > 0) {
          setCurrentSection(prev => prev - 1);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, sections.length]);

  const nextProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const goToSection = useCallback((index) => {
    console.log('goToSection called:', index);
    if (index >= 0 && index < sections.length) {
      setCurrentSection(index);
    }
  }, [sections.length]);

  // 무한 루프 스크롤 텍스트 (1, 5번째 줄) - 원본 방식
  const InfiniteScrollText = React.memo(({ text, direction = "right" }) => {
    const repeatedText = `${text} `.repeat(3); // 3번 반복으로 끊김 방지
    
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

  // 중앙 텍스트 컴포넌트 - 위치 고정으로 텍스트 점프 방지
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
        // 애니메이션과 동시에 하이라이트 시작
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
              transform: direction === 'right' ? 'translateX(-25%)' : 'translateX(25%)', // 최종 위치로 미리 설정
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
                  WebkitTextStroke: shouldHighlight ? '0px' : '2px #3b82f6',
                  textStroke: shouldHighlight ? '0px' : '2px #3b82f6',
                  letterSpacing: '0.1em',
                  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
                  textShadow: shouldHighlight 
                    ? '0 0 20px rgba(59, 130, 246, 0.3)' 
                    : '0 0 20px #rgba(59, 130, 246, 0.3)',
                  lineHeight: '1.2',
                  transition: 'color 1.0s ease, text-shadow 1.5s ease, WebkitTextStroke 1.5s ease, textStroke 1.5s ease'
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
    <div className="bg-gray-50 overflow-hidden h-screen">
      {/* Fixed Navigation */}
      {currentSection > 0 && (
        <motion.header 
          className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold text-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              김상묵
            </motion.h1>
            <nav className="hidden md:flex space-x-8">
              {sections.slice(1).map((section, index) => (
                <button
                  key={section}
                  onClick={() => goToSection(index + 1)}
                  className={`text-gray-600 hover:text-gray-900 transition-colors capitalize ${
                    currentSection === index + 1 ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {section === 'intro' ? 'Home' : section}
                </button>
              ))}
            </nav>
          </div>
        </motion.header>
      )}

      {/* Section Indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`block w-3 h-3 rounded-full transition-all ${
              currentSection === index 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Main Container */}
      <div 
        className="h-full"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
          transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        {/* Welcome Page - 조정된 애니메이션 */}
        <section className="h-screen bg-white flex flex-col justify-center relative overflow-hidden">
          
          {/* 첫 번째 줄 - 무한 루프 스크롤 (하이라이트 없음) */}
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
          
          {/* 다섯 번째 줄 - 무한 루프 스크롤 (하이라이트 없음) */}
          <InfiniteScrollText 
            text="PROJECT_MANAGER AI_FULLSTACK INME PROJECT_MANAGER AI_FULLSTACK INME"
            direction="left"
          />

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              onClick={() => goToSection(1)}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm text-gray-400 font-medium">SCROLL</span>
              <ArrowDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </motion.div>
        </section>

        {/* Intro Section */}
        <section className="h-screen bg-white flex items-center">
          <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between w-full">
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
                안녕하세요,<br />
                <span className="text-blue-600">김상묵</span>입니다
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-4">
                풀스택 개발자로서 확장 가능하고 효율적인 시스템을 구축합니다.
              </p>
              <p className="text-lg text-gray-500 mb-8">
                Seoul, Korea
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <motion.button 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resume
                </motion.button>
                <motion.a 
                  href="https://github.com/INME1" 
                  className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6 text-gray-700" />
                </motion.a>
                <motion.a 
                  href="mailto:suisfan111@gmail.com" 
                  className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-6 h-6 text-gray-700" />
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: currentSection === 1 ? 1 : 0, 
                x: currentSection === 1 ? 0 : 50 
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
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
              className="bg-white rounded-xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: currentSection === 2 ? 1 : 0, 
                y: currentSection === 2 ? 0 : 50 
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
                다양한 기술 분야에 깊은 관심을 가진 열정적인 개발자입니다. 웹 개발(백엔드 시스템 중심), 
                클라우드 컴퓨팅, 데이터, 게임 개발, AI 등의 분야에서 경험을 쌓고 있습니다. 
                또한 비즈니스 창업과 기술 혁신의 교차점에도 깊은 흥미를 가지고 있습니다. 
                1년 이상의 경험을 통해 개인 프로젝트를 통해 실력을 갈고닦았으며, 
                지속적으로 새로운 기술을 학습하고 탐구하여 전문성을 확장해나가고 있습니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="h-screen bg-white flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: currentSection === 3 ? 1 : 0, 
                y: currentSection === 3 ? 0 : 50 
              }}
              transition={{ duration: 0.8 }}
            >
              TECHNOLOGIES
            </motion.h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: currentSection === 3 ? 1 : 0, 
                y: currentSection === 3 ? 0 : 50 
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {technologies.map((tech, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: currentSection === 3 ? 1 : 0, 
                    scale: currentSection === 3 ? 1 : 0.8 
                  }}
                  transition={{ duration: 0.5, delay: currentSection === 3 ? index * 0.05 : 0 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <span className="text-gray-700 font-medium text-center">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="h-screen bg-gray-50 flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: currentSection === 4 ? 1 : 0, 
                y: currentSection === 4 ? 0 : 50 
              }}
              transition={{ duration: 0.8 }}
            >
              RECENT PROJECTS
            </motion.h3>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: currentSection === 4 ? 1 : 0, 
                y: currentSection === 4 ? 0 : 50 
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center justify-center">
                <button 
                  onClick={prevProject}
                  className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                  {projects.slice(currentProjectIndex, currentProjectIndex + 2).map((project) => (
                    <motion.div 
                      key={project.id} 
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                      whileHover={{ y: -5 }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover bg-gray-200"
                      />
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={project.link}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View Project <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button 
                  onClick={nextProject}
                  className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="h-screen bg-gray-50 flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: currentSection === 5 ? 1 : 0, 
                y: currentSection === 5 ? 0 : 50 
              }}
              transition={{ duration: 0.8 }}
            >
              CONTACT ME
            </motion.h3>
            <motion.div 
              className="bg-white rounded-xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: currentSection === 5 ? 1 : 0, 
                y: currentSection === 5 ? 0 : 50 
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-600 leading-relaxed text-lg md:text-xl mb-8">
                질문, 제안 또는 협업에 대해 문의사항이 있으시면 언제든지 연락해 주세요.
              </p>
              
              <div className="flex justify-center gap-6">
                <motion.a 
                  href="https://github.com/INME1" 
                  className="flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6 text-gray-700" />
                  <span className="font-medium">GitHub</span>
                </motion.a>
                <motion.a 
                  href="mailto:suisfan111@gmail.com" 
                  className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-6 h-6" />
                  <span className="font-medium">Email</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
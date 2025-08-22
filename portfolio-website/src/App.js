import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

// 페이지 컴포넌트들 import
import WelcomePage from './components/pages/WelcomePage';
import IntroPage from './components/pages/IntroPage';
import AboutPage from './components/pages/AboutPage';
import TechPage from './components/pages/TechPage';
import ProjectsPage from './components/pages/ProjectsPage';
import ContactPage from './components/pages/ContactPage';

// 이미지 import
import coverImage from './images/projects/cover.png';
import profileImage from './images/김상묵사진.jpg';

const Portfolio = () => {
  // 상태 관리
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  // 데이터 정의
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

  // 이벤트 핸들러들
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

  // 스크롤 처리
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

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation Header */}
      {currentSection > 0 && (
        <motion.header 
          className="fixed top-0 left-0 right-0 z-50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-black/80 backdrop-blur-sm border-b border-gray-800">
            <nav className="max-w-6xl mx-auto px-6 py-4">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => goToSection(index)}
                  className={`mr-8 text-sm font-medium transition-colors ${
                    currentSection === index 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section === 'welcome' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
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
        {/* 각 페이지 컴포넌트들 */}
        <WelcomePage currentSection={currentSection} goToSection={goToSection} />
        <IntroPage currentSection={currentSection} profileImage={profileImage} />
        <AboutPage currentSection={currentSection} />
        <TechPage currentSection={currentSection} technologies={technologies} />
        <ProjectsPage 
          currentSection={currentSection} 
          projects={projects}
          currentProjectIndex={currentProjectIndex}
          nextProject={nextProject}
          prevProject={prevProject}
        />
        <ContactPage currentSection={currentSection} />
      </div>
    </div>
  );
};

export default Portfolio;
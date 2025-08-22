// App.js - React Router를 사용한 라우팅 설정

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// 페이지 컴포넌트들 import
import WelcomePage from './components/pages/WelcomePage';
import IntroPage from './components/pages/IntroPage';
import AboutPage from './components/pages/AboutPage';
import TechPage from './components/pages/TechPage';
import ProjectsPage from './components/pages/ProjectsPage';
import ContactPage from './components/pages/ContactPage';
import ProjectDetailPage from './components/pages/ProjectDetailPage';

// 이미지 import
import coverImage from './images/projects/cover.png';
import profileImage from './images/김상묵사진.jpg';

// 메인 포트폴리오 컴포넌트 (기존 single-page 방식)
const MainPortfolio = () => {
  // 상태 관리
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  // URL 파라미터 확인하여 특정 섹션으로 이동
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section');
    
    if (section === 'projects') {
      setCurrentSection(4); // projects는 4번째 섹션 (0부터 시작)
      // URL에서 파라미터 제거
      window.history.replaceState({}, '', '/');
    }
  }, []);

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

  // 스크롤 처리 - 개선된 버전
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      const now = Date.now();
      const timeDiff = now - lastScrollTime;
      
      // 스크롤 감도 조정 (더 엄격하게)
      if (timeDiff < 150) return;
      
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

  // 브라우저 스크롤바 숨기기와 높이 고정
  useEffect(() => {
    // 페이지 로드 시 스크롤 위치를 맨 위로 고정
    window.scrollTo(0, 0);
    
    // body와 html의 스크롤을 완전히 차단
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.documentElement.style.height = '100vh';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    
    return () => {
      document.body.style.overflow = originalStyle;
      document.documentElement.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black text-white overflow-hidden">
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

      {/* Main Container - 정확한 높이 제어 */}
      <div 
        className="w-full h-screen flex flex-col"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
          transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          height: `${sections.length * 100}vh`, // 전체 높이를 섹션 수만큼
        }}
      >
        {/* 각 페이지 컴포넌트들 - 정확히 100vh씩 */}
        <div className="w-full h-screen flex-shrink-0">
          <WelcomePage currentSection={currentSection} goToSection={goToSection} />
        </div>
        <div className="w-full h-screen flex-shrink-0">
          <IntroPage currentSection={currentSection} profileImage={profileImage} />
        </div>
        <div className="w-full h-screen flex-shrink-0">
          <AboutPage currentSection={currentSection} />
        </div>
        <div className="w-full h-screen flex-shrink-0">
          <TechPage currentSection={currentSection} technologies={technologies} />
        </div>
        <div className="w-full h-screen flex-shrink-0">
          <ProjectsPage 
            currentSection={currentSection} 
            projects={projects}
            currentProjectIndex={currentProjectIndex}
            nextProject={nextProject}
            prevProject={prevProject}
          />
        </div>
        <div className="w-full h-screen flex-shrink-0">
          <ContactPage currentSection={currentSection} />
        </div>
      </div>
    </div>
  );
};

// 메인 App 컴포넌트 (라우터 설정)
const Portfolio = () => {
  return (
    <Router>
      <Routes>
        {/* 메인 포트폴리오 페이지 */}
        <Route path="/" element={<MainPortfolio />} />
        
        {/* 프로젝트 상세 페이지들 */}
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
      </Routes>
    </Router>
  );
};

export default Portfolio;
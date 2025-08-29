import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// 페이지 컴포넌트들 import
import WelcomePage from './components/pages/WelcomePage';
import IntroPage from './components/pages/IntroPage';
import AboutPage from './components/pages/AboutPage';
import TechPage from './components/pages/TechPage';
import ProjectsPage from './components/pages/ProjectsPage';
import ContactPage from './components/pages/ContactPage';
import ProjectDetailPage from './components/pages/ProjectDetailPage';
import ProjectDetailPage2 from './components/pages/ProjectDetailPage2'; // Osteoporosis 프로젝트용 상세 페이지
import ProjectDetailPage3 from './components/pages/ProjectDetailPage3'; // Web Game 프로젝트용 상세 페이지

// 이미지 import
import coverImage from './images/projects/LACID.png';
import profileImage from './images/김상묵사진.jpg';

// 프로젝트 상세 페이지 라우터 컴포넌트
const ProjectDetailRouter = () => {
  const { projectId } = useParams();
  const id = parseInt(projectId);

  // 프로젝트 ID에 따라 다른 상세 페이지 컴포넌트 렌더링
  if (id === 2) {
    return <ProjectDetailPage2 />;
  }
  if (id === 3) {
    return <ProjectDetailPage3 />;
  }
  // 기본적으로는 기존 ProjectDetailPage 사용 (LACID 등)
  return <ProjectDetailPage />;
};

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

  // 데이터 정의 - 슬라이드용 추가 프로젝트들 포함
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
      title: "Web Minesweeper Game",
      description: "Django REST API & React 기반 웹 지뢰찾기 게임",
      image: coverImage,
      technologies: ["Django", "React", "JavaScript", "SQLite"],
      link: "#"
    },
    // 슬라이드용 추가 프로젝트들 (ID 4+)
    {
      id: 4,
      title: "패스워드 생성기",
      description: "안전한 패스워드 생성 및 관리 도구",
      image: coverImage,
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      link: "https://github.com/INME1/password-generator"
    },
    {
      id: 5,
      title: "날씨 대시보드",
      description: "실시간 날씨 정보 제공 서비스",
      image: coverImage,
      technologies: ["React", "Node.js", "Express", "Weather API"],
      link: "https://github.com/INME1/weather-dashboard"
    },
    {
      id: 6,
      title: "TODO 관리 앱",
      description: "효율적인 할일 관리 웹 애플리케이션",
      image: coverImage,
      technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
      link: "https://github.com/INME1/todo-manager"
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

  // 이벤트 핸들러들 - 전체 프로젝트 배열 기준으로 슬라이드
  const nextProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const goToSection = useCallback((index) => {
    console.log('goToSection called:', index);
    if (index >= 0 && index < sections.length && !isScrolling) {
      console.log(`Navigating to section ${index}: ${sections[index]}`);
      setCurrentSection(index);
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  }, [sections, isScrolling]);

  // 휠 스크롤 이벤트 핸들러
  const handleWheel = useCallback((event) => {
    event.preventDefault();
    const currentTime = Date.now();
    
    if (isScrolling || currentTime - lastScrollTime < 1000) {
      return;
    }

    const deltaY = event.deltaY;
    console.log('Wheel event:', { deltaY, currentSection, isScrolling });
    
    if (deltaY > 0 && currentSection < sections.length - 1) {
      console.log('Scrolling down');
      goToSection(currentSection + 1);
      setLastScrollTime(currentTime);
    } else if (deltaY < 0 && currentSection > 0) {
      console.log('Scrolling up');
      goToSection(currentSection - 1);
      setLastScrollTime(currentTime);
    }
  }, [currentSection, goToSection, isScrolling, lastScrollTime, sections.length]);

  // 키보드 이벤트 핸들러
  const handleKeyDown = useCallback((event) => {
    if (isScrolling) return;
    
    switch(event.key) {
      case 'ArrowDown':
      case ' ':
        event.preventDefault();
        if (currentSection < sections.length - 1) {
          goToSection(currentSection + 1);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (currentSection > 0) {
          goToSection(currentSection - 1);
        }
        break;
      default:
        break;
    }
  }, [currentSection, goToSection, isScrolling, sections.length]);

  // 이벤트 리스너 등록
  useEffect(() => {
    const handleWheelEvent = (e) => handleWheel(e);
    const handleKeyDownEvent = (e) => handleKeyDown(e);

    window.addEventListener('wheel', handleWheelEvent, { passive: false });
    window.addEventListener('keydown', handleKeyDownEvent);

    return () => {
      window.removeEventListener('wheel', handleWheelEvent);
      window.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, [handleWheel, handleKeyDown]);

  return (
    <div className="h-screen overflow-hidden bg-white">
      <div 
        className="h-full transition-transform duration-1000 ease-in-out"
        style={{ 
          transform: `translateY(-${currentSection * 100}vh)` 
        }}
      >
        <WelcomePage 
          currentSection={currentSection}
          goToSection={goToSection}
        />
        <IntroPage 
          currentSection={currentSection}
          profileImage={profileImage}
        />
        <AboutPage 
          currentSection={currentSection}
        />
        <TechPage 
          currentSection={currentSection}
          technologies={technologies}
        />
        <ProjectsPage 
          currentSection={currentSection}
          projects={projects}
          currentProjectIndex={currentProjectIndex}
          nextProject={nextProject}
          prevProject={prevProject}
        />
        <ContactPage 
          currentSection={currentSection}
        />
      </div>
    </div>
  );
};

// App 컴포넌트 - 라우터 설정
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 메인 포트폴리오 페이지 */}
          <Route path="/" element={<MainPortfolio />} />
          
          {/* 프로젝트 상세 페이지 - ID에 따라 다른 컴포넌트 렌더링 */}
          <Route 
            path="/project/:projectId" 
            element={<ProjectDetailRouter />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
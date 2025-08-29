import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Award, Github, FileText, Database, Activity, Brain, Shield, Stethoscope, Monitor, Cpu, Server, Gamepad2, Code, Zap } from 'lucide-react';

const ProjectDetailPage3 = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [showPPT, setShowPPT] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePPTClick = () => {
    setShowPPT(true);
  };

  const closePPT = () => {
    setShowPPT(false);
  };

  const projectImages = [
    {
      src: "/images/projects/webgame-main.png",
      alt: "웹 지뢰찾기 메인 게임 화면",
      caption: "React 기반 반응형 지뢰찾기 게임 인터페이스"
    },
    {
      src: "/images/projects/webgame-difficulty.png", 
      alt: "난이도 선택 화면",
      caption: "Easy, Medium, Hard 3단계 난이도 시스템"
    },
    {
      src: "/images/projects/webgame-architecture.png",
      alt: "시스템 아키텍처",
      caption: "Django REST API와 React 프론트엔드 구조"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const project = {
    title: "Web Minesweeper Game",
    subtitle: "Django REST API & React 기반 웹 지뢰찾기 게임",
    period: "2025.04 - 2025.04",
    team: "개인 프로젝트",
    status: "완료",
    technologies: ["Django", "Django REST Framework", "React", "JavaScript", "HTML5", "CSS3", "SQLite", "CORS", "Axios", "Git"],
    githubLink: "https://github.com/INME1/Web_game",
    overview: "클래식한 지뢰찾기 게임을 현대적인 웹 기술로 구현한 풀스택 프로젝트입니다. Django REST API를 백엔드로, React를 프론트엔드로 사용하여 완전히 분리된 아키텍처를 구축했습니다. 게임 상태 관리, 실시간 상호작용, 난이도별 게임 로직을 모두 서버사이드에서 처리하며, 클린한 UI/UX와 반응형 디자인을 제공합니다.",
    
    description: `Web Minesweeper Game은 전통적인 지뢰찾기 게임을 웹 환경에 최적화하여 구현한 프로젝트입니다. 단순해 보이는 게임이지만, 복잡한 게임 로직과 상태 관리를 통해 풀스택 개발 역량을 종합적으로 보여주는 프로젝트입니다.

백엔드 아키텍처 설계

Django와 Django REST Framework를 활용하여 RESTful API 서버를 구축했습니다. 게임 상태(Game)와 각 셀의 정보(Cell)를 모델링하여 데이터베이스에 저장하고, 게임의 모든 로직을 서버사이드에서 처리합니다. 이를 통해 게임의 무결성을 보장하고 클라이언트의 부정행위를 방지합니다.

프론트엔드 상호작용 구현

React를 사용하여 동적이고 반응성 있는 사용자 인터페이스를 구현했습니다. Axios를 통한 비동기 통신으로 서버와 실시간으로 데이터를 주고받으며, 게임 상태 변화에 따른 즉각적인 UI 업데이트를 제공합니다.

게임 로직의 복잡성

단순해 보이는 지뢰찾기 게임 뒤에는 복잡한 알고리즘이 숨어있습니다. 지뢰 배치, 인접 지뢰 수 계산, 연쇄 열기 로직, 승리/패배 판정 등의 핵심 게임 로직을 모두 구현했습니다. 특히 빈 셀 클릭 시 연쇄적으로 열리는 기능은 재귀적 알고리즘을 활용하여 효율적으로 처리했습니다.`,

    features: [
      {
        title: "다단계 난이도 시스템",
        description: "Easy(9x9, 10개 지뢰), Medium(16x16, 40개 지뢰), Hard(16x30, 99개 지뢰) 3가지 난이도를 지원합니다.",
        icon: Gamepad2,
        details: [
          "난이도별 최적화된 격자 크기",
          "지뢰 밀도 조절을 통한 게임 밸런스",
          "반응형 디자인으로 모든 화면 크기 지원",
          "난이도별 게임 통계 추적"
        ]
      },
      {
        title: "실시간 게임 상태 관리",
        description: "서버에서 게임 상태를 완벽하게 관리하며, 클라이언트는 UI만 담당하는 분리된 아키텍처입니다.",
        icon: Database,
        details: [
          "Django ORM을 통한 게임 상태 영속화",
          "RESTful API 엔드포인트 설계",
          "실시간 게임 상태 동기화",
          "게임 세션 관리 및 복원 기능"
        ]
      },
      {
        title: "지능형 게임 로직",
        description: "클래식 지뢰찾기의 모든 규칙을 완벽하게 구현한 게임 엔진입니다.",
        icon: Brain,
        details: [
          "랜덤 지뢰 배치 알고리즘",
          "인접 지뢰 수 자동 계산",
          "빈 셀 연쇄 열기 재귀 알고리즘",
          "승리/패배 조건 자동 판정"
        ]
      },
      {
        title: "직관적인 사용자 인터페이스",
        description: "클린하고 직관적인 디자인으로 최적의 게임 경험을 제공합니다.",
        icon: Monitor,
        details: [
          "클릭/우클릭을 통한 셀 조작",
          "플래그 시스템으로 지뢰 표시",
          "시각적 피드백과 애니메이션",
          "게임 상태별 색상 구분"
        ]
      }
    ],

    architecture: [
      {
        layer: "프론트엔드",
        technologies: ["React", "JavaScript ES6+", "HTML5", "CSS3", "Axios"],
        description: "반응형 게임 인터페이스 및 실시간 상호작용"
      },
      {
        layer: "백엔드 API",
        technologies: ["Django", "Django REST Framework", "Python"],
        description: "게임 로직 처리 및 RESTful API 서비스"
      },
      {
        layer: "데이터베이스",
        technologies: ["SQLite", "Django ORM"],
        description: "게임 상태 및 셀 정보 영속화"
      },
      {
        layer: "통신",
        technologies: ["HTTP/HTTPS", "JSON", "CORS"],
        description: "클라이언트-서버 간 비동기 데이터 통신"
      }
    ],

    challenges: [
      {
        problem: "복잡한 지뢰찾기 게임 로직을 서버사이드에서 완전히 구현",
        solution: "Django 모델을 활용한 게임 상태 관리, 재귀 알고리즘을 통한 연쇄 열기 기능, 효율적인 지뢰 배치 및 인접 계산 로직 구현",
        result: "100% 정확한 지뢰찾기 게임 로직 구현, 어떤 상황에서도 일관된 게임 규칙 적용"
      },
      {
        problem: "React와 Django 간의 실시간 상태 동기화 문제",
        solution: "Axios를 활용한 비동기 HTTP 통신, 게임 상태 변화에 따른 즉각적인 API 호출, 클라이언트 사이드 상태 관리 최적화",
        result: "매끄러운 실시간 게임 플레이 경험, 서버와 클라이언트 간 완벽한 상태 동기화"
      },
      {
        problem: "CORS 정책으로 인한 프론트엔드-백엔드 통신 제한",
        solution: "django-cors-headers 라이브러리 설정, 개발/운영 환경별 CORS 정책 구성, 보안을 유지하면서도 필요한 통신 허용",
        result: "안전하고 원활한 크로스 도메인 통신 구현, 개발 효율성 극대화"
      },
      {
        problem: "다양한 화면 크기에서의 게임 보드 최적화",
        solution: "CSS Grid와 Flexbox를 활용한 반응형 레이아웃, 모바일과 데스크톱 환경 모두 고려한 UI 설계, 동적 셀 크기 조정",
        result: "모든 디바이스에서 완벽한 게임 경험 제공, 사용자 접근성 대폭 향상"
      }
    ],

    contribution: {
      role:  " 개인 프로젝트",
      responsibilities: [
        "Django REST API 설계 및 구현 (게임 로직 포함)",
        "React 기반 게임 인터페이스 개발",
        "게임 상태 관리 시스템 구축",
        "지뢰찾기 핵심 알고리즘 구현 (지뢰 배치, 연쇄 열기 등)",
        "RESTful API 엔드포인트 설계",
        "CORS 설정 및 프론트엔드-백엔드 통신 구현",
        "반응형 웹 디자인 및 UI/UX 최적화",
        "Git을 통한 버전 관리 및 프로젝트 문서화"
      ]
    },

    technicalHighlights: [
      {
        title: "완전 분리형 아키텍처",
        details: "Django REST API와 React 프론트엔드를 완전히 분리하여 확장성과 유지보수성 확보"
      },
      {
        title: "서버사이드 게임 로직", 
        details: "모든 게임 규칙을 서버에서 처리하여 게임 무결성 보장, 클라이언트 조작 방지"
      },
      {
        title: "효율적인 알고리즘",
        details: "재귀 기반 연쇄 열기, 최적화된 지뢰 배치, O(1) 시간복잡도의 인접 지뢰 계산"
      },
      {
        title: "현대적 웹 기술 활용",
        details: "ES6+ JavaScript, React Hooks, Django ORM, RESTful API 설계 원칙 준수"
      }
    ]
  };

  const sections = [
    { id: 'overview', label: '개요' },
    { id: 'description', label: '상세 설명' },
    { id: 'features', label: '핵심 기능' },
    { id: 'architecture', label: '시스템 아키텍처' },
    { id: 'challenges', label: '기술적 도전' },
    { id: 'contribution', label: '나의 기여' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 헤더 */}
      <motion.header
        className="bg-white shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            프로젝트 목록으로 돌아가기
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* 왼쪽: 프로젝트 정보 */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {project.subtitle}
              </p>
              
              {/* 프로젝트 메타 정보 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-500">기간</div>
                    <div className="font-medium">{project.period}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-500">팀구성</div>
                    <div className="font-medium">{project.team}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-500">상태</div>
                    <div className="font-medium text-green-600">{project.status}</div>
                  </div>
                </div>
              </div>

              {/* 개선된 기술 스택 - 어두운 배경 글로우 스타일 */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-4">사용 기술</h3>
                <div className="bg-white-900 p-6 rounded-2xl">
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => {
                      const getGlowStyle = (tech) => {
                        const techStyles = {
                          // Backend
                          'Django': 'bg-white text-green-600 border border-green-200 shadow-lg shadow-green-500/20',
                          'Django REST Framework': 'bg-white text-green-600 border border-green-200 shadow-lg shadow-green-500/20',
                          
                          // Frontend
                          'React': 'bg-white text-cyan-600 border border-cyan-200 shadow-lg shadow-cyan-500/20',
                          'JavaScript': 'bg-white text-yellow-600 border border-yellow-200 shadow-lg shadow-yellow-500/20',
                          'HTML5': 'bg-white text-red-600 border border-red-200 shadow-lg shadow-red-500/20',
                          'CSS3': 'bg-white text-blue-600 border border-blue-200 shadow-lg shadow-blue-500/20',
                          
                          // Database
                          'SQLite': 'bg-white text-blue-600 border border-blue-200 shadow-lg shadow-blue-500/20',
                          
                          // Communication
                          'CORS': 'bg-white text-purple-600 border border-purple-200 shadow-lg shadow-purple-500/20',
                          'Axios': 'bg-white text-cyan-600 border border-cyan-200 shadow-lg shadow-cyan-500/20',
                          
                          // Tools
                          'Git': 'bg-white text-orange-600 border border-orange-200 shadow-lg shadow-orange-500/20'
                        };
                        
                        return techStyles[tech] || 'bg-white text-gray-600 border border-gray-200 shadow-lg shadow-gray-500/20';
                      };

                      return (
                        <span 
                          key={index}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${getGlowStyle(tech)}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 링크 */}
              <div className="flex gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                <button
                  onClick={handlePPTClick}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Demo
                </button>
              </div>
            </div>

            {/* 오른쪽: 프로젝트 이미지 슬라이드 */}
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-80">
                <img 
                  src={projectImages[currentImageIndex].src}
                  alt={projectImages[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                        <div class="text-center">
                          <div class="text-purple-600 text-6xl mb-4"><i class="fas fa-bomb"></i></div>
                          <div class="text-purple-800 text-lg font-bold">Web Minesweeper</div>
                        </div>
                      </div>
                    `;
                  }}
                />
                
                {/* 이미지 네비게이션 */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  →
                </button>
                
                {/* 이미지 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* 이미지 설명 */}
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-600 text-center">
                  {projectImages[currentImageIndex].caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* 내비게이션 */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeSection === section.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeSection === 'overview' && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">프로젝트 개요</h2>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-gray-700 leading-relaxed text-lg mb-8">
                  {project.overview}
                </div>
                
                {/* 프로젝트 하이라이트 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      기술적 특징
                    </h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Django REST API 기반 백엔드</li>
                      <li>• React 기반 동적 프론트엔드</li>
                      <li>• 완전 분리형 아키텍처</li>
                      <li>• 실시간 게임 상태 동기화</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                      <Gamepad2 className="w-5 h-5" />
                      게임 특징
                    </h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• 3단계 난이도 시스템</li>
                      <li>• 완벽한 지뢰찾기 로직</li>
                      <li>• 반응형 게임 인터페이스</li>
                      <li>• 직관적인 사용자 경험</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'description' && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">상세 설명</h2>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {project.description}
                </div>
                
                {/* 기술적 특징 강조 */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.technicalHighlights.map((highlight, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-900 mb-2 text-sm">{highlight.title}</h4>
                      <p className="text-purple-700 text-xs">{highlight.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'features' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">핵심 기능</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <feature.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'architecture' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">시스템 아키텍처</h2>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {project.architecture.map((layer, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-6 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="text-2xl font-bold text-gray-900 mb-2">{layer.layer}</div>
                      <div className="flex flex-wrap gap-1 justify-center mb-3">
                        {layer.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm">{layer.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* 시스템 플로우 */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">게임 플로우</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                        <span><strong>1. 게임 시작</strong> → 난이도 선택 및 게임 생성</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                        <span><strong>2. 보드 생성</strong> → 지뢰 배치 및 격자 초기화</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span><strong>3. 셀 클릭</strong> → API 호출을 통한 셀 열기/플래그</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        <span><strong>4. 게임 로직</strong> → 서버에서 게임 상태 업데이트</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span><strong>5. 결과 반환</strong> → UI 업데이트 및 게임 완료 처리</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'challenges' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">기술적 도전과 해결</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-red-800 mb-2">문제점</h4>
                        <p className="text-gray-700">{challenge.problem}</p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-green-800 mb-2">해결방안</h4>
                        <p className="text-gray-700">{challenge.solution}</p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-purple-800 mb-2">결과</h4>
                        <p className="text-gray-700">{challenge.result}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'contribution' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">나의 기여</h2>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">개발 영역</h3>
                  <div className="text-sm text-gray-600 mb-4">{project.contribution.role}</div>
                  <div className="space-y-4">
                    {project.contribution.responsibilities.map((responsibility, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {responsibility}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 핵심 기술 구현사항 */}
              <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">핵심 기술 구현사항</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      백엔드 개발
                    </h4>
                    <ul className="text-blue-800 space-y-2 text-sm">
                      <li>• Django Model 설계 (Game, Cell)</li>
                      <li>• RESTful API 엔드포인트 구현</li>
                      <li>• 지뢰찾기 핵심 알고리즘 개발</li>
                      <li>• 게임 상태 관리 시스템</li>
                      <li>• CORS 설정 및 보안 구현</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                      <Monitor className="w-5 h-5" />
                      프론트엔드 개발
                    </h4>
                    <ul className="text-green-800 space-y-2 text-sm">
                      <li>• React 컴포넌트 설계 및 구현</li>
                      <li>• 게임 보드 UI/UX 개발</li>
                      <li>• Axios를 통한 API 통신</li>
                      <li>• 반응형 웹 디자인 구현</li>
                      <li>• 게임 상태 동기화 로직</li>
                    </ul>
                  </div>
                </div>

                {/* 프로젝트 성과 지표 */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                    <div className="text-sm text-purple-800">구현도</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">6+</div>
                    <div className="text-sm text-green-800">API 엔드포인트</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                    <div className="text-sm text-blue-800">난이도 시스템</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                    <div className="text-sm text-orange-800">사용 기술</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* 하단 액션 버튼 */}
      <div className="bg-white border-t py-6">
        <div className="max-w-6xl mx-auto px-4 flex justify-center">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            목록으로 돌아가기
          </button>
        </div>
      </div>

      {/* Demo 모달 */}
      {showPPT && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-bold">Web Minesweeper Game Demo</h3>
              <button
                onClick={closePPT}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4 h-[80vh]">
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Gamepad2 className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">게임 데모</h4>
                  <p className="text-gray-600 mb-4">실제 게임을 플레이해보세요!</p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub에서 보기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage3;
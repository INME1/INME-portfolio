import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Award, Github, FileText, Database, Activity, Brain, Shield, Stethoscope, Monitor, Cpu, Server, Heart, Calculator, BarChart3, Users2 } from 'lucide-react';

const ProjectDetailPage2 = () => {
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
      src: "/images/projects/osteoporosis-main.png",
      alt: "골다공증 예측 메인 페이지",
      caption: "사용자 친화적인 설문조사 인터페이스"
    },
    {
      src: "/images/projects/osteoporosis-result.png", 
      alt: "위험도 결과 시각화 화면",
      caption: "Chart.js 기반 위험도 시각화 및 맞춤 추천"
    },
    {
      src: "/images/projects/osteoporosis-hospital.png",
      alt: "병원 검색 시스템",
      caption: "지역별 의료기관 검색 및 연계 서비스"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const project = {
    title: "골절 위험도 예측 웹",
    subtitle: "FRAX 알고리즘 기반 골다공증 위험도 예측 시스템",
    period: "2025.03 (4일)",
    team: "6명",
    status: "완료",
    technologies: ["Django", "Python", "NumPy", "Chart.js", "Bootstrap", "SQLite", "HTML5", "CSS3", "JavaScript", "xhtml2pdf", "QR Code", "Ajax"],
    githubLink: "https://github.com/YangGo7/Osteoporosis_project-",
    overview: "세계보건기구(WHO)에서 개발한 FRAX 알고리즘을 기반으로 골다공증 위험도를 예측하는 웹 기반 헬스케어 플랫폼입니다. 12개의 위험 요소를 종합 분석하여 개인별 맞춤형 건강 관리 솔루션을 제공하며, 예방 중심의 접근을 통해 골다공증의 조기 발견과 관리를 지원합니다. 진단부터 병원 검색, PDF 리포트 생성까지 원스톱 서비스를 제공하는 통합 헬스케어 시스템입니다.",
    
    description: `Osteoporosis Risk Prediction System은 골다공증의 예방과 조기 발견을 목표로 개발된 웹 기반 헬스케어 플랫폼입니다. 증상이 나타나기 전에 위험도를 예측하여 예방 중심의 의료 서비스를 제공합니다.

FRAX 알고리즘 기반 예측

WHO에서 개발하고 의학적으로 검증된 FRAX(Fracture Risk Assessment Tool) 알고리즘을 Python으로 구현했습니다. 나이, 성별, BMI, 골절 병력, 흡연, 음주 등 12개의 위험 요소를 종합하여 주요 골절 위험도와 고관절 골절 위험도를 정확하게 계산합니다.

사용자 중심 인터페이스 설계

복잡한 의료용어를 일반인이 이해하기 쉽도록 툴팁과 설명을 제공하며, 단계별 설문 진행으로 사용자 경험을 최적화했습니다. Bootstrap 기반의 반응형 디자인으로 모든 디바이스에서 접근 가능합니다.

개인 맞춤형 건강 관리 솔루션

위험도 수준에 따라 차별화된 운동법, 식단, 생활습관 개선 방안을 제공합니다. 또한 사용자의 과거 진단 결과를 추적하여 지속적인 건강 관리를 지원합니다.

의료기관 연계 서비스

지역별 의료기관 검색 기능을 통해 필요 시 즉시 전문의 상담을 받을 수 있도록 연계합니다. 진단 결과를 PDF로 생성하여 병원 방문 시 활용할 수 있습니다.

통합 커뮤니티 플랫폼

Q&A 게시판을 통해 사용자 간 정보 교환이 가능하며, 의료 전문가의 답변을 통해 신뢰성 있는 정보를 제공합니다.`,

    features: [
      {
        title: "FRAX 기반 위험도 예측",
        description: "WHO 승인 FRAX 알고리즘을 활용한 골다공증 위험도 계산",
        icon: Calculator,
        details: [
          "12개 위험 요소 종합 분석",
          "주요 골절 및 고관절 골절 위험도 계산",
          "로지스틱 회귀 모델 기반 예측",
          "BMI 자동 계산 및 위험도 보정"
        ]
      },
      {
        title: "시각적 결과 표현",
        description: "Chart.js를 활용한 직관적인 위험도 시각화 및 맞춤형 추천 시스템",
        icon: BarChart3,
        details: [
          "막대그래프 및 도넛차트를 통한 위험도 표시",
          "색상 코딩을 통한 위험 등급 구분",
          "개인별 맞춤 운동 및 식단 추천",
          "실시간 입력 상태 피드백"
        ]
      },
      {
        title: "개인 건강 관리",
        description: "사용자별 진단 이력 관리 및 지속적인 모니터링 시스템",
        icon: Heart,
        details: [
          "과거 진단 결과 히스토리 추적",
          "정기적 재진단 알림 기능",
          "개인정보 보호 및 보안 강화",
          "사용자 권한 기반 데이터 관리"
        ]
      },
      {
        title: "의료기관 연계",
        description: "지역별 병원 검색 및 PDF 리포트 생성을 통한 전문의 상담 지원",
        icon: Stethoscope,
        details: [
          "전국 의료기관 데이터베이스 구축",
          "지역/진료과별 병원 검색",
          "전문적인 PDF 진단서 자동 생성",
          "QR 코드를 통한 결과 공유"
        ]
      }
    ],

    architecture: [
      {
        layer: "프론트엔드",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Chart.js"],
        description: "반응형 웹 인터페이스 및 데이터 시각화"
      },
      {
        layer: "백엔드",
        technologies: ["Django", "Python", "Django Forms"],
        description: "웹 프레임워크 및 비즈니스 로직 처리"
      },
      {
        layer: "데이터 분석",
        technologies: ["NumPy", "FRAX Algorithm", "Logistic Regression"],
        description: "위험도 계산 및 통계적 분석"
      },
      {
        layer: "데이터베이스",
        technologies: ["SQLite", "Django ORM"],
        description: "사용자 데이터 및 진단 결과 저장"
      }
    ],

    challenges: [
      {
        problem: "복잡한 FRAX 알고리즘의 구현",
        solution: "WHO 공식 문서를 기반으로 로지스틱 회귀 모델 구현, NumPy를 활용한 수치 계산 최적화",
        result: "FRAX 기반 위험도 예측 시스템 구축"
      },
      {
        problem: "일반 사용자가 이해하기 어려운 의료용어와 복잡한 설문 과정",
        solution: "각 항목별 상세한 툴팁 제공, 단계별 설문 진행 가이드, 직관적인 라디오 버튼 UI",
        result: "사용자 친화성 향상, 접근성 개선"
      },
      {
        problem: "개인 의료정보 보안 및 개인정보 보호 문제",
        solution: "Django CSRF 보호 기능 활용, 사용자 인증 기반 데이터 접근 제어, 최소한의 정보만 수집, 사용자 권한 기반 정보 관리",
        result: "안전한 개인정보 처리 시스템 구축, 의료정보 보안 강화, 사용자 신뢰도 확보"
      },
      {
        problem: "다양한 디바이스에서의 최적화된 사용자 경험 제공",
        solution: "Bootstrap 그리드 시스템을 활용한 반응형 디자인, 모바일 터치 인터페이스 최적화, 크로스 브라우저 호환성 확보",
        result: "모든 디바이스에서 일관된 사용자 경험 제공"
      }
    ],

    contribution: {
      role: "Full-Stack Developer",
      responsibilities: [
        "FRAX 알고리즘 Python 구현 및 최적화",
        "Django 기반 웹 애플리케이션 풀스택 개발",
        "사용자 친화적 설문조사 시스템 설계",
        "Chart.js를 활용한 데이터 시각화 구현",
        "개인정보 보호 및 보안 시스템 구축",
        "반응형 웹 디자인 및 UI/UX 최적화",
        "PDF 리포트 자동 생성 시스템 개발",
        "의료기관 데이터베이스 구축 및 검색 기능",
        "커뮤니티 게시판 및 사용자 관리 시스템"
      ]
    },

    technicalHighlights: [
      {
        title: "의학적 검증성",
        details: "WHO 공인 FRAX 알고리즘 구현으로 임상적으로 검증된 위험도 예측"
      },
      {
        title: "사용자 중심 설계", 
        details: "툴팁, 진행 가이드, 직관적 UI로 의료 비전문가도 쉽게 사용 가능"
      },
      {
        title: "통합 헬스케어 플랫폼",
        details: "진단, 추천, 병원 검색, PDF 생성까지 원스톱 건강 관리 서비스"
      },
      {
        title: "확장성 있는 아키텍처",
        details: "Django 기반 모듈화 설계로 향후 기능 확장 및 모바일 앱 연동 대비"
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
                          'Python': 'bg-white text-yellow-600 border border-yellow-200 shadow-lg shadow-yellow-500/20',
                          
                          // Data Science
                          'NumPy': 'bg-white text-orange-600 border border-orange-200 shadow-lg shadow-orange-500/20',
                          
                          // Frontend
                          'Bootstrap': 'bg-white text-purple-600 border border-purple-200 shadow-lg shadow-purple-500/20',
                          'Chart.js': 'bg-white text-cyan-600 border border-cyan-200 shadow-lg shadow-cyan-500/20',
                          'HTML5': 'bg-white text-red-600 border border-red-200 shadow-lg shadow-red-500/20',
                          'CSS3': 'bg-white text-blue-600 border border-blue-200 shadow-lg shadow-blue-500/20',
                          'JavaScript': 'bg-white text-yellow-600 border border-yellow-200 shadow-lg shadow-yellow-500/20',
                          
                          // Database
                          'SQLite': 'bg-white text-blue-600 border border-blue-200 shadow-lg shadow-blue-500/20',
                          
                          // Tools
                          'xhtml2pdf': 'bg-white text-red-600 border border-red-200 shadow-lg shadow-red-500/20',
                          'QR Code': 'bg-white text-indigo-600 border border-indigo-200 shadow-lg shadow-indigo-500/20',
                          'Ajax': 'bg-white text-purple-600 border border-purple-200 shadow-lg shadow-purple-500/20'
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
                  PPT
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
                      <div class="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <div class="text-center">
                          <div class="text-blue-600 text-6xl mb-4">🦴</div>
                          <div class="text-blue-800 text-lg font-bold">Osteoporosis Risk Prediction</div>
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
                      <Brain className="w-5 h-5" />
                      기술적 혁신
                    </h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• WHO 공인 FRAX 알고리즘 구현</li>
                      <li>• NumPy 기반 수치 계산 최적화</li>
                      <li>• 반응형 웹 디자인</li>
                      <li>• Chart.js 데이터 시각화</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      헬스케어 특징
                    </h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• 예방 중심 접근법</li>
                      <li>• 개인 맞춤형 건강 관리</li>
                      <li>• 의료기관 연계 서비스</li>
                      <li>• 지속적 모니터링 시스템</li>
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
                
                {/* FRAX 알고리즘 플로우 */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">FRAX 알고리즘 프로세스</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                        <span><strong>1. 데이터 수집</strong> → 12개 위험 요소 설문조사</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                        <span><strong>2. BMI 계산</strong> → 신장/체중 기반 자동 계산</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span><strong>3. FRAX 적용</strong> → 로지스틱 회귀 모델 실행</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        <span><strong>4. 위험도 계산</strong> → 주요골절/고관절 위험도</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span><strong>5. 결과 제공</strong> → 시각화 및 맞춤 추천</span>
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
                  <h3 className="text-lg font-bold text-gray-900 mb-4">주요 개발 담당 영역</h3>
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
                      <Users2 className="w-5 h-5" />
                      Q&A 게시판 개발
                    </h4>
                    <ul className="text-blue-800 space-y-2 text-sm">
                      <li>• Django 기반 CRUD 기능 구현</li>
                      <li>• 문의사항 작성, 수정, 삭제 시스템</li>
                      <li>• 관리자 답변 및 상태 관리 기능</li>
                      <li>• 사용자별 문의 내역 조회</li>
                      <li>• 검색 및 카테고리 필터링</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                      <Monitor className="w-5 h-5" />
                      광고 모달 시스템
                    </h4>
                    <ul className="text-green-800 space-y-2 text-sm">
                      <li>• JavaScript 기반 모달 팝업 구현</li>
                      <li>• 쿠키를 활용한 팝업 제어</li>
                      <li>• 사용자 경험을 고려한 타이밍 설정</li>
                      <li>• 반응형 모달 디자인</li>
                      <li>• 광고 효과 측정을 위한 클릭 트래킹</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      예측 모델링
                    </h4>
                    <ul className="text-orange-800 space-y-2 text-sm">
                      <li>• FRAX 알고리즘 Python 구현</li>
                      <li>• NumPy 기반 수치 계산 로직</li>
                      <li>• 위험도 분류 및 예측 모델 구축</li>
                      <li>• BMI 계산 및 위험 요소 가중치 적용</li>
                      <li>• 모델 검증 및 정확도 테스트</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      데이터 시각화
                    </h4>
                    <ul className="text-purple-800 space-y-2 text-sm">
                      <li>• Chart.js를 활용한 결과 시각화</li>
                      <li>• 막대그래프 및 도넛차트 구현</li>
                      <li>• 위험도별 색상 코딩 시스템</li>
                      <li>• 동적 차트 업데이트 기능</li>
                      <li>• 사용자 친화적 결과 표현</li>
                    </ul>
                  </div>
                </div>

                {/* 프로젝트 성과 지표 */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">6명</div>
                    <div className="text-sm text-purple-800">팀 프로젝트</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">Q&A</div>
                    <div className="text-sm text-green-800">게시판 CRUD</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">FRAX</div>
                    <div className="text-sm text-blue-800">예측 모델링</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">5일</div>
                    <div className="text-sm text-orange-800">개발 기간</div>
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

      {/* PPT 모달 */}
      {showPPT && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-bold">Osteoporosis 프로젝트 발표자료</h3>
              <button
                onClick={closePPT}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4 h-[80vh]">
              <iframe
                src="/files/osteoporosis-presentation.pdf"
                className="w-full h-full border-0"
                title="Osteoporosis 프로젝트 PPT"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage2;
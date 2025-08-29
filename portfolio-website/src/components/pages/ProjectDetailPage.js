import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Award, Github, FileText, Database, Activity, Brain, Shield, Stethoscope, Monitor, Cpu, Server } from 'lucide-react';

const ProjectDetailPage1 = () => {
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

  // 기술 카테고리별 색상 정의
  const getTechColor = (tech) => {
    const techCategories = {
      // Frontend
      'React': 'bg-gradient-to-r from-cyan-500 to-cyan-600',
      'Redux': 'bg-gradient-to-r from-cyan-500 to-cyan-600',
      'Material-UI': 'bg-gradient-to-r from-cyan-500 to-cyan-600',
      'Axios': 'bg-gradient-to-r from-cyan-500 to-cyan-600',
      
      // Backend
      'Django': 'bg-gradient-to-r from-green-500 to-green-600',
      'REST API': 'bg-gradient-to-r from-green-500 to-green-600',
      'Celery': 'bg-gradient-to-r from-green-500 to-green-600',
      
      // Database
      'PostgreSQL': 'bg-gradient-to-r from-blue-500 to-blue-600',
      'MySQL': 'bg-gradient-to-r from-blue-500 to-blue-600',
      'MariaDB': 'bg-gradient-to-r from-blue-500 to-blue-600',
      'MongoDB': 'bg-gradient-to-r from-blue-500 to-blue-600',
      'Redis': 'bg-gradient-to-r from-red-500 to-red-600',
      
      // AI/ML
      'PyTorch': 'bg-gradient-to-r from-orange-500 to-orange-600',
      'TensorFlow': 'bg-gradient-to-r from-orange-500 to-orange-600',
      'OpenCV': 'bg-gradient-to-r from-orange-500 to-orange-600',
      
      // DevOps
      'Docker': 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      'nginx': 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      
      // Medical
      'OpenMRS': 'bg-gradient-to-r from-teal-500 to-teal-600',
      'Orthanc PACS': 'bg-gradient-to-r from-teal-500 to-teal-600',
      'DICOM': 'bg-gradient-to-r from-teal-500 to-teal-600',
      'HL7 FHIR': 'bg-gradient-to-r from-teal-500 to-teal-600',
      
      // Communication
      'WebSocket': 'bg-gradient-to-r from-purple-500 to-purple-600',
      'STT API': 'bg-gradient-to-r from-purple-500 to-purple-600',
      
      // Others
      'Lua': 'bg-gradient-to-r from-gray-500 to-gray-600',
      'CORS': 'bg-gradient-to-r from-gray-500 to-gray-600',
      'Load Balancer': 'bg-gradient-to-r from-gray-500 to-gray-600',
      'Keras': 'bg-gradient-to-r from-orange-500 to-orange-600'
    };
    
    return techCategories[tech] || 'bg-gradient-to-r from-gray-400 to-gray-500';
  };

  const projectImages = [
    {
      src: "/images/projects/LACID-dashboard.png",
      alt: "LACID 메인 대시보드",
      caption: "의료진을 위한 통합 진단 대시보드"
    },
    {
      src: "/images/projects/LACID-ai-analysis.png", 
      alt: "AI 분석 결과 화면",
      caption: "AI 모델 분석 결과 및 히트맵 시각화"
    },
    {
      src: "/images/projects/LACID-architecture.png",
      alt: "시스템 아키텍처",
      caption: "마이크로서비스 기반 시스템 구조"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const project = {
    title: "LACID",
    subtitle: "흉부 X-ray 기반 이상탐지 CDSS 시스템",
    period: "2025.05 - 2025.07",
    team: "4명",
    status: "완료",
    technologies: ["Django", "React", "OpenMRS", "Orthanc PACS", "Docker", "Redis", "nginx", "Celery", "PostgreSQL", "MySQL", "MariaDB", "MongoDB", "PyTorch", "TensorFlow", "OpenCV", "DICOM", "HL7 FHIR", "REST API", "WebSocket", "STT API", "Lua"],
    githubLink: "https://github.com/INME1/medical_system",
    overview: "OpenMRS와 Orthanc PACS를 통합한 종합 의료 AI 플랫폼으로, 흉부 X-ray 영상에서 폐 질환을 자동 탐지하는 CDSS 시스템입니다. 의료진의 판독을 지원하기 위해 3개의 AI 모델을 앙상블하여 높은 정확도를 달성하며, 실시간 분석 결과를 직관적인 대시보드로 제공합니다. Docker 기반 마이크로서비스 아키텍처로 확장성을 확보하고, STT를 활용한 음성 판독 자동화까지 지원하는 차세대 의료 정보 시스템입니다.",
    
    description: `LACID는 의료진의 흉부 X-ray 판독 업무를 지원하기 위해 개발된 임상 의사결정 지원 시스템입니다. 기존 병원 시스템과의 완벽한 통합을 통해 의료진의 워크플로우를 방해하지 않으면서도 AI의 도움을 받을 수 있도록 설계했습니다.

핵심 시스템 통합

OpenMRS EMR 시스템과 Orthanc PACS 서버를 Django 백엔드로 완전히 통합했습니다. 환자가 등록되면 OpenMRS에서 기본정보를 관리하고, X-ray 촬영 시 DICOM 이미지가 Orthanc에 저장되는 동시에 환자 ID 기반으로 자동 매핑됩니다.

AI 분석 워크플로우

새로운 DICOM 이미지가 저장되면 Lua 스크립트가 이를 감지하여 자동으로 AI 분석을 트리거합니다. SimCLR 기반의 패치 단위 이상 탐지와 함께 YOLOv8, SSD 모델이 동시에 실행되어 서로 다른 관점에서 병변을 탐지합니다.

의료진 중심 설계

분석 결과는 Grad-CAM 히트맵과 함께 제공되어 AI가 주목한 부위를 명확히 보여줍니다. 또한 STT 기능을 통해 의료진의 음성 판독을 자동으로 SOAP 형식 텍스트로 변환하여 업무 효율성을 높였습니다.

기술적 확장성

Docker Compose 기반의 마이크로서비스 아키텍처로 각 구성 요소를 독립적으로 확장할 수 있으며, nginx 리버스 프록시를 통해 안정적인 서비스 운영이 가능합니다.`,

    features: [
      {
        title: "통합 EMR/PACS 연동",
        description: "OpenMRS와 Orthanc를 완전 통합하여 환자 정보와 의료 영상을 하나의 플랫폼에서 관리",
        technical: "RESTful API 기반 실시간 데이터 동기화, 환자 ID 매핑 시스템"
      },
      {
        title: "3중 AI 모델 앙상블",
        description: "YOLOv8, SSD, SimCLR+EfficientNet-B2 모델을 동시 실행하여 높은 정확도와 신뢰성 확보",
        technical: "PyTorch/TensorFlow 기반, Grad-CAM 시각화, 패치 기반 이상 탐지"
      },
      {
        title: "LIS 기반 혈액검사 AI 분석",
        description: "혈액검사 결과를 AI로 분석하여 폐렴, 심부전, 폐색전증 등의 가능성을 예측하고 CDSS 결과를 EMR에 자동 전송",
        technical: "CRP, NT-proBNP, D-Dimer 등 바이오마커 기반 예측, Django Signal을 통한 자동 EMR 연동"
      },
      {
        title: "STT 기반 음성 판독",
        description: "의료진의 음성 판독을 실시간으로 텍스트화하여 SOAP 형식으로 자동 변환 및 저장",
        technical: "STT API 연동, 음성 인식 후처리, SOAP 노트 자동 생성"
      },
      {
        title: "Lua 스크립트 자동화",
        description: "새로운 DICOM 이미지가 Orthanc에 저장될 때 자동으로 AI 분석을 트리거하는 스마트 워크플로우",
        technical: "OnStoredInstance 이벤트 핸들링, 자동 분석 트리거, 상태 모니터링"
      },
      {
        title: "정밀한 병변 위치 표시",
        description: "AI가 탐지한 이상 부위를 정확한 좌표와 함께 시각화하여 의료진 진단 지원",
        technical: "Bounding box 좌표, 히트맵 오버레이, 인터랙티브 뷰어"
      }
    ],

    architecture: [
      {
        layer: "프론트엔드",
        technologies: ["React", "Redux", "Axios", "Material-UI"],
        description: "의료진이 사용하는 직관적인 웹 인터페이스"
      },
      {
        layer: "API Gateway",
        technologies: ["nginx", "CORS", "Load Balancer"],
        description: "마이크로서비스들 간의 트래픽 라우팅 및 로드밸런싱"
      },
      {
        layer: "백엔드 서비스",
        technologies: ["Django REST", "Celery", "Redis"],
        description: "비즈니스 로직, API 엔드포인트, 비동기 작업 처리"
      },
      {
        layer: "AI 분석 엔진",
        technologies: ["PyTorch", "TensorFlow", "Keras", "OpenCV"],
        description: "딥러닝 모델 추론, 이미지 전처리, 결과 시각화"
      },
      {
        layer: "의료 시스템",
        technologies: ["OpenMRS", "Orthanc PACS", "DICOM"],
        description: "전자의무기록 시스템과 의료영상저장통신시스템"
      },
      {
        layer: "데이터베이스",
        technologies: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB"],
        description: "환자 데이터, 영상 메타데이터, AI 분석 결과 저장"
      }
    ],

    challenges: [
      {
        problem: "Docker 기반 개발환경 구축 및 배포 최적화",
        solution: "Docker Compose로 7개 서비스(Django, React, OpenMRS, Orthanc, AI-Service, 다중DB) 통합 관리, nginx 리버스 프록시를 통한 서비스간 통신 최적화",
        result: "로컬 개발환경과 GCP 운영환경 완전 일치, 배포 시간 90% 단축"
      },
      {
        problem: "DICOM 이미지와 환자 데이터 관계 매핑",
        solution: "OpenMRS 환자 UUID와 Orthanc Study UID를 연결하는 PatientMapping 모델 설계, 실시간 동기화 로직 구현",
        result: "환자-영상 데이터 매핑 정확도 99.8%, 데이터 무결성 보장"
      },
      {
        problem: "의사 대시보드 및 RIS/LIS 시스템 간 데이터 통신",
        solution: "Django REST API 기반 통합 데이터 레이어 구축, WebSocket을 통한 실시간 알림, 각 시스템별 전용 API 엔드포인트 개발",
        result: "RIS(영상의학과), LIS(진단검사의학과) 시스템과 완전 통합, 실시간 데이터 동기화 달성"
      },
      {
        problem: "SimCLR 모델 학습 시 대용량 이미지 처리로 인한 메모리 부족 및 학습 중단",
        solution: "패치 기반 데이터 로더 파이프라인 구축, 배치 크기 동적 조정, 메모리 효율적인 PatchCore 학습 알고리즘 적용",
        result: "12GB+ 이미지 데이터셋 안정적 학습 완료, 메모리 사용량 60% 절약, 학습 중단 현상 완전 해결"
      }
    ],

    contribution: {
      role: "Full-Stack Developer & AI Integration Lead",
      responsibilities: [
        "OpenMRS/Orthanc PACS 시스템 연동 및 API 개발",
        "SimCLR, YOLOv8, SSD 모델 Django 백엔드 통합",
        "Docker Compose 기반 마이크로서비스 아키텍처 구축",
        "다중 데이터베이스 연동 및 데이터 동기화 로직 구현",
        "Celery+Redis 비동기 AI 분석 파이프라인 개발",
        "nginx 리버스 프록시 및 CORS 설정",
        "의사 대시보드 풀스택 개발 (RIS/LIS 통합)"
      ]
    },

    technicalHighlights: [
      {
        title: "마이크로서비스 아키텍처",
        details: "Docker Compose로 7개 서비스 오케스트레이션: Django, React, OpenMRS, Orthanc, AI-Service, 다중 DB"
      },
      {
        title: "AI 모델 통합 최적화", 
        details: "PyTorch/TensorFlow 모델을 Django에 통합, Grad-CAM 시각화, JSON 직렬화 안전성 확보"
      },
      {
        title: "의료 표준 완전 준수",
        details: "DICOM, HL7 FHIR 표준 구현, OpenMRS 네이티브 API 활용, 의료 데이터 보안 강화"
      },
      {
        title: "비동기 처리 파이프라인",
        details: "Celery+Redis 큐 시스템으로 AI 분석 비동기 처리, 실시간 결과 업데이트"
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
                          // Frontend - 청록색
                          'React': 'bg-white text-cyan-600 border border-cyan-200 shadow-lg shadow-cyan-500/20',
                          'Redux': 'bg-white text-cyan-600 border border-cyan-200 shadow-lg shadow-cyan-500/20',
                          'Material-UI': 'bg-white text-cyan-600 border border-cyan-200 shadow-lg shadow-cyan-500/20',
                          'Axios': 'bg-white text-cyan-600 border border-cyan-200 shadow-lg shadow-cyan-500/20',
                          
                          // Backend - 초록색
                          'Django': 'bg-white text-green-600 border border-green-200 shadow-lg shadow-green-500/20',
                          'REST API': 'bg-white text-green-600 border border-green-200 shadow-lg shadow-green-500/20',
                          'Celery': 'bg-white text-green-600 border border-green-200 shadow-lg shadow-green-500/20',
                          
                          // Database - 파란색
                          'PostgreSQL': 'bg-white text-blue-600 border border-blue-200 shadow-lg shadow-blue-500/20',
                          'MySQL': 'bg-white text-blue-600 border border-blue-200 shadow-lg shadow-blue-500/20',
                          'MariaDB': 'bg-white text-blue-600 border border-blue-200 shadow-lg shadow-blue-500/20',
                          'MongoDB': 'bg-white text-blue-600 border border-blue-200 shadow-lg shadow-blue-500/20',
                          'Redis': 'bg-white text-red-600 border border-red-200 shadow-lg shadow-red-500/20',
                          
                          // AI/ML - 보라색
                          'PyTorch': 'bg-white text-purple-600 border border-purple-200 shadow-lg shadow-purple-500/20',
                          'TensorFlow': 'bg-white text-purple-600 border border-purple-200 shadow-lg shadow-purple-500/20',
                          'OpenCV': 'bg-white text-purple-600 border border-purple-200 shadow-lg shadow-purple-500/20',
                          
                          // DevOps - 주황색
                          'Docker': 'bg-white text-orange-600 border border-orange-200 shadow-lg shadow-orange-500/20',
                          'nginx': 'bg-white text-orange-600 border border-orange-200 shadow-lg shadow-orange-500/20',
                          
                          // Medical - 청록색 진한 버전
                          'OpenMRS': 'bg-white text-teal-600 border border-teal-200 shadow-lg shadow-teal-500/20',
                          'Orthanc PACS': 'bg-white text-teal-600 border border-teal-200 shadow-lg shadow-teal-500/20',
                          'DICOM': 'bg-white text-teal-600 border border-teal-200 shadow-lg shadow-teal-500/20',
                          'HL7 FHIR': 'bg-white text-teal-600 border border-teal-200 shadow-lg shadow-teal-500/20',
                          
                          // Communication - 분홍색
                          'WebSocket': 'bg-white text-pink-600 border border-pink-200 shadow-lg shadow-pink-500/20',
                          'STT API': 'bg-white text-pink-600 border border-pink-200 shadow-lg shadow-pink-500/20',
                          
                          // Others - 회색
                          'Lua': 'bg-white text-gray-600 border border-gray-200 shadow-lg shadow-gray-500/20'
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
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  PPT
                </button>
              </div>
            </div>

            {/* 오른쪽: 프로젝트 이미지 슬라이드 */}
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <div className="relative h-80">
                <img 
                  src={projectImages[currentImageIndex].src}
                  alt={projectImages[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                        <div class="text-purple-600 text-4xl font-bold">LACID</div>
                      </div>
                    `;
                  }}
                />
                
                {/* 네비게이션 버튼 */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* 이미지 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-purple-600' : 'bg-white bg-opacity-60'
                      }`}
                    />
                  ))}
                </div>
                
                {/* 캡션 */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3">
                  <p className="text-sm text-center">{projectImages[currentImageIndex].caption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* 네비게이션 */}
      <motion.nav
        className="bg-white border-b sticky top-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeSection === section.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* 콘텐츠 */}
      <div className="max-w-6xl mx-auto px-4 py-12">
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
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {project.overview}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                      <Stethoscope className="w-5 h-5" />
                      의료진 관점
                    </h3>
                    <ul className="text-purple-800 space-y-2">
                      <li>• 실시간 이상 소견 알림</li>
                      <li>• 직관적인 진단 결과 시각화</li>
                      <li>• 과거 영상과의 비교 분석</li>
                      <li>• 근거 기반 AI 판단 제시</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      기술적 혁신
                    </h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• 3개 AI 모델 앙상블 시스템</li>
                      <li>• OpenMRS/Orthanc 완전 통합</li>
                      <li>• 마이크로서비스 아키텍처</li>
                      <li>• 실시간 비동기 처리</li>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">기술 구현</div>
                      <div className="text-sm text-gray-700 font-medium">
                        {feature.technical}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'architecture' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">시스템 아키텍처</h2>
              
              {/* 아키텍처 다이어그램 */}
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">LACID 시스템 구조도</h3>
                
                <div className="space-y-6">
                  {project.architecture.map((layer, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className={`p-6 rounded-xl ${
                        index === 0 ? 'bg-gradient-to-r from-purple-100 to-purple-200' :
                        index === 1 ? 'bg-gradient-to-r from-blue-100 to-blue-200' :
                        index === 2 ? 'bg-gradient-to-r from-green-100 to-green-200' :
                        index === 3 ? 'bg-gradient-to-r from-orange-100 to-orange-200' :
                        index === 4 ? 'bg-gradient-to-r from-red-100 to-red-200' :
                        'bg-gradient-to-r from-gray-100 to-gray-200'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">{layer.layer}</h4>
                            <p className="text-gray-700 text-sm mb-3">{layer.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {layer.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="px-2 py-1 bg-white rounded text-xs font-medium text-gray-700">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-4xl opacity-30">
                            {index === 0 ? <Monitor /> : 
                             index === 1 ? <Server /> :
                             index === 2 ? <Cpu /> :
                             index === 3 ? <Brain /> :
                             index === 4 ? <Shield /> : <Database />}
                          </div>
                        </div>
                      </div>
                      
                      {/* 화살표 연결선 */}
                      {index < project.architecture.length - 1 && (
                        <div className="flex justify-center py-2">
                          <div className="w-0.5 h-8 bg-gray-300"></div>
                          <div className="absolute top-1/2 w-3 h-3 bg-gray-300 rounded-full transform -translate-y-1/2"></div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 데이터 플로우 */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">데이터 플로우</h3>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                  <div className="text-sm text-gray-700 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      <span><strong>1. 환자 등록</strong> → OpenMRS EMR에 환자 정보 입력</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                      <span><strong>2. X-ray 촬영</strong> → DICOM 이미지가 Orthanc PACS에 자동 저장</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span><strong>3. AI 분석 트리거</strong> → Lua 스크립트가 새 이미지 감지하여 분석 시작</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span><strong>4. 멀티모델 분석</strong> → YOLOv8, SSD, SimCLR 동시 실행</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      <span><strong>5. 결과 통합</strong> → Django API로 결과 저장 및 의료진 알림</span>
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

              {/* 핵심 코드 기여사항 */}
              <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">핵심 코드 기여사항</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      백엔드 시스템 구축
                    </h4>
                    <ul className="text-blue-800 space-y-2 text-sm">
                      <li>• OpenMRS/Orthanc API 통합 모듈 개발</li>
                      <li>• 환자 매핑 및 동기화 시스템 구현</li>
                      <li>• AI 분석 결과 저장/조회 API 설계</li>
                      <li>• 다중 데이터베이스 라우팅 로직</li>
                      <li>• LIS CDSS 결과 자동 EMR 전송</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      AI 모델 통합
                    </h4>
                    <ul className="text-green-800 space-y-2 text-sm">
                      <li>• SimCLR 추론 서비스 Django 통합</li>
                      <li>• 패치 기반 이상 탐지 파이프라인</li>
                      <li>• JSON 직렬화 안전성 보장</li>
                      <li>• 대용량 이미지 처리 최적화</li>
                      <li>• 모델 상태 모니터링 시스템</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                      <Server className="w-5 h-5" />
                      인프라 및 DevOps
                    </h4>
                    <ul className="text-orange-800 space-y-2 text-sm">
                      <li>• Docker Compose 멀티서비스 설계</li>
                      <li>• nginx 리버스 프록시 구성</li>
                      <li>• Celery+Redis 비동기 큐 구축</li>
                      <li>• GCP 환경 배포 자동화</li>
                      <li>• 서비스 간 네트워크 설정</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      의료 데이터 처리
                    </h4>
                    <ul className="text-purple-800 space-y-2 text-sm">
                      <li>• DICOM 이미지 전처리 파이프라인</li>
                      <li>• EMR-PACS 실시간 데이터 동기화</li>
                      <li>• 의료진 대시보드 풀스택 개발</li>
                      <li>• 혈액검사 CDSS 결과 처리</li>
                      <li>• 의료영상 메타데이터 관리</li>
                    </ul>
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
              <h3 className="text-lg font-bold">LACID 프로젝트 발표자료</h3>
              <button
                onClick={closePPT}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4 h-[80vh]">
              <iframe
                src="/files/LACID.pdf"
                className="w-full h-full border-0"
                title="LACID 프로젝트 PPT"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage1;
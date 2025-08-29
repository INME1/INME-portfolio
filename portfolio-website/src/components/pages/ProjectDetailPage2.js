import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Award, Github, FileText, Database, Activity, Brain, Shield, Stethoscope, Monitor, Cpu, Server } from 'lucide-react';

const ProjectDetailPageTemplate = () => {
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
      src: "/images/projects/placeholder-1.png",
      alt: "프로젝트 메인 화면",
      caption: "프로젝트 메인 대시보드"
    },
    {
      src: "/images/projects/placeholder-2.png", 
      alt: "기능 구현 화면",
      caption: "핵심 기능 구현 결과"
    },
    {
      src: "/images/projects/placeholder-3.png",
      alt: "시스템 아키텍처",
      caption: "전체 시스템 구조"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  // 프로젝트 데이터 - 템플릿용으로 내용 비움
  const project = {
    title: "프로젝트 제목",
    subtitle: "프로젝트 부제목 또는 한줄 설명",
    period: "YYYY.MM - YYYY.MM",
    team: "N명",
    status: "진행중/완료",
    technologies: [
      // 여기에 사용한 기술들을 나열하세요
      "Django", "React", "PostgreSQL", "Docker", "PyTorch"
    ],
    githubLink: "https://github.com/username/project-name",
    overview: "프로젝트 개요를 여기에 작성하세요. 프로젝트의 목적, 주요 기능, 기술적 특징을 간략하게 설명합니다.",
    
    description: `프로젝트의 상세한 설명을 여기에 작성하세요.

여러 단락으로 나누어서 작성할 수 있습니다.

프로젝트의 배경, 목표, 구현 과정, 결과 등을 상세히 설명하세요.`,

    features: [
      {
        title: "핵심 기능 1",
        description: "첫 번째 핵심 기능에 대한 설명을 작성하세요.",
        technical: "사용된 기술과 구현 방법을 설명"
      },
      {
        title: "핵심 기능 2",
        description: "두 번째 핵심 기능에 대한 설명을 작성하세요.",
        technical: "사용된 기술과 구현 방법을 설명"
      },
      {
        title: "핵심 기능 3",
        description: "세 번째 핵심 기능에 대한 설명을 작성하세요.",
        technical: "사용된 기술과 구현 방법을 설명"
      },
      {
        title: "핵심 기능 4",
        description: "네 번째 핵심 기능에 대한 설명을 작성하세요.",
        technical: "사용된 기술과 구현 방법을 설명"
      }
    ],

    architecture: [
      {
        layer: "프론트엔드",
        technologies: ["React", "TypeScript"],
        description: "사용자 인터페이스 계층"
      },
      {
        layer: "백엔드",
        technologies: ["Django", "REST API"],
        description: "비즈니스 로직 및 API 계층"
      },
      {
        layer: "데이터베이스",
        technologies: ["PostgreSQL", "Redis"],
        description: "데이터 저장 및 캐싱 계층"
      }
    ],

    challenges: [
      {
        problem: "해결한 기술적 문제 1",
        solution: "문제 해결을 위해 적용한 방법",
        result: "해결 결과 및 성과"
      },
      {
        problem: "해결한 기술적 문제 2", 
        solution: "문제 해결을 위해 적용한 방법",
        result: "해결 결과 및 성과"
      }
    ],

    contribution: {
      role: "본인의 역할 (예: Full-Stack Developer)",
      responsibilities: [
        "담당한 주요 업무 1",
        "담당한 주요 업무 2", 
        "담당한 주요 업무 3",
        "담당한 주요 업무 4"
      ]
    },

    technicalHighlights: [
      {
        title: "기술적 특징 1",
        details: "특징에 대한 간단한 설명"
      },
      {
        title: "기술적 특징 2", 
        details: "특징에 대한 간단한 설명"
      },
      {
        title: "기술적 특징 3",
        details: "특징에 대한 간단한 설명"
      },
      {
        title: "기술적 특징 4",
        details: "특징에 대한 간단한 설명"
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

              {/* 기술 스택 - 어두운 배경 글로우 스타일 */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-4">사용 기술</h3>
                <div className="bg-slate-900 p-6 rounded-2xl">
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => {
                      const getGlowStyle = (tech) => {
                        const techStyles = {
                          // Frontend - 청록색
                          'React': 'bg-white text-cyan-600 border border-cyan-200 shadow-lg shadow-cyan-500/20',
                          'Vue': 'bg-white text-cyan-600 border border-cyan-200 shadow-lg shadow-cyan-500/20',
                          'Angular': 'bg-white text-cyan-600 border border-cyan-200 shadow-lg shadow-cyan-500/20',
                          'TypeScript': 'bg-white text-cyan-600 border border-cyan-200 shadow-lg shadow-cyan-500/20',
                          'JavaScript': 'bg-white text-cyan-600 border border-cyan-200 shadow-lg shadow-cyan-500/20',
                          
                          // Backend - 초록색
                          'Django': 'bg-white text-green-600 border border-green-200 shadow-lg shadow-green-500/20',
                          'FastAPI': 'bg-white text-green-600 border border-green-200 shadow-lg shadow-green-500/20',
                          'Spring Boot': 'bg-white text-green-600 border border-green-200 shadow-lg shadow-green-500/20',
                          'Node.js': 'bg-white text-green-600 border border-green-200 shadow-lg shadow-green-500/20',
                          'Express': 'bg-white text-green-600 border border-green-200 shadow-lg shadow-green-500/20',
                          'Flask': 'bg-white text-green-600 border border-green-200 shadow-lg shadow-green-500/20',
                          
                          // Database - 파란색
                          'PostgreSQL': 'bg-white text-blue-600 border border-blue-200 shadow-lg shadow-blue-500/20',
                          'MySQL': 'bg-white text-blue-600 border border-blue-200 shadow-lg shadow-blue-500/20',
                          'MongoDB': 'bg-white text-blue-600 border border-blue-200 shadow-lg shadow-blue-500/20',
                          'SQLite': 'bg-white text-blue-600 border border-blue-200 shadow-lg shadow-blue-500/20',
                          'Redis': 'bg-white text-red-600 border border-red-200 shadow-lg shadow-red-500/20',
                          
                          // AI/ML - 보라색
                          'PyTorch': 'bg-white text-purple-600 border border-purple-200 shadow-lg shadow-purple-500/20',
                          'TensorFlow': 'bg-white text-purple-600 border border-purple-200 shadow-lg shadow-purple-500/20',
                          'OpenCV': 'bg-white text-purple-600 border border-purple-200 shadow-lg shadow-purple-500/20',
                          'Scikit-learn': 'bg-white text-purple-600 border border-purple-200 shadow-lg shadow-purple-500/20',
                          'Pandas': 'bg-white text-purple-600 border border-purple-200 shadow-lg shadow-purple-500/20',
                          
                          // DevOps - 주황색
                          'Docker': 'bg-white text-orange-600 border border-orange-200 shadow-lg shadow-orange-500/20',
                          'Kubernetes': 'bg-white text-orange-600 border border-orange-200 shadow-lg shadow-orange-500/20',
                          'AWS': 'bg-white text-orange-600 border border-orange-200 shadow-lg shadow-orange-500/20',
                          'nginx': 'bg-white text-orange-600 border border-orange-200 shadow-lg shadow-orange-500/20',
                          
                          // Medical - 청록색 진한 버전
                          'OpenMRS': 'bg-white text-teal-600 border border-teal-200 shadow-lg shadow-teal-500/20',
                          'DICOM': 'bg-white text-teal-600 border border-teal-200 shadow-lg shadow-teal-500/20',
                          'HL7 FHIR': 'bg-white text-teal-600 border border-teal-200 shadow-lg shadow-teal-500/20'
                        };
                        
                        return techStyles[tech] || 'bg-white text-gray-600 border border-gray-200 shadow-lg shadow-gray-500/20';
                      };

                      return (
                        <span 
                          key={index}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 hover:brightness-110 ${getGlowStyle(tech)}`}
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
                        <div class="text-purple-600 text-4xl font-bold">PROJECT</div>
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
                      주요 특징
                    </h3>
                    <ul className="text-purple-800 space-y-2">
                      <li>• 특징 1</li>
                      <li>• 특징 2</li>
                      <li>• 특징 3</li>
                      <li>• 특징 4</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      기술적 혁신
                    </h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• 혁신 요소 1</li>
                      <li>• 혁신 요소 2</li>
                      <li>• 혁신 요소 3</li>
                      <li>• 혁신 요소 4</li>
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
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">시스템 구조도</h3>
                
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
              <h3 className="text-lg font-bold">프로젝트 발표자료</h3>
              <button
                onClick={closePPT}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4 h-[80vh]">
              <iframe
                src="/files/presentation.pdf"
                className="w-full h-full border-0"
                title="프로젝트 PPT"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPageTemplate;

/*
📋 사용법:
1. project 객체의 내용을 실제 프로젝트 정보로 변경
2. technologies 배열에 사용한 기술 추가 (자동으로 카테고리별 색상 적용)
3. projectImages 배열에 실제 이미지 경로 설정
4. 각 섹션의 내용을 프로젝트에 맞게 수정

🎨 기술 카테고리별 색상:
- Frontend (청록): React, Vue, Angular, TypeScript, JavaScript 등
- Backend (초록): Django, FastAPI, Node.js, Spring Boot, Flask 등  
- Database (파랑): PostgreSQL, MySQL, MongoDB, SQLite 등
- AI/ML (보라): PyTorch, TensorFlow, OpenCV, Scikit-learn 등
- DevOps (주황): Docker, AWS, Kubernetes, nginx 등
- Medical (청록 진한): OpenMRS, DICOM, HL7 FHIR 등

💡 새로운 기술 추가 시 getGlowStyle 함수에 해당 기술과 색상을 추가하면 자동 적용됩니다.
*/
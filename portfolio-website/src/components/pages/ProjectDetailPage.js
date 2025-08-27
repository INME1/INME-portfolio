import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Award, Github, FileText, ExternalLink } from 'lucide-react';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');

  // 프로젝트 데이터 (실제로는 API에서 가져올 수 있음)
  const projects = {
    1: {
      title: "LACID",
      subtitle: "흉부 X-ray 기반 이상탐지 CDSS 시스템",
      image: "/images/projects/LACID.png",
      period: "2024.03 - 2024.11",
      team: "4명",
      status: "완료",
      technologies: ["Django", "React", "OpenMRS", "Orthanc", "MySQL", "Docker", "Redis", "nginx", "Celery", "Python", "Keras", "Pytorch", "PostgreSQL"],
      githubLink: "https://github.com/INME1/medical_system",
      presentationLink: "/files/lacid-presentation.pdf",
      demoLink: null,
      overview: "의료진의 진단 정확도 향상을 위한 AI 기반 흉부 X-ray 이상 탐지 시스템입니다. OpenMRS와 Orthanc PACS 서버를 통합하여 의료 데이터를 효율적으로 관리하고, 딥러닝 모델을 활용해 실시간으로 이상 소견을 탐지합니다.",
      description: "LACID(Lung Abnormality Clinical Intelligence Dashboard)는 의료 현장에서 흉부 X-ray 영상 판독의 정확성과 효율성을 높이기 위해 개발된 임상 의사결정 지원 시스템(CDSS)입니다.\n\n시스템은 크게 세 가지 핵심 구성요소로 이루어져 있습니다:\n\n1. **데이터 관리 시스템**: OpenMRS를 기반으로 한 환자 정보 관리와 Orthanc PACS 서버를 통한 의료 영상 저장 및 검색\n2. **AI 분석 엔진**: CNN 기반의 딥러닝 모델을 활용한 흉부 X-ray 이상 소견 자동 탐지\n3. **웹 인터페이스**: React 기반의 직관적인 사용자 인터페이스를 통한 진단 결과 시각화",
      features: [
        "실시간 흉부 X-ray 이상 탐지",
        "OpenMRS 기반 환자 정보 관리",
        "Orthanc PACS 서버 연동",
        "AI 모델 성능 모니터링",
        "진단 결과 시각화 대시보드",
        "의료진 권한별 접근 제어"
      ],
      challenges: [
        {
          title: "의료 데이터 표준화 문제",
          problem: "다양한 병원에서 사용하는 DICOM 형식과 메타데이터 구조가 상이하여 데이터 통합에 어려움이 있었습니다.",
          solution: "DICOM 표준을 준수하면서도 유연한 데이터 파싱 로직을 구현하고, Orthanc의 Lua 스크립트를 활용하여 데이터 전처리를 자동화했습니다.",
          result: "95% 이상의 DICOM 파일을 성공적으로 처리할 수 있게 되었으며, 데이터 품질이 크게 향상되었습니다."
        },
        {
          title: "AI 모델의 실시간 처리 성능 최적화",
          problem: "고해상도 의료 영상에 대한 AI 추론 시간이 길어 실제 임상 환경에서 사용하기 어려웠습니다.",
          solution: "모델 양자화와 TensorRT 최적화를 적용하고, Redis를 활용한 결과 캐싱 시스템을 구축했습니다.",
          result: "추론 시간을 평균 5초에서 1.2초로 단축시켜 실시간 진단이 가능해졌습니다."
        }
      ],
      contribution: {
        overall: "85%",
        achievements: [
          { metric: "백엔드 개발", value: "90%" },
          { metric: "AI 모델 통합", value: "80%" },
          { metric: "시스템 아키텍처", value: "85%" }
        ],
        responsibilities: [
          "Django 기반 백엔드 API 설계 및 구현",
          "OpenMRS와 Orthanc PACS 서버 연동",
          "AI 모델 서빙 시스템 구축",
          "Docker 컨테이너 기반 배포 환경 구성",
          "Redis 캐시 시스템 설계"
        ]
      }
    },
    2: {
      title: "E-Commerce Application",
      subtitle: "Full-featured e-commerce store with multi role user authentication functionality",
      image: "/images/projects/ecommerce.jpg",
      period: "2023.09 - 2023.12",
      team: "3명",
      status: "완료",
      technologies: ["Django REST", "Python", "PostgreSQL"],
      githubLink: "https://github.com/your-username/ecommerce",
      presentationLink: "/files/ecommerce-presentation.pdf",
      demoLink: "https://ecommerce-demo.example.com",
      overview: "다양한 사용자 역할을 지원하는 완전한 기능의 전자상거래 플랫폼입니다. 관리자, 판매자, 구매자 권한을 구분하여 각각에 맞는 기능을 제공하며, 안전한 결제 시스템과 재고 관리 시스템을 포함합니다.",
      description: "현대적인 전자상거래 플랫폼으로, 다중 역할 사용자 인증 시스템을 핵심으로 구축되었습니다.\n\n주요 특징:\n\n1. **다중 역할 시스템**: 관리자, 판매자, 구매자별 차별화된 대시보드와 기능\n2. **실시간 재고 관리**: 자동 재고 업데이트 및 부족 알림 시스템\n3. **안전한 결제**: 다양한 결제 수단 지원 및 보안 강화\n4. **반응형 디자인**: 모바일과 데스크톱 환경 모두 최적화",
      features: [
        "다중 사용자 역할 관리 (관리자/판매자/구매자)",
        "실시간 재고 관리 시스템",
        "안전한 결제 처리",
        "상품 검색 및 필터링",
        "주문 추적 시스템",
        "반응형 웹 디자인"
      ],
      challenges: [
        {
          title: "동시성 제어 문제",
          problem: "여러 사용자가 동시에 같은 상품을 주문할 때 재고 부족 문제가 발생했습니다.",
          solution: "데이터베이스 트랜잭션과 락 메커니즘을 활용하여 동시성 제어를 구현했습니다.",
          result: "재고 관리 정확도가 99.9%로 향상되었으며, 중복 주문 문제가 해결되었습니다."
        }
      ],
      contribution: {
        overall: "70%",
        achievements: [
          { metric: "백엔드 API", value: "80%" },
          { metric: "사용자 인증", value: "90%" },
          { metric: "결제 시스템", value: "60%" }
        ],
        responsibilities: [
          "Django REST Framework 기반 API 개발",
          "다중 역할 사용자 인증 시스템 구축",
          "PostgreSQL 데이터베이스 설계",
          "결제 모듈 통합"
        ]
      }
    },
    3: {
      title: "Expense Tracker Application",
      subtitle: "Real time personal finance management tool with responsive reporting features",
      image: "/images/projects/expense-tracker.jpg",
      period: "2023.06 - 2023.08",
      team: "2명",
      status: "완료",
      technologies: ["Django", "Chart.js", "MySQL"],
      githubLink: "https://github.com/your-username/expense-tracker",
      presentationLink: "/files/expense-tracker-presentation.pdf",
      demoLink: null,
      overview: "개인 재무 관리를 위한 실시간 가계부 애플리케이션입니다. 직관적인 차트와 보고서를 통해 지출 패턴을 분석하고, 예산 관리 기능을 제공하여 효율적인 재무 계획을 세울 수 있도록 도와줍니다.",
      description: "개인의 재무 상황을 한눈에 파악할 수 있는 종합적인 가계부 애플리케이션입니다.\n\n핵심 기능:\n\n1. **실시간 지출 기록**: 간편한 지출 입력과 카테고리 분류\n2. **시각적 분석**: Chart.js를 활용한 다양한 차트와 그래프\n3. **예산 관리**: 월별/카테고리별 예산 설정 및 알림\n4. **보고서 생성**: 기간별 상세 리포트 자동 생성",
      features: [
        "실시간 수입/지출 기록",
        "카테고리별 지출 분석",
        "월별/연별 보고서 생성",
        "예산 대비 지출 추적",
        "차트를 통한 시각적 분석",
        "데이터 내보내기 (CSV/PDF)"
      ],
      challenges: [
        {
          title: "대용량 데이터 처리 최적화",
          problem: "수년간의 거래 데이터가 축적되면서 차트 로딩 속도가 현저히 느려졌습니다.",
          solution: "데이터 페이지네이션과 캐싱을 도입하고, Chart.js 설정을 최적화했습니다.",
          result: "차트 로딩 시간이 5초에서 0.8초로 개선되어 사용자 경험이 크게 향상되었습니다."
        }
      ],
      contribution: {
        overall: "80%",
        achievements: [
          { metric: "전체 개발", value: "80%" },
          { metric: "차트 구현", value: "95%" },
          { metric: "데이터 분석", value: "85%" }
        ],
        responsibilities: [
          "Django 기반 웹 애플리케이션 개발",
          "Chart.js를 활용한 데이터 시각화",
          "MySQL 데이터베이스 설계 및 최적화",
          "반응형 UI/UX 구현"
        ]
      }
    }
  };

  const project = projects[projectId];
  
  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  const sections = [
    { id: 'overview', label: '개요', icon: '📋' },
    { id: 'description', label: '상세 설명', icon: '📝' },
    { id: 'features', label: '핵심 기능', icon: '⚡' },
    { id: 'challenges', label: '문제 해결', icon: '🔧' },
    { id: 'contribution', label: '나의 기여', icon: '👨‍💻' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <motion.header 
        className="bg-white border-b border-gray-200 sticky top-0 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/?section=projects')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>포트폴리오로 돌아가기</span>
          </button>
        </div>
      </motion.header>

      {/* 프로젝트 헤더 섹션 */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-gray-50 to-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 프로젝트 정보 */}
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
                    <div className="font-medium">{project.status}</div>
                  </div>
                </div>
              </div>

              {/* 기술 스택 */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-3">사용 기술</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium text-white"
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
            </div>
            
            {/* 프로젝트 이미지 */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                        <div class="text-purple-600 text-6xl font-bold">${project.title.split(' ').map(w => w[0]).join('')}</div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 네비게이션 탭 */}
      <motion.nav 
        className="bg-white border-b border-gray-200 sticky top-[73px] z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`py-4 px-2 whitespace-nowrap border-b-2 font-medium text-sm transition-colors ${
                  activeSection === section.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{section.icon}</span>
                  {section.label}
                </span>
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
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.overview}
              </p>
            </div>
          )}

          {activeSection === 'description' && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">상세 설명</h2>
              <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                {project.description}
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
                    className="bg-gray-50 p-6 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'challenges' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">개발 중 문제점과 해결방안</h2>
              <div className="space-y-8">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      {challenge.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-red-800 mb-2">🚨 문제상황</h4>
                        <p className="text-gray-700">{challenge.problem}</p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-green-800 mb-2">💡 해결방안</h4>
                        <p className="text-gray-700">{challenge.solution}</p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-purple-800 mb-2">📊 결과</h4>
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
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 기여도 통계 */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-purple-900 mb-4">전체 기여도</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {project.contribution.overall}
                  </div>
                  <div className="space-y-3">
                    {project.contribution.achievements.map((achievement, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-purple-800">{achievement.metric}</span>
                        <span className="font-semibold text-purple-900">{achievement.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 담당 업무 */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">주요 담당 업무</h3>
                  <div className="space-y-3">
                    {project.contribution.responsibilities.map((responsibility, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{responsibility}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* 하단 액션 바 */}
      <motion.div 
        className="bg-gray-50 border-t border-gray-200 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">더 자세한 정보가 필요하신가요?</h3>
              <p className="text-gray-600">GitHub 레포지토리와 발표 자료를 확인해보세요.</p>
            </div>
            <div className="flex gap-4">
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub에서 코드 보기
              </a>
              <a 
                href={project.presentationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white px-6 py-3 rounded-lg transition-colors"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #A855F7)',
                  boxShadow: '0 2px 10px rgba(139, 92, 246, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 10px rgba(139, 92, 246, 0.3)';
                }}
              >
                <FileText className="w-5 h-5" />
                발표 자료 다운로드
              </a>
              {project.demoLink && (
                <a 
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailPage;
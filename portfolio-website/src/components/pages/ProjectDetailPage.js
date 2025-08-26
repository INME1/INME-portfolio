import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, FileText, ExternalLink, Calendar, Users, Code, Award } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import LACIDImg from '../../images/projects/LACID.png';
const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');

  // 페이지 진입 시 스크롤바 복원 및 정상 페이지로 설정
  useEffect(() => {
    // body와 html의 스크롤을 다시 활성화
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.documentElement.style.height = 'auto';
    document.body.style.position = 'static';
    document.body.style.width = 'auto';
    
    // 페이지 맨 위로 스크롤
    window.scrollTo(0, 0);
    
    // 컴포넌트 언마운트 시에는 정리하지 않음 (라우터가 처리)
  }, []);

  // 뒤로가기 함수 - Featured Projects 섹션으로 직접 이동
  const handleBack = () => {
    navigate('/?section=projects');
  };

  // 프로젝트 데이터 (실제로는 props나 API에서 받아옴)
  const projectData = {
    1: {
      title: "LACID",
      subtitle: "흉부 X-ray 기반 이상탐지 CDSS 시스템",
      image: LACIDImg,
      period: "2025.05 - 2025.07",
      team: "4명 (팀원)",
      status: "완료",
      technologies: ["Django", "React", "OpenMRS", "Orthanc", "MySQL", "Docker", "Redis", "nginx", "Celery", "Python", "Keras", "Pytorch", "PostgreSQL"],
      githubLink: "https://github.com/your-username/project-management",
      presentationLink: "https://your-presentation-link.com/project-management.ppt",
      demoLink: "https://your-demo.com",
      overview: `사용자 경험에 맞춘 UI와 함께 흉부 X-ray 기반 이상탐지와 여러 검사결과에 기반한 AI 분석 시스템을 제공합니다.`,
      description: `현대적인 팀 협업의 필요성에서 출발한 이 프로젝트는 분산된 팀 환경에서도 효율적인 프로젝트 관리를 가능하게 합니다.

주요 혁신점:
• 실시간 협업: WebSocket을 활용한 즉시 업데이트
• 직관적 UI: 복잡한 기능을 단순하게 표현
• 모바일 최적화: 언제 어디서나 접근 가능
• 확장성: 대규모 팀과 프로젝트 지원

이 시스템을 통해 팀의 생산성이 평균 40% 향상되었으며, 프로젝트 지연율을 25% 감소시키는 성과를 달성했습니다.`,
      features: [
        "실시간 프로젝트 상태 업데이트 및 알림",
        "팀원별 업무 할당 및 진행률 추적",
        "간트 차트를 통한 일정 시각화",
        "파일 첨부 및 공유 기능",
        "팀 채팅 및 댓글 시스템",
        "모바일 반응형 디자인",
        "권한별 접근 제어",
        "프로젝트 보고서 자동 생성"
      ],
      challenges: [
        {
          title: "실시간 데이터 동기화",
          problem: "다수의 사용자가 동시에 데이터를 수정할 때 발생하는 충돌과 일관성 문제",
          solution: "WebSocket을 활용한 실시간 양방향 통신 구현 및 Redis를 통한 세션 관리 최적화. 낙관적 락킹을 통해 데이터 충돌을 방지하고, 이벤트 소싱 패턴을 적용하여 모든 변경사항을 추적 가능하게 했습니다.",
          result: "동시 사용자 100명 기준 99.9%의 데이터 일관성 달성"
        },
        {
          title: "대용량 파일 업로드 처리",
          problem: "프로젝트 관련 대용량 파일(설계도, 영상 등) 업로드 시 서버 부하 및 타임아웃 문제",
          solution: "청크 업로드 방식 도입으로 파일을 작은 단위로 분할하여 업로드. AWS S3와 CloudFront CDN을 활용한 파일 저장 및 배포 최적화. 업로드 진행률 표시 및 중단/재개 기능 구현.",
          result: "최대 1GB 파일도 안정적 업로드 가능, 업로드 속도 60% 향상"
        },
        {
          title: "복잡한 권한 관리",
          problem: "프로젝트별, 기능별로 다른 권한 설정이 필요하며 동적으로 권한이 변경되는 상황",
          solution: "역할 기반 접근 제어(RBAC) 시스템 구현. 계층적 권한 구조 설계 및 동적 권한 할당 기능 개발. Django의 권한 시스템을 확장하여 세분화된 권한 제어 실현.",
          result: "프로젝트별 맞춤형 권한 설정으로 보안성 강화 및 사용 편의성 증대"
        }
      ],
      contribution: {
        overall: "85%",
        responsibilities: [
          "프로젝트 전체 아키텍처 설계 및 기술 스택 선정",
          "Django REST Framework 기반 백엔드 API 설계 및 구현",
          "WebSocket을 활용한 실시간 통신 시스템 개발",
          "사용자 인증 및 권한 관리 시스템 구축",
          "데이터베이스 설계 및 쿼리 최적화",
          "Docker를 활용한 개발/배포 환경 구축",
          "팀 프로젝트 관리 및 코드 리뷰 진행",
          "API 문서화 및 테스트 코드 작성"
        ],
        achievements: [
          { metric: "백엔드 개발 기여율", value: "85%" },
          { metric: "API 응답 시간 개선", value: "40% 단축" },
          { metric: "시스템 안정성", value: "99.9%" },
          { metric: "코드 커버리지", value: "92%" }
        ]
      }
    },
    2: {
      title: "E-Commerce Application",
      subtitle: "Full-featured e-commerce store with multi role user authentication functionality",
      image: "/images/projects/ecommerce.jpg",
      period: "2023.09 - 2024.01",
      team: "3명 (풀스택 개발자)",
      status: "완료",
      technologies: ["Django REST", "Python", "PostgreSQL", "Redis", "Celery", "Stripe API"],
      githubLink: "https://github.com/your-username/ecommerce",
      presentationLink: "https://your-presentation-link.com/ecommerce.ppt",
      overview: "다중 사용자 역할을 지원하는 완전한 기능의 이커머스 플랫폼으로, 판매자와 구매자 모두에게 최적화된 경험을 제공합니다.",
      description: `현대 이커머스의 복잡한 요구사항을 모두 충족하는 종합적인 온라인 쇼핑몰 플랫폼입니다. 단순한 상품 판매를 넘어서 다양한 사용자 역할(관리자, 판매자, 구매자)을 지원하며, 각 역할에 맞는 최적화된 인터페이스를 제공합니다.

특히 중소 판매자들이 쉽게 온라인 진출할 수 있도록 돕는 것을 목표로 하여, 복잡한 설정 없이도 바로 상품을 등록하고 판매할 수 있는 환경을 구축했습니다.`,
      features: [
        "다중 사용자 역할 기반 인증 시스템",
        "상품 등록 및 관리 시스템",
        "장바구니 및 위시리스트 기능",
        "다양한 결제 수단 지원",
        "실시간 재고 관리 및 알림",
        "주문 추적 및 배송 관리",
        "판매자용 대시보드 및 통계",
        "리뷰 및 평점 시스템"
      ],
      challenges: [
        {
          title: "결제 시스템 보안",
          problem: "민감한 결제 정보 처리 및 PCI DSS 준수 요구사항",
          solution: "Stripe API를 활용한 안전한 결제 처리 구현. 모든 민감 정보는 서버에 저장하지 않고 토큰화하여 처리. SSL/TLS 암호화 및 CSRF 보호 강화.",
          result: "PCI DSS Level 1 준수 달성 및 결제 성공률 99.8% 기록"
        },
        {
          title: "재고 동시성 문제",
          problem: "인기 상품의 동시 주문 시 재고 부족 및 overselling 문제",
          solution: "낙관적 락킹과 데이터베이스 트랜잭션을 활용한 원자적 재고 업데이트. Redis를 활용한 분산 락 구현으로 동시성 제어 강화.",
          result: "동시 주문 처리 정확도 100% 달성, overselling 완전 방지"
        }
      ],
      contribution: {
        overall: "75%",
        responsibilities: [
          "백엔드 API 설계 및 구현 (Django REST Framework)",
          "사용자 인증 및 권한 관리 시스템 개발",
          "결제 시스템 연동 및 보안 강화 (Stripe API)",
          "재고 관리 시스템 및 동시성 제어 구현",
          "주문 처리 워크플로우 설계",
          "데이터베이스 설계 및 성능 최적화",
          "RESTful API 문서화 (Swagger)",
          "배포 환경 구축 및 모니터링 시스템 설정"
        ],
        achievements: [
          { metric: "백엔드 개발 기여율", value: "75%" },
          { metric: "API 응답 속도", value: "200ms 이하" },
          { metric: "결제 성공률", value: "99.8%" },
          { metric: "시스템 가용성", value: "99.9%" }
        ]
      }
    }
  };

  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트를 찾을 수 없습니다</h2>
          <button 
            onClick={handleBack}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'overview', label: '개요', icon: '📋' },
    { id: 'description', label: '상세설명', icon: '📝' },
    { id: 'features', label: '핵심기능', icon: '⚡' },
    { id: 'challenges', label: '문제해결', icon: '🔧' },
    { id: 'contribution', label: '나의기여', icon: '👤' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <motion.header 
        className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </button>
            
            <div className="flex items-center gap-4">
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a 
                href={project.presentationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText className="w-4 h-4" />
                PPT
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* 프로젝트 헤로 섹션 */}
      <motion.section 
        className="bg-gray-50 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* 프로젝트 이미지 */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <div class="text-blue-600 text-6xl font-bold">${project.title.split(' ').map(w => w[0]).join('')}</div>
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
                    ? 'border-blue-500 text-blue-600'
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
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
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
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-blue-800 mb-2">📊 결과</h4>
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
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">전체 기여도</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {project.contribution.overall}
                  </div>
                  <div className="space-y-3">
                    {project.contribution.achievements.map((achievement, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-blue-800">{achievement.metric}</span>
                        <span className="font-semibold text-blue-900">{achievement.value}</span>
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
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
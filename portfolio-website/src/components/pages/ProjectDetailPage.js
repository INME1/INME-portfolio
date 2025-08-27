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
      overview: "실제 병원 환경에서 의료진이 사용할 수 있는 AI 기반 흉부 X-ray 이상 탐지 시스템입니다. OpenMRS(전자의무기록)와 Orthanc PACS(의료영상저장시스템)를 통합하여 환자 정보부터 영상 진단까지 전체 진료 과정을 지원하며, 딥러닝을 활용해 폐렴, 기흉, 폐결절 등을 자동으로 탐지하고 의료진에게 실시간으로 알려줍니다.",
      description: "**LACID(Lung Abnormality Clinical Intelligence Dashboard)** 는 실제 의료 현장의 워크플로우를 고려하여 설계된 종합적인 임상 의사결정 지원 시스템입니다.\n\n## 🏥 **의료 현장의 문제점**\n일반적으로 병원에서 흉부 X-ray 촬영 후 진단까지의 과정은 다음과 같습니다:\n1. 환자가 X-ray 촬영 → 2. 영상이 PACS에 저장 → 3. 방사선과 의사가 판독 → 4. 결과를 EMR에 기록\n\n하지만 이 과정에서 **판독 대기시간이 길고, 응급상황 감지가 늦으며, 의사 개인차에 따른 진단 정확도 편차**가 발생합니다.\n\n## 🤖 **LACID의 해결 방안**\n\n### **1. 통합 데이터 관리**\n- **OpenMRS**: 환자의 기본정보, 과거 병력, 진료기록을 통합 관리\n- **Orthanc PACS**: DICOM 표준을 준수하는 의료영상 저장/조회 시스템\n- **실시간 동기화**: 환자 ID를 기준으로 EMR과 PACS 데이터를 자동 연결\n\n### **2. AI 분석 파이프라인**\n- **전처리**: DICOM 이미지를 AI 모델에 최적화된 형태로 변환\n- **다중 질환 탐지**: 하나의 X-ray에서 여러 질환을 동시에 분석\n  - 🫁 **폐렴(Pneumonia)**: 정확도 94.2%, 민감도 91.8%\n  - 💨 **기흉(Pneumothorax)**: 정확도 96.5%, 특이도 95.1%\n  - 🔍 **폐결절(Pulmonary Nodule)**: 정확도 89.7%, 민감도 87.3%\n- **근거 시각화**: Grad-CAM 기법으로 AI가 주목한 부위를 히트맵으로 표시\n\n### **3. 의료진 중심 UI/UX**\n- **실시간 알림**: Critical Finding 발견 시 즉시 담당 의료진에게 알림\n- **직관적 대시보드**: 한 눈에 파악할 수 있는 진단 결과와 신뢰도 표시\n- **비교 뷰어**: 과거 촬영 이미지와 현재 이미지 동시 비교\n- **피드백 시스템**: 의료진이 AI 진단에 대해 피드백을 남길 수 있는 기능\n\n### **4. 확장 가능한 아키텍처**\n- **마이크로서비스**: Docker 컨테이너 기반으로 각 기능을 독립적으로 관리\n- **비동기 처리**: Celery + Redis를 통해 여러 이미지를 동시에 처리 가능\n- **로드밸런싱**: nginx를 통한 트래픽 분산으로 안정적인 서비스 제공\n\n## 📊 **실제 성능 지표**\n- **처리 속도**: 이미지 업로드부터 AI 결과까지 평균 3.2초\n- **동시 처리**: 최대 8개 이미지 동시 분석 가능\n- **정확도**: 전체 평균 93.5% (방사선과 전문의 대비 95% 수준)\n- **가동률**: 99.2% (월 평균 8시간 이하 다운타임)",
      features: [
        "OpenMRS 기반 환자 정보 및 진료 기록 통합 관리",
        "Orthanc PACS 서버를 통한 DICOM 표준 의료영상 실시간 처리",
        "CNN 기반 다중 질환 동시 탐지 (폐렴, 기흉, 폐결절)",
        "Grad-CAM 히트맵을 통한 AI 판단 근거 시각화",
        "의료진 역할별 권한 관리 (의사, 간호사, 기사) 및 감사 로그",
        "Critical Finding 실시간 알림 시스템 (응급상황 자동 감지)",
        "통합 DICOM Viewer 및 측정/어노테이션 도구",
        "AI 모델 성능 모니터링 대시보드 및 A/B 테스트 기능",
        "의료진 피드백 기반 능동 학습(Active Learning) 시스템",
        "과거 촬영 이미지와의 비교 분석 기능",
        "진단 보고서 자동 생성 및 EMR 연동",
        "HIPAA 준수 보안 체계 및 데이터 암호화"
      ],
      challenges: [
        {
          title: "OpenMRS와 Orthanc 간 환자 데이터 동기화 문제",
          problem: "의료 현장에서는 EMR(전자의무기록)과 PACS(의료영상저장시스템)가 서로 다른 벤더의 솔루션을 사용하는 경우가 많습니다. 우리 프로젝트에서도 OpenMRS의 Patient UUID와 Orthanc PACS의 Patient ID가 서로 다른 형식으로 관리되어 문제가 발생했습니다. \n\n구체적으로는 OpenMRS에서는 '12345-abc-def' 형태의 UUID를 사용하지만, DICOM 표준에서는 숫자로만 이루어진 Patient ID를 권장합니다. 또한 한 환자가 여러 번 촬영을 하는 경우 Study Instance UID와 Series Instance UID를 올바르게 관리하지 않으면 동일 환자의 서로 다른 촬영본을 별개의 환자로 인식하는 문제가 발생했습니다.",
          solution: "이 문제를 해결하기 위해 3단계 접근 방식을 채택했습니다:\n\n**1단계 - 매핑 테이블 설계**: OpenMRS Patient UUID와 DICOM Patient ID를 연결하는 중간 매핑 테이블을 Django 모델로 설계했습니다. 이 테이블은 환자의 이름, 생년월일, 성별 등 추가 식별 정보도 포함하여 매칭 정확도를 높였습니다.\n\n**2단계 - Orthanc Lua 스크립트**: Orthanc 서버에 Lua 스크립트를 설정하여 DICOM 파일이 업로드될 때마다 자동으로 OpenMRS API를 호출하도록 구현했습니다. 이 스크립트는 DICOM 헤더의 Patient Name과 Patient Birth Date를 추출하여 OpenMRS에서 해당 환자를 검색합니다.\n\n**3단계 - 예외 처리 및 검증**: 자동 매칭이 실패하는 경우를 대비해 의료진이 수동으로 환자를 매칭할 수 있는 웹 인터페이스를 구현했습니다. 또한 매칭된 결과에 대해 신뢰도 점수를 계산하여 불확실한 매칭에 대해서는 검토 요청을 발생시킵니다.",
          result: "환자 매칭 정확도가 초기 67%에서 99.1%로 대폭 향상되었습니다. 의료진이 수동으로 환자 정보를 입력하던 시간이 평균 3분에서 36초로 80% 단축되었으며, 매칭 오류로 인한 진단 지연 사례가 월 평균 23건에서 2건으로 줄어들었습니다. 또한 Study와 Series 관리 개선으로 환자별 촬영 이력 추적이 정확해져 과거 영상과의 비교 진단이 가능해졌습니다."
        },
        {
          title: "대용량 DICOM 파일의 실시간 AI 추론 성능 최적화",
          problem: "흉부 X-ray DICOM 파일의 크기는 병원마다 다르지만 일반적으로 8-12MB 정도입니다. 하지만 일부 고해상도 디지털 장비에서는 20-30MB까지 나오기도 합니다. 초기 구현에서는 단순히 전체 DICOM 파일을 메모리에 로드한 후 AI 모델에 입력했는데, 이 방식은 여러 문제를 야기했습니다:\n\n- **메모리 부족**: 8GB RAM 서버에서 10개 이상의 이미지를 동시 처리할 때 Out of Memory 오류 발생\n- **느린 추론 속도**: GPU 메모리 부족으로 CPU로 추론하면서 이미지당 15-20초 소요\n- **병목 현상**: 하나의 큰 이미지가 처리되는 동안 다른 요청들이 대기 상태로 머무름\n\n실제 응급실 환경에서는 3분 이내에 결과를 제공해야 한다는 요구사항이 있었으므로 이는 심각한 문제였습니다.",
          solution: "성능 최적화를 위해 다층적인 접근 방식을 구현했습니다:\n\n**1. 비동기 작업 큐 도입**: Celery와 Redis를 활용하여 웹 서버와 AI 추론 서버를 분리했습니다. 사용자가 이미지를 업로드하면 즉시 작업 ID를 반환하고, 백그라운드에서 처리 후 WebSocket을 통해 결과를 실시간으로 전달합니다.\n\n**2. 이미지 전처리 최적화**: DICOM 파일에서 실제 픽셀 데이터만 추출하고, 적응적 히스토그램 평활화(CLAHE)를 적용하여 이미지 품질을 향상시키면서 동시에 용량을 줄였습니다. 또한 AI 모델에 필요한 해상도(512x512)로 리사이즈하여 메모리 사용량을 80% 절감했습니다.\n\n**3. GPU 메모리 관리**: PyTorch의 torch.cuda.empty_cache()와 배치 처리를 활용하여 GPU 메모리를 효율적으로 관리했습니다. 또한 모델 가중치를 반정밀도(FP16)로 변환하여 메모리 사용량을 절반으로 줄였습니다.\n\n**4. 결과 캐싱**: Redis를 활용하여 동일한 이미지에 대한 중복 처리를 방지했습니다. DICOM 파일의 SOP Instance UID를 키로 사용하여 캐시 적중률 92%를 달성했습니다.",
          result: "최적화 후 성능이 극적으로 향상되었습니다:\n- **처리 속도**: 20초 → 3.2초 (84% 개선)\n- **동시 처리 능력**: 2개 → 8개 이미지\n- **메모리 사용량**: 6GB → 2.1GB (65% 절감)\n- **응답 시간**: 평균 18초 → 3.8초\n- **처리량**: 시간당 30건 → 시간당 180건 처리 가능\n\n실제 응급실 테스트에서 99%의 케이스가 3분 이내에 결과를 제공할 수 있게 되어 임상 요구사항을 충족했습니다."
        },
        {
          title: "의료진 워크플로우 통합 및 실사용성 개선",
          problem: "기술적으로는 완벽한 시스템이었지만 실제 의료진들이 사용하기에는 여러 문제가 있었습니다:\n\n**사용성 문제**: 기존에 사용하던 PACS 뷰어와 다른 인터페이스로 인해 학습 곡선이 길었습니다. 특히 60대 이상의 경력 의사들은 새로운 시스템 사용을 꺼렸습니다.\n\n**신뢰도 문제**: AI가 '폐렴 의심 92%'라고 결과를 제시해도 의료진들은 '왜 이 부분을 폐렴이라고 판단했는가?'에 대한 근거를 요구했습니다. 특히 False Positive (실제로는 정상인데 이상으로 판단)가 발생하면 시스템 전체에 대한 불신으로 이어졌습니다.\n\n**워크플로우 불일치**: 기존 판독 과정은 '영상 확인 → 과거 영상 비교 → 소견 작성 → 동료 검토'의 단계를 거치는데, 우리 시스템은 이런 기존 프로세스를 고려하지 않았습니다.\n\n실제 3주간의 파일럿 테스트에서 일일 사용량이 목표 50건 대비 12건에 그쳤고, 사용자 만족도가 5점 만점에 2.1점으로 매우 낮았습니다.",
          solution: "의료진과의 긴밀한 협업을 통해 사용자 중심 개선을 진행했습니다:\n\n**1. 사용자 연구**: 서울대병원 방사선과 교수 1명, 전공의 2명과 월 2회 정기 미팅을 통해 실제 사용 패턴을 분석했습니다. 판독실에서 직접 관찰하며 기존 워크플로우를 상세히 파악했습니다.\n\n**2. 근거 시각화 구현**: Grad-CAM 기법을 도입하여 AI가 어느 부위에 집중했는지 히트맵으로 보여주는 기능을 구현했습니다. 빨간색이 진할수록 AI가 주목한 부위임을 직관적으로 이해할 수 있게 했습니다.\n\n**3. 기존 PACS 통합**: 완전히 새로운 뷰어를 만드는 대신 기존 PACS의 웹 뷰어에 AI 결과를 오버레이로 표시하는 방식으로 변경했습니다. 이를 위해 DICOM Web 표준을 준수하는 API를 구현했습니다.\n\n**4. 능동 학습 시스템**: 의료진이 AI 진단에 대해 '동의/비동의' 피드백을 줄 수 있는 간단한 인터페이스를 제공했습니다. 이 데이터를 활용하여 모델을 지속적으로 개선하는 파이프라인을 구축했습니다.\n\n**5. 단계적 도입**: 처음에는 AI 결과를 참고용으로만 제공하고, 신뢰도가 95% 이상인 Critical Finding만 알림을 발송하도록 했습니다. 의료진이 시스템에 익숙해진 후 점진적으로 기능을 확대했습니다.",
          result: "사용자 중심 개선 후 극적인 변화를 보였습니다:\n- **사용자 만족도**: 2.1점 → 4.2점 (5점 만점)\n- **일일 사용량**: 12건 → 67건 (458% 증가)\n- **False Positive 신고**: 월 89건 → 월 23건 (74% 감소)\n- **의료진 학습 시간**: 평균 2시간 → 30분\n- **시스템 신뢰도**: 34% → 87% (의료진 설문조사 결과)\n\n특히 60대 방사선과 과장님이 '이제 이 시스템 없이는 판독하기 어렵다'고 말씀하신 것이 가장 의미 있는 성과였습니다. 현재는 다른 과의 의사들도 해당 시스템 사용을 요청하는 상황입니다."
        }
      ],
      contribution: {
        overall: "75%",
        achievements: [
          { metric: "백엔드 개발", value: "85%" },
          { metric: "OpenMRS 연동", value: "90%" },
          { metric: "Orthanc 통합", value: "80%" },
          { metric: "시스템 아키텍처", value: "70%" }
        ],
        responsibilities: [
          "Django REST Framework를 활용한 RESTful API 설계 및 구현 (환자 정보 조회, 영상 업로드, AI 결과 처리 등 총 47개 엔드포인트)",
          "OpenMRS FHIR R4 표준 API와 Django ORM 간 데이터 매핑 및 실시간 동기화 로직 개발",
          "Orthanc REST API를 활용한 DICOM 파일 업로드/다운로드/메타데이터 추출 파이프라인 구축",
          "Celery + Redis 기반 비동기 작업 큐 시스템 설계 (이미지 전처리, AI 추론, 결과 후처리)",
          "Docker Compose를 통한 멀티 컨테이너 개발/배포 환경 구성 (총 8개 서비스 오케스트레이션)",
          "PostgreSQL 데이터베이스 정규화 및 인덱스 최적화 (쿼리 성능 60% 향상)",
          "의료진 역할 기반 권한 관리 시스템 및 HIPAA 준수 감사 로그 기능 구현",
          "WebSocket 기반 실시간 알림 시스템 구현 (Critical Finding 자동 감지 및 푸시)",
          "Pytest를 활용한 단위 테스트 및 통합 테스트 코드 작성 (코드 커버리지 87%)",
          "의료진 피드백 수집 및 능동 학습을 위한 데이터 파이프라인 설계"
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
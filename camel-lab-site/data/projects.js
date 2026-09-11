// ============================================================
//  PROJECTS  —  status: "ongoing" | "past"
// ============================================================
const PIMG = "https://github.com/PNUxCAMEL/camel-lab-images/blob/main/projects/";

window.PROJECTS = [
  {
    status: "ongoing",
    title: "가이드독: 시각 장애인 길 안내 로봇 이동지능 기술 개발",
    image: PIMG + "guide_dog.png?raw=true",
    agency: "한국전자통신연구원 (ETRI)",
    period: "2023.01 – 2027.12 (5년)",
    summary: "시각장애인의 안전하고 효율적인 보행을 지원하는 길 안내 로봇 이동지능 기술 개발",
    tasks: [
      "가이드 독 HW 플랫폼 및 보행제어 기술 개발",
      "멀티 모달 정보를 활용한 보행환경 인식 및 위험상황 예측에 따른 사용자 피드백 시스템 개발",
      "하네스-가이드 독 상호작용을 위한 순응 제어 기술 개발",
    ],
  },
  {
    status: "ongoing",
    title: "주력 제조업종의 자율제조를 위한 휴머노이드 로봇 기반 자율공정 운영 기술 개발",
    image: PIMG + "humanoid.png?raw=true",
    agency: "한국전자기술연구원 (KETI)",
    period: "2024.09 – 2028.12 (5년)",
    summary: "휴머노이드 로봇의 제조 상황 인지·판단 기술 개발을 통한 주력 제조업종의 자율공정 운영모델 개발",
    tasks: [
      "멀티모달 데이터 기반 로봇 인지·판단·제어 모델 개발",
      "휴머노이드 로봇 양팔 충돌 회피 제어 기술 개발",
    ],
  },
  {
    status: "ongoing",
    title: "SDR 도메인 서비스를 위한 BM 개발 및 로봇 구현과 검증",
    image: PIMG + "sdr.png?raw=true",
    agency: "한국산업기술기획평가원",
    period: "2024.09 – 2028.12 (5년)",
    summary: "사용자 경험 기반 서비스 시나리오와 BM 발굴을 통한 SDR 프레임워크 및 공통 인터페이스 각종 로봇에 적용 및 구현",
    tasks: [
      "SDR 플랫폼 통합을 위한 시스템 개념 설계",
      "로봇 조작기 힘 기반 제어 시스템 개발",
      "클라우드 기반 OTA 활용 4족 보행 로봇 자가 캘리브레이션 기술 개발",
    ],
  },
  {
    status: "ongoing",
    title: "화재 현장 실내 수색을 위한 육공협력형 UGV 개발",
    image: PIMG + "firefighter_ugv.png?raw=true",
    agency: "한국연구재단",
    period: "2025.04 – 2028.12 (4년)",
    summary: "재난안전 임무 수색·중계용 육상 무인이동체 기술 개발",
    tasks: [
      "전역 지도 및 보행 가능 영역 정보 기반 지역 경로 생성",
      "소방환경 내 학습 기반 UGV 보행 및 주행 제어 알고리즘 개발",
      "비정형, 비평탄 지형 내 이동 불능 상태 복구 알고리즘 개발",
    ],
  },
  {
    status: "ongoing",
    title: "초감각 증각 양방향 소통 가능한 휴머노이드 플랫폼",
    image: PIMG + "alchemist.png?raw=true",
    agency: "한국산업기술기획평가원",
    period: "2024.04 – 2030.12 (8년)",
    summary: "극한 환경/일상 생활에서의 초감각 휴머노이드를 활용하여 주변 환경을 스스로 판단, 임무 수행하는 휴머노이드 개발",
    tasks: [
      "촉각 피드백 기반 휴머노이드 양팔 제어 시스템 개발",
      "초고자유도 손가락 및 다관절 휴머노이드 설계 및 개발",
    ],
  },
  {
    status: "ongoing",
    title: "Intern Projects: 실전문제연구단",
    image: PIMG + "practical_problem.png?raw=true",
    agency: "부산대학교 실전문제연구단",
    period: "2025.03 – 2025.11 (8개월)",
    summary: "족형 로봇의 산업 환경 내 동작 계획을 통한 비정형 장애물 극복 실증",
    tasks: [
      "비정형 장애물 탐지 센서 기반 제어 전장부 설계",
      "족형 로봇 상부 탑재용 협동로봇 팔 설계 및 시뮬레이션 검증",
      "족형 로봇 장애물 극복 제어 기술 개발 및 실증 진행",
    ],
  },
  {
    status: "past",
    title: "자율 공중조작을 위한 데이터 기반 모델 예측제어 연구",
    image: PIMG + "autonomous_aerial_manipulation.png?raw=true",
    agency: "한국연구재단",
    period: "2021.03 – 2025.02 (4년)",
    summary: "무인 항공 매니퓰레이터의 동적 안정도 향상을 위한 데이터 기반 제어기술 개발",
    tasks: [
      "무인 항공용 저관성 매니퓰레이터 플랫폼 및 제어기술 개발",
      "모션 캡쳐 기반 무인 항공 매니퓰레이터 데이터 수집 시스템 개발",
      "데이터 기반 모델 예측제어를 통한 UAM 동적 자세제어기 개발",
    ],
  },
  {
    status: "past",
    title: "지역 경찰 지원을 위한 무인 순찰 로봇 시스템 개발 실증",
    image: PIMG + "police_lab.png?raw=true",
    agency: "과학치안진흥센터",
    period: "2021.07 – 2024.12 (3년 6개월)",
    summary: "지역 경찰 지원을 위한 무인 순찰 로봇 시스템 개발 및 실증",
    tasks: [
      "경량 4족 보행 로봇 HW 플랫폼 개발",
      "보행 궤적 생성 알고리즘 및 자세 안정화 알고리즘 개발",
      "지형 적응형 바퀴 주행 기술 개발 및 보행/주행 천이기술 개발",
    ],
  },
];

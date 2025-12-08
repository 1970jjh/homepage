
import { Category, ProgramDetail } from '../types';

export const programs: ProgramDetail[] = [
  // --- AI & DT ---
  {
    id: 'ai-webapp',
    category: Category.AI_DT,
    title: '바이브코딩 AI AGENT 제작',
    subtitle: 'AI 바이브코딩을 통한 업무 자동화',
    description: '코딩을 전혀 모르는 비개발자도 생성형 AI와의 자연어 대화(Prompting)만으로 자신만의 업무 자동화 도구를 개발할 수 있는 혁신적인 과정입니다. 단순한 챗봇 사용법을 넘어, 실제 작동하는 Web App을 기획하고 배포하는 전 과정을 실습하며 디지털 전환(DT)의 핵심 인재로 거듭납니다.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1e0RW55v2b_J1Qw62mh2VguGZzX0jruX5/view?usp=drive_link',
    details: {
      time: '6H ~ 8H',
      target: '전 임직원',
      method: 'AI 실습, 프로젝트 PBL',
      curriculum: [
        'M1. [이해] GPT/생성형 AI Tool 업무 활용 스킬 및 최신 트렌드 이해',
        'M2. [기획] AI Ideation & Prompt Engineering을 통한 솔루션 구체화',
        'M3. [개발] 업무 활용 AI Web App 제작 실습 (Google AI Studio, Claude 등 활용)',
        'M4. [발표] 조별 프로젝트 시연, 상호 피드백 및 현업 적용 방안 논의'
      ],
      features: [
        '비개발자도 가능한 No-Code/Low-Code 방식의 실습 위주 교육',
        '실제 현업의 Pain Point를 해결하는 커스터마이징 앱 제작',
        '교육 종료 즉시 업무에 활용 가능한 결과물 도출',
        '지속적인 활용을 위한 AI 툴 활용 가이드 및 프롬프트 템플릿 제공'
      ],
      effects: ['디지털 리터러시 강화', '업무 자동화 마인드셋 제고', '문제해결을 위한 AI 활용 능력 습득'],
      reviews: [
        { role: '교육생', author: '마케팅팀 대리', content: '코딩을 전혀 몰라도 내 업무에 딱 맞는 프로그램을 만들 수 있다는 게 놀라웠습니다. 반복 업무가 획기적으로 줄었어요!' },
        { role: '교육생', author: '영업지원팀 사원', content: 'AI가 이렇게 실용적인 줄 몰랐습니다. 직접 만든 앱으로 데이터를 정리하니 시간이 절반으로 단축되었습니다.' },
        { role: 'HR 담당자', author: 'IT기업 HR팀장', content: '임직원들의 디지털 역량을 높이는 가장 효과적인 교육이었습니다. 결과물 퀄리티가 기대 이상입니다.' },
        { role: 'HR 담당자', author: '제조업 교육담당', content: '현업 적용도가 매우 높습니다. 교육 후 실제 업무 개선 사례가 많이 나오고 있어 만족스럽습니다.' }
      ]
    }
  },
  {
    id: 'ai-teambuilding',
    category: Category.AI_DT,
    title: 'AI Team-Building',
    subtitle: 'AI 기술과 팀워크의 결합',
    description: 'ChatGPT, Suno AI, Gemini 등 최신 AI 툴을 활용하여 팀의 비전을 시각화하고, 팀 주제가를 작곡하며, AI와 협업하여 문제를 해결하는 뉴노멀 팀빌딩 프로그램입니다. 기술을 매개로 세대 간의 격차를 줄이고, 디지털 환경에서의 새로운 소통 방식을 경험하며 팀의 단합을 도모합니다.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1G0R0vJOb1P13DeOgZAyPf85JgqTQbUTg/view?usp=sharing',
    details: {
      time: '3H ~ 4H',
      target: '전 임직원',
      method: 'Gamification, AI Tool 실습',
      curriculum: [
        'M1. [Visioning] AI로 팀 네이밍, 구호, 비전 포스터 제작 (Image Generation)',
        'M2. [Harmony] 우리 팀만의 마블 팀 노래 작사/작곡 (Suno AI 활용)',
        'M3. [Collaboration] AI vs 집단지성 대결 (Chat GPT를 활용한 퀴즈/문제해결)',
        'M4. [Trust] AI 툴을 활용한 결과물 공유 및 신뢰 조직 관계 형성'
      ],
      features: [
        '최신 AI 툴을 놀이처럼 즐겁게 학습하며 자연스러운 팀빌딩 유도',
        '추상적인 팀의 비전을 고퀄리티의 시각적/청각적 결과물로 구체화',
        '디지털 네이티브와 기성세대 간의 디지털 협업 경험 제공',
        '팀원 모두가 참여하여 완성하는 결과물 공유 세션'
      ],
      effects: ['창의적 협업 경험', '조직 로열티 증대', 'AI 활용에 대한 심리적 장벽 제거'],
      reviews: [
        { role: '교육생', author: '연구소 팀장', content: '딱딱한 팀빌딩이 아니라 AI로 노래도 만들고 그림도 그리니 시간 가는 줄 몰랐습니다. 팀 분위기가 너무 좋아졌어요!' },
        { role: '교육생', author: '신입사원', content: '선배님들과 AI 툴을 쓰면서 자연스럽게 대화할 수 있어서 좋았습니다. 우리 팀 주제가는 계속 부르고 다닐 것 같아요.' },
        { role: 'HR 담당자', author: '유통업 인사팀', content: 'AI 트렌드와 조직활성화를 동시에 잡은 획기적인 프로그램입니다. 직원들 만족도가 역대 최고입니다.' },
        { role: 'HR 담당자', author: '공공기관 교육담당', content: '디지털 전환 교육이 지루할까봐 걱정했는데, 이렇게 즐겁게 배울 수 있다는 점이 인상적이었습니다.' }
      ]
    }
  },

  // --- Leadership ---
  {
    id: 'self-leadership',
    category: Category.LEADERSHIP,
    title: '셀프리더십 UPSTREAM',
    subtitle: '주도적 문제해결과 성장',
    description: '반복되는 문제의 증상만 처리하는 것이 아니라, 상류(Upstream)로 거슬러 올라가 근본 원인을 찾아 선제적으로 해결하는 사고방식을 배웁니다. 스스로 목표를 설정하고 동기부여하며, 주도적으로 업무를 리딩하는 셀프 리더십을 통해 개인과 조직의 동반 성장을 이룹니다.',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1ELeECDJU1sJKs97W1pRIvE2sj-gEEK5c/view?usp=drive_link',
    details: {
      time: '3H ~ 4H',
      target: '사원~대리급',
      method: 'Gamification, Workshop',
      curriculum: [
        'M1. [Concept] 셀프리더십 함양을 위한 UPSTREAM 사고법 (이순신 장군 사례)',
        'M2. [Simulation] 목표달성 전략 시뮬레이션 (주도적 문제해결 경험)',
        'M3. [Resilience] 실패로부터 배우기 (STAR-L 기법을 활용한 회복탄력성)',
        'M4. [Vision] 자기주도성 및 책임감 향상을 위한 비전 수립 및 다짐'
      ],
      features: [
        '문제해결의 패러다임을 바꾸는 업스트림(Upstream) 사고방식 훈련',
        '자신의 업무와 태도를 객관적으로 돌아보는 성찰적 자기평가 기회 제공',
        '시키지 않아도 스스로 일을 찾아서 하는 주도적 업무 태도(Ownership) 확립',
        '실패를 성장의 기회로 삼는 회복탄력성(Resilience) 강화'
      ],
      effects: ['자기주도적 업무 수행', '문제 해결 능력 심화', '직무 몰입도 상승'],
      reviews: [
        { role: '교육생', author: '영업지원 사원', content: '수동적으로 일하던 제 모습을 반성하게 되었습니다. 이제는 주도적으로 일하겠습니다.' },
        { role: '교육생', author: '마케팅 대리', content: '업스트림 사고법을 통해 문제의 근본 원인을 해결하는 습관을 들였습니다.' },
        { role: 'HR 담당자', author: '금융사 교육담당', content: '저연차 사원들의 마인드셋 변화에 큰 도움이 되었습니다.' },
        { role: 'HR 담당자', author: '공기업 HR팀', content: '스스로 동기부여하고 성장하는 셀프 리더를 육성하는 데 최적의 과정입니다.' }
      ]
    }
  },
  {
    id: 'proactive-followership',
    category: Category.LEADERSHIP,
    title: '주도적 팔로워십',
    subtitle: '리더를 춤추게 하는 팔로워',
    description: '리더십 못지않게 중요한 것이 팔로워십입니다. 리더를 효과적으로 보좌하고, 조직의 목표 달성에 능동적으로 기여하며, 건전한 비판과 대안을 제시할 줄 아는 "모범적 팔로워"를 육성합니다. 리더와 파트너십을 형성하고 함께 성장하는 방법을 배웁니다.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1GQbn28V7MbVAhyPHoCESId9uSYj6U86I/view?usp=drive_link',
    details: {
      time: '4H ~ 6H',
      target: '사원~대리급',
      method: '진단, 워크숍',
      curriculum: [
        'M1. [Diagnosis] 나의 팔로워십 유형 진단 (로버트 켈리 모델 활용)',
        'M2. [Concept] 합심하는 팀원! 슈퍼 팔로워십의 핵심 요건과 태도',
        'M3. [Partnership] 리더와 신뢰 기반의 파트너십 형성하기 (소통 및 보좌)',
        'M4. [Proactive] 자기 주도성을 갖춘 Follower의 조건 및 행동 수칙'
      ],
      features: [
        '자신의 팔로워십 스타일을 객관적으로 인식하고 개선점 도출',
        '리더십과 팔로워십의 상호보완적 관계를 이해하고 시너지 창출',
        '조직에 대한 공헌 욕구를 고취시키고 주체적인 업무 수행 독려',
        '상사의 유형에 따른 맞춤형 팔로워십 전략 및 소통 스킬 습득'
      ],
      effects: ['상사와의 관계 개선', '팀워크 향상', '조직 성과 기여도 증대'],
      reviews: [
        { role: '교육생', author: '대리', content: '상사가 바라는 것이 무엇인지 정확히 알게 되었습니다. 이제 센스 있는 팔로워가 될 수 있을 것 같아요.' },
        { role: '교육생', author: '사원', content: '리더를 돕는 것이 결국 나를 돕는 것이라는 걸 깨달았습니다.' },
        { role: 'HR 담당자', author: '중견기업 인사팀', content: '허리 역할을 하는 중간관리자급에게 꼭 필요한 교육입니다. 조직 분위기가 좋아졌습니다.' },
        { role: 'HR 담당자', author: '공공기관 교육담당', content: '수동적인 직원들을 능동적으로 변화시키는 힘이 있는 프로그램입니다.' }
      ]
    }
  },
  {
    id: 'connector-linkership',
    category: Category.LEADERSHIP,
    title: 'The Connector 링커십',
    subtitle: '연결하고 조율하는 리더',
    description: '복잡성의 시대, 조직 내/외부의 단절을 잇고 협업을 설계하는 "연결자(Linker)"로서의 차세대 리더십을 개발합니다. 부서 간 이기주의(Silo)를 타파하고, 이해관계자들의 니즈를 조율하여 조직 전체의 시너지를 창출하는 전략적 중재자로서의 역량을 강화합니다.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1InWIcTq0N366wZ9ykg3s5pdBViLgs3Bm/view?usp=drive_link',
    details: {
      time: '6H',
      target: '중간관리자, 팀장, PM',
      method: 'Gamification, Workshop',
      curriculum: [
        'M1. [Concept] VUCA 시대의 핵심역량, 연결하는 힘 "링커십"의 이해',
        'M2. [Communication] 커뮤니케이션 링커십 (정+반=합 게임을 통한 조율 훈련)',
        'M3. [Performance] 성과창출 링커십 (사우디 TFT 시뮬레이션으로 배우는 협업)',
        'M4. [Stakeholder] 복잡한 이해관계자 지도 그리기 및 관리/조율 스킬'
      ],
      features: [
        '나 중심이 아닌 관계자 중심적 사고(Stakeholder-centric) 훈련',
        '실제 조직 내/외부 연결 문제를 해결하는 시뮬레이션 게임 진행',
        '협업 구조를 설계하고 갈등을 조정하는 실무 능력 배양',
        '조직 내 네트워킹 및 영향력 확대를 위한 구체적 스킬 습득'
      ],
      effects: ['부서 간 협업 활성화', '갈등 조정 능력 향상', '조직 전체 관점의 사고 확장'],
      reviews: [
        { role: '교육생', author: 'PM팀 과장', content: '프로젝트 진행 시 부서 간 조율이 힘들었는데, 이해관계자 지도를 그려보며 해결의 실마리를 찾았습니다.' },
        { role: '교육생', author: '전략기획 팀장', content: '연결자로서의 리더십이 왜 중요한지 깨달았습니다. 사우디 TFT 게임이 특히 인상 깊었습니다.' },
        { role: 'HR 담당자', author: '건설사 HR팀', content: '조직 내 소통과 협업을 강화하는 데 최적화된 프로그램입니다. 중간관리자 역량 강화에 추천합니다.' },
        { role: 'HR 담당자', author: 'IT기업 교육담당', content: '단순 리더십 교육이 아니라, 실제 업무 흐름을 개선하는 관점을 심어주는 점이 좋았습니다.' }
      ]
    }
  },
  {
    id: 'super-gap',
    category: Category.LEADERSHIP,
    title: '초격차 리더십',
    subtitle: '긍정적 영향력을 발휘하는 리더',
    description: '급변하는 경영 환경 속에서 솔선수범의 책임감으로 팀을 이끌고, 조직관리(성과)와 사람관리(관계)의 완벽한 균형을 통해 압도적인 성과를 창출하는 "초격차" 리더를 양성합니다. 리더의 R&R을 명확히 하고, 구성원들에게 긍정적인 영향력을 발휘하는 구체적인 행동 지침을 학습합니다.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1X-x5M01xHd3EwYbFiafqobGylfGNw7bk/view?usp=sharing',
    details: {
      time: '8H',
      target: '팀장, 차/부장급',
      method: 'PBL, Role-play, Simulation',
      curriculum: [
        'M1. [Role] 초격차 리더십의 R&R 및 3가지 핵심 역량(조직/사람/성과) 이해',
        'M2. [Simulation] 성과관리 리더십 롤플레잉 (40Road 교구 활용 시뮬레이션)',
        'M3. [Influence] 구성원의 자발적 몰입을 이끄는 동기부여와 신뢰 구축',
        'M4. [Action] 현업 적용을 위한 리더십 행동강령 및 액션플랜 수립'
      ],
      features: [
        '40Road 시뮬레이션 교구를 활용한 몰입도 높은 리더십 실습',
        '에이미 에드먼슨의 심리적 안전감 이론을 접목한 조직 관리 기법',
        '성과 창출과 관계 형성의 균형점을 찾는 실질적인 솔루션 제공',
        '현장 사례 중심의 Case Study와 동료 피드백 세션'
      ],
      effects: ['리더 역할 인식 명확화', '상황별 리더십 발휘 능력 향상', '팀 성과 극대화'],
      reviews: [
        { role: '교육생', author: '영업본부 팀장', content: '리더로서 나의 위치와 역할을 다시 돌아보는 계기가 되었습니다. 특히 40Road 시뮬레이션이 현실감 있어 좋았습니다.' },
        { role: '교육생', author: '생산관리 부장', content: '성과와 관계 사이에서 고민이 많았는데, 명쾌한 해답을 얻었습니다. 현장에 돌아가서 바로 적용해보려 합니다.' },
        { role: 'HR 담당자', author: '대기업 인재개발원', content: '리더십 교육의 정석입니다. 이론과 실습의 밸런스가 훌륭하고, 교육생들의 몰입도가 상당했습니다.' },
        { role: 'HR 담당자', author: '중견기업 교육담당', content: '승진자 교육으로 진행했는데, 리더로서의 마인드셋을 갖추는 데 큰 도움이 되었습니다.' }
      ]
    }
  },
  {
    id: 'high-performer',
    category: Category.LEADERSHIP,
    title: '하이퍼포머 리더십',
    subtitle: '성과를 창출하는 팀 만들기',
    description: '지속적으로 고성과를 창출하는 팀(HPT: High Performance Team)의 5가지 조건을 이해하고, 심리적 안전감을 바탕으로 구성원의 자발적 몰입과 도전을 이끄는 리더십 과정입니다. 실패를 두려워하지 않고 도전하는 팀 문화를 만드는 리더의 구체적인 행동 양식을 학습합니다.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1vVpUBlRXwktiqmPbk9ssspMtz7J5H5cd/view?usp=drive_link',
    details: {
      time: '8H',
      target: '팀장, 예비 리더',
      method: '조직심리학 기반 PBL',
      curriculum: [
        'M1. [Culture] 구글의 아리스토텔레스 프로젝트와 심리적 안전감의 이해',
        'M2. [Coaching] 구성원의 성장을 돕는 1 on 1 코칭 & 피드백 스킬',
        'M3. [Activity] 하이포퍼머 리더십 액티비티 (팀 다이내믹스 체험)',
        'M4. [Development] 긍정적 영향력을 통한 인재육성 및 팀 빌딩 전략'
      ],
      features: [
        '구글의 고성과 팀 비밀(심리적 안전감)을 우리 조직에 적용하는 방법',
        '이론을 넘어 실제 행동 변화를 이끄는 코칭/피드백 실습',
        '팀 문화 진단 툴을 활용한 현재 수준 진단 및 개선 솔루션',
        '구성원의 강점을 발견하고 배치하는 인재 활용 전략 습득'
      ],
      effects: ['심리적 안전감 조성', '팀원 육성 역량 강화', '지속 가능한 고성과 팀 구축'],
      reviews: [
        { role: '교육생', author: '영업팀장', content: '팀원들이 왜 침묵하는지 알게 되었습니다. 심리적 안전감을 만드는 리더가 되겠습니다.' },
        { role: '교육생', author: '개발팀 파트장', content: '팀의 성과를 높이기 위해 무엇을 바꿔야 할지 명확해졌습니다. 실용적인 팁이 많았습니다.' },
        { role: 'HR 담당자', author: '금융권 인사팀', content: '조직문화 개선을 고민하는 리더들에게 꼭 필요한 교육입니다. 만족도가 매우 높습니다.' },
        { role: 'HR 담당자', author: '제조업 HRD', content: '성과 중심의 조직에서 간과하기 쉬운 심리적 요소를 잘 짚어주어 리더들의 변화가 기대됩니다.' }
      ]
    }
  },
  {
    id: 'performance-coaching',
    category: Category.LEADERSHIP,
    title: '1차 원온원 성과코칭',
    subtitle: '직책자 리더십 마스터리 I',
    description: '부서장의 필수 역량인 성과관리와 목표관리를 위한 1:1 면담 스킬을 체계적으로 체득합니다. AI 기반 실시간 피드백 시스템을 활용하여 자신의 코칭 스타일을 진단하고, 다양한 성향의 구성원에게 맞춤형 피드백을 제공하는 훈련을 통해 현업 적용력을 극대화합니다.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1nldeR_h6xw6zx2nFq69O8l_y6qcn2EOJ/view?usp=drive_link',
    details: {
      time: '7H',
      target: '직책자, 부서장',
      method: 'AI Simulation, Role-play',
      curriculum: [
        'M1. [Understand] 성과관리를 위한 리더의 역할과 책임(R&R) 재정립',
        'M2. [Practice] 원온원 리더십 롤플레잉 (40Road 교구를 활용한 상황별 면담)',
        'M3. [Simulation] AI with 원온원 성과코칭 시뮬레이션 (개별 맞춤 피드백)',
        'M4. [Apply] 현업 적용을 위한 구성원별 성과 목표 설정 및 관리 계획'
      ],
      features: [
        '자체 개발 AI 코칭 웹앱을 활용한 객관적 역량 진단 및 실시간 피드백',
        '다양한 난이도와 상황별(저성과자, 고성과자 등) 면담 시나리오 실습',
        '개인별 강약점 분석에 따른 맞춤형 코칭 가이드 리포트 제공',
        '실제 현업 데이터를 활용한 실전 같은 롤플레잉 진행'
      ],
      effects: ['성과 면담 스킬 향상', '구성원 수용성 증대', '데이터 기반 인사 관리'],
      reviews: [
        { role: '교육생', author: '인사팀장', content: 'AI가 내 코칭 대화를 분석해주니 객관적으로 부족한 점을 알 수 있어 충격적이면서도 유익했습니다.' },
        { role: '교육생', author: '생산팀장', content: '평가 면담 때마다 힘들었는데, 구체적인 대화법을 배우니 자신감이 생깁니다.' },
        { role: 'HR 담당자', author: '플랫폼기업 HR', content: 'AI 기술을 접목한 리더십 교육이라 신선했고, 데이터 기반의 피드백이 인상적이었습니다.' },
        { role: 'HR 담당자', author: '바이오기업 교육담당', content: '직책자들의 면담 스킬 향상에 실질적인 도움이 되는 과정입니다.' }
      ]
    }
  },
  {
    id: 'hpt-leadership',
    category: Category.LEADERSHIP,
    title: '2차 하이 퍼포먼스 팀',
    subtitle: '직책자 리더십 마스터리 II',
    description: '팀 성과에 결정적 영향을 미치는 "심리적 안전감"을 체계적으로 관리하고 조성하는 심화 과정입니다. 구성원들이 두려움 없이 의견을 제시하고 혁신적인 아이디어를 제안할 수 있는 건강한 팀 문화를 형성하여, 지속 가능한 조직 경쟁력을 확보하는 방법을 학습합니다.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1nldeR_h6xw6zx2nFq69O8l_y6qcn2EOJ/view?usp=drive_link',
    details: {
      time: '7H',
      target: '직책자, 부서장',
      method: 'Gamification, AI 진단',
      curriculum: [
        'M1. [Review] 1차 원온원 성과코칭 현업 적용 사례 리뷰 및 피드백',
        'M2. [Concept] 하이 퍼포먼스 팀의 조건 (아리스토텔레스 프로젝트 심화)',
        'M3. [Diagnosis] 우리 팀의 심리적 안전감 진단 및 개선 전략 (AI 활용)',
        'M4. [Culture] 팀 리더십 유형 진단 및 건강한 팀 문화 구축을 위한 Ground Rule'
      ],
      features: [
        '게임 메커니즘을 통해 심리적 안전감의 중요성을 체감하는 조직문화 체험',
        'AI 진단 도구를 활용한 팀별/개인별 리더십 스타일 정밀 분석',
        '실제 팀 운영에 바로 적용 가능한 Ground Rule 수립 워크숍',
        '지속적인 팀 성장을 위한 단계별 로드맵 설계'
      ],
      effects: ['소통하는 조직문화 구축', '창의적 문제해결 촉진', '팀 회복탄력성 강화'],
      reviews: [
        { role: '교육생', author: '디자인 실장', content: '팀원들이 왜 침묵하는지 알게 되었습니다. 안전한 팀 분위기를 만드는 방법을 배워갑니다.' },
        { role: '교육생', author: '마케팅 본부장', content: '성과만 강조하던 저를 돌아보게 되었습니다. 심리적 안전감이 성과의 기반임을 깨달았습니다.' },
        { role: 'HR 담당자', author: '금융그룹 HRD', content: '조직진단과 연계하여 진행하기 좋은 프로그램입니다. 리더들의 인식 변화가 뚜렷합니다.' },
        { role: 'HR 담당자', author: '스타트업 인사총괄', content: '경직된 조직문화를 유연하게 바꾸고 싶은 기업에 강력 추천합니다.' }
      ]
    }
  },
  {
    id: 'strategic-leadership',
    category: Category.LEADERSHIP,
    title: '3차 전략적 의사결정',
    subtitle: '직책자 리더십 마스터리 III',
    description: '불확실하고 복잡한 비즈니스 환경에서 데이터와 프레임워크를 기반으로 최적의 의사결정을 내리는 전략적 리더십 과정입니다. 부서의 비전과 중장기 전략을 수립하고, 이를 달성하기 위한 자원 배분과 리스크 관리 능력을 함양하여 조직의 미래를 이끄는 리더로 성장합니다.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1nldeR_h6xw6zx2nFq69O8l_y6qcn2EOJ/view?usp=drive_link',
    details: {
      time: '7H',
      target: '직책자, 부서장',
      method: 'Simulation, Framework 실습',
      curriculum: [
        'M1. [Strategy] 탁월한 리더의 목표달성 전략 및 업스트림 사고법',
        'M2. [Decision] 전략적 의사결정 시뮬레이션 (AI 활용 비즈니스 케이스)',
        'M3. [Framework] 필수 전략 프레임워크 실습 (SWOT, 3C, BCG Matrix 등)',
        'M4. [Roadmap] 부서 비전 수립 및 중장기 전략 실행 로드맵 작성'
      ],
      features: [
        '실제 비즈니스 케이스 기반의 고밀도 의사결정 시뮬레이션',
        '실무에 즉시 활용 가능한 전략 분석 도구(Framework) 마스터',
        'AI를 활용한 거시적 환경 분석 및 인사이트 도출 훈련',
        '부서의 중장기 비전을 구체화하고 공유하는 전략적 커뮤니케이션 학습'
      ],
      effects: ['전략적 사고 능력 강화', '합리적 의사결정 체계 확립', '비즈니스 통찰력 증대'],
      reviews: [
        { role: '교육생', author: '전략기획팀장', content: '매번 감으로 결정하던 것을 데이터와 프레임워크로 분석하니 확신이 생깁니다.' },
        { role: '교육생', author: '해외영업팀장', content: '부서의 3년 후 모습을 그려보고 로드맵을 짜보는 시간이 매우 유익했습니다.' },
        { role: 'HR 담당자', author: '대기업 인재육성팀', content: '임원 승진을 앞둔 리더들에게 꼭 필요한 전략적 사고 훈련 과정입니다.' },
        { role: 'HR 담당자', author: '중견기업 교육담당', content: '시뮬레이션을 통해 의사결정의 파급력을 체험하게 하는 방식이 효과적입니다.' }
      ]
    }
  },

  // --- Team & Org ---
  {
    id: 'survival-racing',
    category: Category.TEAM_ORG,
    title: '서바이벌 레이싱 팀빌딩',
    subtitle: '하이퍼포먼스 팀빌딩',
    description: 'F1 레이싱 시뮬레이션을 테마로 한 역동적인 팀빌딩 프로그램입니다. 팀 간의 경쟁(Competition)과 협력(Coopetition)을 동시에 체험하며, 급변하는 환경 속에서 목표 달성을 위해 기민하게 전략을 수정하고 실행하는 애자일 팀워크를 경험합니다. 팀의 승리가 곧 나의 승리임을 깨닫게 합니다.',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1kwCZUlF2UYc9i5TazWrur2eUmX6HBsds/view?usp=drive_link',
    details: {
      time: '4H',
      target: '전 임직원',
      method: 'Gamification (보드게임)',
      curriculum: [
        'M1. [Team Setup] 오프닝 & 레이싱 팀 창단 (역할 분담 및 전략 수립)',
        'M2. [Racing] Survival Team Racing (라운드별 미션 수행 및 자원 관리)',
        'M3. [Dynamics] 경쟁과 협력의 딜레마 상황에서의 의사결정과 시너지',
        'M4. [Feedback] 우승 팀 분석 및 조직 시사점 도출 (피드백 & 랩업)'
      ],
      features: [
        '자체 제작된 고퀄리티 레이싱 게임 교구를 활용한 몰입감 넘치는 활동',
        '부서 이기주의를 타파하고 전사적 관점(Big Picture)을 갖게 하는 설계',
        '공동의 목표 달성을 통한 강렬한 성취감과 팀워크 강화',
        '역동적인 분위기 속에서 자연스럽게 형성되는 동료애와 소통'
      ],
      effects: ['팀 응집력 강화', '전략적 사고 및 실행력 향상', '조직 활성화'],
      reviews: [
        { role: '교육생', author: '영업팀 대리', content: '시간 가는 줄 모르고 몰입했습니다. 우리 팀의 단합력이 이렇게 좋은 줄 몰랐어요!' },
        { role: '교육생', author: '연구원', content: '경쟁하면서도 다른 팀과 협력해야 이길 수 있다는 점이 실제 업무와 비슷해서 인상 깊었습니다.' },
        { role: 'HR 담당자', author: '자동차 부품사 HR', content: '활동적이면서도 메시지가 분명한 팀빌딩을 찾았는데 딱입니다. 직원들 반응이 뜨거웠습니다.' },
        { role: 'HR 담당자', author: 'IT스타트업 컬처팀', content: '단순한 놀이가 아니라 전략과 협업이 필요한 고품격 팀빌딩 프로그램입니다.' }
      ]
    }
  },
  {
    id: 'running-man',
    category: Category.TEAM_ORG,
    title: '런닝맨 투자의 귀재들',
    subtitle: '신뢰 기반 소통협업',
    description: '인기 예능 포맷을 차용한 팀빌딩으로, 팀원 간의 정보 공유와 전략적 협상을 통해 최적의 투자를 이끌어내는 게임입니다. 불확실한 정보 상황에서 동료를 믿고 협력하는 과정이 필수적이며, 이를 통해 조직 내 신뢰 자산(Trust Capital)의 중요성을 몸소 체험합니다.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1nr1LhzCvRznRdpy-DUqWYZOh8wsgMIpV/view?usp=drive_link',
    details: {
      time: '4H',
      target: '전 임직원',
      method: 'Gamification',
      curriculum: [
        'M1. [Ice Breaking] 팀 편성, 투자 룰 소개 및 라포 형성',
        'M2. [Investment] 신뢰 기반 런닝맨 (1~4라운드 투자 및 미션 수행)',
        'M3. [Negotiation] 정보 비대칭 상황에서의 정보 공유와 협상 시뮬레이션',
        'M4. [Insight] 최종 투자 결과 발표 및 신뢰 자본의 중요성 피드백'
      ],
      features: [
        '정보 공유와 협업이 성과에 미치는 영향을 직관적으로 체험',
        'Win-Win 전략의 중요성과 경쟁보다 협력의 가치 체득',
        '활동적인 미션 수행과 재미 요소를 결합한 높은 참여도',
        '투자와 협상이라는 흥미로운 소재로 경제 관념과 소통 역량 동시 함양'
      ],
      effects: ['소통 활성화', '동료애 및 신뢰 형성', '협상 및 설득 능력 향상'],
      reviews: [
        { role: '교육생', author: '증권사 사원', content: '투자와 게임을 접목해서 너무 재밌었습니다. 정보를 공유할수록 수익이 난다는 교훈이 좋았습니다.' },
        { role: '교육생', author: '공공기관 주임', content: '타 부서 직원들과 웃고 떠들며 자연스럽게 친해질 수 있는 최고의 시간이었습니다.' },
        { role: 'HR 담당자', author: '금융권 교육담당', content: '신입사원 입문 교육에 활용했는데, 아이스브레이킹 효과가 확실합니다.' },
        { role: 'HR 담당자', author: '유통업 HR팀', content: '활동적이면서도 교육적인 메시지가 담겨 있어 워크숍 프로그램으로 안성맞춤입니다.' }
      ]
    }
  },
  {
    id: 'one-team-genius',
    category: Category.TEAM_ORG,
    title: '원팀! 더 지니어스',
    subtitle: '집단지성의 힘',
    description: '개인의 천재성보다 뛰어난 팀의 집단지성을 경험하는 프로그램입니다. 복잡한 문제를 해결하기 위해 팀원들이 각자의 강점을 발휘하고 서로의 아이디어를 연결하는 과정을 통해, "함께할 때 더 똑똑해진다"는 진리를 깨닫고 협력의 시너지를 극대화합니다.',
    image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1idEPEbgC56i730ABvJk1SBEG3ka0NoTi/view?usp=drive_link',
    details: {
      time: '3H',
      target: '전 임직원',
      method: 'Gamification',
      curriculum: [
        'M1. [Networking] 팀 네트워킹 (너와 나에서 우리로, 관계 형성)',
        'M2. [Intelligence] 1인의 천재 vs 팀 집단지성 대결 (문제해결 게임)',
        'M3. [Synergy] HPT(High Performance Team) 액티비티 (협력 미션)',
        'M4. [Balance] 성과균형관리(PBW) 피드백 및 원팀 마인드셋 고취'
      ],
      features: [
        '1+1+1+1 > 4가 되는 집단지성의 시너지를 직접 체험',
        '전용 교구 활용으로 몰입도를 높이고 구성원 간 상호작용 촉진',
        '개인의 역할을 넘어 팀 전체의 목표에 기여하는 조직 몰입도 강화',
        '논리적 문제해결과 창의적 발상을 동시에 요하는 두뇌 트레이닝'
      ],
      effects: ['집단지성 활용 능력 향상', '팀워크 및 소속감 고취', '수평적 소통 문화 확산'],
      reviews: [
        { role: '교육생', author: '연구원', content: '혼자 풀 수 없는 문제를 팀원들과 함께 해결했을 때의 짜릿함이 잊혀지지 않습니다.' },
        { role: '교육생', author: '마케터', content: '서로의 강점이 다르다는 것을 인정하고 활용하는 법을 배웠습니다. 진정한 원팀이 된 것 같아요.' },
        { role: 'HR 담당자', author: '제약회사 HR', content: '팀 시너지를 경험하게 하는 데 가장 효과적인 프로그램입니다. 구성원들 만족도가 높습니다.' },
        { role: 'HR 담당자', author: 'IT기업 인사팀', content: '지적인 자극과 재미를 동시에 주는 스마트한 팀빌딩 과정입니다.' }
      ]
    }
  },
  {
    id: 'fearless-org',
    category: Category.TEAM_ORG,
    title: '두려움 없는 조직 만들기',
    subtitle: '심리적 안전감 워크숍',
    description: '구성원들이 두려움 없이 의견을 내고 실패에서 배울 수 있는 "심리적 안전감"을 구축하는 워크숍입니다. 조직 내 침묵 문화를 진단하고, 솔직한 대화와 피드백이 오가는 문화를 만들기 위한 구체적인 그라운드 룰을 함께 수립합니다.',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1rQgvsL164OEvoAbpttTer7qImAbGtmyR/view?usp=drive_link',
    details: {
      time: '2H ~ 4H',
      target: '전 임직원, 팀 단위',
      method: '진단, 워크숍, 토의',
      curriculum: [
        'M1. [Diagnosis] 침묵하는 조직 vs 목소리 내는 조직 (자가/팀 진단)',
        'M2. [Analysis] 심리적 안전감을 저해하는 요인 분석 및 토의',
        'M3. [Activity] Team Activity: 모여보세요 회의합시다 (모의 회의)',
        'M4. [Solution] 우리 팀만의 심리적 안전감 Ground Rule 수립 및 선언'
      ],
      features: [
        '하버드대 에이미 에드먼슨 교수의 이론을 기반으로 한 체계적 프로그램',
        '실질적인 조직 문화 개선을 위한 팀 단위의 심층 토의 및 합의',
        '상호 존중과 신뢰를 바탕으로 한 혁신적인 조직 문화의 토대 마련',
        '현업에서 즉시 실천 가능한 구체적인 행동 약속 도출'
      ],
      effects: ['솔직한 의사소통 촉진', '실패 학습 문화 조성', '조직 혁신 가속화'],
      reviews: [
        { role: '교육생', author: '개발팀 파트장', content: '우리 팀이 왜 조용한지 알게 되었습니다. 이제는 실수를 두려워하지 않고 말할 수 있을 것 같습니다.' },
        { role: '교육생', author: '경영지원팀 사원', content: '상사 눈치 보지 않고 의견을 낼 수 있는 분위기가 얼마나 중요한지 깨달았습니다.' },
        { role: 'HR 담당자', author: '스타트업 피플팀', content: '경직된 조직문화를 유연하게 바꾸기 위한 첫걸음으로 최고의 워크숍입니다.' },
        { role: 'HR 담당자', author: '대기업 조직문화팀', content: '이론적 배경과 실제적인 활동이 잘 어우러져 구성원들의 공감을 이끌어냈습니다.' }
      ]
    }
  },
  {
    id: 'red-team',
    category: Category.TEAM_ORG,
    title: '청렴윤리 Red Team',
    subtitle: '윤리적 딜레마와 의사결정',
    description: '조직의 취약점을 공격하는 가상의 적군(Red Team) 역할을 수행하며 조직 내 잠재된 윤리적 리스크를 찾아내고 해결하는 역발상 윤리 교육입니다. 딱딱한 주입식 교육에서 벗어나, 딜레마 상황 시뮬레이션을 통해 올바른 판단 기준을 세우고 청렴한 조직문화를 내재화합니다.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1L5J2_0LWz1EX3rQcK2gVXJOfqp05dsX9/view?usp=drive_link',
    details: {
      time: '2H ~ 4H',
      target: '전 임직원',
      method: 'Role-play, Gamification',
      curriculum: [
        'M1. [Awareness] 윤리적 인간 (Ethical Human) 진단 및 H팩터 심리학',
        'M2. [Simulation] Red Team 게임 (공정평가위원회 입찰 비리 시뮬레이션)',
        'M3. [Reflection] 비윤리적 친조직 행동(UPB)의 위험성과 심리적 기제',
        'M4. [Commitment] 청렴한 조직문화 구축을 위한 나의 다짐 및 액션플랜'
      ],
      features: [
        '재미있는 게임 형태로 배우는 몰입도 높은 참여형 윤리 교육',
        '심리학적 접근(H팩터, 해석수준 이론 등)을 통한 깊이 있는 행동 분석',
        '실제 발생 가능한 리스크를 사전 체험하여 조직의 위기 관리 역량 강화',
        '도덕적 민감성을 높이고 올바른 의사결정 기준을 확립하는 훈련'
      ],
      effects: ['윤리 의식 고취', '컴플라이언스 준수 생활화', '조직 리스크 예방'],
      reviews: [
        { role: '교육생', author: '구매팀 대리', content: '윤리 교육은 지루할 줄 알았는데, 레드팀 게임을 통해 딜레마 상황을 직접 겪어보니 많은 것을 느꼈습니다.' },
        { role: '교육생', author: '영업팀 과장', content: '관행적으로 하던 일들이 얼마나 위험할 수 있는지 깨달았습니다. 스스로를 돌아보는 계기가 되었습니다.' },
        { role: 'HR 담당자', author: '공공기관 감사팀', content: '기존의 주입식 청렴 교육과는 차원이 다릅니다. 직원들의 참여도와 만족도가 매우 높습니다.' },
        { role: 'HR 담당자', author: '금융권 준법감시팀', content: '실질적인 행동 변화를 이끌어내는 윤리 교육을 찾는다면 이 프로그램을 추천합니다.' }
      ]
    }
  },

  // --- Communication ---
  {
    id: 'workplace-comm',
    category: Category.COMMUNICATION,
    title: 'Workplace Communication',
    subtitle: '조직심리학 기반 소통',
    description: '업무 현장에서 빈번하게 발생하는 갈등을 해결하고 협력을 이끌어내는 실전 커뮤니케이션 과정입니다. 건설적인 피드백(Constructive Feedback) 기술과 상대방의 심리를 배려하는 감성 소통 스킬을 훈련하여, 상호 존중과 신뢰를 바탕으로 한 생산적인 업무 관계를 구축합니다.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1MGzzI_0uGevaUFLOy36CkpbNtn_MQ99O/view?usp=drive_link',
    details: {
      time: '3H ~ 6H',
      target: '전 임직원',
      method: 'PBL, 롤플레잉',
      curriculum: [
        'M1. [Feedback] Constructive One on One Feedback 실습 (40Road)',
        'M2. [Emotion] Emotional Communication (비방경담 vs 요인존대 대화법)',
        'M3. [Safety] 심리적 안전감을 높이는 3쿠션(긍정/쿠션/배려) 대화법',
        'M4. [Role-play] 상황별(지시, 보고, 거절, 요청) 커뮤니케이션 롤플레잉'
      ],
      features: [
        '40Road 피드백 스킬 교구를 활용한 체계적인 대화 훈련',
        '현업 적용도가 높은 쿠션 언어와 화법을 집중적으로 학습',
        '관계 갈등을 예방하고 해결하는 실질적인 소통 솔루션 제공',
        '자신의 소통 스타일을 진단하고 개선하는 맞춤형 피드백'
      ],
      effects: ['갈등 비용 감소', '업무 협조 원활화', '긍정적 조직 분위기 조성'],
      reviews: [
        { role: '교육생', author: '서비스팀 대리', content: '거절하기가 항상 어려웠는데 쿠션 화법을 배우고 나니 훨씬 수월해졌습니다.' },
        { role: '교육생', author: '개발팀 팀장', content: '팀원들에게 피드백 주는 게 두려웠는데, 건설적으로 말하는 법을 익혀 자신감이 생겼습니다.' },
        { role: 'HR 담당자', author: 'IT기업 인사팀', content: '사내 소통 문화를 개선하는 데 큰 도움이 되었습니다. 직원들이 서로 배려하는 게 느껴집니다.' },
        { role: 'HR 담당자', author: '병원 교육담당', content: '감정 노동이 심한 직원들에게 힐링과 스킬업을 동시에 주는 좋은 교육입니다.' }
      ]
    }
  },
  {
    id: 'collab-synergy',
    category: Category.COMMUNICATION,
    title: 'Collaboration Synergy',
    subtitle: '사일로 타파 협업 촉진',
    description: '조직 내 부서 간 장벽(Silo)을 허물고 전사적 관점에서의 협업을 촉진하는 프로그램입니다. 타 부서의 업무와 고충을 이해하고, 공동의 목표 달성을 위해 자원과 정보를 공유하는 협업 시뮬레이션을 통해 "One Team" 마인드셋을 확립합니다.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/183GRqylsOl4AZsaLYJBu-C8fpdJknB8L/view?usp=drive_link',
    details: {
      time: '7H',
      target: '전 임직원',
      method: 'Gamification, PBL',
      curriculum: [
        'M1. [Intro] 조직 전략과 공유의 수준, 협업의 필요성 인식',
        'M2. [Simulation] 협업 시뮬레이션 (사우디 TFT 수주 미션 - 부서 간 협상)',
        'M3. [Diagnosis] 사일로(Silo) 효과 진단 및 4대 협업 장벽(NIH 등) 타파',
        'M4. [Expansion] PBW 협업 게임을 통한 신규시장 개척 및 성과 창출'
      ],
      features: [
        'NIH, 독점 등 조직 내 협업을 방해하는 4대 장벽 정밀 진단 및 해소',
        '인터그룹(Inter-group) 커뮤니케이션 활성화를 통한 시너지 창출',
        '부분 최적화가 아닌 전체 최적화를 지향하는 전사적 관점 함양',
        '부서 간 이해와 공감을 높이는 역할 교환(Role Reversal) 활동'
      ],
      effects: ['부서 간 갈등 해소', '업무 프로세스 효율화', '전사적 목표 달성 기여'],
      reviews: [
        { role: '교육생', author: '영업팀 과장', content: '타 부서가 왜 그렇게 행동했는지 이제야 이해가 갑니다. 앞으로는 더 잘 협조할 수 있을 것 같아요.' },
        { role: '교육생', author: '지원팀 대리', content: '협업 시뮬레이션을 통해 우리 회사의 사일로 현상을 객관적으로 볼 수 있었습니다.' },
        { role: 'HR 담당자', author: '제조업 HR팀', content: '부서 이기주의로 고민이 많았는데, 이 교육으로 벽이 많이 허물어졌습니다.' },
        { role: 'HR 담당자', author: '그룹사 연수원', content: '계열사 간 협업 워크숍으로 진행했는데 반응이 폭발적이었습니다. 추천합니다.' }
      ]
    }
  },
  {
    id: 'generation-gap',
    category: Category.COMMUNICATION,
    title: '세대공감 소통',
    subtitle: '소통 블랙박스를 열어라!',
    description: 'X세대부터 Z세대까지, 다양한 세대가 공존하는 조직에서 서로의 가치관과 업무 스타일의 차이를 이해하고 존중하는 문화를 만듭니다. 세대 갈등을 유발하는 상황을 시뮬레이션하고, 이를 긍정적인 에너지로 전환하는 소통법을 익혀 세대 융합 시너지를 창출합니다.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1RxiX6ClEhE5ZMyHdjKNVrQCP7u4cFzxa/view?usp=drive_link',
    details: {
      time: '3H ~ 4H',
      target: '전 임직원',
      method: 'Gamification, 상황극',
      curriculum: [
        'M1. [Empathy] 협업 드로잉 & 세대차이 공감 게임 (너도?나도!)',
        'M2. [Conflict] 현장 블랙박스 (세대 갈등 상황 시뮬레이션 및 원인 분석)',
        'M3. [Solution] 사.감.바 대화법 (사실/감정/바램)을 활용한 갈등 해결',
        'M4. [Harmony] 감사로 관계 맺기 및 세대 융합을 위한 실천 다짐'
      ],
      features: [
        '전용 보드게임 및 카드를 활용하여 무거운 주제를 재미있게 풀어나감',
        '실제 현장 사례 중심의 리얼한 롤플레잉으로 공감대 형성',
        '상호 비난이 아닌 상호 이해와 존중을 이끌어내는 긍정적 접근',
        '세대 간 공통 분모를 찾고 연결고리를 만드는 화합의 장 마련'
      ],
      effects: ['세대 갈등 완화', '상호 존중 문화 정착', '조직 내 소통 활성화'],
      reviews: [
        { role: '교육생', author: '50대 부장', content: '요즘 젊은 친구들 생각을 도무지 알 수 없었는데, 게임을 하며 자연스럽게 이해하게 되었습니다.' },
        { role: '교육생', author: '20대 사원', content: '부장님들도 우리와 같은 고민을 하고 계시다는 걸 알게 되어 마음이 열렸습니다.' },
        { role: 'HR 담당자', author: '공기업 인사팀', content: '세대 갈등으로 인한 퇴사율이 높았는데, 이 교육으로 소통의 물꼬를 트는 계기가 되었습니다.' },
        { role: 'HR 담당자', author: '유통기업 교육담당', content: '서로 다르다는 것을 인정하고 존중하는 분위기가 만들어졌습니다. 감사합니다.' }
      ]
    }
  },
  {
    id: 'collaborative-comm',
    category: Category.COMMUNICATION,
    title: '협력적 커뮤니케이션',
    subtitle: '정서적 관계 & 업무 소통',
    description: '팀 역동성과 조직심리학에 기반하여 수평적이고 협력적인 팀 문화를 만드는 종합 커뮤니케이션 과정입니다. 개인 간의 정서적 소통(Inter-personal)부터 팀 간의 업무적 소통(Inter-group)까지, 조직 내 소통의 전 영역을 다루며 생산적인 회의와 협업을 이끄는 스킬을 배양합니다.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1yVirj_NaV9k9VF63ZYP1frqKXb_cfxRK/view?usp=drive_link',
    details: {
      time: '7H',
      target: '전 임직원',
      method: 'PBL, 시뮬레이션',
      curriculum: [
        'M1. [Listening] 소통의 시작 (자기오픈 & 공감적 경청 훈련)',
        'M2. [Emotion] 감성적 커뮤니케이션 (플러스 감정 대화법, 비방경담 vs 요인존대)',
        'M3. [Safety] 심리적 안전감을 높이는 협력적 소통과 회의 기술',
        'M4. [Logic] 이성적 커뮤니케이션 (팀 간 협업 및 설득 논리 구성)'
      ],
      features: [
        '개인과 조직 차원의 소통 역량을 통합적으로 향상시키는 커리큘럼',
        '경청, 공감, 설득의 3박자 스킬을 체득하는 실습 중심 교육',
        '집단지성을 이끌어내고 회의 생산성을 높이는 퍼실리테이션 스킬 습득',
        '업무 효율을 높이는 명확하고 간결한 비즈니스 커뮤니케이션 훈련'
      ],
      effects: ['수평적 소통 문화 확산', '회의 및 업무 효율 증대', '협력적 조직 분위기 조성'],
      reviews: [
        { role: '교육생', author: '기획팀 대리', content: '회의 시간이 줄어들고 결론은 명확해졌습니다. 협력적 소통의 힘을 느꼈습니다.' },
        { role: '교육생', author: '연구소 책임', content: '감정적인 소모 없이 업무적으로 소통하는 방법을 배워 스트레스가 줄었습니다.' },
        { role: 'HR 담당자', author: '외국계기업 HR', content: '수평적인 문화를 지향하는 우리 회사에 딱 맞는 커뮤니케이션 교육입니다.' },
        { role: 'HR 담당자', author: '중견기업 인사팀', content: '직원들 간의 유대감이 강화되고 업무 협조가 원활해진 것이 눈에 보입니다.' }
      ]
    }
  },

  // --- Problem & Strategy ---
  {
    id: '3rd-factory',
    category: Category.PROBLEM_STRATEGY,
    title: 'PBL기반 문제해결(제3공장 화재사고)',
    subtitle: '문제해결 시뮬레이션',
    description: '가상의 공장 화재 사고를 배경으로 한 몰입도 높은 시나리오 속에서 현상 파악, 원인 분석, 대안 도출, 실행 계획 수립에 이르는 논리적 문제해결 프로세스(PBL)를 체득합니다. 쏟아지는 정보 속에서 팩트를 선별하고, 논리적 도구를 활용해 근본 원인을 찾아 해결하는 분석적 사고력을 기릅니다.',
    image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1d6Vm4wIRAta4opQi8-wJtchSoZ923Xej/view?usp=drive_link',
    details: {
      time: '3H ~ 4H',
      target: '전 임직원',
      method: 'Game Learning, PBL',
      curriculum: [
        'M1. [Define] 현상과 문제의 분리 및 핵심 문제 정의',
        'M2. [Analyze] 진짜 문제 발견과 근본 원인 분석 (5Why, Logic Tree 활용)',
        'M3. [Solution] 창의적 대안 탐색 및 최적안 의사결정 (Brain Trust)',
        'M4. [Report] 재발방지대책 보고서 작성 및 발표 (논리적 설득)'
      ],
      features: [
        '실제 사고 조사관이 된 듯한 몰입도 높은 시나리오 기반 학습',
        '데이터와 팩트에 기반한 분석적 사고(Fact Base Thinking) 훈련',
        '편견을 배제하고 원점에서 다시 생각하는 제로베이스 사고 함양',
        '다양한 문제해결 툴(Tool)을 실습하며 현업 적용 능력 배양'
      ],
      effects: ['문제해결 능력 향상', '분석적/논리적 사고 강화', '보고서 작성 능력 증대'],
      reviews: [
        { role: '교육생', author: '품질관리팀 사원', content: '복잡한 문제를 어떻게 접근해야 할지 막막했는데, 프로세스를 배우니 길이 보입니다.' },
        { role: '교육생', author: '생산기술팀 과장', content: '실제 현장과 유사한 사례라 몰입도가 높았습니다. 5Why 기법을 제대로 익혔습니다.' },
        { role: 'HR 담당자', author: '제조업 교육담당', content: '문제해결 과정을 이렇게 재미있게 풀 수 있다니 놀랍습니다. 필수 교육으로 지정했습니다.' },
        { role: 'HR 담당자', author: '화학기업 HR팀', content: '직원들의 논리적 사고력이 눈에 띄게 향상되었습니다. 보고서 퀄리티가 달라졌습니다.' }
      ]
    }
  },
  {
    id: 'strategic-decision',
    category: Category.PROBLEM_STRATEGY,
    title: '전략적 의사결정',
    subtitle: '게임이론과 데이터 분석',
    description: '불확실한 비즈니스 환경에서 감이 아닌 데이터와 논리에 기반하여 최적의 선택을 하는 방법을 배웁니다. 게임이론과 전략적 사고 프레임워크를 활용하여 경쟁 상황을 분석하고, 리스크를 최소화하며 이익을 극대화하는 의사결정 역량을 강화합니다.',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/14pGutIOnt7oRCBYCdhTk4emv-LjYbuaf/view?usp=drive_link',
    details: {
      time: '4H ~ 6H',
      target: '기획, 전략, 영업, 마케팅',
      method: 'Gamification, Case Study',
      curriculum: [
        'M1. [Theory] 게임이론의 이해 (세 명의 총잡이, 마이너스 경매 게임)',
        'M2. [Analysis] 3C 분석과 마켓 포지셔닝 전략 수립',
        'M3. [Strategy] SWOT 분석을 통한 차별화 전략 도출 및 적용',
        'M4. [Practice] 시장개척 앤소프 매트릭스 활용 및 의사결정 시뮬레이션'
      ],
      features: [
        '수학적/논리적 모델을 활용한 정량적 의사결정 훈련',
        '경쟁 우위 확보를 위한 시장 분석 및 전략 수립 프로세스 마스터',
        '현업의 난제를 해결할 수 있는 다양한 전략 프레임워크 습득',
        '상대방의 수를 예측하고 대응하는 게임이론 기반의 전략적 사고 배양'
      ],
      effects: ['합리적 의사결정 능력 함양', '전략적 기획 역량 강화', '시장 경쟁력 확보'],
      reviews: [
        { role: '교육생', author: '전략기획팀 대리', content: '게임이론을 통해 의사결정의 원리를 쉽게 이해했습니다. 실무에 바로 써먹을 수 있겠어요.' },
        { role: '교육생', author: '영업팀 과장', content: '경쟁사 분석과 시장 대응 전략을 짜는 데 큰 도움이 되었습니다.' },
        { role: 'HR 담당자', author: '금융권 인재개발팀', content: '직원들의 의사결정 수준을 한 단계 높여주는 고퀄리티 과정입니다.' },
        { role: 'HR 담당자', author: '유통기업 HRD', content: '전략적 사고가 무엇인지 확실하게 보여주는 교육입니다. 만족도가 높습니다.' }
      ]
    }
  },
  {
    id: 'strategic-new-biz',
    category: Category.PROBLEM_STRATEGY,
    title: '전략적 신사업 기획',
    subtitle: '린 캔버스(Lean Canvas) 활용',
    description: '스타트업의 기민한 기획 방식인 린 캔버스(Lean Canvas)를 활용하여 신사업 아이디어를 빠르고 구체적으로 기획합니다. 고객의 문제에서 출발하여 솔루션, 수익 모델, 경쟁 우위 등을 체계적으로 구조화하고, 가설 검증을 통해 비즈니스 모델의 타당성을 확보하는 실전 기획 과정입니다.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1MpEAn6Jz3fFxxni87bFxAf4T4xOGnSOI/view?usp=drive_link',
    details: {
      time: '8H',
      target: '기획, 신사업, 마케팅',
      method: 'Workshop, Framework 실습',
      curriculum: [
        'M1. [Process] 기획의 3P (Planning, Proposal, Presentation) 이해',
        'M2. [Framework] 린 캔버스 9블록의 이해와 성공 사례 분석',
        'M3. [Workshop] 신사업/신제품 개발 기획 실습 (아이디어 구체화)',
        'M4. [Pitching] 투자 유치를 위한 기획서 작성 및 엘리베이터 피치'
      ],
      features: [
        '빠른 가설 검증과 피드백 루프(Loop)를 통한 애자일한 기획 학습',
        '복잡한 비즈니스 모델을 한 장으로 시각화하고 구조화하는 훈련',
        '실전과 유사한 환경에서의 기획서 작성 및 발표(Pitching) 경험',
        '성공적인 비즈니스 모델 사례 분석을 통한 인사이트 획득'
      ],
      effects: ['신사업 기획 역량 강화', '비즈니스 모델링 능력 향상', '설득력 있는 제안 스킬 습득'],
      reviews: [
        { role: '교육생', author: '신사업팀 팀장', content: '머릿속에만 있던 아이디어를 린 캔버스로 정리하니 사업의 핵심이 명확해졌습니다.' },
        { role: '교육생', author: '상품기획 MD', content: '실패를 줄이고 성공 확률을 높이는 기획 방법을 배웠습니다. 매우 실용적입니다.' },
        { role: 'HR 담당자', author: '벤처기업 HR', content: '스타트업 방식의 일하는 문화를 도입하고 싶은 기업에 강력 추천합니다.' },
        { role: 'HR 담당자', author: '식품기업 교육담당', content: '신제품 기획 역량 강화를 위해 도입했는데, 결과물의 수준이 달라졌습니다.' }
      ]
    }
  },
  {
    id: 'customer-value',
    category: Category.PROBLEM_STRATEGY,
    title: '고객가치창출 로드맵',
    subtitle: 'Customer Journey Map',
    description: '고객의 관점에서 제품과 서비스를 경험하고, 고객의 여정(Journey)을 따라가며 페인포인트(Pain Point)를 발굴합니다. 발견된 문제점을 개선하고 고객에게 감동을 주는 차별화된 가치를 창출하기 위한 서비스 디자인 씽킹 프로세스를 경험하며 고객 중심 사고를 내재화합니다.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1OGy80bSHREJJjMzSFuF9CcMm_NPda2va/view?usp=drive_link',
    details: {
      time: '3H ~ 4H',
      target: '영업, 마케팅, 서비스, 기획',
      method: 'Simulation, Workshop',
      curriculum: [
        'M1. [Empathy] 고객 마음의 소리 (페르소나 설정 및 공감하기)',
        'M2. [Visualize] 고객 여정 지도 (Customer Journey Map) 그리기 및 분석',
        'M3. [Solution] MOT(진실의 순간) 분석 및 서비스 개선 아이디어 도출',
        'M4. [Mindset] 고객 가치 중심의 서비스 마인드 함양 및 실천 다짐'
      ],
      features: [
        '전용 교구(대형 맵)를 활용한 협업 기반의 시각적 로드맵 작성',
        '고객의 숨겨진 니즈를 파악하는 공감(Empathy) 능력 및 통찰력 향상',
        '현업에 즉시 적용 가능한 구체적이고 실질적인 개선안 도출',
        '서비스 접점별 고객 경험을 최적화하는 전략적 사고 배양'
      ],
      effects: ['고객 중심 사고 강화', '서비스 품질 향상', '고객 만족도 증대'],
      reviews: [
        { role: '교육생', author: 'CS팀 매니저', content: '고객의 입장이 되어보니 우리가 놓치고 있던 부분이 보였습니다. 바로 개선하겠습니다.' },
        { role: '교육생', author: '영업사원', content: '고객 여정 지도를 그려보며 영업 기회를 포착하는 눈을 키웠습니다.' },
        { role: 'HR 담당자', author: '호텔 인사팀', content: '서비스 마인드를 고취시키는 데 이보다 좋은 교육은 없습니다. 직원들이 즐거워합니다.' },
        { role: 'HR 담당자', author: '보험사 교육담당', content: '고객 경험 관리를 위한 실질적인 도구를 배울 수 있어 유익했습니다.' }
      ]
    }
  },
  {
    id: 'problem-solving-planning',
    category: Category.PROBLEM_STRATEGY,
    title: '문제해결과 전략적 기획력',
    subtitle: 'PBL 기반 종합 역량 강화',
    description: '문제해결 능력과 기획력을 동시에 향상시키는 고밀도 과정입니다. 논리적 사고(Logical Thinking)를 바탕으로 문제를 구조화하고, 창의적 대안을 도출하여 설득력 있는 기획서로 완성하는 전 과정을 마스터합니다. 실무에서 바로 통하는 기획의 정석을 배웁니다.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1y3cLy-WoYKhIE7fefjaBa3xLxuw4eXma/view?usp=drive_link',
    details: {
      time: '8H',
      target: '사원 ~ 과장급',
      method: 'PBL, Workshop',
      curriculum: [
        'M1. [Logic] 전략적 사고와 기획의 3P (Planning, Proposal, Presentation)',
        'M2. [Solve] 제3공장 화재사고 문제해결 시뮬레이션 (원인 분석 및 대안 도출)',
        'M3. [Plan] 프레임워크(린캔버스 등)를 활용한 기획 실습 및 문서화',
        'M4. [Persuade] 상사를 설득하는 보고서 작성법 및 프레젠테이션 스킬'
      ],
      features: [
        '문제해결 프로세스와 기획 프로세스를 통합적으로 학습하여 시너지 창출',
        '실습 중심의 체계적인 커리큘럼으로 문서 작성 및 발표 스킬 동시 습득',
        '논리적 사고를 바탕으로 업무의 본질을 꿰뚫는 통찰력 강화',
        '기획의 전 과정을 한눈에 파악하고 실무에 적용할 수 있는 템플릿 제공'
      ],
      effects: ['기획력 및 보고서 작성 능력 향상', '논리적 커뮤니케이션 강화', '업무 성과 증대'],
      reviews: [
        { role: '교육생', author: '경영지원팀 대리', content: '기획서 작성에 항상 부담을 느꼈는데, 이제는 논리적으로 구조를 잡을 수 있게 되었습니다.' },
        { role: '교육생', author: 'R&D 연구원', content: '복잡한 기술 이슈를 쉽게 설명하고 설득하는 방법을 배웠습니다.' },
        { role: 'HR 담당자', author: '중견기업 인재개발팀', content: '실무 필수 역량을 하루에 마스터할 수 있는 알찬 과정입니다.' },
        { role: 'HR 담당자', author: 'IT기업 HR', content: '직원들의 문서 작성 능력이 눈에 띄게 좋아졌습니다. 감사합니다.' }
      ]
    }
  },

  // --- Work Basics ---
  {
    id: 'business-simulation',
    category: Category.WORK_BASICS,
    title: '기업경영 시뮬레이션',
    subtitle: '경영자 마인드 함양',
    description: '참가자들이 직접 가상의 기업을 설립하고 경영진(C-Level)이 되어 전략 수립, 마케팅, 생산, 판매, 재무 등 경영 전 과정을 체험합니다. 시장 경쟁 속에서 이익을 창출하는 과정을 통해 비즈니스 메커니즘을 이해하고, 회사의 주인처럼 생각하고 행동하는 기업가 정신을 함양합니다.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1imx77NRx9RZpITsO8WD-gjngQrwVgsPq/view?usp=drive_link',
    details: {
      time: '8H',
      target: '신입사원, 승진자, 전 사원',
      method: 'Business Simulation',
      curriculum: [
        'M1. [Mindset] 경영환경의 변화(VUCA)와 기업가정신의 이해',
        'M2. [Simulation] 전략경영 시뮬레이션 (설립~판매, 1기~4기 경영 활동)',
        'M3. [Finance] 재무제표 작성 및 손익 분석 (매출, 이익, 비용 구조 이해)',
        'M4. [Review] 경영 성과 분석, 피드백 및 성공/실패 요인 토의'
      ],
      features: [
        'CEO, CFO, CMO 등 실제 경영진 역할을 수행하며 리더십과 책임감 체험',
        '치열한 시장 경쟁 및 입찰 시스템을 도입하여 실전 같은 몰입감 제공',
        '부분이 아닌 조직 전체를 바라보는 거시적 안목(Big Picture) 배양',
        '재무회계 기초 지식을 게임을 통해 쉽고 재미있게 습득'
      ],
      effects: ['경영 마인드 및 재무 이해도 향상', '전사적 관점 획득', '주인의식 고취'],
      reviews: [
        { role: '교육생', author: '신입사원', content: '회사가 어떻게 돈을 버는지, 내 역할이 왜 중요한지 확실히 알게 되었습니다.' },
        { role: '교육생', author: '승진자 교육생', content: '재무제표가 어렵게만 느껴졌는데 게임을 배우니 이해가 쏙쏙 되네요.' },
        { role: 'HR 담당자', author: '대기업 인재원', content: '신입사원들의 비즈니스 매너와 경영 이해도를 동시에 높일 수 있는 최고의 과정입니다.' },
        { role: 'HR 담당자', author: '중소기업 대표', content: '직원들의 주인의식을 갖고 일하게 만드는 계기가 되었습니다.' }
      ]
    }
  },
  {
    id: 'agile-worksmart',
    category: Category.WORK_BASICS,
    title: 'Agile 워크스마트',
    subtitle: '일 잘하는 방식의 변화',
    description: '단순히 열심히 하는(Work Hard) 것을 넘어 똑똑하게 일하는(Work Smart) 방법을 배웁니다. 변화에 민첩하게 대응하는 애자일(Agile) 업무 방식을 체험하고, 업무 프로세스의 비효율을 제거하여 생산성을 극대화하는 "프로 일잘러"의 마인드셋과 스킬을 장착합니다.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1GolB4mMS3MpVhXV8fzIqCe9OC6_D9yl4/view?usp=drive_link',
    details: {
      time: '6H ~ 8H',
      target: '신입사원, 전 사원',
      method: 'Simulation',
      curriculum: [
        'M1. [Goal] PBW 성과균형 관리 게임 (목표 달성 전략 수립)',
        'M2. [Experience] 워크스마트 시뮬레이션 (1기 비효율 체험 vs 2기 프로세스 개선)',
        'M3. [Concept] Agile의 의미와 효과 (F1 Pit Stop 사례 분석)',
        'M4. [Improvement] 업무 효율화 및 개선 활동 (Retrospective & Action Plan)'
      ],
      features: [
        '계획-실행-피드백의 애자일 사이클을 직접 체험하며 개선의 효과 체감',
        '규격화되고 검증된 교구를 활용하여 업무 성과를 정량적으로 측정',
        '관행적인 비효율을 제거하고 성과 중심의 업무 방식으로 전환 유도',
        '팀 단위의 업무 프로세스 개선 경험을 통해 협업 효율성 증대'
      ],
      effects: ['업무 효율성 및 생산성 향상', '애자일 마인드셋 내재화', '프로세스 개선 역량 강화'],
      reviews: [
        { role: '교육생', author: '생산팀 대리', content: '열심히만 하면 되는 줄 알았는데, 스마트하게 일하는 법을 배우고 충격받았습니다.' },
        { role: '교육생', author: '사무직 사원', content: '업무 프로세스를 개선하니 야근이 줄었습니다. 워라밸을 찾았습니다.' },
        { role: 'HR 담당자', author: '건설사 HR', content: '조직의 일하는 방식을 혁신하고 싶은 기업에게 강력 추천합니다.' },
        { role: 'HR 담당자', author: 'IT기업 인사팀', content: '애자일 방법론을 이론이 아닌 체험으로 익힐 수 있어 효과적이었습니다.' }
      ]
    }
  },
  {
    id: 'cjm-simulation',
    category: Category.WORK_BASICS,
    title: '고객여정지도',
    subtitle: '고객가치 창출 시뮬레이션',
    description: '그림책 "알사탕"을 통해 고객의 속마음을 듣는 공감 훈련부터 시작하여, 고객의 경험을 시각화하는 고객여정지도(CJM)를 직접 그려보는 실습형 과정입니다. 고객 접점에서의 감정과 니즈를 파악하고, 실질적인 서비스 개선 솔루션을 도출하여 고객 중심의 일하는 방식을 체득합니다.',
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800',
    details: {
      time: '3H',
      target: '전 임직원',
      method: 'Simulation, Activity',
      curriculum: [
        'M1. [Empathy] 고객 마음의 소리 (페르소나 설정 및 공감하기)',
        'M2. [Visualize] 고객 여정 지도 (Customer Journey Map) 그리기 및 분석',
        'M3. [Analysis] 고객 여정 경로와 접점 포인트(Pain Point) 분석',
        'M4. [Solution] 고객 문제해결을 위한 솔루션 및 서비스 마인드 함양'
      ],
      features: [
        '그림책 "알사탕"을 활용한 감성적 접근 및 고객 통찰 훈련',
        '전용 교구(Customer Journey Map)를 활용한 체계적인 시각화 실습',
        '고객의 잠재된 불만과 니즈를 찾아내는 심층 분석 기법 습득',
        '현업 적용 가능한 구체적인 서비스 개선 아이디어 도출'
      ],
      effects: ['서비스 마인드 함양', '고객 중심 사고 내재화', '서비스 품질 향상'],
      reviews: [
        { role: '교육생', author: 'CS팀 사원', content: '그림책으로 시작해서 신선했고, 고객의 마음을 이해하는 데 큰 도움이 되었습니다.' },
        { role: '교육생', author: '마케팅 대리', content: '막연했던 고객 경험을 지도로 그려보니 개선해야 할 점이 한눈에 보였습니다.' },
        { role: 'HR 담당자', author: '유통기업 교육담당', content: '직원들의 서비스 마인드를 높이는 데 아주 효과적인 프로그램입니다.' },
        { role: 'HR 담당자', author: '병원 원무과장', content: '고객 접점에 있는 직원들에게 꼭 필요한 교육입니다. 실습 도구가 훌륭합니다.' }
      ]
    }
  },
  {
    id: 'im-solver',
    category: Category.WORK_BASICS,
    title: "성장마인드셋 I'm SOLVER",
    subtitle: '문제해결형 인재 육성',
    description: '자신의 능력을 한계 짓는 고정 마인드셋에서 벗어나, 노력과 학습을 통해 발전할 수 있다는 성장 마인드셋으로 전환합니다. 업무 중 마주하는 난관을 성장의 기회로 삼고, 끈기(GRIT) 있게 도전하여 끝내 문제를 해결해내는 "Problem Solver"로 육성합니다.',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1jw87_n156QAGHuuN2EI8tC76Tywm7IDX/view?usp=drive_link',
    details: {
      time: '3H ~ 8H',
      target: '신입사원, 저연차 사원',
      method: 'PBL, Gamification',
      curriculum: [
        'M1. [Mindset] 성장 마인드셋의 의미와 중요성 (뇌과학 및 심리학 기반)',
        'M2. [Mission] I\'m SOLVER Mission (돌발 업무지시 해결 시뮬레이션)',
        'M3. [Skill] 일잘러의 핵심 스킬: 프로페셔널의 질문력 (BOSS 기법)',
        'M4. [GRIT] 열정과 끈기(GRIT)를 통한 회복탄력성 강화 및 성장 로드맵'
      ],
      features: [
        '스탠퍼드대 캐롤 드웩 교수의 검증된 이론을 바탕으로 한 마인드셋 교육',
        '실제 신입사원이 겪을 법한 업무 상황 시뮬레이션으로 현장감 극대화',
        '수동적인 태도를 버리고 주도적인 인재로 거듭나도록 행동 변화 유도',
        '문제해결 과정에서의 끈기(GRIT)와 도전 정신을 고취시키는 훈련'
      ],
      effects: ['긍정적 태도 및 자신감 함양', '도전 정신 고취', '업무 적응력 향상'],
      reviews: [
        { role: '교육생', author: '신입사원', content: '어려운 업무도 성장할 수 있는 기회라고 생각하니 마음이 편해졌습니다.' },
        { role: '교육생', author: '입사 1년차', content: '질문하는 법을 몰라 헤맸는데, BOSS 기법을 배우고 업무가 명확해졌습니다.' },
        { role: 'HR 담당자', author: '대기업 인재원', content: '신입사원들의 패기와 열정을 되살려주는 에너지 넘치는 교육입니다.' },
        { role: 'HR 담당자', author: '스타트업 HR', content: '문제를 대하는 태도가 달라진 것이 보입니다. 긍정적인 변화가 일어났습니다.' }
      ]
    }
  },
  {
    id: 'new-employee',
    category: Category.WORK_BASICS,
    title: '신입사원 입문과정',
    subtitle: '조직 적응 & 조기 전력화',
    description: '신입사원이 조직의 문화와 가치에 빠르게 녹아들고, 핵심 인재로 성장하기 위한 기초 체력을 다지는 종합 과정입니다. 올바른 직업관과 마인드셋부터 필수 직무 스킬, 비즈니스 매너, 인간관계 형성까지 신입사원에게 필요한 모든 역량을 통합적으로 학습합니다.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1WJtThzFxFnp-08fOmbeVlGeJpq6sf5f2/view?usp=drive_link',
    details: {
      time: '1Day ~ 3Days',
      target: '신입사원, 인턴',
      method: '종합 교육 (PBL, Activity)',
      curriculum: [
        'M1. [Mindset] 성장마인드셋 및 프로 의식 함양 (태도의 힘)',
        'M2. [Communication] 주도적 팔로워의 소통법 및 보고/연락/상담 스킬',
        'M3. [Teamwork] 팀으로 함께 일하기 (협업 게임을 통한 팀십 체득)',
        'M4. [Manner] 직장예절과 비즈니스 매너 실습 (인사, 전화, 이메일 등)'
      ],
      features: [
        '신입사원에게 꼭 필요한 지식, 기술, 태도(K.S.A)를 아우르는 통합 교육',
        '동기 부여 및 소속감 강화를 위한 다양한 참여형 프로그램 구성',
        '이론 교육을 넘어 실무에 즉시 적용 가능한 실습 위주의 커리큘럼',
        'MZ세대의 특성을 반영한 트렌디하고 흥미로운 교육 방식'
      ],
      effects: ['조직 조기 적응', '업무 기본기 확립', '애사심 및 소속감 고취'],
      reviews: [
        { role: '교육생', author: '공채 신입', content: '회사 생활에 대한 막연한 두려움이 사라지고 기대감으로 바뀌었습니다.' },
        { role: '교육생', author: '인턴', content: '비즈니스 매너부터 업무 스킬까지 한 번에 배울 수 있어 정말 유익했습니다.' },
        { role: 'HR 담당자', author: '대기업 채용팀', content: '신입사원들의 눈빛이 달라졌습니다. 현업 부서장님들도 만족해하십니다.' },
        { role: 'HR 담당자', author: '중소기업 인사담당', content: '체계적인 입문 교육 덕분에 신입 사원들의 적응 속도가 빨라졌습니다.' }
      ]
    }
  },
  {
    id: 'instructor-training',
    category: Category.WORK_BASICS,
    title: '사내강사 양성과정',
    subtitle: '창의적 교수법 & 퍼실리테이션',
    description: '조직 내부의 지식과 노하우를 효과적으로 전달할 사내 전문가를 양성합니다. 성인 학습자의 특성을 이해하고, 주의를 집중시키는 오프닝부터 참여를 이끄는 창의적 교수법, 설득력 있는 강의 스킬, 교안 작성법까지 전문 강사로서 갖춰야 할 모든 역량을 마스터합니다.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800',
    downloadLink: 'https://drive.google.com/file/d/1Xd86uzAs5BzEyh7e6M4MNw4b2cgVOmVf/view?usp=drive_link',
    details: {
      time: '16H (2~3일)',
      target: '사내강사, 직무 전문가',
      method: '실습, 코칭, 피드백',
      curriculum: [
        'M1. [Foundation] 사내강사의 역할과 핵심역량 (지식, 스킬, 태도)',
        'M2. [Methodology] 학습 효과를 높이는 창의적 교수법과 학습촉진 스킬',
        'M3. [Design] 논리적인 강의 교안 구조화 및 시각화 자료 작성 기술',
        'M4. [Practice] 실전 모의 강의 시연 및 전문가의 1:1 밀착 피드백'
      ],
      features: [
        '학습자 중심의 참여형 강의법(Spot, Game, Q&A) 집중 전수',
        '개별 강사의 강점과 약점을 정밀 분석하여 맞춤형 코칭 제공',
        '교육 종료 후에도 활용 가능한 템플릿, 도구 등 지속적인 자료 지원',
        '자신감 있는 스피치와 세련된 제스처 등 전달력 강화 훈련'
      ],
      effects: ['강의 전달력 향상', '사내 지식 공유 활성화', '전문가로서의 자긍심 고취'],
      reviews: [
        { role: '교육생', author: '기술팀 과장', content: '강의가 이렇게 재미있을 수 있다니! 배운 기법들을 빨리 써먹고 싶습니다.' },
        { role: '교육생', author: '영업교육 담당', content: '피드백을 통해 제 강의 습관을 고칠 수 있었습니다. 인생 강의였습니다.' },
        { role: 'HR 담당자', author: '사내대학 담당자', content: '사내 강사님들의 강의 수준이 상향 평준화되었습니다. 매년 진행하고 싶습니다.' },
        { role: 'HR 담당자', author: '인재개발원', content: '직무 전문가를 프로 강사로 변신시켜주는 마법 같은 과정입니다.' }
      ]
    }
  },
];

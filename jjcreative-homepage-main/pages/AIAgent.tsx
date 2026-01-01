
import React, { useState } from 'react';
import { Bot, Sparkles, Cpu, Zap, ArrowRight, Rocket, Target, TrendingUp, Lightbulb, Users, Brain, Map, BarChart3, UserCheck, MessageSquare, Star, Activity, Clock, Shield, Compass, TreePine, Timer, Scale, Route, Image, HelpCircle, Layers, Smile, Factory, KeyRound } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 카테고리 정의
type AppCategory = 'all' | 'ai-teambuilding' | 'strategy' | 'leadership' | 'team' | 'learning' | 'development';

const categories: { id: AppCategory; label: string; icon: React.ElementType }[] = [
  { id: 'all', label: 'ALL', icon: Layers },
  { id: 'ai-teambuilding', label: 'AI Teambuilding', icon: Users },
  { id: 'strategy', label: '전략/분석', icon: Target },
  { id: 'leadership', label: '리더십', icon: Compass },
  { id: 'team', label: '팀/조직', icon: Users },
  { id: 'learning', label: '학습/교육', icon: Lightbulb },
  { id: 'development', label: '역량개발', icon: Activity },
];

// AI Agent Apps 데이터 (categories는 배열로 여러 카테고리에 중복 가능)
const aiApps = [
  // === Available Apps ===
  // AI Teambuilding & Strategy
  {
    id: 1,
    name: 'STRATEGIC POSITIONING',
    description: '전략적 포지셔닝 분석과 시장 위치 최적화를 위한 AI 기반 전략 도구입니다.',
    url: 'https://minusproject.vercel.app/',
    icon: Target,
    iconClass: 'text-jjorange',
    bgClass: 'from-jjorange/20',
    status: 'available-auth',
    categories: ['strategy', 'ai-teambuilding'],
  },
  {
    id: 2,
    name: 'Competition Market',
    description: '경쟁 시장 분석 및 시뮬레이션을 통한 전략적 의사결정 지원 도구입니다.',
    url: 'https://1199-simulation.vercel.app/',
    icon: TrendingUp,
    iconClass: 'text-tech-cyan',
    bgClass: 'from-tech-cyan/20',
    status: 'available-auth',
    categories: ['strategy', 'ai-teambuilding'],
  },
  {
    id: 3,
    name: 'SWOT 전략분석 AI Game',
    description: 'SWOT 분석을 게임화하여 전략적 사고력을 향상시키는 AI 기반 학습 도구입니다.',
    url: 'https://swot-225893881303.us-west1.run.app',
    icon: BarChart3,
    iconClass: 'text-emerald-400',
    bgClass: 'from-emerald-400/20',
    status: 'available',
    categories: ['strategy', 'ai-teambuilding', 'learning'],
  },
  // Learning
  {
    id: 4,
    name: '창의적 아이디어 실험실',
    description: 'AI와 함께하는 창의적 아이디어 발상 및 브레인스토밍 실험실입니다.',
    icon: Lightbulb,
    iconClass: 'text-yellow-400',
    bgClass: 'from-yellow-400/20',
    status: 'available',
    categories: ['learning', 'team'],
  },
  {
    id: 5,
    name: 'Learning Infographic AI Agent',
    description: 'AI가 학습 콘텐츠를 분석하여 시각적인 인포그래픽을 자동 생성하는 도구입니다.',
    url: 'https://jjh-infographic-ai.vercel.app',
    icon: Image,
    iconClass: 'text-rose-400',
    bgClass: 'from-rose-400/20',
    status: 'available',
    categories: ['learning'],
  },
  {
    id: 6,
    name: 'Learning Quiz AI Agent',
    description: 'AI가 학습 콘텐츠를 분석하여 자동으로 퀴즈를 생성하고 학습 효과를 측정합니다.',
    url: 'https://learning-quiz-ai.vercel.app',
    icon: HelpCircle,
    iconClass: 'text-sky-400',
    bgClass: 'from-sky-400/20',
    status: 'available',
    categories: ['learning'],
  },
  // Team & AI Teambuilding
  {
    id: 7,
    name: 'AI vs Human Team-building',
    description: 'AI와 인간이 협력하여 팀빌딩 역량을 강화하는 혁신적인 교육 도구입니다.',
    url: 'https://ai-vs-human-jjc.vercel.app/',
    icon: Users,
    iconClass: 'text-purple-400',
    bgClass: 'from-purple-400/20',
    status: 'available-auth',
    categories: ['team', 'ai-teambuilding'],
  },
  {
    id: 8,
    name: '집단지성의 팀 빌딩',
    description: '팀의 집단지성을 활용하여 문제를 해결하는 협업 기반 AI 도구입니다.',
    url: 'https://alpagoteam.vercel.app/',
    icon: Brain,
    iconClass: 'text-green-400',
    bgClass: 'from-green-400/20',
    status: 'available',
    categories: ['team', 'ai-teambuilding'],
  },
  {
    id: 9,
    name: '고객여정지도',
    description: '고객 경험을 시각화하고 터치포인트를 분석하는 AI 기반 고객여정 매핑 도구입니다.',
    url: 'https://gemini.google.com/share/dea707ec9465',
    icon: Map,
    iconClass: 'text-pink-400',
    bgClass: 'from-pink-400/20',
    status: 'available',
    categories: ['strategy'],
  },
  {
    id: 10,
    name: 'AI 캐리커쳐 만들기',
    description: 'AI가 팀원들의 특징을 반영한 재미있는 캐리커쳐를 생성하여 팀빌딩 활동에 활용합니다.',
    url: 'https://aistudio.google.com/prompts/1lSxJevYd',
    icon: Smile,
    iconClass: 'text-amber-400',
    bgClass: 'from-amber-400/20',
    status: 'available',
    categories: ['team', 'ai-teambuilding'],
  },
  // === More Apps ===
  // Team/Org
  { id: 11, name: 'Quinn 조직문화 유형 진단', description: 'Quinn 모델 기반으로 조직문화 유형을 진단하고 개선 방향을 제시하는 AI 도구입니다.', icon: BarChart3, status: 'available', categories: ['team'] },
  { id: 12, name: '팀빌딩 크리에이터', description: '팀 특성에 맞는 맞춤형 팀빌딩 활동을 AI가 자동으로 설계해주는 도구입니다.', icon: Users, status: 'available', categories: ['team', 'ai-teambuilding'] },
  // Leadership
  { id: 13, name: '상황대응 리더십 진단 및 시뮬레이션', description: '상황대응 리더십 스타일을 진단하고 다양한 시나리오로 리더십 역량을 훈련합니다.', icon: Compass, status: 'available', categories: ['leadership'] },
  { id: 14, name: 'One on One 리더십 시뮬레이션', description: '1:1 면담 상황을 시뮬레이션하여 효과적인 코칭과 피드백 스킬을 향상시킵니다.', icon: MessageSquare, status: 'available', categories: ['leadership'] },
  { id: 15, name: '켈리 팔로워십 진단 및 시뮬레이션', description: '켈리의 팔로워십 모델을 기반으로 팔로워 유형을 진단하고 역량을 개발합니다.', icon: UserCheck, iconClass: 'text-indigo-400', bgClass: 'from-indigo-400/20', url: 'https://youtube.com/shorts/HYK5PZHMZGM', status: 'available', categories: ['leadership', 'team'] },
  { id: 16, name: '셀프 리더십 진단 및 시뮬레이션', description: '자기 주도적 리더십 역량을 진단하고 셀프 리더십 스킬을 개발하는 AI 도구입니다.', icon: Star, status: 'available', categories: ['leadership', 'development'] },
  // Development
  { id: 17, name: '강점 진단 및 역량개발', description: '개인의 강점을 AI로 진단하고 강점 기반 역량개발 전략을 수립합니다.', icon: Activity, status: 'available', categories: ['development'] },
  { id: 18, name: '저성과자 역량 진단', description: '성과 부진 원인을 다각도로 분석하고 맞춤형 역량 향상 방안을 제시합니다.', icon: Target, status: 'available', categories: ['development'] },
  { id: 19, name: '시간관리 스킬 업', description: '업무 패턴을 분석하여 효율적인 시간관리 전략과 실천 방법을 제안합니다.', icon: Timer, status: 'available', categories: ['development'] },
  { id: 20, name: '갈등관리 스킬 업', description: '갈등 상황을 시뮬레이션하고 효과적인 갈등 해결 스킬을 훈련합니다.', icon: Scale, status: 'available', categories: ['development', 'team'] },
  { id: 21, name: '은퇴 준비 로드맵', description: '은퇴 후 삶을 설계하고 체계적인 준비 계획을 수립하는 AI 코칭 도구입니다.', icon: Route, status: 'available', categories: ['development'] },
  // Strategy/Learning
  { id: 22, name: '경영전략 분석', description: '기업의 경영전략을 AI로 분석하고 전략적 인사이트를 도출하는 도구입니다.', icon: TrendingUp, status: 'available', categories: ['strategy'] },
  { id: 23, name: '로직트리 문제해결 마스터', description: '로직트리 기법을 활용하여 체계적인 문제해결 역량을 훈련하는 AI 도구입니다.', icon: TreePine, status: 'available', categories: ['learning', 'strategy'] },
  // 시뮬레이션/팀빌딩 게임
  { id: 24, name: '제3공장 문제해결 시뮬레이션', description: '가상의 공장 문제 상황을 해결하며 문제해결 역량을 훈련하는 시뮬레이션 게임입니다.', icon: Factory, iconClass: 'text-orange-400', bgClass: 'from-orange-400/20', status: 'available', categories: ['strategy', 'ai-teambuilding', 'learning'] },
  { id: 25, name: '미션 임파서블! 방탈출', description: '팀원들과 협력하여 미션을 해결하는 AI 기반 방탈출 팀빌딩 게임입니다.', icon: KeyRound, iconClass: 'text-red-400', bgClass: 'from-red-400/20', status: 'available', categories: ['team', 'ai-teambuilding'] },
];

export const AIAgent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AppCategory>('all');

  const filteredApps = activeCategory === 'all'
    ? aiApps
    : aiApps.filter(app => app.categories.includes(activeCategory));

  return (
    <div className="w-full bg-tech-bg">
      {/* Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-bg via-purple-900/30 to-tech-bg">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-cyan rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-jjorange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" style={{ backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Bot className="w-12 h-12 text-jjorange" />
              <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
            </div>
            <span className="font-mono text-tech-cyan text-sm tracking-widest mb-4 block">[ AI_AGENT ]</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              AI Agent <span className="text-jjorange">Apps</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              JJ Creative 교육연구소가 직접 개발한<br className="hidden md:block" />
              최첨단 AI 에이전트 애플리케이션
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Message */}
      <section className="py-20 bg-tech-panel relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-bold mb-8 font-mono">
              <Cpu size={16} />
              CUTTING-EDGE TECHNOLOGY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              교육의 미래를 <span className="text-jjorange">AI</span>로 혁신합니다
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              JJ Creative 교육연구소는 단순한 교육을 넘어,<br className="hidden md:block" />
              <strong className="text-white">AI 기술을 활용한 차세대 학습 솔루션</strong>을 직접 개발하고 있습니다.<br className="hidden md:block" />
              교육 현장의 니즈를 정확히 파악한 맞춤형 AI 에이전트로<br className="hidden md:block" />
              학습 효과를 극대화하고, 교육 담당자의 업무를 혁신합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-tech-bg/50 border border-tech-dim px-4 py-2 rounded-lg text-white">
                <Zap size={18} className="text-yellow-400" />
                <span className="text-sm font-medium">실시간 AI 피드백</span>
              </div>
              <div className="flex items-center gap-2 bg-tech-bg/50 border border-tech-dim px-4 py-2 rounded-lg text-white">
                <Rocket size={18} className="text-jjorange" />
                <span className="text-sm font-medium">맞춤형 학습 경험</span>
              </div>
              <div className="flex items-center gap-2 bg-tech-bg/50 border border-tech-dim px-4 py-2 rounded-lg text-white">
                <Bot size={18} className="text-purple-400" />
                <span className="text-sm font-medium">자동화된 교육 관리</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* YouTube Demo Section */}
      <section className="py-20 bg-tech-bg relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="font-mono text-tech-cyan text-sm tracking-widest mb-4 block">// AI_APP_DEMO</span>
            <h2 className="text-3xl font-bold text-white mb-4">AI Agent App 데모 영상</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              JJ Creative가 개발한 AI 에이전트 앱의 실제 작동 모습을 확인해보세요.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 - 학습퀴즈 생성 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Ugne4HpyZko"
                  title="학습퀴즈 생성 및 진행 AI APP"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2">학습퀴즈 생성 및 진행 AI APP</h3>
                <p className="text-gray-400 text-sm">AI가 학습 콘텐츠를 분석하여 자동으로 퀴즈를 생성하고, 학습자의 이해도를 실시간으로 평가합니다.</p>
              </div>
            </motion.div>
            {/* Video 2 - 상황대응 리더십 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/H9_zlTqvaBY"
                  title="상황대응 리더십 스타일 진단 및 시뮬레이션 AI APP"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2">상황대응 리더십 스타일 진단 및 시뮬레이션 AI APP</h3>
                <p className="text-gray-400 text-sm">AI 기반 리더십 스타일 진단과 다양한 상황별 시뮬레이션으로 리더십 역량을 강화합니다.</p>
              </div>
            </motion.div>
            {/* Video 3 - SWOT 미션 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/JJt_KBWNabs"
                  title="AI팀빌딩 _ 팀 SWOT 미션 게임"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2">AI팀빌딩 _ 팀 SWOT 미션 게임</h3>
                <p className="text-gray-400 text-sm">우리팀의 강점을 극대화하고, 약점을 보완하는 팀 SWOT 전략 AI게임!</p>
              </div>
            </motion.div>
            {/* Video 4 - 팔로워십 진단 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/HYK5PZHMZGM"
                  title="팔로워십 교육을 위한 AI 팔로워십 진단 웹앱"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2">팔로워십 교육을 위한 AI 팔로워십 진단 웹앱</h3>
                <p className="text-gray-400 text-sm">켈리의 팔로워십 5유형을 진단하고, 모범적 팔로워로 성장하기 위한 액션플랜을 제시해주는 AI AGENT WEB APP</p>
              </div>
            </motion.div>
            {/* Video 5 - 신규: AI 팀 업무관리 솔루션 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/q74ZiOM2GOs"
                  title="AI 팀 업무관리 솔루션"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2">AI 팀 업무관리 솔루션</h3>
                <p className="text-gray-400 text-sm">팀 업무 통합 관리부터 주간업무보고 자동 생성까지! AI가 만드는 스마트 워크 솔루션으로 업무 효율을 극대화합니다.</p>
              </div>
            </motion.div>
            {/* Video 6 - 신규: AI 경쟁시장 시뮬레이션 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dgzOIgdQf1w"
                  title="AI 경쟁시장 시뮬레이션 게임"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2">AI 경쟁시장 시뮬레이션 게임</h3>
                <p className="text-gray-400 text-sm">가상의 경쟁 시장에서 전략적 의사결정을 체험하며, 시장 분석과 경영 전략 수립 역량을 키우는 AI 시뮬레이션 게임입니다.</p>
              </div>
            </motion.div>
            {/* Video 7 - 신규: AI 전략적 포지셔닝 분석 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/9AgsAOT4zFU"
                  title="AI 전략적 포지셔닝 분석 도구"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2">AI 전략적 포지셔닝 분석 도구</h3>
                <p className="text-gray-400 text-sm">시장 내 경쟁 포지션을 AI로 분석하고, 최적의 전략적 위치를 도출하여 차별화된 경쟁 우위를 확보하는 방법을 학습합니다.</p>
              </div>
            </motion.div>
            {/* Video 8 - 신규: AI 집단지성 팀빌딩 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/k5JISVKau10"
                  title="AI 집단지성 팀빌딩 프로그램"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2">AI 집단지성 팀빌딩 프로그램</h3>
                <p className="text-gray-400 text-sm">팀원들의 다양한 관점을 AI가 종합하여 집단지성을 발휘하는 협업 기반 문제해결 팀빌딩 프로그램입니다.</p>
              </div>
            </motion.div>
            {/* Video 9 - 신규: AI vs Human 팀빌딩 챌린지 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/NWJvkDZdHjk"
                  title="AI vs Human 팀빌딩 챌린지"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2">AI vs Human 팀빌딩 챌린지</h3>
                <p className="text-gray-400 text-sm">AI와 인간 팀이 협력과 경쟁을 통해 창의적 문제해결 역량을 키우는 혁신적인 팀빌딩 프로그램입니다.</p>
              </div>
            </motion.div>
            {/* Video 10 - 신규: AI 러닝 인포그래픽 생성 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/-bhA2NUEijE"
                  title="AI 러닝 인포그래픽 생성기"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2">AI 러닝 인포그래픽 생성기</h3>
                <p className="text-gray-400 text-sm">교육 콘텐츠를 AI가 분석하여 시각적인 인포그래픽으로 자동 변환! 학습 내용을 한눈에 정리하고 기억에 오래 남도록 돕습니다.</p>
              </div>
            </motion.div>
            {/* Video 11 - 신규: AI 셀프 리더십 진단 시뮬레이션 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/XzUnBM293oY"
                  title="AI 셀프 리더십 진단 및 시뮬레이션"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2">AI 셀프 리더십 진단 및 시뮬레이션</h3>
                <p className="text-gray-400 text-sm">자기 주도적 업무 수행 역량을 AI로 진단하고, 다양한 상황별 시뮬레이션으로 셀프 리더십 스킬을 향상시킵니다.</p>
              </div>
            </motion.div>
            {/* Video 12 - 신규: AI 문제해결 로직트리 마스터 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/WoXnT_Znf2c"
                  title="AI 문제해결 로직트리 마스터"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2">AI 문제해결 로직트리 마스터</h3>
                <p className="text-gray-400 text-sm">복잡한 문제를 로직트리 기법으로 체계적으로 분해하고, AI가 최적의 해결 방안을 도출하는 과정을 학습합니다.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Agent Apps Showcase */}
      <section className="py-20 bg-tech-bg relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="font-mono text-tech-cyan text-sm tracking-widest mb-4 block">// OUR_APPS</span>
            <h2 className="text-3xl font-bold text-white mb-4">Our AI Agent Apps</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              JJ Creative가 직접 개발한 AI 에이전트 앱들을 소개합니다.
            </p>
            {/* Notice Banner */}
            <div className="bg-gradient-to-r from-jjorange/20 to-purple-500/20 border border-jjorange/40 rounded-xl p-4 max-w-3xl mx-auto mb-8">
              <p className="text-sm md:text-base text-white leading-relaxed">
                <span className="text-jjorange font-bold">※</span> 실시간 AI API를 사용하는 AI agent app 입니다.
                실제 사용을 위해서는 <strong className="text-jjorange">JJ Creative 관리자 인증</strong>이 필요합니다.
                <a href="#/contact" className="text-tech-cyan hover:underline font-bold ml-1">문의하기</a>를 통해 관리자 인증을 받고 이용하세요.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl font-bold text-sm md:text-base transition-all ${
                    activeCategory === cat.id
                      ? 'bg-tech-cyan text-tech-bg'
                      : 'bg-tech-panel border border-tech-dim text-gray-400 hover:border-tech-cyan hover:text-white'
                  }`}
                >
                  <cat.icon size={18} />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* AI Apps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <AnimatePresence mode="popLayout">
            {filteredApps.map((app, idx) => (
              <motion.div
                key={app.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all group tech-border"
              >
                {(app.status === 'available-auth' || app.status === 'available') && app.icon ? (
                  // Available 앱 (인증 필요 또는 인증 불필요)
                  <>
                    <div className="h-28 bg-gradient-to-br from-tech-bg to-tech-panel flex items-center justify-center relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${app.bgClass} to-tech-cyan/10`}></div>
                      <div className="text-center relative z-10">
                        <app.icon className={`w-10 h-10 ${app.iconClass} mx-auto mb-1`} />
                        {app.status === 'available-auth' ? (
                          <span className="text-xs text-jjorange font-bold">관리자 인증 요망</span>
                        ) : (
                          <span className="text-xs text-green-400 font-bold">{app.name}</span>
                        )}
                      </div>
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full font-mono">
                        Available
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-white mb-1">{app.name}</h3>
                      <p className="text-gray-400 text-xs mb-3 line-clamp-2">{app.description}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-tech-dim">
                        <div className="flex gap-1">
                          <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 text-[10px] rounded-full font-mono">AI</span>
                          <span className="px-1.5 py-0.5 bg-tech-cyan/20 text-tech-cyan text-[10px] rounded-full font-mono">Education</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : app.status === 'upload-soon' ? (
                  // Upload Soon 앱
                  <>
                    <div className="h-28 bg-gradient-to-br from-tech-bg to-tech-panel flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-tech-cyan/10"></div>
                      <div className="text-center px-2">
                        {app.icon ? <app.icon className="w-10 h-10 text-blue-400 mx-auto mb-1" /> : <Bot className="w-10 h-10 text-tech-dim mx-auto mb-1" />}
                        <span className="text-xs text-blue-300 font-bold line-clamp-2">{app.name}</span>
                      </div>
                      <div className="absolute top-2 right-2 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full font-mono">
                        Upload Soon
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-white mb-1">{app.name}</h3>
                      <p className="text-gray-500 text-xs mb-3">곧 업로드 예정입니다.</p>
                      <div className="flex items-center justify-between pt-3 border-t border-tech-dim">
                        <div className="flex gap-1">
                          <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 text-[10px] rounded-full font-mono">AI</span>
                          <span className="px-1.5 py-0.5 bg-tech-cyan/20 text-tech-cyan text-[10px] rounded-full font-mono">Education</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  // Coming Soon 앱
                  <>
                    <div className="h-28 bg-gradient-to-br from-tech-bg to-tech-panel flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-tech-cyan/10"></div>
                      <div className="text-center">
                        <Bot className="w-10 h-10 text-tech-dim mx-auto mb-1" />
                        <span className="text-xs text-gray-500 font-medium">Coming Soon</span>
                      </div>
                      <div className="absolute top-2 right-2 bg-jjorange text-white text-[10px] font-bold px-2 py-0.5 rounded-full font-mono">
                        Coming Soon
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="h-4 bg-tech-dim rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-tech-bg rounded w-full mb-1"></div>
                      <div className="h-3 bg-tech-bg rounded w-5/6 mb-3"></div>
                      <div className="flex items-center justify-between pt-3 border-t border-tech-dim">
                        <div className="flex gap-1">
                          <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 text-[10px] rounded-full font-mono">AI</span>
                          <span className="px-1.5 py-0.5 bg-tech-cyan/20 text-tech-cyan text-[10px] rounded-full font-mono">Education</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
            </AnimatePresence>
          </div>

          {/* Coming Soon Message */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-purple-600/20 to-tech-cyan/20 border border-tech-dim text-white px-8 py-4 rounded-2xl">
              <p className="text-lg font-bold mb-1">더 많은 AI Agent App이 준비 중입니다!</p>
              <p className="text-sm text-gray-400">상세 정보는 곧 업데이트 예정입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-tech-panel to-tech-bg text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tech-cyan/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="font-mono text-tech-cyan text-sm tracking-widest mb-4 block">// GET_IN_TOUCH</span>
          <h2 className="text-2xl font-bold text-white mb-4">AI 기반 교육 솔루션이 궁금하신가요?</h2>
          <p className="text-gray-400 mb-8">맞춤형 AI 에이전트 개발 및 교육 프로그램에 대해 문의해 주세요.</p>
          <a
            href="#/contact"
            className="inline-flex items-center gap-2 bg-tech-cyan hover:bg-tech-accent text-tech-bg px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1"
          >
            문의하기 <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

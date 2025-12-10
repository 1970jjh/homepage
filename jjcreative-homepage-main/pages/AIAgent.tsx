
import React, { useState } from 'react';
import { Bot, Sparkles, Cpu, Zap, ArrowRight, Rocket, Target, TrendingUp, Lightbulb, Users, Brain, Map, BarChart3, UserCheck, MessageSquare, Star, Activity, Clock, Shield, Compass, TreePine, Timer, Scale, Route, Image, HelpCircle, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 카테고리 정의
type AppCategory = 'all' | 'strategy' | 'leadership' | 'team' | 'learning' | 'development';

const categories: { id: AppCategory; label: string; icon: React.ElementType }[] = [
  { id: 'all', label: 'ALL', icon: Layers },
  { id: 'strategy', label: '전략/분석', icon: Target },
  { id: 'leadership', label: '리더십', icon: Compass },
  { id: 'team', label: '팀/조직', icon: Users },
  { id: 'learning', label: '학습/교육', icon: Lightbulb },
  { id: 'development', label: '역량개발', icon: Activity },
];

// AI Agent Apps 데이터
const aiApps = [
  // === Available Apps ===
  // Strategy
  {
    id: 1,
    name: 'STRATEGIC POSITIONING',
    description: '전략적 포지셔닝 분석과 시장 위치 최적화를 위한 AI 기반 전략 도구입니다.',
    url: 'https://minusproject.vercel.app/',
    icon: Target,
    iconClass: 'text-jjorange',
    bgClass: 'from-jjorange/20',
    status: 'available-auth',
    category: 'strategy',
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
    category: 'strategy',
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
    category: 'strategy',
  },
  // Learning
  {
    id: 4,
    name: '창의적 아이디어 실험실',
    description: 'AI와 함께하는 창의적 아이디어 발상 및 브레인스토밍 실험실입니다.',
    url: 'https://script.google.com/macros/s/AKfycbxMIaFrZxnhdwY2o9yH-gfIqIfQeucxYHH0nz0I9v1BzDDZRmh_QT-XQVz_Qnf3Bp_4YA/exec',
    icon: Lightbulb,
    iconClass: 'text-yellow-400',
    bgClass: 'from-yellow-400/20',
    status: 'available-auth',
    category: 'learning',
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
    category: 'learning',
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
    category: 'learning',
  },
  // Team
  {
    id: 7,
    name: 'AI vs Human Team-building',
    description: 'AI와 인간이 협력하여 팀빌딩 역량을 강화하는 혁신적인 교육 도구입니다.',
    url: 'https://ai-vs-human-jjc.vercel.app/',
    icon: Users,
    iconClass: 'text-purple-400',
    bgClass: 'from-purple-400/20',
    status: 'available-auth',
    category: 'team',
  },
  {
    id: 8,
    name: '집단지성의 팀',
    description: '팀의 집단지성을 활용하여 문제를 해결하는 협업 기반 AI 도구입니다.',
    url: 'https://alpagoteam.vercel.app/',
    icon: Brain,
    iconClass: 'text-green-400',
    bgClass: 'from-green-400/20',
    status: 'available',
    category: 'team',
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
    category: 'strategy',
  },
  // === Upload Soon Apps ===
  // Team/Org
  { id: 10, name: 'Quinn 조직문화 유형 진단', icon: BarChart3, status: 'upload-soon', category: 'team' },
  { id: 11, name: '팀빌딩 크리에이터', icon: Users, status: 'upload-soon', category: 'team' },
  // Leadership
  { id: 12, name: '상황대응 리더십 진단 및 시뮬레이션', icon: Compass, status: 'upload-soon', category: 'leadership' },
  { id: 13, name: 'One on One 리더십 시뮬레이션', icon: MessageSquare, status: 'upload-soon', category: 'leadership' },
  { id: 14, name: '켈리 팔로워십 진단 및 시뮬레이션', icon: UserCheck, status: 'upload-soon', category: 'leadership' },
  { id: 15, name: '셀프 리더십 진단 및 시뮬레이션', icon: Star, status: 'upload-soon', category: 'leadership' },
  // Development
  { id: 16, name: '강점 진단 및 역량개발', icon: Activity, status: 'upload-soon', category: 'development' },
  { id: 17, name: '저성과자 역량 진단', icon: Target, status: 'upload-soon', category: 'development' },
  { id: 18, name: '시간관리 스킬 업', icon: Timer, status: 'upload-soon', category: 'development' },
  { id: 19, name: '갈등관리 스킬 업', icon: Scale, status: 'upload-soon', category: 'development' },
  { id: 20, name: '은퇴 준비 로드맵', icon: Route, status: 'upload-soon', category: 'development' },
  // Strategy/Learning
  { id: 21, name: '경영전략 분석', icon: TrendingUp, status: 'upload-soon', category: 'strategy' },
  { id: 22, name: '로직트리 문제해결 마스터', icon: TreePine, status: 'upload-soon', category: 'learning' },
];

export const AIAgent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AppCategory>('all');

  const filteredApps = activeCategory === 'all'
    ? aiApps
    : aiApps.filter(app => app.category === activeCategory);

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Video - 학습퀴즈 생성 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">학습퀴즈 생성 및 진행 AI APP</h3>
                <p className="text-gray-400 text-sm">AI가 학습 콘텐츠를 분석하여 자동으로 퀴즈를 생성하고, 학습자의 이해도를 실시간으로 평가합니다.</p>
              </div>
            </motion.div>
            {/* Right Video - 상황대응 리더십 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">상황대응 리더십 스타일 진단 및 시뮬레이션 AI APP</h3>
                <p className="text-gray-400 text-sm">AI 기반 리더십 스타일 진단과 다양한 상황별 시뮬레이션으로 리더십 역량을 강화합니다.</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
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
                {(app.status === 'available-auth' || app.status === 'available') && app.icon && app.url ? (
                  // Available 앱 (인증 필요 또는 인증 불필요)
                  <a href={app.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="h-48 bg-gradient-to-br from-tech-bg to-tech-panel flex items-center justify-center relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${app.bgClass} to-tech-cyan/10`}></div>
                      <div className="text-center relative z-10">
                        <app.icon className={`w-16 h-16 ${app.iconClass} mx-auto mb-2`} />
                        {app.status === 'available-auth' ? (
                          <span className="text-sm text-jjorange font-bold">관리자 인증 요망</span>
                        ) : (
                          <span className="text-sm text-green-400 font-bold">{app.name}</span>
                        )}
                      </div>
                      <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full font-mono">
                        Available
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-tech-cyan transition-colors">{app.name}</h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{app.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-tech-dim">
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full font-mono">AI</span>
                          <span className="px-2 py-1 bg-tech-cyan/20 text-tech-cyan text-xs rounded-full font-mono">Education</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-tech-cyan transition-colors" />
                      </div>
                    </div>
                  </a>
                ) : app.status === 'upload-soon' ? (
                  // Upload Soon 앱
                  <>
                    <div className="h-48 bg-gradient-to-br from-tech-bg to-tech-panel flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-tech-cyan/10"></div>
                      <div className="text-center px-4">
                        {app.icon ? <app.icon className="w-16 h-16 text-blue-400 mx-auto mb-2" /> : <Bot className="w-16 h-16 text-tech-dim mx-auto mb-2" />}
                        <span className="text-sm text-blue-300 font-bold line-clamp-2">{app.name}</span>
                      </div>
                      <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full font-mono">
                        Upload Soon
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">{app.name}</h3>
                      <p className="text-gray-500 text-sm mb-4">곧 업로드 예정입니다.</p>
                      <div className="flex items-center justify-between pt-4 border-t border-tech-dim">
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full font-mono">AI</span>
                          <span className="px-2 py-1 bg-tech-cyan/20 text-tech-cyan text-xs rounded-full font-mono">Education</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-500" />
                      </div>
                    </div>
                  </>
                ) : (
                  // Coming Soon 앱
                  <>
                    <div className="h-48 bg-gradient-to-br from-tech-bg to-tech-panel flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-tech-cyan/10"></div>
                      <div className="text-center">
                        <Bot className="w-16 h-16 text-tech-dim mx-auto mb-2" />
                        <span className="text-sm text-gray-500 font-medium">Coming Soon</span>
                      </div>
                      <div className="absolute top-4 right-4 bg-jjorange text-white text-xs font-bold px-3 py-1 rounded-full font-mono">
                        Coming Soon
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="h-6 bg-tech-dim rounded w-3/4 mb-3"></div>
                      <div className="h-4 bg-tech-bg rounded w-full mb-2"></div>
                      <div className="h-4 bg-tech-bg rounded w-5/6 mb-4"></div>
                      <div className="flex items-center justify-between pt-4 border-t border-tech-dim">
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full font-mono">AI</span>
                          <span className="px-2 py-1 bg-tech-cyan/20 text-tech-cyan text-xs rounded-full font-mono">Education</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-500" />
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

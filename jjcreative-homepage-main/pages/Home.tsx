
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, Users, Gamepad2, CheckCircle, ArrowRight, Star, MonitorPlay, MessageCircle, FileText, Plus, Sparkles, Target, Zap, X, Maximize2, Download } from 'lucide-react';
import { Feature, Stat } from '../types';

const features: Feature[] = [
  {
    title: "AI 기반 진단",
    description: "AI 조직 진단 툴을 활용하여 현재 조직의 문제점을 정밀하게 분석하고 최적의 솔루션을 도출합니다.",
    iconName: "BarChart3",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "검증된 전문가 그룹",
    description: "대기업 교육팀 출신 및 분야별 석/박사급 강사진이 퀄리티 높은 강의와 퍼실리테이션을 제공합니다.",
    iconName: "Users",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "게이미피케이션 + 시뮬레이션 기반 학습",
    description: "게임과 시뮬레이션을 접목하여 학습자가 주도적으로 참여하고 몰입할 수 있는 실전형 교육을 제공합니다.",
    iconName: "Gamepad2",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
  }
];

const stats: Stat[] = [
  { value: "50,000+", label: "누적 교육생" },
  { value: "120+", label: "파트너 기업" },
  { value: "4.9", label: "교육 만족도 (5.0 만점)" }
];

const testimonials = [
  {
    text: "AI 툴을 활용한 교육 덕분에 팀 전체의 업무 생산성이 크게 향상되었습니다. 실무에 바로 적용할 수 있는 점이 좋았어요.",
    author: "김민수",
    position: "마케팅팀 팀장",
    company: "삼성전자",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    text: "게이미피케이션 기반 팀빌딩은 정말 신선했습니다. 참여도가 높아 팀 분위기가 확 바뀌었어요.",
    author: "이지현",
    position: "HR 매니저",
    company: "LG전자",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    text: "리더십 교육을 통해 팀원들과 소통하는 법을 새로 배웠습니다. 실전 시뮬레이션이 큰 도움이 되었습니다.",
    author: "박준호",
    position: "개발팀 팀장",
    company: "카카오",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  },
];

const reviews = [
  { text: "AI 툴을 활용하니 업무 시간이 절반으로 줄었어요! 진짜 신기합니다.", author: "마케팅팀 대리", company: "A사" },
  { text: "팀빌딩이 이렇게 재밌을 수 있다니, 팀 분위기가 확 바뀌었습니다.", author: "영업팀 과장", company: "B사" },
  { text: "리더십 교육을 통해 팀원들과 소통하는 법을 새로 배웠습니다.", author: "개발팀 팀장", company: "C사" },
  { text: "신입사원 연수 프로그램, MZ세대 맞춤형이라 반응이 뜨거웠습니다.", author: "HR 담당자", company: "D사" },
  { text: "디자인 씽킹으로 우리 팀의 고질적인 문제를 해결했습니다.", author: "기획팀 사원", company: "E사" },
  { text: "협업 시뮬레이션 게임, 몰입도가 장난 아니네요. 강추합니다!", author: "생산팀 반장", company: "F사" },
  { text: "데이터 기반의 조직 진단, 우리 회사의 현주소를 정확히 알게 되었습니다.", author: "경영지원 이사", company: "G사" },
  { text: "AI 시대에 딱 맞는 메타버스 팀빌딩, 신선하고 즐거웠습니다.", author: "IT기업 대표", company: "H사" },
  { text: "성과 관리 면담 스킬, 이제 자신 있게 할 수 있습니다.", author: "영업본부장", company: "I사" },
  { text: "갈등 관리 교육 덕분에 타 부서와의 협업이 원활해졌습니다.", author: "PM", company: "J사" },
  { text: "창의적 문제해결 과정, 아이디어가 샘솟는 시간이었습니다.", author: "R&D 연구원", company: "K사" },
  { text: "전사 워크숍 프로그램, 모든 직원이 만족한 최고의 행사였습니다.", author: "교육 담당자", company: "L사" },
];

const PROGRAM_GIF_URL = "https://raw.githubusercontent.com/1970jjh/jjcreative-images/main/1gif.gif";
const PROGRAM_POPUP_URL = "https://raw.githubusercontent.com/1970jjh/jjcreative-images/main/1program.jpg";

const educationReviews = [
  {
    text: "JJ Creative의 리더십 교육은 단순 이론이 아니라 실제 현장에서 바로 적용할 수 있는 실전 노하우를 전수해주셨습니다. 교육 후 팀장들의 코칭 스킬이 눈에 띄게 향상되었어요.",
    author: "박영희",
    position: "인재개발팀 차장",
    company: "삼성SDI"
  },
  {
    text: "게이미피케이션 기반 팀빌딩 프로그램이 정말 인상적이었습니다. MZ세대 직원들의 참여도가 역대 최고였고, 부서 간 소통이 확연히 개선되었습니다.",
    author: "김준혁",
    position: "HR팀 과장",
    company: "현대자동차"
  },
  {
    text: "AI 업무 활용 교육을 통해 전 직원의 업무 생산성이 30% 이상 향상되었습니다. 특히 ChatGPT, Copilot 실습이 실무에 큰 도움이 되었어요.",
    author: "이수진",
    position: "교육기획팀 팀장",
    company: "SK하이닉스"
  },
  {
    text: "전략 경영 시뮬레이션 프로그램으로 임원진의 의사결정 역량이 크게 성장했습니다. 실제 경영 상황을 체험하며 배우니 몰입도가 남달랐어요.",
    author: "정민우",
    position: "경영지원팀 부장",
    company: "LG에너지솔루션"
  },
  {
    text: "신입사원 온보딩 프로그램이 체계적이고 재미있어서 신입들의 조기 적응에 큰 도움이 되었습니다. 이직률이 작년 대비 40% 감소했어요.",
    author: "한지영",
    position: "채용팀 매니저",
    company: "카카오뱅크"
  },
  {
    text: "협업 커뮤니케이션 교육 후 부서 간 갈등이 현저히 줄었습니다. 특히 '긍정적 대화 vs 부정적 대화' 실습이 임직원들에게 큰 깨달음을 주었어요.",
    author: "오성민",
    position: "조직문화팀 차장",
    company: "네이버"
  },
  {
    text: "문제해결 시뮬레이션 교육으로 R&D 팀의 창의적 사고력이 향상되었습니다. 실제 프로젝트에서 혁신적인 아이디어가 쏟아지고 있어요.",
    author: "최다은",
    position: "기술교육팀 과장",
    company: "포스코"
  },
  {
    text: "환상의 섬 팀빌딩 프로그램은 역대 최고의 워크숍이었습니다. 직원들이 지금도 그때 이야기를 하며 팀워크를 다지고 있어요.",
    author: "송재현",
    position: "총무팀 팀장",
    company: "CJ제일제당"
  },
  {
    text: "하이퍼포먼스 매니지먼트 교육으로 성과 면담의 질이 완전히 달라졌습니다. 관리자들이 자신감을 갖고 피드백을 주고받게 되었어요.",
    author: "윤서아",
    position: "HRD팀 대리",
    company: "롯데케미칼"
  }
];

export const Home: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % educationReviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full bg-tech-bg">
      {/* Hero Section - Tech Style */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* HUD Elements */}
        <div className="absolute top-1/4 left-10 hidden lg:block opacity-30 font-mono text-xs text-tech-cyan">
          <div>SYS_STATUS: ONLINE</div>
          <div>LATENCY: 12ms</div>
          <div>MODULE: EDUCATION</div>
        </div>
        <div className="absolute bottom-10 right-10 hidden lg:block opacity-30 font-mono text-xs text-tech-cyan text-right">
          <div>COORDS: 37.5665° N, 126.9780° E</div>
          <div>VER: 2.0.4</div>
        </div>

        {/* Decorative Rotating Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-tech-cyan/10 rounded-full animate-spin-slow pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-tech-cyan/20 rounded-full animate-spin-slow pointer-events-none z-0" style={{ animationDirection: 'reverse' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4 px-3 py-1 border border-tech-cyan/30 bg-tech-cyan/5 rounded-full backdrop-blur-sm reveal-on-scroll">
              <span className="text-tech-cyan font-mono text-xs tracking-widest uppercase">
                <span className="inline-block w-2 h-2 bg-tech-cyan rounded-full mr-2 animate-pulse"></span>
                System Initialized
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 reveal-on-scroll">
              조직의 잠재력을 깨우는<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-tech-cyan to-blue-600">창의적 러닝 솔루션</span>
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light reveal-on-scroll">
              <span className="text-white font-semibold">JJ Creative 교육연구소</span>는 이론을 넘어<br className="hidden md:block" />
              현업의 문제를 해결하는 실전형 기업 교육을 설계합니다.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 reveal-on-scroll">
              <a
                href="https://blog.naver.com/wofyrhd"
                target="_blank"
                rel="noreferrer"
                className="cursor-hover group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-200 bg-tech-cyan font-mono hover:bg-white"
              >
                <span>VIEW_TRAINING</span>
                <MonitorPlay className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://notebooklm.google.com/notebook/329d933e-d7b8-4981-94f3-b76bdd6142eb"
                target="_blank"
                rel="noreferrer"
                className="cursor-hover group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-200 bg-purple-600 hover:bg-purple-500 text-white font-mono"
              >
                <span>AI_CHATBOT</span>
                <MessageCircle className="w-5 h-5 ml-2" />
              </a>
              <a
                href="https://form.naver.com/response/S1p9qf7_I9qBZ96COOdSzA"
                target="_blank"
                rel="noreferrer"
                className="cursor-hover relative px-8 py-4 bg-transparent border border-tech-cyan text-tech-cyan text-base font-bold font-mono hover:bg-tech-cyan hover:text-black transition-all duration-300"
              >
                <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-tech-cyan"></span>
                <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-tech-cyan"></span>
                REQUEST_PROPOSAL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Kinetic Marquee */}
      <div className="bg-tech-cyan py-3 border-y border-white/10 relative overflow-hidden transform -skew-y-1">
        <div className="marquee-container">
          <div className="marquee-content font-mono font-bold text-black text-lg tracking-widest">
            JJ CREATIVE SYSTEM ONLINE // AI & GAMIFICATION EDUCATION // 50,000+ TRAINEES // 120+ PARTNERS // SIMULATION BASED LEARNING // JJ CREATIVE SYSTEM ONLINE // AI & GAMIFICATION EDUCATION // 50,000+ TRAINEES // 120+ PARTNERS //
          </div>
        </div>
      </div>

      {/* Bento Grid Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 - Stats Card */}
            <div className="tech-border bg-tech-panel p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 reveal-on-scroll">
              <div className="absolute top-0 right-0 w-32 h-32 bg-tech-cyan/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-tech-cyan/10 rounded flex items-center justify-center">
                    <Sparkles className="text-tech-cyan" size={20} />
                  </div>
                  <span className="text-gray-500 text-sm font-mono">STATS_MODULE</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-4xl font-mono font-bold text-tech-cyan">50,000<span className="text-lg">+</span></div>
                    <div className="text-gray-500 text-xs font-mono">TOTAL_TRAINEES</div>
                  </div>
                  <div>
                    <div className="text-4xl font-mono font-bold text-white">120<span className="text-lg">+</span></div>
                    <div className="text-gray-500 text-xs font-mono">PARTNER_COMPANIES</div>
                  </div>
                </div>
              </div>
              <a
                href="https://blog.naver.com/wofyrhd"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-6 right-6 w-10 h-10 bg-white/5 hover:bg-tech-cyan/20 rounded flex items-center justify-center transition-colors border border-white/10"
              >
                <Plus size={20} className="text-gray-500 group-hover:text-tech-cyan" />
              </a>
            </div>

            {/* Card 2 - YouTube Video */}
            <div className="bg-tech-panel rounded overflow-hidden relative group hover:-translate-y-2 transition-transform duration-300 border border-white/10 reveal-on-scroll">
              <div className="w-full h-full min-h-[320px]">
                <iframe
                  src="https://www.youtube.com/embed/g7vOJc3t5_s"
                  title="JJ Creative 소개 영상"
                  className="w-full h-full min-h-[320px]"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Card 3 - Program Guide GIF */}
            <div
              className="tech-border bg-gradient-to-br from-tech-cyan/10 to-tech-panel p-4 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 row-span-1 lg:row-span-3 cursor-pointer reveal-on-scroll"
              onClick={() => setIsImageModalOpen(true)}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold text-sm font-mono">PROGRAM_OVERVIEW</h3>
                <button
                  className="w-8 h-8 bg-white/10 hover:bg-tech-cyan/20 rounded flex items-center justify-center transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsImageModalOpen(true);
                  }}
                >
                  <Maximize2 size={16} className="text-tech-cyan" />
                </button>
              </div>
              <div
                className="relative w-full h-[calc(100%-40px)] bg-tech-bg rounded overflow-y-auto border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={PROGRAM_GIF_URL}
                  alt="JJ Creative 프로그램 안내서"
                  className="w-full h-auto"
                  onClick={() => setIsImageModalOpen(true)}
                />
              </div>
              <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
                <span className="text-tech-cyan/60 text-xs font-mono bg-tech-bg/80 px-2 py-1">CLICK_TO_EXPAND</span>
              </div>
            </div>

            {/* Card 4 - Feature Card */}
            <div className="tech-border bg-gradient-to-br from-emerald-900/30 to-tech-panel p-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 lg:col-span-2 border border-emerald-500/30 reveal-on-scroll">
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80"
                  alt="Background"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm font-mono">{testimonials[1].author} // {testimonials[1].position}</span>
                  <div className="bg-white/10 backdrop-blur-md px-3 py-1 border border-white/20">
                    <span className="text-tech-cyan font-bold text-sm font-mono">{testimonials[1].company}</span>
                  </div>
                </div>
                <p className="text-xl md:text-2xl font-medium text-white leading-relaxed max-w-xl">
                  "{testimonials[1].text}"
                </p>
              </div>
            </div>

            {/* Card 5 - YouTube Video 2 */}
            <div className="bg-tech-panel rounded overflow-hidden relative group hover:-translate-y-2 transition-transform duration-300 border border-white/10 reveal-on-scroll">
              <div className="w-full h-full min-h-[280px]">
                <iframe
                  src="https://www.youtube.com/embed/4XTPnf4B1SU"
                  title="JJ Creative 교육 영상"
                  className="w-full h-full min-h-[280px]"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Card 6 - Rotating Education Reviews */}
            <div className="tech-border bg-tech-panel p-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 reveal-on-scroll">
              <div className="relative z-10 h-full min-h-[280px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-tech-cyan font-bold text-sm font-mono">HR_REVIEWS</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={14} fill="#06b6d4" stroke="none" />
                      ))}
                    </div>
                  </div>
                  <div key={currentReviewIndex} className="animate-fade-in">
                    <p className="text-gray-300 text-base leading-relaxed mb-4 line-clamp-4">
                      "{educationReviews[currentReviewIndex].text}"
                    </p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div key={`author-${currentReviewIndex}`} className="animate-fade-in">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white font-bold text-sm">{educationReviews[currentReviewIndex].author}</span>
                        <span className="text-gray-500 text-xs ml-2 font-mono">{educationReviews[currentReviewIndex].position}</span>
                      </div>
                      <span className="text-tech-cyan text-xs font-mono bg-tech-cyan/10 px-2 py-1">{educationReviews[currentReviewIndex].company}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-3 justify-center">
                    {educationReviews.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          idx === currentReviewIndex ? 'bg-tech-cyan w-4' : 'bg-gray-700 w-1'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-tech-bg relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" style={{ backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 reveal-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-px w-10 bg-tech-cyan"></span>
              <span className="text-tech-cyan font-mono text-sm">PROBLEM_ANALYSIS</span>
              <span className="h-px w-10 bg-tech-cyan"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">왜 기존의 기업 교육은 현업에 적용되지 않을까요?</h2>
            <p className="text-lg text-gray-500 font-mono">"즐거웠지만 남는 게 없는 교육, 실무와 동떨어진 이론, 수동적인 참여..."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cursor-hover tech-border bg-tech-panel p-8 group hover:-translate-y-2 transition-transform duration-300 reveal-on-scroll">
              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 bg-tech-cyan/10 rounded flex items-center justify-center text-tech-cyan">
                  <CheckCircle size={24} />
                </div>
                <span className="font-mono text-xs text-gray-500 group-hover:text-tech-cyan">SOL_01</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-cyan transition-colors">Customization</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI로 기업의 문화와 니즈를 분석한 100% 맞춤형 설계를 제공합니다. 정해진 틀에 맞추지 않습니다.
              </p>
            </div>

            <div className="cursor-hover tech-border bg-tech-panel p-8 group hover:-translate-y-2 transition-transform duration-300 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 bg-jjorange/10 rounded flex items-center justify-center text-jjorange">
                  <CheckCircle size={24} />
                </div>
                <span className="font-mono text-xs text-gray-500 group-hover:text-tech-cyan">SOL_02</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-cyan transition-colors">Engagement</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                학습자가 주도적으로 참여하는 게이미피케이션 및 액션 러닝 기법을 도입하여 몰입도를 극대화합니다.
              </p>
            </div>

            <div className="cursor-hover tech-border bg-tech-panel p-8 group hover:-translate-y-2 transition-transform duration-300 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 bg-tech-cyan/10 rounded flex items-center justify-center text-tech-cyan">
                  <CheckCircle size={24} />
                </div>
                <span className="font-mono text-xs text-gray-500 group-hover:text-tech-cyan">SOL_03</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-cyan transition-colors">Insight</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                이론에 그치지 않고 현업에 즉시 적용 가능한 실질적 Tool과 인사이트를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-tech-panel border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="text-tech-cyan font-mono text-sm">OUR_STRENGTH</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">JJ Creative만의 차별화된 강점</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="cursor-hover group reveal-on-scroll" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="overflow-hidden mb-6 h-64 relative border border-white/10 group-hover:border-tech-cyan/50 transition-colors">
                   <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-tech-cyan/20 mix-blend-overlay"></div>
                  <div className="absolute top-4 left-4 font-mono text-xs text-tech-cyan bg-black/50 px-2 py-1 backdrop-blur-md border border-tech-cyan/30">
                    MOD_{String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  {feature.iconName === 'BarChart3' && <BarChart3 className="text-tech-cyan" />}
                  {feature.iconName === 'Users' && <Users className="text-tech-cyan" />}
                  {feature.iconName === 'Gamepad2' && <Gamepad2 className="text-tech-cyan" />}
                  <h3 className="text-xl font-bold text-white group-hover:text-tech-cyan transition-colors">{feature.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Reviews Section */}
      <section className="py-24 bg-tech-bg text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-tech-cyan opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 opacity-5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">숫자가 증명하는 JJ Creative의 교육 효과</h2>
              <p className="text-gray-500 font-mono">DATA_DRIVEN_RESULTS // TRUSTED_PARTNER</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16 border-b border-white/10 pb-12 reveal-on-scroll">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-white/5 border border-white/10 hover:border-tech-cyan/50 transition-colors">
                  <div className="text-5xl md:text-6xl font-mono font-bold text-tech-cyan mb-2">{stat.value}</div>
                  <div className="text-gray-500 font-mono text-sm">{stat.label.toUpperCase().replace(/ /g, '_')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling Reviews Marquee */}
          <div className="w-full overflow-hidden py-8 border-y border-white/5 bg-white/[0.02]">
            <div className="flex w-max animate-marquee">
              {[...reviews, ...reviews].map((review, idx) => (
                <div key={idx} className="mx-4 w-[350px] tech-border bg-tech-panel p-6 flex flex-col justify-between h-48 hover:bg-white/5 transition-colors">
                  <div>
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="#06b6d4" stroke="none" />)}
                    </div>
                    <p className="text-base font-light leading-relaxed line-clamp-3 text-gray-300 italic">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 font-mono">{review.company}</span>
                    <span className="text-sm font-bold text-tech-cyan font-mono">{review.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal - Tech Style */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div
            className="relative w-[95vw] h-[90vh] max-w-5xl bg-tech-panel shadow-2xl overflow-hidden animate-scale-in border border-tech-cyan/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-tech-bg border-b border-tech-cyan/30">
              <div className="flex items-center gap-2">
                <span className="text-tech-cyan font-mono text-sm">PROGRAM_VIEWER</span>
              </div>
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="w-10 h-10 bg-white/5 hover:bg-tech-cyan/20 rounded flex items-center justify-center transition-colors border border-white/10"
              >
                <X size={24} className="text-gray-400 hover:text-tech-cyan" />
              </button>
            </div>
            {/* Image Viewer */}
            <div className="w-full h-[calc(100%-72px)] overflow-auto p-4 bg-tech-bg">
              <img
                src={PROGRAM_POPUP_URL}
                alt="JJ Creative 프로그램 안내서"
                className="w-full h-auto max-w-4xl mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

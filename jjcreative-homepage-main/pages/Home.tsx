
import React, { useState } from 'react';
import { BarChart3, Users, Gamepad2, CheckCircle, Star, MonitorPlay, MessageCircle, X, Maximize2 } from 'lucide-react';
import { Feature } from '../types';

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

export const Home: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

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

      {/* YouTube Videos Section - 1x2 Grid */}
      <section className="py-12 bg-tech-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-tech-cyan font-mono text-sm">[ TRAINING_VIDEOS ]</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">JJ Creative 교육 현장</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* YouTube Video 1 */}
            <div className="bg-tech-panel rounded-lg overflow-hidden border border-white/10 hover:border-tech-cyan/50 transition-colors aspect-[9/16] max-h-[500px]">
              <iframe
                src="https://www.youtube.com/embed/g7vOJc3t5_s"
                title="JJ Creative 교육 영상 1"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* YouTube Video 2 */}
            <div className="bg-tech-panel rounded-lg overflow-hidden border border-white/10 hover:border-tech-cyan/50 transition-colors aspect-[9/16] max-h-[500px]">
              <iframe
                src="https://www.youtube.com/embed/4XTPnf4B1SU"
                title="JJ Creative 교육 영상 2"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Marquee Strip */}
      <div className="bg-gradient-to-r from-blue-600 via-tech-cyan to-blue-600 py-4 relative overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content font-mono font-bold text-white text-lg tracking-widest">
            ★ AI & GAMIFICATION EDUCATION ★ 50,000+ TRAINEES ★ 120+ PARTNERS ★ SIMULATION BASED LEARNING ★ JJ CREATIVE ★ AI & GAMIFICATION EDUCATION ★ 50,000+ TRAINEES ★ 120+ PARTNERS ★ SIMULATION BASED LEARNING ★ JJ CREATIVE ★
          </div>
        </div>
      </div>

      {/* Scrolling Reviews Marquee - Right to Left */}
      <section className="bg-tech-panel py-8 border-b border-white/10">
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-marquee-rtl">
            {[...reviews, ...reviews, ...reviews].map((review, idx) => (
              <div key={idx} className="mx-3 w-[320px] tech-border bg-tech-bg p-5 flex flex-col justify-between h-44 hover:bg-white/5 transition-colors">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="#06b6d4" stroke="none" />)}
                  </div>
                  <p className="text-sm font-light leading-relaxed line-clamp-3 text-gray-300 italic">
                    "{review.text}"
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 font-mono">{review.company}</span>
                  <span className="text-sm font-bold text-tech-cyan font-mono">{review.author}</span>
                </div>
              </div>
            ))}
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

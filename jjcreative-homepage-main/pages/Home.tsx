
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

// 교육담당자 후기 9개
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

  // 3초마다 교육후기 자동 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % educationReviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Bento Grid Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-jjnavy mb-6 leading-tight">
              조직의 잠재력을 깨우는<br/>
              <span className="text-jjorange">창의적 러닝 솔루션</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              JJ Creative 교육연구소는 이론을 넘어 현업의 문제를 해결하는 실전형 기업 교육을 설계합니다.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

            {/* Card 1 - Stats Card (Large) */}
            <div className="bg-jjnavy rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-jjorange/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="text-jjorange" size={20} />
                  </div>
                  <span className="text-white/60 text-sm font-medium">JJ Creative</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-4xl font-bold text-jjorange">50,000+</div>
                    <div className="text-white/60 text-sm">누적 교육생</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white">120+</div>
                    <div className="text-white/60 text-sm">파트너 기업</div>
                  </div>
                </div>
              </div>
              <a
                href="https://blog.naver.com/wofyrhd"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Plus size={20} className="text-white/60" />
              </a>
            </div>

            {/* Card 2 - YouTube Video */}
            <div className="bg-black rounded-3xl overflow-hidden relative group hover:scale-[1.02] transition-transform duration-300">
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
              className="bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-50 rounded-3xl p-4 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 row-span-1 lg:row-span-3 cursor-pointer"
              onClick={() => setIsImageModalOpen(true)}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-amber-900 font-bold text-base whitespace-nowrap">한 눈으로 보는 기업교육 프로그램</h3>
                <button
                  className="w-8 h-8 bg-white/60 hover:bg-white/80 rounded-lg flex items-center justify-center transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsImageModalOpen(true);
                  }}
                >
                  <Maximize2 size={16} className="text-amber-900" />
                </button>
              </div>
              <div
                className="relative w-full h-[calc(100%-40px)] bg-white rounded-2xl overflow-y-auto shadow-inner"
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
                <span className="text-amber-800/60 text-xs bg-amber-100/80 px-2 py-1 rounded">클릭하여 크게 보기</span>
              </div>
            </div>

            {/* Card 4 - Feature Card (Stripe style) */}
            <div className="bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-3xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 lg:col-span-2">
              <div className="absolute inset-0 opacity-30">
                <img
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80"
                  alt="Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/80 text-sm font-medium">{testimonials[1].author} · {testimonials[1].position}</span>
                  <div className="bg-white/20 backdrop-blur-md rounded-lg px-3 py-1">
                    <span className="text-white font-bold text-sm">{testimonials[1].company}</span>
                  </div>
                </div>
                <p className="text-xl md:text-2xl font-medium text-white leading-relaxed max-w-xl">
                  "{testimonials[1].text}"
                </p>
              </div>
              <a
                href="https://notebooklm.google.com/notebook/329d933e-d7b8-4981-94f3-b76bdd6142eb"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <Plus size={20} className="text-white/80" />
              </a>
            </div>

            {/* Card 5 - YouTube Video 2 */}
            <div className="bg-black rounded-3xl overflow-hidden relative group hover:scale-[1.02] transition-transform duration-300">
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
            <div className="bg-zinc-900 rounded-3xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <style>{`
                @keyframes reviewFadeIn {
                  0% { opacity: 0; transform: translateY(10px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                .review-animate {
                  animation: reviewFadeIn 0.5s ease-out;
                }
              `}</style>
              <div className="relative z-10 h-full min-h-[280px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-jjorange font-bold text-base">교육담당자 후기</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={14} fill="#F47C20" stroke="none" />
                      ))}
                    </div>
                  </div>
                  <div key={currentReviewIndex} className="review-animate">
                    <p className="text-white text-base leading-relaxed mb-4 line-clamp-4">
                      "{educationReviews[currentReviewIndex].text}"
                    </p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div key={`author-${currentReviewIndex}`} className="review-animate">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white font-bold text-base">{educationReviews[currentReviewIndex].author}</span>
                        <span className="text-gray-500 text-sm ml-2">{educationReviews[currentReviewIndex].position}</span>
                      </div>
                      <span className="text-jjorange text-sm font-medium bg-jjorange/10 px-2 py-1 rounded">{educationReviews[currentReviewIndex].company}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-3 justify-center">
                    {educationReviews.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentReviewIndex ? 'bg-jjorange w-4' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
              href="https://blog.naver.com/wofyrhd"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-jjnavy hover:bg-jjnavy/90 text-white rounded-2xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3 w-full sm:w-auto hover:-translate-y-1 hover:shadow-xl"
            >
              <MonitorPlay className="w-5 h-5" />
              리얼 교육장면 보기
            </a>
            <a
              href="https://notebooklm.google.com/notebook/329d933e-d7b8-4981-94f3-b76bdd6142eb"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3 w-full sm:w-auto hover:-translate-y-1 hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              JJ 교육 챗봇
            </a>
            <a
              href="https://form.naver.com/response/S1p9qf7_I9qBZ96COOdSzA"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-jjorange hover:bg-jjorange/90 text-white rounded-2xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3 w-full sm:w-auto hover:-translate-y-1 hover:shadow-xl"
            >
              <FileText className="w-5 h-5" />
              제안서 의뢰
            </a>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jjnavy mb-4">왜 기존의 기업 교육은 현업에 적용되지 않을까요?</h2>
            <p className="text-lg text-gray-600">"즐거웠지만 남는 게 없는 교육, 실무와 동떨어진 이론, 수동적인 참여..."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-jjnavy" size={24} />
              </div>
              <h3 className="text-xl font-bold text-jjnavy mb-3">Customization</h3>
              <p className="text-gray-600 leading-relaxed">
                AI로 기업의 문화와 니즈를 분석한 100% 맞춤형 설계를 제공합니다. 정해진 틀에 맞추지 않습니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-jjorange" size={24} />
              </div>
              <h3 className="text-xl font-bold text-jjnavy mb-3">Engagement</h3>
              <p className="text-gray-600 leading-relaxed">
                학습자가 주도적으로 참여하는 게이미피케이션 및 액션 러닝 기법을 도입하여 몰입도를 극대화합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-jjnavy" size={24} />
              </div>
              <h3 className="text-xl font-bold text-jjnavy mb-3">Insight</h3>
              <p className="text-gray-600 leading-relaxed">
                이론에 그치지 않고 현업에 즉시 적용 가능한 실질적 Tool과 인사이트를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-jjorange font-bold uppercase tracking-wider text-sm">Our Strength</span>
            <h2 className="text-3xl md:text-4xl font-bold text-jjnavy mt-2">JJ Creative만의 차별화된 강점</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-6 shadow-lg h-64 relative">
                   <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  {feature.iconName === 'BarChart3' && <BarChart3 className="text-jjorange" />}
                  {feature.iconName === 'Users' && <Users className="text-jjorange" />}
                  {feature.iconName === 'Gamepad2' && <Gamepad2 className="text-jjorange" />}
                  <h3 className="text-2xl font-bold text-jjnavy">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & Reviews Marquee */}
      <section className="py-20 bg-jjnavy text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-jjorange opacity-10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">숫자가 증명하는 JJ Creative의 교육 효과</h2>
              <p className="text-blue-200">데이터로 증명된 성과, 믿고 맡길 수 있는 파트너입니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16 border-b border-white/10 pb-12">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-5xl md:text-6xl font-bold text-jjorange mb-2">{stat.value}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling Reviews Marquee */}
          <div className="w-full overflow-hidden py-8 border-y border-white/5 bg-white/5">
            <div className="flex w-max animate-marquee hover:pause">
              {/* Double the reviews for seamless looping */}
              {[...reviews, ...reviews].map((review, idx) => (
                <div key={idx} className="mx-4 w-[350px] bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 flex flex-col justify-between h-48 hover:bg-white/15 transition-colors">
                  <div>
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="#F47C20" stroke="none" />)}
                    </div>
                    <p className="text-lg font-light leading-relaxed line-clamp-3 italic">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">{review.company}</span>
                    <span className="text-sm font-bold text-jjorange">{review.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setIsImageModalOpen(false)}
        >
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}</style>
          <div
            className="relative w-[95vw] h-[90vh] max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-[slideUp_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              <h2 className="text-lg font-bold">한 눈으로 보는 기업교육 프로그램</h2>
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            {/* Image Viewer */}
            <div className="w-full h-[calc(100%-72px)] overflow-auto p-4 bg-gray-100">
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

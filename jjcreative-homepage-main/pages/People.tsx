
import React, { useState, useEffect } from 'react';
import { GraduationCap, Briefcase, Star, User, ImageOff } from 'lucide-react';
import { Expert } from '../types';

// ============================================================================
// Experts Data
// GitHub Pages 호스팅 이미지 URL 적용
// ============================================================================

const experts: Expert[] = [
  {
    name: "전재현 대표",
    role: "CEO / JJ Creative 교육연구소",
    education: "숭실대 대학원 평생교육HRD (석사)",
    career: [
      "現 JJ Creative 대표",
      "前 한국표준협회 HRD센터 선임연구원",
      "前 세원텔레콤 기획부",
      "전략 경영 시뮬레이션, 디자인 씽킹 강사"
    ],
    fields: [
      "기업가정신 & 5단계 리더십",
      "전략 경영 시뮬레이션",
      "게이미피케이션 (런닝맨, 서바이벌)",
      "창의적 문제해결 (Design Thinking)"
    ],
    image: "https://raw.githubusercontent.com/1970jjh/jjcreative-images/main/JJH.png"
  },
  {
    name: "양지아 소장",
    role: "Director / JJ Creative 교육연구소",
    education: "부산대학교 MBA (석사) / 국립 경상대 회계학",
    career: [
      "現 한국표준협회 전문위원",
      "前 삼성전자 제품강사 (IT/모바일)",
      "前 기아자동차 전문교육 강사"
    ],
    fields: [
      "소통 역량 향상 & 조직문화",
      "비즈니스 역량 (경영/업무효율화)",
      "문제해결력 향상 & 기획력",
      "리더의 스피치 & 보고스킬"
    ],
    image: "https://1970jjh.github.io/jjcreative-images/yang_ji_ah.jpg"
  },
  {
    name: "김수정 소장",
    role: "Director / JJ Creative 교육연구소",
    education: "중앙대 행정대학원 융복합표준정책학 (석사)",
    career: [
      "前 한국인재개발원 사내강사",
      "前 한국표준협회 HR역량개발센터",
      "액션 리더스 아카데미 선임연구원"
    ],
    fields: [
      "긍정 조직문화 / TA(교류분석)",
      "감성지능(EQ) 리더십 & 소통",
      "창의적 문제해결 & 집단지성",
      "상황대응 리더십 & 감정 코칭"
    ],
    image: "https://1970jjh.github.io/jjcreative-images/kim_su_jeong.jpg"
  },
  {
    name: "김주현 소장",
    role: "Director / JJ Creative 교육연구소",
    education: "경북대 교육대학원 교육사회 및 평생교육 (석사)",
    career: [
      "前 현대오일뱅크 파트너마케팅팀",
      "前 영남대학교 Y형인재교육원",
      "다움인재개발원 전문위원"
    ],
    fields: [
      "전략 경영 시뮬레이션",
      "업무 효율화 & 창의적 문제해결",
      "감성지능 개발 & 인성능력 강화",
      "프레젠테이션 & 설득의 기술"
    ],
    image: "https://1970jjh.github.io/jjcreative-images/kim_ju_hyun.jpg"
  },
  {
    name: "전필국 소장",
    role: "Director / JJ Creative 교육연구소",
    education: "충북대학교 철학 (학사)",
    career: [
      "前 한국장애인고용공단",
      "조직활성화 팀빌딩 전문가",
      "KPI/KSF 성과관리 전문"
    ],
    fields: [
      "초격차 리더십 / 동기부여 리더십",
      "조직활성화 (Survivor Racing)",
      "성과관리 (KPI, KSF)",
      "Design Thinking & 문제해결"
    ],
    image: "https://1970jjh.github.io/jjcreative-images/jeon_pil_guk.jpg"
  }
];

// ============================================================================
// Smart Image Component
// ============================================================================
const SmartImage: React.FC<{ filename: string; alt: string; className?: string }> = ({ filename, alt, className }) => {
  const [currentSrc, setCurrentSrc] = useState<string>(filename);
  const [error, setError] = useState<boolean>(false);

  // 파일명이 바뀌면 상태 초기화
  useEffect(() => {
    setCurrentSrc(filename);
    setError(false);
  }, [filename]);

  const handleError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gray-100 text-gray-400 ${className}`}>
        <ImageOff size={32} className="mb-2 opacity-50" />
        <span className="text-xs text-center px-2">이미지 없음<br/><span className="font-mono text-[10px] truncate max-w-[100px] inline-block text-gray-300">로드 실패</span></span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export const People: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-jjnavy">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80" 
            alt="Professionals" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">변화를 이끄는 전문가들</h1>
          <p className="text-xl text-gray-300">
            JJ Creative 교육연구소의 대표 강사진을 소개합니다.<br/>
            이론과 실무를 겸비한 최고의 전문가들이 함께합니다.
          </p>
        </div>
      </section>

      {/* Experts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {experts.map((expert, idx) => (
              <div 
                key={idx} 
                className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image Area */}
                <div className="aspect-[3/4] overflow-hidden bg-gray-200 relative">
                  <SmartImage
                    filename={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-jjnavy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                    <div>
                      <p className="text-white font-bold text-lg">{expert.name}</p>
                      <p className="text-jjorange text-sm">{expert.role}</p>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-jjnavy mb-1">{expert.name}</h3>
                  <p className="text-jjorange font-bold text-sm mb-4">{expert.role}</p>
                  
                  {/* Education */}
                  <div className="mb-4 flex items-start gap-2">
                    <GraduationCap size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm leading-tight">{expert.education}</p>
                  </div>

                  {/* Career */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={18} className="text-gray-400" />
                      <span className="font-bold text-gray-700 text-sm">주요 경력</span>
                    </div>
                    <ul className="text-gray-600 text-sm space-y-1 pl-6 list-disc marker:text-gray-300">
                      {expert.career.slice(0, 3).map((c, i) => (
                        <li key={i} className="line-clamp-1">{c}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Fields */}
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Star size={18} className="text-jjorange" />
                      <span className="font-bold text-jjnavy text-sm">전문 분야</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {expert.fields.slice(0, 4).map((field, i) => (
                        <span key={i} className="bg-blue-50 text-jjnavy text-xs px-2.5 py-1 rounded-md font-medium border border-blue-100">
                          {field.split('(')[0].trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-20 text-center bg-jjnavy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-jjorange opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-6">강사진의 상세 프로필이 필요하신가요?</h2>
          <p className="text-gray-300 mb-10 text-lg">
            각 강사님의 강의 영상 샘플과 상세 커리큘럼, 레퍼런스를 확인하실 수 있습니다.
          </p>
          <a 
            href="https://form.naver.com/response/S1p9qf7_I9qBZ96COOdSzA"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-jjnavy px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-lg group"
          >
            <User size={22} className="group-hover:text-jjorange transition-colors" /> 강사 프로필 및 제안서 요청
          </a>
        </div>
      </section>
    </div>
  );
};

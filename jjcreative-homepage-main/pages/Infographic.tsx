
import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';

const PROGRAM_TITLES = [
  "하이퍼포먼스 매니지먼트",
  "PBL기반 문제해결 시뮬레이션",
  "강점진단 및 역량 강화",
  "고객가치창출 고객여정지도",
  "기후변화협약 시뮬레이션",
  "고객중심문제해결 '디자인씽킹'",
  "소통협업 런닝맨 팀빌딩 투자의 귀재들",
  "서바이벌 레이싱 팀빌딩",
  "성과창출 팀장 리더십 시뮬레이션",
  "성장마인드셋 나는 솔버 I'm SOLVER",
  "전략 경영 시뮬레이션",
  "워크스마트 시뮬레이션 MOVE-IT",
  "Quinn 조직문화 개선 워크샵",
  "협력적 커뮤니케이션",
  "전략적사고와 의사결정",
  "윤리적 리더십 RED TEAM",
  "신사업 기획 '린 비즈니스 캔버스'",
  "사내강사 양성 과정",
  "팀워크 Build a Bridge",
  "팀워크 Dream ILAND"
];

const INFOGRAPHIC_IMAGES = [
  {
    url: "https://raw.githubusercontent.com/1970jjh/jjcreative-images/main/%5B%EC%A0%9C%EC%95%88%EC%84%9C%5D%20%ED%95%9C%EC%9E%A5%EC%9C%BC%EB%A1%9C%20%EB%B3%B4%EB%8A%94%202026%20JJ%20Creative%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%86%8C%20%EB%8C%80%ED%91%9C%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8/2026%20%EA%B8%B0%EC%97%85%EA%B5%90%EC%9C%A1.PNG",
    title: "2026 기업교육 프로그램"
  },
  {
    url: "https://raw.githubusercontent.com/1970jjh/jjcreative-images/main/%5B%EC%A0%9C%EC%95%88%EC%84%9C%5D%20%ED%95%9C%EC%9E%A5%EC%9C%BC%EB%A1%9C%20%EB%B3%B4%EB%8A%94%202026%20JJ%20Creative%EA%B5%90%EC%9C%A1%EC%97%B0%EA%B5%AC%EC%86%8C%20%EB%8C%80%ED%91%9C%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8/withAI.PNG",
    title: "AI 활용 교육"
  },
  // 1P 폴더 이미지 (3.PNG ~ 22.PNG)
  ...Array.from({ length: 20 }, (_, i) => ({
    url: `https://raw.githubusercontent.com/1970jjh/jjcreative-images/main/1P/${i + 3}.PNG`,
    title: PROGRAM_TITLES[i]
  }))
];

export const Infographic: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full bg-tech-bg">
      {/* Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80"
            alt="Infographic Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tech-bg/90 via-tech-bg/80 to-tech-bg"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" style={{ backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-tech-cyan text-sm tracking-widest mb-4 block">[ INFOGRAPHIC ]</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">인포그래픽</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              JJ Creative 교육연구소의 프로그램을 한눈에 살펴보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infographic Images */}
      <section className="py-16 bg-tech-panel relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INFOGRAPHIC_IMAGES.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                className="bg-tech-bg rounded-2xl overflow-hidden group cursor-pointer border border-tech-dim hover:border-tech-cyan transition-all tech-border"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-tech-bg/0 group-hover:bg-tech-bg/30 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-tech-cyan/90 rounded-full p-3">
                      <ZoomIn size={24} className="text-tech-bg" />
                    </div>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-sm font-bold text-white">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-tech-bg/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-tech-dim hover:bg-tech-cyan/30 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X size={28} className="text-white" />
          </button>
          <div
            className="relative w-[95vw] h-[90vh] overflow-auto bg-tech-panel rounded-2xl border border-tech-dim"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Infographic"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

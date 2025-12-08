
import React from 'react';
import { Star, Quote, Building2, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// 기업 로고 데이터
const clientLogos = [
  { name: 'SK하이닉스', logo: 'https://logo.clearbit.com/skhynix.com' },
  { name: '삼성전자', logo: 'https://logo.clearbit.com/samsung.com' },
  { name: 'LG전자', logo: 'https://logo.clearbit.com/lg.com' },
  { name: '현대자동차', logo: 'https://logo.clearbit.com/hyundai.com' },
  { name: 'CJ그룹', logo: 'https://logo.clearbit.com/cj.net' },
  { name: '롯데그룹', logo: 'https://logo.clearbit.com/lotte.co.kr' },
  { name: 'GS그룹', logo: 'https://logo.clearbit.com/gs.co.kr' },
  { name: '두산그룹', logo: 'https://logo.clearbit.com/doosan.com' },
  { name: '포스코', logo: 'https://logo.clearbit.com/posco.com' },
  { name: '한화그룹', logo: 'https://logo.clearbit.com/hanwha.com' },
  { name: '평화그룹', logo: 'https://logo.clearbit.com/peaceholdings.co.kr' },
  { name: 'JW그룹', logo: 'https://logo.clearbit.com/jw-group.co.kr' },
];

// 워드클라우드 키워드들
const wordCloudKeywords = [
  { text: '협력', size: 'text-5xl', color: 'text-jjnavy' },
  { text: '소통', size: 'text-5xl', color: 'text-blue-600' },
  { text: '즐거움', size: 'text-4xl', color: 'text-jjorange' },
  { text: '성장', size: 'text-4xl', color: 'text-gray-800' },
  { text: '효율화', size: 'text-4xl', color: 'text-gray-700' },
  { text: '힐링', size: 'text-3xl', color: 'text-cyan-600' },
  { text: '꿀잼', size: 'text-3xl', color: 'text-green-600' },
  { text: '링커십', size: 'text-3xl', color: 'text-blue-500' },
  { text: '성취감', size: 'text-2xl', color: 'text-purple-600' },
  { text: '재미', size: 'text-2xl', color: 'text-pink-500' },
  { text: '단합', size: 'text-2xl', color: 'text-gray-600' },
  { text: '협업', size: 'text-2xl', color: 'text-indigo-600' },
  { text: '원팀!', size: 'text-xl', color: 'text-red-500' },
  { text: '감동', size: 'text-xl', color: 'text-amber-600' },
  { text: '열정', size: 'text-xl', color: 'text-orange-500' },
  { text: '마인드셋', size: 'text-lg', color: 'text-gray-500' },
  { text: '리프레쉬', size: 'text-lg', color: 'text-teal-500' },
  { text: '실제적 도움', size: 'text-lg', color: 'text-gray-600' },
  { text: '깨달음', size: 'text-lg', color: 'text-violet-500' },
  { text: 'Good', size: 'text-lg', color: 'text-green-500' },
  { text: '레전드~', size: 'text-base', color: 'text-yellow-600' },
  { text: '유익함', size: 'text-base', color: 'text-blue-400' },
  { text: '최적화', size: 'text-base', color: 'text-gray-500' },
  { text: '행복', size: 'text-base', color: 'text-pink-400' },
  { text: 'POWER', size: 'text-base', color: 'text-red-400' },
];

// 교육 후기 데이터
const reviews = [
  {
    text: "단계별로 시뮬레이션을 통해 처음부터 마지막까지 목표달성률이 올라가는 점이 보람찼습니다.",
    company: "JW그룹",
    program: "JW WAY 시뮬레이션"
  },
  {
    text: "팀원들과 논의하면서 해결방안을 찾아나가고 그로 인해 어려운 목표를 여유롭게 달성해내는게 좋았어요.",
    company: "대기업 A사",
    program: "문제해결 과정"
  },
  {
    text: "일방적 듣기만 하는 수업이 아닌 참여할 수 있는 시간이어서 좋았습니다.",
    company: "평화그룹",
    program: "신입 입문과정"
  },
  {
    text: "타사에서 무의미하게 여겨지는 교육도 있는 반면 시뮬레이션이나 설명 모두 실무에 빗대어 생각해 볼 수 있어서 참여 가치 있는 시간이었다.",
    company: "SK하이닉스",
    program: "팀빌딩 과정"
  },
  {
    text: "롤플레잉을 하면서 동료분들과 소통을 하면서 업무 효율화를 많이 증가시켰고 대화를 통해 더 나은 방향을 향해 나아가는 모습이 좋았다.",
    company: "대기업 B사",
    program: "리더십 과정"
  },
  {
    text: "가감없이 의견나누고 한 마음으로 으싸으싸 해보자는 분위기가 좋았습니다.",
    company: "대기업 C사",
    program: "조직활성화 과정"
  },
  {
    text: "본인의 일에 끝까지 좋은 결과를 내려고 노력하는 모든 분들 특히 저희 팀 별담당으로 끝내 최고의 결과를 내는 모습에 깊은 감동이었습니다!!",
    company: "대기업 D사",
    program: "팀빌딩 시뮬레이션"
  },
  {
    text: "팀원들과 소통하면서 업무방식과 환경을 개선하여 더 좋은결과를 얻을수 있었다는 점이 좋았습니다.",
    company: "대기업 E사",
    program: "협업 과정"
  },
  {
    text: "링커십 진단 내가 링커로서 일하는 과정을 돌아볼 수 있어서 좋았습니다. 업무의 특성으로 장점과 단점이 명확해졌습니다.",
    company: "대기업 F사",
    program: "링커십 과정"
  },
];

export const Reference: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gradient-to-br from-jjnavy via-slate-800 to-jjnavy">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23fff%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-8 h-8 text-jjorange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Reference</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              국내 주요 기업들과 함께한 JJ Creative의 교육 성과
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-jjnavy/10 text-jjnavy px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Building2 size={16} />
              OUR CLIENTS
            </div>
            <h2 className="text-3xl font-bold text-jjnavy mb-4">함께한 기업들</h2>
            <p className="text-gray-600">국내 주요 대기업 및 기관들과 함께 교육을 진행하고 있습니다.</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clientLogos.map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center justify-center h-24"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="text-sm font-bold text-gray-400">${client.name}</span>`;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Word Cloud Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-jjnavy mb-4">교육생들의 한마디</h2>
            <p className="text-gray-600">"오늘 과정에 대한 소감을 한 단어로 표현한다면?"</p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {wordCloudKeywords.map((word, idx) => (
                <motion.span
                  key={word.text}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className={`${word.size} ${word.color} font-bold hover:scale-110 transition-transform cursor-default`}
                  style={{
                    transform: `rotate(${Math.random() * 10 - 5}deg)`,
                  }}
                >
                  {word.text}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-jjorange/20 text-jjorange px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Users size={16} />
              TESTIMONIALS
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">교육 참가자 후기</h2>
            <p className="text-gray-400">실제 교육에 참여한 분들의 생생한 후기입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-800 rounded-2xl p-6 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-700" />
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="#F47C20" stroke="none" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  "{review.text}"
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-white font-bold text-sm">{review.company}</p>
                  <p className="text-gray-500 text-xs">{review.program}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-jjorange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">500+</p>
              <p className="text-white/80 text-sm">누적 교육 기업</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">50,000+</p>
              <p className="text-white/80 text-sm">누적 교육 인원</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">4.8</p>
              <p className="text-white/80 text-sm">평균 만족도</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">95%</p>
              <p className="text-white/80 text-sm">재계약률</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-jjnavy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">귀사도 JJ Creative와 함께하세요!</h2>
          <p className="text-gray-400 mb-8">맞춤형 기업 교육 프로그램에 대해 문의해 주세요.</p>
          <a
            href="#/contact"
            className="inline-flex items-center gap-2 bg-jjorange hover:bg-jjorange/90 text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1"
          >
            교육 문의하기
          </a>
        </div>
      </section>
    </div>
  );
};

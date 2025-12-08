
import React from 'react';
import { Target, Lightbulb, Compass, Award, Gamepad2, Users, BrainCircuit, Rocket, MonitorPlay } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80"
            alt="AI Corporate Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">교육으로 가치를 더하다</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            사람과 조직의 성장을 돕는 진정한 파트너, JJ Creative 교육연구소입니다.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-cyan-600 mb-12">Vision & Mission</h2>
          <p className="text-4xl md:text-5xl font-bold text-jjnavy mb-10">
            "기업교육 with AI"
          </p>
          <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-2">
            <p>JJ Creative 교육연구소는</p>
            <p>AI / 게이미피케이션/시뮬레이션 기반의 교육을 통해</p>
            <p>기업 조직의 실행력과 성과를 높이는</p>
            <p className="font-bold text-jjnavy">혁신적인 기업 교육 파트너입니다</p>
          </div>
        </div>
      </section>

      {/* Philosophy: Fun -> Edu -> Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-jjnavy">Our Unique Process</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              JJ Creative의 교육은 독창적인 3단계 프로세스(Fun-Edu-Action)를 통해<br className="hidden md:block" />
              학습자의 몰입을 이끌어내고 실질적인 행동 변화를 만듭니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
             {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-0 transform -translate-y-1/2 scale-x-75"></div>

            <div className="relative z-10 bg-white p-8 mx-4 rounded-xl shadow-lg border-b-4 border-jjorange text-center transform hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-jjorange">
                <Gamepad2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-jjnavy mb-3">Fun</h3>
              <p className="text-sm font-bold text-jjorange mb-4 tracking-wider">GAMEIFICATION</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                게임화된 미션 수행 방식으로 즐겁게 교육에 참여하고 몰입합니다.<br/>
                과정 학습의 필요성을 스스로 체험하며 동기를 부여받습니다.
              </p>
            </div>

            <div className="relative z-10 bg-white p-8 mx-4 rounded-xl shadow-lg border-b-4 border-jjnavy text-center transform hover:-translate-y-2 transition-transform mt-8 md:mt-0">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-jjnavy">
                <BrainCircuit size={32} />
              </div>
              <h3 className="text-2xl font-bold text-jjnavy mb-3">Edu</h3>
              <p className="text-sm font-bold text-jjnavy mb-4 tracking-wider">LEARNING</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                미션 수행 과정의 피드백을 바탕으로 목표 달성을 위한<br/>
                이론적, 실무적 핵심 요소를 체계적으로 학습합니다.
              </p>
            </div>

            <div className="relative z-10 bg-white p-8 mx-4 rounded-xl shadow-lg border-b-4 border-green-600 text-center transform hover:-translate-y-2 transition-transform mt-8 md:mt-0">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-700">
                <Rocket size={32} />
              </div>
              <h3 className="text-2xl font-bold text-jjnavy mb-3">Action</h3>
              <p className="text-sm font-bold text-green-700 mb-4 tracking-wider">APPLICATION</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                현업 적용을 위해 개인적/조직적 차원에서 실행할 수 있는<br/>
                구체적인 방안을 찾아 공동의 목표를 달성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-bold text-jjnavy mb-6">Business Areas</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                JJ Creative 교육연구소는 기업 교육의 전반적인 영역에서 전문적인 솔루션을 제공합니다.
              </p>
              {/* 기업교육 with AI 애니메이션 */}
              <div className="bg-gradient-to-br from-jjnavy to-slate-900 p-8 rounded-2xl shadow-2xl border border-gray-700 h-[300px] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-jjorange opacity-10 rounded-full blur-3xl -mr-32 -mt-32 animate-pulse group-hover:opacity-20 transition-opacity duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl -ml-32 -mb-32 animate-pulse group-hover:opacity-20 transition-opacity duration-1000" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  className="relative z-10 text-center flex flex-col items-center"
                >
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-white text-2xl md:text-4xl font-extrabold tracking-tight mb-2 block"
                  >
                    기업교육
                  </motion.span>
                  <motion.span
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                    className="text-jjorange text-3xl md:text-5xl font-black tracking-tighter block"
                    style={{ textShadow: "0 4px 20px rgba(244, 124, 32, 0.5)" }}
                  >
                    with AI
                  </motion.span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="h-1 bg-white mt-6 rounded-full"
                  />
                </motion.div>
              </div>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center text-jjnavy font-bold">01</div>
                  <h3 className="text-xl font-bold text-jjnavy">Gamification</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                  <li>소통협력 팀빌딩 / 조직활성화</li>
                  <li>전략 경영 시뮬레이션</li>
                  <li>업무효율과 생산성 향상 시뮬레이션</li>
                  <li>게임으로 풀어보는 갈등관리</li>
                </ul>
              </div>
              <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center text-jjnavy font-bold">02</div>
                  <h3 className="text-xl font-bold text-jjnavy">Leadership</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                  <li>아들러 리더십 / 셀프 리더십</li>
                  <li>계층별(팀장/중간/초급) 리더십</li>
                  <li>팔로워십 프로그램</li>
                </ul>
              </div>
              <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center text-jjnavy font-bold">03</div>
                  <h3 className="text-xl font-bold text-jjnavy">Problem Solving</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                  <li>전략적 사고력 개발</li>
                  <li>합리적 의사결정</li>
                  <li>창의적 문제해결 (Design Thinking)</li>
                </ul>
              </div>
              <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center text-jjnavy font-bold">04</div>
                  <h3 className="text-xl font-bold text-jjnavy">Facilitator</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                  <li>사내강사 양성 과정</li>
                  <li>창의적 교수법 및 퍼실리테이터 양성</li>
                  <li>지두력 교육 게임 강사 양성</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">History</h2>
            <p className="text-gray-400 mt-2">지속적인 콘텐츠 개발과 혁신의 발자취</p>
          </div>
          <div className="border-l-2 border-gray-700 ml-4 space-y-12">
            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-jjorange rounded-full ring-4 ring-gray-900 group-hover:scale-125 transition-transform"></div>
              <span className="text-2xl font-bold text-jjorange block mb-2">2025</span>
              <h3 className="text-lg font-bold text-white">AI 활용 과정 런칭</h3>
              <p className="text-gray-400">생성형 AI 실무 적용 능력 강화 프로그램 개발</p>
            </div>
            
            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-gray-600 rounded-full ring-4 ring-gray-900 group-hover:bg-gray-400 transition-colors"></div>
              <span className="text-xl font-bold text-white block mb-2">2024</span>
              <h3 className="text-lg font-bold text-white">린캔버스 기획 과정</h3>
              <p className="text-gray-400">Agile Change-Agent 양성 및 린스타트업 기획 프로그램</p>
            </div>

            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-gray-600 rounded-full ring-4 ring-gray-900 group-hover:bg-gray-400 transition-colors"></div>
              <span className="text-xl font-bold text-white block mb-2">2023</span>
              <h3 className="text-lg font-bold text-white">다양한 자체 프로그램 개발</h3>
              <p className="text-gray-400">
                '나는 솔버' 문제해결, PBW 성과관리, 팀장 리더십 시뮬레이션,<br/>
                윤리적 리더십, 레이싱 팀빌딩 등 다수 런칭
              </p>
            </div>

            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-gray-600 rounded-full ring-4 ring-gray-900 group-hover:bg-gray-400 transition-colors"></div>
              <span className="text-xl font-bold text-white block mb-2">2021 ~ 2022</span>
              <h3 className="text-lg font-bold text-white">비대면 & 게이미피케이션 확장</h3>
              <p className="text-gray-400">
                메타버스 방탈출 팀빌딩(2021), 런닝맨 팀빌딩(2022) 개발<br/>
                JJ Creative 교육연구소 법인 전환
              </p>
            </div>

            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-gray-600 rounded-full ring-4 ring-gray-900 group-hover:bg-gray-400 transition-colors"></div>
              <span className="text-xl font-bold text-white block mb-2">2014 ~ 2019</span>
              <h3 className="text-lg font-bold text-white">Foundations</h3>
              <p className="text-gray-400">
                지두력(Brain Power) 교육, Move-it 시뮬레이션,<br/>
                경영 시뮬레이션 및 문제해결 FT 과정 개발
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-jjnavy py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">JJ Creative의 더 많은 이야기가 궁금하시다면?</h2>
          <a 
            href="https://blog.naver.com/wofyrhd"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-jjnavy px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <MonitorPlay size={20} /> 리얼 교육 현장 보기
          </a>
        </div>
      </section>
    </div>
  );
};

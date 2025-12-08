
import React from 'react';
import { Target, Lightbulb, Compass, Award, Gamepad2, Users, BrainCircuit, Rocket, MonitorPlay } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="w-full bg-tech-bg">
      {/* Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80"
            alt="AI Corporate Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tech-bg/90 via-tech-bg/80 to-tech-bg"></div>
          {/* Tech Grid Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" style={{ backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-tech-cyan text-sm tracking-widest mb-4 block">[ ABOUT_US ]</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">교육으로 가치를 더하다</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              사람과 조직의 성장을 돕는 진정한 파트너, JJ Creative 교육연구소입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-tech-panel relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-mono text-tech-cyan text-sm tracking-widest mb-4 block">// VISION & MISSION</span>
          <h2 className="text-3xl font-bold text-tech-cyan mb-12">Vision & Mission</h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-10"
          >
            "기업교육 with AI"
          </motion.p>
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-2">
            <p>JJ Creative 교육연구소는</p>
            <p>AI / 게이미피케이션/시뮬레이션 기반의 교육을 통해</p>
            <p>기업 조직의 실행력과 성과를 높이는</p>
            <p className="font-bold text-tech-cyan">혁신적인 기업 교육 파트너입니다</p>
          </div>
        </div>
      </section>

      {/* Philosophy: Fun -> Edu -> Action */}
      <section className="py-20 bg-tech-bg relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-tech-cyan text-sm tracking-widest mb-4 block">// OUR_PROCESS</span>
            <h2 className="text-3xl font-bold text-white">Our Unique Process</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              JJ Creative의 교육은 독창적인 3단계 프로세스(Fun-Edu-Action)를 통해<br className="hidden md:block" />
              학습자의 몰입을 이끌어내고 실질적인 행동 변화를 만듭니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
             {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-cyan/30 to-transparent -z-0 transform -translate-y-1/2"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative z-10 bg-tech-panel p-8 mx-4 rounded-xl border border-tech-dim hover:border-jjorange transition-all text-center transform hover:-translate-y-2 tech-border"
            >
              <div className="w-16 h-16 bg-jjorange/20 rounded-full flex items-center justify-center mx-auto mb-6 text-jjorange">
                <Gamepad2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Fun</h3>
              <p className="text-sm font-bold text-jjorange mb-4 tracking-wider font-mono">GAMEIFICATION</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                게임화된 미션 수행 방식으로 즐겁게 교육에 참여하고 몰입합니다.<br/>
                과정 학습의 필요성을 스스로 체험하며 동기를 부여받습니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10 bg-tech-panel p-8 mx-4 rounded-xl border border-tech-dim hover:border-tech-cyan transition-all text-center transform hover:-translate-y-2 mt-8 md:mt-0 tech-border"
            >
              <div className="w-16 h-16 bg-tech-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6 text-tech-cyan">
                <BrainCircuit size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Edu</h3>
              <p className="text-sm font-bold text-tech-cyan mb-4 tracking-wider font-mono">LEARNING</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                미션 수행 과정의 피드백을 바탕으로 목표 달성을 위한<br/>
                이론적, 실무적 핵심 요소를 체계적으로 학습합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative z-10 bg-tech-panel p-8 mx-4 rounded-xl border border-tech-dim hover:border-green-500 transition-all text-center transform hover:-translate-y-2 mt-8 md:mt-0 tech-border"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
                <Rocket size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Action</h3>
              <p className="text-sm font-bold text-green-400 mb-4 tracking-wider font-mono">APPLICATION</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                현업 적용을 위해 개인적/조직적 차원에서 실행할 수 있는<br/>
                구체적인 방안을 찾아 공동의 목표를 달성합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-20 bg-tech-panel relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <span className="font-mono text-tech-cyan text-sm tracking-widest mb-4 block">// BUSINESS_AREAS</span>
              <h2 className="text-3xl font-bold text-white mb-6">Business Areas</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                JJ Creative 교육연구소는 기업 교육의 전반적인 영역에서 전문적인 솔루션을 제공합니다.
              </p>
              {/* 기업교육 with AI 애니메이션 */}
              <div className="bg-gradient-to-br from-tech-bg to-slate-900 p-8 rounded-2xl border border-tech-dim h-[300px] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-jjorange opacity-10 rounded-full blur-3xl -mr-32 -mt-32 animate-pulse group-hover:opacity-20 transition-opacity duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-tech-cyan opacity-10 rounded-full blur-3xl -ml-32 -mb-32 animate-pulse group-hover:opacity-20 transition-opacity duration-1000" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" style={{ backgroundSize: '20px 20px' }}></div>
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
                    className="h-1 bg-tech-cyan mt-6 rounded-full"
                  />
                </motion.div>
              </div>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-6 bg-tech-bg border border-tech-dim rounded-lg hover:border-tech-cyan transition-all tech-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-tech-cyan/20 rounded flex items-center justify-center text-tech-cyan font-bold font-mono">01</div>
                  <h3 className="text-xl font-bold text-white">Gamification</h3>
                </div>
                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                  <li>소통협력 팀빌딩 / 조직활성화</li>
                  <li>전략 경영 시뮬레이션</li>
                  <li>업무효율과 생산성 향상 시뮬레이션</li>
                  <li>게임으로 풀어보는 갈등관리</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6 bg-tech-bg border border-tech-dim rounded-lg hover:border-tech-cyan transition-all tech-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-tech-cyan/20 rounded flex items-center justify-center text-tech-cyan font-bold font-mono">02</div>
                  <h3 className="text-xl font-bold text-white">Leadership</h3>
                </div>
                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                  <li>아들러 리더십 / 셀프 리더십</li>
                  <li>계층별(팀장/중간/초급) 리더십</li>
                  <li>팔로워십 프로그램</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="p-6 bg-tech-bg border border-tech-dim rounded-lg hover:border-tech-cyan transition-all tech-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-tech-cyan/20 rounded flex items-center justify-center text-tech-cyan font-bold font-mono">03</div>
                  <h3 className="text-xl font-bold text-white">Problem Solving</h3>
                </div>
                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                  <li>전략적 사고력 개발</li>
                  <li>합리적 의사결정</li>
                  <li>창의적 문제해결 (Design Thinking)</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="p-6 bg-tech-bg border border-tech-dim rounded-lg hover:border-tech-cyan transition-all tech-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-tech-cyan/20 rounded flex items-center justify-center text-tech-cyan font-bold font-mono">04</div>
                  <h3 className="text-xl font-bold text-white">Facilitator</h3>
                </div>
                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                  <li>사내강사 양성 과정</li>
                  <li>창의적 교수법 및 퍼실리테이터 양성</li>
                  <li>지두력 교육 게임 강사 양성</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-tech-bg text-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-tech-cyan text-sm tracking-widest mb-4 block">// HISTORY</span>
            <h2 className="text-3xl font-bold text-white">History</h2>
            <p className="text-gray-400 mt-2">지속적인 콘텐츠 개발과 혁신의 발자취</p>
          </div>
          <div className="border-l-2 border-tech-dim ml-4 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative pl-8 group"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-jjorange rounded-full ring-4 ring-tech-bg group-hover:scale-125 transition-transform"></div>
              <span className="text-2xl font-bold text-jjorange block mb-2 font-mono">2025</span>
              <h3 className="text-lg font-bold text-white">AI 활용 과정 런칭</h3>
              <p className="text-gray-400">생성형 AI 실무 적용 능력 강화 프로그램 개발</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-8 group"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-tech-dim rounded-full ring-4 ring-tech-bg group-hover:bg-tech-cyan transition-colors"></div>
              <span className="text-xl font-bold text-white block mb-2 font-mono">2024</span>
              <h3 className="text-lg font-bold text-white">린캔버스 기획 과정</h3>
              <p className="text-gray-400">Agile Change-Agent 양성 및 린스타트업 기획 프로그램</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative pl-8 group"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-tech-dim rounded-full ring-4 ring-tech-bg group-hover:bg-tech-cyan transition-colors"></div>
              <span className="text-xl font-bold text-white block mb-2 font-mono">2023</span>
              <h3 className="text-lg font-bold text-white">다양한 자체 프로그램 개발</h3>
              <p className="text-gray-400">
                '나는 솔버' 문제해결, PBW 성과관리, 팀장 리더십 시뮬레이션,<br/>
                윤리적 리더십, 레이싱 팀빌딩 등 다수 런칭
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative pl-8 group"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-tech-dim rounded-full ring-4 ring-tech-bg group-hover:bg-tech-cyan transition-colors"></div>
              <span className="text-xl font-bold text-white block mb-2 font-mono">2021 ~ 2022</span>
              <h3 className="text-lg font-bold text-white">비대면 & 게이미피케이션 확장</h3>
              <p className="text-gray-400">
                메타버스 방탈출 팀빌딩(2021), 런닝맨 팀빌딩(2022) 개발<br/>
                JJ Creative 교육연구소 법인 전환
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative pl-8 group"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-tech-dim rounded-full ring-4 ring-tech-bg group-hover:bg-tech-cyan transition-colors"></div>
              <span className="text-xl font-bold text-white block mb-2 font-mono">2014 ~ 2019</span>
              <h3 className="text-lg font-bold text-white">Foundations</h3>
              <p className="text-gray-400">
                지두력(Brain Power) 교육, Move-it 시뮬레이션,<br/>
                경영 시뮬레이션 및 문제해결 FT 과정 개발
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-tech-panel to-tech-bg py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tech-cyan/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-2xl font-bold text-white mb-6">JJ Creative의 더 많은 이야기가 궁금하시다면?</h2>
          <a
            href="https://blog.naver.com/wofyrhd"
            target="_blank"
            rel="noreferrer"
            className="bg-tech-cyan hover:bg-tech-accent text-tech-bg px-8 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2 hover:-translate-y-1"
          >
            <MonitorPlay size={20} /> 리얼 교육 현장 보기
          </a>
        </div>
      </section>
    </div>
  );
};

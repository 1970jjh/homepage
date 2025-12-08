
import React from 'react';
import { Bot, Sparkles, Cpu, Zap, ArrowRight, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export const AIAgent: React.FC = () => {
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

      {/* AI Agent Apps Showcase */}
      <section className="py-20 bg-tech-bg relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-tech-cyan text-sm tracking-widest mb-4 block">// OUR_APPS</span>
            <h2 className="text-3xl font-bold text-white mb-4">Our AI Agent Apps</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              JJ Creative가 직접 개발한 AI 에이전트 앱들을 소개합니다.
            </p>
          </div>

          {/* Placeholder Cards for AI Apps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="bg-tech-panel rounded-2xl overflow-hidden border border-tech-dim hover:border-tech-cyan transition-all group tech-border"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-tech-bg to-tech-panel flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-tech-cyan/10"></div>
                  <div className="text-center">
                    <Bot className="w-16 h-16 text-tech-dim mx-auto mb-2" />
                    <span className="text-sm text-gray-500 font-medium font-mono">AI App #{item}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-jjorange text-white text-xs font-bold px-3 py-1 rounded-full font-mono">
                    Coming Soon
                  </div>
                </div>

                {/* Content Placeholder */}
                <div className="p-6">
                  <div className="h-6 bg-tech-dim rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-tech-bg rounded w-full mb-2"></div>
                  <div className="h-4 bg-tech-bg rounded w-5/6 mb-4"></div>

                  <div className="flex items-center justify-between pt-4 border-t border-tech-dim">
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full font-mono">AI</span>
                      <span className="px-2 py-1 bg-tech-cyan/20 text-tech-cyan text-xs rounded-full font-mono">Education</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-tech-cyan transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
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

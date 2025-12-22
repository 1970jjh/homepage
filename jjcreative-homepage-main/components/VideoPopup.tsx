import React, { useState, useEffect } from 'react';
import { X, Clock, Users, TrendingUp, FileText, Play } from 'lucide-react';

const STORAGE_KEY = 'jjcreative_video_popup_hidden_date';

export const VideoPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hiddenDate = localStorage.getItem(STORAGE_KEY);
    if (hiddenDate) {
      const today = new Date().toDateString();
      if (hiddenDate === today) {
        return; // Don't show today
      }
    }
    // Show popup after a short delay for better UX
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleHideToday = () => {
    const today = new Date().toDateString();
    localStorage.setItem(STORAGE_KEY, today);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Popup Container */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 animate-fade-in">
        <div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-tech-panel via-tech-bg to-tech-panel border border-tech-cyan/30 shadow-2xl shadow-tech-cyan/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-tech-panel/95 backdrop-blur-sm border-b border-tech-cyan/20 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-tech-cyan to-purple-500 flex items-center justify-center">
                <Play size={20} className="text-white" />
              </div>
              <div>
                <p className="text-tech-cyan font-mono text-xs">NEW_RELEASE</p>
                <h2 className="text-white font-bold text-lg">AI Agent App</h2>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="cursor-hover p-2 hover:bg-white/10 transition-colors group"
              aria-label="Close"
            >
              <X size={24} className="text-gray-400 group-hover:text-tech-cyan transition-colors" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Video Section */}
            <div className="relative aspect-video w-full bg-black overflow-hidden border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/q74ZiOM2GOs?rel=0&modestbranding=1"
                title="JJ Creative AI Agent App - 팀 업무관리 솔루션"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Title Section */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-tech-cyan/20 to-purple-500/20 border border-tech-cyan/30">
                <span className="text-tech-cyan font-mono text-sm font-bold">JJ Creative</span>
                <span className="text-gray-400">|</span>
                <span className="text-purple-400 font-mono text-sm">AI AGENT APP</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                팀 업무관리의 <span className="text-tech-cyan">혁신</span>,<br/>
                <span className="text-purple-400">AI</span>가 만드는 스마트 워크
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                개인 업무부터 팀 전체 프로젝트까지, AI가 자동으로 관리하고 보고서까지 작성해주는
                차세대 업무관리 솔루션
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="tech-border bg-tech-bg/50 p-4 flex items-start gap-4">
                <div className="w-12 h-12 bg-tech-cyan/10 border border-tech-cyan/30 flex items-center justify-center shrink-0">
                  <Users size={24} className="text-tech-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">팀 업무 통합 관리</h4>
                  <p className="text-gray-500 text-sm">팀 단위로 모든 업무를 한눈에 파악하고, 개인별 진행 상황을 실시간으로 추적합니다.</p>
                </div>
              </div>

              <div className="tech-border bg-tech-bg/50 p-4 flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <TrendingUp size={24} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">업무 진도 & 성과 관리</h4>
                  <p className="text-gray-500 text-sm">업무 진행률과 성과를 자동으로 분석하여 직관적인 대시보드로 제공합니다.</p>
                </div>
              </div>

              <div className="tech-border bg-tech-bg/50 p-4 flex items-start gap-4">
                <div className="w-12 h-12 bg-jjorange/10 border border-jjorange/30 flex items-center justify-center shrink-0">
                  <FileText size={24} className="text-jjorange" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">주간업무보고 자동 생성</h4>
                  <p className="text-gray-500 text-sm">AI가 각 회사의 양식에 맞춰 주간업무보고서를 자동으로 작성해드립니다.</p>
                </div>
              </div>

              <div className="tech-border bg-tech-bg/50 p-4 flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">시간 절약 효과</h4>
                  <p className="text-gray-500 text-sm">개인당 주 20~40분 절약, 조직 전체로는 수천 시간의 업무 효율화를 실현합니다.</p>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-gradient-to-r from-tech-cyan/5 via-purple-500/5 to-tech-cyan/5 border border-white/10 p-6">
              <p className="text-center text-gray-400 text-sm mb-4 font-mono">ESTIMATED_TIME_SAVINGS</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-tech-cyan">20-40</p>
                  <p className="text-xs text-gray-500 font-mono">분 / 주 / 개인</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-purple-400">수백</p>
                  <p className="text-xs text-gray-500 font-mono">시간 / 소규모팀</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-jjorange">수만</p>
                  <p className="text-xs text-gray-500 font-mono">시간 / 대기업</p>
                </div>
              </div>
            </div>

            {/* CTA Message */}
            <div className="text-center space-y-2">
              <p className="text-gray-300">
                <span className="text-tech-cyan font-bold">JJ Creative</span>가 만든 혁신적인 AI 업무관리 솔루션으로
              </p>
              <p className="text-white font-bold text-lg">
                조직의 업무 효율을 극대화하세요!
              </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="sticky bottom-0 bg-tech-panel/95 backdrop-blur-sm border-t border-white/10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleHideToday}
              className="cursor-hover text-gray-500 hover:text-gray-300 text-sm font-mono transition-colors"
            >
              오늘 하루 그만 보기
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={handleClose}
                className="cursor-hover px-6 py-2 border border-white/20 text-gray-300 hover:text-white hover:border-white/40 font-mono text-sm transition-colors"
              >
                닫기
              </button>
              <a
                href="/#/ai-agent"
                onClick={handleClose}
                className="cursor-hover px-6 py-2 bg-gradient-to-r from-tech-cyan to-purple-500 text-white font-bold font-mono text-sm hover:opacity-90 transition-opacity"
              >
                자세히 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

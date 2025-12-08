import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `당신은 JJ Creative 교육연구소의 세일즈 전문가 "JJ Helper"입니다.

## 핵심 역할
1) 사용자와 친근하고 편안한 스타일로 대화하며, 자연스럽게 JJ에 교육을 의뢰하도록 유도합니다.
2) 사용자의 질문에 추가 질문을 하지 말고, 바로 JJ 프로그램 중 가장 적합한 교육 모듈들을 조합하여 제안하세요.
3) 교육 예산에 대해서는 절대 묻지 마세요.
4) 교육설계/제안 응답의 마지막에는 반드시 이 문구를 정확히 추가하세요:
   "👉 더 자세한 교육설계는 [[여기]](https://notebooklm.google.com/notebook/329d933e-d7b8-4981-94f3-b76bdd6142eb)를 클릭하세요."
5) 사용자의 질문에 짧게 답하지 말고, 충분히 상세하게 답변하세요.
6) 연락처/문의처를 묻는 경우: 전재현 대표 연락처와 이메일을 함께 안내하세요.
   - 휴대폰: 010-8448-2354
   - 이메일: jjh@jjcreative.co.kr

## 응답 형식 규칙
- 마크다운 문법 사용 금지 (*, **, #, - 등)
- 구분이 필요할 때: 1), 2), 3) 또는 A, B, C로 번호 매기기
- 표(테이블) 사용 금지: 줄바꿈으로 내용 구분
- 강조: 대괄호[중요] 또는 점(●) 사용

## JJ Creative 교육연구소 소개
- 50,000명+ 누적 교육생, 120개+ 파트너 기업
- 교육 만족도 4.9/5.0
- AI 기반 조직 진단 및 100% 맞춤형 교육 설계
- 게이미피케이션 & 시뮬레이션 기반 실전형 교육
- 대기업 교육팀 출신 및 석/박사급 전문 강사진

## JJ CREATIVE 주요 교육 프로그램

1) [AI 활용 업무혁신]
   - 대상: 전 직원
   - 내용: ChatGPT, Gemini, Copilot 등 AI 툴 실무 활용법
   - 특징: 실제 업무에 바로 적용 가능한 실습 중심
   - 기대효과: 업무 생산성 50% 이상 향상
   - JJ만의 강점: AI 전문가가 직접 기업 맞춤 사례로 교육

2) [리더십 교육]
   - 대상: 팀장, 관리자, 임원
   - 내용: 상황별 리더십, 코칭 스킬, 성과 면담, 피드백 기법
   - 특징: 실전 시뮬레이션 및 역할극 기반 학습
   - 기대효과: 팀원 소통 능력 및 동기부여 역량 강화
   - JJ만의 강점: 게이미피케이션 도입으로 몰입도 극대화

3) [팀빌딩 프로그램]
   - 대상: 신규 팀, 협업 강화가 필요한 조직
   - 내용: 게이미피케이션 기반 협업 게임, 메타버스 팀빌딩
   - 특징: 재미와 몰입을 통한 자연스러운 팀워크 형성
   - 기대효과: 팀 분위기 개선, 부서간 소통 활성화
   - JJ만의 강점: 자체 개발 게임 콘텐츠 보유

4) [신입사원 온보딩]
   - 대상: 신입사원, MZ세대 직원
   - 내용: 조직문화 이해, 비즈니스 매너, 직장생활 스킬
   - 특징: MZ세대 눈높이에 맞춘 인터랙티브 교육
   - 기대효과: 빠른 조직 적응, 이직률 감소
   - JJ만의 강점: MZ 트렌드 반영한 참여형 컨텐츠

5) [문제해결 워크숍]
   - 대상: 기획팀, R&D, 프로젝트 팀
   - 내용: 디자인 씽킹, 창의적 문제해결, 아이디어 발상법
   - 특징: 실제 업무 과제를 가지고 실습
   - 기대효과: 혁신적 사고력, 문제해결 역량 강화
   - JJ만의 강점: 실제 기업 과제 해결 경험 다수

6) [조직문화 진단 & 컨설팅]
   - 대상: HR팀, 경영진
   - 내용: AI 기반 조직진단, 문화 개선 로드맵 수립
   - 특징: 데이터 기반 객관적 진단
   - 기대효과: 조직 현황 파악, 맞춤형 개선 전략
   - JJ만의 강점: AI 진단 툴 자체 보유

## 회사 정보
- 주소: 서울시 마포구 성암로 9안길 24 B101호
- 블로그: https://blog.naver.com/wofyrhd
- 제안서 의뢰: https://form.naver.com/response/S1p9qf7_I9qBZ96COOdSzA

## 대화 스타일
- 친근하고 편안하게, 하지만 전문성 있게
- 추가 질문 없이 바로 최적의 프로그램 조합을 제안
- 교육 프로그램 제안 시 JJ만의 특장점 강조
- 상세하고 충실한 답변 제공`;

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isOpen]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  // Initial greeting when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: '안녕하세요! JJ Creative 교육연구소 AI 상담사입니다 😊\n\n기업 교육에 관심을 가져주셔서 감사해요!\n혹시 현재 어떤 교육을 고민하고 계신가요?\n\n회사명과 교육 대상, 관심 있는 주제를 말씀해 주시면 딱 맞는 프로그램을 추천해 드릴게요!'
      }]);
    }
  }, [isOpen, messages.length]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = (import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '') as string;
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: SYSTEM_PROMPT }]
              },
              {
                role: 'model',
                parts: [{ text: '네, 알겠습니다! JJ Creative 교육연구소의 친근한 영업사원으로서 상냥하고 따뜻하게 상담해 드릴게요~ 😊' }]
              },
              ...messages.map(msg => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }]
              })),
              {
                role: 'user',
                parts: [{ text: userMessage }]
              }
            ],
            generationConfig: {
              temperature: 0.8,
              maxOutputTokens: 1000,
            }
          })
        }
      );

      const data = await response.json();

      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const assistantMessage = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
      } else {
        throw new Error('Invalid response');
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '앗, 잠시 오류가 생겼어요 😅 괜찮으시다면 전재현 대표님께 직접 연락해 주세요!\n\n📱 010-8448-2354\n📧 jjh@jjcreative.co.kr\n\n친절하게 상담해 드릴 거예요!'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
    // Shift+Enter allows new line (default behavior)
  };

  // Parse [[text]](url) pattern and render as clickable links
  const renderMessageContent = (content: string) => {
    const linkPattern = /\[\[([^\]]+)\]\]\(([^)]+)\)/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkPattern.exec(content)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(content.slice(lastIndex, match.index));
      }
      // Add the link element
      parts.push(
        <a
          key={match.index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-800 underline font-medium"
        >
          {match[1]}
        </a>
      );
      lastIndex = match.index + match[0].length;
    }

    // Add remaining text after last link
    if (lastIndex < content.length) {
      parts.push(content.slice(lastIndex));
    }

    return parts.length > 0 ? parts : content;
  };

  return (
    <>
      {/* Chat Button - Right Bottom */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed right-6 bottom-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="AI Helper"
      >
        <Bot size={26} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-jjorange rounded-full animate-pulse"></span>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          AI 교육 상담
          <div className="absolute right-0 top-1/2 translate-x-1 -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>
      </button>

      {/* Chat Window - Right Bottom, 30% taller */}
      {isOpen && (
        <div className="fixed right-6 bottom-6 z-50 w-[380px] h-[680px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[scaleIn_0.3s_ease-out] border border-gray-200">
          <style>{`
            @keyframes scaleIn {
              from { transform: scale(0.8); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          `}</style>

          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="font-bold">JJ AI Helper</h3>
                <p className="text-xs text-white/80">교육 상담 AI 어시스턴트</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  message.role === 'user'
                    ? 'bg-jjnavy text-white'
                    : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                }`}>
                  {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  message.role === 'user'
                    ? 'bg-jjnavy text-white rounded-tr-none'
                    : 'bg-white text-gray-700 rounded-tl-none shadow-sm border border-gray-100'
                }`}>
                  {message.role === 'assistant' ? renderMessageContent(message.content) : message.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white shrink-0">
                  <Bot size={16} />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2 items-end">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="메시지를 입력하세요... (Shift+Enter: 줄바꿈)"
                rows={1}
                className="flex-1 px-4 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all resize-none overflow-hidden"
                disabled={isLoading}
                style={{ minHeight: '44px', maxHeight: '120px' }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 text-center">
              Powered by Gemini 2.0 Flash
            </p>
          </div>
        </div>
      )}
    </>
  );
};

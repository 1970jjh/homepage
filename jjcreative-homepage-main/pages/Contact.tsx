
import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  { step: 1, title: "문의 접수", description: "홈페이지 또는 전화" },
  { step: 2, title: "사전 진단", description: "현황 분석 및 미팅" },
  { step: 3, title: "제안 및 조율", description: "맞춤형 커리큘럼" },
  { step: 4, title: "교육 운영", description: "전문 강사 파견" },
  { step: 5, title: "결과 보고", description: "만족도 및 리포트" }
];

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        setError('전송에 실패했습니다. 다시 시도해주세요.');
      }
    } catch {
      setError('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-tech-bg">
      {/* Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-tech-bg">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/customer_service/1920/600"
            alt="Contact"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tech-bg/90 via-tech-bg/80 to-tech-bg"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" style={{ backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-tech-cyan text-sm tracking-widest mb-4 block">[ CONTACT ]</span>
            <h1 className="text-4xl font-bold text-white mb-4">성공적인 교육의 시작</h1>
            <p className="text-xl text-gray-400">궁금한 점을 남겨주시면 24시간 이내에 전문 컨설턴트가 답변드립니다.</p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 border-b border-tech-dim bg-tech-panel relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-cyan/30 to-transparent -z-10 transform -translate-y-1/2"></div>

             {steps.map((s, idx) => (
               <motion.div
                 key={s.step}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: idx * 0.1 }}
                 className="flex flex-col items-center bg-tech-panel p-4 z-10 w-full md:w-auto"
               >
                 <div className="w-12 h-12 bg-tech-cyan text-tech-bg rounded-full flex items-center justify-center font-bold text-xl mb-4 ring-4 ring-tech-bg font-mono">
                   {s.step}
                 </div>
                 <h3 className="font-bold text-white text-lg">{s.title}</h3>
                 <p className="text-gray-500 text-sm text-center">{s.description}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-tech-cyan text-sm tracking-widest mb-4 block">// CONTACT_INFO</span>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-jjorange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-jjorange" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Address</h3>
                    <p className="text-gray-400">서울시 마포구 성암로9안길 24 B101호</p>
                    <p className="text-gray-500 text-sm">JJ Creative 교육연구소</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-jjorange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-jjorange" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Phone</h3>
                    <p className="text-gray-400">010-8448-2354</p>
                    <p className="text-gray-500 text-sm">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-jjorange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-jjorange" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Email</h3>
                    <p className="text-gray-400">jjh@jjcreative.co.kr</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-tech-panel p-8 rounded-2xl border border-tech-dim tech-border"
            >
              <h3 className="text-2xl font-bold text-white mb-6">문의하기</h3>

              {isSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">문의가 접수되었습니다!</h4>
                  <p className="text-gray-400 mb-6">24시간 이내에 답변드리겠습니다.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-tech-cyan hover:underline font-medium"
                  >
                    새로운 문의하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="ee4cec17-5dc3-45a2-999a-184b29f4aba7" />
                  <input type="hidden" name="subject" value="JJ Creative 홈페이지 문의" />
                  <input type="hidden" name="from_name" value="JJ Creative 홈페이지" />

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 font-mono">회사명</label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full px-4 py-3 bg-tech-bg border border-tech-dim rounded-lg focus:ring-2 focus:ring-tech-cyan focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                      placeholder="회사명을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 font-mono">이름</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-tech-bg border border-tech-dim rounded-lg focus:ring-2 focus:ring-tech-cyan focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                      placeholder="담당자 성함을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 font-mono">이메일</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-tech-bg border border-tech-dim rounded-lg focus:ring-2 focus:ring-tech-cyan focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                      placeholder="이메일 주소를 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 font-mono">연락처</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-tech-bg border border-tech-dim rounded-lg focus:ring-2 focus:ring-tech-cyan focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                      placeholder="연락처를 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 font-mono">문의내용</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-tech-bg border border-tech-dim rounded-lg focus:ring-2 focus:ring-tech-cyan focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-600"
                      placeholder="문의 내용을 입력해주세요"
                    ></textarea>
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-tech-cyan hover:bg-tech-accent disabled:bg-gray-600 text-tech-bg font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        전송 중...
                      </>
                    ) : (
                      '문의하기'
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

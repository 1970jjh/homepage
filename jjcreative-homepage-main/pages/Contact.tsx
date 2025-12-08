
import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';
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
    <div className="w-full bg-white">
      {/* Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/customer_service/1920/600"
            alt="Contact"
            className="w-full h-full object-cover grayscale opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold text-jjnavy mb-4">성공적인 교육의 시작</h1>
          <p className="text-xl text-gray-600">궁금한 점을 남겨주시면 24시간 이내에 전문 컨설턴트가 답변드립니다.</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

             {steps.map((s) => (
               <div key={s.step} className="flex flex-col items-center bg-white p-4 z-10 w-full md:w-auto">
                 <div className="w-12 h-12 bg-jjnavy text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg ring-4 ring-white">
                   {s.step}
                 </div>
                 <h3 className="font-bold text-jjnavy text-lg">{s.title}</h3>
                 <p className="text-gray-500 text-sm text-center">{s.description}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-jjnavy mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-jjorange" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Address</h3>
                    <p className="text-gray-600">서울시 마포구 성암로9안길 24 B101호</p>
                    <p className="text-gray-400 text-sm">JJ Creative 교육연구소</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-jjorange" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Phone</h3>
                    <p className="text-gray-600">010-8448-2354</p>
                    <p className="text-gray-400 text-sm">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-jjorange" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Email</h3>
                    <p className="text-gray-600">jjh@jjcreative.co.kr</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-jjnavy mb-6">문의하기</h3>

              {isSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-800 mb-2">문의가 접수되었습니다!</h4>
                  <p className="text-gray-600 mb-6">24시간 이내에 답변드리겠습니다.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-jjorange hover:underline font-medium"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">회사명</label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jjorange focus:border-transparent outline-none transition-all"
                      placeholder="회사명을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jjorange focus:border-transparent outline-none transition-all"
                      placeholder="담당자 성함을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jjorange focus:border-transparent outline-none transition-all"
                      placeholder="이메일 주소를 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jjorange focus:border-transparent outline-none transition-all"
                      placeholder="연락처를 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">문의내용</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jjorange focus:border-transparent outline-none transition-all resize-none"
                      placeholder="문의 내용을 입력해주세요"
                    ></textarea>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-jjorange hover:bg-jjorange/90 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

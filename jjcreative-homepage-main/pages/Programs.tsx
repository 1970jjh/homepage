
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookOpen, Users2, Briefcase, ChevronRight, Download, Clock, Star, X, Target, Award, CheckCircle, MessageCircle, Puzzle, MonitorPlay } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { programs } from '../data/programsData';
import { Category, ProgramDetail } from '../types';

// ============================================================================
// Modal Component
// ============================================================================

const Modal = ({ program, onClose }: { program: ProgramDetail; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'features'>('overview');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-sans">
      <div className="absolute inset-0 bg-jjnavy/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="relative h-56 sm:h-72 bg-jjnavy shrink-0">
          <img src={program.image} alt={program.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-jjnavy via-jjnavy/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-white uppercase bg-jjorange rounded-full shadow-lg">
              {program.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight tracking-tight">
              {program.title}
            </h2>
            <p className="text-lg text-blue-100 font-medium">{program.subtitle}</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs (Fluorescent Style) */}
        <div className="flex gap-2 p-3 bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
          {['overview', 'curriculum', 'features'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex-1 py-3 text-sm font-bold uppercase tracking-wide transition-all rounded-lg shadow-sm ${
                activeTab === tab 
                  ? 'bg-[#00FF85] text-jjnavy shadow-md scale-[1.02] ring-1 ring-[#00FF85]/50' // Fluorescent Green Active State
                  : 'bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-600 border border-gray-200'
              }`}
            >
              {tab === 'overview' && 'Overview'}
              {tab === 'curriculum' && 'Curriculum'}
              {tab === 'features' && 'Key Features'}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto bg-gray-50 grow">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div 
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Course Description</h3>
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{program.description}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2 text-jjorange">
                      <Clock size={20} />
                      <span className="font-bold text-sm uppercase">Time</span>
                    </div>
                    <p className="text-gray-900 font-semibold">{program.details.time}</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2 text-purple-600">
                      <Users2 size={20} />
                      <span className="font-bold text-sm uppercase">Target</span>
                    </div>
                    <p className="text-gray-900 font-semibold">{program.details.target}</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2 text-indigo-600">
                      <Puzzle size={20} />
                      <span className="font-bold text-sm uppercase">Method</span>
                    </div>
                    <p className="text-gray-900 font-semibold">{program.details.method}</p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <MessageCircle className="w-6 h-6 text-green-600 mr-2" />
                    리얼 후기
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.details.reviews.map((review, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                            review.role === 'HR 담당자' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {review.role}
                          </span>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">"{review.content}"</p>
                        <p className="text-gray-900 text-xs font-bold text-right">- {review.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'curriculum' && (
              <motion.div 
                key="curriculum"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                  Detailed Curriculum
                </h3>
                <div className="space-y-4">
                  {program.details.curriculum.map((module, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border-l-4 border-jjorange shadow-sm flex items-start hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 rounded-full bg-orange-50 text-jjorange flex items-center justify-center font-bold text-sm shrink-0 mr-4 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-gray-800 font-medium text-lg">{module}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'features' && (
              <motion.div 
                key="features"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Target className="w-6 h-6 text-red-500 mr-2" />
                    Key Features
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {program.details.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-100 transition-colors">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {program.details.effects && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <Award className="w-6 h-6 text-yellow-500 mr-2" />
                      Expected Effects
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {program.details.effects.map((effect, idx) => (
                        <span key={idx} className="px-4 py-2 bg-yellow-50 text-yellow-700 rounded-lg font-semibold text-sm border border-yellow-100 shadow-sm">
                          ★ {effect}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-white flex justify-between shrink-0 items-center">
          {program.downloadLink ? (
             <a 
              href={program.downloadLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-bold text-gray-500 hover:text-jjorange transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              제안서 다운로드
            </a>
          ) : <div></div>}
         
          <button 
            onClick={onClose}
            className="px-8 py-2.5 bg-jjnavy text-white rounded-xl font-bold hover:bg-opacity-90 transition-all transform active:scale-95 shadow-lg"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// ============================================================================
// Program Card Component (Extracted for local state management)
// ============================================================================

const ProgramCard: React.FC<{ 
  prog: ProgramDetail; 
  idx: number; 
  onSelect: (prog: ProgramDetail) => void; 
}> = ({ prog, idx, onSelect }) => {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <div 
          className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 cursor-pointer group"
          onClick={() => onSelect(prog)}
        >
          <img src={prog.image} alt={prog.title} className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          <div className="absolute top-4 left-4">
             <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-xs font-bold rounded-full text-jjnavy uppercase shadow-sm">
              {prog.category}
            </span>
          </div>
          {/* Hover Overlay with "View Details" */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <span className="bg-white/20 backdrop-blur-md text-white border border-white px-6 py-2 rounded-full font-bold">자세히 보기</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2">
        <div className="flex flex-col mb-4">
          <h2 className="text-3xl font-bold text-jjnavy mb-1">{prog.title}</h2>
          <h3 className="text-xl font-bold text-jjorange">{prog.subtitle}</h3>
        </div>
        
        <div className="mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-jjnavy">
          <span className="font-bold text-jjnavy mr-2">교육 대상:</span>
          <span className="text-gray-600">{prog.details.target}</span>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
          {prog.description}
        </p>

        {/* Interactive Curriculum Tabs */}
        <div className="space-y-4 mb-8">
           <div className="flex items-center justify-between">
             <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">Curriculum Preview</p>
           </div>
           
           <div className="flex space-x-2 mb-3">
             {prog.details.curriculum.slice(0, 4).map((_, i) => (
               <button
                 key={i}
                 onClick={() => setActiveModule(i)}
                 className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                   activeModule === i 
                     ? 'bg-[#00FF85] text-jjnavy shadow-sm ring-1 ring-[#00FF85]/50' // Updated to Fluorescent Green
                     : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                 }`}
               >
                 M{i + 1}
               </button>
             ))}
           </div>

           <div className="min-h-[60px] bg-gray-50 p-3 rounded-lg border border-gray-100">
             <p className="text-gray-700 text-sm font-medium">
                {prog.details.curriculum[activeModule] || "No details available."}
             </p>
           </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => onSelect(prog)}
            className="text-white bg-jjnavy px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
          >
            상세 커리큘럼 보기
          </button>
          {prog.downloadLink && (
             <a 
              href={prog.downloadLink}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-jjorange font-bold flex items-center gap-2 px-4 py-3 rounded-lg border border-transparent hover:border-gray-200 transition-all"
            >
              <Download size={20} />
              <span className="hidden sm:inline">제안서</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ============================================================================
// Main Programs Component
// ============================================================================

export const Programs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedProgram, setSelectedProgram] = useState<ProgramDetail | null>(null);
  const [searchParams] = useSearchParams();
  const programId = searchParams.get('programId');

  const categories = Object.values(Category);

  const filteredPrograms = selectedCategory === 'All'
    ? programs
    : programs.filter(p => p.category === selectedCategory);

  // Deep linking effect
  useEffect(() => {
    if (programId) {
      const foundProgram = programs.find(p => p.id === programId);
      if (foundProgram) {
        setSelectedProgram(foundProgram);
      }
    }
  }, [programId]);

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-jjnavy">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/seminar_class/1920/600" 
            alt="Seminar" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">맞춤형 커리큘럼</h1>
          <p className="text-xl text-gray-300">계층별, 직무별, 이슈별 최적화된 교육 솔루션을 제공합니다.</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pt-12 pb-4 bg-white sticky top-[80px] z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-[#00FF85] text-jjnavy shadow-lg scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              All
            </button>
            {categories.filter(c => c !== 'All').map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  selectedCategory === cat 
                    ? 'bg-[#00FF85] text-jjnavy shadow-lg scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs List (Alternating Row Layout) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <AnimatePresence mode='popLayout'>
            {filteredPrograms.map((prog, idx) => (
              <ProgramCard 
                key={prog.id} 
                prog={prog} 
                idx={idx} 
                onSelect={setSelectedProgram} 
              />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Custom Process CTA */}
      <section className="bg-jjnavy py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">찾으시는 교육 과정이 없으신가요?</h2>
          <p className="text-xl text-gray-300 mb-8">
            JJ Creative는 기업의 니즈에 맞춰 커리큘럼을 새롭게 기획해드립니다.<br/>
            가장 효과적인 맞춤 과정을 제안받아보세요.
          </p>
          <a 
            href="https://notebooklm.google.com/notebook/329d933e-d7b8-4981-94f3-b76bdd6142eb" 
            target="_blank" 
            rel="noreferrer"
            className="bg-white text-jjnavy text-lg font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            JJ Creative Chatbot 에게 문의하기
          </a>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <Modal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

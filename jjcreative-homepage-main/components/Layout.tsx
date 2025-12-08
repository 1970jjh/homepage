
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ExternalLink, Search, LayoutGrid } from 'lucide-react';
import { NavItem } from '../types';
import { programs } from '../data/programsData';
import { AIChatbot } from './AIChatbot';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Company', path: '/about' },
  { label: 'People', path: '/people' },
  { label: 'Programs', path: '/programs' },
  { label: 'Infographic', path: '/infographic' },
  { label: 'AI Agent', path: '/ai-agent' },
  { label: 'Reference', path: '/reference' },
  { label: 'Contact', path: '/contact' },
];

export const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setIsSitemapOpen(false);
    setSearchTerm("");
  }, [pathname]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      // Small timeout to wait for render
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  const isHome = pathname === '/';

  // Search Logic
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const lowerTerm = searchTerm.toLowerCase();

    // 1. Pages
    const pages = [
      { title: 'Home', subtitle: 'Main Page', path: '/', type: 'PAGE' },
      { title: 'Company', subtitle: 'About Us', path: '/about', type: 'PAGE' },
      { title: 'People', subtitle: 'Instructors & Experts', path: '/people', type: 'PAGE' },
      { title: 'Programs', subtitle: 'Curriculum', path: '/programs', type: 'PAGE' },
      { title: 'Infographic', subtitle: 'Program Overview', path: '/infographic', type: 'PAGE' },
      { title: 'AI Agent', subtitle: 'AI Agent Apps', path: '/ai-agent', type: 'PAGE' },
      { title: 'Reference', subtitle: 'Client References', path: '/reference', type: 'PAGE' },
      { title: 'Contact', subtitle: 'Get in Touch', path: '/contact', type: 'PAGE' },
    ];
    
    const matchedPages = pages.filter(p => 
      p.title.toLowerCase().includes(lowerTerm) || 
      p.subtitle.toLowerCase().includes(lowerTerm)
    );

    // 2. Programs
    const matchedPrograms = programs.filter(p => 
      p.title.toLowerCase().includes(lowerTerm) ||
      p.subtitle.toLowerCase().includes(lowerTerm) ||
      p.description.toLowerCase().includes(lowerTerm)
    ).map(p => ({
      title: p.title,
      subtitle: p.subtitle,
      path: `/programs?programId=${p.id}`,
      type: 'PROGRAM'
    }));

    return [...matchedPages, ...matchedPrograms];
  }, [searchTerm]);

  const handleSearchResultClick = (path: string) => {
    navigate(path);
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      {/* Navigation Bar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 backdrop-blur-md shadow-lg py-3'
            : 'bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-jjnavy font-bold text-xl shadow-lg group-hover:shadow-white/30 transition-all">
                JJ
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">
                  JJ Creative
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-jjorange">
                  Education Lab
                </span>
              </div>
            </NavLink>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-bold transition-all hover:-translate-y-0.5 ${
                      isActive
                        ? 'text-jjorange'
                        : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Search Icon (Desktop) */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full transition-colors text-white/80 hover:text-white hover:bg-white/10"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Sitemap Icon (Desktop) */}
              <button
                onClick={() => setIsSitemapOpen(true)}
                className="p-2 rounded-full transition-colors text-white/80 hover:text-white hover:bg-white/10"
                aria-label="Sitemap"
              >
                <LayoutGrid size={20} />
              </button>
            </nav>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white/80 hover:text-white"
                aria-label="Search"
              >
                <Search size={24} />
              </button>
              <button
                onClick={() => setIsSitemapOpen(true)}
                className="p-2 text-white/80 hover:text-white"
                aria-label="Sitemap"
              >
                <LayoutGrid size={24} />
              </button>
              <button
                className="p-2 text-white/80 hover:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden animate-fade-in-down">
            <div className="flex flex-col p-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) => 
                    `py-4 px-4 text-lg font-bold border-b border-gray-50 last:border-0 ${
                      isActive ? 'text-jjorange bg-orange-50/50' : 'text-slate-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-jjnavy/95 backdrop-blur-sm flex flex-col pt-20 px-4 sm:px-8 animate-fade-in">
          <div className="max-w-3xl w-full mx-auto relative">
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
            
            <input
              ref={searchInputRef}
              type="text"
              placeholder="무엇을 찾고 계신가요?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-b-2 border-white/20 text-white text-3xl sm:text-4xl font-bold py-4 focus:outline-none focus:border-jjorange placeholder-white/30"
            />
            
            <div className="mt-8 max-h-[60vh] overflow-y-auto">
              {searchResults.length > 0 ? (
                <div className="grid gap-4">
                  {searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearchResultClick(result.path)}
                      className="text-left bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-all group border border-white/10"
                    >
                      <div className="flex items-center justify-between">
                         <div>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                              result.type === 'PAGE' ? 'bg-blue-500/20 text-blue-300' : 'bg-jjorange/20 text-jjorange'
                            }`}>
                              {result.type}
                            </span>
                            <h3 className="text-xl font-bold text-white mt-1 group-hover:text-jjorange transition-colors">{result.title}</h3>
                            <p className="text-sm text-gray-400">{result.subtitle}</p>
                         </div>
                         <ExternalLink className="text-white/30 group-hover:text-white transition-colors" size={20} />
                      </div>
                    </button>
                  ))}
                </div>
              ) : searchTerm ? (
                <div className="text-center py-12 text-white/50">
                  <p>검색 결과가 없습니다.</p>
                </div>
              ) : (
                 <div className="text-white/30 text-sm mt-4">
                   <p className="mb-2 font-bold uppercase tracking-widest text-white/20">Popular Searches</p>
                   <div className="flex flex-wrap gap-2">
                     {['AI', '리더십', '팀빌딩', '신입사원', '문제해결'].map(tag => (
                       <button 
                        key={tag}
                        onClick={() => setSearchTerm(tag)}
                        className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                       >
                         #{tag}
                       </button>
                     ))}
                   </div>
                 </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sitemap Modal - Curtain Style */}
      {isSitemapOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 z-[59] bg-black/50 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
            onClick={() => setIsSitemapOpen(false)}
          />

          {/* Curtain Panel */}
          <div className="fixed inset-x-0 top-0 z-[60] bg-white shadow-2xl overflow-y-auto max-h-[90vh] animate-[slideDown_0.4s_ease-out]">
            <style>{`
              @keyframes slideDown {
                from {
                  transform: translateY(-100%);
                  opacity: 0;
                }
                to {
                  transform: translateY(0);
                  opacity: 1;
                }
              }
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            `}</style>

            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-jjnavy rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    JJ
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-jjnavy">사이트맵</h2>
                    <p className="text-sm text-gray-500">전체 페이지 바로가기</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsSitemapOpen(false)}
                  className="p-3 rounded-full hover:bg-gray-100 transition-colors group"
                >
                  <X size={28} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
              </div>

            {/* Sitemap Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Home */}
              <div className="bg-gradient-to-br from-jjnavy to-jjnavy/80 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Home</h3>
                <p className="text-white/70 text-sm mb-4">메인 페이지</p>
                <NavLink
                  to="/"
                  onClick={() => setIsSitemapOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-jjorange hover:text-white transition-colors"
                >
                  바로가기 <ExternalLink size={14} />
                </NavLink>
              </div>

              {/* Company */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-jjnavy mb-2">Company</h3>
                <p className="text-gray-500 text-sm mb-4">JJ Creative 교육연구소 소개</p>
                <NavLink
                  to="/about"
                  onClick={() => setIsSitemapOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-jjorange hover:text-jjnavy transition-colors"
                >
                  바로가기 <ExternalLink size={14} />
                </NavLink>
              </div>

              {/* People */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-jjnavy mb-2">People</h3>
                <p className="text-gray-500 text-sm mb-4">전문 강사진 소개</p>
                <NavLink
                  to="/people"
                  onClick={() => setIsSitemapOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-jjorange hover:text-jjnavy transition-colors"
                >
                  바로가기 <ExternalLink size={14} />
                </NavLink>
              </div>

              {/* Programs */}
              <div className="bg-gradient-to-br from-jjorange to-jjorange/80 rounded-2xl p-6 text-white md:col-span-2 lg:col-span-2">
                <h3 className="text-lg font-bold mb-2">Programs</h3>
                <p className="text-white/80 text-sm mb-4">교육 프로그램 안내</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                  {programs.slice(0, 6).map((program) => (
                    <NavLink
                      key={program.id}
                      to={`/programs?programId=${program.id}`}
                      onClick={() => setIsSitemapOpen(false)}
                      className="text-xs bg-white/20 hover:bg-white/30 rounded-lg px-3 py-2 transition-colors truncate"
                    >
                      {program.title}
                    </NavLink>
                  ))}
                </div>
                <NavLink
                  to="/programs"
                  onClick={() => setIsSitemapOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-jjnavy transition-colors"
                >
                  전체 프로그램 보기 <ExternalLink size={14} />
                </NavLink>
              </div>

              {/* Infographic */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-jjnavy mb-2">Infographic</h3>
                <p className="text-gray-500 text-sm mb-4">프로그램 인포그래픽</p>
                <NavLink
                  to="/infographic"
                  onClick={() => setIsSitemapOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-jjorange hover:text-jjnavy transition-colors"
                >
                  바로가기 <ExternalLink size={14} />
                </NavLink>
              </div>

              {/* AI Agent */}
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">AI Agent</h3>
                <p className="text-white/80 text-sm mb-4">AI 에이전트 앱 소개</p>
                <NavLink
                  to="/ai-agent"
                  onClick={() => setIsSitemapOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-jjorange transition-colors"
                >
                  바로가기 <ExternalLink size={14} />
                </NavLink>
              </div>

              {/* Reference */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-jjnavy mb-2">Reference</h3>
                <p className="text-gray-500 text-sm mb-4">고객사 및 교육 후기</p>
                <NavLink
                  to="/reference"
                  onClick={() => setIsSitemapOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-jjorange hover:text-jjnavy transition-colors"
                >
                  바로가기 <ExternalLink size={14} />
                </NavLink>
              </div>

              {/* Contact */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-jjnavy mb-2">Contact</h3>
                <p className="text-gray-500 text-sm mb-4">문의 및 상담 신청</p>
                <NavLink
                  to="/contact"
                  onClick={() => setIsSitemapOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-jjorange hover:text-jjnavy transition-colors"
                >
                  바로가기 <ExternalLink size={14} />
                </NavLink>
              </div>
            </div>

            {/* External Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">외부 링크</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://blog.naver.com/wofyrhd"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#03C75A] hover:bg-[#02b351] text-white rounded-lg text-sm font-bold transition-all"
                >
                  네이버 블로그 <ExternalLink size={14} />
                </a>
                <a
                  href="https://notebooklm.google.com/notebook/329d933e-d7b8-4981-94f3-b76bdd6142eb"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#8B5CF6] hover:bg-[#7c3aed] text-white rounded-lg text-sm font-bold transition-all"
                >
                  AI 챗봇 <ExternalLink size={14} />
                </a>
                <a
                  href="https://form.naver.com/response/S1p9qf7_I9qBZ96COOdSzA"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#F59E0B] hover:bg-[#d97706] text-white rounded-lg text-sm font-bold transition-all"
                >
                  문의하기 <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
        </>
      )}

      {/* Main Content Outlet */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-jjnavy text-white pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand & Links */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold text-xl border border-white/20">
                  JJ
                </div>
                <span className="font-bold text-2xl tracking-tight">JJ Creative</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                조직의 잠재력을 깨우는 창의적 러닝 솔루션.<br/>
                Gamification & Simulation 기반의 실전형 교육.
              </p>
              
              {/* Footer Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="https://blog.naver.com/wofyrhd" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#03C75A] hover:bg-[#02b351] text-white rounded-lg text-xs font-bold transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Blog <ExternalLink size={12} />
                </a>
                <a 
                  href="https://notebooklm.google.com/notebook/329d933e-d7b8-4981-94f3-b76bdd6142eb" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#8B5CF6] hover:bg-[#7c3aed] text-white rounded-lg text-xs font-bold transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Chatbot <ExternalLink size={12} />
                </a>
                <a 
                  href="https://form.naver.com/response/S1p9qf7_I9qBZ96COOdSzA" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#F59E0B] hover:bg-[#d97706] text-white rounded-lg text-xs font-bold transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Ask <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-jjorange text-sm uppercase tracking-wider mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><NavLink to="/about" className="hover:text-white transition-colors">회사 소개</NavLink></li>
                <li><NavLink to="/people" className="hover:text-white transition-colors">강사진 소개</NavLink></li>
                <li><NavLink to="/programs" className="hover:text-white transition-colors">교육 프로그램</NavLink></li>
                <li><NavLink to="/infographic" className="hover:text-white transition-colors">인포그래픽</NavLink></li>
                <li><NavLink to="/ai-agent" className="hover:text-white transition-colors">AI Agent</NavLink></li>
                <li><NavLink to="/reference" className="hover:text-white transition-colors">Reference</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-white transition-colors">문의하기</NavLink></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-jjorange text-sm uppercase tracking-wider mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-jjorange mt-0.5 shrink-0" />
                  <span>서울시 마포구 성암로 9안길 24 B101호</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-jjorange shrink-0" />
                  <span>010-8448-2354</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-jjorange shrink-0" />
                  <span>jjh@jjcreative.co.kr</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} JJ Creative Education Lab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

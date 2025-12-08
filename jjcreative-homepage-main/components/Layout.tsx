
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ExternalLink, Search, LayoutGrid, Box } from 'lucide-react';
import { NavItem } from '../types';
import { programs } from '../data/programsData';
import { AIChatbot } from './AIChatbot';

const navItems: NavItem[] = [
  { label: 'Company', path: '/' },
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

    const pages = [
      { title: 'Company', subtitle: 'About Us', path: '/', type: 'PAGE' },
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
    <div className="min-h-screen flex flex-col font-sans text-slate-200">
      {/* Navigation Bar - Tech Style */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          isScrolled || !isHome
            ? 'bg-tech-bg/80 backdrop-blur-md border-white/10 py-3'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Tech Style */}
            <NavLink to="/" className="flex items-center gap-2 group cursor-hover">
              <div className="text-tech-cyan group-hover:rotate-90 transition-transform duration-500">
                <Box size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tighter text-white">
                JJ<span className="text-tech-cyan">Creative</span>
              </span>
            </NavLink>

            {/* Desktop Menu - Tech Style */}
            <nav className="hidden lg:flex items-center gap-4">
              {navItems.map((item, idx) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `cursor-hover text-xs font-medium font-mono transition-colors px-2 py-1 ${
                      isActive
                        ? 'text-tech-cyan'
                        : 'text-gray-400 hover:text-tech-cyan'
                    }`
                  }
                >
                  {String(idx + 1).padStart(2, '0')}_{item.label.toUpperCase().replace(' ', '_')}
                </NavLink>
              ))}

              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="cursor-hover p-2 rounded transition-colors text-gray-400 hover:text-tech-cyan hover:bg-white/5"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              {/* Sitemap Icon */}
              <button
                onClick={() => setIsSitemapOpen(true)}
                className="cursor-hover p-2 rounded transition-colors text-gray-400 hover:text-tech-cyan hover:bg-white/5"
                aria-label="Sitemap"
              >
                <LayoutGrid size={18} />
              </button>
            </nav>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="cursor-hover p-2 text-gray-400 hover:text-tech-cyan"
                aria-label="Search"
              >
                <Search size={24} />
              </button>
              <button
                onClick={() => setIsSitemapOpen(true)}
                className="cursor-hover p-2 text-gray-400 hover:text-tech-cyan"
                aria-label="Sitemap"
              >
                <LayoutGrid size={24} />
              </button>
              <button
                className="cursor-hover p-2 text-gray-400 hover:text-tech-cyan"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay - Tech Style */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-tech-panel border-b border-tech-cyan/20 lg:hidden animate-fade-in">
            <div className="flex flex-col p-4">
              {navItems.map((item, idx) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `py-4 px-4 text-base font-medium font-mono border-b border-white/5 last:border-0 ${
                      isActive ? 'text-tech-cyan bg-tech-cyan/5' : 'text-gray-300 hover:text-tech-cyan'
                    }`
                  }
                >
                  {String(idx + 1).padStart(2, '0')}_{item.label.toUpperCase().replace(' ', '_')}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Search Modal Overlay - Tech Style */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-tech-bg/95 backdrop-blur-sm flex flex-col pt-20 px-4 sm:px-8 animate-fade-in">
          <div className="max-w-3xl w-full mx-auto relative">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute -top-12 right-0 text-gray-500 hover:text-tech-cyan transition-colors"
            >
              <X size={32} />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-10 bg-tech-cyan"></span>
              <span className="text-tech-cyan font-mono text-sm">SEARCH_SYSTEM</span>
            </div>

            <input
              ref={searchInputRef}
              type="text"
              placeholder="INPUT: SEARCH_QUERY..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-b-2 border-tech-dim text-white text-2xl sm:text-3xl font-mono py-4 focus:outline-none focus:border-tech-cyan placeholder-gray-600"
            />

            <div className="mt-8 max-h-[60vh] overflow-y-auto">
              {searchResults.length > 0 ? (
                <div className="grid gap-4">
                  {searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearchResultClick(result.path)}
                      className="cursor-hover text-left tech-border bg-tech-panel p-4 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                         <div>
                            <span className={`text-[10px] font-bold uppercase tracking-wider font-mono px-2 py-0.5 ${
                              result.type === 'PAGE' ? 'bg-tech-cyan/20 text-tech-cyan' : 'bg-jjorange/20 text-jjorange'
                            }`}>
                              {result.type}
                            </span>
                            <h3 className="text-lg font-bold text-white mt-2 group-hover:text-tech-cyan transition-colors">{result.title}</h3>
                            <p className="text-sm text-gray-500 font-mono">{result.subtitle}</p>
                         </div>
                         <ExternalLink className="text-gray-600 group-hover:text-tech-cyan transition-colors" size={20} />
                      </div>
                    </button>
                  ))}
                </div>
              ) : searchTerm ? (
                <div className="text-center py-12 text-gray-500 font-mono">
                  <p>NO_RESULTS_FOUND</p>
                </div>
              ) : (
                 <div className="text-gray-500 text-sm mt-4">
                   <p className="mb-2 font-bold uppercase tracking-widest text-gray-600 font-mono">POPULAR_QUERIES</p>
                   <div className="flex flex-wrap gap-2">
                     {['AI', '리더십', '팀빌딩', '신입사원', '문제해결'].map(tag => (
                       <button
                        key={tag}
                        onClick={() => setSearchTerm(tag)}
                        className="cursor-hover px-3 py-1 bg-white/5 hover:bg-tech-cyan/10 hover:text-tech-cyan border border-white/10 font-mono text-sm transition-colors"
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

      {/* Sitemap Modal - Tech Style */}
      {isSitemapOpen && (
        <>
          <div
            className="fixed inset-0 z-[59] bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsSitemapOpen(false)}
          />

          <div className="fixed inset-x-0 top-0 z-[60] bg-tech-panel shadow-2xl overflow-y-auto max-h-[90vh] animate-slide-up border-b border-tech-cyan/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="text-tech-cyan">
                    <Box size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white font-mono">SITEMAP</h2>
                    <p className="text-sm text-gray-500 font-mono">SYSTEM_NAVIGATION</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsSitemapOpen(false)}
                  className="cursor-hover p-3 hover:bg-white/5 transition-colors group"
                >
                  <X size={28} className="text-gray-400 group-hover:text-tech-cyan transition-colors" />
                </button>
              </div>

            {/* Sitemap Grid - Tech Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Company */}
              <div className="tech-border bg-tech-bg p-6">
                <span className="text-tech-cyan font-mono text-xs">01_COMPANY</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">Company</h3>
                <p className="text-gray-500 text-sm mb-4">JJ Creative 교육연구소 소개</p>
                <NavLink
                  to="/about"
                  onClick={() => setIsSitemapOpen(false)}
                  className="cursor-hover inline-flex items-center gap-2 text-sm font-bold text-tech-cyan hover:text-white transition-colors font-mono"
                >
                  ACCESS &gt; <ExternalLink size={14} />
                </NavLink>
              </div>

              {/* People */}
              <div className="tech-border bg-tech-bg p-6">
                <span className="text-tech-cyan font-mono text-xs">02_PEOPLE</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">People</h3>
                <p className="text-gray-500 text-sm mb-4">전문 강사진 소개</p>
                <NavLink
                  to="/people"
                  onClick={() => setIsSitemapOpen(false)}
                  className="cursor-hover inline-flex items-center gap-2 text-sm font-bold text-tech-cyan hover:text-white transition-colors font-mono"
                >
                  ACCESS &gt; <ExternalLink size={14} />
                </NavLink>
              </div>

              {/* Programs - Large Card */}
              <div className="tech-border bg-gradient-to-br from-tech-cyan/10 to-tech-bg p-6 md:col-span-2 lg:col-span-2 border border-tech-cyan/30">
                <span className="text-tech-cyan font-mono text-xs">03_PROGRAMS</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">Programs</h3>
                <p className="text-gray-400 text-sm mb-4">교육 프로그램 안내</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                  {programs.slice(0, 6).map((program) => (
                    <NavLink
                      key={program.id}
                      to={`/programs?programId=${program.id}`}
                      onClick={() => setIsSitemapOpen(false)}
                      className="cursor-hover text-xs bg-white/5 hover:bg-tech-cyan/20 hover:text-tech-cyan px-3 py-2 transition-colors truncate font-mono border border-white/10"
                    >
                      {program.title}
                    </NavLink>
                  ))}
                </div>
                <NavLink
                  to="/programs"
                  onClick={() => setIsSitemapOpen(false)}
                  className="cursor-hover inline-flex items-center gap-2 text-sm font-bold text-tech-cyan hover:text-white transition-colors font-mono"
                >
                  VIEW_ALL &gt; <ExternalLink size={14} />
                </NavLink>
              </div>

              {/* Infographic */}
              <div className="tech-border bg-tech-bg p-6">
                <span className="text-tech-cyan font-mono text-xs">04_INFOGRAPHIC</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">Infographic</h3>
                <p className="text-gray-500 text-sm mb-4">프로그램 인포그래픽</p>
                <NavLink
                  to="/infographic"
                  onClick={() => setIsSitemapOpen(false)}
                  className="cursor-hover inline-flex items-center gap-2 text-sm font-bold text-tech-cyan hover:text-white transition-colors font-mono"
                >
                  ACCESS &gt; <ExternalLink size={14} />
                </NavLink>
              </div>

              {/* AI Agent */}
              <div className="tech-border bg-gradient-to-br from-purple-900/30 to-tech-bg p-6 border border-purple-500/30">
                <span className="text-purple-400 font-mono text-xs">05_AI_AGENT</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">AI Agent</h3>
                <p className="text-gray-500 text-sm mb-4">AI 에이전트 앱 소개</p>
                <NavLink
                  to="/ai-agent"
                  onClick={() => setIsSitemapOpen(false)}
                  className="cursor-hover inline-flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-white transition-colors font-mono"
                >
                  ACCESS &gt; <ExternalLink size={14} />
                </NavLink>
              </div>

              {/* Reference */}
              <div className="tech-border bg-tech-bg p-6">
                <span className="text-tech-cyan font-mono text-xs">06_REFERENCE</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">Reference</h3>
                <p className="text-gray-500 text-sm mb-4">고객사 및 교육 후기</p>
                <NavLink
                  to="/reference"
                  onClick={() => setIsSitemapOpen(false)}
                  className="cursor-hover inline-flex items-center gap-2 text-sm font-bold text-tech-cyan hover:text-white transition-colors font-mono"
                >
                  ACCESS &gt; <ExternalLink size={14} />
                </NavLink>
              </div>

              {/* Contact */}
              <div className="tech-border bg-tech-bg p-6">
                <span className="text-tech-cyan font-mono text-xs">07_CONTACT</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">Contact</h3>
                <p className="text-gray-500 text-sm mb-4">문의 및 상담 신청</p>
                <NavLink
                  to="/contact"
                  onClick={() => setIsSitemapOpen(false)}
                  className="cursor-hover inline-flex items-center gap-2 text-sm font-bold text-tech-cyan hover:text-white transition-colors font-mono"
                >
                  ACCESS &gt; <ExternalLink size={14} />
                </NavLink>
              </div>
            </div>

            {/* External Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 font-mono">EXTERNAL_LINKS</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://blog.naver.com/wofyrhd"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-hover flex items-center gap-2 px-4 py-2 bg-[#03C75A] hover:bg-[#02b351] text-white text-sm font-bold transition-all font-mono"
                >
                  BLOG <ExternalLink size={14} />
                </a>
                <a
                  href="https://notebooklm.google.com/notebook/329d933e-d7b8-4981-94f3-b76bdd6142eb"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-hover flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold transition-all font-mono"
                >
                  AI_CHATBOT <ExternalLink size={14} />
                </a>
                <a
                  href="https://form.naver.com/response/S1p9qf7_I9qBZ96COOdSzA"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-hover flex items-center gap-2 px-4 py-2 bg-jjorange hover:bg-jjorange/80 text-white text-sm font-bold transition-all font-mono"
                >
                  INQUIRY <ExternalLink size={14} />
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

      {/* Footer - Tech Style */}
      <footer className="bg-tech-bg text-white pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand & Links */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="text-tech-cyan">
                  <Box size={20} />
                </div>
                <span className="font-bold text-xl tracking-tighter text-white">JJCreative</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                조직의 잠재력을 깨우는 창의적 러닝 솔루션.<br/>
                Gamification & Simulation 기반의 실전형 교육.
              </p>

              {/* Footer Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://blog.naver.com/wofyrhd"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-hover flex items-center gap-2 px-4 py-2 bg-[#03C75A] hover:bg-[#02b351] text-white text-xs font-bold transition-all font-mono"
                >
                  BLOG <ExternalLink size={12} />
                </a>
                <a
                  href="https://notebooklm.google.com/notebook/329d933e-d7b8-4981-94f3-b76bdd6142eb"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-hover flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all font-mono"
                >
                  CHATBOT <ExternalLink size={12} />
                </a>
                <a
                  href="https://form.naver.com/response/S1p9qf7_I9qBZ96COOdSzA"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-hover flex items-center gap-2 px-4 py-2 bg-jjorange hover:bg-jjorange/80 text-white text-xs font-bold transition-all font-mono"
                >
                  ASK <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-tech-cyan text-sm uppercase tracking-wider mb-6 font-mono">SYSTEM_LINKS</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-mono">
                <li><NavLink to="/about" className="cursor-hover hover:text-tech-cyan transition-colors">&gt; Company</NavLink></li>
                <li><NavLink to="/people" className="cursor-hover hover:text-tech-cyan transition-colors">&gt; People</NavLink></li>
                <li><NavLink to="/programs" className="cursor-hover hover:text-tech-cyan transition-colors">&gt; Programs</NavLink></li>
                <li><NavLink to="/infographic" className="cursor-hover hover:text-tech-cyan transition-colors">&gt; Infographic</NavLink></li>
                <li><NavLink to="/ai-agent" className="cursor-hover hover:text-tech-cyan transition-colors">&gt; AI_Agent</NavLink></li>
                <li><NavLink to="/reference" className="cursor-hover hover:text-tech-cyan transition-colors">&gt; Reference</NavLink></li>
                <li><NavLink to="/contact" className="cursor-hover hover:text-tech-cyan transition-colors">&gt; Contact</NavLink></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-tech-cyan text-sm uppercase tracking-wider mb-6 font-mono">CONTACT_INFO</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-tech-cyan mt-0.5 shrink-0" />
                  <span>서울시 마포구 성암로 9안길 24 B101호</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-tech-cyan shrink-0" />
                  <span>010-8448-2354</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-tech-cyan shrink-0" />
                  <span>jjh@jjcreative.co.kr</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
            <p>&copy; {new Date().getFullYear()} JJ Creative Education Lab. ALL RIGHTS RESERVED.</p>
            <p>SYSTEM_STATUS: ONLINE</p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

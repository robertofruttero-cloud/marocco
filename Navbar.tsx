import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, FileSearch, ChevronRight, Menu, X, Zap, Flame } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY } from '../data/content';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange, onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const isAr = lang === 'ar';

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm font-sans">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-800 via-red-700 to-green-900 text-xs py-2 px-4 text-white shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-white/20 text-white font-semibold px-2.5 py-0.5 rounded-full border border-white/30 text-[11px]">
              <span>🇲🇦</span><span>🇮🇹</span>
              <span>{isAr ? 'الجالية المغربية في إيطاليا' : 'Comunità Marocchina in Italia'}</span>
            </span>
            <span className="hidden md:inline text-red-200 font-medium">
              • <strong className="text-red-300 font-bold">{isAr ? 'كلما زدنا، زادت مدخراتنا' : 'Più siamo, più risparmiamo'}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-white transition-colors text-xs font-mono font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY.phone}</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                isAr
                  ? 'مرحباً! أتواصل معكم من موقع ماروكو إنرجي. أريد معلومات حول عروض الكهرباء والغاز في إيطاليا.'
                  : 'Ciao! Ti contatto dal sito di Marocco Energy. Voglio chiedere informazioni sulle offerte di luce e gas in Italia.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-full border border-emerald-400/50 transition-all font-semibold text-xs shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {COMPANY.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-red-200 py-2.5'
            : 'bg-white/90 backdrop-blur-xs border-b border-red-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo link */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center group text-left cursor-pointer focus:outline-none"
            aria-label="Marocco Energy Home"
          >
            <Logo variant="nav" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button onClick={() => scrollTo('hero')} className="nav-btn">
              {isAr ? 'الرئيسية' : 'Home'}
            </button>
            <button onClick={() => scrollTo('luz-section')} className="nav-btn">
              {isAr ? 'عروض الكهرباء' : 'Offerte Luce'}
            </button>
            <button onClick={() => scrollTo('gas-section')} className="nav-btn">
              {isAr ? 'عروض الغاز' : 'Offerte Gas'}
            </button>
            <button onClick={() => scrollTo('calculadora-section')} className="nav-btn">
              {isAr ? 'المحاكي' : 'Simulatore'}
            </button>
            <button onClick={() => scrollTo('guia-section')} className="nav-btn">
              {isAr ? 'دليل الفاتورة' : 'Guida Bolletta'}
            </button>
            <button onClick={() => scrollTo('faq-docs-section')} className="nav-btn flex items-center gap-1.5">
              <span>{isAr ? 'وثائق المغرب و إيطاليا' : 'Doc. Marocco vs Italia'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-100 text-red-900 font-bold border border-red-300">🇲🇦</span>
            </button>
            <button onClick={() => scrollTo('faq-section')} className="nav-btn">
              {isAr ? 'الأسئلة' : 'Domande'}
            </button>
            <button onClick={() => scrollTo('contacto-section')} className="nav-btn">
              {isAr ? 'اتصل بنا' : 'Contattaci'}
            </button>
          </div>

          {/* Actions & Language Selector */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switch */}
            <div className="inline-flex items-center gap-0.5 rounded-full border border-red-200 bg-red-50/50 p-0.5 shadow-xs">
              <button
                onClick={() => onLanguageChange('it')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-black transition-all cursor-pointer ${
                  lang === 'it'
                    ? 'bg-red-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-red-700 hover:bg-white'
                }`}
              >
                🇮🇹 ITA
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-black transition-all cursor-pointer ${
                  lang === 'ar'
                    ? 'bg-red-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-red-700 hover:bg-white'
                }`}
              >
                🇲🇦 عربي
              </button>
            </div>

            {/* Audit Modal CTA */}
            <button
              onClick={onOpenAudit}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-red-50 text-red-900 hover:bg-red-100 border border-red-300 shadow-xs transition-all cursor-pointer"
            >
              <FileSearch className="w-3.5 h-3.5 text-red-700" />
              <span>{isAr ? 'فحص الفاتورة' : 'Audita Bolletta'}</span>
            </button>

            {/* Request Consultation */}
            <button
              onClick={() => scrollTo('contacto-section')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-red-700 to-green-900 hover:from-red-600 hover:to-green-800 text-white shadow-md shadow-red-700/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{isAr ? 'اطلب استشارة' : 'Richiedi Consulenza'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-red-50 text-slate-800 hover:text-red-700 hover:bg-red-100 border border-red-300 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-red-200 px-4 pt-3 pb-6 mt-2 space-y-2.5 shadow-xl animate-fadeIn">
            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={() => onLanguageChange('it')}
                className={`flex-1 py-2 rounded-xl text-xs font-black transition-all cursor-pointer text-center ${
                  lang === 'it' ? 'bg-red-700 text-white shadow-xs' : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                🇮🇹 Italiano
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`flex-1 py-2 rounded-xl text-xs font-black transition-all cursor-pointer text-center ${
                  lang === 'ar' ? 'bg-red-700 text-white shadow-xs' : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                🇲🇦 المغربية (عربي)
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-2">
              <button
                onClick={() => scrollTo('luz-section')}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs font-bold"
              >
                <Zap className="w-4 h-4 text-red-700" />
                <span>{isAr ? 'عروض الكهرباء' : 'Offerte Luce'}</span>
              </button>
              <button
                onClick={() => scrollTo('gas-section')}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold"
              >
                <Flame className="w-4 h-4 text-amber-700" />
                <span>{isAr ? 'عروض الغاز' : 'Offerte Gas'}</span>
              </button>
            </div>

            <button onClick={() => scrollTo('hero')} className="mobile-nav-btn">
              {isAr ? 'الرئيسية' : 'Home'}
            </button>
            <button onClick={() => scrollTo('calculadora-section')} className="mobile-nav-btn">
              {isAr ? 'محاكي التوفير' : 'Simulatore Risparmio'}
            </button>
            <button onClick={() => scrollTo('guia-section')} className="mobile-nav-btn">
              {isAr ? 'دليل الفاتورة الإيطالية' : 'Guida Bolletta Italiana'}
            </button>
            <button onClick={() => scrollTo('faq-docs-section')} className="mobile-nav-btn">
              {isAr ? 'معادلة الوثائق: المغرب vs إيطاليا 🇲🇦' : 'Doc. Marocco vs Italia 🇲🇦'}
            </button>
            <button onClick={() => scrollTo('faq-section')} className="mobile-nav-btn">
              {isAr ? 'الأسئلة الشائعة' : 'Domande Frequenti'}
            </button>
            <button onClick={() => scrollTo('contacto-section')} className="mobile-nav-btn">
              {isAr ? 'اتصل بنا' : 'Contattaci'}
            </button>

            <div className="pt-3 border-t border-red-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-xl bg-red-50 text-red-900 border border-red-300"
              >
                <FileSearch className="w-4 h-4 text-red-700" />
                <span>{isAr ? 'حلّل فاتورتك مجاناً' : 'Analizza Bolletta Gratis'}</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                  isAr ? 'مرحباً! أتواصل معكم من موقع ماروكو إنرجي.' : 'Ciao! Ti contatto dal sito di Marocco Energy.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isAr ? 'تواصل معنا على واتساب' : 'Contattaci su WhatsApp'}</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        .nav-btn {
          padding: 0.375rem 0.625rem;
          border-radius: 0.625rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgb(51 65 85);
          transition: all 0.15s;
          cursor: pointer;
        }
        .nav-btn:hover {
          color: rgb(153 27 27);
          background: rgb(254 226 226);
        }
        .mobile-nav-btn {
          display: block;
          width: 100%;
          text-align: inherit;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: rgb(51 65 85);
          cursor: pointer;
        }
        .mobile-nav-btn:hover {
          color: rgb(153 27 27);
          background: rgb(254 226 226);
        }
      `}</style>
    </header>
  );
};

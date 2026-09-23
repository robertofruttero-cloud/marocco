import React from 'react';
import { Heart, MessageCircle, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { Language } from '../types';
import { COMPANY } from '../data/content';

interface FooterProps {
  lang: Language;
  onOpenLegal: (type: 'privacy' | 'cookies' | 'terms') => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenLegal, onOpenAudit }) => {
  const isAr = lang === 'ar';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="text-red-100 text-xs pt-14 pb-10 border-t-4 border-red-700 bg-gradient-to-b from-slate-900 via-red-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Info column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Logo variant="footer" />
            </div>

            <p className="text-red-200 leading-relaxed text-xs max-w-sm">
              {isAr
                ? 'نساعد الجالية المغربية المقيمة في إيطاليا في الحصول على خدمات كهرباء وغاز موثوقة، بأسعار عادلة وبمساعدة 100% بلغتك.'
                : 'Aiutiamo la comunità marocchina residente in Italia ad accedere a servizi di luce e gas affidabili, a prezzi giusti e con assistenza al 100% nella tua lingua.'}
            </p>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-red-800/60 text-xs text-red-200">
              <p className="font-bold text-red-300">
                🇲🇦 🇮🇹 {isAr ? 'كلما كثر عددنا، زاد توفيرنا.' : 'Più siamo, più risparmiamo.'}
              </p>
              <p className="text-[11px] text-red-300/80 mt-0.5">
                {isAr ? 'قوة الشراء الجماعية وأسعار شفافة.' : 'Potere d\'acquisto di gruppo e tariffe trasparenti.'}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4 border-b border-red-900 pb-2">
              {isAr ? 'روابط سريعة' : 'Navigazione'}
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => scrollTo('hero')} className="footer-link">
                  {isAr ? 'الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('luz-section')} className="footer-link">
                  {isAr ? 'عروض الكهرباء' : 'Offerte Luce'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('gas-section')} className="footer-link">
                  {isAr ? 'عروض الغاز' : 'Offerte Gas'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('calculadora-section')} className="footer-link">
                  {isAr ? 'محاكي التوفير' : 'Simulatore Risparmio'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('guia-section')} className="footer-link">
                  {isAr ? 'دليل الفاتورة الإيطالية' : 'Guida Bolletta Italiana'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq-docs-section')} className="footer-link text-red-300 font-bold">
                  {isAr ? '🇲🇦 وثائق المغرب وإيطاليا' : '🇲🇦 Doc. Marocco vs Italia'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq-section')} className="footer-link">
                  {isAr ? 'الأسئلة الشائعة' : 'Domande Frequenti'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contacto-section')} className="footer-link">
                  {isAr ? 'اتصل بنا' : 'Contattaci'}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4 border-b border-red-900 pb-2">
              {isAr ? 'الخدمات' : 'Servizi'}
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => scrollTo('luz-section')} className="footer-link">
                  ⚡ {isAr ? 'الكهرباء المنزلية' : 'Energia Elettrica Domestica'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('gas-section')} className="footer-link">
                  🔥 {isAr ? 'الغاز الطبيعي المنزلي' : 'Gas Metano Domestico'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('calculadora-section')} className="footer-link">
                  ⚡🔥 {isAr ? 'الباقة المزدوجة كهرباء + غاز' : 'Pack Dual Luce + Gas'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('luz-section')} className="footer-link">
                  🏢 {isAr ? 'الأنشطة والشركات' : 'Attività e Partita IVA'}
                </button>
              </li>
              <li>
                <button onClick={onOpenAudit} className="footer-link text-red-300 font-bold">
                  📄 {isAr ? 'فحص مجاني للفاتورة' : 'Audit Gratuito della Bolletta'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('guia-section')} className="footer-link">
                  📋 {isAr ? 'إجراءات Voltura و Subentro' : 'Gestione Voltura & Subentro'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4 border-b border-red-900 pb-2">
              {isAr ? 'معلومات التواصل' : 'Contatto'}
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="text-red-200">
                <strong className="text-white block font-bold">{isAr ? 'المقر:' : 'Sede:'}</strong>
                {COMPANY.address}
              </p>
              <p>
                <strong className="text-white block font-bold">{isAr ? 'الهاتف:' : 'Telefono:'}</strong>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-red-300 font-mono">
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <strong className="text-white block font-bold">WhatsApp:</strong>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-mono text-emerald-400"
                >
                  {COMPANY.whatsappDisplay}
                </a>
              </p>
              <p>
                <strong className="text-white block font-bold">{isAr ? 'البريد:' : 'Email:'}</strong>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-red-300 block break-all font-mono">
                  {COMPANY.email}
                </a>
              </p>
              <p className="text-[11px] text-red-300/80">
                {isAr ? COMPANY.hoursAr : COMPANY.hoursIt}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-red-950 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-red-300 text-xs">
            © 2026 <strong className="text-white">Marocco Energy</strong> è un progetto di{' '}
            <strong className="text-red-300">FraStel Corporation Group</strong>.{' '}
            <button
              onClick={() => onOpenLegal('privacy')}
              className="text-red-300 hover:text-white underline mx-1 cursor-pointer font-medium"
            >
              {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </button>{' '}
            &amp;{' '}
            <button
              onClick={() => onOpenLegal('cookies')}
              className="text-red-300 hover:text-white underline mx-1 cursor-pointer font-medium"
            >
              {isAr ? 'ملفات تعريف الارتباط' : 'Cookie Policy'}
            </button>{' '}
            |{' '}
            <button
              onClick={() => onOpenLegal('terms')}
              className="text-red-300 hover:text-white underline mx-1 cursor-pointer font-medium"
            >
              {isAr ? 'شروط الخدمة' : 'Termini di Servizio'}
            </button>
          </p>

          <div className="flex items-center gap-2 text-xs text-red-300">
            <span>{isAr ? 'صُمم بكل تقدير' : 'Progettato con'}</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>{isAr ? 'لأبناء الجالية المغربية في إيطاليا' : 'per la comunità marocchina in Italia'}</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: rgb(254 205 205);
          transition: color 0.15s;
          cursor: pointer;
          text-align: inherit;
        }
        .footer-link:hover {
          color: rgb(255 255 255);
        }
      `}</style>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Language } from '../types';
import { COMPANY } from '../data/content';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const text = encodeURIComponent(
      isAr
        ? 'مرحباً! أتواصل معكم من موقع ماروكو إنرجي. لدي سؤال حول فواتير وعروض الكهرباء والغاز.'
        : 'Ciao! Ti contatto dal sito di Marocco Energy. Ho una domanda sulle bollette e offerte di luce e gas.'
    );
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="relative bg-white border-2 border-emerald-300 text-slate-800 p-3 rounded-2xl shadow-xl max-w-xs text-xs animate-bounce-short">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 border border-slate-300 shadow-xs cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-black text-emerald-700 flex items-center gap-1.5">
            <span>🇲🇦</span>
            <span>{isAr ? 'هل لديك أسئلة حول فاتورتك؟' : 'Hai dubbi sulla tua bolletta?'}</span>
          </p>
          <p className="text-slate-600 mt-1 text-[11px] font-medium leading-relaxed">
            {isAr
              ? 'راسلنا على واتساب وسنساعدك فوراً بلغتك.'
              : 'Scrivici su WhatsApp e ti aiutiamo subito nella tua lingua.'}
          </p>
        </div>
      )}

      <button
        onClick={handleClick}
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
        aria-label="Contattaci su WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
          {isAr ? 'واتساب بلغتك 🇲🇦' : 'WhatsApp nella tua lingua'}
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600 border-2 border-white" />
        </span>
      </button>
    </div>
  );
};

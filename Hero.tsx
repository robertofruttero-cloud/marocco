import React from 'react';
import { Zap, Flame, Layers, Building, CheckCircle2, ArrowRight, TrendingDown, Sparkles, Users } from 'lucide-react';
import { Logo } from './Logo';
import { Language, ServiceType } from '../types';

interface HeroProps {
  lang: Language;
  onSelectService: (service: ServiceType) => void;
  onOpenAudit: () => void;
  onScrollToCalc: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onSelectService, onOpenAudit, onScrollToCalc }) => {
  const isAr = lang === 'ar';

  return (
    <section
      id="hero"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255,250,250,0.92), rgba(255,255,255,0.90), rgba(245,250,248,0.93))`
      }}
    >
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-gradient-to-tr from-red-600/20 via-amber-400/15 to-emerald-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-700/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Prominent Uploaded Logo */}
          <div className="flex justify-center">
            <Logo variant="hero" />
          </div>

          {/* Slogan Pill */}
          <div className="inline-block mx-auto">
            <div className="bg-gradient-to-r from-red-700 via-red-600 to-green-900 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl border border-red-300 shadow-md shadow-red-700/20 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              <span className="text-base sm:text-lg">🇲🇦</span>
              <h2 className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight text-white">
                Marocco Energy <span className="text-red-200 font-normal mx-1">-</span>{' '}
                {isAr
                  ? 'الكهرباء والغاز في إيطاليا للمواطنين المغاربة'
                  : 'Elettricità e gas in Italia per i cittadini marocchini'}
              </h2>
              <span className="text-base sm:text-lg">🇮🇹</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            {isAr ? 'اختر عرضك.' : 'Scegli la tua offerta.'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-600 to-green-900">
              {isAr ? 'طاقة مناسبة وبدون بيروقراطية.' : 'Energia giusta e senza burocrazia.'}
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {isAr ? (
              <>
                اختر الخدمة التي تريد معلومات عنها. نذكّرك أننا في هذه المرحلة نتواصل معكم ونبني قوتنا الجماعية:
                <span className="text-red-800 font-bold"> كلما كثر عددنا، زاد توفيرنا!</span> نقارن لك أفضل الأسعار، نتكفل بجميع المعاملات ونحمي ميزانيتك.
              </>
            ) : (
              <>
                Seleziona il servizio per cui vuoi avere informazioni. Ti ricordiamo che in questa fase ci stiamo mettendo in contatto:
                <span className="text-red-800 font-bold"> Più siamo, più risparmiamo!</span> Confrontiamo le tariffe, gestiamo il cambio e proteggiamo il tuo portafoglio.
              </>
            )}
          </p>

          {/* Guarantees */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 pt-2 text-xs sm:text-sm text-slate-700 font-semibold">
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-red-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-red-700" />
              <span>{isAr ? 'بدون أي انقطاع في الكهرباء أو الغاز' : 'Senza interruzione del servizio'}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-red-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isAr ? '0€ رسوم إدارة ووساطة' : '0€ costo di gestione'}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-red-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isAr ? 'إدارة تغيير المشترك (Voltura) واستئناف الخدمة (Subentro)' : 'Gestione Voltura & Subentro'}</span>
            </div>
          </div>
        </div>

        {/* 4 Interactive Offer Portals */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Electricity Card */}
          <div
            onClick={() => onSelectService('luz')}
            className="group relative bg-white hover:bg-red-50/40 rounded-3xl p-6 border-2 border-red-200 hover:border-red-500 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer flex flex-col justify-between"
          >
            <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-900 border border-red-300">
              Port-4
            </span>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-100 border border-red-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                {isAr ? 'عرض الطاقة الكهربائية المنزلية' : 'Offerta Energia Elettrica Domestica'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {isAr
                  ? 'أسعار كهرباء شفافة، ثابتة أو مرتبطة بمؤشر PUN، دون مفاجآت أو تكاليف خفية في الفاتورة.'
                  : 'Tariffe luce trasparenti, fisse o indicizzate al PUN senza sorprese né costi nascosti.'}
              </p>
              <div className="mt-4 pt-3 border-t border-red-100 flex items-center gap-2 text-xs text-red-900 font-bold">
                <TrendingDown className="w-4 h-4 text-emerald-600" />
                <span>
                  {isAr ? 'متوسط التوفير: ' : 'Risparmio medio: '}
                  <strong className="text-emerald-700">-20€ ~ -45€</strong> {isAr ? '/ شهر' : '/ mese'}
                </span>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectService('luz');
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-red-50 hover:bg-red-700 hover:text-white text-red-900 font-bold text-xs flex items-center justify-center gap-2 border border-red-300 transition-all shadow-xs cursor-pointer"
              >
                <span>{isAr ? 'تواصل معنا لكافة التفاصيل' : 'Contattaci per tutte le informazioni'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Gas Card */}
          <div
            onClick={() => onSelectService('gas')}
            className="group relative bg-white hover:bg-amber-50/40 rounded-3xl p-6 border-2 border-red-200 hover:border-amber-500 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer flex flex-col justify-between"
          >
            <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              Port-5
            </span>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                {isAr ? 'عرض الغاز المنزلي' : 'Offerta Gas Domestico'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {isAr
                  ? 'أسعار غاز طبيعي مخصصة للشتاء الإيطالي بسعر Smc واضح ومحمي ضد تقلبات البرد.'
                  : 'Tariffe gas metano calibrate per l\'inverno italiano con prezzo Smc chiaro e verificabile.'}
              </p>
              <div className="mt-4 pt-3 border-t border-red-100 flex items-center gap-2 text-xs text-red-900 font-bold">
                <TrendingDown className="w-4 h-4 text-emerald-600" />
                <span>
                  {isAr ? 'متوسط التوفير: ' : 'Risparmio medio: '}
                  <strong className="text-emerald-700">-30€ ~ -60€</strong> {isAr ? '/ شهر' : '/ mese'}
                </span>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectService('gas');
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-50 hover:bg-amber-600 hover:text-white text-amber-950 font-bold text-xs flex items-center justify-center gap-2 border border-amber-300 transition-all shadow-xs cursor-pointer"
              >
                <span>{isAr ? 'تواصل معنا لكافة التفاصيل' : 'Contattaci per tutte le informazioni'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Dual Pack Card (Most popular) */}
          <div
            onClick={() => onSelectService('ambos')}
            className="group relative bg-gradient-to-b from-red-50 to-white hover:from-red-100/70 rounded-3xl p-6 border-2 border-red-500 hover:border-red-600 transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between ring-2 ring-red-300/60"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black px-3 py-1 rounded-full bg-gradient-to-r from-red-700 to-green-900 text-white shadow-md uppercase tracking-wider">
              {isAr ? 'الباقة المزدوجة الأكثر طلباً' : 'COMBO PIÙ SCELTO'}
            </span>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-200 border border-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6 text-red-800" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-800 transition-colors">
                {isAr ? 'باقة التوفير المزدوج: كهرباء + غاز' : 'Pack Dual: Luce + Gas Casa'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {isAr
                  ? 'وحّد عقدي الكهرباء والغاز مع مستشار واحد يتحدث لغتك واستفد من خصم جماعي مضاعف.'
                  : 'Unifica i tuoi due contratti con un unico consulente nella tua lingua con doppio sconto comunitario.'}
              </p>
              <div className="mt-4 pt-3 border-t border-red-200 flex items-center gap-2 text-xs text-red-950 font-bold">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span>
                  {isAr ? 'خصم الباقة: ' : 'Sconto dual: '}
                  <strong className="text-emerald-700">{isAr ? 'حتى -75€' : 'Fino a -75€'}</strong> {isAr ? '/ شهر' : '/ mese'}
                </span>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectService('ambos');
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-700 to-green-900 hover:from-red-600 hover:to-green-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>{isAr ? 'اطلب استشارة الباقة المزدوجة' : 'Richiedi Consulenza Dual'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Business Card */}
          <div
            onClick={() => onSelectService('empresa')}
            className="group relative bg-white hover:bg-emerald-50/40 rounded-3xl p-6 border-2 border-emerald-200 hover:border-emerald-500 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer flex flex-col justify-between"
          >
            <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              {isAr ? 'الأنشطة و P.IVA' : 'B2B & PMI'}
            </span>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {isAr ? 'عرض الشركات والمحلات التجارية' : 'Offerta Aziende & Locali'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {isAr
                  ? 'مطاعم، جزارة حلال، ورشات ومكاتب. تحسين تكاليف القدرة الكهربائية وضريبة قيمة مضافة قابلة للخصم.'
                  : 'Gastronomia, officine, uffici e partite IVA. Riduzione dei costi di potenza e IVA deducibile.'}
              </p>
              <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center gap-2 text-xs text-emerald-950 font-bold">
                <TrendingDown className="w-4 h-4 text-emerald-600" />
                <span>
                  {isAr ? 'متوسط التوفير: ' : 'Risparmio medio: '}
                  <strong className="text-emerald-700">-100€ ~ -350€</strong> {isAr ? '/ شهر' : '/ mese'}
                </span>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectService('empresa');
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-700 hover:text-white text-emerald-800 font-bold text-xs flex items-center justify-center gap-2 border border-emerald-300 transition-all shadow-xs cursor-pointer"
              >
                <span>{isAr ? 'تواصل معنا لمشروعك التجاري' : 'Contattaci per il tuo Business'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Bill Audit Callout Strip */}
        <div className="mt-10 p-5 sm:p-7 rounded-3xl bg-white border-2 border-red-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-red-100 border border-red-300 shrink-0 text-red-800">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                {isAr ? 'هل لديك آخر فاتورة كهرباء أو غاز في متناول يدك؟' : 'Hai la tua ultima bolletta a portata di mano?'}
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                {isAr
                  ? 'ارفعها أو أرسل لنا صورتها عبر واتساب وسنقدم لك مقارنة مجانية دقيقة خلال 24 ساعة.'
                  : 'Caricala o inviaci una foto su WhatsApp e ti facciamo un confronto gratuito in 24 ore.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-green-900 hover:from-red-600 hover:to-green-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              {isAr ? 'افحص فاتورتي مجاناً' : 'Audita la mia Bolletta Gratis'}
            </button>
            <button
              onClick={onScrollToCalc}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-900 font-bold text-xs sm:text-sm border border-red-300 transition-all cursor-pointer shadow-xs"
            >
              {isAr ? 'احسب التوفير في المحاكي' : 'Simula il Risparmio'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

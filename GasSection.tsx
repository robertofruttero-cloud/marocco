import React from 'react';
import { Flame, TrendingDown, MessageSquareHeart, FileCheck2, CheckCircle2, ArrowRight, Users, Building2 } from 'lucide-react';
import { Language } from '../types';

interface GasSectionProps {
  lang: Language;
  onSelectPlan: (planId: string, name: string) => void;
  onOpenAudit: () => void;
}

export const GasSection: React.FC<GasSectionProps> = ({ lang, onSelectPlan, onOpenAudit }) => {
  const isAr = lang === 'ar';

  return (
    <section id="gas-section" className="py-16 md:py-24 relative overflow-hidden bg-amber-50/20 border-t border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="w-4 h-4 text-amber-700" />
            <span>{isAr ? 'خدمات الغاز الطبيعي في إيطاليا' : 'Servizi Gas Metano in Italia'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {isAr ? 'عروض خدمات ' : 'Offerta per servizi di '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-amber-600 to-red-800">
              {isAr ? 'الغاز المنزلي والشركات' : 'Gas Domestico & Aziende'}
            </span>
          </h2>

          <div className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed space-y-3 max-w-3xl mx-auto">
            <p>
              {isAr ? (
                <>
                  مع <strong className="text-red-900 font-bold">ماروكو إنرجي</strong> نضمن لك تدفئة شتوية مريحة وفواتير غاز متوازنة دون صدمات الأسعار الشتوية المعتادة في إيطاليا.
                </>
              ) : (
                <>
                  Da <strong className="text-red-900 font-bold">Marocco Energy</strong> aiutiamo i cittadini marocchini che vivono in Italia ad accedere a servizi di luce e gas affidabili, a prezzi giusti e senza complicazioni.
                </>
              )}
            </p>
            <p className="text-slate-500 text-sm sm:text-base">
              {isAr
                ? 'فصل الشتاء في إيطاليا يتطلب استهلاك غاز كبيراً، ونحن نوفر لك أفضل سعر للمتر المكعب (Smc) مع شرح لكيفية إرسال القراءة الذاتية لتجنب الفواتير التقديرية المرتفعة.'
                : 'Sappiamo che molti connazionali affrontano difficoltà nel momento di contrattare, capire o confrontare le tariffe energetiche in Italia. Per questo il nostro obiettivo è facilitarti tutto il processo, proteggendo il tuo portafoglio e la tua tranquillità.'}
            </p>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Pillar 1 */}
          <div className="bg-white rounded-3xl p-7 border-2 border-red-200 hover:border-amber-500 transition-all hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-amber-500 group-hover:text-amber-700 transition-colors">
                  01.
                </span>
                <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200 shadow-xs text-amber-700">
                  <TrendingDown className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                {isAr ? 'توفير حقيقي في فاتورتك' : 'Risparmio reale sulla tua bolletta'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {isAr
                  ? 'نقارن لك أفضل أسعار الغاز الطبيعي ونساعدك على توفير مصاريف التدفئة والماء الساخن والمطبخ دون انقطاع.'
                  : 'Confrontiamo le migliori tariffe del mercato e ti aiutiamo a ridurre il costo della luce e del gas senza rinunciare alla qualità.'}
              </p>
              <p className="text-xs text-slate-500 mt-3">
                {isAr
                  ? 'شراكات موثوقة لحماية بيتك من تقلبات سوق الغاز والأسعار العشوائية.'
                  : 'I nostri accordi con fornitori affidabili ci permettono di offrirti prezzi esclusivi e trasparenti, senza costi nascosti né clausole ingannevoli.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-100 flex items-center gap-2 text-xs font-bold text-amber-950">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isAr ? 'سعر Smc اقتصادي مخصص للشتاء' : 'Prezzo Smc ottimizzato per l\'inverno'}</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-3xl p-7 border-2 border-red-200 hover:border-amber-500 transition-all hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-amber-500 group-hover:text-amber-700 transition-colors">
                  02.
                </span>
                <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200 shadow-xs text-amber-700">
                  <MessageSquareHeart className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                {isAr ? 'استشارة وإرشاد بلغتك' : 'Consulenza nella tua lingua'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {isAr
                  ? 'نتحدث معك ونشرح لك الفاتورة وكود الـ PDR الخاص بعداد الغاز وكيفية قراءته الصحيحة.'
                  : 'Parliamo italiano e francese, e comprendiamo a fondo le esigenze dei marocchini in Italia.'}
              </p>
              <p className="text-xs text-slate-500 mt-3">
                {isAr
                  ? 'توجيه خطوة بخطوة حتى لا تدفع مبالغ تقديرية ظالمة في نهاية السنة.'
                  : 'Ti spieghiamo ogni dettaglio del tuo contratto in modo semplice, chiaro e umano, così che tu possa decidere con totale fiducia e senza sorprese.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-100 flex items-center gap-2 text-xs font-bold text-amber-950">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isAr ? 'شرح واضح ومباشر لرمز عدادك (PDR)' : 'Spiegazione chiara del tuo codice PDR'}</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-3xl p-7 border-2 border-red-200 hover:border-amber-500 transition-all hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-amber-500 group-hover:text-amber-700 transition-colors">
                  03.
                </span>
                <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200 shadow-xs text-amber-700">
                  <FileCheck2 className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                {isAr ? 'إجراءات سهلة وبدون تعقيد' : 'Pratiche facili, rapide e senza stress'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {isAr
                  ? 'نتولى بالكامل إجراءات التحويل، ضبط وتصحيح الفواتير التقديرية والتواصل مع الموزع.'
                  : 'Ci occupiamo di tutto il processo per te: analisi bollette, cambio fornitore, attivazione del servizio e assistenza continua.'}
              </p>
              <p className="text-xs text-slate-500 mt-3">
                {isAr
                  ? 'ودّع الانتظار الطويل على هواتف خدمة العملاء الإيطالية مع متابعة شخصية على واتساب.'
                  : 'Dimentica la burocrazia italiana — con Marocco Energy, la tua energia si gestisce in pochi minuti e senza complicazioni.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-100 flex items-center gap-2 text-xs font-bold text-amber-950">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isAr ? 'إرسال القراءة الذاتية بسهولة لمنع الفواتير التقديرية' : 'Autolettura facile per evitare bollette stimate'}</span>
            </div>
          </div>
        </div>

        {/* Counter Summary Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <div className="p-6 rounded-3xl bg-gradient-to-r from-red-100 to-amber-50 border border-red-200 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-red-200 text-red-900">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">1320</p>
                <p className="text-sm font-bold text-red-950">{isAr ? 'مشتركون سكنيون' : 'Utenti Residenziali'}</p>
                <p className="text-xs text-slate-600">{isAr ? 'عائلات بتدفئة آمنة وموفرة' : 'Famiglie con riscaldamento sicuro'}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-black text-emerald-700 block">-20 €</span>
              <span className="text-xs text-slate-600 font-semibold">{isAr ? 'توفير متوسط بالفاتورة' : 'Euro medi in bolletta'}</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-amber-200 text-amber-900">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">780</p>
                <p className="text-sm font-bold text-amber-950">{isAr ? 'شركات وأنشطة تجارية' : 'Aziende & Attività'}</p>
                <p className="text-xs text-slate-600">{isAr ? 'غاز للمطاعم والطهي التجاري' : 'Gas industriale e cucina commerciale'}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-black text-emerald-700 block">-100 €</span>
              <span className="text-xs text-slate-600 font-semibold">{isAr ? 'توفير متوسط بالفاتورة' : 'Euro medi in bolletta'}</span>
            </div>
          </div>
        </div>

        {/* Gas Plans Available */}
        <div>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {isAr ? 'خطط الغاز الطبيعي لمنزلك أو نشاطك' : 'Piani Gas Metano per la tua Casa o Attività'}
              </h3>
              <p className="text-xs text-slate-600">
                {isAr
                  ? 'اختر بين سعر محمي وثابت طوال السنة أو سعر يتبع بورصة الغاز الإيطالية PSV.'
                  : 'Scegli se preferisci un prezzo bloccato per tutto l\'anno o indicizzato al mercato ufficiale PSV.'}
              </p>
            </div>
            <button
              onClick={onOpenAudit}
              className="text-xs font-bold text-red-800 hover:text-red-950 underline underline-offset-4 cursor-pointer"
            >
              {isAr ? 'أرسل فاتورتك لمقارنة تكلفة المتر المكعب Smc ←' : 'Inviaci la tua bolletta per confrontare il costo per Smc →'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fixed Plan */}
            <div className="p-7 rounded-3xl border-2 bg-gradient-to-b from-amber-50/60 to-white border-amber-400 shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 border border-amber-300">
                    {isAr ? 'سعر محدد ومقفل' : 'PREZZO BLOCCATO'}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-2">
                    {isAr ? 'سعر غاز ثابت 12 شهراً' : 'Tariffa Gas Fissa 12 Mesi'}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-red-800">0,45 €</span>
                  <span className="text-xs text-slate-500 block">/ Smc</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                {isAr
                  ? 'سعر Smc مقفل وثابت لمدة عام كامل. تدفع نفس السعر حتى في أبرد أيام فصل الشتاء.'
                  : 'Prezzo per Smc bloccato per un anno intero. Paghi sempre lo stesso prezzo anche se arriva l\'inverno più freddo.'}
              </p>

              <ul className="space-y-2 mb-6 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{isAr ? 'سعر Smc ثابت ومحمي لـ 12 شهراً' : 'Prezzo Smc fisso 12 mesi'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{isAr ? 'أمان تام وميزانية واضحة في موسم التدفئة' : 'Senza sorprese nella stagione del riscaldamento'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{isAr ? 'قراءة ذاتية سهلة وسريعة عبر واتساب' : 'Autolettura semplice via app o WhatsApp'}</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-amber-200 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700">
                  {isAr ? 'وفر حتى -60€/شهرياً' : 'Risparmia fino a -60€/mese'}
                </span>
                <button
                  onClick={() => onSelectPlan('gas-fissa', isAr ? 'سعر غاز ثابت 12 شهراً' : 'Tariffa Gas Fissa 12 Mesi')}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <span>{isAr ? 'اختر هذا العرض' : 'Scegli il Piano'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Indexed PSV Plan */}
            <div className="p-7 rounded-3xl border-2 bg-white border-slate-200 hover:border-amber-400 shadow-sm transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-300">
                    {isAr ? 'مرتبط بسعر البورصة PSV' : 'INDICIZZATA PSV'}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-2">
                    {isAr ? 'سعر غاز مرتبط بمؤشر PSV' : 'Tariffa Gas Indicizzata PSV'}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-red-800">PSV + 0,09€</span>
                  <span className="text-xs text-slate-500 block">/ Smc</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                {isAr
                  ? 'اتبع سعر الجملة الرسمي للغاز في إيطاليا (PSV) بهامش ربح منخفض ومكتوب بشفافية في كل فاتورة.'
                  : 'Segui il prezzo ufficiale all\'ingrosso del gas (PSV) con un margine basso e visibile in ogni bolletta.'}
              </p>

              <ul className="space-y-2 mb-6 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{isAr ? 'هامش شفاف وواضح فوق سعر PSV الرسمي' : 'Margine trasparente sul PSV ufficiale'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{isAr ? 'بدون أي تكاليف تفعيل أو شروط جزائية' : 'Senza costi di attivazione né penalità'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{isAr ? 'ممتاز للاستهلاك المعتدل خارج الشتاء' : 'Ideale per consumi bassi fuori dall\'inverno'}</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700">
                  {isAr ? 'وفر حتى -30€/شهرياً' : 'Risparmia fino a -30€/mese'}
                </span>
                <button
                  onClick={() => onSelectPlan('gas-psv', isAr ? 'سعر غاز مرتبط بمؤشر PSV' : 'Tariffa Gas Indicizzata PSV')}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-600 hover:to-amber-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <span>{isAr ? 'اختر هذا العرض' : 'Scegli il Piano'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

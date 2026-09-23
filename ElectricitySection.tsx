import React from 'react';
import { Zap, TrendingDown, MessageSquareHeart, FileCheck2, CheckCircle2, ArrowRight, Users, Building2 } from 'lucide-react';
import { Language } from '../types';

interface ElectricitySectionProps {
  lang: Language;
  onSelectPlan: (planId: string, name: string) => void;
  onOpenAudit: () => void;
}

export const ElectricitySection: React.FC<ElectricitySectionProps> = ({ lang, onSelectPlan, onOpenAudit }) => {
  const isAr = lang === 'ar';

  return (
    <section id="luz-section" className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-300 text-red-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-4 h-4 text-red-700" />
            <span>{isAr ? 'خدمات الكهرباء في إيطاليا' : 'Servizi di Elettricità in Italia'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {isAr ? 'عروض خدمات ' : 'Offerta per servizi di '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-900">
              {isAr ? 'الطاقة الكهربائية' : 'Energia Elettrica'}
            </span>
          </h2>

          <div className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed space-y-3 max-w-3xl mx-auto">
            <p>
              {isAr ? (
                <>
                  في <strong className="text-red-900 font-bold">ماروكو إنرجي</strong> نساعد المواطنين المغاربة المقيمين في إيطاليا على الوصول إلى خدمات كهرباء موثوقة، بأسعار عادلة وبدون أي تعقيدات بيروقراطية.
                </>
              ) : (
                <>
                  Da <strong className="text-red-900 font-bold">Marocco Energy</strong> aiutiamo i cittadini marocchini che vivono in Italia ad accedere a servizi di luce e gas affidabili, a prezzi giusti e senza complicazioni.
                </>
              )}
            </p>
            <p className="text-slate-500 text-sm sm:text-base">
              {isAr
                ? 'نعلم أن العديد من أبناء الجالية يواجهون صعوبات في التعاقد أو فهم الفواتير الإيطالية المعقدة. لذلك هدفنا هو تسهيل كل المراحل وحماية ميزانية بيتك.'
                : 'Sappiamo che molti connazionali affrontano difficoltà nel momento di contrattare, capire o confrontare le tariffe energetiche in Italia. Per questo il nostro obiettivo è facilitarti tutto il processo, proteggendo il tuo portafoglio e la tua tranquillità.'}
            </p>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Pillar 1 */}
          <div className="bg-red-50/50 rounded-3xl p-7 border-2 border-red-200 hover:border-red-500 transition-all hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-red-400 group-hover:text-red-700 transition-colors">
                  01.
                </span>
                <div className="p-2.5 rounded-2xl bg-white border border-red-200 shadow-xs text-red-700">
                  <TrendingDown className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                {isAr ? 'توفير حقيقي في فاتورتك' : 'Risparmio reale sulla tua bolletta'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {isAr
                  ? 'نقارن أفضل الأسعار في السوق الإيطالية ونساعدك على خفض تكلفة الكهرباء دون التنازل عن الجودة والاستمرارية.'
                  : 'Confrontiamo le migliori tariffe del mercato e ti aiutiamo a ridurre il costo della luce e del gas senza rinunciare alla qualità.'}
              </p>
              <p className="text-xs text-slate-500 mt-3">
                {isAr
                  ? 'اتفاقيات الشراء الجماعي تمنحنا أسعاراً شفافة دون أي بنود مخفية أو زيادات مفاجئة.'
                  : 'I nostri accordi con fornitori affidabili ci permettono di offrirti prezzi esclusivi e trasparenti, senza costi nascosti né clausole ingannevoli.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-red-200 flex items-center gap-2 text-xs font-bold text-red-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isAr ? 'فحص مجاني لفاتورتك السابقة' : 'Audit della tua bolletta precedente senza costi'}</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-red-50/50 rounded-3xl p-7 border-2 border-red-200 hover:border-red-500 transition-all hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-red-400 group-hover:text-red-700 transition-colors">
                  02.
                </span>
                <div className="p-2.5 rounded-2xl bg-white border border-red-200 shadow-xs text-red-700">
                  <MessageSquareHeart className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                {isAr ? 'استشارة وإرشاد بلغتك' : 'Consulenza nella tua lingua'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {isAr
                  ? 'نتحدث الإيطالية، الدارجة المغربية والفرنسية، ونفهم بدقة ظروف واحتياجات المغاربة في إيطاليا.'
                  : 'Parliamo italiano e francese, e comprendiamo a fondo le esigenze dei marocchini in Italia.'}
              </p>
              <p className="text-xs text-slate-500 mt-3">
                {isAr
                  ? 'نشرح لك كل تفاصيل العقد بشفافية وبطريقة إنسانية واضحة لتقرر بثقة ودون أي غموض تقني.'
                  : 'Ti spieghiamo ogni dettaglio del tuo contratto in modo semplice, chiaro e umano, perché tu possa decidere con totale fiducia senza dover affrontare difficili tecnicismi italiani.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-red-200 flex items-center gap-2 text-xs font-bold text-red-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isAr ? 'مساعدة مباشرة عبر واتساب والهاتف' : 'Assistenza diretta via WhatsApp e telefono'}</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-red-50/50 rounded-3xl p-7 border-2 border-red-200 hover:border-red-500 transition-all hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-red-400 group-hover:text-red-700 transition-colors">
                  03.
                </span>
                <div className="p-2.5 rounded-2xl bg-white border border-red-200 shadow-xs text-red-700">
                  <FileCheck2 className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                {isAr ? 'معاملات سهلة وسريعة دون قلق' : 'Pratiche facili, rapide e senza stress'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {isAr
                  ? 'نتكفل بكل الخطوات: فحص الفاتورة، تفعيل العقد، التواصل مع شركة التوزيع والمتابعة المستمرة.'
                  : 'Ci occupiamo di tutto il processo per te: analisi bollette, cambio fornitore, attivazione del servizio e assistenza continua.'}
              </p>
              <p className="text-xs text-slate-500 mt-3">
                {isAr
                  ? 'انسَ البيروقراطية الإيطالية المعقدة والطوابير — مع ماروكو إنرجي ننهي الإجراء في دقائق.'
                  : 'Dimentica la burocrazia italiana — con Marocco Energy, la tua energia si gestisce in pochi minuti e senza complicazioni.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-red-200 flex items-center gap-2 text-xs font-bold text-red-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isAr ? 'تغيير المشترك واستئناف العداد دون طوابير' : 'Voltura, Subentro e Allaccio senza code'}</span>
            </div>
          </div>
        </div>

        {/* Counter Summary Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <div className="p-6 rounded-3xl bg-gradient-to-r from-red-100 to-red-50 border border-red-200 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-red-200 text-red-900">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">1320</p>
                <p className="text-sm font-bold text-red-950">{isAr ? 'مشتركون سكنيون' : 'Utenti Residenziali'}</p>
                <p className="text-xs text-slate-600">{isAr ? 'عائلات مغربية مستفيدة' : 'Famiglie marocchine protette'}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-black text-emerald-700 block">-20 €</span>
              <span className="text-xs text-slate-600 font-semibold">{isAr ? 'توفير متوسط بالفاتورة' : 'Euro medi in bolletta'}</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-emerald-200 text-emerald-900">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">780</p>
                <p className="text-sm font-bold text-emerald-950">{isAr ? 'شركات وأنشطة تجارية' : 'Aziende & PMI'}</p>
                <p className="text-xs text-slate-600">{isAr ? 'محلات ومطاعم بتكاليف محسنة' : 'Attività con costi ottimizzati'}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-black text-emerald-700 block">-100 €</span>
              <span className="text-xs text-slate-600 font-semibold">{isAr ? 'توفير متوسط بالفاتورة' : 'Euro medi in bolletta'}</span>
            </div>
          </div>
        </div>

        {/* Electricity Plans Available */}
        <div>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {isAr ? 'عروض وخطط الكهرباء المتاحة' : 'Piani Luce Disponibili per Te'}
              </h3>
              <p className="text-xs text-slate-600">
                {isAr
                  ? 'اختر الخطة المناسبة لاستهلاكك أو استشرنا لاختيار الأوفر لمنزلك.'
                  : 'Seleziona il piano che si adatta meglio al tuo consumo o contattaci per consigliarti quello ideale.'}
              </p>
            </div>
            <button
              onClick={onOpenAudit}
              className="text-xs font-bold text-red-800 hover:text-red-950 underline underline-offset-4 cursor-pointer"
            >
              {isAr ? 'لا تعرف استهلاكك؟ نحلل فاتورتك مجاناً ←' : 'Non sai quanto consumi? Analizziamo la tua bolletta gratis →'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fixed Plan */}
            <div className="p-7 rounded-3xl border-2 bg-gradient-to-b from-red-50/70 to-white border-red-400 shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-200 text-red-900 border border-red-300">
                    {isAr ? 'سعر ثابت ومضمون' : 'PREZZO FISSO'}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-2">
                    {isAr ? 'سعر كهرباء ثابت 12 شهراً' : 'Tariffa Luce Fissa 12 Mesi'}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-red-800">0,129 €</span>
                  <span className="text-xs text-slate-500 block">/ kWh</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                {isAr
                  ? 'سعر ثابت مقفل لمدة 12 شهراً: تدفع نفس تكلفة الكيلوواط/ساعة مهما ارتفعت أسعار الطاقة في السوق الإيطالية.'
                  : 'Prezzo bloccato per 12 mesi: paghi sempre lo stesso prezzo al kWh, non importa quanto salga il mercato all\'ingrosso italiano.'}
              </p>

              <ul className="space-y-2 mb-6 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                  <span>{isAr ? 'سعر كيلوواط/ساعة ثابت ومحمي لـ 12 شهراً' : 'Prezzo kWh fisso per 12 mesi'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                  <span>{isAr ? 'طاقة خضراء 100% من مصادر معتمدة' : 'Energia 100% da fonti certificate'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                  <span>{isAr ? 'بدون أي شرط جزائي أو التزام إجباري' : 'Senza permanenza minima obbligatoria'}</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-red-200 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700">
                  {isAr ? 'وفر حتى -45€/شهرياً' : 'Risparmia fino a -45€/mese'}
                </span>
                <button
                  onClick={() => onSelectPlan('luz-fissa', isAr ? 'سعر كهرباء ثابت 12 شهراً' : 'Tariffa Luce Fissa 12 Mesi')}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-700 to-green-900 hover:from-red-600 hover:to-green-800 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <span>{isAr ? 'اختر هذا العرض' : 'Scegli il Piano'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Indexed PUN Plan */}
            <div className="p-7 rounded-3xl border-2 bg-white border-slate-200 hover:border-red-400 shadow-sm transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-300">
                    {isAr ? 'مرتبط بسعر البورصة PUN' : 'INDICIZZATA PUN'}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-2">
                    {isAr ? 'سعر كهرباء مرتبط بمؤشر PUN' : 'Tariffa Luce Indicizzata PUN'}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-red-800">PUN + 0,018€</span>
                  <span className="text-xs text-slate-500 block">/ kWh</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                {isAr
                  ? 'اتبع السعر الرسمي بالجملة (PUN) مع هامش شفاف ومنخفض جداً. ممتاز للاستفادة من فترات انخفاض أسعار الكهرباء.'
                  : 'Segui il prezzo ufficiale all\'ingrosso (PUN) con uno spread trasparente e basso. Ideale se il tuo consumo è flessibile e vuoi approfittare delle discese di mercato.'}
              </p>

              <ul className="space-y-2 mb-6 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                  <span>{isAr ? 'هامش ربح ثابت وواضح جداً على مؤشر PUN' : 'Spread fisso e trasparente sul PUN'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                  <span>{isAr ? 'بدون أي رسوم تفعيل أو أتعاب خفية' : 'Senza costi di attivazione'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                  <span>{isAr ? 'مناسب للاستهلاك العائلي المرن' : 'Ideale per consumi bassi o variabili'}</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700">
                  {isAr ? 'وفر حتى -25€/شهرياً' : 'Risparmia fino a -25€/mese'}
                </span>
                <button
                  onClick={() => onSelectPlan('luz-pun', isAr ? 'سعر كهرباء مرتبط بمؤشر PUN' : 'Tariffa Luce Indicizzata PUN')}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-700 to-green-900 hover:from-red-600 hover:to-green-800 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
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

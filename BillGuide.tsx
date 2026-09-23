import React, { useState } from 'react';
import { FileText, Receipt, Zap, Scale, ShieldAlert, AlertTriangle, Check, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface BillGuideProps {
  lang: Language;
  onOpenAudit: () => void;
}

export const BillGuide: React.FC<BillGuideProps> = ({ lang, onOpenAudit }) => {
  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState<'partes' | 'tramites' | 'seguridad'>('partes');

  return (
    <section id="guia-section" className="py-16 md:py-24 border-t border-red-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-300 text-red-900 text-xs font-bold mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>{isAr ? 'دليل عملي للجالية المغربية في إيطاليا' : 'Guida Pratica per i Marocchini in Italia'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            {isAr ? 'كيف تفهم ' : 'Come capire la tua '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-900">
              {isAr ? 'فاتورتك الإيطالية' : 'Bolletta Italiana'}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {isAr
              ? 'البيروقراطية الطاقية في إيطاليا قد تكون مربكة ومعقدة. هنا نشرح لك الأساسيات بوضوح حتى لا تدفع يورو واحداً زائداً عن حقك.'
              : 'La burocrazia energetica in Italia può essere confusa. Qui ti spieghiamo l\'essenziale in modo chiaro perché tu non debba mai pagare più del dovuto.'}
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-red-50/60 rounded-2xl border border-red-200 shadow-xs gap-1 sm:gap-2 flex-wrap justify-center">
            <button
              onClick={() => setActiveTab('partes')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === 'partes'
                  ? 'bg-gradient-to-r from-red-700 to-green-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isAr ? '1. أجزاء وبنود الفاتورة' : '1. Parti della Bolletta'}
            </button>
            <button
              onClick={() => setActiveTab('tramites')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === 'tramites'
                  ? 'bg-gradient-to-r from-red-700 to-green-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isAr ? '2. الفرق بين Voltura و Subentro' : '2. Voltura vs Subentro'}
            </button>
            <button
              onClick={() => setActiveTab('seguridad')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === 'seguridad'
                  ? 'bg-gradient-to-r from-red-700 to-rose-700 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isAr ? '3. احذر من الاحتيال الهاتفي' : '3. Attenzione alle Truffe'}
            </button>
          </div>
        </div>

        {/* TAB 1: PARTI DELLA BOLLETTA */}
        {activeTab === 'partes' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            {/* Bill Simulation Card */}
            <div className="lg:col-span-6 bg-white border-2 border-red-200 rounded-3xl p-6 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-red-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs text-slate-500 font-mono ml-2">Fattura_Energia_Esempio.pdf</span>
                </div>
                <span className="text-[10px] uppercase font-black text-red-950 bg-red-100 px-2 py-0.5 rounded-md border border-red-300">
                  ARERA Standard
                </span>
              </div>

              <div className="space-y-4 mt-5 text-xs font-mono">
                <div className="p-3.5 bg-red-50 rounded-2xl border border-red-200">
                  <p className="text-red-950 font-bold font-sans">
                    {isAr ? 'بيانات التوريد والعقد:' : 'DATI FORNITURA / DATI DI FORNITURA:'}
                  </p>
                  <p className="text-slate-700 mt-1">
                    Codice POD: <span className="text-red-800 font-bold font-mono">IT001E12345678X</span>{' '}
                    <span className="text-slate-500">({isAr ? 'بطاقة هوية عداد الكهرباء' : 'La carta d\'identità della luce'})</span>
                  </p>
                  <p className="text-slate-700">
                    Codice PDR: <span className="text-red-800 font-bold font-mono">01234567890123</span>{' '}
                    <span className="text-slate-500">({isAr ? 'بطاقة هوية عداد الغاز' : 'La carta d\'identità del gas'})</span>
                  </p>
                  <p className="text-slate-500 text-[10px] mt-1">Potenza Impegnata: 3.0 kW | Mercato Libero</p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <p className="font-bold text-slate-800 text-[11px] font-sans">
                    {isAr ? 'ملخص المبالغ المفوترة بالتفصيل:' : 'Sintesi Importi Fatturati (Riepilogo):'}
                  </p>

                  <div className="flex justify-between items-center p-2 rounded-xl bg-red-100/70 border border-red-300 text-red-950">
                    <div>
                      <span className="font-bold">1. Spesa per la materia energia</span>
                      <p className="text-[10px] text-red-800 font-semibold">
                        ★ {isAr ? 'البند الوحيد القابل للتفاوض وفيه نخفض لك السعر' : 'L\'unico punto negoziabile dove ti facciamo risparmiare'}
                      </p>
                    </div>
                    <span className="font-black text-sm text-red-950">48.50 €</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-xl bg-white border border-slate-200 text-slate-600">
                    <div>
                      <span className="font-medium">2. Spesa trasporto e gestione contatore</span>
                      <p className="text-[10px] text-slate-400">
                        {isAr ? 'منظم من الدولة (ثابت لدى جميع الشركات)' : 'Regolato dallo Stato (uguale in tutte le aziende)'}
                      </p>
                    </div>
                    <span className="font-medium">14.20 €</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-xl bg-white border border-slate-200 text-slate-600">
                    <div>
                      <span className="font-medium">3. Spesa per oneri di sistema</span>
                      <p className="text-[10px] text-slate-400">
                        {isAr ? 'تكاليف ورسوم وطنية مفروضة بقانون' : 'Costi fissi nazionali fissati per legge'}
                      </p>
                    </div>
                    <span className="font-medium">8.90 €</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-xl bg-white border border-slate-200 text-slate-600">
                    <div>
                      <span className="font-medium">4. Imposte e IVA (10% / 22%)</span>
                      <p className="text-[10px] text-slate-400">
                        {isAr ? 'الضرائب الحكومية الإيطالية' : 'Imposte statali italiane'}
                      </p>
                    </div>
                    <span className="font-medium">7.16 €</span>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3.5 bg-gradient-to-r from-red-100 to-red-50 rounded-2xl border border-red-300">
                  <span className="font-black text-slate-900 font-sans text-sm">
                    {isAr ? 'الإجمالي الواجب دفعه:' : 'TOTALE DA PAGARE:'}
                  </span>
                  <span className="text-xl font-black text-red-900">78.76 €</span>
                </div>
              </div>
            </div>

            {/* Glossary */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl font-black text-slate-900">
                {isAr ? 'قاموس مصطلحات الفاتورة الإيطالية' : 'Glossario Rapido della Bolletta'}
              </h3>
              <p className="text-xs text-slate-600">
                {isAr
                  ? 'المصطلحات الأربعة الأساسية التي يجب أن يعرفها كل مواطن مغربي عند كراء أو شراء شقة في إيطاليا:'
                  : 'I 4 termini chiave che ogni marocchino in Italia deve conoscere quando affitta o compra casa:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-red-200 hover:border-red-400 transition-all shadow-xs">
                  <span className="font-black text-slate-900 text-sm block mb-1.5">POD</span>
                  <p className="text-xs font-bold text-red-800 mb-1">
                    {isAr ? 'بطاقة هوية عداد الكهرباء' : 'La carta d\'identità della tua luce'}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isAr
                      ? 'رمز فريد يبدأ بـ "IT" يحدد نقطة توصيل الكهرباء لمسكنك، تحتاجه لأي عقد أو تحويل.'
                      : 'Codice unico che identifica il punto di connessione elettrica della tua abitazione. Inizia con "IT" e ti serve per qualsiasi pratica.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-red-200 hover:border-red-400 transition-all shadow-xs">
                  <span className="font-black text-slate-900 text-sm block mb-1.5">PDR</span>
                  <p className="text-xs font-bold text-red-800 mb-1">
                    {isAr ? 'بطاقة هوية عداد الغاز' : 'La carta d\'identità del tuo gas'}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isAr
                      ? 'المعادل للـ POD ولكن لعداد الغاز الطبيعي. يتكون من 14 رقماً.'
                      : 'È l\'equivalente del POD ma per la fornitura di gas metano. Un codice numerico di 14 cifre.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-red-200 hover:border-red-400 transition-all shadow-xs">
                  <span className="font-black text-slate-900 text-sm block mb-1.5">Oneri di Sistema</span>
                  <p className="text-xs font-bold text-red-800 mb-1">
                    {isAr ? 'رسوم الشبكة الوطنية' : 'Costi fissi nazionali'}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isAr
                      ? 'رسوم رسمية تحددها الدولة الإيطالية (ARERA) متساوية لدى جميع الشركات دون استثناء.'
                      : 'Costi regolati dallo Stato italiano, uguali per tutti i fornitori. Non sono negoziabili.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-red-200 hover:border-red-400 transition-all shadow-xs">
                  <span className="font-black text-slate-900 text-sm block mb-1.5">Mercato Libero</span>
                  <p className="text-xs font-bold text-red-800 mb-1">
                    {isAr ? 'السوق الحر للطاقة' : 'Mercato libero'}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isAr
                      ? 'السوق الذي تختار فيه بنفسك الشركة التي تقدم لك أفضل سعر وعرض مناسب.'
                      : 'Il regime in cui scegli il tuo fornitore e la tua tariffa, a differenza del vecchio "Mercato Tutelato" ormai superato.'}
                  </p>
                </div>
              </div>

              {/* Quick action strip */}
              <div className="p-4 rounded-2xl bg-red-100 border border-red-300 flex items-center justify-between gap-4 mt-4 shadow-xs">
                <div>
                  <p className="text-xs font-bold text-red-950">
                    {isAr ? 'تريد أن نفحص فاتورتك الحالية؟' : 'Vuoi che auditi la tua bolletta attuale?'}
                  </p>
                  <p className="text-[11px] text-slate-600">
                    {isAr ? 'نخبرك بدقة إذا كنت تدفع أكثر من اللازم خلال 5 دقائق.' : 'Ti diciamo esattamente se stai pagando di più in 5 minuti.'}
                  </p>
                </div>
                <button
                  onClick={onOpenAudit}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-700 to-green-900 hover:from-red-600 hover:to-green-800 text-white text-xs font-bold shrink-0 transition-all cursor-pointer shadow-md"
                >
                  {isAr ? 'أرسل فاتورتك' : 'Invia Bolletta'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VOLTURA VS SUBENTRO */}
        {activeTab === 'tramites' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {/* Card 1: Voltura */}
            <div className="p-6 rounded-3xl bg-white border-2 border-red-200 shadow-md relative">
              <div className="inline-block p-3 rounded-2xl bg-red-100 text-red-800 mb-4">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                {isAr ? '1. نقل العقد (Voltura)' : '1. Voltura (Cambio Titolare)'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {isAr
                  ? 'العداد مفعّل وتوجد كهرباء أو غاز في البيت حالياً. نقوم فقط بنقل وتغيير اسم صاحب العقد إلى اسمك.'
                  : 'Il contatore è già attivo e c\'è luce o gas in casa. Si trasferisce solo il contratto al nuovo inquilino o proprietario.'}
              </p>
              <div className="text-xs bg-red-50 p-3.5 rounded-2xl border border-red-200 space-y-1.5 font-medium">
                <p className="text-red-950 font-bold">{isAr ? 'ما الوثائق المطلوبة؟' : 'Cosa serve?'}</p>
                <p className="text-slate-600">• {isAr ? 'فاتورة الساكن السابق (أو كود POD/PDR)' : 'Bolletta dell\'inquilino precedente (o POD/PDR)'}</p>
                <p className="text-slate-600">• {isAr ? 'الرقم الضريبي Codice Fiscale ووثيقة هوية' : 'Il tuo Codice Fiscale e documento'}</p>
                <p className="text-slate-600">• {isAr ? 'قراءة أرقام العداد الحالية' : 'Lettura attuale del contatore'}</p>
              </div>
            </div>

            {/* Card 2: Subentro */}
            <div className="p-6 rounded-3xl bg-white border-2 border-red-200 shadow-md relative">
              <div className="inline-block p-3 rounded-2xl bg-red-100 text-red-800 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                {isAr ? '2. استئناف الخدمة (Subentro)' : '2. Subentro (Riattivazione)'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {isAr
                  ? 'العداد موجود ومثبت لكن الخدمة مقطوعة ومغلقة من الساكن السابق. تتطلب إعادة تفعيل تقنية.'
                  : 'Il contatore esiste fisicamente ma il servizio è stato disattivato o chiuso dal proprietario precedente. Richiede una riattivazione tecnica.'}
              </p>
              <div className="text-xs bg-red-50 p-3.5 rounded-2xl border border-red-200 space-y-1.5 font-medium">
                <p className="text-red-950 font-bold">{isAr ? 'ما الوثائق المطلوبة؟' : 'Cosa serve?'}</p>
                <p className="text-slate-600">• {isAr ? 'الرقم التسلسلي لعداد الكهرباء أو الغاز (Matricola)' : 'Matricola / Numero di serie del contatore'}</p>
                <p className="text-slate-600">• {isAr ? 'الرقم الضريبي وعقد الكراء المسجل' : 'Il tuo Codice Fiscale e contratto d\'affitto'}</p>
                <p className="text-slate-600">• {isAr ? 'المدة المتوقعة: 5 إلى 7 أيام عمل' : 'Tempo previsto: 5 a 7 giorni lavorativi'}</p>
              </div>
            </div>

            {/* Card 3: Switch */}
            <div className="p-6 rounded-3xl bg-white border-2 border-emerald-200 shadow-md relative">
              <div className="inline-block p-3 rounded-2xl bg-emerald-100 text-emerald-800 mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                {isAr ? '3. تغيير المورد (Switch)' : '3. Cambio Fornitore (Switch)'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {isAr
                  ? 'أنت حالياً مع شركة إيطالية أخرى (Enel, Eni, A2A, Edison...) وتريد الانتقال لأسعار ماروكو إنرجي الجماعية.'
                  : 'Sei attualmente con un\'altra azienda italiana (Enel, Eni, A2A, Edison, ecc.) e vuoi passare alle tariffe comunitarie di Marocco Energy.'}
              </p>
              <div className="text-xs bg-emerald-50 p-3.5 rounded-2xl border border-emerald-200 space-y-1.5 font-medium">
                <p className="text-emerald-950 font-bold">{isAr ? 'مميزات العملية:' : 'Vantaggi:'}</p>
                <p className="text-slate-600">• {isAr ? '100% مجاناً بقوة القانون' : '100% Gratuito per legge'}</p>
                <p className="text-slate-600">• {isAr ? 'بدون أي انقطاع في الكهرباء أو الغاز' : 'Zero interruzioni del servizio'}</p>
                <p className="text-slate-600">• {isAr ? 'نتكفل نحن بإلغاء العقد القديم كاملاً' : 'Ci occupiamo noi della chiusura del contratto precedente'}</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SICUREZZA E TRUFFE */}
        {activeTab === 'seguridad' && (
          <div className="p-8 rounded-3xl bg-white border-2 border-rose-200 shadow-lg animate-fadeIn">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-rose-100 text-rose-600">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  {isAr ? 'احذر من المكالمات الاحتيالية والتسويق العدواني في إيطاليا!' : 'Attenzione al Telemarketing Aggressivo in Italia!'}
                </h3>
                <p className="text-xs text-rose-700 font-semibold">
                  {isAr ? 'نصائح أمان مهمة من ماروكو إنرجي لحماية جميع أبناء الجالية' : 'Consigli di sicurezza di Marocco Energy per i connazionali'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 mt-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <p className="font-bold text-slate-900 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>"Chiamiamo da ARERA / Chiuderanno il contatore":</span>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {isAr
                    ? 'كذب واحتيال! هيئة ARERA لا تتصل أبداً بالمواطنين لبيع عروض طاقة. هذه مراكز نداء تسعى للإيقاع بك.'
                    : 'FALSO. ARERA è l\'ente regolatore e NON chiama mai i singoli utenti per telefono per vendere tariffe. Sono call center che cercano di attivare contratti con l\'inganno.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <p className="font-bold text-slate-900 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{isAr ? 'لا تقل كلمة "نعم" (Sì) فور الرد على رقم مجهول:' : 'Mai dire la parola "SÌ" all\'inizio di una chiamata sconosciuta:'}</span>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {isAr
                    ? 'في إيطاليا سُجلت حالات لتركيب تسجيلات صوتية لادعاء موافقتك. أجب دائماً بـ "من المتصل؟" (Chi parla?).'
                    : 'In Italia ci sono stati casi in cui hanno modificato registrazioni audio ("È il titolare?" - "Sì") per simulare una contrattazione vocale. Rispondi "Chi parla?" o "Di parte di chi?".'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <p className="font-bold text-slate-900 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{isAr ? 'لا تعطِ كود POD أو PDR لأي متصل هاتفي:' : 'Non dettare il tuo codice POD o PDR al telefono:'}</span>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {isAr
                    ? 'بواسطة رمز الـ POD والـ Codice Fiscale فقط، يمكن لمتصل غير أمين نقل اشتراكك دون توقيعك!'
                    : 'Con solo il codice POD e il tuo Codice Fiscale, un operatore disonesto può trasferire il tuo contratto senza la tua firma.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <p className="font-bold text-emerald-900 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{isAr ? 'مع ماروكو إنرجي: تعامل شفاف وكتابي بلغتك:' : 'Con Marocco Energy: trattamento trasparente e per iscritto:'}</span>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {isAr
                    ? 'نرسل لك العرض كتابةً ومفصلاً في كل بند على واتساب قبل أي توقيع أو موافقة رسمية.'
                    : 'Ti inviamo la proposta per iscritto nella tua lingua, dettagliando ogni costo prima di qualsiasi conferma formale.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

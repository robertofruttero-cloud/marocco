import React, { useState } from 'react';
import {
  HelpCircle,
  FileText,
  Key,
  CreditCard,
  Home,
  Briefcase,
  ShieldCheck,
  Smartphone,
  Search,
  ChevronDown,
  Sparkles,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { Language, FaqItem, DocEquivalence } from '../types';
import {
  FAQ_LIST_IT,
  FAQ_LIST_AR,
  DOC_EQUIVALENCES_IT,
  DOC_EQUIVALENCES_AR,
  COMPANY
} from '../data/content';

interface FaqAndDocsProps {
  lang: Language;
}

export const FaqAndDocs: React.FC<FaqAndDocsProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [mainTab, setMainTab] = useState<'faq' | 'docs'>('faq');
  const [faqCategory, setFaqCategory] = useState<'todos' | 'documentos' | 'tramites' | 'general'>('todos');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDocId, setExpandedDocId] = useState<string | null>('cf');

  const faqList: FaqItem[] = isAr ? FAQ_LIST_AR : FAQ_LIST_IT;
  const docList: DocEquivalence[] = isAr ? DOC_EQUIVALENCES_AR : DOC_EQUIVALENCES_IT;

  const filteredFaqs =
    faqCategory === 'todos' ? faqList : faqList.filter((f) => f.category === faqCategory);

  const filteredDocs = docList.filter((doc) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      doc.italianDoc.toLowerCase().includes(q) ||
      doc.italianAcronym.toLowerCase().includes(q) ||
      doc.moroccanEquivalent.toLowerCase().includes(q) ||
      doc.description.toLowerCase().includes(q) ||
      doc.energyUtilityRole.toLowerCase().includes(q) ||
      doc.proTip.toLowerCase().includes(q)
    );
  });

  const getDocIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-5 h-5 text-red-700" />;
      case 'Home':
        return <Home className="w-5 h-5 text-red-700" />;
      case 'Key':
        return <Key className="w-5 h-5 text-red-700" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-red-700" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-red-700" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-red-700" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-red-700" />;
      default:
        return <FileText className="w-5 h-5 text-red-700" />;
    }
  };

  const handleWhatsAppDoc = (docName: string) => {
    const text = encodeURIComponent(
      isAr
        ? `مرحباً ماروكو إنرجي، لدي استفسار حول الوثائق والمعاملات في إيطاليا: ${docName}`
        : `Ciao Marocco Energy, ho una domanda su pratiche e documenti in Italia: ${docName}`
    );
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="faq-docs-section" className="py-16 md:py-24 border-t border-red-200 bg-white">
      <div id="faq-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-300 text-red-900 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isAr ? 'مركز المساعدة ودليل المعاملات' : 'Centro Assistenza & Pratiche'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {isAr ? 'كل شيء واضح، بدون لف ولا دوران ولا تعقيد' : 'Tutto chiaro, senza giri di parole né tecnicismi'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto font-medium">
            {isAr
              ? 'إجابات فورية عن أسئلتك حول سوق الطاقة الإيطالي والدليل الشامل لمعادلات الوثائق بين المغرب وإيطاليا.'
              : 'Risposte ai tuoi dubbi sul mercato energetico italiano e la guida definitiva alle equivalenze di documenti tra Marocco e Italia.'}
          </p>

          {/* Main Tab Buttons */}
          <div className="mt-8 flex justify-center">
            <div className="bg-red-50/70 p-1.5 rounded-2xl border-2 border-red-200 inline-flex flex-wrap gap-1 shadow-xs">
              <button
                onClick={() => setMainTab('faq')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition-all cursor-pointer ${
                  mainTab === 'faq'
                    ? 'bg-red-700 text-white shadow-md'
                    : 'text-slate-700 hover:text-red-950 hover:bg-red-100'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>{isAr ? 'الأسئلة الشائعة' : 'Domande Frequenti'}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-current font-extrabold">
                  {faqList.length}
                </span>
              </button>

              <button
                onClick={() => setMainTab('docs')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition-all cursor-pointer ${
                  mainTab === 'docs'
                    ? 'bg-red-700 text-white shadow-md'
                    : 'text-slate-700 hover:text-red-950 hover:bg-red-100'
                }`}
              >
                <span className="text-base">🇲🇦 🇮🇹</span>
                <span>{isAr ? 'معادلات الوثائق: المغرب vs إيطاليا' : 'Equivalenze Documenti'}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-950/20 text-current font-extrabold">
                  CF, SPID, IBAN
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: FAQ ACCORDION */}
        {mainTab === 'faq' && (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            {/* Category Filter Pills */}
            <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
              <button
                onClick={() => setFaqCategory('todos')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer border ${
                  faqCategory === 'todos'
                    ? 'bg-red-700 text-white border-red-700 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-red-400 hover:bg-red-50'
                }`}
              >
                {isAr ? 'كل الأسئلة' : 'Tutte le domande'}
              </button>

              <button
                onClick={() => setFaqCategory('documentos')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer border ${
                  faqCategory === 'documentos'
                    ? 'bg-red-700 text-white border-red-700 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-red-400 hover:bg-red-50'
                }`}
              >
                {isAr ? '🇲🇦 المعاملات والوثائق المغربية' : '🇲🇦 Pratiche & Documenti Marocchini'}
              </button>

              <button
                onClick={() => setFaqCategory('tramites')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer border ${
                  faqCategory === 'tramites'
                    ? 'bg-red-700 text-white border-red-700 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-red-400 hover:bg-red-50'
                }`}
              >
                {isAr ? '📋 تغيير المشترك واستئناف العداد' : '📋 Voltura & Subentro'}
              </button>

              <button
                onClick={() => setFaqCategory('general')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer border ${
                  faqCategory === 'general'
                    ? 'bg-red-700 text-white border-red-700 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-red-400 hover:bg-red-50'
                }`}
              >
                {isAr ? '⚡ الأسعار والفاتورة' : '⚡ Tariffe & Bolletta'}
              </button>
            </div>

            {/* Accordion list */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-red-50/40 border-2 border-red-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-red-400 shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      <span className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2.5">
                        {faq.category === 'documentos' && (
                          <span className="text-xs px-2 py-0.5 rounded bg-red-200 text-red-950 border border-red-400 font-bold shrink-0">
                            🇲🇦 {isAr ? 'وثيقة' : 'Doc'}
                          </span>
                        )}
                        {faq.question}
                      </span>
                      <div
                        className={`p-1.5 rounded-lg bg-red-100 text-red-800 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 bg-red-700 text-white' : ''
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-red-200 pt-4 whitespace-pre-line animate-fadeIn bg-white font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: DOCUMENT EQUIVALENCE */}
        {mainTab === 'docs' && (
          <div className="animate-fadeIn space-y-6">
            {/* Hero banner for Docs */}
            <div className="bg-gradient-to-r from-red-100 via-white to-red-50 border-2 border-red-200 rounded-3xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700 text-white text-xs font-black shadow-xs">
                    <span>🇲🇦 🇮🇹 {isAr ? 'دليل عملي للمغاربة في إيطاليا' : 'Guida Pratica per i Marocchini in Italia'}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {isAr ? 'معادلات الوثائق الإدارية والرسمية' : 'Equivalenze di Pratiche e Documenti Ufficiali'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isAr
                      ? 'نعلم أن الانتقال إلى إيطاليا قد يكون مربكاً بكثرة الأسماء والمصطلحات الجديدة. هنا نوضح لك معنى كل وثيقة إيطالية وما يقابلها في المغرب وفيما تُستخدم بالضبط عند التعاقد على الكهرباء والغاز.'
                      : 'Sappiamo che emigrare o trasferirsi in Italia può essere confuso con tanti nomi e sigle nuove. Di seguito ti spieghiamo cosa significa ogni documento italiano, qual è il suo equivalente marocchino e a cosa serve esattamente quando contratti i tuoi servizi di luce e gas.'}
                  </p>
                </div>

                {/* Search Bar */}
                <div className="w-full md:w-72 shrink-0">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={isAr ? 'ابحث: CF, SPID, CIN, IBAN...' : 'Cerca: CF, SPID, CIN, IBAN...'}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200"
                    />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1.5 text-right font-medium">
                    {filteredDocs.length} {isAr ? 'وثائق مطابقة' : 'documenti disponibili'}
                  </p>
                </div>
              </div>
            </div>

            {/* Docs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredDocs.map((doc) => {
                const isExpanded = expandedDocId === doc.id;
                return (
                  <div
                    key={doc.id}
                    className={`bg-white border-2 rounded-3xl transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-xs ${
                      isExpanded
                        ? 'border-red-500 shadow-md ring-2 ring-red-100'
                        : 'border-slate-200 hover:border-red-300'
                    }`}
                  >
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-2xl bg-red-50 border border-red-200">
                            {getDocIcon(doc.iconName)}
                          </div>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-red-800 block">
                              🇮🇹 {isAr ? 'الوثيقة في إيطاليا' : 'Documento in Italia'}
                            </span>
                            <h4 className="font-black text-slate-900 text-base sm:text-lg">{doc.italianDoc}</h4>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-950 border border-red-300 whitespace-nowrap">
                          {doc.tag}
                        </span>
                      </div>

                      <div className="p-3 rounded-2xl bg-red-50/60 border border-red-200 mb-4 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-500 font-bold block">
                            🇲🇦 {isAr ? 'المقابل في المغرب:' : 'Equivalente in Marocco:'}
                          </span>
                          <span className="text-xs sm:text-sm font-black text-red-900">{doc.moroccanEquivalent}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-500 block">{isAr ? 'الاختصار' : 'Sigla'}</span>
                          <span className="font-mono text-xs font-bold text-red-800">{doc.italianAcronym}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">{doc.description}</p>

                      <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-xs space-y-1">
                        <div className="flex items-center gap-1.5 text-red-900 font-bold text-[11px] uppercase tracking-wide">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-700 shrink-0" />
                          <span>{isAr ? 'فيما تُستخدم للكهرباء والغاز؟' : 'A cosa serve per Luce e Gas?'}</span>
                        </div>
                        <p className="text-slate-700 text-[11px] leading-relaxed">{doc.energyUtilityRole}</p>
                      </div>

                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-slate-200 space-y-3 animate-fadeIn">
                          <div>
                            <span className="text-[11px] font-bold text-slate-700 block mb-1">
                              🏛️ {isAr ? 'كيف يتم الحصول عليها في إيطاليا؟' : 'Come si ottiene in Italia?'}
                            </span>
                            <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                              {doc.howToGetInItaly}
                            </p>
                          </div>
                          <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs">
                            <span className="font-bold text-amber-950 text-[11px] flex items-center gap-1.5 mb-1">
                              <span>💡</span>
                              {isAr
                                ? 'نصيحة ماروكو إنرجي لمن وصل حديثاً:'
                                : 'Suggerimento Marocco Energy per chi è appena arrivato:'}
                            </span>
                            <p className="text-slate-800 text-[11px] leading-relaxed">{doc.proTip}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                      <button
                        onClick={() => setExpandedDocId(isExpanded ? null : doc.id)}
                        className="text-xs font-bold text-red-800 hover:text-red-950 flex items-center gap-1 cursor-pointer"
                      >
                        <span>
                          {isExpanded
                            ? isAr
                              ? 'إخفاء التفاصيل'
                              : 'Nascondi dettagli'
                            : isAr
                            ? 'كيفية الطلب ونصائح مفيدة'
                            : 'Vedi come richiederlo e consigli'}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      <button
                        onClick={() => handleWhatsAppDoc(doc.italianDoc)}
                        className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer bg-emerald-100 hover:bg-emerald-200 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{isAr ? 'استفسر الآن' : 'Consulta'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3 Quick Requirements Banner */}
            <div className="mt-8 bg-white border-2 border-red-200 rounded-3xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-red-100 border border-red-300">
                  <Sparkles className="w-5 h-5 text-red-800" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900">
                    {isAr ? 'ملخص سريع: ما الذي تحتاجه لتفعيل الكهرباء والغاز اليوم؟' : 'Riepilogo Rapido: Cosa serve per attivare luce e gas oggi?'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {isAr ? 'لا تعقد الأمور: بهذه البيانات الثلاثة فقط يمكنك البدء بالتوفير فوراً.' : 'Non complicarti: con soli questi 3 dati puoi già iniziare a risparmiare.'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200">
                  <div className="text-2xl mb-2">📄</div>
                  <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                    {isAr ? '1. آخر فاتورة أو كود POD/PDR' : '1. Ultima Bolletta o Codice POD/PDR'}
                  </h5>
                  <p className="text-[11px] text-slate-600 mt-1">
                    {isAr
                      ? 'فاتورة الساكن السابق أو فاتورتك الحالية. وإذا كان العداد مقطوعاً تكفي صورة للرقم التسلسلي على العداد.'
                      : 'La bolletta dell\'inquilino precedente o la tua attuale. Se il contatore è spento, basta il numero di serie o una foto del contatore.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200">
                  <div className="text-2xl mb-2">🆔</div>
                  <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                    {isAr ? '2. الرقم الضريبي + جواز السفر أو البطاقة' : '2. Codice Fiscale + Passaporto o CIE'}
                  </h5>
                  <p className="text-[11px] text-slate-600 mt-1">
                    {isAr
                      ? 'رقمك الضريبي Codice Fiscale (حتى الورقي المؤقت) مع صورة جواز سفرك المغربي الصالح أو بطاقة الهوية.'
                      : 'Il tuo numero di Codice Fiscale (anche se provvisorio su carta) e la foto del tuo passaporto marocchino valido o CIN.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200">
                  <div className="text-2xl mb-2">💳</div>
                  <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                    {isAr ? '3. رقم الحساب البنكي IBAN (اختياري ومفيد)' : '3. Codice IBAN (Opzionale ma consigliato)'}
                  </h5>
                  <p className="text-[11px] text-slate-600 mt-1">
                    {isAr
                      ? 'لتفعيل الاقتطاع التلقائي وتفادي دفع كفالة الضمانة (50-150€). تقبل بطاقات Postepay Evolution وRevolut وغيرها.'
                      : 'Per attivare l\'addebito automatico e non pagare tra 50€ e 150€ di deposito cauzionale. Funzionano Revolut, N26, Postepay o banche tradizionali.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cuneo Support Bottom Callout Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-100 via-white to-red-50 border-2 border-red-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-base">🇲🇦</span>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                {isAr ? 'هل لديك أي استفسار حول إجراء أو فاتورة في إيطاليا؟' : 'Hai dubbi su qualche pratica o bolletta in Italia?'}
              </h4>
            </div>
            <p className="text-xs text-slate-600 max-w-xl font-medium">
              {isAr
                ? 'فريقنا في كونيو (بيمونتي) يجيبك 100% بلغتك. راسلنا أو أرسل صورة من وثائقك وسنوجهك خطوة بخطوة.'
                : 'Il nostro team a Cuneo (Piemonte) ti risponde al 100% nella tua lingua. Scrivici o inviaci una foto dei tuoi documenti e ti guidiamo passo dopo passo.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                isAr
                  ? 'مرحباً ماروكو إنرجي، لدي استفسار حول الأسعار والوثائق للكهرباء والغاز في إيطاليا.'
                  : 'Ciao Marocco Energy, ho una domanda sulle tariffe e sui documenti di luce e gas in Italia.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isAr ? 'تحدث معنا على واتساب' : 'Parla su WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Calculator as CalcIcon, Zap, Flame, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language, ServiceType } from '../types';

interface CalculatorProps {
  lang: Language;
  onApplySavings: (service: ServiceType, bill: number, annualSaving: number) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ lang, onApplySavings }) => {
  const isAr = lang === 'ar';
  const [profile, setProfile] = useState<'hogar' | 'empresa'>('hogar');
  const [service, setService] = useState<'luz' | 'gas' | 'dual'>('dual');
  const [bill, setBill] = useState<number>(140);

  const handleProfileChange = (newProfile: 'hogar' | 'empresa') => {
    setProfile(newProfile);
    if (newProfile === 'hogar') {
      setBill(140);
    } else {
      setBill(450);
    }
  };

  // Savings calculation
  let pct = 0.18;
  if (profile === 'empresa') pct = 0.26;
  else if (service === 'dual') pct = 0.24;
  else if (service === 'gas') pct = 0.20;
  else if (service === 'luz') pct = 0.18;

  const monthlySaving = Math.round(bill * pct);
  const annualSaving = monthlySaving * 12;
  const newBill = Math.max(20, bill - monthlySaving);

  const handleApply = () => {
    const serviceParam: ServiceType = profile === 'empresa' ? 'empresa' : service === 'dual' ? 'ambos' : service;
    onApplySavings(serviceParam, bill, annualSaving);
  };

  return (
    <section
      id="calculadora-section"
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-red-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-300 text-red-900 text-xs font-bold mb-3">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>{isAr ? 'محاكي الفاتورة الإيطالية' : 'Simulatore Bolletta Italiana'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            {isAr ? 'احسب كم يمكنك توفيره على فاتورتك' : 'Calcola quanto puoi risparmiare sulla tua bolletta'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            {isAr
              ? 'أدخل مصروفك الشهري التقريبي في إيطاليا لترى الأثر المالي الحقيقي عند انضمامك لتعرفتنا الجماعية.'
              : 'Inserisci la tua spesa media mensile in Italia per vedere l\'impatto stimato unendoti alle nostre tariffe comunitarie.'}
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-white border-2 border-red-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Profile switch */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                  {isAr ? '1. لأي نوع من التوريد؟' : '1. Per che tipo di fornitura?'}
                </label>
                <div className="grid grid-cols-2 gap-3 p-1.5 bg-red-50/70 rounded-2xl border border-red-200">
                  <button
                    type="button"
                    onClick={() => handleProfileChange('hogar')}
                    className={`py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      profile === 'hogar'
                        ? 'bg-gradient-to-r from-red-700 to-green-900 text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {isAr ? '🏠 منزل / سكني' : '🏠 Casa / Residenziale'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleProfileChange('empresa')}
                    className={`py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      profile === 'empresa'
                        ? 'bg-gradient-to-r from-red-700 to-green-900 text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {isAr ? '🏢 نشاط تجاري / P.IVA' : '🏢 Attività / Partita IVA'}
                  </button>
                </div>
              </div>

              {/* Service switch */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                  {isAr ? '2. ما الخدمات التي تريد تحسينها؟' : '2. Che servizi vuoi ottimizzare?'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setService('luz')}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      service === 'luz'
                        ? 'bg-red-50 border-red-500 text-red-900 ring-2 ring-red-400 font-bold shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-red-400'
                    }`}
                  >
                    <Zap className="w-5 h-5 text-red-700" />
                    <span className="text-xs font-bold">{isAr ? 'كهرباء فقط' : 'Solo Luce'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setService('gas')}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      service === 'gas'
                        ? 'bg-amber-50 border-amber-500 text-amber-900 ring-2 ring-amber-400 font-bold shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-amber-400'
                    }`}
                  >
                    <Flame className="w-5 h-5 text-amber-700" />
                    <span className="text-xs font-bold">{isAr ? 'غاز فقط' : 'Solo Gas'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setService('dual')}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      service === 'dual'
                        ? 'bg-red-100 border-red-700 text-red-950 ring-2 ring-red-600 font-bold shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-red-400'
                    }`}
                  >
                    <Layers className="w-5 h-5 text-red-800" />
                    <span className="text-xs font-bold">{isAr ? 'كهرباء + غاز' : 'Luce + Gas'}</span>
                  </button>
                </div>
              </div>

              {/* Monthly bill slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    {isAr ? '3. كم تدفع حالياً شهرياً في إيطاليا؟' : '3. Quanto paghi attualmente al mese in Italia?'}
                  </label>
                  <span className="text-xl font-black text-red-900 bg-red-50 px-3.5 py-1 rounded-xl border border-red-300 shadow-xs">
                    {bill} €{' '}
                    <span className="text-xs text-slate-500 font-normal">
                      {isAr ? '/ شهرياً' : '/ mese'}
                    </span>
                  </span>
                </div>

                <input
                  type="range"
                  min={profile === 'hogar' ? 40 : 150}
                  max={profile === 'hogar' ? 400 : 1800}
                  step={profile === 'hogar' ? 5 : 25}
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-red-100 rounded-lg appearance-none cursor-pointer accent-red-700"
                />

                <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-medium">
                  <span>{profile === 'hogar' ? 'Min: 40€' : 'Min: 150€'}</span>
                  <span>{profile === 'hogar' ? (isAr ? 'المتوسط: 120€ - 180€' : 'Media: 120€ - 180€') : (isAr ? 'المتوسط: 500€ - 900€' : 'Media: 500€ - 900€')}</span>
                  <span>{profile === 'hogar' ? 'Max: 400€+' : 'Max: 1800€+'}</span>
                </div>
              </div>
            </div>

            {/* Live Calculation Display Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-red-800 via-red-700 to-green-900 rounded-3xl p-6 text-white text-center relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[11px] font-black uppercase tracking-wider text-white bg-white/20 px-3 py-1 rounded-full border border-white/30 inline-block mb-3">
                {isAr ? 'توفيرك المالي المتوقع' : 'Il tuo Risparmio Stimato'}
              </span>

              <div className="my-2">
                <p className="text-xs text-red-200">
                  {isAr ? 'التوفير الشهري التقريبي' : 'Risparmio mensile approssimativo'}
                </p>
                <div className="text-4xl sm:text-5xl font-black text-amber-300">
                  <span>-{monthlySaving} €</span>
                  <span className="text-sm font-medium text-red-200 ml-1">
                    {isAr ? '/ شهر' : '/ mese'}
                  </span>
                </div>
              </div>

              <div className="my-4 p-3 rounded-2xl bg-white/15 backdrop-blur-xs border border-white/20 flex items-center justify-around">
                <div>
                  <p className="text-[10px] text-red-200 uppercase font-semibold">
                    {isAr ? 'التوفير السنوي' : 'Risparmio Annuale'}
                  </p>
                  <p className="text-lg font-black text-amber-300">
                    ~{annualSaving} €{isAr ? '/ سنة' : '/ anno'}
                  </p>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div>
                  <p className="text-[10px] text-red-200 uppercase font-semibold">
                    {isAr ? 'فاتورتك الجديدة' : 'La tua nuova rata'}
                  </p>
                  <p className="text-lg font-black text-white">
                    ~{newBill} €{isAr ? '/ شهر' : '/ mese'}
                  </p>
                </div>
              </div>

              <ul className="text-xs text-red-50 text-left space-y-1.5 mb-6 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>{isAr ? 'نقل 100% مجاني بدون انقطاع' : 'Trasferimento 100% gratuito senza interruzione luce/gas'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>{isAr ? 'بدون التزام أو مدة إجبارية' : 'Senza permanenza minima obbligatoria'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>{isAr ? 'مساعدة مباشرة بلغتك عبر واتساب' : 'Assistenza diretta nella tua lingua via WhatsApp'}</span>
                </li>
              </ul>

              <button
                onClick={handleApply}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{isAr ? 'أريد هذا التوفير الآن' : 'Voglio questo Risparmio'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-red-300 mt-2">
                {isAr
                  ? '*التقدير مبني على أسعار الشراء الجماعي مقارنة بمتوسط أسعار السوق الإيطالي.'
                  : '*Stima basata su tariffe di gruppo attuali rispetto alla media del mercato italiano.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Users, Building2, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface StatsProps {
  lang: Language;
}

export const Stats: React.FC<StatsProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section className="py-14 border-y border-red-200 bg-gradient-to-b from-white via-red-50/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700">
            {isAr ? 'قوة الشراء الجماعية للمواطنين المغاربة' : 'Potere d\'acquisto di gruppo per connazionali'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            {isAr ? 'نتائج حقيقية حققتها جاليتنا في إيطاليا' : 'Risultati reali della comunità in Italia'}
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            {isAr
              ? 'باتحادنا نحصل على شروط وأسعار أفضل بكثير مقارنة بعروض شركات الطاقة الكبرى التقليدية.'
              : 'Uniti otteniamo condizioni migliori rispetto alle grandi compagnie energetiche italiane.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-3xl relative overflow-hidden bg-gradient-to-b from-red-50/70 to-white border-2 border-red-300 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-900">
                2100+
              </span>
              <div className="p-2.5 rounded-2xl bg-red-100 border border-red-300 text-red-700">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              {isAr ? 'عائلات تمت مساعدتها' : 'Famiglie Assistite'}
            </h3>
            <p className="text-xs text-slate-600 mb-4 min-h-[32px]">
              {isAr ? 'مغاربة مقيمون في جميع أنحاء إيطاليا' : 'Marocchini residenti in tutta Italia'}
            </p>
            <div className="pt-3 border-t border-red-100 flex items-center justify-between text-xs">
              <span className="text-slate-600">{isAr ? 'متوسط التوفير:' : 'Risparmio medio:'}</span>
              <span className="font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-300">
                {isAr ? '-20€/شهرياً' : '-20€/mese'}
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-3xl relative overflow-hidden bg-white border border-red-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-900">
                780
              </span>
              <div className="p-2.5 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700">
                <Building2 className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              {isAr ? 'شركات وأنشطة تجارية' : 'Aziende & PMI'}
            </h3>
            <p className="text-xs text-slate-600 mb-4 min-h-[32px]">
              {isAr ? 'أنشطة بتكاليف طاقة محسّنة' : 'Attività con costi ottimizzati'}
            </p>
            <div className="pt-3 border-t border-red-100 flex items-center justify-between text-xs">
              <span className="text-slate-600">{isAr ? 'متوسط التوفير:' : 'Risparmio medio:'}</span>
              <span className="font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-300">
                {isAr ? '-100€/شهرياً' : '-100€/mese'}
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-3xl relative overflow-hidden bg-white border border-red-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-900">
                98%
              </span>
              <div className="p-2.5 rounded-2xl bg-red-100 border border-red-300 text-red-700">
                <HeartHandshake className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              {isAr ? 'معاملات بدون انقطاع' : 'Pratiche senza Interruzioni'}
            </h3>
            <p className="text-xs text-slate-600 mb-4 min-h-[32px]">
              {isAr ? 'انتقال للمورد الجديد دون أي انقطاع' : 'Cambi fornitore senza interruzione del servizio'}
            </p>
            <div className="pt-3 border-t border-red-100 flex items-center justify-between text-xs">
              <span className="text-slate-600">{isAr ? 'مدة التفعيل:' : 'Attivazione:'}</span>
              <span className="font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-300">
                {isAr ? '10-15 يوم عمل' : '10-15 giorni'}
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-3xl relative overflow-hidden bg-gradient-to-b from-red-50/70 to-white border-2 border-red-300 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-900">
                4.9★
              </span>
              <div className="p-2.5 rounded-2xl bg-amber-100 border border-amber-300 text-amber-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              {isAr ? 'نسبة رضا الزبائن' : 'Soddisfazione del Cliente'}
            </h3>
            <p className="text-xs text-slate-600 mb-4 min-h-[32px]">
              {isAr ? 'تقييم حقيقي من أبناء الجالية' : 'Valutazione della comunità marocchina'}
            </p>
            <div className="pt-3 border-t border-red-100 flex items-center justify-between text-xs">
              <span className="text-slate-600">{isAr ? 'المساعدة:' : 'Assistenza:'}</span>
              <span className="font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-300">
                {isAr ? '100% بلغتك وبإنسانية' : '100% nella tua lingua'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

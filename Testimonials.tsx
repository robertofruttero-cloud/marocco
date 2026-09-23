import React from 'react';
import { Quote, Star, MapPin, CheckCircle2 } from 'lucide-react';
import { Language, TestimonialItem } from '../types';
import { TESTIMONIALS_IT, TESTIMONIALS_AR } from '../data/content';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const list: TestimonialItem[] = isAr ? TESTIMONIALS_AR : TESTIMONIALS_IT;

  return (
    <section className="py-16 md:py-24 border-t border-red-200 bg-gradient-to-b from-white via-red-50/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-300 text-red-950 text-xs font-bold mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>{isAr ? 'شهادات وتجارب حقيقية' : 'Testimonianze Reali'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            {isAr ? 'مواطنون يوفّرون معنا بالفعل في إيطاليا' : 'Connazionali che già risparmiano con noi'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {isAr
              ? 'من شمال إيطاليا إلى جنوبها، عائلات ومشاريع مغربية تختار طاقة شفافة ومضمونة بلغتها.'
              : 'Da nord a sud in Italia, sempre più marocchini scelgono energia trasparente nella propria lingua.'}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((t) => (
            <div
              key={t.id}
              className="bg-white border-2 border-red-100 hover:border-red-400 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-red-500 shrink-0 shadow-xs"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">{t.name}</h3>
                    <div className="flex items-center gap-1 text-[11px] text-red-800 font-semibold">
                      <MapPin className="w-3 h-3" />
                      <span>{t.city}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium">{t.origin}</p>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic font-normal">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-red-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">
                    {isAr ? 'الخدمة:' : 'Servizio:'} {t.service}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-300">
                    {isAr ? 'التوفير:' : 'Risparmio:'} {t.savings}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-800">
                  <CheckCircle2 className="w-4 h-4 text-red-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

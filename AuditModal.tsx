import React, { useState } from 'react';
import { X, Sparkles, UploadCloud, FileText, CheckCircle2, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { COMPANY } from '../data/content';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose, lang }) => {
  const isAr = lang === 'ar';
  const [selectedService, setSelectedService] = useState<'luz' | 'gas' | 'luz_gas'>('luz_gas');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      isAr
        ? `مرحباً ماروكو إنرجي! أنا ${name || 'مواطن مغربي'}، أعيش في إيطاليا وأريد إرسال صورة فاتورتي لفحص مجاني ومعرفة كم يمكنني توفيره.`
        : `Ciao Marocco Energy! Sono ${name || 'un connazionale'}, vivo in Italia e voglio inviare la mia bolletta per un audit gratuito e vedere quanto posso risparmiare.`
    );
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border-2 border-red-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-red-100 border border-red-300 text-red-800">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  {isAr ? 'فحص مجاني لفاتورتك' : 'Audit Gratuito della tua Bolletta'}
                </h3>
                <p className="text-xs text-slate-600">
                  {isAr
                    ? 'نخبرك خلال 24 ساعة إذا كنت تدفع مبالغ إضافية غير ضرورية'
                    : 'Ti diciamo in 24 ore se stai pagando un sovrapprezzo in Italia'}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              {/* File upload drag zone */}
              <div className="border-2 border-dashed border-red-300 hover:border-red-600 rounded-2xl p-6 text-center bg-red-50/50 transition-all cursor-pointer relative">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <UploadCloud className="w-8 h-8 text-red-700 mx-auto mb-2" />
                {!fileName ? (
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      {isAr ? 'اسحب أو اختر صورة أو ملف PDF لفاتورتك' : 'Trascina o seleziona una foto o PDF della tua bolletta'}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      {isAr ? 'الصيغ المقبولة: PDF, JPG, PNG (حد أقصى 15MB)' : 'Formati supportati: PDF, JPG, PNG (max 15MB)'}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-700">
                    <FileText className="w-4 h-4" />
                    <span>{fileName}</span>
                  </div>
                )}
              </div>

              {/* Service Type Selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  {isAr ? 'من أي خدمة هذه الفاتورة؟' : 'Di che servizio è la bolletta?'}
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedService('luz')}
                    className={`py-2 px-3 rounded-xl border-2 text-center transition-all cursor-pointer ${
                      selectedService === 'luz'
                        ? 'bg-red-100 border-red-600 text-red-950 font-black'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-red-300'
                    }`}
                  >
                    {isAr ? 'كهرباء فقط' : 'Solo Luce'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedService('gas')}
                    className={`py-2 px-3 rounded-xl border-2 text-center transition-all cursor-pointer ${
                      selectedService === 'gas'
                        ? 'bg-amber-100 border-amber-600 text-amber-950 font-black'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-amber-300'
                    }`}
                  >
                    {isAr ? 'غاز فقط' : 'Solo Gas'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedService('luz_gas')}
                    className={`py-2 px-3 rounded-xl border-2 text-center transition-all cursor-pointer ${
                      selectedService === 'luz_gas'
                        ? 'bg-red-100 border-red-600 text-red-950 font-black'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-red-300'
                    }`}
                  >
                    {isAr ? 'كهرباء + غاز' : 'Luce + Gas'}
                  </button>
                </div>
              </div>

              {/* Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {isAr ? 'الاسم الكامل *' : 'Il tuo Nome e Cognome *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isAr ? 'مثال: يوسف بنعلي' : 'Es. Youssef Benali'}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {isAr ? 'واتساب / الهاتف *' : 'WhatsApp / Telefono *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={isAr ? 'مثال: 3451234567 39+' : 'Es. +39 345 1234567'}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  {isAr ? 'البريد الإلكتروني *' : 'Email *'}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tuaemail@esempio.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600 focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-700 to-green-900 hover:from-red-600 hover:to-green-800 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-75"
                >
                  <span>
                    {isSubmitting
                      ? isAr
                        ? 'جارٍ معالجة الطلب...'
                        : 'Elaborazione...'
                      : isAr
                      ? 'طلب تحليل الفاتورة مجاناً'
                      : 'Richiedi Analisi Gratuita'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="relative flex items-center justify-center my-3">
                <div className="border-t border-slate-200 w-full" />
                <span className="bg-white px-3 text-[10px] uppercase font-bold text-slate-500 whitespace-nowrap">
                  {isAr ? 'أو أرسلها مباشرة عبر واتساب' : 'oppure via WhatsApp'}
                </span>
                <div className="border-t border-slate-200 w-full" />
              </div>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center gap-2 border border-emerald-300 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>
                  {isAr
                    ? `أرسل صورة الفاتورة مباشرة على واتساب (${COMPANY.whatsappDisplay})`
                    : `Invia la foto direttamente su WhatsApp (${COMPANY.whatsappDisplay})`}
                </span>
              </button>

              <p className="text-[10px] text-center text-slate-500">
                🔒{' '}
                {isAr
                  ? 'بياناتك محمية بموجب اللائحة الأوروبية العامة لحماية البيانات (GDPR) وتُستخدم فقط لحساب التوفير.'
                  : 'I tuoi dati sono protetti secondo il GDPR europeo e vengono utilizzati solo per il confronto delle tariffe.'}
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              {isAr ? 'تم استلام فاتورتك بنجاح!' : 'Bolletta Ricevuta con Successo!'}
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto">
              {isAr ? (
                <>
                  شكراً جزيلاً <strong className="text-red-800">{name || 'مواطننا العزيز'}</strong>. فريق مستشارينا في فرع كونيو يعكف الآن على مراجعة بنود فاتورتك وحساب التوفير الأقصى لك.
                </>
              ) : (
                <>
                  Grazie mille, <strong className="text-red-800">{name || 'connazionale'}</strong>. Il nostro team di consulenti a Cuneo sta analizzando i tuoi costi di luce e gas.
                </>
              )}
            </p>

            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-left space-y-2 max-w-md mx-auto font-medium">
              <p className="text-red-950 font-bold flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{isAr ? 'الخطوات التالية:' : 'Prossimi passi:'}</span>
              </p>
              <p className="text-slate-600">
                1. {isAr ? 'سنحلل سعر الكيلوواط/ساعة وسعر Smc والتكاليف الثابتة.' : 'Analizzeremo il tuo prezzo al kWh / Smc e i costi fissi.'}
              </p>
              <p className="text-slate-600">
                2. {isAr ? 'سنرسل لك تقريراً ومقارنة دقيقة على واتساب أو البريد.' : 'Ti invieremo via WhatsApp/Email un confronto esatto del tuo risparmio.'}
              </p>
              <p className="text-slate-600">
                3. {isAr ? 'إذا قررت التغيير، ننفذ الإجراء 100% مجاناً ودون أي انقطاع.' : 'Se decidi di cambiare, lo facciamo 100% online e senza costi.'}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppSend}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isAr ? 'تحدث معنا على واتساب الآن' : 'Scrivici subito su WhatsApp'}</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs cursor-pointer"
              >
                {isAr ? 'إغلاق' : 'Chiudi'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

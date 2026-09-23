import React, { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  MessageCircle,
  Upload,
  CheckCircle2,
  Building2,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Language, ServiceType } from '../types';
import { COMPANY } from '../data/content';

interface ContactSectionProps {
  lang: Language;
  preselectedService: ServiceType;
  initialMessage: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  preselectedService,
  initialMessage
}) => {
  const isAr = lang === 'ar';
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceType>(preselectedService);
  const [fileName, setFileName] = useState<string | null>(null);
  const [mensaje, setMensaje] = useState(initialMessage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) setSelectedService(preselectedService);
  }, [preselectedService]);

  useEffect(() => {
    if (initialMessage) setMensaje(initialMessage);
  }, [initialMessage]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const removeFile = () => {
    setFileName(null);
  };

  const getServiceName = (s: ServiceType) => {
    if (isAr) {
      if (s === 'luz') return 'الكهرباء فقط';
      if (s === 'gas') return 'الغاز فقط';
      if (s === 'empresa') return 'خدمات الشركات / P.IVA';
      return 'باقة مزدوجة: كهرباء + غاز';
    }
    if (s === 'luz') return 'Luce Elettrica';
    if (s === 'gas') return 'Gas Metano';
    if (s === 'empresa') return 'Servizi Azienda / Partita IVA';
    return 'Luce + Gas (Pack Dual)';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      isAr
        ? `مرحباً ماروكو إنرجي!\nاسمي: ${nombre || ''} ${apellido || ''}\nالخدمة المطلوبة: ${getServiceName(
            selectedService
          )}\nالهاتف/واتساب: ${telefono || 'بدون هاتف'}\nالبريد: ${email || 'بدون بريد'}\nالرسالة: ${
            mensaje || 'أريد معلومات وتوجيهاً حول عروضكم في إيطاليا.'
          }`
        : `Ciao Marocco Energy!\nNome: ${nombre || ''} ${apellido || ''}\nServizio richiesto: ${getServiceName(
            selectedService
          )}\nTelefono/WhatsApp: ${telefono || 'Non specificato'}\nEmail: ${
            email || 'Non specificata'
          }\nMessaggio: ${mensaje || 'Vorrei ricevere informazioni sulle tariffe energetiche.'}`
    );
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setNombre('');
    setApellido('');
    setEmail('');
    setTelefono('');
    setMensaje('');
    setFileName(null);
    setIsSuccess(false);
  };

  return (
    <section id="contacto-section" className="py-16 md:py-24 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-300 text-red-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{isAr ? 'مساعدة واستشارة شخصية' : 'Assistenza Personalizzata'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
            {isAr ? 'سنجيب على جميع استفساراتك' : 'Risponderemo a tutte le tue domande'}
          </h2>
          <p className="text-lg text-red-800 font-bold mt-2">
            {isAr ? 'تواصل معنا بدون أي التزام' : 'Contattaci senza impegno'}
          </p>
          <p className="text-sm text-slate-600 mt-2">
            {isAr
              ? 'املأ النموذج أدناه أو راسلنا مباشرة عبر واتساب. أحد مستشارينا سيتواصل معك ويرشدك خطوة بخطوة.'
              : 'Compila il modulo o scrivici direttamente su WhatsApp. Un connazionale ti guiderà passo dopo passo.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white border-2 border-red-200 rounded-3xl p-6 sm:p-9 shadow-xl">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isAr ? 'الاسم:' : 'Nome:'} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder={isAr ? 'مثال: يوسف' : 'Il tuo nome'}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isAr ? 'اللقب (النسب):' : 'Cognome:'} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                      placeholder={isAr ? 'مثال: بنعلي' : 'Il tuo cognome'}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isAr ? 'البريد الإلكتروني:' : 'Email:'} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="esempio@email.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isAr ? 'الهاتف / واتساب:' : 'Telefono / WhatsApp:'} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="+39 345 0000000"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selection Buttons */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    {isAr ? 'الخدمة المطلوبة:' : 'Servizio di Interesse:'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedService('luz')}
                      className={`py-2 px-2 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                        selectedService === 'luz'
                          ? 'bg-red-100 border-red-600 text-red-950 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-red-300'
                      }`}
                    >
                      ⚡ {isAr ? 'كهرباء فقط' : 'Solo Luce'}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedService('gas')}
                      className={`py-2 px-2 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                        selectedService === 'gas'
                          ? 'bg-amber-100 border-amber-600 text-amber-950 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-amber-300'
                      }`}
                    >
                      🔥 {isAr ? 'غاز فقط' : 'Solo Gas'}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedService('ambos')}
                      className={`py-2 px-2 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                        selectedService === 'ambos'
                          ? 'bg-red-100 border-red-600 text-red-950 shadow-xs ring-2 ring-red-300'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-red-300'
                      }`}
                    >
                      ⚡🔥 {isAr ? 'كهرباء + غاز' : 'Luce + Gas'}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedService('empresa')}
                      className={`py-2 px-2 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                        selectedService === 'empresa'
                          ? 'bg-emerald-100 border-emerald-600 text-emerald-950 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-300'
                      }`}
                    >
                      🏢 {isAr ? 'شركة / P.IVA' : 'Azienda / IVA'}
                    </button>
                  </div>
                </div>

                {/* File Attachment */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {isAr
                      ? 'أرفق فاتورتك الحالية (اختياري لتحليل فوري):'
                      : 'Allega la bolletta attuale (Opzionale per analisi express):'}
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-50 border-2 border-dashed border-red-300 hover:border-red-600 text-slate-700 text-xs font-bold cursor-pointer transition-colors">
                      <Upload className="w-4 h-4 text-red-700" />
                      <span>{fileName || (isAr ? 'اختر ملف PDF أو صورة...' : 'Seleziona PDF o Foto...')}</span>
                      <input
                        type="file"
                        accept=".pdf,image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    {fileName && (
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-xs text-red-600 hover:underline font-bold"
                      >
                        {isAr ? 'إزالة' : 'Rimuovi'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Message Box */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {isAr ? 'رسالتك أو حالتك:' : 'Messaggio:'}
                  </label>
                  <textarea
                    rows={4}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder={
                      isAr
                        ? 'أخبرنا بوضعك: هل انتقلت مؤخراً إلى شقة جديدة؟ هل تريد تقليل فاتورتك الحالية؟ هل تحتاج إلى تغيير اسم العداد (Voltura)...'
                        : 'Raccontaci la tua situazione: ti sei trasferito di recente?, vuoi ridurre il costo della tua bolletta attuale?, devi fare una voltura?...'
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-red-700 to-green-900 hover:from-red-600 hover:to-green-800 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-75"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? isAr
                          ? 'جارٍ الإرسال...'
                          : 'Invio della richiesta...'
                        : isAr
                        ? 'إرسال الرسالة'
                        : 'Invia Messaggio'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isAr ? 'إرسال عبر واتساب' : 'Invia via WhatsApp'}</span>
                  </button>
                </div>

                <p className="text-[10px] text-slate-500 text-center pt-2">
                  🔒{' '}
                  {isAr
                    ? 'بياناتك الشخصية محمية بالكامل ولن تُشارك أبداً مع أي طرف ثالث لأغراض الإعلانات المزعجة.'
                    : 'I tuoi dati sono protetti e non saranno mai ceduti a terzi a fini di spam commerciale.'}
                </p>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {isAr ? 'تم إرسال طلبك بنجاح!' : 'Messaggio Inviato con Successo!'}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  {isAr ? (
                    <>
                      شكراً جزيلاً <strong className="text-red-800">{nombre || 'مواطننا العزيز'}</strong>. لقد استلمنا رسالتك وسيتواصل معك مستشارنا في أقرب وقت على الرقم <strong className="text-red-800">{telefono}</strong>.
                    </>
                  ) : (
                    <>
                      Grazie <strong className="text-red-800">{nombre || 'connazionale'}</strong>. Abbiamo ricevuto la tua richiesta. Ti contatteremo a breve al tuo telefono <strong className="text-red-800">{telefono}</strong> o via email.
                    </>
                  )}
                </p>
                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl bg-red-100 hover:bg-red-200 text-red-900 font-bold text-xs transition-all cursor-pointer"
                  >
                    {isAr ? 'إرسال طلب آخر' : 'Invia un\'altra richiesta'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Company Details Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-white via-red-50/50 to-red-100/40 border-2 border-red-200 rounded-3xl p-7 shadow-lg">
              <div className="flex items-center gap-3 pb-5 border-b border-red-200">
                <div className="w-12 h-12 rounded-2xl bg-red-100 border border-red-300 flex items-center justify-center text-red-800">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">{COMPANY.name}</h3>
                  <p className="text-xs text-red-800 font-bold">{COMPANY.subgroup}</p>
                </div>
              </div>

              <div className="space-y-4 mt-6 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">
                      {isAr ? 'المقر الرئيسي:' : 'Sede Operativa:'}
                    </strong>
                    <span>{COMPANY.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <Phone className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">
                      {isAr ? 'الهاتف الثابت:' : 'Telefono Fisso:'}
                    </strong>
                    <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-red-700 font-mono font-bold">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">
                      {isAr ? 'واتساب والجوال:' : 'Mobile & WhatsApp:'}
                    </strong>
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 font-mono font-bold text-emerald-700"
                    >
                      {COMPANY.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <Mail className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">
                      {isAr ? 'البريد الإلكتروني:' : 'Email:'}
                    </strong>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="hover:text-red-700 font-mono text-xs sm:text-sm text-red-800 font-bold"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">
                      {isAr ? 'أوقات العمل والمساعدة:' : 'Orario di Assistenza:'}
                    </strong>
                    <span>{isAr ? COMPANY.hoursAr : COMPANY.hoursIt}</span>
                  </div>
                </div>
              </div>

              {/* Quick direct Call Button */}
              <div className="mt-6 pt-5 border-t border-red-200 flex flex-col gap-4">
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{isAr ? 'اتصل بفرع كونيو: ' : 'Chiama Cuneo: '} {COMPANY.phone}</span>
                </a>

                {/* Social Networks Grid */}
                <div className="pt-2 border-t border-red-100">
                  <div className="flex items-center justify-between mb-2.5">
                    <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      {isAr ? 'قنوات التواصل:' : 'Canali e Social Media:'}
                    </p>
                    <span className="text-[10px] text-red-700 font-semibold">
                      {isAr ? '100% بلغتك 🇲🇦' : '100% nella tua lingua 🇲🇦'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-2 rounded-xl bg-[#1877F2] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
                    >
                      <Facebook className="w-3.5 h-3.5" />
                      <span>Facebook</span>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-2 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-2 rounded-xl bg-[#FF0000] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
                    >
                      <Youtube className="w-3.5 h-3.5" />
                      <span>YouTube</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-2 rounded-xl bg-[#0077B5] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-2 rounded-xl bg-neutral-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                      <span>X</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage note */}
            <div className="p-5 rounded-2xl bg-white border border-red-200 text-xs text-slate-600 space-y-1.5 shadow-xs">
              <p className="font-bold text-slate-900">
                {isAr ? '📍 مقر كونيو (بيمونتي) وتغطية وطنية شاملة' : '📍 Cuneo (Piemonte) e Copertura Nazionale'}
              </p>
              <p className="leading-relaxed">
                {isAr
                  ? 'يقع مقرنا في مقاطعة كونيو (بيمونتي)، لكننا نقدم الاستشارة وإدارة عقود الكهرباء والغاز لجميع أبناء الجالية في كافة أنحاء إيطاليا (ميلانو، روما، تورينو، بولونيا، فلورنسا، نابولي وغيرها).'
                  : 'La nostra sede si trova nella provincia di Cuneo (Piemonte), ma forniamo assistenza, consulenza e pratiche energetiche in tutta Italia (Milano, Roma, Torino, Bologna, Firenze, Napoli, Palermo e altre).'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

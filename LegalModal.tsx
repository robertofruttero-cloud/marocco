import React from 'react';
import { X, Lock, Cookie, Shield } from 'lucide-react';
import { Language } from '../types';
import { COMPANY } from '../data/content';

interface LegalModalProps {
  type: 'privacy' | 'cookies' | 'terms' | null;
  onClose: () => void;
  lang: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, lang }) => {
  const isAr = lang === 'ar';
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border-2 border-red-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh] text-slate-700 text-xs sm:text-sm space-y-4">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div>
            <div className="flex items-center gap-3 pb-3 border-b border-red-200">
              <div className="p-2.5 rounded-2xl bg-red-100 text-red-800">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  {isAr ? 'سياسة الخصوصية وحماية البيانات' : 'Informativa sulla Privacy'}
                </h3>
                <p className="text-xs text-red-800 font-medium">Marocco Energy - FraStel Corporation Group</p>
              </div>
            </div>

            <div className="space-y-3 text-slate-600 leading-relaxed font-normal mt-4">
              <p>
                <strong className="text-slate-900">
                  {isAr ? '1. المسؤول عن معالجة البيانات:' : '1. Titolare del Trattamento:'}
                </strong>{' '}
                {isAr
                  ? `ماروكو إنرجي (FraStel Corporation Group)، المقر: ${COMPANY.address}، البريد: ${COMPANY.email}.`
                  : `Marocco Energy (FraStel Corporation Group), con sede in ${COMPANY.address}, email: ${COMPANY.email}.`}
              </p>
              <p>
                <strong className="text-slate-900">
                  {isAr ? '2. أهداف المعالجة:' : '2. Finalità del Trattamento:'}
                </strong>{' '}
                {isAr
                  ? 'تُستخدم البيانات المُقدمة عبر نماذجنا أو قنوات التواصل حصرياً من أجل: (أ) إجراء تحليل ومقارنة أسعار الكهرباء والغاز، (ب) إدارة الوساطة ومعاملات تغيير المورد أو نقل العقد أو استئناف الخدمة، (ج) الحفاظ على تواصل مباشر للاستشارة الشخصية.'
                  : 'I dati forniti tramite i nostri moduli o canali di contatto sono utilizzati esclusivamente per: (a) effettuare l\'analisi e il confronto delle tariffe di luce e gas, (b) gestire l\'intermediazione e le pratiche di cambio fornitore, voltura o subentro richieste dall\'utente, (c) mantenere una comunicazione diretta per la consulenza personalizzata.'}
              </p>
              <p>
                <strong className="text-slate-900">
                  {isAr ? '3. الأساس القانوني:' : '3. Base Giuridica:'}
                </strong>{' '}
                {isAr
                  ? 'تقوم المعالجة على موافقة صريحة من المستخدم الذي يرسل بياناته أو مستندات الفواتير طوعاً، وفقاً للائحة العامة لحماية البيانات (GDPR UE 2016/679).'
                  : 'Il trattamento si fonda sul consenso espresso dell\'utente che invia volontariamente i propri dati o documenti di fattura, ai sensi del Regolamento Generale sulla Protezione dei Dati (GDPR UE 2016/679).'}
              </p>
              <p>
                <strong className="text-slate-900">
                  {isAr ? '4. لا بيع لأطراف ثالثة:' : '4. Nessuna Vendita a Terzi:'}
                </strong>{' '}
                {isAr
                  ? 'لا تبيع ماروكو إنرجي ولا تتنازل عن قواعد البيانات لشركات التسويق الهاتفي المزعج.'
                  : 'Marocco Energy NON vende né cede banche dati a società di telemarketing invasivo.'}
              </p>
              <p>
                <strong className="text-slate-900">
                  {isAr ? '5. حقوق المستخدم:' : '5. Diritti degli Interessati:'}
                </strong>{' '}
                {isAr
                  ? `يمكنك ممارسة حقوقك في الوصول والتصحيح والحذف أو الاعتراض عبر إرسال بريد إلى ${COMPANY.email}.`
                  : `Puoi esercitare i tuoi diritti di accesso, rettifica, cancellazione o opposizione inviando un email a ${COMPANY.email}.`}
              </p>
            </div>
          </div>
        )}

        {type === 'cookies' && (
          <div>
            <div className="flex items-center gap-3 pb-3 border-b border-red-200">
              <div className="p-2.5 rounded-2xl bg-red-100 text-red-800">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  {isAr ? 'سياسة ملفات تعريف الارتباط' : 'Cookie Policy'}
                </h3>
                <p className="text-xs text-red-800 font-medium">
                  {isAr ? 'شفافية وتصفح تقني' : 'Trasparenza e navigazione tecnica'}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-slate-600 leading-relaxed font-normal mt-4">
              <p>
                {isAr
                  ? 'يستخدم هذا الموقع ملفات تعريف ارتباط تقنية ضرورية لتشغيله وملاحته بشكل صحيح، مما يسمح بحفظ تفضيلات اللغة وحالة المحاكي.'
                  : 'Questo sito web utilizza cookie tecnici indispensabili per il funzionamento e la corretta navigazione del sito, permettendo di salvare preferenze di visualizzazione e lo stato della calcolatrice.'}
              </p>
              <p>
                {isAr
                  ? 'لا نجمع ملفات تتبع إعلانية متطفلة من أطراف ثالثة دون موافقتك. يمكنك ضبط متصفحك لحظر ملفات الارتباط، رغم أن بعض وظائف المحاكي قد تتأثر.'
                  : 'Non raccogliamo cookie di tracciamento pubblicitario invasivo di terzi senza il tuo consenso. Puoi configurare il tuo browser per bloccare i cookie, anche se alcune funzioni del simulatore potrebbero subire un impatto.'}
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div>
            <div className="flex items-center gap-3 pb-3 border-b border-red-200">
              <div className="p-2.5 rounded-2xl bg-red-100 text-red-800">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  {isAr ? 'شروط وأحكام الخدمة' : 'Termini e Condizioni del Servizio'}
                </h3>
                <p className="text-xs text-red-800 font-medium">
                  {isAr ? 'شروط الاستشارة الطاقية' : 'Condizioni di consulenza energetica'}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-slate-600 leading-relaxed font-normal mt-4">
              <p>
                {isAr
                  ? 'تعمل ماروكو إنرجي كمستشار ومدير مشتريات جماعية للطاقة لصالح الجالية المغربية في إيطاليا.'
                  : 'Marocco Energy opera come consulente e gestore di acquisti collettivi di energia per la comunità marocchina in Italia.'}
              </p>
              <p>
                {isAr
                  ? 'يخضع توقيع وتفعيل عقود توريد الكهرباء والغاز رسمياً للوائح ARERA والشروط التعاقدية للمورد المعتمد الذي يختاره العميل.'
                  : 'La sottoscrizione e l\'attivazione formale dei contratti di fornitura elettrica e di gas sono regolate dalle normative ARERA e dalle condizioni contrattuali del fornitore autorizzato selezionato dal cliente.'}
              </p>
              <p>
                {isAr
                  ? 'تُحسب تقديرات التوفير على أساس متوسط أسعار السوق بالجملة ولا تعتبر ضماناً ثابتاً إذا تغيرت عادات الاستهلاك الفردية.'
                  : 'Le stime di risparmio sono calcolate sulla base delle tariffe medie del mercato all\'ingrosso e non costituiscono una garanzia immutabile se variano le abitudini di consumo individuali.'}
              </p>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
          >
            {isAr ? 'فهمت ذلك' : 'Ho capito'}
          </button>
        </div>
      </div>
    </div>
  );
};

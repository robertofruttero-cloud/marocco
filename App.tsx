/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ElectricitySection } from './components/ElectricitySection';
import { GasSection } from './components/GasSection';
import { Calculator } from './components/Calculator';
import { BillGuide } from './components/BillGuide';
import { FaqAndDocs } from './components/FaqAndDocs';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AuditModal } from './components/AuditModal';
import { LegalModal } from './components/LegalModal';
import { Language, ServiceType } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('it');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'cookies' | 'terms' | null>(null);
  const [preselectedService, setPreselectedService] = useState<ServiceType>('ambos');
  const [initialContactMessage, setInitialContactMessage] = useState('');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title =
      lang === 'ar'
        ? 'ماروكو إنرجي — الكهرباء والغاز في إيطاليا للمواطنين المغاربة'
        : 'Marocco Energy — Luce e Gas in Italia per i cittadini marocchini';
  }, [lang]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceType) => {
    setPreselectedService(service);
    scrollTo('contacto-section');
  };

  const handleSelectPlan = (planId: string, name: string) => {
    const service: ServiceType = planId.startsWith('luz') ? 'luz' : 'gas';
    setPreselectedService(service);
    setInitialContactMessage(
      lang === 'ar'
        ? `مرحباً، أنا مهتم بعرض "${name}". أود الحصول على كافة المعلومات والمتابعة لتغيير المورد.`
        : `Ciao, sono interessato/a al piano "${name}". Vorrei ricevere maggiori informazioni e procedere con il cambio fornitore.`
    );
    scrollTo('contacto-section');
  };

  const handleApplySavings = (service: ServiceType, bill: number, annualSaving: number) => {
    setPreselectedService(service);
    setInitialContactMessage(
      lang === 'ar'
        ? `مرحباً ماروكو إنرجي، قمت بمحاكاة التوفير: أدفع حالياً حوالي ${bill}€ شهرياً وأرغب في الحصول على التوفير السنوي المتوقع (~${annualSaving}€). تواصلوا معي من فضلكم.`
        : `Ciao Marocco Energy, ho fatto la simulazione di risparmio: pago attualmente circa ${bill}€/mese e vorrei ottenere il risparmio stimato di ~${annualSaving}€/anno. Contattatemi per favore.`
    );
    scrollTo('contacto-section');
  };

  return (
    <div className={`min-h-screen bg-white text-slate-900 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      {/* Top Navigation with Logo & Language Toggle */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Hero Section with Official Logo */}
      <Hero
        lang={lang}
        onSelectService={handleSelectService}
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onScrollToCalc={() => scrollTo('calculadora-section')}
      />

      {/* Community Achievements & Statistics */}
      <Stats lang={lang} />

      {/* Electricity Services & Tariffs */}
      <ElectricitySection
        lang={lang}
        onSelectPlan={handleSelectPlan}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Gas Metano Services & Tariffs */}
      <GasSection
        lang={lang}
        onSelectPlan={handleSelectPlan}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Interactive Savings Calculator */}
      <Calculator
        lang={lang}
        onApplySavings={handleApplySavings}
      />

      {/* Italian Bill Guide, ARERA breakdown, Voltura/Subentro & Scam Alerts */}
      <BillGuide
        lang={lang}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* FAQ & Morocco vs Italy Document Equivalences (CIN, CF, SPID, IBAN, etc.) */}
      <FaqAndDocs lang={lang} />

      {/* Real Moroccan Community Testimonials */}
      <Testimonials lang={lang} />

      {/* Contact Form with File Upload & Cuneo Headquarters Information */}
      <ContactSection
        lang={lang}
        preselectedService={preselectedService}
        initialMessage={initialContactMessage}
      />

      {/* Footer with Logo & Legal Links */}
      <Footer
        lang={lang}
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Sticky Floating WhatsApp Widget */}
      <FloatingWhatsApp lang={lang} />

      {/* Bill Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        lang={lang}
      />

      {/* Legal Information Modal (Privacy, Cookies, Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        lang={lang}
      />
    </div>
  );
}

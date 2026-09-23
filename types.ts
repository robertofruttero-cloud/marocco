export type Language = 'it' | 'ar';

export type ServiceType = 'luz' | 'gas' | 'ambos' | 'empresa';

export interface FaqItem {
  category: 'documentos' | 'tramites' | 'general';
  question: string;
  answer: string;
}

export interface DocEquivalence {
  id: string;
  iconName: 'FileText' | 'Home' | 'Key' | 'CreditCard' | 'Briefcase' | 'ShieldCheck' | 'Smartphone';
  italianDoc: string;
  italianAcronym: string;
  moroccanEquivalent: string;
  tag: string;
  description: string;
  energyUtilityRole: string;
  howToGetInItaly: string;
  proTip: string;
}

export interface TestimonialItem {
  id: number;
  avatar: string;
  name: string;
  city: string;
  origin: string;
  rating: number;
  comment: string;
  service: string;
  savings: string;
}

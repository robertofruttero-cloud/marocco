import { FaqItem, DocEquivalence, TestimonialItem } from '../types';

export const COMPANY = {
  name: 'Marocco Energy',
  subgroup: 'Un progetto di FraStel Corporation Group',
  address: 'Via Bartolomeo Bruni 7, 12100 Cuneo (CN), Italia',
  phone: '+39 0172 1860282',
  whatsapp: '393933192262',
  whatsappDisplay: '+39 393 3192262',
  email: 'info@maroccoenergy.it',
  hoursIt: 'Lunedì a Venerdì 9:00–18:00 (ora Italia)',
  hoursAr: 'الاثنين إلى الجمعة 9:00–18:00 (بتوقيت إيطاليا)',
};

export const FAQ_LIST_IT: FaqItem[] = [
  {
    category: 'documentos',
    question: 'Devo avere il Codice Fiscale per attivare la luce o il gas?',
    answer: 'Sì, è obbligatorio. Il Codice Fiscale è l\'equivalente del numero di identificazione fiscale che usi in Marocco e sono i dati che tutte le compagnie energetiche italiane richiedono per identificarti legalmente. Si richiede gratuitamente in Agenzia delle Entrate o, se sei appena arrivato, puoi farti orientare dal consolato del Marocco in Italia su come richiederlo.'
  },
  {
    category: 'documentos',
    question: 'Cosa succede se non ho ancora il Permesso di Soggiorno?',
    answer: 'Puoi comunque attivare un contratto se hai la ricevuta della richiesta del permesso (cedolino/ricevuta gialla postale), insieme al tuo Codice Fiscale e al passaporto marocchino valido. Non serve aspettare la tessera fisica per iniziare la pratica di luce e gas.'
  },
  {
    category: 'documentos',
    question: 'SPID è obbligatorio per contrattare con voi?',
    answer: 'No. SPID è utile per le pratiche con la pubblica amministrazione italiana, ma per contrattare luce e gas con Marocco Energy ci bastano il tuo Codice Fiscale, un documento valido e i tuoi dati di contatto.'
  },
  {
    category: 'tramites',
    question: 'Qual è la differenza tra Voltura e Subentro?',
    answer: 'La Voltura è quando il contatore è già attivo e c\'è fornitura in casa: cambia solo il titolare del contratto (es. entri in un appartamento in affitto dove la luce è accesa). Il Subentro è quando il contatore è presente fisicamente ma il servizio è stato disattivato dal precedente inquilino e richiede una riattivazione tecnica (5-7 giorni lavorativi).'
  },
  {
    category: 'tramites',
    question: 'Quanto tempo richiede un cambio fornitore (switch)?',
    answer: 'Il cambio fornitore mantenendo lo stesso punto di fornitura (POD/PDR) di solito richiede tra 10 e 15 giorni lavorativi, senza alcuna interruzione del servizio durante il processo.'
  },
  {
    category: 'tramites',
    question: 'C\'è un costo per fare la Voltura o il Subentro con voi?',
    answer: 'No, la gestione e consulenza con Marocco Energy è gratuita (0€ costi di agenzia). Si applicano solo gli eventuali oneri amministrativi tecnici stabiliti dal distributore locale di zona per gli adempimenti sul contatore.'
  },
  {
    category: 'general',
    question: 'Perché la mia bolletta italiana è così alta rispetto a quello che mi aspettavo?',
    answer: 'La bolletta in Italia include la "Spesa materia energia" (l\'unica voce variabile e negoziabile dove ti facciamo risparmiare), il trasporto e gestione contatore, gli oneri di sistema fissati da ARERA e le imposte (IVA e accise). Con noi ottieni prezzi all\'ingrosso calibrati per il risparmio comunitario.'
  },
  {
    category: 'general',
    question: 'Cosa conviene di più: tariffa fissa o indicizzata?',
    answer: 'La tariffa fissa blocca il prezzo al kWh/Smc per 12 mesi per una totale tranquillità senza rincari invernali. La tariffa indicizzata (PUN per la luce o PSV per il gas) segue il mercato all\'ingrosso con spread minimo: ideale quando i prezzi internazionali scendono.'
  },
  {
    category: 'general',
    question: 'Il servizio viene interrotto durante il cambio fornitore?',
    answer: 'Assolutamente no! Per legge italiana (ARERA), il cambio fornitore è puramente amministrativo: i cavi e i tubi rimangono gli stessi e non si resta al buio né al freddo nemmeno per un secondo.'
  }
];

export const FAQ_LIST_AR: FaqItem[] = [
  {
    category: 'documentos',
    question: 'هل يجب أن أملك الرقم الضريبي (Codice Fiscale) لتفعيل الكهرباء أو الغاز؟',
    answer: 'نعم، إلزامي. الرقم الضريبي هو المعادل لرقم التعريف الجبائي في المغرب، وهو ما تطلبه جميع شركات الطاقة الإيطالية للتعرف عليك قانونياً. يُطلب مجاناً من مصلحة الضرائب (Agenzia delle Entrate) أو بالتنسيق مع القنصلية المغربية.'
  },
  {
    category: 'documentos',
    question: 'ماذا يحدث إذا لم أحصل بعد على تصريح الإقامة (Permesso di Soggiorno)؟',
    answer: 'يمكنك تفعيل العقد حتى لو كان معك فقط إيصال طلب الإقامة (الوصل الأصفر أو البريدي)، مع الرقم الضريبي وجواز السفر المغربي الصالح. لا داعي لانتظار البطاقة البلاستيكية لبدء خدمة الكهرباء والغاز.'
  },
  {
    category: 'documentos',
    question: 'هل SPID إلزامي للتعاقد معكم؟',
    answer: 'لا، SPID مفيد للخدمات الحكومية الإيطالية، لكن للتعاقد على الكهرباء والغاز مع ماروكو إنرجي يكفي الرقم الضريبي ووثيقة هوية وبيانات الاتصال الخاصة بك.'
  },
  {
    category: 'tramites',
    question: 'ما الفرق بين تغيير المشترك (Voltura) واستئناف الخدمة (Subentro)؟',
    answer: 'تغيير المشترك (Voltura): العداد مفعّل ومضاء بالفعل، ويتغير فقط اسم صاحب العقد. استئناف الخدمة (Subentro): عندما يكون العداد مقطوعاً أو مغلقاً من الساكن السابق ويحتاج إلى إعادة تشغيل تقنية (5 إلى 7 أيام عمل).'
  },
  {
    category: 'tramites',
    question: 'كم يستغرق تغيير المورد (Switch)؟',
    answer: 'تغيير المورد مع الحفاظ على نفس نقطة التوريد (POD/PDR) يستغرق عادة بين 10 و15 يوم عمل، ودون أي انقطاع للخدمة أثناء الإجراء.'
  },
  {
    category: 'tramites',
    question: 'هل هناك تكلفة لإجراء Voltura أو Subentro معكم؟',
    answer: 'لا، خدمات الاستشارة والإدارة من ماروكو إنرجي مجانية (0€ رسوم إدارة). تُطبق فقط الرسوم الرسمية التي يفرضها موزع الشبكة المحلي إن وجدت.'
  },
  {
    category: 'general',
    question: 'لماذا فاتورتي الإيطالية مرتفعة مقارنة بما كنت أتوقع؟',
    answer: 'تتكون الفاتورة من تكلفة الطاقة (الجزء الوحيد القابل للتفاوض حيث نوفر لك فيه)، وتكاليف النقل وإدارة العداد، وأعباء النظام التي تحددها الدولة، والضرائب. نحن نوفر لك أفضل سعر طاقة بفضل القوة الشرائية الجماعية للجالية.'
  },
  {
    category: 'general',
    question: 'ما الأفضل: سعر ثابت أم سعر مرتبط بالمؤشر؟',
    answer: 'السعر الثابت يحميك لمدة 12 شهراً من أي تقلبات في السوق الشتوي. أما السعر المرتبط بمؤشر (PUN للكهرباء أو PSV للغاز) فيتبع السعر الرسمي بالجملة بهامش منخفض جداً.'
  },
  {
    category: 'general',
    question: 'هل تنقطع الكهرباء أو الغاز أثناء الانتقال إليكم؟',
    answer: 'إطلاقاً! بموجب القانون الإيطالي، فإن عملية الانتقال إدارية بحتة ولا يصحبها أي انقطاع في التوصيل أو الخدمة.'
  }
];

export const DOC_EQUIVALENCES_IT: DocEquivalence[] = [
  {
    id: 'cf',
    iconName: 'FileText',
    italianDoc: 'Codice Fiscale',
    italianAcronym: 'CF',
    moroccanEquivalent: 'CIN (Identificativo Fiscale / Carta Nazionale)',
    tag: 'Indispensabile',
    description: 'Codice alfanumerico unico di 16 caratteri che identifica ogni persona davanti allo Stato italiano per qualsiasi pratica fiscale e contrattuale.',
    energyUtilityRole: 'È il dato obbligatorio numero uno per attivare qualsiasi contratto di luce o gas. Senza Codice Fiscale non si può intestare alcuna utenza.',
    howToGetInItaly: 'Si richiede gratuitamente presso qualsiasi ufficio dell\'Agenzia delle Entrate presentando passaporto valido. Si ottiene subito in formato cartaceo.',
    proTip: 'Richiedilo appena arrivi in Italia: è indispensabile anche per SIM telefonica, affitto e tessera sanitaria.'
  },
  {
    id: 'residenza',
    iconName: 'Home',
    italianDoc: 'Certificato di Residenza',
    italianAcronym: 'Residenza',
    moroccanEquivalent: 'Attestato di domicilio / Shahadat Soukna',
    tag: 'Abitazione',
    description: 'Documento rilasciato dal Comune che certifica l\'iscrizione anagrafica all\'indirizzo della tua abitazione.',
    energyUtilityRole: 'Permette di accedere alla tariffa agevolata per "Clienti Domestici Residenti", risparmiando sugli oneri di rete rispetto alle seconde case.',
    howToGetInItaly: 'Si richiede all\'Anagrafe del Comune dove abiti (anche online con SPID/CIE) dopo aver presentato dichiarazione di residenza.',
    proTip: 'Se ti sei appena trasferito e la residenza è in lavorazione, puoi comunque attivare le utenze fornendo il contratto di locazione registrato.'
  },
  {
    id: 'spid',
    iconName: 'Key',
    italianDoc: 'SPID / CIE',
    italianAcronym: 'SPID',
    moroccanEquivalent: 'Identità Digitale Nazionale',
    tag: 'Digitale',
    description: 'Sistema Pubblico di Identità Digitale per accedere a tutti i portali della Pubblica Amministrazione italiana.',
    energyUtilityRole: 'Comodo per firmare contratti online o consultare il Portale Consumi ARERA, ma con Marocco Energy non è obbligatorio: gestiamo noi la pratica per te.',
    howToGetInItaly: 'Si attiva tramite provider autorizzati (Poste Italiane, Lepida, Aruba, Namirial) con passaporto/CIE e Codice Fiscale.',
    proTip: 'Attivarlo alle Poste (PosteID) è semplice ed è utilissimo per INPS, Agenzia Entrate e permessi.'
  },
  {
    id: 'iban',
    iconName: 'CreditCard',
    italianDoc: 'Codice IBAN (Conto Corrente)',
    italianAcronym: 'IBAN',
    moroccanEquivalent: 'RIB (Relevé d\'Identité Bancaire)',
    tag: 'Pagamenti',
    description: 'Codice bancario di 27 caratteri (inizia con IT) per la domiciliazione bancaria SDD (RID) e pagamenti.',
    energyUtilityRole: 'Attiva l\'addebito automatico: evita il versamento della cauzione (da 50€ a 150€) e impedisce ritardi o more di pagamento.',
    howToGetInItaly: 'Fornito da qualsiasi banca italiana o conto online/carta con IBAN (Postepay Evolution, Revolut, BBVA, Intesa, UniCredit).',
    proTip: 'Anche carte prepagate con IBAN come Postepay Evolution sono accettate per la domiciliazione bollette.'
  },
  {
    id: 'permesso',
    iconName: 'Briefcase',
    italianDoc: 'Permesso di Soggiorno',
    italianAcronym: 'PDS',
    moroccanEquivalent: 'Carte de Séjour / Titolo di soggiorno',
    tag: 'Documento',
    description: 'Autorizzazione ufficiale della Questura che consente a un cittadino extracomunitario di risiedere in Italia.',
    energyUtilityRole: 'Serve a comprovare la regolare permanenza: per attivare luce e gas basta anche la ricevuta postale (cedolino con codice ologramma).',
    howToGetInItaly: 'Si richiede tramite kit postale (sportello Amico di Poste Italiane) o direttamente in Questura a seconda della tipologia di visto.',
    proTip: 'Conserva sempre la ricevuta originale del kit postale: in Italia ha pieno valore legale durante l\'attesa del rilascio.'
  },
  {
    id: 'tessera',
    iconName: 'ShieldCheck',
    italianDoc: 'Tessera Sanitaria (TEAM)',
    italianAcronym: 'TS',
    moroccanEquivalent: 'Copertura Sanitaria / CNSS / AMO',
    tag: 'Sanità',
    description: 'Tesserino plastificato contenente il Codice Fiscale magnetico e il codice a barre per l\'assistenza sanitaria pubblica (ASL).',
    energyUtilityRole: 'È spesso usata come prova visiva del Codice Fiscale valido per le verifiche anagrafiche dei fornitori.',
    howToGetInItaly: 'Rilasciata automaticamente dall\'ASL al momento dell\'iscrizione al Servizio Sanitario Nazionale (SSN).',
    proTip: 'In attesa della tessera plastificata, il certificato cartaceo di attribuzione del Codice Fiscale dell\'Agenzia delle Entrate ha lo stesso valore.'
  },
  {
    id: 'pec',
    iconName: 'Smartphone',
    italianDoc: 'PEC (Posta Elettronica Certificata)',
    italianAcronym: 'PEC',
    moroccanEquivalent: 'Email Giuridica Ufficiale',
    tag: 'Legale & P.IVA',
    description: 'Email con valore legale equiparato a una raccomandata con ricevuta di ritorno. Obbligatoria per ditte individuali e Partite IVA.',
    energyUtilityRole: 'Indispensabile per contratti aziendali (bar, macellerie, ristoranti, ditte edili) per la fatturazione elettronica e comunicazioni legali.',
    howToGetInItaly: 'Si acquista online da provider certificati (Aruba, Poste Italiane, Legalmail) per pochi euro all\'anno.',
    proTip: 'Se hai una Partita IVA in Italia, la PEC deve essere registrata al registro INI-PEC.'
  }
];

export const DOC_EQUIVALENCES_AR: DocEquivalence[] = [
  {
    id: 'cf',
    iconName: 'FileText',
    italianDoc: 'الرقم الضريبي (Codice Fiscale)',
    italianAcronym: 'CF',
    moroccanEquivalent: 'بطاقة التعريف الوطنية (CIN) / الرقم الجبائي',
    tag: 'إلزامي وضروري',
    description: 'رمز أبجدي رقمي فريد مكوّن من 16 حرفاً ورتماً يعرّف الشخص رسمياً في إيطاليا لأي معاملة مالية أو عقدية.',
    energyUtilityRole: 'هو الشرط الأساسي الأول لتفعيل أي عقد كهرباء أو غاز في إيطاليا. بدونه لا يمكن تسجيل العداد باسمك.',
    howToGetInItaly: 'يُطلب مجاناً وفوراً من أي مكتب لمصلحة الضرائب (Agenzia delle Entrate) بتقديم جواز السفر المغربي الصالح.',
    proTip: 'اطلبه فور وصولك إلى إيطاليا لأنه ضروري أيضاً لعقد الكراء وشريحة الهاتف والبطاقة الصحية والعمل.'
  },
  {
    id: 'residenza',
    iconName: 'Home',
    italianDoc: 'شهادة الإقامة (Certificato di Residenza)',
    italianAcronym: 'Residenza',
    moroccanEquivalent: 'شهادة السكنى (Shahadat Soukna)',
    tag: 'السكن',
    description: 'وثيقة رسمية من بلدية السكن (Comune) تثبت تسجيلك في عنوان سكني محدد.',
    energyUtilityRole: 'تمنحك الاستفادة من تعرفة "الزبون المقيم" (Cliente Residente) المخفضة لتوفير رسوم الشبكة الحكومية.',
    howToGetInItaly: 'تُطلب من مكتب الإحصاء (Anagrafe) في البلدية بعد تقديم طلب السكن وتفتيش الشرطة البلدية (Vigili).',
    proTip: 'إذا كنت مستأجراً جديداً والبلدية لم تثبت إقامتك بعد، يمكنك تفعيل العدادات فوراً بواسطة عقد الكراء المسجل.'
  },
  {
    id: 'spid',
    iconName: 'Key',
    italianDoc: 'الهوية الرقمية (SPID / CIE)',
    italianAcronym: 'SPID',
    moroccanEquivalent: 'الهوية الرقمية الوطنية الموحدة',
    tag: 'رقمي',
    description: 'نظام الهوية الرقمية الموحد للدخول إلى كافة البوابات الحكومية والضريبية والبلديات.',
    energyUtilityRole: 'يسهل تتبع الفواتير واستهلاكك عبر الإنترنت، ولكن مع ماروكو إنرجي ليس إلزامياً، فنحن نتولى كل شيء.',
    howToGetInItaly: 'يتم عبر مكاتب البريد الإيطالي (Poste Italiane) أو مزودين معتمدين بتقديم بطاقة الهوية والرقم الضريبي.',
    proTip: 'تفعيله في مكاتب البريد (PosteID) مفيد جداً لمتابعة ملفات الضمان الاجتماعي (INPS) وتصريح الإقامة.'
  },
  {
    id: 'iban',
    iconName: 'CreditCard',
    italianDoc: 'رقم الحساب البنكي (IBAN)',
    italianAcronym: 'IBAN',
    moroccanEquivalent: 'البيان البنكي (RIB)',
    tag: 'الأداء المالي',
    description: 'رمز الحساب البنكي الإيطالي (يبدأ بـ IT) لتفعيل الاقتطاع المباشر التلقائي من الحساب.',
    energyUtilityRole: 'يغنيك عن دفع مبلغ الضمانة (من 50 إلى 150 يورو) ويضمن دفع الفاتورة في وقتها دون غرامات تأخير.',
    howToGetInItaly: 'متوفر مع أي حساب بنكي إيطالي أو بطاقة دفع مشحونة (Postepay Evolution, Revolut, BBVA, Intesa).',
    proTip: 'حتى بطاقات الدفع مثل Postepay Evolution مقبولة وممتازة لتفعيل الاقتطاع التلقائي.'
  },
  {
    id: 'permesso',
    iconName: 'Briefcase',
    italianDoc: 'تصريح الإقامة (Permesso di Soggiorno)',
    italianAcronym: 'PDS',
    moroccanEquivalent: 'بطاقة الإقامة (Carte de Séjour)',
    tag: 'وثيقة قانونية',
    description: 'الإذن الرسمي الصادر عن الشرطة الإيطالية (Questura) لإقامة المواطن الأجنبي قانونياً في إيطاليا.',
    energyUtilityRole: 'لتفعيل الكهرباء والغاز، يكفي تماماً تقديم وصل الإيداع البريدي (الوصل الأصفر) مع جواز السفر والرقم الضريبي.',
    howToGetInItaly: 'يُقدم عبر الطقم البريدي (Kit Postale) في البريد أو مباشرة في الكويستورا حسب نوع التأشيرة.',
    proTip: 'احتفظ دائماً بالوصل البريدي الأصلي، فهو وثيقة قانونية معترف بها لدى كافة الشركات أثناء انتظار البطاقة.'
  },
  {
    id: 'tessera',
    iconName: 'ShieldCheck',
    italianDoc: 'البطاقة الصحية (Tessera Sanitaria)',
    italianAcronym: 'TS',
    moroccanEquivalent: 'التغطية الصحية (CNSS / AMO)',
    tag: 'الصحة',
    description: 'بطاقة بلاستيكية تحمل الرقم الضريبي وتتيح العلاج في المستشفيات العامة وأطباء العائلة.',
    energyUtilityRole: 'تُستعمل كإثبات رسمي للرقم الضريبي لدى شركات الطاقة.',
    howToGetInItaly: 'تصدر تلقائياً عند التسجيل في مصلحة الصحة المحلية (ASL) التابعة لمنطقتك.',
    proTip: 'أثناء انتظار البطاقة البلاستيكية، الورقة البيضاء الصادرة عن مصلحة الضرائب لها نفس القيمة القانونية.'
  },
  {
    id: 'pec',
    iconName: 'Smartphone',
    italianDoc: 'البريد الإلكتروني المعتمد (PEC)',
    italianAcronym: 'PEC',
    moroccanEquivalent: 'البريد القانوني الرسمي',
    tag: 'للشركات والمهنيين',
    description: 'بريد إلكتروني قانوني يعادل الرسالة المضمونة مع إشعار بالتوصل. إلزامي للشركات وأصحاب المهن (Partita IVA).',
    energyUtilityRole: 'إلزامي للأنشطة التجارية (مطاعم، جزارة حلال، شركات بناء، محلات) للفوترة الإلكترونية.',
    howToGetInItaly: 'يتم شراؤه عبر الإنترنت من شركات معتمدة (Aruba, Poste Italiane) بتكلفة بسيطة سنوياً.',
    proTip: 'إذا كان لديك مشروع تجاري في إيطاليا، يجب تسجيل بريد الـ PEC في السجل التجاري الوطني.'
  }
];

export const TESTIMONIALS_IT: TestimonialItem[] = [
  {
    id: 1,
    avatar: 'https://ui-avatars.com/api/?name=Youssef+El+Amrani&background=0284c7&color=fff&bold=true',
    name: 'Youssef El Amrani',
    city: 'Milano',
    origin: 'Casablanca, Marocco',
    rating: 5,
    comment: 'Sono arrivato in Italia un anno fa e non capivo nulla della bolletta. Mi hanno spiegato tutto in modo semplice e ora pago 35€ in meno al mese tra luce e gas.',
    service: 'Luce + Gas',
    savings: '-35€/mese'
  },
  {
    id: 2,
    avatar: 'https://ui-avatars.com/api/?name=Fatima+Bennani&background=f59e0b&color=1e293b&bold=true',
    name: 'Fatima Bennani',
    city: 'Torino',
    origin: 'Fès, Marocco',
    rating: 5,
    comment: 'Ho dovuto fare un Subentro perché l\'appartamento era rimasto senza gas. Si sono occupati loro di tutto e in una settimana avevo di nuovo il riscaldamento.',
    service: 'Gas Casa',
    savings: '-28€/mese'
  },
  {
    id: 3,
    avatar: 'https://ui-avatars.com/api/?name=Karim+Ziani&background=16a34a&color=fff&bold=true',
    name: 'Karim Ziani',
    city: 'Roma',
    origin: 'Rabat, Marocco',
    rating: 5,
    comment: 'Ho un ristorante e il risparmio sulla bolletta della luce è stato molto più di quanto mi aspettassi. In più mi hanno spiegato come dedurre l\'IVA correttamente.',
    service: 'Azienda B2B',
    savings: '-180€/mese'
  },
  {
    id: 4,
    avatar: 'https://ui-avatars.com/api/?name=Salma+El+Haddad&background=7c3aed&color=fff&bold=true',
    name: 'Salma El Haddad',
    city: 'Bologna',
    origin: 'Marrakech, Marocco',
    rating: 5,
    comment: 'Quello che apprezzo di più è che rispondono su WhatsApp nella mia lingua. Ho cambiato fornitore senza alcuna interruzione del servizio, proprio come promesso.',
    service: 'Luce Domestica',
    savings: '-22€/mese'
  }
];

export const TESTIMONIALS_AR: TestimonialItem[] = [
  {
    id: 1,
    avatar: 'https://ui-avatars.com/api/?name=Youssef+El+Amrani&background=0284c7&color=fff&bold=true',
    name: 'يوسف العمراني',
    city: 'ميلانو',
    origin: 'الدار البيضاء، المغرب',
    rating: 5,
    comment: 'وصلت إلى إيطاليا منذ سنة وكنت أجد صعوبة في فهم الفواتير وتفاصيلها. شرحوا لي كل بند ببساطة والآن أوفر 35 يورو شهرياً بين الكهرباء والغاز.',
    service: 'كهرباء + غاز',
    savings: '-35€/شهرياً'
  },
  {
    id: 2,
    avatar: 'https://ui-avatars.com/api/?name=Fatima+Bennani&background=f59e0b&color=1e293b&bold=true',
    name: 'فاطمة بناني',
    city: 'تورينو',
    origin: 'فاس، المغرب',
    rating: 5,
    comment: 'احتجت لإعادة تشغيل الغاز في البيت بعد انتقالنا. تكفلوا بكافة الإجراءات مع الموزع وخلال أسبوع اشتغلت التدفئة مجدداً دون تعقيد.',
    service: 'غاز منزلي',
    savings: '-28€/شهرياً'
  },
  {
    id: 3,
    avatar: 'https://ui-avatars.com/api/?name=Karim+Ziani&background=16a34a&color=fff&bold=true',
    name: 'كريم زياني',
    city: 'روما',
    origin: 'الرباط، المغرب',
    rating: 5,
    comment: 'أدير مطعماً في روما وتوفير فاتورة الكهرباء فاق كل توقعاتي، بالإضافة إلى مساعدتهم في ضبط الفوترة وخصم ضريبة القيمة المضافة.',
    service: 'أنشطة وتجارة',
    savings: '-180€/شهرياً'
  },
  {
    id: 4,
    avatar: 'https://ui-avatars.com/api/?name=Salma+El+Haddad&background=7c3aed&color=fff&bold=true',
    name: 'سلمى الحداد',
    city: 'بولونيا',
    origin: 'مراكش، المغرب',
    rating: 5,
    comment: 'أفضل ما في الخدمة هو الرد المباشر على واتساب بلغتنا ووضوح تام دون أي انقطاع في الكهرباء، خدمة موثوقة وننصح بها كل الجالية.',
    service: 'كهرباء منزلية',
    savings: '-22€/شهرياً'
  }
];

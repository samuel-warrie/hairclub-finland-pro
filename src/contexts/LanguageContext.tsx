import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      gallery: 'Gallery',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Traditional craftsmanship meets contemporary style in the heart of Oulu',
      viewServices: 'View Services',
      contactUs: 'Contact Us',
    },
    home: {
      welcome: 'Welcome',
      fullServiceTitle: 'Full Service',
      barberShop: 'Barber Shop',
      intro: 'Located in the heart of Oulu, Hair Club Finland is where classic barbering traditions meet modern styling techniques. With over 15 years of experience, we deliver precision cuts, expert beard grooming, and personalized service.',
      learnStory: 'Learn Our Story',
      ourExpertise: 'Our Expertise',
      services: 'Services',
      viewAllServices: 'View All Services',
      ourWork: 'Our Work',
      gallery: 'Gallery',
      viewFullGallery: 'View Full Gallery',
      findUs: 'Find Us',
      locationHours: 'Location & Hours',
      address: 'Address',
      businessHours: 'Business Hours',
      mondayFriday: 'Monday – Friday',
      saturdaySunday: 'Saturday – Sunday',
      closed: 'Closed',
      walkIns: 'Walk-ins Welcome',
      walkInsDesc: 'Simply drop by during business hours.',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Expert grooming tailored to your style',
      whatWeOffer: 'What We Offer',
      completeGrooming: 'Complete Grooming Services',
      description: 'From classic cuts to modern styling, we offer a comprehensive range of professional grooming services. Browse our services by category below.',
      readyTitle: 'Ready for Your Perfect Look?',
      readyDesc: 'Walk in anytime during our business hours and let our experts take care of you.',
    },
    about: {
      title: 'About Us',
      subtitle: 'Tradition meets innovation',
      ourStory: 'Our Story',
      since2012: 'Since 2012',
      storyTitle: 'The Hair Club Story',
      storyText1: 'Located in central Oulu, Hair Club Finland blends classic barber traditions with modern trends. Our shop is more than just a place to get a haircut — it\'s a sanctuary where craftsmanship meets community.',
      storyText2: 'Founded with a vision to bring world-class grooming services to the heart of Finland, we\'ve built our reputation on attention to detail, personalized service, and an unwavering commitment to making every client look and feel their absolute best.',
      storyText3: 'Whether you\'re looking for a classic cut, a modern fade, or expert beard styling, our team brings years of experience and passion to every service.',
      whatDrivesUs: 'What Drives Us',
      ourValues: 'Our Values',
      excellence: 'Excellence',
      excellenceDesc: 'We pursue perfection in every cut, every style, and every interaction with our clients.',
      community: 'Community',
      communityDesc: 'More than a barbershop — a gathering place where everyone feels welcome and valued.',
      passion: 'Passion',
      passionDesc: 'Our love for the craft drives us to continuously learn and improve our skills.',
      meetTheExpert: 'Meet the Expert',
      ourTeam: 'Our Team',
      ownerRole: 'Owner & Master Barber',
      ownerBio: 'With over 15 years of experience in the industry, Kasim brings unparalleled expertise and passion to every haircut. His dedication to the craft and commitment to client satisfaction has made Hair Club Finland a destination for those seeking the best in grooming services.',
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Our work speaks for itself',
      showcase: 'Showcase',
      ourWork: 'Our Work in Action',
      description: 'Browse through our gallery to see the quality and craftsmanship that goes into every service we provide.',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'d love to hear from you',
      getInTouch: 'Get In Touch',
      visitShop: 'Visit Our Shop',
      description: 'Have questions? We\'re here to help. Drop by during business hours or reach out through any of the channels below.',
      location: 'Location',
      viewOnMap: 'View on Map',
      businessHours: 'Business Hours',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      sendMessage: 'Send a Message',
      formDescription: 'Fill out the form below and we\'ll get back to you.',
      fullName: 'Full Name',
      phoneNumber: 'Phone Number',
      serviceInterest: 'Service Interest',
      selectService: 'Select a service',
      message: 'Message',
      messagePlaceholder: 'Any special requests or questions?',
      yourName: 'Your name',
      yourPhone: 'Your phone',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Request sent successfully!',
      successDesc: 'We will get back to you soon. For immediate service, please call us.',
    },
    footer: {
      tagline: 'Traditional craftsmanship meets contemporary style',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      rights: 'All rights reserved',
    },
    serviceNames: {
      'Premium Haircut': 'Premium Haircut',
      'Classic Haircut': 'Classic Haircut',
      'Salon Haircut': 'Salon Haircut',
      'Single Color': 'Single Color',
      'Special Occasion Styling': 'Special Occasion Styling',
      'Blow Dry Styling': 'Blow Dry Styling',
    },
  },
  fi: {
    nav: {
      home: 'Etusivu',
      services: 'Palvelut',
      gallery: 'Galleria',
      about: 'Meistä',
      contact: 'Yhteystiedot',
    },
    hero: {
      subtitle: 'Perinteinen käsityötaito kohtaa modernin tyylin Oulun sydämessä',
      viewServices: 'Katso Palvelut',
      contactUs: 'Ota Yhteyttä',
    },
    home: {
      welcome: 'Tervetuloa',
      fullServiceTitle: 'Täyden Palvelun',
      barberShop: 'Parturi-Kampaamo',
      intro: 'Oulun sydämessä sijaitseva Hair Club Finland yhdistää perinteiset parturitekniikat ja modernit tyylitekniikat. Yli 15 vuoden kokemuksella tarjoamme tarkkoja leikkauksia, asiantuntevaa partahoitoa ja henkilökohtaista palvelua.',
      learnStory: 'Lue Tarinaamme',
      ourExpertise: 'Asiantuntemuksemme',
      services: 'Palvelut',
      viewAllServices: 'Näytä Kaikki Palvelut',
      ourWork: 'Työmme',
      gallery: 'Galleria',
      viewFullGallery: 'Näytä Koko Galleria',
      findUs: 'Löydä Meidät',
      locationHours: 'Sijainti & Aukioloajat',
      address: 'Osoite',
      businessHours: 'Aukioloajat',
      mondayFriday: 'Maanantai – Perjantai',
      saturdaySunday: 'Lauantai – Sunnuntai',
      closed: 'Suljettu',
      walkIns: 'Walk-in Asiakkaat Tervetulleita',
      walkInsDesc: 'Tule käymään aukioloaikojen aikana.',
    },
    services: {
      title: 'Palvelumme',
      subtitle: 'Asiantuntevaa hoitoa tyyliisi räätälöitynä',
      whatWeOffer: 'Tarjoamme',
      completeGrooming: 'Täydelliset Hoitopalvelut',
      description: 'Klassikeista leikkauksista moderniin tyylittelyyn tarjoamme kattavan valikoiman ammattimaisia hoitopalveluita. Selaa palveluitamme kategorioittain alla.',
      readyTitle: 'Valmis Täydelliseen Ilmeeseen?',
      readyDesc: 'Tule käymään aukioloaikojen aikana ja anna asiantuntijoidemme huolehtia sinusta.',
    },
    about: {
      title: 'Meistä',
      subtitle: 'Perinne kohtaa innovaation',
      ourStory: 'Tarinaamme',
      since2012: 'Vuodesta 2012',
      storyTitle: 'Hair Clubin Tarina',
      storyText1: 'Oulun keskustassa sijaitseva Hair Club Finland yhdistää klassiset parturiperinteet moderneihin trendeihin. Liikkeemme on enemmän kuin vain paikka hiusten leikkaamiseen — se on pyhäkkö, jossa käsityötaito kohtaa yhteisön.',
      storyText2: 'Perustettu visiolla tuoda maailmanluokan hoitopalveluita Suomen sydämeen, olemme rakentaneet maineemme yksityiskohtien huomioimiselle, henkilökohtaiselle palvelulle ja horjumattomalle sitoutumiselle saada jokainen asiakas näyttämään ja tuntemaan olonsa ehdottoman parhaaksi.',
      storyText3: 'Olitpa etsimässä klassista leikkausta, modernia fadea tai asiantuntevaa partatyylittelyä, tiimimme tuo vuosien kokemuksen ja intohimon jokaiseen palveluun.',
      whatDrivesUs: 'Mikä Meitä Ajaa',
      ourValues: 'Arvomme',
      excellence: 'Erinomaisuus',
      excellenceDesc: 'Tavoittelemme täydellisyyttä jokaisessa leikkauksessa, jokaisessa tyylistä ja jokaisessa vuorovaikutuksessa asiakkaidemme kanssa.',
      community: 'Yhteisö',
      communityDesc: 'Enemmän kuin parturi-kampaamo — kokoontumispaikka, jossa jokainen tuntee itsensä tervetulleeksi ja arvostetuksi.',
      passion: 'Into',
      passionDesc: 'Rakkautemme käsityötaitoon ajaa meitä jatkuvasti oppimaan ja parantamaan taitojamme.',
      meetTheExpert: 'Tapaa Asiantuntija',
      ourTeam: 'Tiimimme',
      ownerRole: 'Omistaja & Mestariparturi',
      ownerBio: 'Yli 15 vuoden kokemuksella alalta Kasim tuo verrattoman asiantuntemuksen ja intohimon jokaiseen hiustenleikkaukseen. Hänen omistautumisensa käsityötaidolle ja sitoutumisensa asiakastyytyväisyyteen on tehnyt Hair Club Finlandista määränpään niille, jotka etsivät parasta hoitopalveluissa.',
    },
    gallery: {
      title: 'Galleria',
      subtitle: 'Työmme puhuu puolestaan',
      showcase: 'Näyttely',
      ourWork: 'Työmme Toiminnassa',
      description: 'Selaa galleriaamme nähdäksesi laadun ja käsityötaidon, joka menee jokaiseen tarjoamaamme palveluun.',
    },
    contact: {
      title: 'Ota Yhteyttä',
      subtitle: 'Haluamme kuulla sinusta',
      getInTouch: 'Ota Yhteyttä',
      visitShop: 'Vieraile Liikkeessämme',
      description: 'Onko sinulla kysymyksiä? Olemme täällä auttamassa. Tule käymään aukioloaikojen aikana tai ota yhteyttä alla olevien kanavien kautta.',
      location: 'Sijainti',
      viewOnMap: 'Näytä Kartalla',
      businessHours: 'Aukioloajat',
      monday: 'Maanantai',
      tuesday: 'Tiistai',
      wednesday: 'Keskiviikko',
      thursday: 'Torstai',
      friday: 'Perjantai',
      saturday: 'Lauantai',
      sunday: 'Sunnuntai',
      closed: 'Suljettu',
      sendMessage: 'Lähetä Viesti',
      formDescription: 'Täytä alla oleva lomake ja palaamme asiaan.',
      fullName: 'Koko Nimi',
      phoneNumber: 'Puhelinnumero',
      serviceInterest: 'Palvelukiinnostus',
      selectService: 'Valitse palvelu',
      message: 'Viesti',
      messagePlaceholder: 'Erityistoiveita tai kysymyksiä?',
      yourName: 'Nimesi',
      yourPhone: 'Puhelinnumerosi',
      sendButton: 'Lähetä Viesti',
      sending: 'Lähetetään...',
      successTitle: 'Pyyntö lähetetty onnistuneesti!',
      successDesc: 'Palaamme asiaan pian. Jos tarvitset välitöntä palvelua, soita meille.',
    },
    footer: {
      tagline: 'Perinteinen käsityötaito kohtaa modernin tyylin',
      quickLinks: 'Pikalinkit',
      followUs: 'Seuraa Meitä',
      rights: 'Kaikki oikeudet pidätetään',
    },
    serviceNames: {
      'Premium Haircut': 'Premium Hiustenleikkuu',
      'Classic Haircut': 'Klassinen Hiustenleikkuu',
      'Salon Haircut': 'Salonki Hiustenleikkuu',
      'Single Color': 'Yksivärinen Värjäys',
      'Special Occasion Styling': 'Juhlatyyli',
      'Blow Dry Styling': 'Föönaus',
    },
  },
};

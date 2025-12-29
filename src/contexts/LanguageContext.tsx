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
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'fi') ? saved : 'fi';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
      subtitle: 'We have been offering high-quality results, personalized service, and a sense of community since 2012.',
      viewServices: 'View Services',
      contactUs: 'Contact Us',
    },
    home: {
      welcome: 'Welcome',
      fullServiceTitle: 'Full Service',
      barberShop: 'Barber & Salon',
      intro: 'Hair Club is a barber shop and salon specializing in quality haircuts, styling, coloring, pleasant customer service, and accessibility. We have been operating in Oulu since 2012, and you can always visit us without an appointment.',
      learnStory: 'More about us',
      ourExpertise: 'What we offer',
      services: 'Services',
      viewAllServices: 'View All Services',
      ourWork: 'Our work',
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
      subtitle: 'Professional barber and salon services tailored to your style',
      whatWeOffer: 'What We Offer',
      completeGrooming: 'Complete Barber & Salon Services',
      description: 'From classic cuts to modern styling and coloring, we offer a comprehensive range of professional barber and salon services. Browse our services by category below.',
      readyDesc: 'Walk in anytime during our business hours and let us take care of you.',
    },
    about: {
      title: 'About Us',
      subtitle: 'Professional barber and salon services',
      ourStory: 'Our Story',
      since2012: 'Since 2012',
      storyTitle: 'The Hair Club Story',
      storyText1: 'Hair Club is a barbershop and salon specializing in quality haircuts, pleasant customer service, and accessibility. We have been operating in Oulu since 2012, and you can always visit us without an appointment. We offer versatile barber and salon services, and our customers particularly value our genuine presence, professionalism, experience, and comprehensive services.',
      storyText2: 'Our story began when Kasim Cevirel came to Finland as a young man and decided to establish his first business with ten years of experience as a barber and hairdresser. Customers who still visit us today encouraged and helped in growing the business. We provide services in Finnish and English. Hair Club has continuously renewed and developed, and today Hair Club offers versatile barber and salon services from multiple professionals.',
      storyText3: 'At no point have we compromised on service quality, friendly customer service, or a relaxed, homely atmosphere. You are also welcome to visit us with your whole family! Explore our services and come experience Hair Club\'s unique service experience.',
      whatDrivesUs: 'What Drives Us',
      ourValues: 'Our Values',
      excellence: 'Excellence',
      excellenceDesc: 'We pursue perfection in every cut, every style, and every interaction with our clients.',
      community: 'Community',
      communityDesc: 'More than just a salon — a gathering place where everyone feels welcome and valued.',
      passion: 'Passion',
      passionDesc: 'We work with love, we are constantly training and we offer solutions to our customers individual needs. We do all kinds of hair styles and repairs.',
      meetTheExpert: 'Meet the Expert',
      ourTeam: 'Our Team',
      ownerRole: 'Founder & Master Stylist',
      ownerBio: 'Kasim Cevirel came to Finland as a young man with ten years of experience in hair styling and established Hair Club in 2012. His dedication to quality service, professionalism, and creating a welcoming atmosphere has made Hair Club Finland a trusted destination for comprehensive barber and salon services.',
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Our work speaks for itself',
      featuredWork: 'Featured Work',
      ourShowcase: 'Our Showcase',
      followJourney: 'Follow Us',
      followDescription: 'See more of our work, behind-the-scenes moments, and style inspiration on Instagram.',
      previousSlide: 'Previous slide',
      nextSlide: 'Next slide',
      pauseSlideshow: 'Pause slideshow',
      playSlideshow: 'Play slideshow',
      closeLightbox: 'Close lightbox',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      goToSlide: 'Go to slide',
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
      tagline: 'Quality haircuts, pleasant customer service, and accessibility. Walk-ins welcome since 2012 in the heart of Oulu.',
      navigation: 'Navigation',
      contact: 'Contact',
      hours: 'Hours',
      monFri: 'Mon – Fri',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      holidayClosure: 'Closed: Jan 1, 2026',
      walkIns: 'Walk-ins Welcome',
      rights: 'All rights reserved',
      crafted: 'Made with love by',
      craftedBy: 'GergsAi',
      open: 'Open Now',
      openingSoon: 'Opening Soon',
      closingSoon: 'Closing Soon',
      closedNow: 'Closed',
    },
    serviceNames: {
      'Premium Haircut': 'Premium haircut',
      'Classic Haircut': 'Classic haircut',
      'Salon Haircut': 'Salon haircut for women',
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
      subtitle: 'Tarjoamme korkeaalaatuisia tuloksia, yksilöllistä palvelua ja yhteisöllistä tuntua jo vuodesta 2012.',
      viewServices: 'Katso Palvelut',
      contactUs: 'Ota Yhteyttä',
    },
    home: {
      welcome: 'Tervetuloa',
      fullServiceTitle: 'Täyden palvelun',
      barberShop: 'parturi-kampaamo',
      intro: 'Hair Club on hiusten leikkauksen laatuun,miellyttävään asiakaspalveluun ja saavutettavuuteen erikoistuva parturi-kampaamo. Olemme toimineet Oulussa vuodesta 2012 ja meille pääset aina myös ilman ajanvarausta.',
      learnStory: 'Lisää meistä',
      ourExpertise: 'Tarjoamamme',
      services: 'Palvelut',
      viewAllServices: 'Näytä Kaikki Palvelut',
      ourWork: 'Tulokset',
      gallery: 'Galleria',
      viewFullGallery: 'Näytä Koko Galleria',
      findUs: 'Löydä Meidät',
      locationHours: 'Sijainti & Aukioloajat',
      address: 'Osoite',
      businessHours: 'Aukioloajat',
      mondayFriday: 'Maanantai – Perjantai',
      saturdaySunday: 'Lauantai – Sunnuntai',
      closed: 'Suljettu',
      walkIns: 'Ilman Ajanvarausta Tervetulleita',
      walkInsDesc: 'Tule käymään aukioloaikojen aikana.',
    },
    services: {
      title: 'Palvelumme',
      subtitle: 'Ammattimaiset parturi- ja kampaamopalvelut tyyliisi räätälöitynä',
      whatWeOffer: 'Tarjoamme',
      completeGrooming: 'Parturi- & kampaamopalvelut',
      description: 'Klassisista leikkauksista moderneihin tyyleihin ja värjäyksiin tarjoamme kattavan valikoiman ammattimaisia parturi- ja kampaamopalveluita. Selaa palveluitamme alta.',
      readyDesc: 'Tule käymään aukioloaikojen aikana ja anna asiantuntijoidemme huolehtia sinusta.',
    },
    about: {
      title: 'Meistä',
      subtitle: 'Ammattimaiset parturi- ja kampaamopalvelut',
      ourStory: 'Tarinamme',
      since2012: 'Vuodesta 2012',
      storyTitle: 'Hair Clubin Tarina',
      storyText1: 'Hair Club on hiusten leikkauksen laatuun, miellyttävään asiakaspalveluun ja saavutettavuuteen erikoistuva parturi-kampaamo. Olemme toimineet Oulussa vuodesta 2012 ja meille pääset aina myös ilman ajanvarausta. Tarjoamme monipuolisia parturi- ja kampaamopalveluita, ja asiakkaamme arvostavat meissä erityisesti aitoa läsnäoloa, ammattitaitoa, kokemusta ja kattavia palveluita.',
      storyText2: 'Tarinamme alkoi, kun Kasim Cevirel tuli Suomeen nuorena miehenä ja päätti kymmenen vuoden parturikampaajan kokemuksellaan perustaa ensimmäisen yrityksensä. Asiakkaat, jotka vielä tänäkin päivänä käyvät meillä, kannustivat ja olivat apuna yrityksen kasvattamisessa. Meiltä saa palveluita suomen- ja englanninkielellä. Hair Club on uudistunut ja kehittynyt jatkuvasti ja nykypäivänä Hair Club tarjoaa monipuolisia parturi-kampaamo palveluita useamman ammattilaisen toimesta.',
      storyText3: 'Missään vaiheessa emme ole tinkineet palvelun laadusta, ystävällisestä asiakaspalvelusta tai rennosta kodinomaisesta tunnelmasta. Meille olet tervetulloa myös koko perheellä! Tutustu palveluihimme ja tule kokeilemaan Hair Clubin ainutlaatuinen palvelukokemusta.',
      whatDrivesUs: 'Mikä Meitä Ajaa',
      ourValues: 'Arvomme',
      excellence: 'Korkea laatu',
      excellenceDesc: 'Tavoittelemme täydellisyyttä jokaisen palvelukokemuksen ja asiakkaan kohtaamisen kohdalla.',
      community: 'Yhteisö',
      communityDesc: 'Enemmän kuin pelkkä parturi-kampaamo — kokoontumispaikka, jossa jokainen tuntee itsensä tervetulleeksi ja arvostetuksi.',
      passion: 'Intohimo',
      passionDesc: 'Teemme työtä rakkaudella, kouluttaudumme jatkuvasti ja tarjoamme ratkaisuja asiakkaiden yksilöllisiin tarpeisiin. Teemme kaikenlaisia hiustyylejä sekä korjaustöitä.',
      meetTheExpert: 'Tapaa Asiantuntija',
      ourTeam: 'Tiimimme',
      ownerRole: 'Perustaja & Mestariparturi-Kampaaja',
      ownerBio: 'Kasim Cevirel tuli Suomeen nuorena miehenä kymmenen vuoden hiusalan kokemuksella ja perusti Hair Clubin vuonna 2012. Hänen omistautumisensa laadukkaaseen palveluun, ammattitaitoon ja viihtyisän tunnelman luomiseen on tehnyt Hair Club Finlandista luotetun kohteen kattaville parturi- ja kampaamopalveluille.',
    },
    gallery: {
      title: 'Galleria',
      subtitle: 'Työmme puhuu puolestaan',
      featuredWork: 'Esittelyssä',
      ourShowcase: 'Näyttelyemme',
      followJourney: 'Seuraa meitä',
      followDescription: 'Katso lisää työtämme, kulissien takaisia hetkiä ja tyyli-inspiraatiota Instagramissa.',
      previousSlide: 'Edellinen dia',
      nextSlide: 'Seuraava dia',
      pauseSlideshow: 'Keskeytä diaesitys',
      playSlideshow: 'Toista diaesitys',
      closeLightbox: 'Sulje valokuva',
      previousImage: 'Edellinen kuva',
      nextImage: 'Seuraava kuva',
      goToSlide: 'Siirry diaan',
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
      tagline: 'Laadukkaat hiustenleikkaukset, miellyttävä asiakaspalvelu ja saavutettavuus. Ilman ajanvarausta tervetulleita vuodesta 2012 Oulun sydämessä.',
      navigation: 'Navigointi',
      contact: 'Yhteystiedot',
      hours: 'Aukioloajat',
      monFri: 'Ma – Pe',
      saturday: 'Lauantai',
      sunday: 'Sunnuntai',
      closed: 'Suljettu',
      holidayClosure: 'Suljettu:1.1.2026',
      walkIns: 'Tervetuloa Ilman Ajanvarausta',
      rights: 'Kaikki oikeudet pidätetään',
      crafted: 'Tehty rakkaudella',
      craftedBy: 'GergsAi',
      open: 'Avoinna Nyt',
      openingSoon: 'Aukeaa Pian',
      closingSoon: 'Sulkeutuu Pian',
      closedNow: 'Suljettu',
    },
    serviceNames: {
      'Premium Haircut': 'Premium Hiustenleikkuu',
      'Classic Haircut': 'Klassinen Hiustenleikkuu',
      'Salon Haircut': 'Parturi-kampaamo Naisten Hiustenleikkuu',
      'Single Color': 'Yksivärinen Värjäys',
      'Special Occasion Styling': 'Juhlatyyli',
      'Blow Dry Styling': 'Föönaus',
    },
  },
};

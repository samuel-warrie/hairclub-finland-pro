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
  const [language, setLanguage] = useState<Language>('fi');

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
      subtitle: 'Quality haircuts, pleasant service, and accessibility since 2012',
      viewServices: 'View Services',
      contactUs: 'Contact Us',
    },
    home: {
      welcome: 'Welcome',
      fullServiceTitle: 'Full Service',
      barberShop: 'Barber Shop',
      intro: 'Hair Club is a barbershop and salon specializing in quality haircuts, pleasant customer service, and accessibility. We have been operating in Oulu since 2012, and you can always visit us without an appointment.',
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
      storyText1: 'Hair Club is a barbershop and salon specializing in quality haircuts, pleasant customer service, and accessibility. We have been operating in Oulu since 2012, and you can always visit us without an appointment. We offer versatile barber and salon services, and our customers particularly value our genuine presence, professionalism, experience, and comprehensive services.',
      storyText2: 'Our story began when Kasim Cevirel came to Finland as a young man and decided to establish his first business with ten years of barber experience. Customers who still visit us today encouraged and helped in growing the business. We provide services in Finnish and English. Hair Club has continuously renewed and developed, and today Hair Club offers versatile barber and salon services from multiple professionals.',
      storyText3: 'At no point have we compromised on service quality, friendly customer service, or a relaxed, homely atmosphere. You are also welcome to visit us with your whole family! Explore our services and come experience Hair Club\'s unique service experience.',
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
      ownerBio: 'Kasim Cevirel came to Finland as a young man with ten years of barber experience and established Hair Club in 2012. His dedication to quality service, professionalism, and creating a welcoming atmosphere has made Hair Club Finland a trusted destination for comprehensive grooming services.',
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
      holidayClosure: 'Holiday Closure: Dec 24 – Jan 1',
      walkIns: 'Walk-ins Welcome',
      rights: 'All rights reserved',
      crafted: 'Crafted with care in Oulu',
      open: 'Open Now',
      closingSoon: 'Closing Soon',
      closedNow: 'Closed',
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
      subtitle: 'Laadukkaat hiustenleikkaukset, miellyttävä palvelu ja saavutettavuus vuodesta 2012',
      viewServices: 'Katso Palvelut',
      contactUs: 'Ota Yhteyttä',
    },
    home: {
      welcome: 'Tervetuloa',
      fullServiceTitle: 'Täyden Palvelun',
      barberShop: 'Parturi-Kampaamo',
      intro: 'Hair Club on hiusten leikkauksen laatuun, miellyttävään asiakaspalveluun ja saavutettavuuteen erikoistuva parturi-kampaamo. Olemme toimineet Oulussa vuodesta 2012 ja meille pääset aina myös ilman ajanvarausta.',
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
      walkIns: 'Ilman Ajanvarausta Tervetulleita',
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
      storyText1: 'Hair Club on hiusten leikkauksen laatuun, miellyttävään asiakaspalveluun ja saavutettavuuteen erikoistuva parturi-kampaamo. Olemme toimineet Oulussa vuodesta 2012 ja meille pääset aina myös ilman ajanvarausta. Tarjoamme monipuolisia parturi- ja kampaamopalveluita, ja asiakkaamme arvostavat meissä erityisesti aitoa läsnäoloa, ammattitaitoa, kokemusta ja kattavia palveluita.',
      storyText2: 'Tarinamme alkoi, kun Kasim Cevirel tuli Suomeen nuorena miehenä ja päätti kymmenen vuoden parturikampaajan kokemuksellaan perustaa ensimmäisen yrityksensä. Asiakkaat, jotka vielä tänäkin päivänä käyvät meillä, kannustivat ja olivat apuna yrityksen kasvattamisessa. Meiltä saa palveluita suomen- ja englanninkielellä. Hair Club on uudistunut ja kehittynyt jatkuvasti ja nykypäivänä Hair Club tarjoaa monipuolisia parturi-kampaamo palveluita useamman ammattilaisen toimesta.',
      storyText3: 'Missään vaiheessa emme ole tinkineet palvelun laadusta, ystävällisestä asiakaspalvelusta tai rennosta kodinomaisesta tunnelmasta. Meille olet tervetulloa myös koko perheellä! Tutustu palveluihimme ja tule kokeilemaan Hair Clubin ainutlaatuinen palvelukokemusta.',
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
      ownerBio: 'Kasim Cevirel tuli Suomeen nuorena miehenä kymmenen vuoden parturikokemuksella ja perusti Hair Clubin vuonna 2012. Hänen omistautumisensa laadukkaaseen palveluun, ammattitaitoon ja viihtyisän tunnelman luomiseen on tehnyt Hair Club Finlandista luotetun kohteen kattaville hoitopalveluille.',
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
      holidayClosure: 'Loma-ajan Sulkeminen: 24.12 – 1.1',
      walkIns: 'Tervetuloa Ilman Ajanvarausta',
      rights: 'Kaikki oikeudet pidätetään',
      crafted: 'Valmistettu huolella Oulussa',
      open: 'Avoinna Nyt',
      closingSoon: 'Sulkeutuu Pian',
      closedNow: 'Suljettu',
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

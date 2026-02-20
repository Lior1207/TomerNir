export type Locale = 'he' | 'en';

export interface Testimonial {
  name: string;
  text: string;
}

export interface Translations {
  // Nav
  navAbout: string;
  navLearn: string;
  navVideo: string;
  navTestimonials: string;
  navPricing: string;
  navContact: string;
  langToggle: string;

  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  heroCta: string;

  // About
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;

  // What you'll learn
  learnTitle: string;
  learnTechniqueTitle: string;
  learnTechniqueDesc: string;
  learnMaqamTitle: string;
  learnMaqamDesc: string;
  learnImprovTitle: string;
  learnImprovDesc: string;
  learnComposeTitle: string;
  learnComposeDesc: string;

  // Video / MUZAIKA
  videoTitle: string;
  videoSubtitle: string;
  videoFollowCta: string;
  muzaikaTitle: string;
  muzaikaDesc: string;
  muzaikaCta: string;
  muzaikaYoutubeCta: string;
  muzaikaMembers: string;

  // Testimonials
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: Testimonial[];

  // Pricing
  pricingTitle: string;
  pricingSubtitle: string;
  pricingAtTeacher: string;
  pricingAtTeacherLocation: string;
  pricingAtStudent: string;
  pricingAtStudentLocation: string;
  pricingPerHour: string;
  pricingCta: string;
  pricingLocationsTitle: string;

  // Contact
  contactTitle: string;
  contactSubtitle: string;
  contactWhatsapp: string;
  contactCall: string;
  contactInstagram: string;

  // Footer
  footerRights: string;
  footerBuiltWith: string;
}

const he: Translations = {
  // Nav
  navAbout: 'קצת עליי',
  navLearn: 'מה נלמד',
  navVideo: 'הופעות',
  navTestimonials: 'המלצות',
  navPricing: 'מחירים',
  navContact: 'צור קשר',
  langToggle: 'EN',

  // Hero
  heroTitle: 'תומר ניר',
  heroSubtitle: 'נגן ומורה לעוּד',
  heroTagline: 'בואו להכיר ולהעמיק את ההיכרות עם הכלי של המזרח — בדגש על הסגנונות הערבי והטורקי',
  heroCta: 'לשיעור ניסיון',

  // About
  aboutTitle: 'קצת עליי',
  aboutP1: 'אהלן! שמי תומר, אני מוזיקאי, נגן עוד ומלחין. מעבר להיותי מוזיקאי, עבדתי מספר שנים בתחום החינוך, ולכן הכי חשוב לי כמורה למצוא יחד עם התלמיד/ה את הדרך האישית שהכי טובה לו — ולהתאים את הלימוד לצרכים האישיים של כל תלמיד/ה.',
  aboutP2: 'הלימוד מבוסס על שילוב חשוב של הנאה, עניין, ורצון להתקדם כמוזיקאי ונגן עוד. אני מאמין שהמוזיקה היא דרך נפלאה לביטוי אישי ולחיבור עמוק לתרבות המזרחית העשירה.',

  // What you'll learn
  learnTitle: 'מה נלמד?',
  learnTechniqueTitle: 'טכניקה',
  learnTechniqueDesc: 'מטכניקות בסיסיות ועד מתקדמות — איך להפיק צליל יפה ולנגן בביטחון',
  learnMaqamTitle: 'מקאם',
  learnMaqamDesc: 'התיאוריה המוזיקלית המרכזית במוזיקה הערבית והטורקית — עולם שלם של סולמות וצלילים',
  learnImprovTitle: 'אלתור (תקסים)',
  learnImprovDesc: 'ללמוד להתבטא באופן חופשי דרך הכלי — אמנות האלתור המזרחי',
  learnComposeTitle: 'הלחנה',
  learnComposeDesc: 'ליצור מוזיקה משלכם — מהרעיון הראשון ועד ליצירה מושלמת',

  // Video / MUZAIKA
  videoTitle: 'הופעות ונגינה',
  videoSubtitle: 'אני חלק מהרכב מוזאיקה — הרכב ירושלמי היוצר מוסיקה אתנית אינסטרומנטלית מקורית',
  videoFollowCta: 'עקבו באינסטגרם',
  muzaikaTitle: 'הרכב מוזאיקה',
  muzaikaDesc: 'פסיפס של תרבויות — אנחנו הרכב ירושלמי שיוצר מוסיקה אתנית אינסטרומנטלית מקורית בהשפעות שורשיות של מוסיקה ים תיכונית. החזון שלנו הוא ליצור מוזיקה שמחברת בין תרבויות מוסיקליות מהמזרח התיכון.',
  muzaikaCta: 'לאתר מוזאיקה',
  muzaikaYoutubeCta: 'לערוץ היוטיוב',
  muzaikaMembers: 'תומר ניר — עוד • גלי וולפשטיין — גיטרה, קאנון, סאז • מקסים גינזבורג — כינור ברך • עידו איל — כלי הקשה',

  // Testimonials
  testimonialsTitle: 'מה התלמידים אומרים',
  testimonialsSubtitle: 'דירוג 10/10 • 9 חוות דעת',
  testimonials: [
    {
      name: 'נתן',
      text: 'תומר הוא המורה הכי טוב שיש, מעביר את השיעור בנעימות תוך כדי שימת לב מקצועית ושימת לב אל התלמיד. אני מרגיש שהוא מרגיש אותי, שם לב לכל פרט בהתקדמות שלי. מורה מקצוען נעים סבלני ואיכפתי — בקיצור מורה תותח על חלל!'
    },
    {
      name: 'Rachel',
      text: 'תומר מורה נהדר! נותן תחושה נעימה ונוטע מוטיבציה להמשיך וללמוד. מחזק על כל התקדמות, נגיש וזמין גם מעבר לשיעורים. אני מרגישה ברת מזל שזה המורה שזכיתי לפגוש כמורה ראשון על עוּד. ממליצה בחום!'
    },
    {
      name: 'דניאל',
      text: 'תומר הוא מורה נפלא — מבחינת ההבנה העמוקה של העוּד ושל מוזיקה מן המזרח, מבחינת הכישרון שלו כנגן, ובטח מבחינת דרך ההוראה והחוויה אצלו. אני לומד עם תומר כבר שנה ורואה מלא התקדמות בזכותו. ממליץ בחום!'
    },
    {
      name: 'רואי',
      text: 'תומר מורה מעולה מלא סבלנות, ויודע להתאים את השיעור לרצונות של התלמיד. ממליץ ממש!'
    },
    {
      name: 'נעם',
      text: 'מורה מעולה ממש, מקצועי ועם מלא סבלנות.'
    },
    {
      name: 'אלעד',
      text: 'תומר פשוט מקסים, מגיע עם גישה סבלנית מאוד ויסודית מאוד. נגן בחסד עליון ואדם מקסים — אני מרגיש שזכיתי במורה מדהים.'
    },
    {
      name: 'כפיר',
      text: 'תומר מורה מדהים, הגעתי לתומר בלי רקע קודם בכלל בתחום הנגינה ומשיעור לשיעור הרגשתי איך אני נכנס לעולם ומקבל כלים פרקטיים. ממליץ בחום!'
    },
    {
      name: 'Itay',
      text: 'תומר מורה מעולה, השיעורים איתו מעניינים ומעשירים והוא יודע ממש להתאים את הלימוד אל התלמיד ואל הצרכים והרצונות שלו. אפשר ממש לראות בשיעורים שהוא חי את המוזיקה ומאוד מחובר אליה, מומלץ מאוד!'
    },
    {
      name: 'שיר',
      text: 'אני לומדת אצל תומר לנגן על עוּד כבר במשך חודש+. השיעורים מעניינים ומחכימים ונוגעים בכמה תחומים במקביל — גם ברקע הסטורי, בקריאת תווים, למידת טכניקות והסבר על הכלי עצמו. תומר מורה נפלא בעל ידע רחב. ממליצה בחום!'
    }
  ],

  // Pricing
  pricingTitle: 'מחירים ומיקומים',
  pricingSubtitle: 'שיעורים פרטיים — אחד על אחד',
  pricingAtTeacher: 'בבית המורה',
  pricingAtTeacherLocation: 'עין כרם, ירושלים',
  pricingAtStudent: 'בבית התלמיד/ה',
  pricingAtStudentLocation: 'ירושלים והסביבה / תל אביב',
  pricingPerHour: '₪ לשעה',
  pricingCta: 'לקביעת שיעור',
  pricingLocationsTitle: 'אזורי הוראה',

  // Contact
  contactTitle: 'בואו נתחיל',
  contactSubtitle: 'השאירו פרטים או שלחו הודעה ואחזור אליכם בהקדם',
  contactWhatsapp: 'שלחו הודעה בוואטסאפ',
  contactCall: 'התקשרו עכשיו',
  contactInstagram: 'עקבו באינסטגרם',

  // Footer
  footerRights: 'כל הזכויות שמורות',
  footerBuiltWith: 'תומר ניר — נגן ומורה לעוּד',
};

const en: Translations = {
  // Nav
  navAbout: 'About',
  navLearn: 'Curriculum',
  navVideo: 'Performances',
  navTestimonials: 'Reviews',
  navPricing: 'Pricing',
  navContact: 'Contact',
  langToggle: 'עב',

  // Hero
  heroTitle: 'Tomer Nir',
  heroSubtitle: 'Oud Player & Teacher',
  heroTagline: 'Discover and deepen your connection with the instrument of the East — focusing on Arabic and Turkish styles',
  heroCta: 'Book a Trial Lesson',

  // About
  aboutTitle: 'About Me',
  aboutP1: 'Hi! I\'m Tomer, a musician, oud player, and composer. Beyond being a musician, I\'ve spent several years in education, which is why finding each student\'s personal path is my top priority as a teacher — tailoring lessons to every student\'s individual needs.',
  aboutP2: 'My teaching is built on a balance of enjoyment, curiosity, and the drive to grow as a musician and oud player. I believe music is a wonderful path for personal expression and a deep connection to the rich culture of the East.',

  // What you'll learn
  learnTitle: 'What You\'ll Learn',
  learnTechniqueTitle: 'Technique',
  learnTechniqueDesc: 'From basic to advanced — how to produce a beautiful sound and play with confidence',
  learnMaqamTitle: 'Maqam',
  learnMaqamDesc: 'The core musical theory of Arabic and Turkish music — a whole world of scales and tones',
  learnImprovTitle: 'Improvisation (Taqsim)',
  learnImprovDesc: 'Learn to express yourself freely through the instrument — the art of Eastern improvisation',
  learnComposeTitle: 'Composition',
  learnComposeDesc: 'Create your own music — from the first idea to a polished piece',

  // Video / MUZAIKA
  videoTitle: 'Performances & Music',
  videoSubtitle: 'I\'m part of MUZAIKA — a Jerusalem ensemble creating original ethnic instrumental music',
  videoFollowCta: 'Follow on Instagram',
  muzaikaTitle: 'MUZAIKA Ensemble',
  muzaikaDesc: 'A mosaic of cultures — we are a Jerusalem-based ensemble creating original ethnic instrumental music with Mediterranean roots. Our vision is to create music that connects musical cultures from the Middle East.',
  muzaikaCta: 'MUZAIKA Website',
  muzaikaYoutubeCta: 'YouTube Channel',
  muzaikaMembers: 'Tomer Nir — Oud • Gali Wolfstein — Guitar, Kanun, Saz • Maxim Ginzburg — Knee Violin • Ido Eyal — Percussion',

  // Testimonials
  testimonialsTitle: 'What Students Say',
  testimonialsSubtitle: 'Rating 10/10 • 9 Reviews',
  testimonials: [
    {
      name: 'Nathan',
      text: 'Tomer is the best teacher — he creates a pleasant atmosphere while paying professional attention to every detail of my progress. A talented, patient, and caring teacher!'
    },
    {
      name: 'Rachel',
      text: 'Tomer is a wonderful teacher! He creates a pleasant feeling and instills motivation to continue learning. Available even beyond lessons. I feel lucky to have found him as my first oud teacher. Highly recommended!'
    },
    {
      name: 'Daniel',
      text: 'Tomer is a wonderful teacher — in terms of his deep understanding of the oud and Eastern music, his talent as a player, and especially his teaching method. I\'ve been learning with Tomer for a year and see tremendous progress. Highly recommended!'
    },
    {
      name: 'Roi',
      text: 'Tomer is an excellent teacher, full of patience, and knows how to tailor each lesson to the student\'s wishes. Truly recommended!'
    },
    {
      name: 'Noam',
      text: 'An excellent teacher, professional and extremely patient.'
    },
    {
      name: 'Elad',
      text: 'Tomer is simply charming, with a very patient and thorough approach. A divinely gifted player — I feel lucky to have found such an amazing teacher.'
    },
    {
      name: 'Kfir',
      text: 'Tomer is an amazing teacher. I came with no prior background in music, and lesson by lesson I felt myself entering a new world and gaining practical skills. Highly recommended!'
    },
    {
      name: 'Itay',
      text: 'Tomer is an excellent teacher. His lessons are interesting and enriching, and he knows exactly how to adapt to each student\'s needs. You can really see in his lessons that he lives and breathes the music. Highly recommended!'
    },
    {
      name: 'Shir',
      text: 'I\'ve been learning oud with Tomer for over a month. The lessons are interesting and enlightening, touching on history, notation, technique, and the instrument itself. Tomer is a wonderful teacher with vast knowledge. Highly recommended!'
    }
  ],

  // Pricing
  pricingTitle: 'Pricing & Locations',
  pricingSubtitle: 'Private one-on-one lessons',
  pricingAtTeacher: 'At Teacher\'s Home',
  pricingAtTeacherLocation: 'Ein Kerem, Jerusalem',
  pricingAtStudent: 'At Student\'s Home',
  pricingAtStudentLocation: 'Jerusalem area / Tel Aviv',
  pricingPerHour: '₪ / hour',
  pricingCta: 'Book a Lesson',
  pricingLocationsTitle: 'Teaching Areas',

  // Contact
  contactTitle: 'Let\'s Get Started',
  contactSubtitle: 'Reach out and I\'ll get back to you as soon as possible',
  contactWhatsapp: 'Message on WhatsApp',
  contactCall: 'Call Now',
  contactInstagram: 'Follow on Instagram',

  // Footer
  footerRights: 'All rights reserved',
  footerBuiltWith: 'Tomer Nir — Oud Player & Teacher',
};

export const translations: Record<Locale, Translations> = { he, en };

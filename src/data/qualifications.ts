export type Qualification = {
  year: string;
  title: { en: string; ar: string };
  org: { en: string; ar: string };
};

export const QUALIFICATIONS: Qualification[] = [
  {
    year: "2008",
    title: {
      en: "Bachelor of English Language and Literature",
      ar: "إجازة في اللغة الإنجليزية وآدابها",
    },
    org: {
      en: "University of Arts and Human Sciences, Sfax",
      ar: "كلية الآداب والعلوم الإنسانية بصفاقس",
    },
  },
  {
    year: "2008",
    title: { en: "English teacher", ar: "أستاذ إنجليزية" },
    org: { en: "Amra High School, Sfax", ar: "معهد عمرة، صفاقس" },
  },
  {
    year: "2014",
    title: {
      en: "Fulbright Foreign Language Teaching Assistant",
      ar: "زمالة فولبرايت — مساعد تدريس اللغات الأجنبية",
    },
    org: {
      en: "University of California, Santa Barbara",
      ar: "جامعة كاليفورنيا سانتا باربرا",
    },
  },
  {
    year: "2017",
    title: { en: "Certified Teacher Trainer", ar: "مُدرّس معتمد" },
    org: { en: "Arizona State University", ar: "جامعة ولاية أريزونا" },
  },
];

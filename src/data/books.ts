export type Book = {
  slug: string;
  title: { en: string; ar: string };
  shortDescription: { en: string; ar: string };
  longDescription: { en: string; ar: string };
  grade: 1 | 6 | 9;
  priceTND: number;
  rating: number;
  ratingCount: number;
  image: string;
  contents: { en: string[]; ar: string[] };
};

export const BOOKS: Book[] = [
  {
    slug: "1st-year-workbook",
    title: { en: "1st Year — Extracurricular Workbook", ar: "كرّاسة السنة الأولى — أنشطة خارج المنهج" },
    shortDescription: {
      en: "Hand-crafted practice book for 1st year primary, aligned with the Tunisian curriculum.",
      ar: "كرّاسة تطبيقية للسنة الأولى ابتدائي، متماشية مع البرنامج التونسي.",
    },
    longDescription: {
      en: "Designed by Riadh for first-year primary students. Builds vocabulary, basic phonics, and writing through illustrated drills and short games.",
      ar: "من إعداد رياض لتلاميذ السنة الأولى ابتدائي. يطوّر المفردات، أساسيات النطق، والكتابة من خلال تمارين مصوّرة وألعاب قصيرة.",
    },
    grade: 1,
    priceTND: 39,
    rating: 5.0,
    ratingCount: 2,
    image: "/images/book-1st-year.png",
    contents: {
      en: [
        "Alphabet & phonics — 12 lessons",
        "First words: family, school, colours",
        "Tracing & handwriting drills",
        "End-of-unit games & assessments",
      ],
      ar: [
        "الحروف والنطق — 12 درسًا",
        "أوّل الكلمات: العائلة، المدرسة، الألوان",
        "تمارين الكتابة والخط",
        "ألعاب وتقييمات نهاية الوحدة",
      ],
    },
  },
  {
    slug: "6th-year-workbook",
    title: { en: "6th Year — Extracurricular Workbook", ar: "كرّاسة السنة السادسة — أنشطة خارج المنهج" },
    shortDescription: {
      en: "Reinforce 6th year curriculum: grammar tightening, reading comprehension, and structured writing.",
      ar: "دعم منهج السنة السادسة: ترسيخ القواعد، الفهم القرائي، والكتابة المهيكلة.",
    },
    longDescription: {
      en: "Aimed at 6th year primary. Sharpens grammar accuracy, expands reading comprehension, and introduces structured paragraph writing.",
      ar: "موجّه للسنة السادسة ابتدائي. يصقل دقّة القواعد، يوسّع الفهم القرائي، ويُقدّم الكتابة المهيكلة للفقرات.",
    },
    grade: 6,
    priceTND: 39,
    rating: 5.0,
    ratingCount: 2,
    image: "/images/book-6th-year.png",
    contents: {
      en: [
        "Tenses revision in context",
        "Reading comprehension passages",
        "Paragraph writing — structure & connectors",
        "Mock end-of-term tests",
      ],
      ar: [
        "مراجعة الأزمنة في سياق",
        "نصوص للفهم القرائي",
        "كتابة الفقرة — البنية وأدوات الربط",
        "اختبارات نهاية الثلاثي تجريبية",
      ],
    },
  },
  {
    slug: "9th-year-workbook",
    title: { en: "9th Year — Extracurricular Workbook", ar: "كرّاسة السنة التاسعة — أنشطة خارج المنهج" },
    shortDescription: {
      en: "Comprehensive prep for 9th year, focused on the national exam style and essay writing.",
      ar: "تحضير شامل للسنة التاسعة، يركّز على نمط الامتحان الوطني وكتابة المقال.",
    },
    longDescription: {
      en: "For 9th year basic education. Mirrors the national exam style and trains the structured essay required at this level.",
      ar: "للسنة التاسعة أساسي. يحاكي نمط الامتحان الوطني ويُدرّب على المقال المهيكل المطلوب في هذا المستوى.",
    },
    grade: 9,
    priceTND: 39,
    rating: 5.0,
    ratingCount: 2,
    image: "/images/book-9th-year.png",
    contents: {
      en: [
        "National exam paper analysis",
        "Essay writing — five-paragraph model",
        "Reading & listening drills",
        "Three full mock exams with corrections",
      ],
      ar: [
        "تحليل امتحان وطني",
        "كتابة المقال — نموذج الفقرات الخمس",
        "تمارين قراءة واستماع",
        "ثلاثة امتحانات تجريبية كاملة مع التصحيح",
      ],
    },
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return BOOKS.find((b) => b.slug === slug);
}

export type CourseCategory = "conversation" | "writing" | "exams" | "school";

export type Course = {
  slug: string;
  title: { en: string; ar: string };
  shortDescription: { en: string; ar: string };
  longDescription: { en: string; ar: string };
  category: CourseCategory;
  level: "Beginner" | "Intermediate" | "Advanced" | "All levels";
  lessons: number;
  hours: number;
  students: number;
  rating: number;
  ratingCount: number;
  priceTND: number | null;
  oldPriceTND?: number;
  comingSoon?: boolean;
  image: string;
  syllabus: { en: string[]; ar: string[] };
  outcomes: { en: string[]; ar: string[] };
};

export const COURSES: Course[] = [
  {
    slug: "english-for-communication-1",
    title: {
      en: "English for Communication — Part 1",
      ar: "الإنجليزية للتواصل — الجزء الأول",
    },
    shortDescription: {
      en: "Build the conversational foundation: pronunciation, everyday dialogue, and the confidence to speak.",
      ar: "أرسِ أسس التحدث: النطق، حوارات الحياة اليومية، والثقة في الكلام.",
    },
    longDescription: {
      en: "A four-lesson course (20 hours total) covering greetings, daily routines, asking and giving opinions, basic narration, and the most common pronunciation patterns Tunisian learners struggle with. Designed for absolute beginners and learners who feel rusty.",
      ar: "دورة من أربع حصص (20 ساعة) تغطي التحايا، الروتين اليومي، إبداء الرأي وطلبه، السرد البسيط، والأنماط الأكثر صعوبة في النطق لدى التلميذ التونسي. موجّهة للمبتدئين ولمن لم يمارس الإنجليزية منذ مدة.",
    },
    category: "conversation",
    level: "Beginner",
    lessons: 4,
    hours: 20,
    students: 230,
    rating: 4.9,
    ratingCount: 38,
    priceTND: 350,
    oldPriceTND: 500,
    image: "/images/course-english-comm.webp",
    syllabus: {
      en: [
        "Lesson 1 — Sounds, stress, and self-introduction",
        "Lesson 2 — Daily routines, time, and frequency",
        "Lesson 3 — Opinions, agreement, polite disagreement",
        "Lesson 4 — Narrating events: past simple in conversation",
      ],
      ar: [
        "الحصة 1 — الأصوات، النبر، والتعريف بالنفس",
        "الحصة 2 — الروتين اليومي، الوقت، والتكرار",
        "الحصة 3 — الرأي، الاتفاق، والاعتراض المهذب",
        "الحصة 4 — سرد الأحداث: الماضي البسيط في الحوار",
      ],
    },
    outcomes: {
      en: [
        "Hold a 5-minute everyday conversation without freezing",
        "Pronounce the 12 sounds Tunisian learners commonly miss",
        "Ask for clarification and recover gracefully when stuck",
        "Build the habit of thinking in English",
      ],
      ar: [
        "إجراء حوار يومي مدة 5 دقائق دون توقف",
        "نطق 12 صوتًا يخطئ فيها التلميذ التونسي عادةً",
        "طلب التوضيح والتعافي بسلاسة عند التوقف",
        "بناء عادة التفكير بالإنجليزية",
      ],
    },
  },
  {
    slug: "conversational-english-2",
    title: {
      en: "Conversational English — Part 2",
      ar: "الإنجليزية للتواصل — الجزء الثاني",
    },
    shortDescription: {
      en: "Continue from Part 1 — build fluency, debate skills, and natural intonation.",
      ar: "استكمال للجزء الأول — تطوير الطلاقة ومهارات الحوار والتنغيم الطبيعي.",
    },
    longDescription: {
      en: "An advanced conversational course launching soon. Topics will cover debate, storytelling, professional small-talk, and idiomatic English.",
      ar: "دورة متقدّمة في المحادثة، تنطلق قريبًا. تشمل المواضيع: الحوار، السرد، الحديث المهني، والتعابير الإصطلاحية.",
    },
    category: "conversation",
    level: "Intermediate",
    lessons: 0,
    hours: 0,
    students: 0,
    rating: 0,
    ratingCount: 0,
    priceTND: null,
    comingSoon: true,
    image: "/images/course-english-comm.webp",
    syllabus: { en: [], ar: [] },
    outcomes: { en: [], ar: [] },
  },
  {
    slug: "exam-prep-toefl-ielts",
    title: {
      en: "TOEFL & IELTS Preparation",
      ar: "تحضير TOEFL و IELTS",
    },
    shortDescription: {
      en: "Strategy, mock tests, and pacing — tailored to your target score.",
      ar: "استراتيجية، اختبارات تجريبية، وضبط للوقت — حسب الدرجة المستهدفة.",
    },
    longDescription: {
      en: "Targeted exam preparation launching soon. Focuses on the four sections, with weekly mock tests and individual feedback.",
      ar: "تحضير مركّز للامتحانات، ينطلق قريبًا. يركّز على الأقسام الأربعة، مع اختبارات تجريبية أسبوعية وتقييم فردي.",
    },
    category: "exams",
    level: "Advanced",
    lessons: 0,
    hours: 0,
    students: 0,
    rating: 0,
    ratingCount: 0,
    priceTND: null,
    comingSoon: true,
    image: "/images/course-english-comm.webp",
    syllabus: { en: [], ar: [] },
    outcomes: { en: [], ar: [] },
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

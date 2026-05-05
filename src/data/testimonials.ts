export type Testimonial = {
  id: string;
  name: string;
  role: { en: string; ar: string };
  quote: { en: string; ar: string };
  avatar: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Yasmine B.",
    role: { en: "9th year student, Sfax", ar: "تلميذة تاسعة أساسي، صفاقس" },
    quote: {
      en: "I went from being silent in class to leading group discussions in two months. Riadh corrects you firmly but never makes you feel small.",
      ar: "تحوّلت من الصمت في الفصل إلى قيادة النقاشات في شهرين. رياض يصحّح بحزم لكنه لا يُشعرك أبدًا بالنقص.",
    },
    avatar: "/images/avatar-placeholder-1.svg",
    rating: 5,
  },
  {
    id: "2",
    name: "Amine T.",
    role: { en: "Engineer, Tunis", ar: "مهندس، تونس" },
    quote: {
      en: "I needed English for client calls, fast. Three months later I'm running the meetings. Practical, no fluff, real homework.",
      ar: "احتجت الإنجليزية لمكالمات العملاء بسرعة. ثلاثة أشهر بعد، أنا الذي أُدير الاجتماعات. عملي، بلا حشو، وفروض حقيقية.",
    },
    avatar: "/images/avatar-placeholder-2.svg",
    rating: 5,
  },
  {
    id: "3",
    name: "Mariem K.",
    role: { en: "Parent of a 6th year student", ar: "أم تلميذة سنة سادسة" },
    quote: {
      en: "My daughter's marks jumped a full grade band. The workbook is what made the difference — short, clear, and used in our home every day.",
      ar: "ارتفعت معدلات ابنتي بفئة كاملة. الكرّاسة هي ما أحدث الفرق — قصيرة وواضحة، نستعملها في البيت يوميًّا.",
    },
    avatar: "/images/avatar-placeholder-3.svg",
    rating: 5,
  },
];

import { Flag, Headphones, MousePointerClick, Radio } from "lucide-react";

//  מערך הטקסטים
export const heroTexts = [
  `השכרת טלפונים לחו"ל.`,
  "נשארים מחוברים – גם כשמנותקים.",
  "כל היעדים, כל מקום בעולם.",
  "שקט נפשי, אפס דאגות.",
  "הכל כלול – בלי הפתעות.",
  "שירות אישי. באחריות.",
  "לא משנה איפה אתם – אנחנו אתכם.",
  "טסים בביטחון. טסים עם טסים.",
  "חוויה אחרת; שירות, תמיכה, איכות.",
  "מספר ישראלי בכל השכרה.",
  "שירות שמלווה אתכם לאורך הדרך.",
  "יותר מטלפון – שותף למסע.",
];

export const features = [
  {
    icon: <Radio className="w-8 h-8" />,
    title: "קליטה",
    desc: "קליטה מעולה בכל מקום שתהיו",
  },
  {
    icon: <MousePointerClick className="w-8 h-8" />,
    title: "שקט נפשי",
    desc: "הכל כולל הכל, ללא הפתעות",
  },
  {
    icon: <Flag className="w-8 h-8" />,
    title: "מספר ישראלי",
    desc: "מספר ישראלי לכל השכרה",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "תמיכה",
    desc: "תמיכה 24/6, בכל מקום בעולם",
  },
];

export const services = [
  {
    icon: <span className="material-symbols-outlined">deskphone</span>,
    title: "השכרת טלפונים וסימים",
    desc: "כל המדינות, כל היעדים",
    features: [
      "ללא הגבלת דקות שיחה, מקומיות ולישראל",
      "מספר ישראלי בכל השכרה",
      "גלישה ו-SMS כלולים (בהשכרת סים)",
      "מכשירים וויזים כשרים בלבד",
      "מטען מקומי מצורף",
      "עברית מלאה, דור 4",
      "סים לגיבוי",
    ],
    linkTo: "/order-form",
  },
  // {
  //   icon: <span className="material-symbols-outlined">sim_card</span>,
  //   title: "כרטיסי SIM",
  //   desc: "שיחות ללא הגבלה, ללא מכשיר טלפון",
  //   features: [
  //     "ללא הגבלת דקות שיחה",
  //     "סימים גלובליים לכל היעדים",
  //     "מספר ישראלי בכל השכרה",
  //     "SMS ללא הגבלה",
  //     "גלישה כלולה",
  //   ],
  // },
  {
    icon: <span className="material-symbols-outlined">phone_in_talk</span>,
    title: "מספרים ישראליים",
    desc: `עבור תושבי חו"ל`,
    features: [
      "עד 4 שלוחות",
      "שיחות נכנסות ויוצאות ללא הגבלה",
      "זיהוי מתקשרים",
      "כרטיס חיוג לחיוג לישראל",
    ],
    linkTo: "/mng/il-numbers",
  },
];

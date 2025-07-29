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
  "טסים עם ביטחון. טסים עם טסים.",
  "חוויה אחרת – שירות, תמיכה, איכות.",
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

export  const services = [
    {
      icon: <span class="material-symbols-outlined">deskphone</span>,
      title: "השכרת טלפונים",
      desc: "מכשירים חדישים ואמינים",
      features: [
        "מכשירים וויזים כשרים",
        "מטען מקומי כלול",
        "עברית מלאה",
        "דור 4",
        "סים לגיבוי",
      ],
    },
    {
      icon: <span class="material-symbols-outlined">sim_card</span>,
      title: "כרטיסי SIM",
      desc: "שיחות ללא הגבלה",
      features: [
        "ללא הגבלת דקות שיחה",
        "סימים גלובליים לכל היעדים",
        "מספר ישראלי בכל השכרה",
        "SMS ללא הגבלה",
        "גלישה במהירות גבוהה",
      ],
    },
    {
      icon: <span class="material-symbols-outlined">phone_in_talk</span>,
      title: "מספרים ישראליים",
      desc: `עבור תושבי חו"ל`,
      features: [
        "עד 4 שלוחות",
        "שיחות נכנסות ויוצאות ללא הגבלה",
        "זיהוי מתקשרים",
        "כרטיס חיוג לחיוג לישראל",
      ],
    },
  ];
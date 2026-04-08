export interface Therapist {
  name: string;
  title?: string;
  image: string;
  location: string;
  details: string[];
  profileUrl?: string;
  worksWith?: string; // Added this field for the sidebar card
  languages?: string; // Added this field for the sidebar card
  locations?: string[]; // Added this field for the sidebar card
  appointmentStatus?: string | null; // Added this field for the sidebar card, can be null to hide
  faithBased?: string | null; // Added this field for the sidebar card, can be null to hide
  license?: string; // Added this field for the sidebar card
  slug?: string; // <--- Added this new field for dynamic routing
}

export const oregonTherapists: Therapist[] = [
  {
    name: "Miles Cunningham, CSWA (#A16731)",
    image: "https://guillaumecounseling.com/wp-content/uploads/2026/02/Miles-Miles-Cunningham_headshot-1024x740-1.png",
    location: "Portland, Oregon",
    slug: "miles-cunningham", // <--- THIS is what connects the button to his profile page!
    details: [
      "In-person at the SW Portland office only.",
      "African American Male therapist",
      "Individual, family, and couples therapy for all ages.",
      "Telehealth and in-person appointments available during the day, evening, and weekends.",
      "In-person appointments are on Mondays.",
    ],
    profileUrl: "/providers/oregon-therapists",
    worksWith: "Adults, couples, families",
    languages: "English",
    locations: ["Portland, Oregon", "In-person at the SW Portland office only"],
    license: "CSWA (#A16731)",
    appointmentStatus: null,
  },
  {
    name: "Rebecca Artrip, MA, Professional Counselor Associate (R10505)",
    image: "https://guillaumecounseling.com/wp-content/uploads/2025/09/Rebecca-Artrip-MA-920x1024.png",
    location: "Portland, Oregon",
    details: [
      "In-person at the SW Portland office only.",
      "Telehealth and In-person",
      "Christian Counseling or faith-based counseling is available to those who identify as Christians or from a community of faith.",
      "Rebecca has years of professional experience working with minorities and individuals who identify as BIPOC. Her personal lived experience includes understanding the dynamics of interracial relationships.",
      "Rebecca's passion for counseling and mental health is deeply personal.",
    ],
    profileUrl: "/providers/oregon-therapists",
  },
  {
    name: "Vicky Spear, Professional Counselor Associate (R10423)",
    image: "https://guillaumecounseling.com/wp-content/uploads/2026/02/vicky-picture-resized.png",
    location: "Portland, Oregon",
    details: [
      "In-person at the SW Portland office only.",
      "Telehealth and In-person",
      "Christian Counseling or faith-based counseling is available to those who identify as Christians or from a community of faith.",
      "Vicky has over 20 years of work experience in the behavioral health field, working with individuals and families with substance use and mental health issues and those who identify as BIPOC.",
    ],
    profileUrl: "/providers/oregon-therapists",
  },
  {
    name: "Ashley Oakley, Clinical Social Worker Associate (#A16360)",
    image: "https://guillaumecounseling.com/wp-content/uploads/2025/03/0-Ashley-Oakley-HeadshotPro-Ashley-Oakley-1024x832.png",
    location: "Portland, Oregon",
    details: [
      "In-person at the SW Portland and NE Portland offices",
      "Offering in-person and Telehealth - weekend/evening appointments",
      "Mixed race/Hispanic ancestry therapist, conversational elementary level Spanish; Offers Services in English only at this time.",
    ],
    profileUrl: "/providers/oregon-therapists",
  },
  {
    name: "Nahomie Guillaume, LMFT, Clinical Supervisor",
    image: "https://guillaumecounseling.com/wp-content/uploads/2024/05/nahomie-guillaume-1024x819.jpeg",
    location: "Oregon Telehealth",
    details: [
      "Telehealth only",
      "Specialties in faith-based counseling, Christian Counseling, Cognitive Behavioral Therapy, and Solutions Focused Therapy.",
      "Specialized in dealing with infidelity issues, maternal and paternal mental health, parenting, anxiety and depression, and infant loss through miscarriage or stillbirth.",
      "Speaks Haitian Creole.",
    ],
    profileUrl: "/providers/oregon-therapists",
  },
];

export const californiaTherapists: Therapist[] = [
  {
    name: "Pamela Yafte Cardenas Rico, Associate Clinical Social Worker (ACSW #126959)",
    image: "https://guillaumecounseling.com/wp-content/uploads/2025/08/IMG_6508-Pamela-Yafte-Cardenas-Rico.png",
    location: "Sacramento, California",
    details: [
      "In-person and telehealth services",
      "Bilingual in English and Spanish",
      "Currently accepting new clients",
    ],
    profileUrl: "/providers/california-therapists",
  },
  {
    name: "Ragini Lal, Associate Marriage and Family Therapist (AMFT #161563) & Associate Professional Clinical Counselor (APCC #20860)",
    image: "https://guillaumecounseling.com/wp-content/uploads/2025/08/2025-08-20-21_48_06.628-0700-3-Ragini-scaled-1-628x1024.jpg",
    location: "Sacramento, California",
    details: [
      "In-person and telehealth sessions available",
      "Multi lingual: English, Hindi, Urdu, and Punjabi",
      "Currently accepting clients",
    ],
    profileUrl: "/providers/california-therapists",
  },
];

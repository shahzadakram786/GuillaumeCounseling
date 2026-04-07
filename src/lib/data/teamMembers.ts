export const teamMembersData = [
  {
    slug: "nahomie-guillaume", // The URL will be /team/nahomie-guillaume
    name: "Nahomie Guillaume, LMFT, MS, MBA",
    title: "Program Director/CEO",
    image: "/images/nahomie.jpg", // Update with your actual image path
    languages: "Bilingual in English and Haitian Creole",
    locations: ["Oregon", "California"],
    bio: [
      "Nahomie Guillaume is a licensed Marriage and Family Therapist with extensive experience in providing compassionate, culturally responsive care to individuals, couples, and families.",
      "She holds a Master of Science in Marriage and Family Therapy and a Master of Business Administration. Her clinical approach integrates evidence-based practices such as Cognitive Behavioral Therapy (CBT), Solution-Focused Brief Therapy (SFBT), and the Gottman Method for couples.",
      "Nahomie is passionate about destigmatizing mental health care and creating an inclusive environment where clients feel truly seen and heard. Her work focuses on maternal and paternal mental health, anxiety, mood disorders, and navigating complex relationship dynamics."
    ],
    education: [
      "Master of Science in Marriage and Family Therapy",
      "Master of Business Administration (MBA)"
    ],
    specialties: [
      "Couples Counseling (Gottman Method)",
      "Maternal & Paternal Mental Health",
      "Anxiety & Mood Disorders",
      "Family Systems & Dynamics"
    ]
  },
  // Add other team members here with their own unique 'slug'
 {
    slug: "nahomie-guillaume", // URL: /team/nahomie-guillaume
    name: "Nahomie Guillaume, LMFT, MS, MBA",
    title: "Program Director/CEO",
    image: "/nahomie.jpg", // Update with actual image path
    languages: "Bilingual in English and Haitian Creole",
    locations: ["Oregon", "California"],
    bio: [
      "Nahomie Guillaume is a licensed Marriage and Family Therapist with extensive experience in providing compassionate, culturally responsive care to individuals, couples, and families.",
      "She holds a Master of Science in Marriage and Family Therapy and a Master of Business Administration. Her clinical approach integrates evidence-based practices such as Cognitive Behavioral Therapy (CBT), Solution-Focused Brief Therapy (SFBT), and the Gottman Method for couples.",
      "Nahomie is passionate about destigmatizing mental health care and creating an inclusive environment where clients feel truly seen and heard. Her work focuses on maternal and paternal mental health, anxiety, mood disorders, and navigating complex relationship dynamics."
    ],
    education: [
      "Master of Science in Marriage and Family Therapy",
      "Master of Business Administration (MBA)"
    ],
    specialties: [
      "Couples Counseling (Gottman Method)",
      "Maternal & Paternal Mental Health",
      "Anxiety & Mood Disorders",
      "Family Systems & Dynamics"
    ]
  },

  // ==========================================
  // 2. Jennifer Moorhead
  // ==========================================
  {
    slug: "jennifer-moorhead", // URL: /team/jennifer-moorhead
    name: "Jennifer Moorhead, MA, LPC, CADCII",
    title: "Independent Contractor",
    image: "/images/jennifer.jpg", // Update with actual image path
    languages: null, // Setting to null will automatically hide the Languages section on the page
    locations: ["Oregon"],
    bio: [
      "Jennifer Moorhead serves as a Clinical Supervisor for the Oregon team at Guillaume Counseling.",
      "With extensive experience in the field as a Licensed Professional Counselor (LPC) and Certified Alcohol and Drug Counselor (CADCII), she provides vital guidance, case consultation, and clinical oversight to ensure the highest standard of care is delivered.",
      "Please note: Jennifer currently does not offer direct therapeutic services to clients."
    ],
    education: [
      "Master of Arts (MA)",
      "Licensed Professional Counselor (LPC)",
      "Certified Alcohol and Drug Counselor (CADCII)"
    ],
    specialties: [
      "Clinical Supervision",
      "Case Consultation",
      "Therapist Development"
    ]
  },

  // ==========================================
  // 3. Kristi Abbott
  // ==========================================
  {
    slug: "kristi-abbott", // URL: /team/kristi-abbott
    name: "Kristi Abbott, LCSW",
    title: "Independent Contractor",
    image: "/images/kristi.jpg", // Update with actual image path
    languages: null,
    locations: ["California"],
    bio: [
      "Kristi Abbott serves as a Clinical Supervisor for the California team at Guillaume Counseling.",
      "As a Licensed Clinical Social Worker (LCSW), Kristi brings a wealth of clinical knowledge and expertise to the practice. She is dedicated to supporting the professional growth of clinicians through comprehensive supervision and ethical guidance.",
      "Please note: Kristi currently does not offer direct therapeutic services to clients."
    ],
    education: [
      "Licensed Clinical Social Worker (LCSW)"
    ],
    specialties: [
      "Clinical Supervision",
      "Case Consultation",
      "Therapist Development"
    ]
  }
];

// Helper function to find a specific member by their URL slug
export const getTeamMemberBySlug = (slug: string) => {
  return teamMembersData.find(member => member.slug === slug);
};
export interface LeadershipMember {
  name: string;
  title: string;
  image: string;
  description?: string;
  languages?: string;
  learnMoreUrl?: string;
}

export const leadershipData = {
  title: "Leadership",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Leadership", href: "#" },
  ],
  boardMembers: [
    {
      name: "Nahomie Guillaume, LMFT, MS, MBA",
      title: "President/Secretary",
      image: "https://guillaumecounseling.com/wp-content/uploads/2026/03/Nahomie-Moise-Guillaume-681x1024.webp",
    },
    {
      name: "Ernst Guillaume, MBA",
      title: "Treasurer",
      image: "https://guillaumecounseling.com/wp-content/uploads/2026/02/rsw_1920m-150x150-1.jpeg",
    },
  ] as LeadershipMember[],
  leadershipTeam: [
    {
      name: "Nahomie Guillaume, LMFT, MS, MBA",
      title: "Program Director/CEO",
      image: "https://guillaumecounseling.com/wp-content/uploads/2026/03/Nahomie-Moise-Guillaume-681x1024.webp",
      languages: "Bilingual in English and Haitian Creole",
      learnMoreUrl: "/providers/oregon-therapists",
    },
  ] as LeadershipMember[],
  clinicalSupervisors: {
    oregon: [
      {
        name: "Jennifer Moorhead, MA, LPC, CADCII",
        title: "Independent Contractor",
        image: "https://guillaumecounseling.com/wp-content/uploads/2026/02/JenniferMoorhead-002_picture.jpg",
        description: "Currently does not offer direct services to clients",
      },
    ] as LeadershipMember[],
    california: [
      {
        name: "Kristi Abbott, LCSW",
        title: "Independent Contractor",
        image: "https://guillaumecounseling.com/wp-content/uploads/2026/02/Kristi-Abbott-683x1024.webp",
        description: "Currently Does not offer direct services to clients.",
      },
    ] as LeadershipMember[],
  },
};

export const insurancesData = {
  title: "Insurance and Payments",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Insurance and Payments", href: "#" },
  ],
  psychotherapy: {
    intro: "We provide psychotherapy services to individuals, couples, and families, both in person and via telehealth.",
    responsibility: "Clients are responsible for payment of all professional services rendered, including any amounts not covered by insurance.",
  },
  medicalModelRates: [
    { service: "Assessment / Treatment Plan (60 minutes)", rate: "$350" },
    { service: "Individual Therapy (60 minutes)", rate: "$300" },
    { service: "Family Therapy (60 minutes)", rate: "$300" },
    { service: "Group Therapy (60 minutes)", rate: "$100" },
    { service: "Group Therapy (90 minutes)", rate: "$115" },
  ],
  personalGrowthRates: [
    { service: "Initial Couples Assessment (60 minutes)", rate: "$300" },
    { service: "Couples Therapy (60 minutes)", rate: "$300" },
    { service: "Initial Consultation (30 minutes)", rate: "$150" },
    { service: "Follow-Up Consultation Services (60 minutes)", rate: "$300" },
  ],
  groupRates: [
    { service: "Adult Groups (60 minutes)", rate: "$100" },
    { service: "Adult Groups (90 minutes)", rate: "$115" },
    { service: "Children's Groups (60 minutes)", rate: "$50" },
    { service: "Workshops", rate: "Fees vary" },
  ],
  slidingScale: {
    intro: "Limited availability for clients at or below 200% of the Federal Poverty Level (FPL):",
    rates: [
      "Individual, couples, and family therapy: $100 per session",
      "Group therapy: $50 per session",
      "Children's group therapy: $25 per session",
    ],
  },
  insuranceInfo: "We understand the importance of using insurance to access mental health care. Insurance coverage is based on medical necessity, meaning services must address a diagnosable mental health condition that impacts daily functioning.",
  insuranceAssessment: "An initial assessment (60 minutes) will be conducted to determine whether you meet medical necessity for insurance-covered services. Most plans cover this assessment, minus any copay, deductible, or coinsurance.",
  coveredServices: [
    "Initial Assessment & Treatment Planning",
    "Individual Therapy",
    "Family Therapy (when clinically indicated)",
    "Group Therapy (psychotherapy process groups and psychoeducation)",
    "Brief Case Management & Linkage Services (varies by plan)",
    "Brief Coordination of Care (varies by plan)",
    "EAP (Employee Assistance Program) Services",
  ],
  selfPay: {
    intro: "We accept all major credit cards and HSA card payments.",
    benefits: "Self-pay services do not require a mental health diagnosis or medical necessity. Care is guided by the client's needs rather than insurance requirements, allowing for greater flexibility in the focus of treatment.",
    appropriateFor: [
      "Personal growth and life transitions",
      "Relationship concerns",
      "Premarital and couples counseling",
    ],
    notCovered: [
      "Couples Therapy",
      "Life Skills Groups and Workshops",
      "Consultation Services",
    ],
  },
  oregonInNetwork: [
    "PacificSource Health Plans",
    "CareOregon (Medicaid), Trillium Community Health Plan",
    "Cigna / Evernorth, MHN (Health Net)",
    "Aetna, Regence Blue Cross Blue Shield of Oregon (including out-of-state Blue Cross Blue Shield plans)",
    "Optum / UnitedHealthcare (including UMR)",
    "Medicare",
  ],
  californiaInNetwork: [
    "Optum / UnitedHealthcare (including UMR)",
    "Cigna / Evernorth",
    "MHN (Health Net – Medi-Cal and commercial plans)",
    "Anthem Blue Cross (Medi-Cal only), Aetna",
  ],
  outOfNetwork: [
    "PPO plans with out-of-network benefits",
    "HMO plans with prior authorization",
    "A payment of $200 is required at the time of service",
    "We will submit claims to your insurance on your behalf",
    "Your balance will be adjusted once your insurance processes the claim",
  ],
  cancellationPolicy: "Please notify us at least 24 hours in advance if you are unable to make it to a scheduled session to prevent a $150.00 no-show or late cancellation fee. The Fee is waived for Medicaid clients, per governmental law.",
  billingDocuments: [
    { label: "Oregon - Your Rights and Protections Against Surprise Medical Bills (pdf)", url: "https://guillaumecounseling.com/wp-content/uploads/2026/01/Oregon_Your-Rights-and-Protections-Against-Surprise-Medical-Bills.pdf" },
    { label: "California - Your Rights and Protections Against Surprise Medical Bills (pdf)", url: "https://guillaumecounseling.com/wp-content/uploads/2026/01/California_Your-Rights-and-Protections-Against-Surprise-Medical-Bills.pdf" },
  ],
  // Add this inside your insurancesData object
  additionalInfo: "We are actively expanding our in-network partnerships. Please check this page periodically for updates.",
  
  paymentPolicy: [
    "Client is responsible for payment of services. All services are paid the day of the session, prior to attending the session.",
    "We will automatically process your card on the day of the appointment.",
    "We require a major credit card on file for all commercial insurance and self-pay clients.",
    "Our rates are subject to change without notice.",
    "You are responsible to pay the copay, co-insurance or deductible at the time of the appointment."
  ],

  financialResponsibility: {
    intro: "Clients are responsible for understanding their insurance benefits and coverage.",
    items: [
      "Clients with a deductible are required to pay $100 at the time of the appointment until claims are processed",
      "Clients with coinsurance are required to pay $30 at the time of the appointment",
      "Balances will be updated once insurance claims are finalized"
    ]
  },
};

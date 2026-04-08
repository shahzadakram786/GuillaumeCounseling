

// ==========================================
// 1. Unified Interface
// Defines all possible fields for both Summary Cards and Full Profiles

import { title } from "process";

// ==========================================
export interface TeamMember {
  // --- Core Identification ---
  slug: string;
  name: string;
  title: string;
  image: string;

  // --- Routing & Filtering ---
  // Use this to determine which State page they appear on
  regions: ("Oregon" | "California" | "Leadership")[];

  // --- State Page Summary Card Details ---
  summaryLocation?: string;
  summaryDetails?: string[];

  // --- Full Profile: Left Sidebar Details ---
  worksWith?: string | null;
  languages?: string | null;
  locations?: string[] | null;
  appointmentStatus?: string | null;
  faithBased?: string | null;
  Role?: string | null;
  License?: string | null;
  Location?: string | null; // Added this field for the sidebar card, can be null to hide

  // --- Full Profile: Main Content (Bios & Images) ---
  bio: string[];
  bio2?: string[];
  bio2Image?: string;
  bio3?: string[];
  bio3Image?: string;
  bio4?: string[];
  bio4Image?: string;
  bio5?: string[];
  bio5Image?: string;
  approaches?: string[];
  specialtiesMain?: string[];

  videoPosition?: "sidebar" | "main";




  // --- Full Profile: Bottom Grids ---
  education?: string[] | null;
  specialties?: string[] | null;


  // --- Optional: Attach a featured video to their profile ---
  videoSrc?: string;
}



export const teamMembersData: TeamMember[] = [

  // --- TEMPLATE START ---
  {
    // Core Info
    slug: "nahomie-guillaume", // The URL will be /team/nahomie-guillaume
    name: "Nahomie Guillaume, LMFT, MS, MBA",
    title: "Program Director/CEO",
    image: "/nahomie.jpg", // Update with your actual image path

    // Page Routing (Oregon, California, and/or Leadership)
    regions: ["Leadership"],

    // Summary Card (For the State Pages)
    summaryLocation: "City, State",
    summaryDetails: [
      "Detail point 1",
      "Detail point 2",
    ],

    // Full Profile Sidebar
    worksWith: "Offering group classes only",
    languages: "English, Haitian Creole",
    appointmentStatus: "Currently not providing direct services",
    faithBased: "Christian counseling available",
    // locations: ["Location 1", "Location 2"],
    // faithBased: "Details here",
    // Role: "Role here",
    // License: "License here",

    // Full Profile Bio & Images
    bio: [
      "I am currently focusing on my role as a Program Director, training the staff and handling all the ins and outs of running the business, as well as leaving room to begin facilitating group classes and workshops and launching a YouTube channel. My first group will be launched in May 2026.",
      "I know you may want to see me for individual therapy or couples therapy; however, it is not possible for me alone to do all the work. I am building a team of clinicians and admin staff to support you all and meet the needs of the community.",
      "I encourage you to see who else is on the website. We are continuously hiring. If you don’t see anyone else who may be a good match, do check back in a couple of months.",

      "Many blessings—below is my story so you can get a brief idea of the person behind the business.",
      "My knowledge and skills, wisdom, personality, and life experiences (the joyful and the painful moments) are all the tools that I use to build this work and help others along the way."
    ],
    bio2Image: "/nahomie-garden.jpg",
    bio3Image: "/nahomie-family.jpg",
    bio4Image: "/nahomie-smiling.jpg",
    bio2: [
      "I am a Licensed Marriage and Family Therapist in the states of California (License #48571), Oregon (License #T1492), and Texas (License #202775). I have 20 years of experience in the field and have been licensed since May 2010. I have a Master’s in Counseling Psychology, a Master of Business Administration from Argosy University, and a Bachelor’s in Psychology (emphasis in Christian Behavioral Science) and Communication Arts (emphasis in Theater Arts). I also have a certification in life coaching and prayer therapy. I went to California Baptist University for my undergraduate and graduate studies in psychology.",
      "I was trained specifically in the integration of Christian principles and behavioral science. My natural, God-given wisdom, as well as wisdom from of old—cross-cultural knowledge that expands beyond time and region, including the African heritage way of life—is also interwoven in my work. I enjoy learning and am always finding opportunities to expand my knowledge bank, whether reading a book, doing research, people-watching, reflecting on my observations of life around me, or talking to strangers wherever I travel."
    ],

    bio3: [
      "I am a people person and enjoy getting to know others. I love helping others and am passionate about what I do. I believe in living life to the fullest and in helping others in their own journey. I am warm, considerate, and not afraid to challenge you toward growth. I enjoy reading, writing, walking, hiking, singing and dancing in my kitchen—often lost in thought, contemplating and reflecting, usually while washing dishes—watching movies, talking on the phone with friends, spending time with my family, traveling, and eating out, trying authentic ethnic dishes.",
      "I am a wife and a mother. My husband and I are privileged to have four children—2 boys and 2 girls (3 biological together and 1 from another mother). I have lost 2 children through miscarriage and a stillbirth. God has blessed my husband and me with a fourth child through another woman’s womb. I would never wish the circumstances of my fourth child’s conception and birth on my worst enemy, but for the growth and blessings through it all, I am thankful. I have experienced God’s wonders in my heart and in my family. Now I specialize in betrayal and infidelity, using many of the life lessons I have learned and am learning to help others.",

    ],
    bio4: [
      "There is a story in the Bible about Samson, where he ate honey from the carcass of a lion he had killed, and he came up with this riddle: “Out of the eater came something to eat, and out of the strong came something sweet.” This riddle, in essence, is saying that sweetness can come out of something unclean and impure.",
      "I can truly say that through all the trials and tribulations of my life—from a child who grew up with my grandparents and aunts, to dealing with sexual immorality from a young age (as far back as I can remember), and all the challenges, trials, and tribulations that come with life—I have always eventually experienced a blessing, a sweetness, a gift, and a joy. This is one of the reasons I do what I do in creating a business to help others.",
      "There is also another parable that culminates my life.",
      "In the Haitian culture, “Maladi kon remed,” meaning those who have been sick are the ones who find the cure. Healing is a lifetime journey, and I am thankful to be walking in it with God’s grace. When I say to someone you can overcome great pain and sin and come out better, I (and my family) are a living testimony of that. But I don’t think I could have overcome, and continue overcoming, without my faith and security in God."

    ],
    bio5: [
      "I have juggled a full-time career for several years. I was home for a short time with my children in the past, and now I get to have the flexible life and schedule I have desired, balancing career and motherhood on my time. Through my children and husband, I have learned many things about myself, the world around me, and God. For me, being a wife and mother is a journey, and each day I learn something new.",
      "I am Haitian. I was born and raised in Haiti until the age of 12. I am a Christian. For me, Christianity is who I am and who I am becoming. It is my purpose and my destiny. It is the foundation of and central reason for my work. I become an avenue of hope, healing, and support to you because I am a Christian. I live to demonstrate the love, the power, and the goodness of my God through my work and my life.",
      "Through my work, I have served people from all walks of life. I enjoy meeting people of different backgrounds and beliefs who are exploring life and learning about this higher being in their own way, through their own culture and religion, though the name of God for them may be different from my own Christian background. I love seeing what God does in people’s lives who may or may not even be aware of His presence. I love that God is universal in the sense that, at one time or another, we all eventually get to ask or experience the question, in our own way: is there something or someone higher out there?",
      "My goal in building this practice is to bring on team members who are passionate about people and about the work that they do, so that through meeting them, you can experience something profoundly different than previously expected. Each of them has their own unique skill sets, personalities, belief systems, and upbringing. Some are Christians and some are not. Some believe in something and some do not. Some are part of the LGBTQ community and some are not. Some may be poor and some may be rich. Some may be Black and some may be White, and all the colors and ethnic groups in between.",
      "They are from all walks of life because you, as the client, are from all walks of life. No matter who they are and where they come from, whether you work with them for one day or long term, I know that God has brought each one of them here for such a time as this, to use them as He chooses, to provide you with a unique experience that you would not have had if you didn’t meet with that one particular person. My team and I are here to be an avenue of hope, healing, and support to you in your life’s journey."
    ],
    // Add bio3, bio4, bio5 as needed...

    // Full Profile Bottom Grids
     education: [
      "Master of Science in Marriage and Family Therapy",
      "Master of Business Administration (MBA)"
    ],
     specialties: [
      "Couples Counseling (Gottman Method)",
      "Maternal & Paternal Mental Health",
      "Anxiety & Mood Disorders",
      "Family Systems & Dynamics"
    ],
   
    
  },
  
  // ==========================================
  // 2. Jennifer Moorhead
  // ==========================================
  {
    slug: "jennifer-moorhead", // URL: /team/jennifer-moorhead
    name: "Jennifer Moorhead, MA, LPC, CADCII",
    title: "Independent Contractor",
    image: "/jennifer.jpg", // Update with actual image path
    languages: null, // Setting to null will automatically hide the Languages section on the page
    locations: ["Oregon"],
    bio: [
      "My name is Jennifer Moorhead (LPC # C4464), a Clinical Supervisor, independent contractor with Guillaume Counseling Services, supervising the board registered Associates (Professional Counselor Associates, and Marriage and Family Counselor Associates). I am currently not providing direct client services.",
      "My philosophy is everyone deserves “the right care at the right time and in the right place”. ",
      "I work with young children up to senior populations including issues such as:  Depression, Bipolar, Anxiety, Traumatic Brain Injuries, Eating Disorders, Domestic Violence and Substance Abuse.",
      "I graduated from the University of Utah in 1995 with a Bachelor’s degree in Behavioral Health and earned a Master’s degree in Counseling and Educational Psychology from the University of Nevada, Reno in 2000. ",
      "I am a Licensed Professional Counselor as well as a Certified Alcohol and Drug Counselor (CADCII).   ",
      "I enjoy hiking, being outdoors and watching wildlife any opportunity I can find.  I am on a quest for knowledge and experiencing curiosity whenever possible.  The beach is my soothing place, and the mountains are where I feel at home in the trees.",

    ],
    regions: ["Leadership"],
    education: [
      "Master of Arts (MA)",
      "Licensed Professional Counselor (LPC)",
      "Certified Alcohol and Drug Counselor (CADCII)"
    ],
    Role: "Clinical Supervisor (Currently not accepting clients)",
    Location: "Oregon",
    License: "Licensed Professional Counselor(LPC #C4464)Certified Alcohol & Drug Counselor II(CADC II)",


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
    image: "/Kristi.webp", // Update with actual image path
    languages: null,
    locations: ["California"],
    bio: [
      "With over 20 years of experience in the mental health field, Kristi Abbott, LCSW (#65194), is a dedicated Clinical Supervisor committed to providing compassionate, evidence-based care. She has extensive expertise working with individuals experiencing depression, anxiety, obsessive-compulsive disorder (OCD), psychotic disorders, trauma, and major life transitions.",
      "Kristi utilizes an integrative therapeutic approach, drawing from a range of clinical modalities including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Acceptance and Commitment Therapy (ACT), Internal Family Systems (IFS), and Ketamine-Assisted Psychotherapy (KAP). Her work is tailored to each client’s unique needs, with an emphasis on collaboration, safety, and meaningful, sustainable change.",
      "As a Clinical Supervisor, Kristi is passionate about mentoring and supporting clinicians, fostering professional growth while upholding high standards of ethical practice and clinical excellence. She believes healing occurs through connection, insight, and practical tools that empower clients to navigate challenges and build resilience. ",

    ],
    regions: ["Leadership"],
    education: [
      "Licensed Clinical Social Worker (LCSW)"
    ],
    Role: "Clinical Supervisor (Currently not accepting clients)",
    Location: "California",
    License: "Licensed Clinical Social Worker (LCSW #65194)",

    specialties: [
      "Clinical Supervision",
      "Case Consultation",
      "Therapist Development"
    ]
  }


  //oregon providers and california providers will be added here as we hire more clinicians. For now, we have the two clinical supervisors listed above, and we will add the direct service providers as we hire them. The bios for the direct service providers will be more detailed than the ones for the clinical supervisors, as they will include more personal information and a more in-depth description of their therapeutic approach and philosophy. The clinical supervisors' bios will focus more on their experience, expertise, and approach to supervision.
  ,
  {
    slug: "miles-cunningham", // URL will be /team/miles-cunningham
    name: "Miles Cunningham",
    title: "Clinical Social Worker Associate (CSWA #A16731)",
    image: "/Miles.png", // Update with actual image path

    // --- Sidebar Card Data ---
    worksWith: "Adults, couples, families",
    languages: "English",
    locations: ["Portland, Oregon", "In-person at the SW Portland office only"],
    License: "Clinical Social Worker Associate(CSWA #A16731)",
    appointmentStatus: null, // Set to null to hide this field
    faithBased: null, // Set to null to hide this field

    regions: ["Oregon"],



    summaryLocation: "Portland, Oregon",
    summaryDetails: [
      "In-person at the SW Portland office only.",
      "African American Male therapist",
      "Individual, family, and couples therapy for all ages.",
      "Telehealth and in-person appointments available during the day, evening, and weekends.",
      "In-person appointments are on Mondays."
       ],
    // --- Main Content Data ---
    bio: [
      "Hi, I'm Miles. I am originally from Rhode Island with a passion for walking alongside others through healing, growth, and identity work. I am a board registered Clinical Social Worker Associate (A16731). I provide services under the clinical supervision of Nahomie Guillaume, LMFT (T1492) and Delila Donaldson, LCSW (L7749) accruing hours towards board licensure. I hold a bachelor's degree in social work from Eastern Connecticut State University and earned my master's in social work and theology from Boston College—a combination that has shaped both my clinical and holistic approach to care.",
      "My therapeutic style is grounded in a person-centered, Cognitive Behavioral Therapy (CBT) framework, with a strong emphasis on trauma, grief, and identity. I work especially with clients navigating transitions, loss, and the complexities of discovering or reclaiming their sense of self. My work often centers around supporting individuals from BIPOC and rural communities, where access to therapy may come with unique cultural and systemic barriers.",
      "Since completing my graduate studies in 2019, I began my career as an academic advisor for student-athletes at Boston College, where I also partnered with Campus Ministries to create and co-facilitate a grief support group for students experiencing loss. That early work deeply informed my understanding of how grief touches all areas of life—academic, spiritual, relational—and how community plays a key role in healing.",
      "My journey then led me to rural Oregon, where I currently serve as a co-occurring therapist, working with individuals facing both mental health challenges and substance use disorders. Here at Guillaume Counseling Services, I provide individual therapy, family therapy, and couples therapy working with a diverse clientele. My clinical work has consistently included LGBTQ+ clients, BIPOC individuals, and faith-based communities—all of whom I approach with cultural humility, care, and a deep respect for their lived experiences.",
      "Whether you're navigating trauma, reworking your identity, sitting with grief, or exploring recovery, I offer a space that is grounded, compassionate, and collaborative. I believe that therapy is not about fixing people. It's about creating space for people to reconnect with their voice, values, and resilience. Outside of the therapy room, I find joy discovering new coffee shops and playing golf. I'm always inspired by the quiet strength people carry and am honored to be a part of their process."
    ],
    // If you don't have separate education/specialties lists for him yet, set to null or empty arrays
    education: [
      "Master's in Social Work and Theology, Boston College",
      "Bachelor's Degree in Social Work, Eastern Connecticut State University"
    ],
    specialties: [
      "Cognitive Behavioral Therapy (CBT)",
      "Trauma, Grief, and Identity",
      "Life Transitions",
      "Co-occurring Disorders"
    ]
  },


  // Rebecca Artrip
  // ==========================================
  {
    slug: "rebecca-artrip", 
    name: "Rebecca Artrip",
    title: "MA, Professional Counselor Associate (R10505)",
    // Using the exact image URL you provided in the earlier Oregon data
    image: "https://guillaumecounseling.com/wp-content/uploads/2025/09/Rebecca-Artrip-MA-920x1024.png", 
    
    regions: ["Oregon"], // Ensures she automatically shows up on the Oregon page
    
    // --- Summary Card Details (For the State Page) ---
    // summaryLocation: "Portland, Oregon",
    summaryDetails: [
      "In-person at the SW Portland office only.",
      "Telehealth and In-person",
      "Christian Counseling or faith-based counseling is available to those who identify as Christians or from a community of faith.",
      "Rebecca has years of professional experience working with minorities and individuals who identify as BIPOC. Her personal lived experience includes understanding the dynamics of interracial relationships.",
      "Rebecca's passion for counseling and mental health is deeply personal."
    ],
    
    // --- Left Sidebar Data (For the Full Profile) ---
    worksWith: "Minorities, BIPOC, Individuals in Interracial Relationships", 
    languages: "English",
    locations: ["Portland, Oregon (SW Office)", "Telehealth"],
    appointmentStatus: null,
    faithBased: "Christian Counseling / Faith-based available",
    Role: "Professional Counselor Associate",
    License: "R10505",
    
    
    // --- Main Bio Data ---
    bio: [
      "Hello, my name is Rebecca. I am a Professional Counselor Associate passionate about walking alongside individuals as they pursue healing, growth, and personal transformation. I provide services under the clinical supervision of Nahomie Guillaume, LMFT (T1492).",


      "Life can feel joyful and steady one moment, and the next, a crisis can knock you off course and leave you feeling overwhelmed. My goal is to meet you exactly where you are, creating a warm, welcoming, and nonjudgmental space where you feel safe to share your story, truly heard after sharing it, and empowered to make the changes you feel are necessary. I believe that a strong therapeutic alliance—built on honesty, trust, and authenticity—is essential for meaningful progress, and I strive to cultivate this connection with every client.",


      "I earned my Master of Arts in Clinical Mental Health Counseling from Corban University in August 2024. During my graduate training, I completed an internship at Salem Free Clinic, where I had the privilege of counseling individuals from diverse cultural, ethnic, and socioeconomic backgrounds as they navigated a wide range of mental health concerns and life changes. I also interned at Corban Counseling Center, working with college students facing trauma, stress, life transitions, and emotional challenges. Following graduation, I was offered the opportunity to continue counseling at Corban University until April 2025. My experience also includes many years with Marion County Adult Behavioral Health and work at the Psychiatric Crisis Center, as well as working with women and children as a case manager at a women and children’s shelter.",

      "My counseling approach is compassionate and clinically grounded. I draw from Person-Centered, Trauma-Informed, Attachment-Based, and Strengths-Based approaches, tailoring each session to meet the unique needs and goals of my clients. My aim is to provide a space where you feel valued as you are while empowered to explore your thoughts, feelings, and behaviors. Together, we work to uncover the root causes of distress, build insight, and create lasting change.",

      "My passion for counseling is also deeply personal. I have walked through seasons of brokenness and hopelessness that were devastating and super hard to navigate. It makes all the difference knowing there is someone who understands, will listen, help us process our thoughts, and someone to encourage us when we are doing well, and be there to remind us we can also be hard on ourselves. To feel heard, understood, and supported can be game changers when we face those life experiences that can rattle us to the core. ",

      "Whether we are navigating past or present trauma, difficult relationships, family-of-origin issues, anxiety, depression, or unhelpful patterns of thinking and or behavior, I would be honored to walk alongside you. Together, we can work toward building resilience, discovering new possibilities, and helping you become the best version of yourself. If you have heard anything on my video, or read in my bio you resonate with, give us a call at Guillaume Counseling, where we strive to meet the needs of a diverse group, culturally sensitive, and we will schedule you for an appt to come in and do an introductory session if you would like."

    ],
    
    // --- Education & Specialties ---
    education: [
      "Master of Arts (MA)"
    ],
    specialties: [
      "Faith-Based / Christian Counseling",
      "Minority & BIPOC Support",
      "Interracial Relationship Dynamics"
    ],
    
    // (Optional) Include the video link you set up for her earlier!
    videoSrc: "/video/Untitled-design.mp4" ,
    videoPosition:"sidebar",
  },

  //Vicky Spear professnaiol counselor associate
  {
    slug: "vicky-spear",
    name: "Vicky Spear",
    title: "Professional Counselor Associate (R10423)",
    image: "https://guillaumecounseling.com/wp-content/uploads/2026/02/vicky-picture-resized.png",
    regions: ["Oregon"],

    summaryLocation: "Portland, Oregon",
    summaryDetails: [
      "In-person at the SW Portland office only.",
      "Telehealth and In-person",
      "Christian Counseling or faith-based counseling is available to those who identify as Christians or from a community of faith.",
      "Vicky has over 20 years of work experience in the behavioral health field, working with individuals and families with substance use and mental health issues and those who identify as BIPOC."
    ],
    worksWith: "Individuals and families with substance use and mental health issues, BIPOC individuals",
    languages: "English",
    locations: ["Portland, Oregon (SW Office)", "Telehealth"],
    appointmentStatus: null,
    faithBased: " Christian Counseling / Faith-based available",
    Role: "Professional Counselor Associate",
    License: "R10423",
        videoSrc: "/video/Vicky-Spear.webm",
        videoPosition:"sidebar",

    bio: [
      "Hello.  My name is Vicky.  I am a board registered Professional Counselor Associate with 20+ years of experience in working with individuals and their families in the mental health and addiction fields. I provide services under the clinical supervision of Nahomie Guillaume, LMFT (T1492).",

      " Building trust through active listening, asking questions, identifying resilience and strength from within come from a foundation of using a person-centered approach along with emotionally focused techniques.  These skills include validating and supporting clients and assisting them in understanding and learning how to identify and process through their feelings and emotions.  When needed, I offer support with coping, meditative and cognitive behavioral skills that support reflection, internalization, viewing a situation with a different perspective, and help to create a foundation to begin the growth process.  I’m a sensitive, relational therapist and I believe every individual has their own unique story and narrative that is of significant intrinsic importance and over time will contribute to the health, wholeness, and success of their family and community.  I feel honored to be able to support clients on their journey.  It’s a priceless “gift” to see one’s self-worth, confidence, and insight into their true value and purpose begin to blossom.",

      "My experience includes working with clients who struggle with unhealthy boundaries, low self-worth, lack of purpose including lack of self-care, addiction, unresolved anger or resentments, grief and loss or trauma related to current relationships and/or family of origin.  In our initial sessions, we will delve deeply into the issues at hand and mutually collaborate to create a plan to address them in a way that is supportive and fosters healing. ",
      "I have a MA in Counseling Psychology from Lewis and Clark and a CADCII; which is a certification in addiction counseling.  My experience includes working in “in patient substance abuse treatment centers” and “outpatient treatment” centers with men, women, adolescents and their families.  I supported a treatment center becoming “Wellbriety Certified” and earned certifications in facilitation of Native American Curriculums.  I have worked with marginalized populations, a variety of cultures, and a diversity of spiritual practices, and lack of as well as with clients who do not identify with any religion or faith. In my practice, I meet you where you are and incorporate your own belief systems and value to help you reach your goals. I offer mainstream counseling to all my clients, as well as Christian Counseling or faith-based counseling upon requests.",
      "I have a Christian Worldview on how I navigate the world and am non-religious. I have personally experienced the importance of having a spiritual connection.  This developed in me when I had to let go of the home where I raised my children when I went through a divorce.  My faith journey has humbled me and keeps me grateful daily for the basics in life. This contributes to my self-esteem and confidence.",
      "My knowledge on “interdependence” fosters my ongoing growth, learning how to build character through adversity and the storms of life while valuing and using my own support system for accountability and community.  It ties into “you’re only as strong as your weakest link” and fosters caring for others and yet knowing the importance of my journey so that I can contribute and give back.  I can still remember when I learned the concept of compliance versus growth and my determination of taking conscious steps forward in life.  My belief is this never stops as long as we’re alive and every developmental stage is another opportunity to continue learning. ",
      "My time outside of work is spent with family, friends, animals and nature.  I live with my two dogs: a 6-pound Yorkshire Terrier and a 17-pound Toy Aussie.",
    ],
    education: [
      "Master of Arts (MA)"
    ],
    specialties: [
      "Faith-Based / Christian Counseling",
      "Substance Use & Mental Health Support",
      "BIPOC Support"
    ]
  }

  ,
   
  //Ashley CSWA 
  {
    slug: "ashley-cswa",
    name: "Ashley, CSWA",
    title: "Clinical Social Worker Associate (CSWA)",
    image: "/video/ashley.png", // Update with actual image path
    regions: ["Oregon"],

    summaryLocation: "Portland, Oregon",
    summaryDetails: [
      "In-person at the SW Portland and NE Portland offices",
      "Offering in-person and Telehealth - weekend/evening appointments",
      "Christian Counseling or faith-based counseling is available to those who identify as Christians or from a community of faith.",
      "Mixed race/Hispanic ancestry therapist, conversational elementary level Spanish; Offers Services in English only at this time.",
      "1st available appointment, March 2, 2026"
    ],
    worksWith: "Individuals and families with substance use and mental health issues, BIPOC individuals",
    languages: "English",
    locations: ["Portland, Oregon (SW Office)", "Telehealth"],
    appointmentStatus: null,
    faithBased: " Christian Counseling / Faith-based available",
    Role: "Clinical Social Worker Associate",
    License: "CSWA",
    bio: [
      "Hi! I’m Ash, a Clinical Social Work Associate with over 15 years of experience supporting individuals, families, and communities in healing from trauma. My work is rooted in social justice, mindfulness, and the power of human connection. I help clients navigate challenges with curiosity, imagination, and compassion. I believe emotions can be our greatest teachers.  I find joy in nature and the playful practice, performance and teaching of aerial and ground movement arts.",

      "I earned my MSW from the University of Chicago in 2011 and have worked across diverse settings, including legal systems, public education, shelters, inpatient treatment centers, and community-based programs. As a post-master’s clinician (CSWA) I am just starting my practice. I have been a case worker for families (not as CSWA) for over 5 years, and while earning my MSW I worked as a clinician at an inpatient substance use treatment center.",


      "I worked alongside the nine federally recognized Tribes of Oregon, as well as indigenous communities across the United States and Central America. I have also spent a year working abroad in Guatemala and am conversational in Spanish (currently, we only offer sessions in English). My experience includes supporting those impacted by substance use, domestic violence, complex trauma, and social inequities. I have worked with many children and families whose first language is not English, have recently immigrated to the United States, and  refugees. I work with people of all ages, cultures, and spiritual beliefs, as well as diverse relationship structures and family dynamics.",

      "My approach is holistic and multidisciplinary, drawing from psychology, neuroscience, somatic practices, and expressive therapies. I integrate narrative, dialectical behavior, and emotion-focused techniques, along with movement, art, and play, to foster healing and growth. It is an honor to co-create a space where mind, body, and spirit can reunite. I look forward to working together to strengthen your resilience and well-being."
    ],
    videoSrc: "/video/Ash-CSWA-short-vid_12-seconds.mp4", 
    videoPosition: "main",   
    education: [
      "Master of Arts (MA)"
    ],
    specialties: [
      "Faith-Based / Christian Counseling",
      "Substance Use & Mental Health Support",
      "BIPOC Support"
    ]
  },




  //Carlifonia providers will be added here as we hire more clinicians. For now, we ha
   
{
    slug: "pamela-yafte-cardenas-rico", 
    name: "Pamela Yafte Cardenas Rico",
    title: "Associate Clinical Social Worker (ACSW #126959)",
    image: "/video/Pamela.png", // Update with her actual image path
    
    regions: ["California"], // <--- Automatically puts her on the California page
    
    // --- Summary Card Details (From Screenshot) ---
    summaryLocation: "Sacramento, California",
    summaryDetails: [
      "In-person and telehealth services",
      "Bilingual in English and Spanish",
      "Currently accepting new clients"
    ],
    
    // --- Left Sidebar Data (For the Full Profile) ---
    worksWith: "Adults, Couples, Families", // Update this as needed
    languages: "English, Spanish",
    locations: ["Sacramento, California", "Telehealth"],
    appointmentStatus: "Currently accepting new clients",
    faithBased: null, // Change if she offers faith-based counseling
    Role: "Associate Clinical Social Worker",
    License: "ACSW #126959",
    
    // --- Main Bio Data ---
    bio: [
      "Hello, my name is Pamela Yafte Cardenas Rico, and I am a board registered Associate Clinical Social Worker (ACSW #126959). I provide services under the clinical supervision of Nahomie Guillaume, LMFT (#48571). I am committed to helping children, families, and individuals find healing and hope. My approach is grounded in compassion, cultural humility, and a belief that every person holds unique strengths that can guide their path forward.",
      "I specialize in supporting clients who are experiencing stress, family challenges, or life transitions. My focus is on creating a safe and welcoming space where people can share openly, feel understood, and begin building the tools they need for growth. I draw on trauma-informed and strength-based practices, working alongside clients to set meaningful goals and create individualized plans that reflect their needs and values.",

      "Throughout my professional journey, I have gained experience in direct services, group facilitation, and collaboration with professionals across mental health, healthcare, education, and legal systems. This has allowed me to see how powerful connection and teamwork can be in supporting lasting change. I also enjoy opportunities to share knowledge, whether that’s leading workshops, presenting to community partners, or helping families access valuable resources.",

      "As a bilingual professional fluent in Spanish and English, I am passionate about serving diverse communities and providing care that honors cultural identity and life experiences. I understand the importance of making therapy accessible and relatable, and I strive to meet clients where they are with empathy and respect.",

      "Outside of my work, I enjoy reading, exploring new places, and spending time with loved ones. My family’s roots in Mexico City continue to shape my sense of identity and connection, and I find joy in traditions, food, and music that remind me of home.",

      "Above all, I see therapy as a journey of connection and discovery. My goal is to walk alongside clients with care and support, helping them recognize their own resilience and move toward healing in ways that feel authentic and empowering."
    ],
    
    education: [
      "Master of Social Work (MSW)" // Update with her actual degree
    ],
    specialties: [
      "Bilingual Counseling",
      "List her other specialties here..."
    ]
  },

  // ==========================================
  // Ragini Lal
  // ==========================================
  {
    slug: "ragini-lal", 
    name: "Ragini Lal",
    title: "Associate Marriage and Family Therapist (AMFT #161563) & Associate Professional Clinical Counselor (APCC #20860)",
    image: "/video/Ragini.jpg", // Update with her actual image path
    
    regions: ["California"], // <--- Automatically puts her on the California page
    
    // --- Summary Card Details (From Screenshot) ---
    summaryLocation: "Sacramento, California",
    summaryDetails: [
      "In-person and telehealth sessions available",
      "Multi lingual: English, Hindi, Urdu, and Punjabi",
      "Currently accepting clients"
    ],
    videoSrc: "/video/ragini-lal.webm", // Update with the actual video path you set up for her
    videoPosition: "sidebar",
    
    // --- Left Sidebar Data (For the Full Profile) ---
    worksWith: "Adults, Couples, Families", // Update this as needed
    languages: "English, Hindi, Urdu, Punjabi",
    locations: ["Sacramento, California", "Telehealth"],
    appointmentStatus: "Currently accepting clients",
    faithBased: null, // Change if she offers faith-based counseling
    Role: "Associate Marriage and Family Therapist & APCC",
    License: "AMFT #161563, APCC #20860",
    
    // --- Main Bio Data ---
    bio: [
      "Let’s start as you are. When you feel seen and safe, growth unfolds with strength and clarity.",
      "Life can be beautiful and complex. We all long for connection, steadiness, and purpose, in our relationships and within ourselves. You may be navigating change, exploring identity, strengthening your partnership, or simply feeling ready to grow in a more intentional way.",
      "I work primarily with adults and couples who are willing to look inward, reflect honestly, and take an active role in their growth. Many couples come because they care deeply about their marriage and want to strengthen emotional safety, communication, and trust. Others want to deepen connection and move forward with greater clarity. Individuals often come wanting stronger boundaries, better self-understanding, and relationships that feel secure and aligned with who they are becoming.",
      "Our work is collaborative and growth-centered. Change happens in safe connection. Accountability is welcomed. The parts of you that feel uncertain, guarded, or stuck are explored with curiosity and compassion, in a safe and no judgments. This is a space for thoughtful effort, meaningful reflection, and steady progress.",
      "For couples and marriages, we focus on emotional safety, clear communication, and rebuilding trust. Therapy becomes a place to slow down reactive cycles, understand one another more deeply, and choose each other with intention.",
      "For individuals, we focus on emotional awareness, attachment patterns, identity development, and building self-trust that supports lasting change.",
      "As a first-generation South Asian woman, I understand the complexity of holding cultural values, generational expectations, and personal evolution at the same time. I work with multicultural, queer, neurodivergent, and diverse communities in a way that feels affirming, culturally responsive, and grounded in respect.",
      "I am an Associate Marriage and Family Therapist (AMFT #161563) and Associate Professional Clinical Counselor (APCC #20860), providing services under clinical supervision. With over 10 years of experience across advocacy, crisis support, community mental health, and clinical counseling, I bring both depth and perspective to our work. My approach is relational, trauma-informed, and grounded in attachment-based and psychodynamic therapy. I draw from emotionally focused work and skills-based strategies when helpful to support steady, lasting growth.",
      "Outside of therapy, I stay grounded through travel, exploring different cultures, trying new foods, and sharing life with my husband, three dogs, and one cat. These personal joys remind me of the importance of connection, curiosity, and growth, values I bring into every therapeutic relationship.",
      "You deserve a life that feels secure, connected, and aligned, both within yourself and in your relationships. When you are ready to engage in intentional growth, I would be honored to walk alongside you."


    ],
    
    education: [
      "Master's Degree" // Update with her actual degree
    ],
    specialties: [
      "Multilingual Counseling",
      "List her other specialties here..."
    ],
    
    // --- Approaches ---
    approaches: [
      "Humanistic",
      "Person-centered",
      "Psychodynamic",
      "Imago Relationship Therapy",
      "Integrative Behavioral Couples Therapy (IBCT)",
      "Emotion Focused Therapy (EFT)",
      "Emotionally Focused Couple Therapy (EFCT)",
      "Emotionally Focused Family Therapy (EFFT)",
      "Solution-focused Couple Therapy",
      "Narrative Exposure Therapy",
      "Trauma-focused Cognitive Behavioral Therapy (TF-CBT)",
      "Dialectal Behavior Therapy (DBT)",
      "Acceptance and Commitment Therapy (ACT)",
      "Cognitive Processing Therapy (CPT)",
      "Behavioral Activation (BA)",
      "Exposure Response Prevention (ERP)"
    ],

    // --- Specialties ---
    specialtiesMain: [
      "Life transitions",
      "Personal Growth",
      "Couples and Marriages",
      "Neurodivergence",
      "Identity Work",
      "Career and Guidance",
      "Trauma and Complex Trauma",
      "PTSD",
      "Depression",
      "Anxiety",
      "Family therapy",
      "Asian, South Asian",
      "Immigration and First-Generation",
      "LGBTQ+",
      "Women’s Issues",
      "Adults"
    ],

  
  },

















];


// Helper function to find a specific member by their URL slug
export const getTeamMemberBySlug = (slug: string) => {
  return teamMembersData.find(member => member.slug === slug);
};

// Gets ALL therapists tagged with "Oregon" for the Oregon page
export const getOregonTherapists = () => {
  return teamMembersData.filter(member => member.regions.includes("Oregon"));
};

// Gets ALL therapists tagged with "California" for the California page
export const getCaliforniaTherapists = () => {
  return teamMembersData.filter(member => member.regions.includes("California"));
};
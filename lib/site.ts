export const site = {
  name: "Mankind Care LLC",
  shortName: "Mankind Care",
  domain: "mankindcare.com",
  url: "https://mankindcare.com",
  tagline: "Care that helps people thrive, every single day.",
  description:
    "Mankind Care LLC provides adult day habilitation, home care, and DDD support services in Newark, New Jersey. Reliable transportation, qualified caregivers, and a full range of life skills programs.",
  phone: "347-459-0613",
  phoneHref: "tel:+13474590613",
  email: "Mankindcare25@gmail.com",
  emailHref: "mailto:Mankindcare25@gmail.com",
  address: {
    line1: "10 Hill Street, Suite 1E",
    line2: "Newark, New Jersey",
    full: "10 Hill Street, Suite 1E, Newark, New Jersey",
  },
  hours: "Monday through Friday, 9:00 AM to 3:00 PM",
  hoursShort: "Mon to Fri, 9 AM to 3 PM",
  mapEmbedSrc:
    "https://www.google.com/maps?q=10+Hill+Street+Suite+1E+Newark+New+Jersey&output=embed",
  mapLinkHref:
    "https://www.google.com/maps/search/?api=1&query=10+Hill+Street+Suite+1E+Newark+New+Jersey",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  name: string;
  icon:
    | "sunrise"
    | "heart-handshake"
    | "user-check"
    | "building"
    | "users"
    | "briefcase"
    | "target"
    | "brain"
    | "route"
    | "network";
  short: string;
  description: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "adult-day-habilitation",
    name: "Adult Day Habilitation",
    icon: "sunrise",
    short: "Our flagship day program of structured, meaningful daily activity.",
    description:
      "Our Adult Day Habilitation program gives individuals a warm, structured place to build skills and enjoy their day. Every visit blends learning, activity, and genuine connection, guided by caregivers who take the time to understand each person they support.",
    featured: true,
  },
  {
    slug: "respite-care",
    name: "Respite Care",
    icon: "heart-handshake",
    short: "Trusted short term relief so families can rest and recharge.",
    description:
      "Caregiving is demanding work, and everyone deserves a break. Our respite care gives families peace of mind, with trained staff who step in and provide the same quality of care and attention your loved one receives every day.",
  },
  {
    slug: "individual-support",
    name: "Individual Support",
    icon: "user-check",
    short: "One on one support built around a person's specific goals.",
    description:
      "Every person we support has different needs and different goals. Our individual support services are tailored around the person, not a program, so progress looks like real life: more independence, more confidence, and more comfort in daily routines.",
  },
  {
    slug: "community-based-support",
    name: "Community Based Support",
    icon: "building",
    short: "Guided support that extends into everyday community settings.",
    description:
      "We help individuals participate confidently in the community around them, from errands and appointments to everyday routines outside the home. Our team provides the guidance and encouragement needed to move through daily life with independence.",
  },
  {
    slug: "community-inclusion",
    name: "Community Inclusion",
    icon: "users",
    short: "Real participation in community life, not just a visit.",
    description:
      "We believe everyone belongs in the life of their community. Community Inclusion connects individuals to local activities, events, and relationships, building a genuine sense of belonging well beyond our doors.",
  },
  {
    slug: "prevocational-training",
    name: "Prevocational Training",
    icon: "briefcase",
    short: "Foundational work skills that prepare people for employment.",
    description:
      "Before a first job comes preparation. Our prevocational training builds the everyday work habits, routines, and confidence that make the step into employment feel achievable and within reach.",
  },
  {
    slug: "supported-employment",
    name: "Supported Employment",
    icon: "target",
    short: "Hands on coaching toward real, paid work in the community.",
    description:
      "We walk alongside individuals as they pursue paid employment, offering coaching and encouragement on the job. The goal is steady, meaningful work and the independence and pride that comes with it.",
  },
  {
    slug: "behavior-management",
    name: "Behavior Management",
    icon: "brain",
    short: "Thoughtful, individualized strategies for lasting progress.",
    description:
      "Our team works closely with individuals and families to understand behavior, build coping strategies, and support steady, positive progress. Every plan is personal, practical, and grounded in respect.",
  },
  {
    slug: "career-planning",
    name: "Career Planning",
    icon: "route",
    short: "Clear, personalized roadmaps toward long term career goals.",
    description:
      "We help individuals think beyond today and plan for tomorrow, mapping out realistic steps toward the career and future they want. It is guidance that grows with the person as their goals evolve.",
  },
  {
    slug: "natural-supports-training",
    name: "Natural Supports Training",
    icon: "network",
    short: "Strengthening the everyday people and relationships around you.",
    description:
      "Family, friends, and neighbors are often the strongest support network a person has. We train and equip these natural supports so care and encouragement continue well beyond scheduled program hours.",
  },
];

export const homeCare = {
  title: "Mankind Care Home Care Agency",
  description:
    "Alongside our day programs, Mankind Care also operates a home care agency for individuals who need support and companionship in the comfort of their own home. If home care is what you are looking for, give us a call and we will walk you through how we can help.",
};

export const topQuestions = [
  {
    icon: "car",
    question: "Do you provide transportation?",
    answer:
      "Getting to and from our program should never be a barrier to care. We coordinate reliable transportation so individuals can arrive and return home safely and on time.",
  },
  {
    icon: "shield",
    question: "Are your caregivers qualified?",
    answer:
      "Our caregivers are trained, attentive, and genuinely invested in the people they support. Quality care and comfort are the foundation of everything we do.",
  },
  {
    icon: "activity",
    question: "Is there a variety of activities?",
    answer:
      "Every day includes a mix of skill building and activity: problem solving, social time, daily living practice, and leisure, so no two days feel the same.",
  },
] as const;

export const coreSkills = [
  "Problem Solving",
  "Self Help",
  "Social Skills",
  "Adaptive Skills",
  "Daily Living",
  "Leisure Skills",
] as const;

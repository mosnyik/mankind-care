export const heroImages = {
  home: {
    src: "/images/caregiver-joyful-moment.jpg",
    alt: "A caregiver sharing a warm, joyful moment with someone she supports",
  },
  services: {
    src: "/images/caregiver-activity.jpg",
    alt: "A caregiver and an individual sharing a lively moment during an activity",
  },
  about: {
    src: "/images/laughing-together.jpg",
    alt: "Two people laughing together, a warm and genuine moment of connection",
  },
  contact: {
    src: "/images/hands-trust.jpg",
    alt: "Hands held together in a gesture of trust and support",
  },
} as const;

export const serviceImages: Record<string, { src: string; alt: string }> = {
  "adult-day-habilitation": {
    src: "/images/caregiver-joyful-moment.jpg",
    alt: "A caregiver sharing a joyful moment with someone she supports",
  },
  "respite-care": {
    src: "/images/hands-trust.jpg",
    alt: "Hands held together in a gesture of trust and support",
  },
  "individual-support": {
    src: "/images/support-worker-walking.jpg",
    alt: "A support worker walking alongside someone she assists",
  },
  "community-based-support": {
    src: "/images/laughing-together.jpg",
    alt: "Two people sharing a warm, genuine moment together outdoors",
  },
  "community-inclusion": {
    src: "/images/caregiver-activity.jpg",
    alt: "A caregiver and an individual sharing a lively moment during an activity",
  },
  "prevocational-training": {
    src: "/images/group-table-conversation.jpg",
    alt: "A group gathered around a table in conversation",
  },
  "supported-employment": {
    src: "/images/group-table-conversation.jpg",
    alt: "A group gathered around a table in conversation",
  },
  "behavior-management": {
    src: "/images/hands-trust.jpg",
    alt: "Hands held together in a gesture of trust and support",
  },
  "career-planning": {
    src: "/images/group-table-conversation.jpg",
    alt: "A group gathered around a table in conversation",
  },
  "natural-supports-training": {
    src: "/images/laughing-together.jpg",
    alt: "Two people sharing a warm, genuine moment together outdoors",
  },
  "home-care": {
    src: "/images/home-care-smiling.jpg",
    alt: "Two people smiling and conversing warmly together at home",
  },
};

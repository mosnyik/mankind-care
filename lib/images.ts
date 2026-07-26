function unsplash(id: string, params = "auto=format&fit=crop&q=80") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const heroImages = {
  home: {
    src: unsplash("1709127347878-bd27e64d1e3e", "auto=format&fit=crop&q=80&w=1400"),
    alt: "A caregiver sharing a warm, joyful moment with someone she supports",
  },
  services: {
    src: unsplash("1773227060422-ee506b865417", "auto=format&fit=crop&q=80&w=2000"),
    alt: "A caregiver and an individual sharing a lively moment during an activity",
  },
  about: {
    src: unsplash("1464998857633-50e59fbf2fe6", "auto=format&fit=crop&q=80&w=1400"),
    alt: "Two people laughing together, a warm and genuine moment of connection",
  },
  contact: {
    src: unsplash("1576560665905-28b4d4ea3380", "auto=format&fit=crop&q=80&w=2000"),
    alt: "Hands held together in a gesture of trust and support",
  },
} as const;

export const serviceImages: Record<string, { src: string; alt: string }> = {
  "adult-day-habilitation": {
    src: unsplash("1709127347878-bd27e64d1e3e", "auto=format&fit=crop&q=80&w=1200"),
    alt: "A caregiver sharing a joyful moment with someone she supports",
  },
  "respite-care": {
    src: unsplash("1576560665905-28b4d4ea3380", "auto=format&fit=crop&q=80&w=1200"),
    alt: "Hands held together in a gesture of trust and support",
  },
  "individual-support": {
    src: unsplash("1709127347874-3f4674be5bc8", "auto=format&fit=crop&q=80&w=1200"),
    alt: "A support worker walking alongside someone she assists",
  },
  "community-based-support": {
    src: unsplash("1464998857633-50e59fbf2fe6", "auto=format&fit=crop&q=80&w=1200"),
    alt: "Two people sharing a warm, genuine moment together outdoors",
  },
  "community-inclusion": {
    src: unsplash("1773227060422-ee506b865417", "auto=format&fit=crop&q=80&w=1200"),
    alt: "A caregiver and an individual sharing a lively moment during an activity",
  },
  "prevocational-training": {
    src: unsplash("1573497701240-345a300b8d36", "auto=format&fit=crop&q=80&w=1200"),
    alt: "A group gathered around a table in conversation",
  },
  "supported-employment": {
    src: unsplash("1573497701240-345a300b8d36", "auto=format&fit=crop&q=80&w=1200"),
    alt: "A group gathered around a table in conversation",
  },
  "behavior-management": {
    src: unsplash("1576560665905-28b4d4ea3380", "auto=format&fit=crop&q=80&w=1200"),
    alt: "Hands held together in a gesture of trust and support",
  },
  "career-planning": {
    src: unsplash("1573497701240-345a300b8d36", "auto=format&fit=crop&q=80&w=1200"),
    alt: "A group gathered around a table in conversation",
  },
  "natural-supports-training": {
    src: unsplash("1464998857633-50e59fbf2fe6", "auto=format&fit=crop&q=80&w=1200"),
    alt: "Two people sharing a warm, genuine moment together outdoors",
  },
  "home-care": {
    src: unsplash("1773227059881-ef8ecf22aac8", "auto=format&fit=crop&q=80&w=1200"),
    alt: "Two people smiling and conversing warmly together at home",
  },
};

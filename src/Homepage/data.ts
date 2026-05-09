export type NavItem = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: NavItem[];
};

export type PropertyCardData = {
  id: string;
  title: string;
  details: string;
  area: string;
  bedrooms: number;
  furnishing: "Fully Furnished" | "Semi Furnished";
  propertyType: "Residence" | "Apartment" | "Penthouse";
  lifestyles: string[];
  amenities: string[];
  moveIn: "Immediate" | "This Month" | "Flexible";
  commutePreference: "Central Business" | "Tech Corridor" | "Lifestyle District";
  price: string;
  priceMonthly: number;
  period?: string;
  rating: string;
  commute?: string;
  image: {
    src: string;
    alt: string;
  };
  verified?: boolean;
  href?: string;
};

export const homepageNavItems: NavItem[] = [
  { label: "Explore", href: "/home" },
  { label: "Concierge", href: "/concierge" },
  { label: "Saved", href: "/saved" },
  { label: "Become a Host", href: "/#host" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Discover",
    links: [
      { label: "Explore Properties", href: "/home" },
      { label: "Curated Collections", href: "/#collections" },
      { label: "Verified Homes", href: "/home#verified-homes" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Armata", href: "/#about" },
      { label: "Become a Host", href: "/#host" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export const featuredProperties: PropertyCardData[] = [
  {
    id: "indiranagar-residence",
    title: "Indiranagar",
    details: "Fully Furnished | 3 BHK",
    area: "Indiranagar",
    bedrooms: 3,
    furnishing: "Fully Furnished",
    propertyType: "Residence",
    lifestyles: ["Remote Worker", "Quiet Living", "Walkable Neighborhoods"],
    amenities: ["Dedicated Workspace", "Balcony", "Power Backup"],
    moveIn: "This Month",
    commutePreference: "Central Business",
    price: "INR 85,000",
    priceMonthly: 85000,
    period: "/mo",
    rating: "4.9",
    commute: "15 mins to Embassy GolfLinks",
    verified: true,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBvLv2PNC16IP4prUHT8-c--bgRp6EvxKe5aeMECIlrOOMCxS2A3honwljxM3HWsICgmglqh83HorlT0OjqDQpdkACfN4kqSWs-Zv5Jydxljx8wTvWi_NIh_wbu8mFezRq5nuF7Iyn89vkrwCmxtV2ZwzIIWK_1joIH_H2qtxzmbPxlbRIzxQv5CvE8WYkZsWWbhaOIN4L1plAH9EKicw6QmeTdwKpTBk2gLU0OPHsdCqe3BdFAwdaiX_AbWUUdv3A3KPqd0jDuB8",
      alt: "Bright minimalist apartment bedroom with white linens and light oak flooring.",
    },
    href: "/properties/indiranagar-residence",
  },
  {
    id: "koramangala-apartment",
    title: "Koramangala",
    details: "Semi Furnished | 2 BHK",
    area: "Koramangala",
    bedrooms: 2,
    furnishing: "Semi Furnished",
    propertyType: "Apartment",
    lifestyles: ["Pet Friendly", "Walkable Neighborhoods"],
    amenities: ["Pet Access", "Covered Parking", "Security"],
    moveIn: "Immediate",
    commutePreference: "Lifestyle District",
    price: "INR 65,000",
    priceMonthly: 65000,
    period: "/mo",
    rating: "4.8",
    commute: "10 mins to Sony World Junction",
    verified: true,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuARaoNK63S4VsLaXAXQrO0xjj5UofhqNaVopTxUYShhsplCJPPEjMBocT_vsGvzHDmb2Kl96ERFeloaHoakvyqRdXZOq3si-f1HifSs04bP6u_x7361X6LHElGWbxZzul8T1p9DfZiiHD7iE8bqMT9C5WKR0fJT8AeiEhxEv91aUwXZ0aHHjwEWPso6pVXW_yr2vqRUyWBZ9r3N_kDapHwSUwUWVkzwdHscGC6HTXfjH-8Hv6VTFP5eweAJyB5WsRbCPoBomgczRDw",
      alt: "Elegant modern living area with charcoal sofa and warm ambient lighting.",
    },
    href: "/properties/koramangala-apartment",
  },
  {
    id: "whitefield-penthouse",
    title: "Whitefield",
    details: "Fully Furnished | 4 BHK Penthouse",
    area: "Whitefield",
    bedrooms: 4,
    furnishing: "Fully Furnished",
    propertyType: "Penthouse",
    lifestyles: ["Remote Worker", "Wellness Focused", "Quiet Living"],
    amenities: ["Private Terrace", "Gym Access", "Dedicated Workspace"],
    moveIn: "Flexible",
    commutePreference: "Tech Corridor",
    price: "INR 1,10,000",
    priceMonthly: 110000,
    period: "/mo",
    rating: "5.0",
    commute: "5 mins to ITPL",
    verified: true,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaWBA4dueD51wMJa8-_jWU7PCJ_KtcgjEm4U7ElpKxiAuFhFmnkteLLtKap3aj1vCn7IBDkxwTZUciwgBkUKDGCgM7REEc1FbIiMaDOsJxANilFAO5ud0CVD0WveiyOCOSqoD_PRcFFIFjzXJErgbMskzhKj68UyZ_-M4lSlJ_HWGSNJXdyz4Nk3izjQXp67h7B9NTMMbcSx8p7DIh0u79ddwKzt2d7664uMn79LNmCiN7TQ3VjDH8l_JWxLH-FzhglQBfzUsCiTY",
      alt: "Sophisticated premium kitchen and dining space with stone cabinetry.",
    },
    href: "/properties/whitefield-penthouse",
  },
];

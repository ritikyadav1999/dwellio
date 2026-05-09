import { featuredProperties, type PropertyCardData } from "@/src/Homepage";

export type DetailItem = {
  label: string;
  value: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export const productGallery: GalleryImage[] = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBDlBQfwA4IM1wXNn-6GoHAkRLD-fYvR3F466f4mKrQT23CFnKdkH6hhBUsOIi4_ehG98z-AtZK22A2I0hpBF8AbHhJb_YY1FpbnCkpi5qnKri0LWM0SPphrckkzOOfeI9BtRFRsHga5Fe2oCpdvRF-3tZzhkZc4tfMkV-WNQtmGVvf1K4ctWBlu2q4jp_qIitm3hC_GTNZb1ro4Mysalwp9stiPW2R2vv8d5q9rrNOuUm2aO9h8rW1knMIxfoXy-RL2UrljYKpMk",
    alt: "Luxury penthouse living room with floor-to-ceiling windows and warm neutral interiors.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAisUa6eLDCmY0IeT-QpuX2hOHytAULgXelOf8skkAjR30U5bMHck5tkidMdlBa3e3StScgwuaimPVU-A3t8afYYsTz5hUOdKgn7jutnh8Ipfp67W0xwA-WM1kxpPlLvEcocj-1lnPZZ7KzZ_OsV-jMy1FKlIGLr1YRzIIvSE5JtrEyFgaVPKt-pEWaGNgEH9qR4qyHCm0Zi12kbfPP2IpddKdnaMnUvTj2WDThSui_9bQ-579tVAe9yqBZKLJvPZ713IYf0IcatfE",
    alt: "Minimal white kitchen with marble island and warm under-cabinet lighting.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi8M55xBPI28v9sRtixGSM5gUpgNCU61IzMTxnnynanI6eN2OajDhBEHmPgLVr5FTsZJ_RrkfNfeVYsx12tro2t6TXMgZwWR-9pUQXm46y7ckHUEd4P0ZTr_SgZYu9Bvfjr5DewQWtyHmTyPE15NXmn9rvAhdyQPbtYN9IJRZi2JtACibw265S3ugrYfSiDt41-HrqPd_SsEeze_xFRo9RaFMHZ0_yFOAS-qaDBKjFxVMpS9zzkwxg9qPVdQBTynFC6OaGfLZdBbU",
    alt: "Serene bedroom with layered cream linens and soft daylight.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4M2xFtqewxi47OMMbi1KCd-Fa_uxaVtKhCdp2ALMf4ZbvA1nqntnhxWs6IsvuHR7xcNtQm3P1m3WuFeMu6MMOz3yDAxxP65j3N65YkkQKOfgMOSFLy4EUrXczx7CmwKUaNMoHVNCF_MbrynB1ggc9MAFiu_DpIplw5GnoPS7_vHvY-XgQEBm3X8Z9dis9OpTK91EYD_Cex7SGqXOnOjl8sjcmYfFnaQzOBxgwi3vHp0n3YQYI56jvY7EYg5f73pPqQvHUFDiwtHo",
    alt: "Spa-like bathroom with freestanding tub and beige stone tile.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc7fJW_RzM6tr0bT7tR_SnOdvqa_7rtYgXArABSt98elTEjShOphanwsVA7h1OcbCV5LBNWwz6NEj4IRsE-VIliF0KS6L85p0VXX8EGqxPFhN9r1B8eNuCnppAeu6mYHqy8X1Q8YmmlSnCRnzw05qdPbudGgF9AQZHir5co-_2YzQ6bBRmR4OwJSzEgaxhM5IzcrPNPhjsQAvOMQ9_JRaKr2IjDOlLsxamPTQJ2RevZpGxwePvFVWSGAaW-92ykAcg_MNjWOMf-XQ",
    alt: "Sunlit penthouse terrace with outdoor seating and city views.",
  },
];

export const transparencyItems: DetailItem[] = [
  { label: "Ownership", value: "Verified Owner" },
  { label: "Financials", value: "Transparent Deposit and Maintenance" },
  { label: "Connectivity", value: "High-Speed Fiber Ready" },
  { label: "Utilities", value: "100% Power and Reliable Water" },
  { label: "Ambiance", value: "Excellent Sunlight, Low Noise" },
  { label: "Pets", value: "Welcomed" },
];

export const productDetail = {
  title: "Lavelle Road Penthouse",
  eyebrow: "Dwellio Verified Residence",
  meta: ["Penthouse", "Fully Furnished", "3,200 sqft", "Move-in Ready"],
  price: "INR 1,85,000",
  deposit: "INR 10,00,000",
  description:
    "A warm minimalist residence designed for refined urban living in central Bangalore. This penthouse balances architectural precision with the soft textures of a private sanctuary. Expansive living areas dissolve the boundary between indoors and out, offering an airy, curated environment that feels both sophisticated and deeply inviting.",
  neighborhood:
    "Situated on Lavelle Road, this residence is close to quiet cafes, fitness studios, galleries, and central business districts while retaining a private residential calm.",
  mapImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAIIYc5t8HbtADOkdiXW6yYbTrR5u4huJyOCin5GMVeFWdS0ZOCNH7sDYv-ZOS1NuOT0rjNZQLn8OV4fqh-26J3V5AfMZotguxU5Z2XvepovXMNCpH3AK2_QSrhPGcuDA9D0AgwleagXiPSPw5Hj1MpUBxt0M8k1PkoxSDZZ5hvYZX0aDdSAuZuqCi39hOn9GEPPbbXVJJwrGZhKfbcGvkFwtiR6yYlOo2GDQhV2gR5wK3moFEsvjLHUoL8ylTY3v8omqxp5btd0jI",
  host: {
    name: "Rajesh V.",
    role: "Verified Owner",
    response: "98% response",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBevDgtLCPCshWKYtskBcsbml3jwA2kK-XUx6gVgzFKNgRwrjVJgWOsG0JaotZaFWPVKvZrgbYtNs421XKnnklQyDCQQ-9DZQuwC9dFUsRaruMank3m7WnRgYYYxXn6kN7yBZNrh0iArNI9PbrtVL2lluDhwXcKtPJoJ6F-_qevfmQF0XHnEMS3Zbls0LLj1WDGPGzeMzbK113cTh2f6m2VyU2X_awxWb6T-8TB4gPQy24h4vbmSB5TgV76UqEkhTyAD6Qzx3C9pqU",
  },
};

export function getPropertyDetail(slug: string) {
  const property =
    featuredProperties.find((item) => item.id === slug) ?? featuredProperties[0];

  return {
    slug: property.id,
    title:
      property.id === "whitefield-penthouse"
        ? "Lavelle Road Penthouse"
        : `${property.title} ${property.propertyType}`,
    eyebrow: property.verified ? "Dwellio Verified Residence" : "Curated Residence",
    meta: [
      property.propertyType,
      property.furnishing,
      `${property.bedrooms} BHK`,
      property.moveIn === "Immediate" ? "Move-in Ready" : property.moveIn,
    ],
    price: property.price,
    deposit:
      property.priceMonthly >= 100000
        ? "INR 10,00,000"
        : property.priceMonthly >= 80000
          ? "INR 5,00,000"
          : "INR 3,00,000",
    description:
      property.id === "whitefield-penthouse"
        ? productDetail.description
        : `A calm ${property.furnishing.toLowerCase()} ${property.propertyType.toLowerCase()} in ${property.area}, curated for ${property.lifestyles.join(", ").toLowerCase()}. The home balances practical comfort with a warm, editorial sense of arrival.`,
    neighborhood:
      property.id === "whitefield-penthouse"
        ? productDetail.neighborhood
        : `${property.area} offers a composed urban rhythm with everyday conveniences, work access, and quiet residential pockets close at hand.`,
    mapImage: productDetail.mapImage,
    host: productDetail.host,
    property,
    gallery: [
      {
        src: property.image.src,
        alt: property.image.alt,
      },
      ...productGallery.slice(1),
    ],
    transparency: [
      { label: "Ownership", value: property.verified ? "Verified Owner" : "Curated Partner" },
      { label: "Financials", value: "Transparent Deposit and Maintenance" },
      { label: "Connectivity", value: property.amenities.includes("Dedicated Workspace") ? "Work-Ready Connectivity" : "High-Speed Fiber Ready" },
      { label: "Utilities", value: "Power Backup and Reliable Water" },
      { label: "Ambiance", value: property.lifestyles.includes("Quiet Living") ? "Low Noise, Calm Setting" : "Warm Natural Light" },
      { label: "Lifestyle", value: property.lifestyles.join(", ") },
    ],
  };
}

export function getSimilarHomes(slug: string) {
  return featuredProperties.filter((item) => item.id !== slug);
}

export const similarHomes: PropertyCardData[] = [
  {
    id: "indiranagar-townhouse",
    title: "Indiranagar Townhouse",
    details: "Semi Furnished | 3 BHK",
    area: "Indiranagar",
    bedrooms: 3,
    furnishing: "Semi Furnished",
    propertyType: "Residence",
    lifestyles: ["Quiet Living", "Walkable Neighborhoods"],
    amenities: ["Balcony", "Power Backup"],
    moveIn: "This Month",
    commutePreference: "Central Business",
    price: "INR 1,20,000",
    priceMonthly: 120000,
    period: "/mo",
    rating: "4.8",
    verified: true,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxnXLEuDCgaA0wBdnL8WlkNRs4ZVD8HFt3vvoulYoMMF4w419CawaCmk4qzcEKCjlBOLQO4TOI9JlMHWvSD_PERWMhT1rcVPrQAGC8AstKYF9QDiSc01bxlAKKUFyrs2Sg-coLvj-rKiNkE56NNQK2pLXs7_EN7BxGtuuiAChd5LVoF1bCRK5W5q1_DufDwiuX8Qi1oxq_4L-u7sWKmAAsKypFSDIEerQvjFr4PxNGFDUEFTrkTMeB5vhEYhFbBTHFnh3KuoswM-A",
      alt: "Luxury apartment living area with minimal white furniture and treetop views.",
    },
  },
  {
    id: "koramangala-villa",
    title: "Koramangala Villa",
    details: "Unfurnished | 4 BHK",
    area: "Koramangala",
    bedrooms: 4,
    furnishing: "Semi Furnished",
    propertyType: "Residence",
    lifestyles: ["Pet Friendly", "Quiet Living"],
    amenities: ["Covered Parking", "Security"],
    moveIn: "Flexible",
    commutePreference: "Lifestyle District",
    price: "INR 2,50,000",
    priceMonthly: 250000,
    period: "/mo",
    rating: "4.7",
    verified: true,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzEepXkOLcJxitipl8mrZ6TFGOIA0SDKd7SmpXyo9qXlUoF1FQxi6-u2VCY9Smek5G4BMHP9E4bOqOm77F_xAPJT_gTURuIMmWRM0xoQ0I-h-Rj7TPq7Z8MkyajFOX-uVyuSWf5WSgr45ORYPUenDnyCP2by05ANFoOesVto-xP7ULRfk7rfkmIm6T04As36USrMeiZCtyFHTrsu_TmNyO5PfWmGN_nOV757hph2TXVGhOlAunRrQJNkgWeIw5NvDpzqEIkZP3HbA",
      alt: "Modern minimalist villa facade with white concrete and timber accents.",
    },
  },
  {
    id: "whitefield-loft",
    title: "Whitefield Loft",
    details: "Fully Furnished | 2 BHK",
    area: "Whitefield",
    bedrooms: 2,
    furnishing: "Fully Furnished",
    propertyType: "Apartment",
    lifestyles: ["Remote Worker", "Wellness Focused"],
    amenities: ["Dedicated Workspace", "Gym Access"],
    moveIn: "Immediate",
    commutePreference: "Tech Corridor",
    price: "INR 95,000",
    priceMonthly: 95000,
    period: "/mo",
    rating: "4.9",
    verified: false,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAr67LMhpijsoy9KcPwaCoAxUH5mo5P-Rr041W09kXcy_vzSC3P-zbTO1cWYsXiijXuGC43w7OfF1LnHOPVnmCQwy8g5Da7VKX3enXCgfLz066la_NcR6xk4JYqHPS6eaY_8P2l-peLuNz2WQqWLIvMZ8HvVkjHAnCK129CiiyrQJacaI7UMxB_6NB_yIp7BViHKJWuq0wtIUfhIajVugCaVtO_kwo0YBDF9_4D1xo9U5ll4aRJXhSdRnwIPy9GgqGHG7P0kTfVDp0",
      alt: "Sculptural staircase in a warm minimal premium residence.",
    },
  },
];

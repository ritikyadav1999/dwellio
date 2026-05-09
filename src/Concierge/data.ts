export type ConciergeStep = {
  id: string;
  title: string;
  description: string;
};

export type ConciergeService = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type LifestyleTag = {
  id: string;
  label: string;
};

export type ConciergePageData = {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  advisorName: string;
  advisorRole: string;
  advisorNote: string;
  advisorImage: string;
  steps: ConciergeStep[];
  services: ConciergeService[];
  lifestyles: LifestyleTag[];
};

export const conciergePageData: ConciergePageData = {
  heroTitle: "A more thoughtful way to relocate.",
  heroSubtitle:
    "Experience seamless urban living with personal guidance curated for the discerning professional.",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBmwrhXzfDfAIATX0OcySTodL4k6psG0JYXymDV6qXWVoNtvvSLG-57iqg26S12s5L6zwvcz4ue9bzWqcgjfz54ZNuDODw6V3Wgb7DoLhPUqXkcDZVVTIgJ5a2uDTyuEMGaZmfXy8UZAlQl1OZcg7pqcxrSFUIeC4kpHCMEpyaWRxbx5gjRwp6LpXV7-iJcABeeZX42hMrG5j9-SaBXYrzJjZVZU4nEb_BntwDrsmuoAVGQpU1k-MCpbNEso-22V8j9zWUP82ImDjQ",
  advisorName: "Sarah Jenkins",
  advisorRole: "Lead Relocation Specialist",
  advisorNote:
    "Relocating should not feel operational. I curate options, simplify decisions, and manage the details so your move feels calm from shortlist to move-in.",
  advisorImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDDjOE1jGEh_ZpFxhaQSE26zORvhqS43NoliOQozrzZ9Qo5RMcUCtx14xtmwL2zZ4N8MJmY_nlK-0JMDCwzo3qxuRelaQITwtqECP-fHPQU4nhLY2gcfplu6s5GdcWoHN-1uGUOZnNDMZ9-uYk96CecEMWm-xMpbbkEbYPcIlTkAunbJ9HIFHl4HW0mhi-MrKKr2wNZv-kkAhZWsy7om44Tx0giI6cpxopWdzrJ1oZBuEey7A8JaKtZ4d9E2LfMr1HmkV3grvXGnAo",
  steps: [
    {
      id: "discover",
      title: "Discover",
      description: "A short consultation to map your lifestyle, commute, and move-in goals.",
    },
    {
      id: "curate",
      title: "Curate",
      description: "A vetted shortlist aligned to your priorities and comfort preferences.",
    },
    {
      id: "visit",
      title: "Visit",
      description: "Coordinated tours with neighborhood and building context in one flow.",
    },
    {
      id: "move-in",
      title: "Move In",
      description: "White-glove support for documentation, setup, and onboarding details.",
    },
  ],
  services: [
    {
      id: "search",
      title: "Personalized Home Search",
      description:
        "We filter the market to only considered residences that match your constraints and lifestyle.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBAAyiUTrADDV9h1I0QwcmvliwsGWhN_qWMigfHrVMeM1fXLdL6ZTE7wXHZ1n4LttTdJi2EzMNKRwJlcXi9VjLNTJ-6kNRueoCmi9VvVvf7KK52b99KwXbKemlRDIi6wJZzHsb-0eeZBf3D7tIMqlGPuA3SgP5ZCqoBtGqK4M4u2gGRaCkzVkXi4KfLGsGUc7jQyE1CR2GIyLhkQyHviTEM8y0YMQYfiJwWFe1Nl2ZLE-8q56MhAAFCAUInkru7hCkIN-RSIGmfEwE",
    },
    {
      id: "visits",
      title: "Visit Coordination",
      description: "Scheduling, route optimization, and hosted walkthroughs tailored to your time.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAz31szDARJuBa5lkXFe_knXgynDA5O_qf6g6jOPSoepTleURgI2Fm1PN2w0kmoLrO79nJtIJRf5KWJgxIlrqnO9djRV-FWFPrDx82TPNZ4NB8vQlqHVY9E4eCnl6tUNrvQSp-St3CZtih_tRoYaR7-W7YEEZ7a7ZFxZ29PTt-J58ZW31xURRDkGPbJp1s3HQPt3_hsMdZV5f-dbEdHnJN9fJEpuHBhdaI0Vq3nORpx_gdVv2R90MVKPYwUlX-ULCEzv14ld5EkH2o",
    },
    {
      id: "neighborhood",
      title: "Neighborhood Guidance",
      description: "Practical insight into commute, amenities, and day-to-day rhythm before you decide.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDM9uZQylv5_PPokgxyra5R3Ck0TYQ7Pg0saKuMitzWJlISwhQv6MmYmBjwF82YqdZwk6_c-uzz-zPgUVPq39ch-5I-X8pc4l50yVuI6Jc-d9SaY3tlGTvKuV35bnjOYlPe4Fp7YW4aCfrdyeoi-B3TdufxDmrGJCYVYolbMVsYLwhxKvsq3OtlYjbO5fRa-cTpss4Ru66efCSjLVW_Nb47o9mrRpniJdgkyvj7ogX2rRsh0Hzp_kQTNpAaoP1r_gk_skM1yB4gM68",
    },
  ],
  lifestyles: [
    { id: "remote", label: "Remote Executive" },
    { id: "quiet", label: "Quiet Enclaves" },
    { id: "culinary", label: "Culinary Centers" },
    { id: "wellness", label: "Wellness Focused" },
    { id: "pet", label: "Pet Friendly" },
  ],
};

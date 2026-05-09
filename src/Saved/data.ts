export type SavedHome = {
  id: string;
  propertyId: string;
  title: string;
  city: string;
  monthlyRentLabel: string;
  imageSrc: string;
  imageAlt: string;
  verified: boolean;
  href: string;
};

export type VisitAdvisor = {
  name: string;
  role: string;
  avatarSrc: string;
};

export type UpcomingVisit = {
  id: string;
  propertyId: string;
  dateTimeLabel: string;
  propertyTitle: string;
  locationLabel: string;
  imageSrc: string;
  imageAlt: string;
  advisor: VisitAdvisor;
};

export type ConciergeAction = {
  id: string;
  label: string;
};

export type SavedPreference = {
  id: string;
  label: string;
  active: boolean;
};

export type SavedPageData = {
  heroTitle: string;
  heroDescription: string;
  heroImageSrc: string;
  heroImageAlt: string;
  savedHomes: SavedHome[];
  upcomingVisit: UpcomingVisit;
  conciergeTitle: string;
  conciergeDescription: string;
  conciergeActions: ConciergeAction[];
  preferences: SavedPreference[];
};

export const savedPageData: SavedPageData = {
  heroTitle: "Welcome back, Ritik.",
  heroDescription:
    "Your curated selection of architectural residences and upcoming concierge visits are ready for your review.",
  heroImageSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDM9uZQylv5_PPokgxyra5R3Ck0TYQ7Pg0saKuMitzWJlISwhQv6MmYmBjwF82YqdZwk6_c-uzz-zPgUVPq39ch-5I-X8pc4l50yVuI6Jc-d9SaY3tlGTvKuV35bnjOYlPe4Fp7YW4aCfrdyeoi-B3TdufxDmrGJCYVYolbMVsYLwhxKvsq3OtlYjbO5fRa-cTpss4Ru66efCSjLVW_Nb47o9mrRpniJdgkyvj7ogX2rRsh0Hzp_kQTNpAaoP1r_gk_skM1yB4gM68",
  heroImageAlt: "Serene editorial architecture with soft daylight.",
  savedHomes: [
    {
      id: "home_1",
      propertyId: "lavelle-road-penthouse",
      title: "Lavelle Road Penthouse",
      city: "Bengaluru, KA",
      monthlyRentLabel: "INR 2.4L",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDV27tcqdkuxo1SeEhNgJQhs_FyNkRkqxrHCpnN-onHjjlAyo4vTqHVIMBHOWqBe_g-EgKGB0oIbrDl7R0Hv5402TuoJxUUePhADOQBopIcWNyUIe5YtXOBXW45HnF19VzpFeGKrDJpV4_So1og2bMRRFmJEZwlgtMJKOFvT6KdJrbQyKqm30B8vVDj5V9z2xyL0hXUiZzhXCAZAVbWDLBbxtGYEX4_Xo2hDjuBl73MwKQNYFr_YerCHGx-nha9R-QamyhujX3ULuQ",
      imageAlt: "Lavelle Road Penthouse terrace with cityscape views.",
      verified: true,
      href: "/properties/whitefield-penthouse",
    },
    {
      id: "home_2",
      propertyId: "indiranagar-townhouse",
      title: "Indiranagar Townhouse",
      city: "Bengaluru, KA",
      monthlyRentLabel: "INR 1.8L",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBwVM9SVWXkhOEK_vadK0ATdHMLCpJC_0kqwpah_SkKE2rLStw1Zov-LEPXGaelHKlbsFB1rVdL5ttOrSI98RSVqAji02BxT6Gn10g2TUYqiXmbBgWl36vS6pcoIdOUlhsEyaVY59ifXAePBMZeQIhTNbjd_FhR_G5dKwzfpv--sT4dwJT0Ab9xI5gkOrNu5nzHZkiK3bgbFR7TVfkOJL7bPJeZ1btx_-2iVPoH1O9fdCkGAXWCph8heWOQh9etZiajFOrynfSH8LI",
      imageAlt: "Indiranagar Townhouse interior with sculptural staircase.",
      verified: true,
      href: "/properties/indiranagar-residence",
    },
  ],
  upcomingVisit: {
    id: "visit_1",
    propertyId: "lavelle-road-penthouse",
    dateTimeLabel: "Thursday, Nov 12 - 4:30 PM",
    propertyTitle: "Lavelle Road Penthouse",
    locationLabel: "Main Entrance Reception",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAz31szDARJuBa5lkXFe_knXgynDA5O_qf6g6jOPSoepTleURgI2Fm1PN2w0kmoLrO79nJtIJRf5KWJgxIlrqnO9djRV-FWFPrDx82TPNZ4NB8vQlqHVY9E4eCnl6tUNrvQSp-St3CZtih_tRoYaR7-W7YEEZ7a7ZFxZ29PTt-J58ZW31xURRDkGPbJp1s3HQPt3_hsMdZV5f-dbEdHnJN9fJEpuHBhdaI0Vq3nORpx_gdVv2R90MVKPYwUlX-ULCEzv14ld5EkH2o",
    imageAlt: "Luxury building entrance for scheduled visit.",
    advisor: {
      name: "Rajesh V.",
      role: "Your Portfolio Advisor",
      avatarSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAcGkGDFlC88YQ1DurImS9Kp0FVlcXjf1J1KszG6g9eNsxRa8VD-dO_8-hUrOV1kmIi-S9b3yWcuGvyw2Iw45Sc8ogM0fodb3NNDs_jNk3qtTK6vf_ve58eEDGr00m8HAKgfjuUQHBzzYwUn_aYatgtYZvIepoLm3qocYz7y0Y48gtBf1jTlNTflwLGn70YGqHXAG2F9yiRbe2O8q1ZzgxPXwlDMSpyQVPJ4aZDOcl3AcTrayhBDHbclmEgEMCp7nOIVce1_EQA_Tc",
    },
  },
  conciergeTitle: "Concierge Service",
  conciergeDescription:
    "Need a customized search or a private chauffeur for your visits? Our team is at your disposal.",
  conciergeActions: [
    { id: "private-tour", label: "Request Private Tour" },
    { id: "bespoke-curation", label: "Bespoke Curation" },
  ],
  preferences: [
    { id: "remote-worker", label: "Remote Worker", active: true },
    { id: "quiet-living", label: "Quiet Living", active: true },
    { id: "verified-only", label: "Verified Homes Only", active: true },
  ],
};

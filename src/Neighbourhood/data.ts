export type NeighbourhoodData = {
  name: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  featured?: boolean;
  heroBadges: Array<{ icon: string; label: string }>;
  editorialTitle: string;
  editorialParagraphs: string[];
  rentPG: string;
  rent1BHK: string;
  walkabilityRating: string;
  walkabilityDescription: string;
  commuteRating: string;
  commuteDescription: string;
  pros: Array<{ title: string; description: string }>;
  cons: Array<{ title: string; description: string }>;
  idealFor: string;
  notIdealFor: string;
  highlights: Array<{
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  }>;
  venues: Array<{
    name: string;
    category: "cafe" | "coworking" | "park" | "dining" | "nightlife" | "fitness";
    description: string;
    image: string;
    imageAlt: string;
  }>;
};

export const neighbourhoodData: NeighbourhoodData[] = [
  {
    name: "HSR Layout",
    slug: "hsr-layout",
    description: "Startup energy meets walkable cafe culture.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCW0nt5mlUOhO8MoKIenBCAEJfwQNhO8opgofM0sZbXKYWxAIEdWTpUy8EFa4I2ZHdu2QhNTeCKAqiot2AAzXz7gHBtmASbq2GKA2VuHW9MKkZTDEozm7q0W6wM7tOm9E6gogO27pV7pZFU7q_ZYg7798Zmv7AjCAi2JCTuDtX2oc3qiZwljRUpXuS7a2cqD4yFFW24Q08-pj6OKzw0XilnI3Ae9jMnlKo3mt3i910gr0d0uye4UKK-Inyy-4OwUwDvHzOgB7tEbso",
    imageAlt:
      "Bright cafe street with work-friendly spaces and greenery in HSR Layout.",
    tags: ["Tech Hub", "Walkable"],
    featured: true,
    heroBadges: [
      { icon: "laptop", label: "Best for Tech Workers" },
      { icon: "wallet", label: "Mid-Premium Budget" },
      { icon: "footprints", label: "Walkable" },
    ],
    editorialTitle: "What Living Here Feels Like",
    editorialParagraphs: [
      "Mornings in HSR begin with the scent of artisanal coffee drifting through canopy-covered streets. It is a neighbourhood that pulses with ambition yet retains a startlingly suburban calm. Startups hum in every corner, turning independent cafes into impromptu boardrooms where the next big idea is sketched on napkins.",
      "Weekends shift gears. The tech chatter fades into relaxed brunches, long walks under ancient banyans, and a vibrant community life. It is an urban ecosystem designed for the modern professional who demands both high energy and sanctuary.",
    ],
    rentPG: "₹8k+",
    rent1BHK: "₹20k+",
    walkabilityRating: "High",
    walkabilityDescription: "Grid layout makes navigating easy.",
    commuteRating: "Centralized Hub",
    commuteDescription:
      "Excellent connectivity to Koramangala and Outer Ring Road tech parks.",
    pros: [
      {
        title: "Vibrant Cafe Culture",
        description: "Endless options for socializing or remote work.",
      },
      {
        title: "Startup Ecosystem",
        description: "Networking opportunities at your doorstep.",
      },
    ],
    cons: [
      {
        title: "Peak-hour Traffic",
        description: "Inner grid roads can congest heavily during evening hours.",
      },
    ],
    idealFor:
      "Startup Founders & Remote Workers looking for an active, highly networked environment.",
    notIdealFor:
      "Those seeking absolute quiet, suburban seclusion, or wide-open spaces away from commercial buzz.",
    highlights: [
      {
        title: "Cafe Culture",
        description:
          "From Third Wave Roasters to quiet indie spots, the coffee scene is unparalleled.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBe-0CRLz5ajDJiL4R553o8kp1GsX9HlIvySjSkDYtMn0k2rvc3iK3jJiqHjpRWX53hg1JIjssftll5thRqCBBZHHYByA7hX_iFdjTvKsBwiu-RdhaaxxFRhJj6vFwjf4zKKdgTr_hmZqxBCsTBDzFoWNMwLnUTYqghG_LCGirl_gfmulvCBJTTNnU0NA890MNYNbKbDKq7FMF_94HQuP1a7WpmWHk8ZE6r93uDoEM_-fTtBP8sJi9ge0SSzOzAGibFCy9SUk-qTPM",
        imageAlt:
          "Bright minimalist cafe interior with natural sunlight and modern wooden furniture.",
      },
      {
        title: "Fitness Hubs",
        description:
          "Premium gyms, yoga studios, and expansive parks support an active lifestyle.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD9nO94kl38FMUKEJaX-Q4VwsmPfsV1dWopEByhnI0Zl3Tgq5qYX_M-o_TmTg0RMaHlTIl0QRhF4SHp5lC1oD6jagMunzfAjV0y1YDL8y9uP6BgwOvriWco9tm3m80wknzwu2ET_Gch3UpSMQyhTaM6sDeVxIpZiPzVt4tP7Rc428BBPFLbTCt-ci6rwXf27gslUoeMIdeplpfk2F9EpRde2aEPMsR2Pe_ZF2EcBKGHVL82NG5HdO6zt3ytQr365LVRnrSSBSKgeU0",
        imageAlt:
          "Clean modern fitness studio with expansive windows and sleek equipment.",
      },
      {
        title: "Coworking Spaces",
        description:
          "Dens of innovation dotted across every sector, fostering collaboration.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDfZZFDVbdTfYhQDcKCh0-UQj45CR6yLjiLTIszP85DX-PUNV1i-kpfL5Y6n6M8FHz5SbuBhQF8nYWXnzqiV3kAMZ1LKIGUjPMc2dVRI13XCVBCQ6OuPPvRNtJlb10qZDeQ-Te9nAmplhOhMySnd-cYt1a4KE3557lHTBVwpOWMxlix_mp7fPYfImy8jJZ2bgw-cYz6oK0w76npTou3Ej52EcuCmPXquaQifUgDwg8A63UyOTSCrKXtMs-a_7_LBCPoY247p0tR5zs",
        imageAlt:
          "Expansive coworking space with high ceilings and minimalist desks.",
      },
    ],
    venues: [
      {
        name: "Matteo Coffea",
        category: "cafe",
        description: "Artisanal coffee in a rustic, plant-filled space.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
        imageAlt: "Rustic cafe interior with plants.",
      },
      {
        name: "HSR Urban Forest",
        category: "park",
        description: "A green lung in the middle of the sector grid.",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
        imageAlt: "Lush urban park with walking paths.",
      },
      {
        name: "Byg Brewski Brewing",
        category: "dining",
        description: "Craft beer and wood-fired pizzas in a massive open-air setup.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
        imageAlt: "Open-air brewery dining space.",
      },
      {
        name: "WeWork HSR",
        category: "coworking",
        description: "Premium coworking with skyline views and networking events.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
        imageAlt: "Modern coworking space with natural light.",
      },
      {
        name: "Cult.fit HSR",
        category: "fitness",
        description: "High-energy group workouts and functional training.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
        imageAlt: "Fitness studio with workout equipment.",
      },
      {
        name: "Cafe Felix",
        category: "cafe",
        description: "A cozy spot known for its all-day breakfast and specialty brews.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
        imageAlt: "Cozy cafe with all-day breakfast.",
      },
    ],
  },
  {
    name: "Koramangala",
    slug: "koramangala",
    description: "The city's vibrant dining and nightlife epicenter.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDi30S4d3g3Mb2tzsy_RWkpwSVcSNF0cXD7jpFxt8nE9y03CMUZ67HxxQhTb7LCCrOIrUs_WVP6oQexnqhn00w2vHFm1s_Ody6zXH1fWeFqAFmt3Sn7_HuS7VvkYeOKcudXLXn61qDyu2n5RSJASCAvHwdhMVE8kvFSNdnCYVHJLqeG0ndzbACDfFvjfitdmVHU5BViY3JEt0Zl2yeSUv14FC2ZDlDeUtZ5Y0pIkVPO_64I_gGeJOXXjFZd9f2ypYebrKv9y7L2Rm0",
    imageAlt:
      "Evening street scene with refined restaurants and boutiques in Koramangala.",
    tags: ["Nightlife", "Dining", "Bustling"],
    heroBadges: [
      { icon: "users", label: "Best for Social Life" },
      { icon: "wallet", label: "Mid-Premium Budget" },
      { icon: "footprints", label: "Walkable" },
    ],
    editorialTitle: "What Living Here Feels Like",
    editorialParagraphs: [
      "Koramangala is where Bangalore comes alive after sunset. The streets pulse with the energy of a young, cosmopolitan crowd that moves seamlessly from coworking desks by day to rooftop bars by night. Every lane hides a new gastropub, a vintage vinyl store, or a hole-in-the-wall biryani joint that locals swear by.",
      "Despite the buzz, pockets of calm remain. Quiet residential bylanes shaded by gulmohar trees offer a retreat just steps from the main drag. It is the neighbourhood for those who believe life should be lived out loud but still crave a doorstep sanctuary.",
    ],
    rentPG: "₹10k+",
    rent1BHK: "₹22k+",
    walkabilityRating: "High",
    walkabilityDescription:
      "Dense commercial streets make everything accessible on foot.",
    commuteRating: "Well Connected",
    commuteDescription:
      "Quick access to major tech corridors and a short drive to the central business district.",
    pros: [
      {
        title: "Vibrant Dining Scene",
        description:
          "From street food to fine dining, every craving is covered.",
      },
      {
        title: "Young Crowd",
        description:
          "A thriving community of students, founders, and creatives keeps the energy high.",
      },
      {
        title: "Shopping Access",
        description:
          "Boutique stores and major retail hubs are within easy reach.",
      },
    ],
    cons: [
      {
        title: "Noise Levels",
        description:
          "Main roads can get loud, especially on weekends.",
      },
    ],
    idealFor:
      "Young professionals, foodies, and social butterflies who thrive on energy and connection.",
    notIdealFor:
      "Families seeking quiet evenings, or those who prefer wide-open suburban spaces.",
    highlights: [
      {
        title: "Dining Scene",
        description:
          "A culinary playground with everything from craft breweries to legendary street stalls.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDi30S4d3g3Mb2tzsy_RWkpwSVcSNF0cXD7jpFxt8nE9y03CMUZ67HxxQhTb7LCCrOIrUs_WVP6oQexnqhn00w2vHFm1s_Ody6zXH1fWeFqAFmt3Sn7_HuS7VvkYeOKcudXLXn61qDyu2n5RSJASCAvHwdhMVE8kvFSNdnCYVHJLqeG0ndzbACDfFvjfitdmVHU5BViY3JEt0Zl2yeSUv14FC2ZDlDeUtZ5Y0pIkVPO_64I_gGeJOXXjFZd9f2ypYebrKv9y7L2Rm0",
        imageAlt:
          "Evening street scene with refined restaurants and boutiques in Koramangala.",
      },
      {
        title: "Shopping",
        description:
          "Boutique stores, concept shops, and major retail hubs at your doorstep.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBe-0CRLz5ajDJiL4R553o8kp1GsX9HlIvySjSkDYtMn0k2rvc3iK3jJiqHjpRWX53hg1JIjssftll5thRqCBBZHHYByA7hX_iFdjTvKsBwiu-RdhaaxxFRhJj6vFwjf4zKKdgTr_hmZqxBCsTBDzFoWNMwLnUTYqghG_LCGirl_gfmulvCBJTTNnU0NA890MNYNbKbDKq7FMF_94HQuP1a7WpmWHk8ZE6r93uDoEM_-fTtBP8sJi9ge0SSzOzAGibFCy9SUk-qTPM",
        imageAlt:
          "Bright modern boutique store interior with elegant displays.",
      },
      {
        title: "Nightlife",
        description:
          "Rooftop bars, live music venues, and cocktail lounges define the after-dark experience.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD9nO94kl38FMUKEJaX-Q4VwsmPfsV1dWopEByhnI0Zl3Tgq5qYX_M-o_TmTg0RMaHlTIl0QRhF4SHp5lC1oD6jagMunzfAjV0y1YDL8y9uP6BgwOvriWco9tm3m80wknzwu2ET_Gch3UpSMQyhTaM6sDeVxIpZiPzVt4tP7Rc428BBPFLbTCt-ci6rwXf27gslUoeMIdeplpfk2F9EpRde2aEPMsR2Pe_ZF2EcBKGHVL82NG5HdO6zt3ytQr365LVRnrSSBSKgeU0",
        imageAlt:
          "Sophisticated rooftop bar with ambient lighting and city views.",
      },
    ],
    venues: [
      {
        name: "Third Wave Coffee Roasters",
        category: "cafe",
        description: "Specialty coffee brewed with precision in a minimalist space.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
        imageAlt: "Minimalist coffee roastery interior.",
      },
      {
        name: "Toit",
        category: "dining",
        description: "Bangalore's iconic microbrewery with a lively beer garden.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
        imageAlt: "Lively microbrewery beer garden.",
      },
      {
        name: "Loft 38",
        category: "nightlife",
        description: "Rooftop bar with panoramic views and creative cocktails.",
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
        imageAlt: "Rooftop bar with city skyline view.",
      },
      {
        name: "Smoke House Deli",
        category: "dining",
        description: "Chic European-style deli known for its pastas and desserts.",
        image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600&q=80",
        imageAlt: "Chic European-style deli interior.",
      },
      {
        name: "WeWork Galaxy",
        category: "coworking",
        description: "A bustling coworking hub in the heart of Koramangala.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
        imageAlt: "Busy coworking space with modern furniture.",
      },
      {
        name: "Starbucks Reserve",
        category: "cafe",
        description: "Premium coffee experience with rare single-origin brews.",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
        imageAlt: "Premium coffee bar with rustic decor.",
      },
      {
        name: "Koramangala Park",
        category: "park",
        description: "A well-maintained community park popular with joggers.",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
        imageAlt: "Green community park with walking paths.",
      },
      {
        name: "Arena 29",
        category: "nightlife",
        description: "Underground club hosting live indie music and DJ nights.",
        image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&q=80",
        imageAlt: "Underground music club with live performance.",
      },
    ],
  },
  {
    name: "Indiranagar",
    slug: "indiranagar",
    description: "Tree-lined avenues with a chic, established charm.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMrYBqvgHSdRQAUKtGPeEhDEkV3abuLd54Cgmt6q_ZVOf0ZkF8ch7uPf32K6wzjq5x6sFsNBD8SlY1m7vu_h-eOvWKlL7vMHQf8NeJ1QceNpd5iTFjMlBadT4CCa-LSQrM5R81494ICZgH4GmVhbQA-e6qmSSEmwQsDziDqNcf39NIBVJbMB2GsCplgipsLH1TGTGmuQadOwmJ8p0wdPbtLNo0hxtyjDtWoX_PJdD6sGQLy2jOwrh9SGNWMid6pOvToTINe3sFvpY",
    imageAlt:
      "Calm residential lane with mature trees and premium homes in Indiranagar.",
    tags: ["Premium", "Boutiques"],
    heroBadges: [
      { icon: "home", label: "Best for Families" },
      { icon: "wallet", label: "Premium Budget" },
      { icon: "tree-pine", label: "Leafy & Green" },
    ],
    editorialTitle: "What Living Here Feels Like",
    editorialParagraphs: [
      "Indiranagar wears its age gracefully. Wide, tree-canopied avenues shelter a neighbourhood that has grown from a quiet residential enclave into Bangalore's most sophisticated address. Here, the pace is deliberate — mornings begin with filter coffee on verandahs, and evenings unwind at wine bars tucked inside restored bungalows.",
      "There is an understated confidence to Indiranagar. It does not need to shout. Boutique stores, art galleries, and farm-to-table restaurants appear organically between old bakeries and neighbourhood parks. It is a place for those who have outgrown the frenzy and now seek depth, comfort, and quiet luxury.",
    ],
    rentPG: "₹12k+",
    rent1BHK: "₹25k+",
    walkabilityRating: "Moderate",
    walkabilityDescription: "Spread-out layout rewards explorers on foot.",
    commuteRating: "Central Location",
    commuteDescription:
      "Excellent metro connectivity and a short drive to most commercial hubs.",
    pros: [
      {
        title: "Tree-lined Streets",
        description:
          "Mature greenery creates a calm, established atmosphere rare in the city.",
      },
      {
        title: "Boutique Shopping",
        description:
          "Curated independent stores offer a more refined retail experience.",
      },
      {
        title: "Peaceful Ambience",
        description:
          "Residential pockets remain quiet despite the neighbourhood's popularity.",
      },
    ],
    cons: [
      {
        title: "Higher Rent",
        description:
          "Premium living comes at a premium price point.",
      },
      {
        title: "100ft Road Traffic",
        description:
          "The main arterial road can get congested during peak hours.",
      },
    ],
    idealFor:
      "Families and established professionals seeking a refined, peaceful lifestyle with easy city access.",
    notIdealFor:
      "Budget-conscious renters or those craving the high-energy buzz of a startup neighbourhood.",
    highlights: [
      {
        title: "Boutique Shopping",
        description:
          "Independent concept stores and designer boutiques line the quieter streets.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBMrYBqvgHSdRQAUKtGPeEhDEkV3abuLd54Cgmt6q_ZVOf0ZkF8ch7uPf32K6wzjq5x6sFsNBD8SlY1m7vu_h-eOvWKlL7vMHQf8NeJ1QceNpd5iTFjMlBadT4CCa-LSQrM5R81494ICZgH4GmVhbQA-e6qmSSEmwQsDziDqNcf39NIBVJbMB2GsCplgipsLH1TGTGmuQadOwmJ8p0wdPbtLNo0hxtyjDtWoX_PJdD6sGQLy2jOwrh9SGNWMid6pOvToTINe3sFvpY",
        imageAlt:
          "Calm residential lane with mature trees and premium homes in Indiranagar.",
      },
      {
        title: "Parks & Greenery",
        description:
          "Well-maintained neighbourhood parks offer a daily dose of nature and calm.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDfZZFDVbdTfYhQDcKCh0-UQj45CR6yLjiLTIszP85DX-PUNV1i-kpfL5Y6n6M8FHz5SbuBhQF8nYWXnzqiV3kAMZ1LKIGUjPMc2dVRI13XCVBCQ6OuPPvRNtJlb10qZDeQ-Te9nAmplhOhMySnd-cYt1a4KE3557lHTBVwpOWMxlix_mp7fPYfImy8jJZ2bgw-cYz6oK0w76npTou3Ej52EcuCmPXquaQifUgDwg8A63UyOTSCrKXtMs-a_7_LBCPoY247p0tR5zs",
        imageAlt:
          "Lush green park with walking paths and mature trees under soft sunlight.",
      },
      {
        title: "Fine Dining",
        description:
          "Restaurant row on 12th Main offers some of the city's most celebrated kitchens.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBe-0CRLz5ajDJiL4R553o8kp1GsX9HlIvySjSkDYtMn0k2rvc3iK3jJiqHjpRWX53hg1JIjssftll5thRqCBBZHHYByA7hX_iFdjTvKsBwiu-RdhaaxxFRhJj6vFwjf4zKKdgTr_hmZqxBCsTBDzFoWNMwLnUTYqghG_LCGirl_gfmulvCBJTTNnU0NA890MNYNbKbDKq7FMF_94HQuP1a7WpmWHk8ZE6r93uDoEM_-fTtBP8sJi9ge0SSzOzAGibFCy9SUk-qTPM",
        imageAlt:
          "Elegant fine dining restaurant with warm lighting and refined table settings.",
      },
    ],
    venues: [
      {
        name: "Arbor Brewing Company",
        category: "nightlife",
        description: "American microbrewery with a sprawling outdoor patio.",
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
        imageAlt: "Microbrewery outdoor patio with string lights.",
      },
      {
        name: "Smoke House Deli",
        category: "dining",
        description: "Upscale European dining in a restored bungalow setting.",
        image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600&q=80",
        imageAlt: "Upscale dining room in a restored bungalow.",
      },
      {
        name: "12th Main Park",
        category: "park",
        description: "A leafy neighbourhood park perfect for evening strolls.",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
        imageAlt: "Leafy neighbourhood park with walking paths.",
      },
      {
        name: "Matteo Coffea",
        category: "cafe",
        description: "Quiet corner for remote work with excellent pour-over coffee.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
        imageAlt: "Quiet cafe with pour-over coffee setup.",
      },
      {
        name: "The Yoga Barn",
        category: "fitness",
        description: "Holistic yoga and meditation studio set in a calm space.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
        imageAlt: "Yoga studio with natural light and wooden floors.",
      },
      {
        name: "Burma Burma",
        category: "dining",
        description: "Pure vegetarian Burmese cuisine in an elegant tea-house setting.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
        imageAlt: "Elegant tea-house restaurant interior.",
      },
      {
        name: "Starbucks 100ft Road",
        category: "cafe",
        description: "Convenient coffee stop on the main Indiranagar drag.",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
        imageAlt: "Coffee shop interior with warm lighting.",
      },
    ],
  },
];

export const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDrdKqEyt2KDS_j66wMfySF4WdGbCqE6iLx1kMv5XItP4vfukGA3386t2tYhjSq4vzg-6Y5nDSPDM04HbvIvq4ROxuCVbTQMikNSk7Aav4YFfksIMNHPT_RYkVPqHout4E54is6EGml5CksXcLvJGbUzHK1rMkttQ1r-M-ei6u17X8iFGllMPBO4PROxX3w3c_GaMM9CfsUMbnJ1-EK0yQzO9W0f8KN1AuQ7VWn0qplUYkKP5tfyK9Kdd7FG43HzT6HkYl1lOnjwyA";
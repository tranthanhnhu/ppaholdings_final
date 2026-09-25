export const SECTOR_SLUGS = [
  "agriculture",
  "food-processing",
  "natural-materials",
  "trading",
  "real-estate",
] as const;

export type SectorSlug = (typeof SECTOR_SLUGS)[number];

export const sectorMeta: Record<
  SectorSlug,
  {
    key: string;
    index: number;
    journeyIndex: number;
    images: {
      hero: string;
      activity: string;
      perspective: string;
      companies: [string, string];
    };
    companyHrefs: [string, string];
    related: [SectorSlug, SectorSlug];
  }
> = {
  agriculture: {
    key: "agriculture",
    index: 1,
    journeyIndex: 0,
    images: {
      hero: "/images/sectors/agriculture-hero.png",
      activity: "/images/sectors/agriculture-activity.png",
      perspective: "/images/sectors/agriculture-perspective.png",
      companies: [
        "/images/sectors/agriculture-company-1.png",
        "/images/sectors/agriculture-company-2.png",
      ],
    },
    companyHrefs: ["/our-business/paa-agro", "/our-business/agriculture"],
    related: ["natural-materials", "food-processing"],
  },
  "food-processing": {
    key: "food",
    index: 2,
    journeyIndex: 2,
    images: {
      hero: "/images/sectors/food-hero.png",
      activity: "/images/sectors/food-activity.png",
      perspective: "/images/sectors/agriculture-perspective.png",
      companies: [
        "/images/business/company-03.png",
        "/images/business/company-07.png",
      ],
    },
    companyHrefs: ["/our-business/food-processing", "/our-business/food-processing"],
    related: ["agriculture", "trading"],
  },
  "natural-materials": {
    key: "materials",
    index: 3,
    journeyIndex: 1,
    images: {
      hero: "/images/sectors/materials-hero.png",
      activity: "/images/sectors/materials-activity.png",
      perspective: "/images/sectors/agriculture-perspective.png",
      companies: [
        "/images/business/company-02.png",
        "/images/business/company-08.png",
      ],
    },
    companyHrefs: [
      "/our-business/natural-materials",
      "/our-business/natural-materials",
    ],
    related: ["agriculture", "food-processing"],
  },
  trading: {
    key: "trading",
    index: 4,
    journeyIndex: 3,
    images: {
      hero: "/images/sectors/trading-hero.png",
      activity: "/images/sectors/trading-activity.png",
      perspective: "/images/sectors/agriculture-perspective.png",
      companies: [
        "/images/business/company-04.png",
        "/images/business/company-03.png",
      ],
    },
    companyHrefs: ["/our-business/trading", "/our-business/trading"],
    related: ["food-processing", "real-estate"],
  },
  "real-estate": {
    key: "realEstate",
    index: 5,
    journeyIndex: 4,
    images: {
      hero: "/images/sectors/real-estate-hero.png",
      activity: "/images/sectors/real-estate-activity.png",
      perspective: "/images/sectors/agriculture-perspective.png",
      companies: [
        "/images/business/company-05.png",
        "/images/business/company-05.png",
      ],
    },
    companyHrefs: ["/our-business/real-estate", "/our-business/real-estate"],
    related: ["trading", "agriculture"],
  },
};

export function isSectorSlug(value: string): value is SectorSlug {
  return (SECTOR_SLUGS as readonly string[]).includes(value);
}

export const sectorHref = (slug: SectorSlug) => `/our-business/${slug}`;

export const relatedImages: Record<SectorSlug, string> = {
  agriculture: "/images/sectors/agriculture-hero.png",
  "food-processing": "/images/sectors/related-food.png",
  "natural-materials": "/images/sectors/related-materials.png",
  trading: "/images/sectors/trading-hero.png",
  "real-estate": "/images/sectors/real-estate-hero.png",
};

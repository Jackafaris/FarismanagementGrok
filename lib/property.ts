export const company = {
  name: "Faris Management",
  tagline: "Saint Louis area rental homes, personally managed.",
  email: "shirinefaris@gmail.com",
  phone: "(480) 388-6136",
  phoneHref: "tel:+14803886136",
  serviceArea: "Greater Saint Louis, Missouri",
};

export type PropertyImage = {
  src: string;
  alt: string;
};

export const featuredProperty = {
  id: "930-bellestri",
  address: "930 Bellestri Dr",
  city: "Ballwin, MO",
  zip: "63021",
  neighborhood: "West St. Louis County",
  rent: null as number | null,
  bedrooms: 3,
  bathrooms: 2.5,
  sqft: 1756,
  type: "Split-Level Single-Family Home",
  available: "Available Now",
  zillowUrl:
    "https://www.zillow.com/homedetails/930-Bellestri-Dr-Ballwin-MO-63021/2846739_zpid/",
  mapUrl: "https://maps.google.com/?q=930+Bellestri+Dr+Ballwin+MO+63021",
  description:
    "Welcome to 930 Bellestri Dr — a 3 bedroom, 2.5 bath split-level home with 1,756 sq ft in Ballwin's West County area. This well-maintained rental features updated wood-look flooring, a cozy fireplace, a bright kitchen with stainless appliances, multiple bathrooms, a two-car garage, and a backyard storage shed.",
  features: [
    "3 bedrooms, 2.5 bathrooms",
    "1,756 sq ft split-level layout",
    "Updated wood-look flooring throughout",
    "Living room with fireplace",
    "Kitchen with stainless appliances",
    "Two-car garage",
    "Backyard storage shed",
    "Ballwin / West St. Louis County location",
  ],
  images: [
    {
      src: "/property/FrontPicture.webp",
      alt: "Front exterior of 930 Bellestri Dr with mailbox and two-car garage",
    },
    {
      src: "/property/frontdoor.webp",
      alt: "Front entry door with decorative glass sidelights",
    },
    {
      src: "/property/foyerroom.webp",
      alt: "Entry foyer with stairs and updated flooring",
    },
    {
      src: "/property/fireplace.webp",
      alt: "Living room with fireplace and updated flooring",
    },
    {
      src: "/property/livingroom.webp",
      alt: "Bright living room with large window",
    },
    {
      src: "/property/frontdoorstairs.webp",
      alt: "Upper landing with staircase and natural light",
    },
    {
      src: "/property/Bedroom1.webp",
      alt: "Bedroom with ceiling fan and wood-look flooring",
    },
    {
      src: "/property/kitchen.webp",
      alt: "Kitchen with light cabinets, blue countertops, and stainless appliances",
    },
    {
      src: "/property/kitchen2.webp",
      alt: "Kitchen breakfast bar and sink area",
    },
    {
      src: "/property/Kitchen.webp",
      alt: "Kitchen and dining pass-through view",
    },
    {
      src: "/property/Bathroom1.webp",
      alt: "Bathroom with pedestal sink and tub",
    },
    {
      src: "/property/Bathroom2.webp",
      alt: "Bathroom with tiled tub surround and mosaic floor",
    },
    {
      src: "/property/bathroom2.webp",
      alt: "Bathroom with vanity, tub, and tile flooring",
    },
    {
      src: "/property/outside-barn.webp",
      alt: "Backyard storage shed",
    },
  ] satisfies PropertyImage[],
};

export const propertyLabel = `${featuredProperty.address}, ${featuredProperty.city} ${featuredProperty.zip}`;

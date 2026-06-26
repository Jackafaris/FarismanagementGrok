export const company = {
  name: "Faris Management",
  tagline: "Saint Louis area rental homes, personally managed.",
  email: "shirinefaris@gmail.com",
  phone: "(480) 388-6136",
  phoneHref: "tel:+14803886136",
  serviceArea: "Greater Saint Louis, Missouri",
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
  type: "Single-Family Home",
  available: "Available Now",
  zillowUrl:
    "https://www.zillow.com/homedetails/930-Bellestri-Dr-Ballwin-MO-63021/2846739_zpid/",
  mapUrl: "https://maps.google.com/?q=930+Bellestri+Dr+Ballwin+MO+63021",
  description:
    "Welcome to 930 Bellestri Dr — a 3 bedroom, 2.5 bath home with 1,756 sq ft in Ballwin's West County area. This is a well-located Saint Louis metro rental in a quiet residential neighborhood with convenient access to Parkway schools, Manchester Road, and major highways.",
  features: [
    "3 bedrooms, 2.5 bathrooms",
    "1,756 sq ft of living space",
    "Ballwin / West St. Louis County location",
    "Quiet residential neighborhood",
    "Responsive local management",
    "Professional tenant screening",
  ],
  images: [
    "/property/exterior-1.jpg",
    "/property/exterior-2.jpg",
    "/property/interior-1.jpg",
    "/property/interior-2.jpg",
    "/property/kitchen.jpg",
  ],
};

export const propertyLabel = `${featuredProperty.address}, ${featuredProperty.city} ${featuredProperty.zip}`;

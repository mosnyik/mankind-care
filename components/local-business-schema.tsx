import { site } from "@/lib/site";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SocialServiceCenter"],
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Newark",
      addressRegion: "NJ",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Newark, New Jersey",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "15:00",
      },
    ],
    makesOffer: [
      "Adult Day Habilitation",
      "Respite Care",
      "Individual Support",
      "Community Based Support",
      "Community Inclusion",
      "Prevocational Training",
      "Supported Employment",
      "Behavior Management",
      "Career Planning",
      "Natural Supports Training",
      "Home Care",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Uni Learn",
    url: "https://www.uni-learn.online",
    logo: "https://www.uni-learn.online/logo.png",
    description:
      "Online learning platform where learners build their own path with projects, mentors, and collaborative learning experiences.",
    sameAs: ["https://twitter.com/unilearn", "https://facebook.com/unilearn", "https://linkedin.com/company/unilearn"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "support@unilearn.com",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Uni Learn",
    url: "https://www.uni-learn.online",
    description: "Online learning platform with expert mentors and project-based learning",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.uni-learn.online/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const educationalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Uni Learn",
    url: "https://www.uni-learn.online",
    description: "Online learning platform offering mentorship and project-based education",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Learning Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Mentorship Programs",
            description: "One-on-one mentorship with industry experts",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Project-Based Learning",
            description: "Hands-on learning through real-world projects",
          },
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganizationSchema) }}
      />
    </>
  )
}

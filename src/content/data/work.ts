export interface WorkItem {
  company: string;
  title: string;
  year: string;
  tags: string[];
  description: string;
  images: string[];
  technologies: string[];
  slug?: string;
}

export const workItems: WorkItem[] = [
  {
    company: "Shopify",
    title: "Software Engineer",
    year: "2021 - 2025",
    tags: ["Frontend", "Full-Stack", "Analytics"],
    description:
      "Led major frontend and full-stack initiatives across Shopify's Analytics and Product Taxonomy platforms, including the architecture for Unified Analytics and the frontend implementation of the Standard Product Taxonomy.",
    images: ["shopify1.png", "shopify2.png", "shopify3.png"],
    technologies: ["TypeScript", "React", "GraphQL", "Ruby on Rails"],
    slug: "shopify",
  },
  {
    company: "conDati",
    title: "Sr. UI Engineer",
    year: "2018 - 2021",
    tags: ["Lead UI Developer", "Infrastructure", "Design"],
    description:
      "Apply AI and Machine Learning algorithms to build analytic solutions that transform massive volumes of customer, event, and transaction data into accessible dashboards, alerts and automatic reports",
    images: ["condati1.jpg", "condati2.jpg", "condati3.jpg"],
    technologies: ["React", "TypeScript", "JavaScript", "Python", "Redux"],
    slug: "condati",
  },
  {
    company: "Akamai mPulse",
    title: "Software Engineer II",
    year: "2017 - 2018",
    tags: ["UI Developer", "Design"],
    description:
      "Get granular visibility into how end users perceive performance, and take action against third-party resources that are slowing you down. Maximize your business outcomes by prioritizing enhancements that matter.",
    images: ["akamai1.jpg", "akamai2.jpg", "akamai3.jpg"],
    technologies: ["JavaScript", "React", "Redux"],
    slug: "akamai",
  },
  {
    company: "SOASTA",
    title: "Software Engineer",
    year: "2015 - 2017",
    tags: ["Lead Designer", "Wordpress Developer"],
    description:
      "Cloud-based testing services, and created a browser-based website testing product. Website tests include load testing, software performance testing, functional testing and user interface testing.",
    images: ["soasta1.jpg", "soasta2.jpg", "soasta3.jpg"],
    technologies: ["JavaScript", "Wordpress"],
    slug: "soasta",
  },
];

export const siteConfig = {
  name: "B4Digital",
  description:
    "B4Digital is a results-driven SEO agency helping businesses dominate search results with proven strategies in technical SEO, on-page optimization, off-page authority building, and local SEO.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://b4digital.com",
  ogImage: "/og-image.png",
  email: "hello@b4digital.com",
  phone: "(555) 123-4567",
  location: "New York, NY",
  businessHours: "Mon-Fri: 9AM - 6PM EST",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#benefits" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    title: "Technical SEO",
    description:
      "We optimize your site's foundation — speed, crawlability, indexation, and structured data — so search engines can find and rank your content.",
    icon: "Settings" as const,
    points: [
      "Site speed optimization",
      "Core Web Vitals improvement",
      "Schema markup implementation",
      "Crawl error resolution",
    ],
  },
  {
    title: "On-Page SEO",
    description:
      "Strategic keyword targeting and content optimization that aligns your pages with what your audience is searching for.",
    icon: "FileText" as const,
    points: [
      "Keyword research & mapping",
      "Content optimization",
      "Meta tag optimization",
      "Internal linking strategy",
    ],
  },
  {
    title: "Off-Page SEO",
    description:
      "Build domain authority through high-quality backlinks, digital PR, and brand mentions that signal trust to search engines.",
    icon: "Link" as const,
    points: [
      "Link building campaigns",
      "Digital PR outreach",
      "Brand mention monitoring",
      "Competitor backlink analysis",
    ],
  },
  {
    title: "Local SEO",
    description:
      "Dominate local search results and Google Maps to drive foot traffic and local leads to your business.",
    icon: "MapPin" as const,
    points: [
      "Google Business Profile optimization",
      "Local citation building",
      "Review management",
      "Local keyword targeting",
    ],
  },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Audit & Discovery",
    description:
      "We perform a comprehensive analysis of your website, competitors, and market to identify opportunities and gaps.",
  },
  {
    step: 2,
    title: "Strategy",
    description:
      "Based on our findings, we build a custom SEO roadmap with clear priorities, timelines, and measurable goals.",
  },
  {
    step: 3,
    title: "Execution",
    description:
      "Our team implements technical fixes, content optimizations, and link building campaigns with precision and speed.",
  },
  {
    step: 4,
    title: "Reporting & Optimization",
    description:
      "Monthly reporting with transparent metrics. We continuously refine our approach based on real performance data.",
  },
] as const;

export const benefits = [
  {
    title: "Data-Driven Approach",
    description:
      "Every decision is backed by analytics and real search data, not guesswork.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Monthly reports with clear metrics so you always know exactly where you stand.",
  },
  {
    title: "Dedicated Team",
    description:
      "A dedicated SEO specialist assigned to your account who understands your business inside out.",
  },
  {
    title: "Proven Results",
    description:
      "Track record of delivering measurable improvements in rankings, traffic, and revenue.",
  },
] as const;

export const stats = [
  { value: "150+", label: "Clients Served" },
  { value: "300%", label: "Avg. Traffic Increase" },
  { value: "50+", label: "Industries Covered" },
  { value: "98%", label: "Client Retention" },
] as const;

export const caseStudies = [
  {
    client: "E-Commerce Retailer",
    metric: "+250% Organic Traffic",
    description:
      "Transformed an underperforming online store into a search powerhouse with technical SEO overhaul and strategic content optimization.",
    period: "12 months",
  },
  {
    client: "Local Service Business",
    metric: "+180% Local Leads",
    description:
      "Dominated the local 3-pack and drove a surge in qualified leads through Google Business Profile optimization and local content strategy.",
    period: "8 months",
  },
  {
    client: "SaaS Company",
    metric: "+400% Blog Traffic",
    description:
      "Built a content engine that drives thousands of monthly visitors and converts them into trial sign-ups through targeted keyword strategy.",
    period: "6 months",
  },
] as const;

export const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term strategy. Most clients begin to see meaningful improvements within 3-6 months, with significant results typically appearing by months 6-12. The timeline depends on your industry's competitiveness, your website's current state, and the scope of work.",
  },
  {
    question: "What makes B4Digital different from other SEO agencies?",
    answer:
      "We combine data-driven strategies with transparent reporting. Every client gets a dedicated SEO specialist, monthly performance reports, and a custom strategy — not a cookie-cutter approach. We focus on sustainable, white-hat techniques that build lasting results.",
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer:
      "No reputable SEO agency can guarantee specific rankings — search algorithms are complex and constantly evolving. What we do guarantee is a data-driven approach, transparent communication, and a relentless focus on improving your organic visibility and traffic.",
  },
  {
    question: "How much does SEO cost?",
    answer:
      "Our SEO packages are tailored to your business size, goals, and competitive landscape. We offer flexible plans starting from monthly retainers. Contact us for a free consultation and custom quote based on your specific needs.",
  },
  {
    question: "What SEO tools do you use?",
    answer:
      "We leverage industry-leading tools including Google Search Console, Google Analytics, Ahrefs, SEMrush, Screaming Frog, and proprietary analytics platforms to provide comprehensive insights and track performance.",
  },
  {
    question: "Can you help with website redesigns?",
    answer:
      "Absolutely. We work closely with development teams during redesigns to ensure SEO best practices are maintained. This includes URL mapping, redirect planning, content migration, and technical SEO audits before and after launch.",
  },
  {
    question: "Do you provide content writing services?",
    answer:
      "Yes, our team includes experienced SEO content writers who create optimized blog posts, landing pages, and website copy that ranks well and converts visitors into customers.",
  },
  {
    question: "How do you report on progress?",
    answer:
      "You'll receive detailed monthly reports covering keyword rankings, organic traffic, backlink growth, technical health scores, and conversion metrics. We also schedule regular calls to discuss strategy and results.",
  },
] as const;

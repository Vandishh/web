import { PortfolioDetailPage } from './PortfolioDetailPage';

export function RankzyAIPage() {
  return (
    <PortfolioDetailPage
      title="RANKZY AI - AI Visibility Optimization Platform"
      keywords="AI SEO, AI Visibility, Large Language Model Optimization, AI Search Ranking"
      serviceOverview="Rankzy AI is the world's first comprehensive AI Visibility Optimization Platform that helps businesses dominate AI-powered search and recommendations across ChatGPT, Claude, Google Gemini, and Perplexity. Transform your digital presence from traditional SEO to AI-first discovery."
      coreFeatures={[
        "Multi-Stage AI Prompt Testing: Test prompts across Top-of-Funnel (TOFU), Middle-of-Funnel (MOFU), and Bottom-of-Funnel (BOFU) buyer journey stages",
        "AI Brand Mention Detection: Advanced algorithms analyze brand presence across multiple AI model responses",
        "Competitor AI Tracking: Monitor how competitors rank in AI recommendations and responses",
        "Citation Analysis & Optimization: Track which websites AI models cite and reference for your industry",
        "Automated Website Intelligence: Extract metadata, content analysis, and structured data optimization",
        "Multi-Provider AI Testing: Comprehensive testing across OpenAI GPT, Anthropic Claude, Google Gemini, and Perplexity AI"
      ]}
      technicalSpecs={[
        {
          title: "Backend",
          items: [
            "Node.js with Express.js framework",
            "MongoDB database",
            "Docker containerization"
          ]
        },
        {
          title: "Frontend",
          items: [
            "Next.js 15 with React 19",
            "Radix UI components",
            "Tailwind CSS",
            "Recharts analytics"
          ]
        },
        {
          title: "AI Integration",
          items: [
            "Multiple AI provider APIs with real-time testing capabilities"
          ]
        },
        {
          title: "Authentication",
          items: [
            "JWT-based security with role-based access control"
          ]
        },
        {
          title: "Analytics",
          items: [
            "Real-time dashboards with performance metrics and trend analysis"
          ]
        }
      ]}
      pricingPlans={[
        {
          name: "Free Plan",
          description: "3 analyses, 10 prompts, basic AI visibility features"
        },
        {
          name: "Pro Plan",
          description: "50 analyses, 200 prompts, multi-provider access, competitor tracking"
        },
        {
          name: "Business Plan",
          description: "200 analyses, 1000 prompts, team collaboration, advanced analytics"
        },
        {
          name: "Enterprise Plan",
          description: "Unlimited analyses, all AI providers, custom integrations, dedicated support"
        }
      ]}
      targetIndustries={[
        "B2B SaaS Companies seeking AI-powered product recommendations",
        "E-commerce Brands optimizing for AI shopping assistants",
        "Professional Services enhancing AI visibility for business recommendations",
        "Technology Companies positioning in AI-driven technical queries",
        "Marketing Agencies offering cutting-edge AI optimization services"
      ]}
      roiBenefits={[
        "Future-proof marketing strategy for AI-first discovery",
        "Data-driven competitive intelligence in AI responses",
        "Actionable insights with specific implementation guidance",
        "Real-time monitoring of AI visibility performance",
        "First-mover advantage in emerging AI optimization market"
      ]}
    />
  );
}


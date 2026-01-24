import { PortfolioDetailPage } from './PortfolioDetailPage';

export function PodAIClipforgePage() {
  return (
    <PortfolioDetailPage
      title="POD AI (CLIPFORGE) - AI Content Creation & Repurposing Platform"
      keywords="AI Content Creation, Video Generation, Content Repurposing, Social Media Automation"
      serviceOverview="POD AI (ClipForge) is an all-in-one AI-powered content creation platform that transforms any content format into professional videos, social media posts, presentations, and more. Revolutionize content marketing with intelligent automation and brand consistency."
      coreFeatures={[
        "Text-to-Video Creation: Convert written scripts into professional videos with AI avatars",
        "Voice AI Technology: Speech-to-text conversion, text-to-speech with natural voices, voice cloning",
        "Social Media AI: Generate Instagram and LinkedIn posts with branded images and hashtag optimization",
        "AI Image Generation: Create custom branded visuals from text descriptions",
        "Document AI: Transform content into professional presentations with brand consistency",
        "Content Conversion: Blog-to-video, video-to-social clips, cross-format repurposing"
      ]}
      advancedFeatures={[
        "Multiple AI Avatars: Professional, casual, executive, teacher, and custom avatar styles",
        "Multi-Voice Options: Male, female, AI-generated, and custom voice cloning capabilities",
        "Brand Customization: Logo integration and color scheme consistency across all content",
        "Platform Optimization: Multiple aspect ratios (16:9, 9:16, 1:1) for different social platforms",
        "Script Studio: Rich text editor with AI generation and real-time voiceover preview",
        "Analytics Dashboard: Performance tracking, usage metrics, and ROI measurement"
      ]}
      technicalSpecs={[
        {
          title: "Frontend",
          items: [
            "Next.js 16 with App Router",
            "React 19",
            "TypeScript",
            "Tailwind CSS with shadcn/ui"
          ]
        },
        {
          title: "State Management",
          items: [
            "Zustand for global state",
            "Recharts for analytics visualization"
          ]
        },
        {
          title: "Authentication",
          items: [
            "JWT with bcryptjs security"
          ]
        },
        {
          title: "Database",
          items: [
            "Mongoose (MongoDB) for scalable data management"
          ]
        },
        {
          title: "Deployment",
          items: [
            "Docker support with docker-compose for production environments"
          ]
        }
      ]}
      pricingPlans={[
        {
          name: "Starter Pack",
          description: "$10 for 100 credits (voice-to-text: 2 credits, AI images: 5 credits)"
        },
        {
          name: "Creator Pack",
          description: "$25 for 300 credits + 50 bonus (Most Popular - social posts: 3-4 credits)"
        },
        {
          name: "Pro Pack",
          description: "$45 for 600 credits + 150 bonus (AI videos: 25-35 credits)"
        },
        {
          name: "Enterprise",
          description: "$100 for 1500 credits + 500 bonus (presentations: 12-15 credits)"
        }
      ]}
      targetIndustries={[
        "Content Creators (YouTubers, podcasters, social media influencers)",
        "Digital Marketing Teams requiring scalable content production",
        "Small-to-Medium Businesses needing professional branded content",
        "Educational Professionals creating training and course materials",
        "Entrepreneurs and Solo Creators building personal brands"
      ]}
      competitiveAdvantages={[
        "Multi-format AI processing in single platform (text, voice, video, images, documents)",
        "Deep brand integration for consistent professional presentation",
        "Credit-based pricing eliminates unused subscription waste",
        "Platform-specific optimization for YouTube, TikTok, Instagram, LinkedIn",
        "No technical skills required with intuitive user interface"
      ]}
    />
  );
}


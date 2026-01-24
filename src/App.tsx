import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { CapabilityMatrixPage } from './components/CapabilityMatrixPage';
import { PortfolioPage } from './components/PortfolioPage';
import { RankzyAIPage } from './components/portfolio/RankzyAIPage';
import { PodAIClipforgePage } from './components/portfolio/PodAIClipforgePage';
import { NVTrustGPUAttestationPage } from './components/portfolio/NVTrustGPUAttestationPage';
import { HTICUDAAccelerationPage } from './components/portfolio/HTICUDAAccelerationPage';
import { ContactPage } from './components/ContactPage';
import { BrochurePage } from './components/BrochurePage';
import { PlaceholderPage } from './components/PlaceholderPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { CookiePolicyPage } from './components/CookiePolicyPage';
import { SecurityPolicyPage } from './components/SecurityPolicyPage';
import { AboutUsPage } from './components/AboutUsPage';
import { PageTransition } from './components/PageTransition';
import { ScrollProgress } from './components/ScrollProgress';
import { AnimatePresence } from 'motion/react';
import { AIAutomationPage } from './components/services/AIAutomationPage';
import { AIGPUOptimizationPage } from './components/services/AIGPUOptimizationPage';
import { RAGApplicationsPage } from './components/services/RAGApplicationsPage';
import { DevOpsCloudPage } from './components/services/DevOpsCloudPage';
import { DevOpsDevSecOpsPage } from './components/services/DevOpsDevSecOpsPage';
import { VAPTPage } from './components/services/VAPTPage';
import { ProductEngineeringPage } from './components/services/ProductEngineeringPage';
import { AIAgenticPage } from './components/services/AIAgenticPage';
import { CustomDevelopmentPage } from './components/services/CustomDevelopmentPage';
import { CyberSecurityPage } from './components/services/CyberSecurityPage';
import { EdgeComputingPage } from './components/services/EdgeComputingPage';
import { CICDAutomationPage } from './components/services/CICDAutomationPage';
import { ComplianceRiskPage } from './components/services/ComplianceRiskPage';
import { MicroSaaSPage } from './components/services/MicroSaaSPage';
import { HealthTechPage } from './components/solutions/HealthTechPage';
import { FoodTechPage } from './components/solutions/FoodTechPage';
import { EnvironmentTechPage } from './components/solutions/EnvironmentTechPage';
import { RetailTechPage } from './components/solutions/RetailTechPage';
import { SupplyChainPage } from './components/solutions/SupplyChainPage';
import { FinTechPage } from './components/solutions/FinTechPage';
import { LegalTaxPage } from './components/solutions/LegalTaxPage';
import { AIForSalesPage } from './components/industry/AIForSalesPage';
import { AIForLegalPage } from './components/industry/AIForLegalPage';
import { AIForAccountingPage } from './components/industry/AIForAccountingPage';
import { AIForHealthcarePage } from './components/industry/AIForHealthcarePage';
import { AIForMarketingPage } from './components/industry/AIForMarketingPage';
import { AIForRnDPage } from './components/industry/AIForRnDPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/capability" element={<PageTransition><CapabilityMatrixPage /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
        <Route path="/portfolio/rankzy-ai" element={<PageTransition><RankzyAIPage /></PageTransition>} />
        <Route path="/portfolio/pod-ai-clipforge" element={<PageTransition><PodAIClipforgePage /></PageTransition>} />
        <Route path="/portfolio/nvtrust-gpu-attestation" element={<PageTransition><NVTrustGPUAttestationPage /></PageTransition>} />
        <Route path="/portfolio/hti-cuda-acceleration" element={<PageTransition><HTICUDAAccelerationPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/brochure" element={<PageTransition><BrochurePage /></PageTransition>} />

        {/* Service Routes */}
        <Route path="/services/ai-automation" element={<PageTransition><AIAutomationPage /></PageTransition>} />
        <Route path="/services/ai-gpu-optimization" element={<PageTransition><AIGPUOptimizationPage /></PageTransition>} />
        <Route path="/services/rag-applications" element={<PageTransition><RAGApplicationsPage /></PageTransition>} />
        <Route path="/services/devops-cloud" element={<PageTransition><DevOpsCloudPage /></PageTransition>} />
        <Route path="/services/devops-devsecops" element={<PageTransition><DevOpsDevSecOpsPage /></PageTransition>} />
        <Route path="/services/vapt" element={<PageTransition><VAPTPage /></PageTransition>} />
        <Route path="/services/product-engineering" element={<PageTransition><ProductEngineeringPage /></PageTransition>} />
        <Route path="/services/ai-agentic-systems" element={<PageTransition><AIAgenticPage /></PageTransition>} />
        <Route path="/services/custom-development" element={<PageTransition><CustomDevelopmentPage /></PageTransition>} />
        <Route path="/services/cyber-security" element={<PageTransition><CyberSecurityPage /></PageTransition>} />
        <Route path="/services/edge-computing" element={<PageTransition><EdgeComputingPage /></PageTransition>} />
        <Route path="/services/cicd-automation" element={<PageTransition><CICDAutomationPage /></PageTransition>} />
        <Route path="/services/compliance-risk" element={<PageTransition><ComplianceRiskPage /></PageTransition>} />
        <Route path="/services/micro-saas" element={<PageTransition><MicroSaaSPage /></PageTransition>} />

        {/* Solution Routes */}
        <Route path="/solutions/healthtech" element={<PageTransition><HealthTechPage /></PageTransition>} />
        <Route path="/solutions/foodtech" element={<PageTransition><FoodTechPage /></PageTransition>} />
        <Route path="/solutions/environmenttech" element={<PageTransition><EnvironmentTechPage /></PageTransition>} />
        <Route path="/solutions/retail-tech" element={<PageTransition><RetailTechPage /></PageTransition>} />
        <Route path="/solutions/supply-chain" element={<PageTransition><SupplyChainPage /></PageTransition>} />
        <Route path="/solutions/fintech" element={<PageTransition><FinTechPage /></PageTransition>} />
        <Route path="/solutions/legal-and-tax" element={<PageTransition><LegalTaxPage /></PageTransition>} />

        <Route path="/ai-for-industry/sales" element={<PageTransition><AIForSalesPage /></PageTransition>} />
        <Route path="/ai-for-industry/legal" element={<PageTransition><AIForLegalPage /></PageTransition>} />
        <Route path="/ai-for-industry/accounting" element={<PageTransition><AIForAccountingPage /></PageTransition>} />
        <Route path="/ai-for-industry/healthcare" element={<PageTransition><AIForHealthcarePage /></PageTransition>} />
        <Route path="/ai-for-industry/marketing" element={<PageTransition><AIForMarketingPage /></PageTransition>} />
        <Route path="/ai-for-industry/rnd" element={<PageTransition><AIForRnDPage /></PageTransition>} />

        {/* About Us routes */}
        <Route path="/about/portfolio" element={<PageTransition><AboutUsPage /></PageTransition>} />
        <Route path="/about/blog" element={<PageTransition><PlaceholderPage title="Blog" description="Stay updated with the latest insights, trends, and best practices in AI, machine learning, and GPU optimization." /></PageTransition>} />
        <Route path="/about/career" element={<PageTransition><PlaceholderPage title="Careers" description="Join our world-class team of AI engineers and data scientists. Build the future of AI optimization with AlgoTells." /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutUsPage /></PageTransition>} />
        
        {/* Placeholder routes */}
        <Route path="/careers" element={<PageTransition><PlaceholderPage title="Careers" description="Join our world-class team of AI engineers and data scientists. Build the future of AI optimization with AlgoTells." /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><PlaceholderPage title="Blog" description="Stay updated with the latest insights, trends, and best practices in AI, machine learning, and GPU optimization." /></PageTransition>} />
        <Route path="/news" element={<PageTransition><PlaceholderPage title="News" description="Read the latest news, announcements, and press releases from AlgoTells." /></PageTransition>} />
        <Route path="/docs" element={<PageTransition><PlaceholderPage title="Documentation" description="Technical documentation, API references, and implementation guides for AlgoTells's AI solutions." /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><PlaceholderPage title="Resources" description="Access whitepapers, research papers, and technical resources from AlgoTells's AI experts." /></PageTransition>} />
        <Route path="/api" element={<PageTransition><PlaceholderPage title="API Reference" description="Complete API documentation and integration guides for AlgoTells's AI platform." /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PrivacyPolicyPage /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><TermsOfServicePage /></PageTransition>} />
        <Route path="/cookies" element={<PageTransition><CookiePolicyPage /></PageTransition>} />
        <Route path="/security" element={<PageTransition><SecurityPolicyPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-dark)' }}>
        <Navigation />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

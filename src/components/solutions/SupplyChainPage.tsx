import { DetailLayout } from '../DetailLayout';

export function SupplyChainPage() {
    return (
        <DetailLayout
            title="Supply Chain Solutions"
            description="Optimize, automate, and forecast your supply chain with AI-powered precision. Improve visibility, reduce costs, and eliminate operational bottlenecks."
            whatWeOffer={[
                "Demand Forecasting & Inventory Optimization: Machine learning models to predict demand patterns and maintain optimal stock.",
                "Route & Logistics Optimization: Real-time routing algorithms that reduce transport time and cost.",
                "Warehouse Automation & Vision AI: Object detection for inventory counting, quality checks, and process automation.",
                "Digital Twins for Supply Chain: Scenario simulations for performance, risk, and resource planning.",
                "End-to-End Visibility Dashboards: Unified tracking for procurement, distribution, and last-mile delivery."
            ]}
            benefits={[
                "Improved visibility across supply chain",
                "Reduced operational costs",
                "Eliminated bottlenecks",
                "Optimized inventory levels",
                "Enhanced logistics efficiency"
            ]}
            benefitsTitle="Benefits"
            type="Solution"
        />
    );
}

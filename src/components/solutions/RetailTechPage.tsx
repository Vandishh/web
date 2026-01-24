import { DetailLayout } from '../DetailLayout';

export function RetailTechPage() {
    return (
        <DetailLayout
            title="Retail Tech Solutions"
            description="Reimagine retail with AI-driven personalization, automation, and predictive intelligence."
            whatWeOffer={[
                "Customer Personalization Engines: AI-based recommendation systems for e-commerce and in-store experiences.",
                "Sales Forecasting & Pricing Optimization: Predict product performance and optimize pricing strategies.",
                "Computer Vision for Retail: Shelf-scanning, inventory tracking, and automated checkouts.",
                "Chatbots & Customer Support Automation: Personalized assistance that improves conversion and engagement.",
                "Store Performance Analytics: Insights into footfall, customer behavior, and sales patterns."
            ]}
            benefits={[
                "Enhanced customer personalization",
                "Optimized pricing strategies",
                "Automated retail operations",
                "Improved customer engagement",
                "Data-driven store insights"
            ]}
            benefitsTitle="Benefits"
            type="Solution"
        />
    );
}

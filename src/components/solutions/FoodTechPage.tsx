import { DetailLayout } from '../DetailLayout';

export function FoodTechPage() {
    return (
        <DetailLayout
            title="FoodTech Solutions"
            description="Modernize food operations with AI systems that improve safety, quality, production, and consumer experience."
            whatWeOffer={[
                "Food Quality Detection (Vision AI): Identify defects, spoilage, and contamination using image-based analysis.",
                "Production & Yield Optimization: Predict equipment performance, reduce wastage, and optimize output.",
                "Supply Chain Traceability: Track source-to-table journeys with AI-integrated systems.",
                "Menu Personalization & Demand Forecasting: AI models for restaurant chains, cloud kitchens, and food delivery apps.",
                "Smart Agriculture Integration: Crop monitoring, soil insights, and precision farming using AI."
            ]}
            benefits={[
                "Improved food safety and quality",
                "Reduced production wastage",
                "Enhanced traceability",
                "Optimized demand forecasting",
                "Precision farming capabilities"
            ]}
            benefitsTitle="Benefits"
            type="Solution"
        />
    );
}

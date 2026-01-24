import { DetailLayout } from '../DetailLayout';

export function EnvironmentTechPage() {
    return (
        <DetailLayout
            title="EnvironmentTech Solutions"
            description="Use AI to monitor, predict, and protect the environment. Our solutions empower sustainable decision-making for governments, enterprises, and ESG-driven companies."
            whatWeOffer={[
                "Carbon Footprint Analysis: AI models that track, calculate, and forecast emissions across operations.",
                "Climate & Weather Prediction Models: GPU-accelerated forecasting engines for climate risk assessment.",
                "Smart Energy Management: Optimization systems for renewable energy production and usage.",
                "Waste Management Automation: Vision AI for waste classification and recycling automation.",
                "Environmental Monitoring Dashboards: Real-time data visualization from IoT sensors and satellite feeds."
            ]}
            benefits={[
                "Sustainable decision-making",
                "Accurate emission tracking",
                "Climate risk assessment",
                "Optimized energy usage",
                "Real-time environmental monitoring"
            ]}
            benefitsTitle="Benefits"
            type="Solution"
        />
    );
}

import { DetailLayout } from '../DetailLayout';

export function HealthTechPage() {
    return (
        <DetailLayout
            title="HealthTech Solutions"
            description="Empower healthcare providers with AI-driven insights, predictive analytics, and automated workflows. Our HealthTech solutions enhance clinical decision-making, patient experience, and operational efficiency."
            whatWeOffer={[
                "AI-Powered Diagnostics: Deep-learning models for early detection of diseases, imaging analysis (X-ray, CT, MRI), and risk prediction.",
                "Predictive Care & Patient Monitoring: Real-time analytics from wearable devices and IoT sensors to track vitals and prevent emergencies.",
                "EHR Automation & Optimization: Intelligent data extraction, summarization, and interoperability for seamless patient record management.",
                "Virtual Assistants for Hospitals: AI chatbots for appointment scheduling, triage support, and patient engagement.",
                "Drug Discovery & Clinical Insights: Accelerated research using GPU-optimized computational models."
            ]}
            benefits={[
                "Enhanced clinical decision-making",
                "Improved patient experience",
                "Operational efficiency gains",
                "Early disease detection",
                "Seamless patient record management"
            ]}
            benefitsTitle="Benefits"
            type="Solution"
        />
    );
}

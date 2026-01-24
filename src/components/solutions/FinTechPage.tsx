import { DetailLayout } from '../DetailLayout';

export function FinTechPage() {
    return (
        <DetailLayout
            title="FinTech Solutions"
            description="Accelerate financial innovation with secure, intelligent, and scalable AI systems designed for modern financial institutions."
            whatWeOffer={[
                "Fraud Detection & Risk Scoring: Real-time anomaly detection models to identify fraudulent activities.",
                "AI-Driven Credit Underwriting: Automated credit scoring using alternative data and behavioral analytics.",
                "Automated Compliance & KYC: Document verification, identity validation, AML monitoring, and regulatory automation.",
                "Robo-Advisors & Investment Insights: Personalized portfolio recommendations powered by predictive models.",
                "Payment Optimization Systems: Faster transaction routing and intelligent error handling."
            ]}
            benefits={[
                "Enhanced security and fraud prevention",
                "Automated compliance processes",
                "Intelligent credit decisions",
                "Personalized investment recommendations",
                "Optimized payment processing"
            ]}
            benefitsTitle="Benefits"
            type="Solution"
        />
    );
}

import { DetailLayout } from '../DetailLayout';

export function CustomDevelopmentPage() {
    return (
        <DetailLayout
            title="Custom Development"
            description="We build software tailored exactly to your business needs."
            whatWeOffer={[
                "Custom web apps",
                "Custom dashboards",
                "Business automation",
                "API and backend development"
            ]}
            benefits={[
                "Perfect fit",
                "Scalable",
                "Secure and reliable"
            ]}
            type="Service"
        />
    );
}

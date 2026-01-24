import { DetailLayout } from '../DetailLayout';

export function ProductEngineeringPage() {
    return (
        <DetailLayout
            title="Product Engineering"
            description="We build modern, scalable products from frontend to backend."
            whatWeOffer={[
                "Full-stack development",
                "Mobile app development",
                "API integration",
                "QA & testing"
            ]}
            benefits={[
                "Faster development",
                "High-quality code",
                "Smooth user experience"
            ]}
            type="Service"
        />
    );
}

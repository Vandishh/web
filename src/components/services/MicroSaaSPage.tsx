import { DetailLayout } from '../DetailLayout';

export function MicroSaaSPage() {
    return (
        <DetailLayout
            title="Micro-SaaS Development"
            description="Build focused, scalable micro-SaaS solutions that solve specific business problems with rapid development and deployment."
            whatWeOffer={[
                "Micro-SaaS product design and development",
                "Rapid MVP development and iteration",
                "Subscription and billing system integration",
                "Multi-tenant architecture",
                "API development and integration",
                "User authentication and authorization",
                "Analytics and reporting dashboards",
                "Scalable cloud infrastructure"
            ]}
            benefits={[
                "Faster time to market",
                "Lower development costs",
                "Focused and efficient solutions",
                "Easy to scale and maintain",
                "Quick iteration and updates"
            ]}
            type="Service"
        />
    );
}











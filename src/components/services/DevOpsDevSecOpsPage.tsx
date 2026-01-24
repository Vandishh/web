import { DetailLayout } from '../DetailLayout';

export function DevOpsDevSecOpsPage() {
    return (
        <DetailLayout
            title="DevOps & DevSecOps"
            description="We help teams deploy, manage, and scale applications using modern cloud and DevOps practices while integrating security at every stage of development."
            whatWeOffer={[
                "CI/CD pipelines with security integration",
                "Kubernetes setup and management",
                "Infrastructure as Code",
                "Cloud architecture design",
                "Code security scanning",
                "Automated vulnerability checks",
                "Policy management",
                "Security hardening"
            ]}
            benefits={[
                "Faster and safer deployments",
                "High reliability and security",
                "Lower cloud costs",
                "Reduced security risks",
                "Improved compliance"
            ]}
            type="Service"
        />
    );
}

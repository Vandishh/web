import { DetailLayout } from '../DetailLayout';

export function DevOpsCloudPage() {
    return (
        <DetailLayout
            title="DevOps & Cloud Engineering"
            description="We help teams deploy, manage, and scale applications using modern cloud and DevOps practices."
            whatWeOffer={[
                "CI/CD pipelines",
                "Kubernetes setup",
                "Infrastructure as Code",
                "Cloud architecture"
            ]}
            benefits={[
                "Faster deployments",
                "High reliability",
                "Lower cloud cost"
            ]}
            type="Service"
        />
    );
}

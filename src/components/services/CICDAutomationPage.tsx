import { DetailLayout } from '../DetailLayout';

export function CICDAutomationPage() {
    return (
        <DetailLayout
            title="CI/CD Automation"
            description="Streamline your software delivery pipeline with continuous integration and continuous deployment automation that accelerates releases and ensures quality."
            whatWeOffer={[
                "CI/CD pipeline design and implementation",
                "Automated testing and quality gates",
                "Multi-environment deployment automation",
                "Container orchestration and deployment",
                "Automated rollback and recovery",
                "Build and release automation",
                "Integration with version control systems",
                "Performance monitoring and optimization"
            ]}
            benefits={[
                "Faster time to market",
                "Reduced manual errors",
                "Consistent and reliable deployments",
                "Improved code quality",
                "Enhanced team productivity"
            ]}
            type="Service"
        />
    );
}











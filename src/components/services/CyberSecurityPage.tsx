import { DetailLayout } from '../DetailLayout';

export function CyberSecurityPage() {
    return (
        <DetailLayout
            title="Cybersecurity"
            description="Protect your digital assets with advanced security solutions tailored for modern infrastructures."
            whatWeOffer={[
                "Threat detection & monitoring",
                "Security hardening",
                "Incident response",
                "Compliance and risk management"
            ]}
            benefits={[
                "Stronger protection",
                "Reduced vulnerabilities",
                "Better compliance"
            ]}
            benefitsTitle="Benefits"
            type="Service"
        />
    );
}

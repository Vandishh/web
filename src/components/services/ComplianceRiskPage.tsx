import { DetailLayout } from '../DetailLayout';

export function ComplianceRiskPage() {
    return (
        <DetailLayout
            title="Compliance & Risk Management"
            description="Ensure your organization meets regulatory requirements and manages risks effectively with comprehensive compliance and risk management solutions."
            whatWeOffer={[
                "Regulatory compliance assessment and implementation",
                "Risk identification and analysis",
                "Compliance monitoring and reporting",
                "Policy development and enforcement",
                "Audit preparation and support",
                "Data privacy and GDPR compliance",
                "Security compliance frameworks (SOC 2, ISO 27001)",
                "Automated compliance workflows"
            ]}
            benefits={[
                "Reduced compliance risks",
                "Automated compliance processes",
                "Better regulatory alignment",
                "Improved risk visibility",
                "Cost-effective compliance management"
            ]}
            type="Service"
        />
    );
}











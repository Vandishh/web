import { DetailLayout } from '../DetailLayout';

export function LegalTaxPage() {
    return (
        <DetailLayout
            title="Legal & Tax Solutions"
            description="Transform legal and tax workflows with AI assistants, automated document processing, and compliance intelligence."
            whatWeOffer={[
                "AI Contract Review & Summarization: Identify risks, clauses, and inconsistencies instantly using LLM-powered analysis.",
                "Automated Tax Compliance: Intelligent systems to track tax rules, generate reports, and reduce manual errors.",
                "Legal Research Automation: AI that scans case laws, regulations, and documents within seconds.",
                "Document Classification & Extraction: OCR + AI for structured output from complex legal/tax documents.",
                "Litigation Prediction Models: Data-driven insights to support lawyers and compliance teams."
            ]}
            benefits={[
                "Streamlined legal workflows",
                "Automated compliance processes",
                "Faster document processing",
                "Reduced manual errors",
                "Data-driven legal insights"
            ]}
            benefitsTitle="Benefits"
            type="Solution"
        />
    );
}

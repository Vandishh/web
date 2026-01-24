import { DetailLayout } from '../DetailLayout';

export function AIAgenticPage() {
    return (
        <DetailLayout
            title="AI Agentic Systems"
            description="Automate tasks and workflows with AI-powered agents and n8n."
            whatWeOffer={[
                "AI workflow automation",
                "Rule-based agents",
                "No-code automation",
                "System integration"
            ]}
            benefits={[
                "Reduce manual work",
                "Better productivity",
                "Easy scaling"
            ]}
            type="Service"
        />
    );
}

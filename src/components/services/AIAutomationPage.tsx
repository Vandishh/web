import { DetailLayout } from '../DetailLayout';

export function AIAutomationPage() {
    return (
        <DetailLayout
            title="AI & Automation"
            description="We build automation systems powered by AI that reduce repetitive tasks, improve decision-making, and increase business efficiency."
            whatWeOffer={[
                "Workflow automation",
                "AI model integration",
                "Intelligent process automation",
                "LLM-powered assistants"
            ]}
            benefits={[
                "Save time",
                "Reduce manual errors",
                "Scale faster"
            ]}
            type="Service"
        />
    );
}

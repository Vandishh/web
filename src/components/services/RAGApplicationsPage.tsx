import { DetailLayout } from '../DetailLayout';

export function RAGApplicationsPage() {
    return (
        <DetailLayout
            title="RAG Applications"
            description="AlgoTells builds Retrieval-Augmented Generation systems that combine retrieval, reasoning, and response—creating AI agents that understand context and deliver answers grounded in your data."
            whatWeOffer={[
                "Text ↔ Voice: Multilingual voice interaction for real-time AI assistance",
                "Text → Video: Convert transcripts and stories into video explainers using AI generation",
                "Meeting Summaries: Automated summaries, action items, and key insights from meetings",
                "Chatbots on Your Data: Context-aware assistants trained on private documents and repositories",
                "AI Summarization: Concise text summarization for long documents and reports"
            ]}
            benefits={[
                "LangChain • Hugging Face • OpenAI • Nuclia • AWS Bedrock"
            ]}
            benefitsTitle="Technologies"
            type="Service"
        />
    );
}

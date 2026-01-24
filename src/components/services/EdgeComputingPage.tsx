import { DetailLayout } from '../DetailLayout';

export function EdgeComputingPage() {
    return (
        <DetailLayout
            title="Edge Computing"
            description="Bring computation and data storage closer to where it's needed with edge computing solutions that reduce latency and improve performance."
            whatWeOffer={[
                "Edge infrastructure design and deployment",
                "Edge AI model deployment and optimization",
                "Real-time data processing at the edge",
                "IoT edge device management",
                "Edge-to-cloud synchronization",
                "Low-latency application architecture",
                "Edge security and compliance"
            ]}
            benefits={[
                "Reduced latency and faster response times",
                "Lower bandwidth costs",
                "Improved data privacy and security",
                "Better performance for real-time applications",
                "Enhanced reliability with offline capabilities"
            ]}
            type="Service"
        />
    );
}











import { DetailLayout } from '../DetailLayout';

export function AIGPUOptimizationPage() {
    return (
        <DetailLayout
            title="AI GPU Optimization & Attestation"
            description="At AlgoTells, we specialize in AI GPU optimization and attestation, helping enterprises achieve faster, more efficient, and verifiable AI performance. Our engineers design custom CUDA pipelines, implement TensorRT optimizations, and fine-tune large language models (LLMs) to reduce latency, energy usage, and compute cost—without sacrificing accuracy."
            whatWeOffer={[
                "Kernel-level GPU tuning for NVIDIA/AMD",
                "LLM fine-tuning, pruning, and quantization (INT8/FP16)",
                "Model compression & inference acceleration",
                "Secure GPU Attestation with nvTrust and JSON evidence verification",
                "Dynamic batching, parallelization & scheduling for multi-node clusters",
                "Energy-efficient computing with up to 40% cost reduction"
            ]}
            benefits={[
                "CUDA • TensorRT • PyTorch • Triton Inference • ONNX • nvTrust"
            ]}
            benefitsTitle="Technologies"
            type="Service"
        />
    );
}

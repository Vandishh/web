import { PortfolioDetailPage } from './PortfolioDetailPage';

export function NVTrustGPUAttestationPage() {
  return (
    <PortfolioDetailPage
      title="NVTRUST GPU ATTESTATION - Secure Hardware Verification System"
      keywords="GPU Security, Hardware Attestation, Confidential Computing, NVIDIA GPU Verification"
      serviceOverview="nvTrust GPU Attestation System provides enterprise-grade secure remote attestation for NVIDIA H100 GPUs using cryptographic verification protocols. Ensure hardware authenticity and integrity for confidential computing workloads with military-grade security."
      coreFeatures={[
        "Dual-Verification Architecture: Server performs cryptographic verification, client independently validates results",
        "Hardware-Rooted Trust: Verification based on GPU's built-in cryptographic capabilities",
        "Tamper Detection: Independent client validation prevents server compromise attacks",
        "Replay Protection: Nonce-based challenge-response prevents replay attack vectors",
        "Standards Compliance: SPDM (Security Protocol and Data Model) protocol compliance"
      ]}
      technicalSpecs={[
        {
          title: "Supported Hardware",
          items: [
            "NVIDIA H100 GPUs with Confidential Computing enabled",
            "Planned Support: H200, B100, B200 (Hopper and Blackwell architectures)",
            "Requirements: NVIDIA Driver 535+ with NVML support",
            "Architecture: ECDSA P-384 with SHA-384 cryptographic signatures"
          ]
        },
        {
          title: "Technical Components",
          items: [
            "nvtrust-server: Remote attestation verification server with RESTful API (Axum web framework)",
            "nvtrust-verifier: Core cryptographic verification library (Pure Rust with WASM support)",
            "nvtrust-client: Client SDK for independent result validation and tamper detection",
            "nvtrust-gpu-agent: GPU data collection agent interfacing with NVIDIA hardware via NVML",
            "nvtrust-sdk: High-level SDK for simplified integration and common use cases"
          ]
        },
        {
          title: "Cryptographic Specifications",
          items: [
            "Signature Algorithm: ECDSA P-384 with SHA-384 hashing",
            "Certificate Source: Authentic NVIDIA GPU certificates via nvmlDeviceGetConfComputeGpuCertificate",
            "Nonce Security: 32-byte cryptographically secure random nonces",
            "Protocol: SPDM with X.509 certificate chain validation"
          ]
        },
        {
          title: "Cross-Platform Support",
          items: [
            "Native Rust: Full-featured implementation for Linux/Windows",
            "WebAssembly (WASM): Browser-compatible verification for web applications",
            "Multiple Architectures: Cross-compilation support for various deployment environments"
          ]
        }
      ]}
      useCases={[
        "Secure Remote Computing: Verify GPU authenticity in cloud environments",
        "Confidential Computing: Ensure GPU integrity for sensitive AI/ML workloads",
        "Supply Chain Security: Authenticate legitimate NVIDIA hardware against counterfeits",
        "Compliance Requirements: Meet security standards for regulated industries (finance, healthcare, government)"
      ]}
      securityGuarantees={[
        "Authenticity: Cryptographic proof of genuine NVIDIA hardware",
        "Integrity: Verification of untampered GPU firmware and configuration",
        "Freshness: Current responses with nonce-based validation",
        "Non-repudiation: ECDSA signatures provide cryptographic attestation proof"
      ]}
      apiExample={`curl -X POST http://localhost:8080/verify \\
  -H "Content-Type: application/json" \\
  -d @attestation_request.json`}
      futureRoadmap={[
        "Intel TDX CPU Attestation: Extension to Intel Trust Domain Extensions",
        "Support: Intel 4th Gen Xeon Scalable Processors (Sapphire Rapids)",
        "Features: SEAMREPORT instruction-based attestation, EAT profile compliance"
      ]}
    />
  );
}


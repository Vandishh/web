import { PolicyPage } from './PolicyPage';

export function SecurityPolicyPage() {
  const content = `
    <p>At AlgoTells, security is a core priority across all our platforms and services.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>1. Our Security Approach</h2>
    <p>We follow industry best practices to ensure:</p>
    <ul>
      <li>Confidentiality of client data</li>
      <li>Integrity of systems and applications</li>
      <li>Availability of services</li>
    </ul>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>2. Security Measures</h2>
    <ul>
      <li>Secure cloud infrastructure</li>
      <li>Encrypted data transmission</li>
      <li>Role-based access control</li>
      <li>Regular security audits and monitoring</li>
      <li>Secure DevOps & DevSecOps practices</li>
    </ul>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>3. Client Responsibility</h2>
    <p>Clients are responsible for:</p>
    <ul>
      <li>Maintaining confidentiality of access credentials</li>
      <li>Ensuring secure usage of delivered solutions</li>
    </ul>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>4. Incident Management</h2>
    <p>In case of a security incident, we follow a structured response process to assess, mitigate, and notify affected parties where required.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>5. Contact for Security Issues</h2>
    <p><a href="mailto:hi@algotells.com">hi@algotells.com</a></p>
  `;

  return (
    <PolicyPage
      title="Security Policy"
      description="Learn about AlgoTells's enterprise-grade security practices and compliance certifications."
      content={content}
    />
  );
}


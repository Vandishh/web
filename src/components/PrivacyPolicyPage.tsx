import { PolicyPage } from './PolicyPage';

export function PrivacyPolicyPage() {
  const content = `
    <p>At AlgoTells Technologies Pvt. Ltd. ("AlgoTells", "we", "our", "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>1. Information We Collect</h2>
    <p>We may collect the following types of information:</p>
    
    <h3>a. Personal Information</h3>
    <ul>
      <li>Name</li>
      <li>Email address</li>
      <li>Phone number</li>
      <li>Company name</li>
      <li>Job title</li>
      <li>Any information you submit via contact forms, demo requests, or inquiries</li>
    </ul>
    
    <h3>b. Technical & Usage Information</h3>
    <ul>
      <li>IP address</li>
      <li>Browser type and version</li>
      <li>Device information</li>
      <li>Pages visited and time spent on our website</li>
      <li>Referring URLs</li>
    </ul>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>2. How We Use Your Information</h2>
    <p>We use the collected information to:</p>
    <ul>
      <li>Respond to inquiries and demo requests</li>
      <li>Provide and improve our services</li>
      <li>Communicate updates, offers, or service-related information</li>
      <li>Analyze website performance and user behavior</li>
      <li>Ensure website security and prevent fraud</li>
    </ul>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>3. Data Sharing & Disclosure</h2>
    <p>We do not sell or rent your personal information.</p>
    <p>We may share information only with:</p>
    <ul>
      <li>Trusted service providers (hosting, analytics, CRM tools)</li>
      <li>Legal or regulatory authorities if required by law</li>
      <li>Internal teams for operational purposes</li>
    </ul>
    <p>All third parties are required to maintain confidentiality and data protection standards.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>4. Data Security</h2>
    <p>We implement industry-standard security measures to protect your information, including:</p>
    <ul>
      <li>Secure servers and encrypted communication</li>
      <li>Restricted access controls</li>
      <li>Regular security monitoring</li>
    </ul>
    <p>However, no system is 100% secure, and we cannot guarantee absolute security.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>5. Your Rights</h2>
    <p>You have the right to:</p>
    <ul>
      <li>Request access to your personal data</li>
      <li>Request correction or deletion of your data</li>
      <li>Withdraw consent for marketing communications</li>
    </ul>
    <p>To exercise your rights, contact us at <a href="mailto:hi@algotells.com">hi@algotells.com</a>.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>6. Updates to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>7. Contact Us</h2>
    <p>For privacy-related questions, contact us at:</p>
    <p><a href="mailto:hi@algotells.com">hi@algotells.com</a></p>
  `;

  return (
    <PolicyPage
      title="Privacy Policy"
      description="AlgoTells's commitment to protecting your privacy and data security."
      content={content}
    />
  );
}


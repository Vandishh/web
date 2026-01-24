import { PolicyPage } from './PolicyPage';

export function TermsOfServicePage() {
  const content = `
    <p>By accessing or using the AlgoTells website and services, you agree to the following Terms of Service.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>1. Use of Website</h2>
    <p>You agree to:</p>
    <ul>
      <li>Use the website for lawful purposes only</li>
      <li>Not engage in activities that disrupt or damage the website</li>
      <li>Not attempt unauthorized access to systems or data</li>
    </ul>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>2. Services</h2>
    <p>AlgoTells provides AI, cloud, DevOps, and digital technology services.</p>
    <p>All service engagements are subject to separate agreements or contracts.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>3. Intellectual Property</h2>
    <p>All content on this website, including text, graphics, logos, code, and designs, is the property of AlgoTells Technologies Pvt. Ltd. and is protected by intellectual property laws.</p>
    <p>You may not reproduce, distribute, or modify content without written permission.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>4. Limitation of Liability</h2>
    <p>AlgoTells shall not be liable for:</p>
    <ul>
      <li>Any indirect, incidental, or consequential damages</li>
      <li>Loss of data, revenue, or business arising from website use</li>
    </ul>
    <p>The website and services are provided "as is" without warranties of any kind.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>5. Termination</h2>
    <p>We reserve the right to restrict or terminate access to the website if these terms are violated.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>6. Governing Law</h2>
    <p>These Terms are governed by the laws of India, without regard to conflict of law principles.</p>
  `;

  return (
    <PolicyPage
      title="Terms of Service"
      description="Terms and conditions for using AlgoTells's services and platforms."
      content={content}
    />
  );
}


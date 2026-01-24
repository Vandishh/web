import { PolicyPage } from './PolicyPage';

export function CookiePolicyPage() {
  const content = `
    <p>This Cookie Policy explains how AlgoTells uses cookies and similar technologies.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>1. What Are Cookies?</h2>
    <p>Cookies are small text files stored on your device to enhance website functionality and user experience.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>2. Types of Cookies We Use</h2>
    
    <h3>Essential Cookies</h3>
    <p>Required for website functionality and security.</p>
    
    <h3>Analytics Cookies</h3>
    <p>Help us understand website usage and improve performance (e.g., Google Analytics).</p>
    
    <h3>Functional Cookies</h3>
    <p>Remember user preferences and settings.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>3. Managing Cookies</h2>
    <p>You can control or disable cookies through your browser settings.</p>
    <p><strong>Note:</strong> Disabling cookies may affect website functionality.</p>
    
    <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;" />
    
    <h2>4. Updates</h2>
    <p>We may update this Cookie Policy periodically. Changes will be posted on this page.</p>
  `;

  return (
    <PolicyPage
      title="Cookie Policy"
      description="Information about how AlgoTells uses cookies and similar technologies."
      content={content}
    />
  );
}


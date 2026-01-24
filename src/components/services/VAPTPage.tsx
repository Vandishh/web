import { DetailLayout } from '../DetailLayout';

export function VAPTPage() {
    return (
        <DetailLayout
            title="VAPT (Vulnerability Assessment & Penetration Testing)"
            description="We test your system like a real attacker to find weaknesses before hackers do."
            whatWeOffer={[
                "Web app pentesting",
                "API testing",
                "Cloud security testing",
                "Security reports with fixes"
            ]}
            benefits={[
                "Better security",
                "Early risk detection",
                "Customer trust"
            ]}
            type="Service"
        />
    );
}

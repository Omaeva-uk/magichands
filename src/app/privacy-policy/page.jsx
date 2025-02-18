import { Navbar } from "@/components";
import Link from "next/link";
import { Footer } from "@/components";

const page = () => {
  return (
    <div className="">
      <div className="my-16 max-w-[1200px] px-10 mx-auto">
        <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl font-semibold mx-auto text-center">Privacy Policy</h1>
            <p className="text-center mt-5">Last Updated Feb 18th, 2025</p>
        </div>
        <div className="mt-14 max-w-4xl">
            <p className="text-xl">Welcome to Magichands Physiotherapy! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation (GDPR) and other applicable EU data protection laws.</p>
            <div className="mt-10">
                <h2 className="text-xl font-semibold">Effective Date:</h2>
                <p>Jan 14th, 2025</p>   
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold"> Who We Are</h2>
                <p>Magichands Physiotherapy ("we," "our," or "us") is dedicated to providing exceptional flooring services while respecting your privacy. For any questions or concerns about this policy, please contact us:</p>   
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold"> Queries</h2>
                <p><Link href="" className=" underline" >saravanakumar.ps@Magichands Physiotherapy.in</Link></p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">  What Personal Data We Collect</h2>
                <div className="mt-3">
                    <h3 className="text-lg font-semibold text-gray-700">Identity Data</h3>
                    <p>Name, email address, phone number, and other identifiers.</p>
                </div>
                <div className="mt-3">
                    <h3 className="text-lg font-semibold text-gray-700">Usage Data</h3>
                    <p>Information about how you use our website, products, and services.</p>
                </div>
                <div className="mt-3">
                    <h3 className="text-lg font-semibold text-gray-700">Technical Data</h3>
                    <p>IP address, browser type, device information, and cookies.</p>
                </div>
                <div className="mt-3">
                    <h3 className="text-lg font-semibold text-gray-700">Communication Data</h3>
                    <p>Messages and inquiries you send us.</p>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">How We Use Your Data</h2>
                <h3 className="text-lg mt-3 font-semibold text-gray-700">We use your data to:</h3>
                <div className="mt-3">
                    <p>1. Provide and improve our services.</p>
                    <p>2. Respond to your inquiries or requests.</p>
                    <p>3. Communicate updates, offers, and other relevant information.</p>
                    <p>4. Ensure security and prevent fraud.</p>
                    <p>5. Comply with legal obligations.</p>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">How We Share Your Data</h2>
                <h3 className="text-lg mt-3 font-semibold text-gray-700">We do not sell your personal data. However, we may share your data with:</h3>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Service Providers</h4>
                    <p>Third parties that help us provide our services (e.g., hosting, analytics, payment processing).</p>
                </div>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Legal Authorities</h4>
                    <p>When required by law or to protect our rights.</p>
                </div>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Business Transfers</h4>
                    <p>In case of a merger, acquisition, or sale of assets.</p>
                </div>  
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Data Retention</h2>
                <p className="mt-3">We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or comply with legal obligations. Once your data is no longer needed, we securely delete or anonymize it.</p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Under GDPR, you have the following rights:</h2>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Access</h4>
                    <p>Request access to the personal data we hold about you.</p>
                </div>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Rectification</h4>
                    <p> Request corrections to inaccurate or incomplete data.</p>
                </div>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Erasure</h4>
                    <p> Request deletion of your personal data ("Right to be Forgotten").</p>
                </div>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Restriction</h4>
                    <p>Request restriction of processing.</p>
                </div>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Data Portability</h4>
                    <p>Request transfer of your data to another service provider.</p>
                </div>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Objection</h4>
                    <p>Object to processing based on legitimate interests or direct marketing.</p>
                </div>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Withdraw Consent</h4>
                    <p>Withdraw consent where processing is based on consent.</p>
                </div>
                <p className="mt-1">To exercise these rights, contact us at <Link href="" className=" underline">saravanakumar.ps@Magichands Physiotherapy.in</Link>.</p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Cookie Policy</h2>
                <h3 className="text-lg mt-3 font-semibold text-gray-700">We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us analyze website traffic, remember your preferences, and provide personalized content.</h3>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Essential Cookies</h4>
                    <p>Necessary for the functioning of the website.</p>
                </div>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Analytics Cookies</h4>
                    <p>Help us understand how visitors interact with our website.</p>
                </div>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Marketing Cookies</h4>
                    <p>Enable us to provide relevant advertisements and track their performance.</p>
                </div>
                <p className="mt-1">You can manage your cookie preferences through your browser settings. Note that disabling cookies may affect the functionality of our website.</p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">International Data Transfers</h2>
                <p className="mt-3">If your data is transferred outside the European Economic Area (EEA), we ensure it is protected through adequate safeguards, such as standard contractual clauses or your explicit consent.</p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Data Security</h2>
                <p className="mt-3">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, alteration, or destruction.</p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Contact Us</h2>
                <p className="mt-3">For questions, concerns, or requests related to this Privacy Policy, please reach out to:</p>
                <div className="mt-3">
                    <h4 className="text-md mt-3 font-bold text-gray-900">Other Queries</h4>
                    <Link href="" className=" underline">saravanakumar.ps@Magichands Physiotherapy.in</Link>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold"> Changes to This Policy</h2>
                <p className="mt-3">We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Effective Date." We encourage you to review this policy periodically.</p>
            </div>
            <p className="mt-10">Thank you for trusting Magichands Physiotherapy with your personal data. Your privacy matters to us.</p>
        </div>
       
      </div>
    </div>
  )
}

export default page;
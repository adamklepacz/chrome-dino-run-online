import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  // SEO data for Terms of Service page
  const seo = {
    title: 'Terms of Service | DinoRunOnline',
    description: 'Understand the rules and conditions for using DinoRunOnline, including user responsibilities, intellectual property rights, and disclaimers.',
    keywords: ['terms of service', 'terms and conditions', 'user agreement', 'DinoRunOnline terms', 'game usage rules', 'legal terms'],
    canonicalUrl: 'https://dinorunonline.com/terms-of-service',
    ogType: "article" as "website" | "article"
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container bg-muted/30">
        <div className="mx-auto max-w-3xl text-center py-10 md:py-16">
          <h1 className="page-header">Terms of Service</h1>
          <p className="page-subtitle">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>
      
      <section className="section-container py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Introduction</h2>
            <div className="mb-8">
              <p className="mb-4">
                Welcome to DinoRunOnline.com ("we," "us," or "our"). By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and DinoRunOnline regarding your use of our website located at dinorunonline.com and all related services, games, and content (collectively, the "Service").
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Acceptance of Terms</h2>
            <div className="mb-8">
              <p className="mb-4">
                By accessing or using our Service, you confirm that you accept these Terms and agree to comply with them. If you do not agree to these Terms, you must not access or use our Service.
              </p>
              <p>
                We may revise these Terms at any time. The most current version will always be posted on our website. By continuing to access or use our Service after revisions become effective, you agree to be bound by the revised Terms.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">User Eligibility</h2>
            <div className="mb-8">
              <p className="mb-4">
                Our Service is available to users of all ages. However, if you are under the age of 13, you should review these Terms with a parent or guardian to ensure that you and your parent or guardian understand these Terms.
              </p>
              <p>
                In accordance with the Children's Online Privacy Protection Act (COPPA), we do not knowingly collect personal information from children under 13 years of age.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">User Conduct</h2>
            <div className="mb-8">
              <p className="mb-4">
                When using our Service, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the rights of other users</li>
                <li>Not use our Service for any illegal or unauthorized purpose</li>
                <li>Not interfere with or disrupt the Service or servers</li>
                <li>Not attempt to gain unauthorized access to any part of the Service</li>
                <li>Not use our Service to distribute spam, malware, or other harmful content</li>
              </ul>
              <p>
                We reserve the right to terminate or restrict your access to our Service for violation of these Terms or for any other reason at our sole discretion.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Intellectual Property Rights</h2>
            <div className="mb-8">
              <p className="mb-4">
                The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, audio, and the design, selection, and arrangement thereof) are owned by DinoRunOnline, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="mb-4">
                Our game is inspired by the Chrome Dino Game, but we are not affiliated with, endorsed by, or sponsored by Google. The Chrome Dinosaur Game is developed and owned by Google.
              </p>
              <p>
                You may use our Service only for your personal, non-commercial use. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service without our express written consent.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Third-Party Content and Advertising</h2>
            <div className="mb-8">
              <p className="mb-4">
                Our Service may contain links to third-party websites or services that are not owned or controlled by DinoRunOnline. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p className="mb-4">
                Our Service includes advertisements provided by third parties, including Google AdSense. These third parties may use cookies, web beacons, and other tracking technologies to collect information about your use of our Service and other websites. This information may be used to provide advertisements about goods and services of interest to you. We do not control these third parties' tracking technologies or how they may be used.
              </p>
              <p>
                By using our Service, you consent to the use of these advertising services. Please refer to our Privacy Policy for more information about how we handle data collection and usage.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Disclaimers and Limitations of Liability</h2>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mt-6 mb-3">Disclaimer of Warranties</h3>
              <p className="mb-4">
                YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE EXPRESSLY DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="mb-4">
                WE DO NOT WARRANT THAT OUR SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE CORRECTED. YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA RESULTING FROM YOUR USE OF OUR SERVICE.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Limitation of Liability</h3>
              <p className="mb-4">
                IN NO EVENT SHALL DINORUNONLINE, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>ERRORS, MISTAKES, OR INACCURACIES OF CONTENT</li>
                <li>PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR SERVICE</li>
                <li>ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN</li>
                <li>ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICE</li>
                <li>ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICE BY ANY THIRD PARTY</li>
              </ul>
              <p>
                THE LIMITATIONS OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Indemnification</h2>
            <div className="mb-8">
              <p>
                You agree to defend, indemnify, and hold harmless DinoRunOnline, its officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from your use of and access to the Service, your violation of any term of these Terms, or your violation of any third party right, including without limitation any copyright, property, or privacy right.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Governing Law</h2>
            <div className="mb-8">
              <p>
                These Terms shall be governed and construed in accordance with the laws of the country of Poland, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within Poland for the resolution of any disputes arising out of or relating to these Terms or your use of the Service.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Severability</h2>
            <div className="mb-8">
              <p>
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Waiver</h2>
            <div className="mb-8">
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of DinoRunOnline.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Contact Information</h2>
            <div className="mb-8">
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p>
                  <strong>Email:</strong> adamklepacz92@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Link to="/" className="bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-6 rounded-lg text-lg font-medium transition-colors inline-block">
            Return to Homepage
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default TermsOfService; 
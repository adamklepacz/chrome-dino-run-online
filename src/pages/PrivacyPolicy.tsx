import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  // SEO data for Privacy Policy page
  const seo = {
    title: 'Privacy Policy | DinoRunOnline',
    description: 'Learn about how DinoRunOnline handles your data, uses cookies, and implements advertising on our free online Chrome Dinosaur Game website.',
    keywords: ['privacy policy', 'cookie policy', 'data protection', 'DinoRunOnline privacy', 'chrome dino privacy', 'online game privacy'],
    canonicalUrl: 'https://dinorunonline.com/privacy-policy',
    ogType: "article" as "website" | "article"
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container bg-muted/30">
        <div className="mx-auto max-w-3xl text-center py-10 md:py-16">
          <h1 className="page-header">Privacy Policy</h1>
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
                Welcome to DinoRunOnline ("we," "our," or "us"). This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your information when you visit our website dinorunonline.com (the "Site") and play our Chrome Dinosaur Game.
              </p>
              <p>
                We take your privacy seriously and are committed to protecting it. By accessing or using our Site, you agree to this Privacy Policy. If you do not agree with our policies and practices, please do not use our Site.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Information We Collect</h2>
            <div className="mb-8">
              <p className="mb-4">
                We collect several types of information from and about users of our Site, including:
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Information You Provide</h3>
              <p className="mb-4">
                We do not require you to create an account or provide personal information to use our Site. However, when you interact with certain features, we may collect:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Information you submit if you contact us via email</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Information We Automatically Collect</h3>
              <p className="mb-4">
                As you navigate through and interact with our Site, we may use automatic data collection technologies to collect:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Usage details such as traffic data, logs, and other communication data</li>
                <li>Information about your computer and internet connection, including your IP address, operating system, and browser type</li>
                <li>Game performance data such as your scores and gameplay statistics (stored locally in your browser)</li>
                <li>Information about your visit, including the pages you view and the links you click</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Local Storage and Cookies</h2>
            <div className="mb-8">
              <p className="mb-4">
                Our Site uses:
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Local Storage</h3>
              <p className="mb-4">
                We use local storage (including HTML5 localStorage) to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Store your high score in the game</li>
                <li>Remember your game preferences</li>
                <li>Enhance your gaming experience</li>
              </ul>
              <p className="mb-4">
                This information is stored only on your device and is not transmitted to us.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Cookies</h3>
              <p className="mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Remember your sidebar preferences</li>
                <li>Understand and save your preferences for future visits</li>
                <li>Compile aggregate data about site traffic and site interactions</li>
              </ul>
              <p>
                You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable cookies, some parts of the Site may not function properly.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Third-Party Services and Advertising</h2>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mt-6 mb-3">Google AdSense</h3>
              <p className="mb-4">
                We use Google AdSense to serve advertisements on our Site. Google AdSense may use cookies to personalize ads based on your browsing history and interests. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our Site and/or other sites on the Internet.
              </p>
              <p className="mb-4">
                You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Ads Settings</a>.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Structured Data and Schema.org</h3>
              <p className="mb-4">
                We use structured data markup (JSON-LD) to provide search engines with information about our content. This does not collect personal information but helps search engines better understand our Site's content.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">External Scripts</h3>
              <p className="mb-4">
                Our Site loads scripts from the following external sources:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Google AdSense (pagead2.googlesyndication.com)</li>
                <li>GPT Engineer script (cdn.gpteng.co)</li>
              </ul>
              <p>
                These scripts are necessary for advertising functionality and site features.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">How We Use Your Information</h2>
            <div className="mb-8">
              <p className="mb-4">
                We use information that we collect about you or that you provide to us:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To present our Site and its contents to you</li>
                <li>To improve our Site and user experience</li>
                <li>To provide you with information or services that you request from us</li>
                <li>To display advertisements</li>
                <li>To analyze Site usage and trends</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Data Security</h2>
            <div className="mb-8">
              <p>
                We have implemented measures designed to secure your information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your information, we cannot guarantee the security of your information transmitted to our Site.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Children's Privacy</h2>
            <div className="mb-8">
              <p>
                Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are under 13, do not provide any information on this Site. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Your Choices</h2>
            <div className="mb-8">
              <p className="mb-4">
                You have the following rights regarding your data:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>You can delete locally stored data by clearing your browser's cache and local storage</li>
                <li>You can set your browser to refuse cookies</li>
                <li>You can opt out of personalized advertising through Google's Ad Settings</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Changes to Our Privacy Policy</h2>
            <div className="mb-8">
              <p>
                We may update our Privacy Policy from time to time. If we make material changes to how we treat our users' information, we will post the new Privacy Policy on this page with a notice that the Privacy Policy has been updated. The date the Privacy Policy was last revised will be identified at the top of the page.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Contact Information</h2>
            <div className="mb-8">
              <p className="mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact:
              </p>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p>
                  <strong>Data Protection Officer:</strong> Adam Klepacz<br />
                  <strong>Email:</strong> adamklepacz92@gmail.com
                </p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t-2 border-border">
              <h2 className="text-2xl font-bold mb-6 text-center">Cookie Policy</h2>
              <div className="mb-8">
                <p className="mb-4">
                  This Cookie Policy explains how DinoRunOnline ("we", "us", or "our") uses cookies and similar technologies on our website dinorunonline.com. By using our Site, you consent to the use of cookies as described in this policy.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">What Are Cookies</h3>
                <p className="mb-4">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Types of Cookies We Use</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium">Essential cookies:</p>
                    <p>These cookies are necessary for the website to function properly. They enable core functionality such as user interface preferences.</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium">Functionality cookies:</p>
                    <p>These cookies allow us to remember choices you make and provide enhanced features. For example, we use a cookie to remember your sidebar state.</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium">Analytics and performance cookies:</p>
                    <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium">Advertising cookies:</p>
                    <p>These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Cookies</h3>
                <p className="mb-4">
                  Some cookies are placed by third parties on our behalf. We use Google AdSense for advertising, which may set cookies to personalize ads based on your browsing behavior.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Managing Cookies</h3>
                <p className="mb-4">
                  Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, but they can usually be found in the settings or preferences menu.
                </p>
                <p className="mb-4">
                  Please note that if you choose to block or delete cookies, you may not be able to use the full functionality of our Site.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Changes to Our Cookie Policy</h3>
                <p className="mb-4">
                  We may update our Cookie Policy from time to time. Any changes will be posted on this page.
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

export default PrivacyPolicy; 
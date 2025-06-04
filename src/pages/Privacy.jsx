import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account or making a purchase",
        "Payment information processed securely through our payment partners",
        "Shipping and billing addresses for order fulfillment",
        "Communication preferences and marketing consent",
        "Website usage data and analytics to improve our services"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Process and fulfill your orders efficiently",
        "Communicate with you about your purchases and account",
        "Provide customer support and respond to inquiries",
        "Send marketing communications (with your consent)",
        "Improve our website, products, and services",
        "Comply with legal obligations and prevent fraud"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "SSL encryption for all data transmission",
        "Secure payment processing through certified partners",
        "Regular security audits and updates",
        "Limited access to personal information on a need-to-know basis",
        "Secure data storage with industry-standard protection"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We never sell your personal information to third parties",
        "Shipping information shared only with delivery partners",
        "Payment data processed by secure payment processors",
        "Legal compliance when required by law",
        "Business transfers only with equivalent privacy protection"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-yellow-300">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <p className="text-lg opacity-75 mt-4">Last updated: January 1, 2024</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Artisan Crafts, we are committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how 
                we collect, use, disclose, and safeguard your information when you visit our 
                website or make a purchase from us.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website and services, you agree to the collection and use of 
                information in accordance with this policy. If you do not agree with our 
                policies and practices, please do not use our services.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Your Rights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Access and Update</h3>
                <p className="text-gray-700">
                  You have the right to access, update, or delete your personal information. 
                  You can do this by logging into your account or contacting us directly.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing Communications</h3>
                <p className="text-gray-700">
                  You can opt out of marketing communications at any time by clicking the 
                  unsubscribe link in our emails or updating your preferences in your account.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies</h3>
                <p className="text-gray-700">
                  You can control cookies through your browser settings. However, disabling 
                  cookies may affect the functionality of our website.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Portability</h3>
                <p className="text-gray-700">
                  You have the right to request a copy of your personal data in a structured, 
                  commonly used format.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cookies Policy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We use cookies and similar tracking technologies to enhance your browsing 
                experience, analyze website traffic, and understand where our visitors are coming from.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Required for the website to function properly, including shopping cart 
                    and checkout functionality.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Help us understand how visitors interact with our website to improve 
                    user experience.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Used to deliver relevant advertisements and track the effectiveness 
                    of our marketing campaigns.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Preference Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Remember your preferences and settings to provide a personalized experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Us About Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@artisancrafts.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Mail:</strong> 123 Artisan Street, Craft City, CC 12345</p>
              </div>
              
              <p className="text-sm text-gray-600 mt-6">
                We will respond to your inquiry within 30 days of receipt.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
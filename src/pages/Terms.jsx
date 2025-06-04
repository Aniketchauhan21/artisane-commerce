import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShoppingCart, RefreshCw, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use the service.",
        "We reserve the right to update these terms at any time without prior notice."
      ]
    },
    {
      icon: ShoppingCart,
      title: "Product Information and Orders",
      content: [
        "All products are subject to availability and we reserve the right to discontinue any product at any time.",
        "Prices are subject to change without notice, but changes will not affect orders already placed.",
        "We strive to display accurate product information, but cannot guarantee that all details are completely accurate.",
        "By placing an order, you are making an offer to purchase the product(s) which we may accept or decline.",
        "All orders are subject to acceptance and availability."
      ]
    },
    {
      icon: RefreshCw,
      title: "Returns and Refunds",
      content: [
        "Items may be returned within 30 days of delivery in original condition.",
        "Custom or personalized items are not eligible for return unless defective.",
        "Return shipping costs are the responsibility of the customer unless the item is defective.",
        "Refunds will be processed within 5-10 business days after we receive the returned item.",
        "Original shipping charges are non-refundable except in cases of defective products."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the maximum extent permitted by law.",
        "We are not liable for any indirect, incidental, or consequential damages.",
        "Our total liability will not exceed the amount paid for the specific product or service.",
        "We do not warrant that the service will be uninterrupted or error-free.",
        "You agree to indemnify us against any claims arising from your use of our services."
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
              Terms & <span className="text-yellow-300">Conditions</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our website 
              or purchasing our products.
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
                Welcome to Artisan Crafts. These Terms and Conditions ("Terms") govern your 
                use of our website and the purchase of products from us. By using our website 
                or making a purchase, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read these Terms carefully before using our services. If you do not 
                agree with any part of these Terms, you may not use our website or services.
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

        {/* Additional Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 space-y-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                All content on this website, including but not limited to text, graphics, 
                logos, images, and software, is the property of Artisan Crafts or its 
                content suppliers and is protected by copyright and other intellectual 
                property laws.
              </p>
              <p className="text-gray-700">
                You may not reproduce, distribute, modify, or create derivative works of 
                any content without our express written permission.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">User Conduct</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Use the website for any unlawful purpose</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Attempt to gain unauthorized access to our systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Interfere with the proper functioning of the website</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Upload or transmit harmful or malicious content</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Shipping and Delivery</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We will make every effort to deliver products within the estimated timeframe, 
                but delivery dates are not guaranteed. Shipping times may vary based on 
                location and product availability.
              </p>
              <p className="text-gray-700">
                Risk of loss and title for products pass to you upon delivery to the carrier. 
                We are not responsible for lost or stolen packages after delivery confirmation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Your privacy is important to us. Please review our Privacy Policy, which 
                also governs your use of the website, to understand our practices regarding 
                the collection and use of your personal information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                These Terms are governed by and construed in accordance with the laws of 
                the jurisdiction in which Artisan Crafts operates, without regard to its 
                conflict of law provisions. Any disputes arising from these Terms will be 
                subject to the exclusive jurisdiction of the courts in that jurisdiction.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@artisancrafts.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Mail:</strong> 123 Artisan Street, Craft City, CC 12345</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Craftsmanship",
      description: "Every piece is created with love and dedication by skilled artisans who take pride in their work."
    },
    {
      icon: Users,
      title: "Supporting Artisans",
      description: "We work directly with craftspeople, ensuring fair compensation and preserving traditional techniques."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards of quality, using only premium materials and time-tested methods."
    },
    {
      icon: Globe,
      title: "Sustainable Practices",
      description: "Our commitment to sustainability ensures that our crafts are environmentally responsible."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "Sarah started Artisan Crafts with a vision to connect traditional craftspeople with modern consumers."
    },
    {
      name: "Michael Chen",
      role: "Head of Artisan Relations",
      description: "Michael travels the world to discover talented artisans and build lasting partnerships."
    },
    {
      name: "Emma Rodriguez",
      role: "Quality Director",
      description: "Emma ensures every piece meets our exacting standards before reaching our customers."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Story of <span className="text-yellow-300">Craftsmanship</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Founded in 2018, Artisan Crafts began as a passion project to preserve traditional 
              craftsmanship while connecting skilled artisans with people who appreciate authentic, 
              handmade quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that in our fast-paced, mass-produced world, there's something magical 
                about items created by human hands with time-honored techniques. Our mission is to 
                preserve these traditional crafts while providing artisans with a sustainable livelihood.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every purchase you make supports not just an individual artisan, but entire communities 
                that have been practicing these crafts for generations. We're not just selling products; 
                we're preserving cultural heritage and supporting sustainable livelihoods.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img  
                  className="w-full h-full object-cover"
                  alt="Artisan craftsperson working on traditional handicraft"
                 src="https://images.unsplash.com/photo-1698768195190-27c6ecf8cc52" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from selecting artisan partners 
              to ensuring the quality of every piece we offer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small idea to a thriving community of artisans and craft lovers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img  
                  className="w-full h-full object-cover"
                  alt="Artisan Crafts workshop with various handmade items"
                 src="https://images.unsplash.com/photo-1628338243893-056573e389ea" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    2018
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">The Beginning</h3>
                    <p className="text-gray-600">Started with just 5 artisan partners and a dream to make a difference.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2020
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Growing Community</h3>
                    <p className="text-gray-600">Expanded to work with over 50 artisans across multiple countries.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    2022
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Sustainable Impact</h3>
                    <p className="text-gray-600">Launched our sustainability initiative and fair trade certification program.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    2024
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Today</h3>
                    <p className="text-gray-600">Proud to support over 200 artisans and serve thousands of satisfied customers worldwide.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Artisan Crafts who work tirelessly to bring you 
              the finest handcrafted items from around the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover-lift">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Join Our Mission to Preserve Traditional Craftsmanship
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Every purchase you make helps support artisan communities and keeps traditional 
              crafts alive for future generations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
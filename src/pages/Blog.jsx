import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Traditional Woodworking: Preserving Ancient Techniques",
      excerpt: "Discover how our master craftsmen use time-honored techniques passed down through generations to create stunning wooden pieces that tell a story.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Craftsmanship",
      featured: true
    },
    {
      id: 2,
      title: "Behind the Scenes: A Day in Our Pottery Workshop",
      excerpt: "Take a virtual tour of our pottery studio and meet the talented artisans who shape clay into beautiful, functional art pieces.",
      author: "Michael Chen",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "Workshop"
    },
    {
      id: 3,
      title: "Sustainable Crafting: Our Commitment to the Environment",
      excerpt: "Learn about our eco-friendly practices and how we're working to minimize our environmental impact while supporting local communities.",
      author: "Emma Rodriguez",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Sustainability"
    },
    {
      id: 4,
      title: "The Story Behind Our Handmade Jewelry Collection",
      excerpt: "Each piece of jewelry in our collection has a unique story. Discover the inspiration and craftsmanship behind our most popular designs.",
      author: "Sarah Johnson",
      date: "2023-12-28",
      readTime: "3 min read",
      category: "Design"
    },
    {
      id: 5,
      title: "Gift Guide: Choosing the Perfect Handcrafted Present",
      excerpt: "Finding the perfect gift can be challenging. Our guide helps you choose meaningful handcrafted items for every occasion and personality.",
      author: "Michael Chen",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Lifestyle"
    },
    {
      id: 6,
      title: "Caring for Your Handmade Items: Maintenance Tips",
      excerpt: "Proper care ensures your handcrafted items last for generations. Learn essential maintenance tips for different types of artisan products.",
      author: "Emma Rodriguez",
      date: "2023-12-15",
      readTime: "4 min read",
      category: "Care Guide"
    }
  ];

  const categories = [
    "All Posts",
    "Craftsmanship",
    "Workshop",
    "Sustainability",
    "Design",
    "Lifestyle",
    "Care Guide"
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
              Craft <span className="text-yellow-300">Stories</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Discover the stories behind our crafts, meet our artisans, and learn about 
              the traditions that inspire our beautiful handmade products.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={category}
                variant={index === 0 ? 'default' : 'outline'}
                className="cursor-pointer px-4 py-2 hover:bg-purple-600 hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <Card className="overflow-hidden hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img  
                    className="w-full h-full object-cover"
                    alt="Featured blog post about traditional woodworking techniques"
                   src="https://images.unsplash.com/photo-1698768195190-27c6ecf8cc52" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-purple-600">Featured Post</Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="w-fit bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="h-full hover-lift cursor-pointer group">
                <div className="aspect-video overflow-hidden">
                  <img  
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={`Blog post about ${post.category.toLowerCase()}`}
                   src="https://images.unsplash.com/photo-1628338243893-056573e389ea" />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Stories</h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to read about new artisan 
                techniques, behind-the-scenes stories, and craft inspiration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
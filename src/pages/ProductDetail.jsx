import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Heart, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { getProductById } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: "Added to cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const guarantees = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% authentic handmade quality"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $75"
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      description: "Easy returns within 30 days"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/products"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
              <img  
                className="w-full h-full object-cover"
                alt={`${product.name} - detailed view of handcrafted ${product.category}`}
               src="https://images.unsplash.com/photo-1572510022073-d586ba66da74" />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <img  
                className="aspect-square rounded-lg object-cover bg-white shadow cursor-pointer hover:shadow-lg transition-shadow"
                alt={`${product.name} - angle view 1`}
               src="https://images.unsplash.com/photo-1552418956-9ebf659cff6e" />
              <img  
                className="aspect-square rounded-lg object-cover bg-white shadow cursor-pointer hover:shadow-lg transition-shadow"
                alt={`${product.name} - angle view 2`}
               src="https://images.unsplash.com/photo-1576097625950-eceef631387a" />
              <img  
                className="aspect-square rounded-lg object-cover bg-white shadow cursor-pointer hover:shadow-lg transition-shadow"
                alt={`${product.name} - detail view`}
               src="https://images.unsplash.com/photo-1552418956-9ebf659cff6e" />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <Badge variant="secondary" className="mb-4">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                {product.inStock ? (
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    Out of Stock
                  </Badge>
                )}
              </div>
              
              <p className="text-4xl font-bold text-purple-600 mb-6">
                ${product.price}
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                    disabled={!product.inStock}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                    disabled={!product.inStock}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </Button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="text-center">
                  <guarantee.icon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm text-gray-900 mb-1">
                    {guarantee.title}
                  </h4>
                  <p className="text-xs text-gray-600">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Card>
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Details</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This exquisite {product.name.toLowerCase()} represents the finest in handcrafted artistry. 
                    Each piece is carefully created by skilled artisans using traditional techniques passed down 
                    through generations. The attention to detail and quality of materials ensures that this item 
                    will be treasured for years to come.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Care Instructions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Handle with care to preserve the handcrafted details</li>
                    <li>• Clean gently with appropriate materials for the item type</li>
                    <li>• Store in a safe place away from direct sunlight</li>
                    <li>• Avoid exposure to extreme temperatures or moisture</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Shipping & Returns</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We offer free shipping on orders over $75. All items are carefully packaged to ensure 
                    safe delivery. If you're not completely satisfied with your purchase, we offer easy 
                    returns within 30 days of delivery.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
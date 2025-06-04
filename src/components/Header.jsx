import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Search, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

// Mobile Menu Component - Separate component for portal
const MobileMenu = ({ isOpen, onClose, navigation, isActive, getCartItemsCount }) => {
  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <div className="lg:hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999998,
            touchAction: 'none'
          }}
        />
        
        {/* Menu Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 999999,
            width: '100%',
            maxWidth: '384px', // sm:max-w-sm equivalent
            overflowY: 'auto',
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-y'
          }}
          className="bg-white px-6 py-6"
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5" onClick={onClose}>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AC</span>
                </div>
                <span className="text-xl font-bold text-gradient">Artisan Crafts</span>
              </div>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 transition-colors ${
                      isActive(item.href) ? 'text-purple-600' : 'text-gray-900'
                    }`}
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="py-6">
                <Link
                  to="/cart"
                  className="flex items-center justify-between -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={onClose}
                >
                  <span className="flex items-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Cart
                  </span>
                  {getCartItemsCount() > 0 && (
                    <span className="h-6 w-6 rounded-full bg-purple-600 text-xs text-white flex items-center justify-center">
                      {getCartItemsCount()}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body // Portal directly body mein render karo
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Wooden Crafts', href: '/products/wooden' },
    { name: 'Pottery', href: '/products/pottery' },
    { name: 'Jewelry', href: '/products/jewelry' },
    { name: 'All Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];

  const isActive = (path) => location.pathname === path;

  // Enhanced background scroll prevention
  React.useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
      document.documentElement.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AC</span>
                </div>
                <span className="text-xl font-bold text-gradient">Artisan Crafts</span>
              </motion.div>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold leading-6 transition-colors hover:text-purple-600 ${
                  isActive(item.href) ? 'text-purple-600' : 'text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getCartItemsCount() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-purple-600 text-xs text-white flex items-center justify-center"
                  >
                    {getCartItemsCount()}
                  </motion.span>
                )}
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Portal-based Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={closeMenu}
        navigation={navigation}
        isActive={isActive}
        getCartItemsCount={getCartItemsCount}
      />
    </>
  );
};

export default Header;
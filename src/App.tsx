import React, { useState } from 'react';
import { Header } from './components/Header';
import { QuickCommerceHero } from './components/QuickCommerceHero';
import { CategorySection } from './components/CategorySection';
import { BrandsSection } from './components/BrandsSection';
import { QuickCommerceProducts } from './components/QuickCommerceProducts';
import { MobileAppSection } from './components/MobileAppSection';
import { SignInModal } from './components/SignInModal';
import { CartSidebar } from './components/CartSidebar';
import { CheckoutPage } from './components/CheckoutPage';
import { Footer } from './components/Footer';
import { TranslationProvider } from './components/TranslationContext';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  unit: string;
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'category' | 'products' | 'checkout'>('home');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('category');
  };

  const handleShopNowClick = () => {
    setCurrentView('products');
    setSelectedCategory(undefined);
  };

  const handleAddToCart = (productId: string, quantity: number = 1) => {
    // This would typically fetch product details from a product catalog
    const productDetails = {
      'steel-001': { name: 'TMT Steel Bars 12mm', price: 4800, image: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', unit: 'per tonne' },
      'lam-001': { name: 'Century High Gloss Laminate', price: 1850, image: 'https://images.unsplash.com/photo-1617262869522-6740e6450f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', unit: 'per sheet' },
      'pipe-001': { name: 'Astral CPVC Pipes 20mm', price: 285, image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', unit: 'per meter' },
      'tile-001': { name: 'Kajaria Vitrified Tiles 60x60', price: 85, image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', unit: 'per sqft' },
      'paint-001': { name: 'Asian Paints Tractor Emulsion', price: 450, image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', unit: 'per liter' },
      'elec-001': { name: 'Havells Copper Wire 2.5sq mm', price: 285, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', unit: 'per meter' }
    };

    const product = productDetails[productId as keyof typeof productDetails];
    if (!product) return;

    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === productId);
      if (existingItem) {
        return prev.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, {
          id: productId,
          name: product.name,
          price: product.price,
          quantity,
          image: product.image,
          unit: product.unit
        }];
      }
    });
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleSignInClick = () => {
    setIsSignInOpen(true);
  };

  const handleSignInClose = () => {
    setIsSignInOpen(false);
  };

  const handleLogoClick = () => {
    setCurrentView('home');
    setSelectedCategory(undefined);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    setCurrentView('checkout');
    setIsCartOpen(false);
  };

  const handleOrderComplete = () => {
    setCartItems([]);
    setCurrentView('home');
    // Here you would typically show a success message
    alert('Order placed successfully! You will receive a confirmation shortly.');
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <TranslationProvider>
      <div className="min-h-screen bg-background">
        <Header 
          onCategoryClick={handleCategoryClick}
          cartItemCount={cartItemCount}
          onSignInClick={handleSignInClick}
          onCartClick={handleCartClick}
        />

        {currentView === 'checkout' ? (
          <CheckoutPage 
            cartItems={cartItems}
            onBack={() => setCurrentView('home')}
            onOrderComplete={handleOrderComplete}
          />
        ) : (
          <>
            <main>
              {currentView === 'home' && (
                <>
                  <QuickCommerceHero onShopNowClick={handleShopNowClick} />
                  <CategorySection onCategoryClick={handleCategoryClick} />
                  <BrandsSection />
                  <QuickCommerceProducts onAddToCart={handleAddToCart} />
                  <MobileAppSection />
                </>
              )}

              {currentView === 'category' && selectedCategory && (
                <>
                  {/* Breadcrumb */}
                  <div className="bg-muted/30 py-4">
                    <div className="container mx-auto px-4">
                      <nav className="flex items-center space-x-2 text-sm">
                        <button 
                          onClick={handleLogoClick}
                          className="text-primary hover:text-primary/80"
                        >
                          Home
                        </button>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-foreground">{selectedCategory}</span>
                      </nav>
                    </div>
                  </div>
                  
                  <QuickCommerceProducts 
                    category={selectedCategory} 
                    onAddToCart={handleAddToCart} 
                  />
                </>
              )}

              {currentView === 'products' && (
                <>
                  {/* Breadcrumb */}
                  <div className="bg-muted/30 py-4">
                    <div className="container mx-auto px-4">
                      <nav className="flex items-center space-x-2 text-sm">
                        <button 
                          onClick={handleLogoClick}
                          className="text-primary hover:text-primary/80"
                        >
                          Home
                        </button>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-foreground">All Products</span>
                      </nav>
                    </div>
                  </div>
                  
                  <QuickCommerceProducts onAddToCart={handleAddToCart} />
                </>
              )}
            </main>

            <Footer />
          </>
        )}

        <SignInModal 
          isOpen={isSignInOpen} 
          onClose={handleSignInClose} 
        />

        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateCartQuantity}
          onRemoveItem={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      </div>
    </TranslationProvider>
  );
}
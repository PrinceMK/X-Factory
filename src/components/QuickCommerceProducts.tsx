import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, ShoppingCart, Plus, Minus, Clock } from 'lucide-react';
import { useTranslation } from './TranslationContext';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  discount?: number;
  badge?: string;
  unit: string;
  deliveryTime: string;
}

interface QuickCommerceProductsProps {
  category?: string;
  onAddToCart: (productId: string, quantity: number) => void;
}

export function QuickCommerceProducts({ category, onAddToCart }: QuickCommerceProductsProps) {
  const { t } = useTranslation();
  const [productQuantities, setProductQuantities] = useState<{ [key: string]: number }>({});

  // Comprehensive product list based on HomeRun website
  const allProducts: Product[] = [
    // Steel & Metal Products
    {
      id: 'steel-001',
      name: 'TMT Steel Bars 12mm',
      category: 'Steel & Metal',
      price: 4800,
      originalPrice: 5200,
      image: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.8,
      reviews: 324,
      inStock: true,
      discount: 8,
      badge: 'Best Seller',
      unit: 'per tonne',
      deliveryTime: '2 hours'
    },
    {
      id: 'steel-002',
      name: 'MS Angle 40x40x6mm',
      category: 'Steel & Metal',
      price: 65,
      originalPrice: 75,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.6,
      reviews: 189,
      inStock: true,
      discount: 13,
      unit: 'per kg',
      deliveryTime: '2 hours'
    },
    {
      id: 'steel-003',
      name: 'GI Wire 8 SWG',
      category: 'Steel & Metal',
      price: 68,
      image: 'https://images.unsplash.com/photo-1518709414026-a4156a0cbc03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.4,
      reviews: 156,
      inStock: true,
      unit: 'per kg',
      deliveryTime: '2 hours'
    },

    // Laminates
    {
      id: 'lam-001',
      name: 'Century High Gloss Laminate',
      category: 'Laminates',
      price: 1850,
      originalPrice: 2100,
      image: 'https://images.unsplash.com/photo-1617262869522-6740e6450f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.7,
      reviews: 243,
      inStock: true,
      discount: 12,
      badge: 'Premium',
      unit: 'per sheet',
      deliveryTime: '4 hours'
    },
    {
      id: 'lam-002',
      name: 'Greenply Wood Finish Laminate',
      category: 'Laminates',
      price: 1650,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.5,
      reviews: 198,
      inStock: true,
      unit: 'per sheet',
      deliveryTime: '4 hours'
    },
    {
      id: 'lam-003',
      name: 'Sunmica Textured Laminate',
      category: 'Laminates',
      price: 1450,
      originalPrice: 1600,
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.3,
      reviews: 134,
      inStock: true,
      discount: 9,
      unit: 'per sheet',
      deliveryTime: '4 hours'
    },

    // Pipes & Fittings
    {
      id: 'pipe-001',
      name: 'Astral CPVC Pipes 20mm',
      category: 'Pipes & Fittings',
      price: 285,
      originalPrice: 320,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.6,
      reviews: 432,
      inStock: true,
      discount: 11,
      badge: 'Top Quality',
      unit: 'per meter',
      deliveryTime: '2 hours'
    },
    {
      id: 'pipe-002',
      name: 'Supreme PVC Pipes 25mm',
      category: 'Pipes & Fittings',
      price: 180,
      image: 'https://images.unsplash.com/photo-1607006663776-a8bba0ef9a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.4,
      reviews: 298,
      inStock: true,
      unit: 'per meter',
      deliveryTime: '2 hours'
    },
    {
      id: 'pipe-003',
      name: 'Copper Water Pipes 15mm',
      category: 'Pipes & Fittings',
      price: 850,
      originalPrice: 950,
      image: 'https://images.unsplash.com/photo-1584622781564-1d987fda1aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.7,
      reviews: 167,
      inStock: true,
      discount: 11,
      unit: 'per meter',
      deliveryTime: '4 hours'
    },

    // Tiles & Ceramics
    {
      id: 'tile-001',
      name: 'Kajaria Vitrified Tiles 60x60',
      category: 'Tiles & Ceramics',
      price: 85,
      originalPrice: 95,
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.5,
      reviews: 289,
      inStock: true,
      discount: 11,
      badge: 'Popular',
      unit: 'per sqft',
      deliveryTime: '4 hours'
    },
    {
      id: 'tile-002',
      name: 'Johnson Wall Tiles 30x45',
      category: 'Tiles & Ceramics',
      price: 45,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.3,
      reviews: 234,
      inStock: true,
      unit: 'per sqft',
      deliveryTime: '4 hours'
    },
    {
      id: 'tile-003',
      name: 'Somany Ceramic Floor Tiles',
      category: 'Tiles & Ceramics',
      price: 55,
      originalPrice: 65,
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.4,
      reviews: 198,
      inStock: true,
      discount: 15,
      unit: 'per sqft',
      deliveryTime: '4 hours'
    },

    // Paints & Coatings
    {
      id: 'paint-001',
      name: 'Asian Paints Tractor Emulsion',
      category: 'Paints & Coatings',
      price: 450,
      originalPrice: 520,
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.6,
      reviews: 356,
      inStock: true,
      discount: 13,
      badge: 'Best Quality',
      unit: 'per liter',
      deliveryTime: '2 hours'
    },
    {
      id: 'paint-002',
      name: 'Berger Weather Coat',
      category: 'Paints & Coatings',
      price: 380,
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.4,
      reviews: 267,
      inStock: true,
      unit: 'per liter',
      deliveryTime: '2 hours'
    },

    // Electrical
    {
      id: 'elec-001',
      name: 'Havells Copper Wire 2.5sq mm',
      category: 'Electrical',
      price: 285,
      originalPrice: 325,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.7,
      reviews: 423,
      inStock: true,
      discount: 12,
      badge: 'ISI Mark',
      unit: 'per meter',
      deliveryTime: '2 hours'
    },
    {
      id: 'elec-002',
      name: 'Legrand Modular Switch',
      category: 'Electrical',
      price: 125,
      image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.5,
      reviews: 189,
      inStock: true,
      unit: 'per piece',
      deliveryTime: '2 hours'
    },

    // Plumbing
    {
      id: 'plumb-001',
      name: 'Jaquar Basin Mixer Tap',
      category: 'Plumbing',
      price: 2850,
      originalPrice: 3200,
      image: 'https://images.unsplash.com/photo-1584622781564-1d987fda1aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.6,
      reviews: 145,
      inStock: true,
      discount: 11,
      badge: 'Premium',
      unit: 'per piece',
      deliveryTime: '4 hours'
    },

    // Louvers
    {
      id: 'lou-001',
      name: 'Aluminum Window Louvers',
      category: 'Louvers',
      price: 1850,
      originalPrice: 2100,
      image: 'https://images.unsplash.com/photo-1608255197886-430b29b497bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.7,
      reviews: 156,
      inStock: true,
      discount: 12,
      badge: 'Weather Resistant',
      unit: 'per sqft',
      deliveryTime: '6 hours'
    },
    {
      id: 'lou-002',
      name: 'PVC Ventilation Louvers',
      category: 'Louvers',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.4,
      reviews: 98,
      inStock: true,
      unit: 'per sqft',
      deliveryTime: '6 hours'
    },

    // Hardware
    {
      id: 'hard-001',
      name: 'SS Door Handle Set',
      category: 'Hardware',
      price: 450,
      originalPrice: 520,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76be9fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.3,
      reviews: 167,
      inStock: true,
      discount: 13,
      unit: 'per set',
      deliveryTime: '2 hours'
    },

    // Safety Equipment
    {
      id: 'safe-001',
      name: 'Safety Helmet ISI Mark',
      category: 'Safety Equipment',
      price: 180,
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.5,
      reviews: 234,
      inStock: true,
      badge: 'ISI Certified',
      unit: 'per piece',
      deliveryTime: '2 hours'
    }
  ];

  const filteredProducts = category 
    ? allProducts.filter(product => product.category === category)
    : allProducts.slice(0, 12); // Show first 12 for featured

  const handleQuantityChange = (productId: string, change: number) => {
    setProductQuantities(prev => {
      const current = prev[productId] || 0;
      const newQuantity = Math.max(0, current + change);
      return { ...prev, [productId]: newQuantity };
    });
  };

  const handleAddToCart = (productId: string) => {
    const quantity = productQuantities[productId] || 1;
    onAddToCart(productId, quantity);
    setProductQuantities(prev => ({ ...prev, [productId]: 0 }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              {category ? `${category}` : t.featuredProducts}
            </h2>
            <p className="text-muted-foreground mt-1">
              {filteredProducts.length} products available • Fast delivery in 2-6 hours
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product) => {
            const quantity = productQuantities[product.id] || 0;
            
            return (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-3">
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.badge && (
                        <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs">
                          {product.badge}
                        </Badge>
                      )}
                      {product.discount && (
                        <Badge variant="destructive" className="text-xs">
                          {product.discount}% OFF
                        </Badge>
                      )}
                    </div>

                    {/* Delivery Time */}
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-green-600 text-white text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {product.deliveryTime}
                      </Badge>
                    </div>

                    {/* Stock Status */}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="secondary">{t.outOfStock}</Badge>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">{product.unit}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{product.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    {/* Quantity & Add to Cart */}
                    {quantity > 0 ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-border rounded-lg">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            onClick={() => handleQuantityChange(product.id, -1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-3 text-sm font-medium">{quantity}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            onClick={() => handleQuantityChange(product.id, 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button 
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-xs"
                          onClick={() => handleAddToCart(product.id)}
                        >
                          {t.addToCart}
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-sm"
                        onClick={() => {
                          handleQuantityChange(product.id, 1);
                          handleAddToCart(product.id);
                        }}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? t.addToCart : t.outOfStock}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
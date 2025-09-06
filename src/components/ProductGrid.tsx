import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';

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
}

interface ProductGridProps {
  category?: string;
  onAddToCart: (productId: string) => void;
}

export function ProductGrid({ category, onAddToCart }: ProductGridProps) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const allProducts: Product[] = [
    // Laminates
    {
      id: 'lam-001',
      name: 'Premium Oak Laminate Flooring',
      category: 'Laminates',
      price: 2850,
      originalPrice: 3200,
      image: 'https://images.unsplash.com/photo-1617262869522-6740e6450f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.8,
      reviews: 245,
      inStock: true,
      discount: 11,
      badge: 'Best Seller'
    },
    {
      id: 'lam-002',
      name: 'Walnut Wood Finish Laminate',
      category: 'Laminates',
      price: 3200,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.6,
      reviews: 189,
      inStock: true
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
      badge: 'New'
    },
    {
      id: 'lou-002',
      name: 'Wooden Ventilation Louvers',
      category: 'Louvers',
      price: 2400,
      image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.5,
      reviews: 98,
      inStock: true
    },
    // Steel
    {
      id: 'steel-001',
      name: 'TMT Steel Bars - 12mm',
      category: 'Steel',
      price: 48000,
      originalPrice: 52000,
      image: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.9,
      reviews: 324,
      inStock: true,
      discount: 8,
      badge: 'Top Rated'
    },
    {
      id: 'steel-002',
      name: 'Galvanized Steel Sheets',
      category: 'Steel',
      price: 15600,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.4,
      reviews: 167,
      inStock: true
    },
    // Pipes
    {
      id: 'pipe-001',
      name: 'PVC Pipes - 4 inch',
      category: 'Pipes',
      price: 280,
      originalPrice: 320,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.6,
      reviews: 432,
      inStock: true,
      discount: 13
    },
    {
      id: 'pipe-002',
      name: 'Copper Water Pipes',
      category: 'Pipes',
      price: 850,
      image: 'https://images.unsplash.com/photo-1607006663776-a8bba0ef9a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.7,
      reviews: 201,
      inStock: true
    },
    // Tiles
    {
      id: 'tile-001',
      name: 'Ceramic Floor Tiles 60x60',
      category: 'Tiles',
      price: 65,
      originalPrice: 75,
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.5,
      reviews: 289,
      inStock: true,
      discount: 13
    }
  ];

  const filteredProducts = category 
    ? allProducts.filter(product => product.category === category)
    : allProducts;

  const toggleFavorite = (productId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              {category ? `${category} Products` : 'Featured Products'}
            </h2>
            <p className="text-muted-foreground mt-2">
              {filteredProducts.length} products available
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.badge && (
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {product.badge}
                      </Badge>
                    )}
                    {product.discount && (
                      <Badge variant="destructive">
                        {product.discount}% OFF
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${favorites.has(product.id) ? 'fill-current text-red-500' : ''}`} 
                      />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Stock Status */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="secondary">Out of Stock</Badge>
                    </div>
                  )}
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">
                      {product.category}
                    </h3>
                    <h4 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h4>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => onAddToCart(product.id)}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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
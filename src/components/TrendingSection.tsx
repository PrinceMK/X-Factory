import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, TrendingUp, Clock } from 'lucide-react';

interface TrendingSectionProps {
  onAddToCart: (productId: string) => void;
}

export function TrendingSection({ onAddToCart }: TrendingSectionProps) {
  const trendingProducts = [
    {
      id: 'trend-001',
      name: 'TMT Steel Bars 10mm',
      price: 68,
      originalPrice: 75,
      image: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.8,
      orders: 234,
      discount: 9
    },
    {
      id: 'trend-002',
      name: 'PVC Pipe 6 inch',
      price: 685,
      originalPrice: 750,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.7,
      orders: 189,
      discount: 9
    },
    {
      id: 'trend-003',
      name: 'Ceramic Tiles 2x2',
      price: 95,
      originalPrice: 110,
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.6,
      orders: 156,
      discount: 14
    },
    {
      id: 'trend-004',
      name: 'Wall Paint 10L',
      price: 1850,
      originalPrice: 2100,
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 4.5,
      orders: 134,
      discount: 12
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-foreground">
                Trending This Week
              </h2>
              <p className="text-sm text-muted-foreground">
                Most ordered items • Limited time offers
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="text-primary border-primary">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-md transition-all duration-200 bg-card border-border">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  
                  {/* Trending Badge */}
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                      🔥 {product.discount}% OFF
                    </Badge>
                  </div>
                  
                  {/* Delivery Time */}
                  <div className="absolute bottom-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded font-medium">
                    <Clock className="h-3 w-3 inline mr-1" />
                    45 min
                  </div>
                </div>

                <div className="p-3 space-y-2">
                  <h3 className="font-medium text-sm line-clamp-1 text-foreground">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">
                      • {product.orders} orders
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-foreground">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-xs text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 h-8 text-xs font-medium"
                    onClick={() => onAddToCart(product.id)}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Reorder Section */}
        <div className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Reorder in 30 seconds</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Sign in to see your previous orders and reorder instantly
            </p>
            <div className="flex gap-3 justify-center">
              <Button size="sm" className="bg-primary">
                View Order History
              </Button>
              <Button variant="outline" size="sm">
                Quick Reorder
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
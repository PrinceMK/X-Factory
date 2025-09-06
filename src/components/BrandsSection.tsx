import React from 'react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from './TranslationContext';

export function BrandsSection() {
  const { t } = useTranslation();

  const brands = [
    {
      id: 1,
      name: "Tata Steel",
      logo: "https://images.unsplash.com/photo-1599305445657-54e87df7ab66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      category: "Steel & Metal"
    },
    {
      id: 2,
      name: "Kajaria",
      logo: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      category: "Tiles"
    },
    {
      id: 3,
      name: "Century Ply",
      logo: "https://images.unsplash.com/photo-1617262869522-6740e6450f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      category: "Laminates"
    },
    {
      id: 4,
      name: "Asian Paints",
      logo: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      category: "Paints"
    },
    {
      id: 5,
      name: "Havells",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      category: "Electrical"
    },
    {
      id: 6,
      name: "Astral Pipes",
      logo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      category: "Pipes"
    },
    {
      id: 7,
      name: "JSW Steel",
      logo: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      category: "Steel"
    },
    {
      id: 8,
      name: "Supreme Pipes",
      logo: "https://images.unsplash.com/photo-1607006663776-a8bba0ef9a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      category: "Plumbing"
    },
    {
      id: 9,
      name: "Berger Paints",
      logo: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      category: "Paints"
    },
    {
      id: 10,
      name: "Legrand",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      category: "Electrical"
    },
    {
      id: 11,
      name: "Somany",
      logo: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      category: "Tiles"
    },
    {
      id: 12,
      name: "Greenply",
      logo: "https://images.unsplash.com/photo-1617262869522-6740e6450f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      category: "Laminates"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
            {t.trustedBrands}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.brandPartners}
          </p>
        </div>

        {/* Scrolling Brand Grid */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-brands gap-6 py-4">
            {[...brands, ...brands].map((brand, index) => (
              <Card 
                key={`${brand.id}-${index}`} 
                className="flex-shrink-0 w-32 h-32 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border group cursor-pointer"
              >
                <CardContent className="p-4 h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden mb-2 bg-muted flex items-center justify-center">
                    <ImageWithFallback
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-xs text-center text-foreground group-hover:text-primary transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center">
                    {brand.category}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-center">
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Brand Partners</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">10K+</div>
            <div className="text-sm text-muted-foreground">Products</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Cities</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">2Hr</div>
            <div className="text-sm text-muted-foreground">Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
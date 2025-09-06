import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from './TranslationContext';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

interface CategorySectionProps {
  onCategoryClick: (category: string) => void;
}

export function CategorySection({ onCategoryClick }: CategorySectionProps) {
  const { t } = useTranslation();
  
  const categories: Category[] = [
    {
      id: 'steel',
      name: 'Steel & Metal',
      description: 'High-grade steel, rods, and metal sheets',
      image: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      productCount: 150
    },
    {
      id: 'laminates',
      name: 'Laminates',
      description: 'Premium quality laminates and flooring',
      image: 'https://images.unsplash.com/photo-1617262869522-6740e6450f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBsYW1pbmF0ZXMlMjBmbG9vcmluZ3xlbnwxfHx8fDE3NTY5OTEzODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      productCount: 85
    },
    {
      id: 'pipes',
      name: 'Pipes & Fittings',
      description: 'PVC, steel pipes and all fittings',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      productCount: 120
    },
    {
      id: 'tiles',
      name: 'Tiles & Ceramics',
      description: 'Floor tiles, wall tiles, and ceramics',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      productCount: 200
    },
    {
      id: 'louvers',
      name: 'Louvers',
      description: 'Window louvers and ventilation solutions',
      image: 'https://images.unsplash.com/photo-1608255197886-430b29b497bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBsb3V2ZXJzJTIwYXJjaGl0ZWN0dXJhbHxlbnwxfHx8fDE3NTY5OTEzODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      productCount: 45
    },
    {
      id: 'paints',
      name: 'Paints & Coatings',
      description: 'Interior, exterior paints and coatings',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      productCount: 90
    },
    {
      id: 'electrical',
      name: 'Electrical',
      description: 'Wires, switches, and electrical components',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      productCount: 175
    },
    {
      id: 'plumbing',
      name: 'Plumbing',
      description: 'Bathroom fittings and plumbing supplies',
      image: 'https://images.unsplash.com/photo-1584622781564-1d987fda1aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      productCount: 110
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
            {t.shopByCategory}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fast delivery in 2-6 hours across all categories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              onClick={() => onCategoryClick(category.name)}
            >
              <CardContent className="p-4 text-center">
                <div className="aspect-square w-16 h-16 mx-auto mb-3 overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {category.productCount}+ items
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {t.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}
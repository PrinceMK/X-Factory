import React from 'react';
import { Card, CardContent } from './ui/card';
import { 
  Shield, 
  Truck, 
  Clock, 
  Award, 
  Headphones, 
  CreditCard,
  RotateCcw,
  MapPin
} from 'lucide-react';

export function ProductBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All products are 100% authentic and quality tested before dispatch",
      color: "text-green-600"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day dispatch with delivery tracking for your convenience",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries",
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Competitive pricing with bulk discounts and seasonal offers",
      color: "text-orange-600"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Multiple payment options with secure transaction processing",
      color: "text-green-600"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "Hassle-free return policy within 30 days of purchase",
      color: "text-red-600"
    },
    {
      icon: MapPin,
      title: "Pan India Delivery",
      description: "Delivery across all major cities and remote locations",
      color: "text-blue-600"
    },
    {
      icon: Headphones,
      title: "Expert Advice",
      description: "Technical consultation from our material experts",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose X-Factory?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best building materials shopping experience 
            with unmatched service and quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-border">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="mb-4">
                    <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className={`h-8 w-8 text-primary`} />
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground flex-1">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Products</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">5★</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
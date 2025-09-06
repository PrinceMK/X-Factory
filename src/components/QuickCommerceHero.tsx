import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Clock, MapPin, Truck, Download, Apple, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from './TranslationContext';
import homerunAppImage from 'figma:asset/9ec4987ee6b95c9e5a03568b6473a982763311fa.png';
import orderLimitImage from 'figma:asset/268202469556c91b3f15b20cd187a2b2779fda05.png';

interface QuickCommerceHeroProps {
  onShopNowClick: () => void;
}

export function QuickCommerceHero({ onShopNowClick }: QuickCommerceHeroProps) {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      type: 'main',
      title: "Building materials delivered in 2 hrs",
      subtitle: "Everything you need for construction, now at your doorstep with fast delivery",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      badge: "2Hr Delivery",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
              <Clock className="h-4 w-4 mr-2" />
              {t.fastDelivery}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Building materials delivered in <span className="text-primary">2 hrs</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Everything you need for construction, now at your doorstep with fast delivery
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={onShopNowClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              {t.shopNow}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              {t.orderNow}
            </Button>
          </div>

          {/* Quick Features */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">60 Mins</div>
                <div className="text-sm text-muted-foreground">Delivery</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">Low Prices</div>
                <div className="text-sm text-muted-foreground">Best Rates</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">Free Delivery</div>
                <div className="text-sm text-muted-foreground">Above ₹500</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      type: 'app',
      title: "Introducing the X-Factory App",
      subtitle: "Everything you love about X-Factory, made better.",
      image: homerunAppImage,
      badge: "New Launch",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
              <Download className="h-4 w-4 mr-2" />
              Download Now
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Introducing the <span className="text-primary">X-Factory App</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Everything you love about X-Factory, made better.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-dark-brown hover:bg-dark-brown/90 text-white px-8 py-6 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Get it on Google Play
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-dark-brown text-dark-brown hover:bg-dark-brown hover:text-white px-8 py-6 text-lg"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download on App Store
            </Button>
          </div>

          {/* App Features */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="text-center">
              <div className="font-bold text-primary">60 Mins</div>
              <div className="text-sm text-muted-foreground">Delivery</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-primary">Low Prices</div>
              <div className="text-sm text-muted-foreground">Best Deals</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-primary">No Minimum</div>
              <div className="text-sm text-muted-foreground">Order Quantity</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-primary">Convenient</div>
              <div className="text-sm text-muted-foreground">Pay on Delivery</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      type: 'delivery',
      title: "Order weight limit increased to 1500 Kgs",
      subtitle: "That's upto 30 bags of Laminates! No additional delivery charges.",
      image: orderLimitImage,
      badge: "Enhanced Service",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
              <Truck className="h-4 w-4 mr-2" />
              Serving Hyderabad with ❤️
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Order weight limit increased to <span className="text-green-600">1500 Kgs</span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground">
                That's upto <span className="text-blue-600 font-bold">30 bags</span> of Laminates!
              </p>
              <p className="text-lg text-muted-foreground">
                No additional delivery charges.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={onShopNowClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
            >
              Order Bulk Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-6 text-lg"
            >
              View Bulk Pricing
            </Button>
          </div>

          {/* Weight Capacity Stats */}
          <div className="bg-card/50 rounded-xl p-6 border border-border">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">15 BAGS</div>
                <div className="text-sm text-muted-foreground">750 KG</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">22.5 BAGS</div>
                <div className="text-sm text-muted-foreground">1125 KG</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">30 BAGS</div>
                <div className="text-sm text-muted-foreground">1500 KG</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/10 overflow-hidden min-h-[600px]">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Dynamic Content */}
          <div className="space-y-6 order-2 lg:order-1">
            {currentSlideData.content}
          </div>

          {/* Dynamic Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/20 relative">
              {currentSlideData.image && (
                <ImageWithFallback
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              )}
              
              {/* Image Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  {currentSlideData.badge}
                </span>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30 w-2'
                  }`}
                />
              ))}
            </div>

            {/* Floating Stats - Only show on main slide */}
            {currentSlideData.type === 'main' && (
              <>
                <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border hidden lg:block">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">50K+</div>
                    <div className="text-xs text-muted-foreground">Orders Delivered</div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-lg border border-border hidden lg:block">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">2Hr</div>
                    <div className="text-xs text-muted-foreground">Delivery Time</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
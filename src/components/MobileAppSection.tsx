import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from './TranslationContext';
import { Smartphone, Star, Download, Shield, Truck, Clock } from 'lucide-react';

export function MobileAppSection() {
  const { t } = useTranslation();

  const appFeatures = [
    {
      icon: Clock,
      title: "Quick Ordering",
      description: "Order in just 3 taps"
    },
    {
      icon: Truck,
      title: "Live Tracking",
      description: "Track your delivery in real-time"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "100% safe & secure transactions"
    },
    {
      icon: Star,
      title: "Exclusive Offers",
      description: "App-only deals & discounts"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Smartphone className="h-4 w-4 mr-2" />
                Mobile App
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                {t.downloadApp}
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Get faster checkout, exclusive deals, and track your orders on the go. 
                Download the X-Factory app for the best building materials shopping experience.
              </p>
            </div>

            {/* App Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-black hover:bg-black/90 text-white px-6 py-3 h-14"
              >
                <div className="flex items-center gap-3">
                  <div className="text-white">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-medium">App Store</div>
                  </div>
                </div>
              </Button>

              <Button 
                size="lg"
                className="bg-black hover:bg-black/90 text-white px-6 py-3 h-14"
              >
                <div className="flex items-center gap-3">
                  <div className="text-white">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-medium">Google Play</div>
                  </div>
                </div>
              </Button>
            </div>

            {/* App Rating */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium">4.8</span>
              </div>
              <div className="text-sm text-muted-foreground">
                10K+ downloads • 4.8★ rating
              </div>
            </div>
          </div>

          {/* Phone Mockups */}
          <div className="relative">
            <div className="flex justify-center">
              {/* Main Phone */}
              <div className="relative z-10">
                <div className="w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10">
                      <div className="p-4 space-y-4">
                        {/* App Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                              <span className="text-primary-foreground font-bold text-sm">X</span>
                            </div>
                            <span className="font-bold text-primary">X-Factory</span>
                          </div>
                          <div className="relative">
                            <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center">
                              <span className="text-primary-foreground text-xs">3</span>
                            </div>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-sm">
                          <div className="h-4 w-4 text-primary">📍</div>
                          <span>Deliver to New Delhi</span>
                        </div>

                        {/* Categories */}
                        <div className="grid grid-cols-2 gap-3">
                          {['Steel', 'Tiles', 'Paints', 'Electrical'].map((cat) => (
                            <div key={cat} className="aspect-square bg-card rounded-lg p-3 text-center">
                              <div className="h-8 w-8 bg-primary/10 rounded-lg mx-auto mb-2"></div>
                              <div className="text-xs font-medium">{cat}</div>
                            </div>
                          ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="space-y-2">
                          <div className="h-12 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-primary-foreground font-medium">2 Hour Delivery</span>
                          </div>
                          <div className="h-8 bg-muted rounded-lg"></div>
                          <div className="h-8 bg-muted rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Phone (slightly offset) */}
              <div className="absolute top-8 left-8 z-0 opacity-30">
                <div className="w-64 h-[520px] bg-gray-300 rounded-[3rem] p-2">
                  <div className="w-full h-full bg-gray-100 rounded-[2.5rem]"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 -right-4 bg-card rounded-xl p-3 shadow-lg border border-border">
              <div className="text-center">
                <Download className="h-6 w-6 text-primary mx-auto mb-1" />
                <div className="text-xs text-muted-foreground">Quick Download</div>
              </div>
            </div>

            <div className="absolute bottom-20 -left-4 bg-card rounded-xl p-3 shadow-lg border border-border">
              <div className="text-center">
                <Clock className="h-6 w-6 text-primary mx-auto mb-1" />
                <div className="text-xs text-muted-foreground">2Hr Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import { useTranslation } from './TranslationContext';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-brown text-white">
      {/* Newsletter Section */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center text-primary-foreground">
            <h3 className="text-xl font-bold mb-3">
              Stay Updated with Latest Offers
            </h3>
            <p className="mb-4 opacity-90 text-sm">
              Subscribe to our newsletter and get exclusive deals on building materials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground text-foreground border-0"
              />
              <Button 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">X</span>
              </div>
              <span className="text-xl font-bold text-primary">X-Factory</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for premium building materials. Quality products, 
              competitive prices, and exceptional service for all your construction needs.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {[t.aboutUs, 'Our Products', 'Bulk Orders', 'Track Order', 'Returns', 'Help Center'].map((link) => (
                <Button 
                  key={link}
                  variant="link" 
                  className="p-0 h-auto text-gray-300 hover:text-primary justify-start text-sm"
                >
                  {link}
                </Button>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t.categories}</h4>
            <nav className="space-y-2">
              {['Steel & Metal', 'Laminates', 'Pipes & Fittings', 'Tiles & Ceramics', 'Louvers', 'Paints & Coatings', 'Electrical', 'Plumbing'].map((category) => (
                <Button 
                  key={category}
                  variant="link" 
                  className="p-0 h-auto text-gray-300 hover:text-primary justify-start text-sm"
                >
                  {category}
                </Button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t.contactUs}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Industrial Area,</p>
                  <p>Sector 15, Gurgaon,</p>
                  <p>Haryana 122001</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-gray-300">+91 98765 43211</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@x-factory.com</p>
                  <p className="text-gray-300">support@x-factory.com</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h5 className="font-medium mb-2">Business Hours</h5>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-300 text-sm">
            © {currentYear} X-Factory. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-primary">
              {t.privacyPolicy}
            </Button>
            <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-primary">
              {t.termsOfService}
            </Button>
            <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-primary">
              Cookie Policy
            </Button>
            <Button variant="link" className="p-0 h-auto text-gray-300 hover:text-primary">
              Sitemap
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
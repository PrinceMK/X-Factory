import React, { useState } from 'react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ShoppingCart, Menu, User, Search, Phone, Mail, MapPin, Clock, Truck } from 'lucide-react';
import { Input } from './ui/input';
import { useTranslation } from './TranslationContext';

interface HeaderProps {
  onCategoryClick: (category: string) => void;
  cartItemCount: number;
  onSignInClick: () => void;
  onCartClick: () => void;
}

export function Header({ onCategoryClick, cartItemCount, onSignInClick, onCartClick }: HeaderProps) {
  const { language, setLanguage, t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPincode, setSelectedPincode] = useState('500001');

  const categories = [
    'Steel & Metal', 'Laminates', 'Pipes & Fittings', 'Tiles & Ceramics', 'Paints & Coatings', 
    'Electrical', 'Plumbing', 'Louvers', 'Hardware', 'Safety Equipment'
  ];

  const languages = [
    { value: 'English', label: 'English' },
    { value: 'Telugu', label: 'తెలుగు' },
    { value: 'Urdu', label: 'اردو' },
    { value: 'Hindi', label: 'हिंदी' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                +91 98765 43210
              </span>
              <span className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                info@x-factory.com
              </span>
              <span className="flex items-center gap-1 font-medium">
                <Truck className="h-3 w-3" />
                {t.fastDelivery}
              </span>
              <span className="flex items-center gap-1 font-medium">
                <Clock className="h-3 w-3" />
                Free delivery on orders above ₹500
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
                <SelectTrigger className="w-24 h-6 text-xs bg-transparent border-primary-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">X</span>
            </div>
            <span className="text-2xl font-bold text-primary">X-Factory</span>
          </div>

          {/* Location & Search - Desktop */}
          <div className="hidden md:flex items-center gap-4 flex-1 max-w-2xl mx-8">
            {/* Location Selector */}
            <div className="flex items-center gap-2 min-w-[200px]">
              <MapPin className="h-4 w-4 text-primary" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">{t.selectLocation}</span>
                <Select value={selectedPincode} onValueChange={setSelectedPincode}>
                  <SelectTrigger className="w-full h-8 text-sm border-0 p-0 focus:ring-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500001">Hyderabad - 500001</SelectItem>
                    <SelectItem value="110001">New Delhi - 110001</SelectItem>
                    <SelectItem value="400001">Mumbai - 400001</SelectItem>
                    <SelectItem value="560001">Bangalore - 560001</SelectItem>
                    <SelectItem value="600001">Chennai - 600001</SelectItem>
                    <SelectItem value="700001">Kolkata - 700001</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-input-background"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onSignInClick}
              className="hidden md:flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              {t.signIn}
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
              <span className="hidden md:inline ml-2">{t.cart}</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-4 mt-8">
                  <Input
                    type="search"
                    placeholder={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-input-background"
                  />
                  
                  <Button onClick={onSignInClick} className="justify-start">
                    <User className="h-4 w-4 mr-2" />
                    {t.signIn}
                  </Button>

                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">{t.categories}</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant="ghost"
                          className="w-full justify-start"
                          onClick={() => onCategoryClick(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Categories Navigation - Desktop */}
      <div className="hidden md:block border-t border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-8 py-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                size="sm"
                onClick={() => onCategoryClick(category)}
                className="hover:text-primary"
              >
                {category}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
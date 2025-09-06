import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'English' | 'Telugu' | 'Urdu' | 'Hindi';

interface Translations {
  // Header
  searchPlaceholder: string;
  selectLocation: string;
  fastDelivery: string;
  categories: string;
  signIn: string;
  cart: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  shopNow: string;
  orderNow: string;
  
  // Quick Delivery
  quickDelivery: string;
  delivery2Hours: string;
  qualityAssured: string;
  support24x7: string;
  
  // Categories
  shopByCategory: string;
  allCategories: string;
  viewAll: string;
  
  // Products
  featuredProducts: string;
  addToCart: string;
  outOfStock: string;
  reviews: string;
  
  // Brands
  trustedBrands: string;
  brandPartners: string;
  
  // Mobile App
  downloadApp: string;
  getAppNow: string;
  appFeatures: string;
  
  // Footer
  aboutUs: string;
  contactUs: string;
  privacyPolicy: string;
  termsOfService: string;
  
  // Common
  home: string;
  products: string;
  price: string;
  quantity: string;
  total: string;
  checkout: string;
  proceed: string;
}

const translations: Record<Language, Translations> = {
  English: {
    searchPlaceholder: 'Search for building materials...',
    selectLocation: 'Select Location',
    fastDelivery: '2 Hour Delivery',
    categories: 'Categories',
    signIn: 'Sign In',
    cart: 'Cart',
    heroTitle: 'Building Materials Delivered in 2 Hours',
    heroSubtitle: 'Premium quality construction materials at your doorstep. Fast, reliable, and affordable.',
    shopNow: 'Shop Now',
    orderNow: 'Order Now',
    quickDelivery: 'Quick Delivery',
    delivery2Hours: '2 Hour Delivery',
    qualityAssured: 'Quality Assured',
    support24x7: '24x7 Support',
    shopByCategory: 'Shop by Category',
    allCategories: 'All Categories',
    viewAll: 'View All',
    featuredProducts: 'Featured Products',
    addToCart: 'Add to Cart',
    outOfStock: 'Out of Stock',
    reviews: 'reviews',
    trustedBrands: 'Trusted Brands',
    brandPartners: 'Our Brand Partners',
    downloadApp: 'Download Our App',
    getAppNow: 'Get App Now',
    appFeatures: 'App Features',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    home: 'Home',
    products: 'Products',
    price: 'Price',
    quantity: 'Quantity',
    total: 'Total',
    checkout: 'Checkout',
    proceed: 'Proceed'
  },
  Telugu: {
    searchPlaceholder: 'నిర్మాణ సామగ్రిని వెతకండి...',
    selectLocation: 'లొకేషన్ ఎంచుకోండి',
    fastDelivery: '2 గంటల డెలివరీ',
    categories: 'వర్గాలు',
    signIn: 'సైన్ ఇన్',
    cart: 'కార్ట్',
    heroTitle: '2 గంటల్లో నిర్మాణ సామగ్రి డెలివరీ',
    heroSubtitle: 'మీ ఇంటి వద్దకే ప్రీమియం నాణ్యత నిర్మాణ సామగ్రి. వేగంగా, నమ్మకంగా మరియు సరసమైన ధరలలో.',
    shopNow: 'ఇప్పుడే షాప్ చేయండి',
    orderNow: 'ఇప్పుడే ఆర్డర్ చేయండి',
    quickDelivery: 'వేగ డెలివరీ',
    delivery2Hours: '2 గంటల డెలివరీ',
    qualityAssured: 'నాణ్యత హామీ',
    support24x7: '24x7 మద్దతు',
    shopByCategory: 'వర్గం ప్రకారం షాప్ చేయండి',
    allCategories: 'అన్ని వర్గాలు',
    viewAll: 'అన్నీ చూడండి',
    featuredProducts: 'ఫీచర్డ్ ప్రొడక్ట్స్',
    addToCart: 'కార్ట్‌కు జోడించండి',
    outOfStock: 'స్టాక్ లేదు',
    reviews: 'సమీక్షలు',
    trustedBrands: 'నమ్మకమైన బ్రాండ్లు',
    brandPartners: 'మా బ్రాండ్ భాగస్వాములు',
    downloadApp: 'మా యాప్ డౌన్‌లోడ్ చేయండి',
    getAppNow: 'యాప్ ఇప్పుడే పొందండి',
    appFeatures: 'యాప్ ఫీచర్లు',
    aboutUs: 'మా గురించి',
    contactUs: 'మమ్మల్ని సంప్రదించండి',
    privacyPolicy: 'గోప్యతా విధానం',
    termsOfService: 'సేవా నిబంధనలు',
    home: 'ముంగిలి',
    products: 'ఉత్పత్తులు',
    price: 'ధర',
    quantity: 'పరిమాణం',
    total: 'మొత్తం',
    checkout: 'చెక్అవుట్',
    proceed: 'కొనసాగించండి'
  },
  Urdu: {
    searchPlaceholder: 'تعمیراتی مواد تلاش کریں...',
    selectLocation: 'مقام منتخب کریں',
    fastDelivery: '2 گھنٹے ڈیلیوری',
    categories: 'اقسام',
    signIn: 'سائن ان',
    cart: 'ٹوکری',
    heroTitle: '2 گھنٹوں میں تعمیراتی مواد کی ڈیلیوری',
    heroSubtitle: 'آپ کے دروازے پر اعلیٰ معیار کا تعمیراتی مواد۔ تیز، قابل اعتماد اور سستی۔',
    shopNow: 'ابھی خریداری کریں',
    orderNow: 'ابھی آرڈر کریں',
    quickDelivery: 'فوری ڈیلیوری',
    delivery2Hours: '2 گھنٹے ڈیلیوری',
    qualityAssured: 'معیار کی ضمانت',
    support24x7: '24x7 سپورٹ',
    shopByCategory: 'قسم کے مطابق خریداری کریں',
    allCategories: 'تمام اقسام',
    viewAll: 'سب دیکھیں',
    featuredProducts: 'نمایاں مصنوعات',
    addToCart: 'ٹوکری میں شامل کریں',
    outOfStock: 'اسٹاک ختم',
    reviews: 'جائزے',
    trustedBrands: 'قابل اعتماد برانڈز',
    brandPartners: 'ہمارے برانڈ پارٹنرز',
    downloadApp: 'ہماری ایپ ڈاؤن لوڈ کریں',
    getAppNow: 'ایپ ابھی حاصل کریں',
    appFeatures: 'ایپ کی خصوصیات',
    aboutUs: 'ہمارے بارے میں',
    contactUs: 'ہم سے رابطہ کریں',
    privacyPolicy: 'رازداری کی پالیسی',
    termsOfService: 'سروس کی شرائط',
    home: 'گھر',
    products: 'مصنوعات',
    price: 'قیمت',
    quantity: 'مقدار',
    total: 'کل',
    checkout: 'چیک آؤٹ',
    proceed: 'آگے بڑھیں'
  },
  Hindi: {
    searchPlaceholder: 'निर्माण सामग्री खोजें...',
    selectLocation: 'स्थान चुनें',
    fastDelivery: '2 घंटे डिलीवरी',
    categories: 'श्रेणियाँ',
    signIn: 'साइन इन',
    cart: 'कार्ट',
    heroTitle: '2 घंटे में निर्माण सामग्री डिलीवरी',
    heroSubtitle: 'आपके दरवाजे पर प्रीमियम गुणवत्ता की निर्माण सामग्री। तेज़, भरोसेमंद और किफायती।',
    shopNow: 'अभी खरीदारी करें',
    orderNow: 'अभी ऑर्डर करें',
    quickDelivery: 'त्वरित डिलीवरी',
    delivery2Hours: '2 घंटे डिलीवरी',
    qualityAssured: 'गुणवत्ता आश्वासन',
    support24x7: '24x7 सहायता',
    shopByCategory: 'श्रेणी के अनुसार खरीदारी करें',
    allCategories: 'सभी श्रेणियाँ',
    viewAll: 'सभी देखें',
    featuredProducts: 'फीचर्ड उत्पाद',
    addToCart: 'कार्ट में जोड़ें',
    outOfStock: 'स्टॉक में नहीं',
    reviews: 'समीक्षाएं',
    trustedBrands: 'विश्वसनीय ब्रांड्स',
    brandPartners: 'हमारे ब्रांड पार्टनर्स',
    downloadApp: 'हमारा ऐप डाउनलोड करें',
    getAppNow: 'ऐप अभी पाएं',
    appFeatures: 'ऐप की विशेषताएं',
    aboutUs: 'हमारे बारे में',
    contactUs: 'संपर्क करें',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'सेवा की शर्तें',
    home: 'होम',
    products: 'उत्पाद',
    price: 'मूल्य',
    quantity: 'मात्रा',
    total: 'कुल',
    checkout: 'चेकआउट',
    proceed: 'आगे बढ़ें'
  }
};

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('English');

  const contextValue: TranslationContextType = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
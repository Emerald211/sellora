// ============================================
// LANDING PAGE COMPONENT TYPES
// ============================================

import { ReactNode } from 'react';

// ============================================
// Problem Section Types
// ============================================

export interface ProblemCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

// ============================================
// Solution/Steps Section Types
// ============================================

export interface StepCardProps {
  number: string | number;
  title: string;
  description: string;
  color: 'orange' | 'blue' | 'green' | 'purple' | 'red';
}

// ============================================
// Benefits Section Types
// ============================================

export interface BenefitCardProps {
  icon: ReactNode;
  stat: string;
  label: string;
}

// ============================================
// Template Showcase Types
// ============================================

export interface TemplateShowcaseProps {
  number: number;
  name: string;
  bestFor: string;
}

// Full template data structure
export interface Template {
  id: string;
  number: number;
  name: string;
  bestFor: string;
  thumbnail?: string;
  description?: string;
  features?: string[];
}

// ============================================
// Feature Tag Types
// ============================================

export interface FeatureProps {
  text: string;
  icon?: ReactNode;
}

// ============================================
// Testimonial Types
// ============================================

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  result: string;
  avatar?: string;
  rating?: number;
}

// Full testimonial data structure
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  result: string;
  avatar?: string;
  rating?: number;
  location?: string;
}

// ============================================
// Pricing Feature Types
// ============================================

export interface PricingFeatureProps {
  text: string;
  included?: boolean;
  icon?: ReactNode;
}

// Full pricing data structure
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: 'month' | 'year' | 'lifetime';
  features: string[];
  popular?: boolean;
  cta: string;
  description?: string;
}

// ============================================
// Navigation Types
// ============================================

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavigationProps {
  links: NavLink[];
  ctaText?: string;
  ctaHref?: string;
  logo?: ReactNode;
  mobileMenuOpen?: boolean;
  onToggleMobileMenu?: () => void;
}

// ============================================
// CTA Button Types
// ============================================

export interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

// ============================================
// Hero Section Types
// ============================================

export interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: CTAButtonProps;
  secondaryCTA?: CTAButtonProps;
  badge?: {
    icon?: ReactNode;
    text: string;
  };
  features?: string[];
  image?: string;
}

// ============================================
// Stats/Metrics Types
// ============================================

export interface StatCardProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  prefix?: string;
  suffix?: string;
}

// ============================================
// Section Types
// ============================================

export interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
}

// ============================================
// Announcement Bar Types
// ============================================

export interface AnnouncementBarProps {
  message: string;
  icon?: ReactNode;
  link?: {
    text: string;
    href: string;
  };
  dismissible?: boolean;
  variant?: 'info' | 'success' | 'warning' | 'error';
}

// ============================================
// Footer Types
// ============================================

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections: FooterSection[];
  logo?: ReactNode;
  description?: string;
  copyright?: string;
  socialLinks?: {
    platform: string;
    href: string;
    icon: ReactNode;
  }[];
}

// ============================================
// Full Landing Page Types
// ============================================

export interface LandingPageData {
  hero: HeroProps;
  announcement?: AnnouncementBarProps;
  problems: ProblemCardProps[];
  steps: StepCardProps[];
  benefits: BenefitCardProps[];
  templates: Template[];
  testimonials: Testimonial[];
  pricing: PricingPlan;
  footer: FooterProps;
}

// ============================================
// API/Data Types (for when connected to backend)
// ============================================

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

// ============================================
// Example Usage
// ============================================

// Example: How to use these types in your components

/*
import { ProblemCardProps } from './types';

const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title, description }) => {
  return (
    <div>
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
*/

// Example: Data array with types

/*
const problems: ProblemCardProps[] = [
  {
    icon: <AlertCircle />,
    title: "Your Landing Page Looks Unprofessional",
    description: "Customers don't trust ugly pages..."
  },
  // ... more items
];
*/

// Example: Template data with types

/*
const templates: Template[] = [
  {
    id: 'template_1',
    number: 1,
    name: 'The Minimalist',
    bestFor: 'Digital Products',
    thumbnail: '/images/template-1.png',
    features: ['Clean design', 'Fast loading', 'Mobile optimized']
  },
  // ... more templates
];
*/
/**
 * ENERGY MOBILITY — Shared domain types.
 * These intentionally mirror the NestJS DTOs that will back the app
 * once the API is live (see /api/v1 in the backend phases).
 */

export type Status = "ACTIVE" | "INACTIVE" | "DRAFT" | "ARCHIVED";
export type PublishStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export type ProductCategoryCode =
  | "FUEL"
  | "EV"
  | "CNG"
  | "FUEL_DELIVERY"
  | "FLEET"
  | "LOYALTY"
  | "FOOD"
  | "CAFE"
  | "CONVENIENCE"
  | "LUBRICANTS"
  | "OIL_CHANGE"
  | "NITROGEN"
  | "PAYMENT"
  | "AVIATION"
  | "OTHER";

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  code: ProductCategoryCode;
  description: string;
  icon: string;
  displayOrder: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategoryCode;
  shortDescription: string;
  description: string;
  heroImage?: string;
  thumbnail?: string;
  icon: string;
  features: string[];
  benefits: string[];
  ctaText: string;
  ctaUrl: string;
  status: Status;
  seoTitle: string;
  seoDescription: string;
  createdAt: string;
  updatedAt: string;
}

export type StationServiceType =
  | "FUEL"
  | "EV"
  | "CNG"
  | "CAFE"
  | "CONVENIENCE"
  | "WASHROOM"
  | "AIR"
  | "LUBRICANTS"
  | "FOOD"
  | "TRUCK_STOP"
  | "PARKING"
  | "NITROGEN"
  | "OIL_CHANGE"
  | "ATM"
  | "OTHER";

export interface StationService {
  type: StationServiceType;
  label: string;
}

export interface FuelPrice {
  fuelType: "PETROL" | "DIESEL" | "CNG" | "AUTO_LPG" | "OTHER";
  price: number;
  currency: string;
  effectiveDate: string;
  updatedAt: string;
}

export interface Station {
  id: string;
  stationCode: string;
  stationName: string;
  slug: string;
  address: string;
  city: string;
  district: string;
  state: string;
  country: string;
  pincode: string;
  latitude: number;
  longitude: number;
  phone: string;
  email?: string;
  openingTime: string;
  closingTime: string;
  is24Hours: boolean;
  status: Status;
  services: StationService[];
  prices?: FuelPrice[];
  createdAt: string;
  updatedAt: string;
}

export interface EVCharger {
  chargerType: "DC_FAST" | "AC" | "BATTERY_SWAP";
  connectorType: string;
  powerKW: number;
  numberOfConnectors: number;
  availability: "AVAILABLE" | "OCCUPIED" | "OFFLINE";
  chargingPrice: number; // ₹/kWh
  operatingHours: string;
}

export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  featuredImage?: string;
  category: string; // category slug
  author: string;
  publishedAt: string;
  status: PublishStatus;
  seoTitle: string;
  seoDescription: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  categorySlug: string;
  displayOrder: number;
  status: Status;
}

export interface Job {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  employmentType: "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP";
  description: string;
  requirements: string[];
  status: PublishStatus;
  publishedAt: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  category: string;
  consent: boolean;
  createdAt: string;
}

export interface PartnershipInquiry {
  id: string;
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  partnershipType: string;
  message: string;
  consent: boolean;
  createdAt: string;
}

export interface UserRole {
  id: string;
  name: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "SUPPORT";
  label: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole["name"];
}
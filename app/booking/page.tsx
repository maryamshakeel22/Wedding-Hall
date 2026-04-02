"use client";

import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
import { Calendar, Heart, Sparkles, Check } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Instant Confirmation",
    description: "Get quick response within 24 hours of your booking request",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Dedicated event coordinator for your special day",
  },
  {
    icon: Sparkles,
    title: "Premium Packages",
    description: "Customizable packages to suit your needs and budget",
  },
];

const benefits = [
  "Flexible cancellation policy",
  "Transparent pricing with no hidden fees",
  "Dedicated event coordinator",
  "Premium vendor partnerships",
  "Customizable packages",
  "State-of-the-art facilities",
];

function BookingContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Booking Form */}
      <div className="lg:col-span-2">
        <BookingForm />
      </div>

      {/* Sidebar */}
      <div className="space-y-6 lg:space-y-8">
        {/* Features */}
        <div className="card rounded-3xl p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-6">
            Why Book With Us?
          </h3>
          <div className="space-y-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1 text-sm sm:text-base">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits List */}
        <div className="card rounded-3xl p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-6">
            What's Included
          </h3>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--gold)]/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[var(--gold)]" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="card rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] border-none">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Need Help?</h3>
          <p className="text-white/90 mb-6 text-sm">
            Our team is here to assist you with any questions or special requirements.
          </p>
          <div className="space-y-3">
            <a href="tel:+923001234567" className="flex items-center space-x-3 hover:text-white/80 transition-colors">
              <span className="font-semibold">📞</span>
              <span className="text-sm">+92 300 1234567</span>
            </a>
            <a href="mailto:info@royalweddinghall.com" className="flex items-center space-x-3 hover:text-white/80 transition-colors">
              <span className="font-semibold">✉️</span>
              <span className="text-sm">info@royalweddinghall.com</span>
            </a>
          </div>
        </div>

        {/* Availability Notice */}
        <div className="card rounded-3xl p-6 sm:p-8">
          <div className="flex items-start space-x-3">
            <Sparkles className="w-6 h-6 text-[var(--gold)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-2">
                Peak Season Notice
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                December to February is our peak wedding season. We recommend 
                booking at least 3-6 months in advance to secure your preferred date.
              </p>
              <div className="flex items-center space-x-2 text-[var(--gold)] font-medium text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Early bird discounts available!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--pink-soft)] via-white to-[var(--gold-light)] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="gradient-text">Book Your</span>{" "}
            <span className="text-gray-800 dark:text-white">Special Day</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Reserve your date at Royal Wedding Hall and let us create 
            unforgettable memories for you and your loved ones.
          </p>
        </div>

        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-[var(--gold)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Loading booking form...</p>
            </div>
          </div>
        }>
          <BookingContent />
        </Suspense>
      </div>
    </div>
  );
}

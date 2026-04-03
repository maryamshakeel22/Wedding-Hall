"use client";

import { Suspense } from "react";
import { useUser } from "@clerk/nextjs";
import BookingForm from "@/components/BookingForm";
import { Calendar, Heart, Sparkles, Check, Loader2 } from "lucide-react";

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

function LoadingState() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-gold/20" />
          <div className="absolute inset-0 rounded-full border-4 border-gold border-t-transparent animate-spin" />
        </div>
        <p className="text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}

function BookingContent() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <LoadingState />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Booking Form */}
      <div className="lg:col-span-2">
        <BookingForm user={user} />
      </div>

      {/* Sidebar */}
      <div className="space-y-6 lg:space-y-8">
        {/* Features */}
        <div className="card-elevated rounded-3xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-text-primary mb-6">
            Why Book With Us?
          </h3>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center flex-shrink-0 shadow-md">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-text-tertiary text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits List */}
        <div className="card-elevated rounded-3xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-text-primary mb-6">
            What's Included
          </h3>
          <ul className="space-y-3.5">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-text-secondary text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="card-elevated rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-gold to-gold-light border-none">
          <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
          <p className="text-white/90 mb-6 text-sm">
            Our team is here to assist you with any questions or special requirements.
          </p>
          <div className="space-y-3">
            <a href="tel:+923001234567" className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors">
              <span className="text-xl">📞</span>
              <span className="text-sm font-medium">+92 300 1234567</span>
            </a>
            <a href="mailto:info@royalweddinghall.com" className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors">
              <span className="text-xl">✉️</span>
              <span className="text-sm font-medium">info@royalweddinghall.com</span>
            </a>
          </div>
        </div>

        {/* Availability Notice */}
        <div className="card-elevated rounded-3xl p-6 sm:p-8">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-gold-pale dark:bg-gold/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                Peak Season Notice
              </h3>
              <p className="text-text-tertiary text-sm mb-3">
                December to February is our peak wedding season. We recommend
                booking at least 3-6 months in advance to secure your preferred date.
              </p>
              <div className="flex items-center space-x-2 text-gold-dark dark:text-gold font-medium text-sm">
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
    <div className="min-h-screen bg-gradient-to-br from-pink-soft via-background to-champagne dark:from-background dark:via-background-secondary dark:to-pink-soft py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 rounded-full badge-soft mb-6">
            Reservations
          </span>
          <h1 className="text-display mb-4">
            <span className="gradient-text">Book Your</span>{" "}
            <span className="text-text-primary">Special Day</span>
          </h1>
          <p className="text-body max-w-2xl mx-auto text-balance">
            Reserve your date at Royal Wedding Hall and let us create
            unforgettable memories for you and your loved ones.
          </p>
        </div>

        <Suspense fallback={<LoadingState />}>
          <BookingContent />
        </Suspense>
      </div>
    </div>
  );
}

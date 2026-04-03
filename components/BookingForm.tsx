"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DayPicker } from "react-day-picker";
import { Calendar, Users, Phone, User as UserIcon, Mail, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

const eventTypes = [
  { value: "wedding", label: "Wedding Ceremony" },
  { value: "mehndi", label: "Mehndi Event" },
  { value: "birthday", label: "Birthday Party" },
  { value: "reception", label: "Reception" },
  { value: "engagement", label: "Engagement" },
  { value: "walima", label: "Walima" },
  { value: "corporate", label: "Corporate Event" },
  { value: "other", label: "Other" },
];

const guestOptions = [
  { value: "50-100", label: "50-100 Guests" },
  { value: "100-200", label: "100-200 Guests" },
  { value: "200-300", label: "200-300 Guests" },
  { value: "300-500", label: "300-500 Guests" },
  { value: "500-750", label: "500-750 Guests" },
  { value: "750-1000", label: "750-1000 Guests" },
  { value: "1000+", label: "1000+ Guests" },
];

interface BookingFormProps {
  user: any | null;
}

export default function BookingForm({ user }: BookingFormProps) {
  const searchParams = useSearchParams();
  const preselectedEvent = searchParams.get("event");

  const [formData, setFormData] = useState({
    name: user?.fullName || user?.primaryEmailAddress?.emailAddress || "",
    phone: "",
    email: user?.primaryEmailAddress?.emailAddress || "",
    eventType: preselectedEvent || "",
    date: undefined as Date | undefined,
    guests: "",
    message: "",
  });

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Pre-fill user data when available
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.fullName || user.primaryEmailAddress?.emailAddress || prev.name,
        email: user.primaryEmailAddress?.emailAddress || prev.email,
      }));
    }
  }, [user]);

  useEffect(() => {
    if (preselectedEvent) {
      setFormData((prev) => ({ ...prev, eventType: preselectedEvent }));
    }
  }, [preselectedEvent]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.eventType) newErrors.eventType = "Event type is required";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.guests) newErrors.guests = "Please select guest count";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: user?.fullName || user?.primaryEmailAddress?.emailAddress || "",
        phone: "",
        email: user?.primaryEmailAddress?.emailAddress || "",
        eventType: "",
        date: undefined,
        guests: "",
        message: "",
      });
      setSelectedDate(undefined);
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-elevated rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-[var(--gold)]/10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
        </motion.div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Booking Request Sent!
        </h3>
        <p className="text-[var(--text-secondary)] dark:text-gray-300 mb-6">
          Thank you for your interest. Our team will contact you within 24 hours to confirm your booking.
        </p>
        <p className="text-[var(--text-tertiary)] dark:text-gray-400 text-sm">
          This confirmation will close in a few seconds...
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="card-elevated rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl shadow-[var(--gold)]/5"
    >
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
          Book Your Special Day
        </h3>
        <p className="text-[var(--text-tertiary)] dark:text-gray-400">
          Fill in the details and we'll get back to you shortly
        </p>
      </div>

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="flex items-center space-x-2 text-sm font-medium text-[var(--text-secondary)] dark:text-gray-300 mb-2">
            <UserIcon className="w-4 h-4 text-[var(--gold)]" />
            <span>Full Name *</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`input-field w-full ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="flex items-center space-x-2 text-sm font-medium text-[var(--text-secondary)] dark:text-gray-300 mb-2">
            <Phone className="w-4 h-4 text-[var(--gold)]" />
            <span>Phone Number *</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`input-field w-full ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
            placeholder="+92 300 1234567"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Email (Optional) */}
        <div>
          <label htmlFor="email" className="flex items-center space-x-2 text-sm font-medium text-[var(--text-secondary)] dark:text-gray-300 mb-2">
            <Mail className="w-4 h-4 text-[var(--gold)]" />
            <span>Email Address</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-field w-full"
            placeholder="your@email.com"
          />
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="eventType" className="flex items-center space-x-2 text-sm font-medium text-[var(--text-secondary)] dark:text-gray-300 mb-2">
            <Calendar className="w-4 h-4 text-[var(--gold)]" />
            <span>Event Type *</span>
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleInputChange}
            className={`input-field w-full bg-[var(--card-bg)] dark:bg-[var(--card-bg)] ${errors.eventType ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
          >
            <option value="">Select your event type</option>
            {eventTypes.map((event) => (
              <option key={event.value} value={event.value}>
                {event.label}
              </option>
            ))}
          </select>
          {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
        </div>

        {/* Date Picker */}
        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-[var(--text-secondary)] dark:text-gray-300 mb-2">
            <Calendar className="w-4 h-4 text-[var(--gold)]" />
            <span>Preferred Date *</span>
          </label>
          <div className="border border-[var(--card-border)] dark:border-white/10 rounded-2xl p-3 bg-[var(--card-bg)] dark:bg-[var(--card-bg)] overflow-x-auto">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                setFormData((prev) => ({ ...prev, date }));
                if (errors.date) {
                  setErrors((prev) => ({ ...prev, date: "" }));
                }
              }}
              disabled={{ before: new Date() }}
              className="rounded-md border-0"
              classNames={{
                selected: "bg-[var(--gold)] text-white",
                today: "bg-[var(--gold-pale)] dark:bg-[var(--gold)]/20 font-bold",
              }}
            />
          </div>
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>

        {/* Number of Guests */}
        <div>
          <label htmlFor="guests" className="flex items-center space-x-2 text-sm font-medium text-[var(--text-secondary)] dark:text-gray-300 mb-2">
            <Users className="w-4 h-4 text-[var(--gold)]" />
            <span>Number of Guests *</span>
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            className={`input-field w-full bg-[var(--card-bg)] dark:bg-[var(--card-bg)] ${errors.guests ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
          >
            <option value="">Select expected guest count</option>
            {guestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="flex items-center space-x-2 text-sm font-medium text-[var(--text-secondary)] dark:text-gray-300 mb-2">
            <MessageSquare className="w-4 h-4 text-[var(--gold)]" />
            <span>Additional Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="input-field w-full resize-none"
            placeholder="Tell us about any special requirements or preferences..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-[var(--gold)]/30 hover:shadow-2xl hover:shadow-[var(--gold)]/40"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center space-x-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting...</span>
            </span>
          ) : (
            <span>Submit Booking Request</span>
          )}
        </button>

        <p className="text-[var(--text-tertiary)] dark:text-gray-400 text-xs text-center">
          By submitting, you agree to our terms and conditions. Our team will contact you within 24 hours.
        </p>
      </div>
    </motion.form>
  );
}
